import Link from "next/link";
import { ENFORCEMENT_HERO } from "@/lib/enforcement";

// 강제집행 페이지 전용 Hero입니다. CivilHero와 시각적 구조와 리듬
// (이미지 없는 text-led, bg-slate-50, primary 버튼+secondary 텍스트링크
// 구성)을 참고하되, 그 컴포넌트를 import하지 않고 강제집행 전용으로
// 독립 구현합니다. 이번 단계에서는 Hero 이미지를 사용하지 않습니다.
//
// 법무사의 업무범위(법원 제출서류의 작성·제출대행과 이에 부수되는
// 업무)를 벗어나는 "강제집행을 대리합니다"·"채권회수를 보장합니다" 등의
// 표현은 사용하지 않았습니다.
//
// enforcement-page-refine에서, /civil/lease·/family/guardianship·
// /family/inheritance·/family/name-change에서 승인된 절제된 수직
// 페이드(from-slate-50 via-slate-50/40 to-white)를 동일하게 적용합니다.
// 바로 다음 섹션(EnforcementIntro)이 bg-white라 흰색으로 끝나는 이
// fade가 자연스럽게 이어집니다. 문구·버튼 구조는 전혀 변경하지
// 않았습니다.
export default function EnforcementHero() {
  return (
    <section className="border-b border-gray-200 bg-gradient-to-b from-slate-50 via-slate-50/40 to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight">
            {ENFORCEMENT_HERO.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {ENFORCEMENT_HERO.lead}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">{ENFORCEMENT_HERO.note}</p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/?inquiry=enforcement#consultation"
              className="inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-brand-dark"
            >
              상담 신청
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-sm text-sm font-medium text-gray-600 underline underline-offset-4 transition-colors hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark"
            >
              전체 업무분야
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
