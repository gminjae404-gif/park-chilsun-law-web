import Link from "next/link";
import { GUARDIANSHIP_HERO } from "@/lib/family-guardianship";

// /family/inheritance의 InheritanceHero와 같은 계열(이미지 없는 text-led,
// bg-slate-50, primary 버튼+secondary 텍스트링크)을 참고하되, 완전히
// 같은 문구 배치로 복제된 느낌이 나지 않도록 보조문구(note)를 "네 가지
// 제도의 차이를 확인해 보라"는 이 페이지만의 안내로 구성했습니다.
//
// guardianship-page-refine에서, 단색 bg-slate-50이 평평해 보인다는
// 피드백에 따라 /civil/lease의 LeaseHero에서 승인된 절제된 수직
// 페이드(from-slate-50 via-slate-50/40 to-white)를 동일하게 적용합니다.
// 바로 다음 섹션(GuardianshipSituations)도 bg-slate-50이라 흰색으로
// 끝나는 이 fade는 LeaseHero→LeaseProblems(bg-slate-50)와 동일한
// 전례입니다. 문구·버튼 구조는 전혀 변경하지 않았습니다.
export default function GuardianshipHero() {
  return (
    <section className="border-b border-gray-200 bg-gradient-to-b from-slate-50 via-slate-50/40 to-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight break-keep">
            {GUARDIANSHIP_HERO.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {GUARDIANSHIP_HERO.lead}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">{GUARDIANSHIP_HERO.note}</p>
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
