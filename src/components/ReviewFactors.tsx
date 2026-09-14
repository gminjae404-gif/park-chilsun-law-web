import Link from "next/link";
import { REVIEW_FACTORS } from "@/lib/constants";

// box-density-audit(카드/박스 밀도 1차 감사)에서 지적된 대로, 이 카드
// 그리드에만 남아 있던 hover elevation(translate/border/shadow)과 그
// 전환에만 쓰이던 transition을 제거합니다. BankruptcyDischargeReview·
// RequiredDocuments·RegistrationDocumentsSection 등 이미 사이트 전역에
// 적용된 "카드는 유지하되 hover elevation만 제거" 원칙에 맞춘
// 것으로, 배경·테두리·간격·타이포그래피·데이터·구조는 전혀 바꾸지
// 않았습니다.
export default function ReviewFactors() {
  return (
    <section id="review-factors" className="scroll-mt-20 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          개인회생 검토의 기본 요소
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {REVIEW_FACTORS.map((factor) => (
            <li key={factor.title} className="rounded-sm border border-gray-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-gray-900">{factor.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{factor.description}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Link
            href="/individual-recovery"
            className="inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-brand transition-colors hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark"
          >
            개인회생 자세히 알아보기
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
