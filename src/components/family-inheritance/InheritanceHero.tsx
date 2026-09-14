import Link from "next/link";
import { INHERITANCE_HERO } from "@/lib/family-inheritance";

// FamilyHero/CivilHero/EnforcementHero와 동일한 시각 구조(이미지 없는
// text-led, bg-slate-50, primary 버튼+secondary 텍스트링크)를 참고해 이
// 페이지 전용으로 독립 구현합니다. 스펙에서 요구한 대로 공격적인 CTA
// 문구("지금 바로")는 사용하지 않고 상담 신청/전체 가사·상속 안내로만
// 연결합니다. 인쇄 시에는 버튼이 필요 없으므로 print:hidden을 둡니다.
//
// inheritance-page-refine에서, /civil/lease·/family/guardianship에서
// 승인된 절제된 수직 페이드(from-slate-50 via-slate-50/40 to-white)를
// 동일하게 적용합니다. 바로 다음 섹션(InheritanceSituations)이
// bg-white라 흰색으로 끝나는 이 fade가 자연스럽게 이어집니다. 문구·
// 버튼 구조는 전혀 변경하지 않았습니다.
export default function InheritanceHero() {
  return (
    <section className="border-b border-gray-200 bg-gradient-to-b from-slate-50 via-slate-50/40 to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight">
            {INHERITANCE_HERO.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {INHERITANCE_HERO.lead}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">{INHERITANCE_HERO.note}</p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center print:hidden">
            <Link
              href="/?inquiry=family#consultation"
              className="inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-brand-dark"
            >
              상담 신청
            </Link>
            <Link
              href="/family"
              className="inline-flex items-center justify-center rounded-sm text-sm font-medium text-gray-600 underline underline-offset-4 transition-colors hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark"
            >
              가사·상속 전체 안내
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
