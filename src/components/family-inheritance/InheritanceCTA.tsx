import Link from "next/link";
import { INHERITANCE_CTA } from "@/lib/family-inheritance";

// 마지막 "하단 안내 + 상담 CTA" 섹션입니다. 공용 CTA 컴포넌트를
// 공유하지 않고, 다른 모든 상세페이지(FamilyCTA/CivilCTA/EnforcementCTA
// 등)와 동일하게 이 페이지 전용으로 독립 구현합니다("제목+설명+상담신청
// 버튼 1개, bg-brand" 패턴). 스펙의 "하단 안내" 문구는 이 CTA의
// description으로 그대로 사용해, 기존 페이지들의 CTA가 이미 마무리
// 안내문 성격의 문장을 담아온 관례를 그대로 따릅니다.
export default function InheritanceCTA() {
  return (
    <section className="bg-brand print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl break-keep">
          {INHERITANCE_CTA.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base">
          {INHERITANCE_CTA.description}
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/?inquiry=family#consultation"
            className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand active:bg-slate-100"
          >
            {INHERITANCE_CTA.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
