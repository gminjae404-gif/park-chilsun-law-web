import Link from "next/link";
import { NAME_CHANGE_HERO } from "@/lib/family-name-change";

// /family/inheritance·/family/guardianship과 같은 계열(이미지 없는
// text-led, bg-slate-50, primary 버튼+secondary 텍스트링크)을 그대로
// 재사용한 Hero입니다.
//
// name-change-page-refine에서, /civil/lease·/family/guardianship·
// /family/inheritance에서 승인된 절제된 수직 페이드(from-slate-50
// via-slate-50/40 to-white)를 동일하게 적용합니다. 바로 다음 섹션
// (NameChangeSituations)이 bg-white라 흰색으로 끝나는 이 fade가
// 자연스럽게 이어집니다. 문구·버튼 구조는 전혀 변경하지 않았습니다.
export default function NameChangeHero() {
  return (
    <section className="border-b border-gray-200 bg-gradient-to-b from-slate-50 via-slate-50/40 to-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight break-keep">
            {NAME_CHANGE_HERO.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {NAME_CHANGE_HERO.lead}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">{NAME_CHANGE_HERO.note}</p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
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
