import Link from "next/link";
import type { InquiryType } from "@/types/consultation";

type RegistrationCTAProps = {
  heading: string;
  description: string;
  buttonLabel: string;
  // 이 컴포넌트는 real-estate/corporate 두 등기 페이지가 공유하지만, 두
  // 페이지는 상담 폼에서 자동 선택되어야 할 문의 유형이 서로 다르므로
  // (부동산등기/법인등기) 이 부분만 호출부에서 값을 넘겨받습니다. 다른
  // props·DOM·className은 기존과 동일하게 유지합니다(디자인 변경 없음).
  inquiryType: InquiryType;
};

// registration-shared-pattern-audit에서 확인한 대로, RealEstateCTA.tsx와
// CorporateCTA.tsx의 JSX/className이 byte-identical했으므로 이 등기 그룹
// 전용 컴포넌트로 추출합니다. 순수 refactor이므로 DOM/className은 두
// 원본 컴포넌트와 정확히 동일하게 유지합니다(디자인 변경 없음).
//
// RecoveryCTA/BankruptcyCTA는 버튼 2개(상담+자가진단 링크)+설명 문단 없음
// 구조라 이 컴포넌트(버튼 1개+설명 문단 있음)와 구조가 달라 통합하지
// 않습니다.
export default function RegistrationCTA({
  heading,
  description,
  buttonLabel,
  inquiryType,
}: RegistrationCTAProps) {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-200 sm:text-base">
          {description}
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href={`/?inquiry=${inquiryType}#consultation`}
            className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand active:bg-slate-100"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
