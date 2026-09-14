// 서버 전용 모듈입니다. API route(src/app/api/consultation/route.ts)와
// 홈 페이지(Server Component)에서만 import합니다. "use client" 컴포넌트에서
// 이 파일을 직접 import하지 마세요(nodemailer는 Node 런타임 전용이며
// 브라우저에서 동작하지 않습니다).
//
// 실제 상담 수신 이메일 주소와 SMTP 인증정보는 소스코드에 절대 하드코딩하지
// 않고, 아래 5개 환경변수로만 읽습니다. 실제 운영 전환 시 Vercel
// Environment Variables에 이 값들을 등록하면 별도 코드 수정 없이 자동으로
// 이메일 전송 기능이 켜집니다(값이 없으면 상담폼은 지금과 동일하게 DEMO
// 안내만 표시하고 아무 것도 전송하지 않습니다).
//
//   SMTP_HOST                 예: smtp.gmail.com, smtp.naver.com 등
//   SMTP_PORT                 예: 465(SSL) 또는 587(STARTTLS)
//   SMTP_USER                 발신 계정(로그인 아이디, 보통 이메일 주소)
//   SMTP_PASSWORD             발신 계정 비밀번호 또는 앱 비밀번호
//   CONSULTATION_RECEIVER_EMAIL   상담 내용을 받을 사무실 실제 이메일 주소
//
// 상담내용을 DB 등에 별도로 저장하지 않으며, 이메일 전송 성공/실패 여부만
// 호출한 곳에 반환합니다.
import nodemailer from "nodemailer";
import { INQUIRY_TYPE_OPTIONS, PREFERRED_TIME_OPTIONS } from "@/types/consultation";
import type { ConsultationFormData } from "@/types/consultation";

const REQUIRED_ENV_KEYS = [
  "SMTP_HOST",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "CONSULTATION_RECEIVER_EMAIL",
] as const;

// 위 5개 환경변수가 모두 채워져 있는지만 확인합니다. 값 자체를 반환하거나
// 로그로 남기지 않습니다.
export function isConsultationEmailConfigured(): boolean {
  return REQUIRED_ENV_KEYS.every((key) => Boolean(process.env[key]?.trim()));
}

function findLabel(options: { value: string; label: string }[], value: string | null): string {
  if (!value) return "선택 안 함";
  return options.find((option) => option.value === value)?.label ?? value;
}

export type ConsultationEmailPayload = Pick<
  ConsultationFormData,
  "name" | "phone" | "preferredTime" | "inquiryType" | "message"
>;

export async function sendConsultationEmail(
  payload: ConsultationEmailPayload,
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!isConsultationEmailConfigured()) {
    return { ok: false, error: "not_configured" };
  }

  const host = process.env.SMTP_HOST!;
  const port = Number(process.env.SMTP_PORT ?? "465");
  const user = process.env.SMTP_USER!;
  const pass = process.env.SMTP_PASSWORD!;
  const to = process.env.CONSULTATION_RECEIVER_EMAIL!;

  const inquiryLabel = findLabel(INQUIRY_TYPE_OPTIONS, payload.inquiryType);
  const preferredTimeLabel = findLabel(PREFERRED_TIME_OPTIONS, payload.preferredTime);

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"법무사 박칠선 사무소 홈페이지" <${user}>`,
      to,
      replyTo: undefined,
      subject: `[홈페이지 상담신청] ${inquiryLabel} - ${payload.name}`,
      text: [
        `이름: ${payload.name}`,
        `연락처: ${payload.phone}`,
        `문의 유형: ${inquiryLabel}`,
        `상담 희망 시간: ${preferredTimeLabel}`,
        "",
        "문의 내용:",
        payload.message?.trim() || "(작성하지 않음)",
      ].join("\n"),
    });

    return { ok: true };
  } catch (error) {
    console.error("[consultation-email] 전송 실패:", error);
    return { ok: false, error: "send_failed" };
  }
}
