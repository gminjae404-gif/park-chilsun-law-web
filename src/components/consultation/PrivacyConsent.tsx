"use client";

import Link from "next/link";

type PrivacyConsentProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
};

// 보유·이용 기간은 실제 운영정책이 확정되기 전까지 임의의 기간(예: 1년, 3년)으로
// 정하지 않고 placeholder로만 표시합니다.
const PRIVACY_NOTICE_ITEMS: { label: string; value: string }[] = [
  { label: "수집·이용 목적", value: "상담 신청 접수 및 상담 연락" },
  { label: "수집 항목", value: "이름, 연락처, 상담 희망 시간, 문의 유형, 문의 내용" },
  { label: "보유·이용 기간", value: "실제 운영정책 확정 후 입력 예정" },
  { label: "동의를 거부할 권리", value: "동의를 거부할 수 있음" },
  {
    label: "동의 거부에 따른 안내",
    value: "필수 정보 수집에 동의하지 않으면 온라인 상담 신청 기능을 이용할 수 없음",
  },
];

export default function PrivacyConsent({ checked, onChange, error }: PrivacyConsentProps) {
  return (
    <div className="border border-gray-200 p-4">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm text-sm font-semibold text-gray-900 [&::-webkit-details-marker]:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand">
          개인정보 수집·이용 동의
          <span
            aria-hidden="true"
            className="flex-shrink-0 text-lg font-light text-brand transition-transform duration-150 group-open:rotate-45"
          >
            +
          </span>
        </summary>
        <dl className="mt-3 flex flex-col gap-2 text-sm leading-6 text-gray-600">
          {PRIVACY_NOTICE_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="flex-shrink-0 font-medium text-gray-700 sm:w-36">{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </details>

      <p className="mt-3 text-sm">
        <Link
          href="/privacy-policy"
          className="rounded-sm font-medium text-gray-600 underline-offset-4 transition-colors hover:text-brand hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          개인정보처리방침 자세히 보기
        </Link>
      </p>

      <label className="mt-4 flex items-start gap-2 border-t border-gray-100 pt-4 text-sm text-gray-800">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "privacy-consent-error" : undefined}
          className="mt-0.5 h-4 w-4 flex-shrink-0 border-gray-300 text-brand focus:ring-brand"
        />
        <span>(필수) 위 개인정보 수집·이용에 동의합니다.</span>
      </label>
      {error && (
        <p id="privacy-consent-error" className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
