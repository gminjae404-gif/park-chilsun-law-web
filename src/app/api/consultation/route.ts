import { NextResponse } from "next/server";
import { isInquiryType, type PreferredTime } from "@/types/consultation";
import {
  isConsultationEmailConfigured,
  sendConsultationEmail,
  type ConsultationEmailPayload,
} from "@/lib/consultation-email";

// 홈페이지 상담신청 폼 전용 API route입니다. 이 route는 다음만 수행합니다.
//  1) 요청 본문을 최소한으로 검증
//  2) 환경변수(SMTP_HOST/SMTP_USER/SMTP_PASSWORD/CONSULTATION_RECEIVER_EMAIL)가
//     모두 설정된 경우에만 사무실 이메일로 상담 내용을 전송
//  3) 성공/실패 여부만 응답 — 어떤 저장소에도 상담내용을 남기지 않습니다.
//
// 환경변수가 아직 설정되지 않은 동안에는 503과 함께 "not_configured"를
// 반환하며, 이 요청 자체가 이메일 전송이나 저장으로 이어지지 않습니다.
// 클라이언트(ConsultationForm)는 이 사실을 페이지 렌더링 시점에 서버에서
// 미리 계산한 emailConfigured prop으로 이미 알고 있으므로, 설정 전에는
// 이 route를 호출하지 않고 기존 DEMO 안내만 표시합니다 — 즉 설정 전에는
// 상담 내용이 브라우저 밖으로 전혀 전송되지 않는 기존 동작이 그대로
// 유지됩니다. 이 route 자체의 not_configured 분기는 방어적 이중 확인입니다.
const PREFERRED_TIME_VALUES: PreferredTime[] = ["morning", "afternoon", "evening", "any"];

function isPreferredTime(value: unknown): value is PreferredTime {
  return typeof value === "string" && PREFERRED_TIME_VALUES.includes(value as PreferredTime);
}

export async function POST(request: Request) {
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

  const { name, phone, preferredTime, inquiryType, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ ok: false, reason: "invalid_name" }, { status: 400 });
  }
  if (typeof phone !== "string" || phone.trim().length < 10) {
    return NextResponse.json({ ok: false, reason: "invalid_phone" }, { status: 400 });
  }
  if (typeof inquiryType !== "string" || !isInquiryType(inquiryType)) {
    return NextResponse.json({ ok: false, reason: "invalid_inquiry_type" }, { status: 400 });
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
