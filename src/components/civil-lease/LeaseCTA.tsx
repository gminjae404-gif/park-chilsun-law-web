import Link from "next/link";
import { LEASE_CTA } from "@/lib/civil-lease";

// "제목+설명+상담신청 버튼 1개, bg-brand" 패턴입니다. CivilCTA/
// EnforcementCTA/InheritanceCTA 등 다른 모든 상세페이지와 동일하게
// 공용 컴포넌트를 공유하지 않고 이 페이지 전용으로 독립 구현합니다.
// prefill은 /civil, /enforcement와 동일한 civil-enforcement를 사용합니다.
export default function LeaseCTA() {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {LEASE_CTA.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-200 sm:text-base">
          {LEASE_CTA.description}
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/?inquiry=civil#consultation"
            className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand active:bg-slate-100"
          >
            {LEASE_CTA.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
