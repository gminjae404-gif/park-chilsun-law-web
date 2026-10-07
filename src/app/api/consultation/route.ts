import { NextResponse } from "next/server";
import { isInquiryType, MAX_MESSAGE_LENGTH, MAX_NAME_LENGTH, type PreferredTime } from "@/types/consultation";
import {
  isConsultationEmailConfigured,
  sendConsultationEmail,
  type ConsultationEmailPayload,
} from "@/lib/consultation-email";

// 홈페이지 상담신청 폼 전용 API route입니다. 이 route는 다음만 수행합니다.
//  1) 가벼운 bot 방어(same-origin 확인, honeypot, 최소 제출시간)
//  2) 요청 본문을 최소한으로 검증(길이 제한 포함)
//  3) 환경변수(SMTP_HOST/SMTP_USER/SMTP_PASSWORD/CONSULTATION_RECEIVER_EMAIL)가
//     모두 설정된 경우에만 사무실 이메일로 상담 내용을 전송
//  4) 성공/실패 여부만 응답 — 어떤 저장소에도 상담내용을 남기지 않습니다.
//
// 환경변수가 아직 설정되지 않은 동안에는 503과 함께 "not_configured"를
// 반환하며, 이 요청 자체가 이메일 전송이나 저장으로 이어지지 않습니다.
// 클라이언트(ConsultationForm)는 이 사실을 페이지 렌더링 시점에 서버에서
// 미리 계산한 emailConfigured prop으로 이미 알고 있으므로, 설정 전에는
// 이 route를 호출하지 않고 대신 전화·이메일 안내만 표시합니다 — 즉
// 설정 전에는 상담 내용이 브라우저 밖으로 전혀 전송되지 않는 기존 동작이
// 그대로 유지됩니다. 이 route 자체의 not_configured 분기는 방어적
// 이중 확인입니다.
//
// 아래 bot 방어는 전부 이 서버리스 함수 하나 안에서만 동작하는 가벼운
// 휴리스틱입니다(외부 서비스·Redis/KV 등 신규 저장소를 추가하지 않음).
// 서버리스 인스턴스 간 공유되는 신뢰 가능한 영구 저장소가 없어 IP별
// 요청 횟수를 세는 rate limiting은 이 route 코드만으로는 신뢰성 있게
// 구현할 수 없습니다 — 거짓으로 "구현됨"이라고 표시하지 않고, 완료보고에
// 운영 설정(Vercel Firewall) 또는 외부 서비스가 필요하다는 사실만
// 정확히 남깁니다.
const PREFERRED_TIME_VALUES: PreferredTime[] = ["morning", "afternoon", "evening", "any"];
// 클라이언트 parsePhoneInput()이 이미 숫자만·최대 11자리로 정규화하므로
// 정상 제출은 항상 이 형태입니다. 직접 POST로 우회하는 요청만 걸러냅니다.
const PHONE_PATTERN = /^\d{10,11}$/;
// 폼이 렌더된 시각부터 이 값(ms) 미만으로 제출되면 사람이 입력할 수
// 없는 속도로 판단해 거부합니다(스크립트형 즉시 제출 bot 완화용 — 클라이언트가
// 보낸 시각을 그대로 신뢰하는 best-effort 휴리스틱이며 강한 보장은 아닙니다).
const MIN_SUBMIT_MS = 1500;

function isPreferredTime(value: unknown): value is PreferredTime {
  return typeof value === "string" && PREFERRED_TIME_VALUES.includes(value as PreferredTime);
}

// Origin 헤더가 이 요청 자신의 Host와 같은지만 비교합니다. SITE_URL 같은
// 고정 값과 비교하지 않으므로 로컬 개발(localhost)·Vercel preview 배포·
// production 전부에서 동일하게 동작합니다. Origin이 아예 없는 요청은
// (일부 정상 브라우저 상황을 과도하게 막지 않기 위해) 막지 않습니다.
function isSameOriginRequest(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const host = request.headers.get("host");
  if (!host) return true;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ ok: false, reason: "invalid_request" }, { status: 403 });
  }

  if (!isConsultationEmailConfigured()) {
    return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "invalid_body" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ ok: false, reason: "invalid_body" }, { status: 400 });
  }

  const { name, phone, preferredTime, inquiryType, message, honeypot, renderedAt } =
    body as Record<string, unknown>;

  // honeypot: 화면에 보이지 않는 필드로, 사람은 채울 수 없고 일부
  // 자동입력 bot만 채웁니다. 값이 있으면 조용히 거부합니다.
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return NextResponse.json({ ok: false, reason: "invalid_request" }, { status: 400 });
  }

  if (typeof renderedAt !== "number" || !Number.isFinite(renderedAt)) {
    return NextResponse.json({ ok: false, reason: "invalid_request" }, { status: 400 });
  }
  const elapsedMs = Date.now() - renderedAt;
  if (elapsedMs < MIN_SUBMIT_MS) {
    return NextResponse.json({ ok: false, reason: "invalid_request" }, { status: 400 });
  }

  if (
    typeof name !== "string" ||
    !name.trim() ||
    name.trim().length > MAX_NAME_LENGTH
  ) {
    return NextResponse.json({ ok: false, reason: "invalid_name" }, { status: 400 });
  }
  if (typeof phone !== "string" || !PHONE_PATTERN.test(phone.trim())) {
    return NextResponse.json({ ok: false, reason: "invalid_phone" }, { status: 400 });
  }
  if (typeof inquiryType !== "string" || !isInquiryType(inquiryType)) {
    return NextResponse.json({ ok: false, reason: "invalid_inquiry_type" }, { status: 400 });
  }
  if (typeof message === "string" && message.trim().length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ ok: false, reason: "invalid_message" }, { status: 400 });
  }

  const payload: ConsultationEmailPayload = {
    name: name.trim(),
    phone: phone.trim(),
    preferredTime: isPreferredTime(preferredTime) ? preferredTime : null,
    inquiryType,
    message: typeof message === "string" ? message.trim() : "",
  };

  const result = await sendConsultationEmail(payload);
  if (!result.ok) {
    return NextResponse.json({ ok: false, reason: result.error }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
