"use client";

import { useState, type FormEvent } from "react";
import PrivacyConsent from "./PrivacyConsent";
import ChoiceGroup from "@/components/consultation/ChoiceGroup";
import { formatPhoneInput, parsePhoneInput } from "@/lib/format";
import {
  INITIAL_CONSULTATION_FORM_DATA,
  INQUIRY_TYPE_OPTIONS,
  PREFERRED_TIME_OPTIONS,
  type ConsultationFormData,
  type InquiryType,
} from "@/types/consultation";

type ConsultationFormProps = {
  // 자가진단 결과 화면에서 "상담 신청하기"로 진입한 경우 문의 유형을 미리 채워줍니다.
  // 자가진단의 세부 입력값이나 금액은 넘겨받지 않습니다.
  prefillInquiryType?: InquiryType | null;
  // 서버(page.tsx, Server Component)에서 SMTP/수신 이메일 환경변수가 모두
  // 설정되어 있는지 미리 확인해 내려주는 값입니다. false인 동안에는 서버로
  // 아무 것도 전송하지 않고 기존과 동일하게 동작합니다(입력값이 브라우저
  // 밖으로 전혀 나가지 않음). true가 되어야만 /api/consultation로 실제
  // 전송을 시도합니다.
  emailConfigured: boolean;
};

function validate(data: ConsultationFormData): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!data.name.trim()) errors.name = "이름을 입력해 주세요.";
  if (!data.phone) {
    errors.phone = "연락처를 입력해 주세요.";
  } else if (data.phone.length < 10) {
    errors.phone = "정확한 휴대전화번호를 입력해 주세요.";
  }
  if (!data.inquiryType) errors.inquiryType = "문의 유형을 선택해 주세요.";
  if (!data.agreedToPrivacyPolicy) {
    errors.agreedToPrivacyPolicy = "개인정보 수집·이용에 동의해야 상담 신청이 가능합니다.";
  }
  return errors;
}

type SubmitStatus = "idle" | "sending" | "sent" | "preview" | "error";

export default function ConsultationForm({ prefillInquiryType, emailConfigured }: ConsultationFormProps) {
  // emailConfigured가 false인 동안에는 이 state가 이 컴포넌트 밖으로 전혀
  // 나가지 않습니다(서버 전송·localStorage 저장 없음, 새로고침하면
  // 사라짐). true인 경우에만 제출 시 /api/consultation으로 전송합니다.
  const [data, setData] = useState<ConsultationFormData>(INITIAL_CONSULTATION_FORM_DATA);
  const [hasAttempted, setHasAttempted] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  // prefillInquiryType prop이 바뀌었을 때(자가진단 결과에서 "상담 신청하기"를 누른 경우)
  // 렌더링 중에 문의 유형만 반영합니다. (React 권장 패턴: prop 변경에 따른 state 조정)
  const [prevPrefill, setPrevPrefill] = useState(prefillInquiryType);
  if (prefillInquiryType !== prevPrefill) {
    setPrevPrefill(prefillInquiryType);
    if (prefillInquiryType) {
      setData((prev) => ({ ...prev, inquiryType: prefillInquiryType }));
    }
  }

  const updateField = <K extends keyof ConsultationFormData>(
    field: K,
    value: ConsultationFormData[K],
  ) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setStatus("idle");
  };

  const errors = validate(data);
  const visibleErrors = hasAttempted ? errors : {};

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.keys(errors).length > 0) {
      setHasAttempted(true);
      setStatus("idle");
      return;
    }

    if (!emailConfigured) {
      // 실제 수신 이메일·전송 설정이 끝나기 전까지는 아무 것도 전송하지
      // 않고 안내 문구만 표시합니다.
      setStatus("preview");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          preferredTime: data.preferredTime,
          inquiryType: data.inquiryType,
          message: data.message,
        }),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* 상담 영역의 "홈페이지 상담신청" 채널 버튼(ConsultationCTA)이 이
          id로 스크롤 이동합니다. 모바일에서는 sticky header(안내 배너
          포함 시 약 110px)에 가려지지 않도록 scroll-mt로 여유를 둡니다. */}
      <div id="consultation-form-start" className="scroll-mt-32">
        <label htmlFor="consultationName" className="text-sm font-semibold text-gray-900">
          이름
        </label>
        <input
          id="consultationName"
          type="text"
          autoComplete="name"
          value={data.name}
          onChange={(event) => updateField("name", event.target.value)}
          aria-invalid={Boolean(visibleErrors.name)}
          aria-describedby={visibleErrors.name ? "consultationName-error" : undefined}
          className={`mt-2 w-full rounded-sm border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand ${
            visibleErrors.name ? "border-red-500" : "border-gray-300 focus:border-brand"
          }`}
        />
        {visibleErrors.name && (
          <p id="consultationName-error" className="mt-2 text-sm text-red-600">
            {visibleErrors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="consultationPhone" className="text-sm font-semibold text-gray-900">
          연락처
        </label>
        <input
          id="consultationPhone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          value={formatPhoneInput(data.phone)}
          onChange={(event) => updateField("phone", parsePhoneInput(event.target.value))}
          placeholder="010-1234-5678"
          aria-invalid={Boolean(visibleErrors.phone)}
          aria-describedby={visibleErrors.phone ? "consultationPhone-error" : undefined}
          className={`mt-2 w-full rounded-sm border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand ${
            visibleErrors.phone ? "border-red-500" : "border-gray-300 focus:border-brand"
          }`}
        />
        {visibleErrors.phone && (
          <p id="consultationPhone-error" className="mt-2 text-sm text-red-600">
            {visibleErrors.phone}
          </p>
        )}
      </div>

      <ChoiceGroup
        legend="상담 희망 시간"
        name="preferredTime"
        options={PREFERRED_TIME_OPTIONS}
        value={data.preferredTime}
        onChange={(value) => updateField("preferredTime", value)}
        columns={3}
      />

      <ChoiceGroup
        legend="문의 유형"
        name="inquiryType"
        options={INQUIRY_TYPE_OPTIONS}
        value={data.inquiryType}
        onChange={(value) => updateField("inquiryType", value)}
        error={visibleErrors.inquiryType}
      />

      <div>
        <label htmlFor="consultationMessage" className="text-sm font-semibold text-gray-900">
          문의 내용
        </label>
        <textarea
          id="consultationMessage"
          rows={4}
          value={data.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="mt-2 w-full rounded-sm border border-gray-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
        <p className="mt-2 text-xs text-gray-500">
          주민등록번호, 계좌번호, 카드번호 등 민감한 정보는 입력하지 마세요.
        </p>
      </div>

      <PrivacyConsent
        checked={data.agreedToPrivacyPolicy}
        onChange={(checked) => updateField("agreedToPrivacyPolicy", checked)}
        error={visibleErrors.agreedToPrivacyPolicy}
      />

      <button
        type="submit"
        disabled={!data.agreedToPrivacyPolicy || status === "sending"}
        className="inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-brand disabled:active:bg-brand"
      >
        {status === "sending" ? "전송 중..." : "상담 신청"}
      </button>

      <p role="status" aria-live="polite" className="min-h-10 text-sm text-gray-600">
        {status === "preview" &&
          "현재는 상담신청 기능을 준비 중입니다. 입력하신 정보는 전송되거나 저장되지 않았습니다."}
        {status === "sent" && "상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다."}
        {status === "error" &&
          "일시적인 오류로 접수에 실패했습니다. 대표전화 또는 카카오톡으로 문의해 주세요."}
      </p>
    </form>
  );
}
