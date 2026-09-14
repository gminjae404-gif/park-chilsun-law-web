"use client";

import { useState, type FormEvent } from "react";
import PrivacyConsent from "./PrivacyConsent";
import ChoiceGroup from "@/components/self-check/ChoiceGroup";
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

export default function ConsultationForm({ prefillInquiryType }: ConsultationFormProps) {
  // 상담 신청 입력값은 이 컴포넌트의 state에만 존재하며,
  // 서버 전송이나 localStorage 저장을 하지 않습니다. 새로고침하면 사라집니다.
  const [data, setData] = useState<ConsultationFormData>(INITIAL_CONSULTATION_FORM_DATA);
  const [hasAttempted, setHasAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(false);
  };

  const errors = validate(data);
  const visibleErrors = hasAttempted ? errors : {};

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.keys(errors).length > 0) {
      setHasAttempted(true);
      setSubmitted(false);
      return;
    }
    // 실제 전송·저장 기능은 아직 구현하지 않았습니다. 안내 문구만 표시합니다.
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div>
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
        disabled={!data.agreedToPrivacyPolicy}
        className="inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-brand disabled:active:bg-brand"
      >
        상담 신청
      </button>

      <p role="status" aria-live="polite" className="min-h-10 text-sm text-gray-600">
        {submitted &&
          "현재는 상담신청 기능을 준비 중입니다. 입력하신 정보는 전송되거나 저장되지 않았습니다."}
      </p>
    </form>
  );
}
