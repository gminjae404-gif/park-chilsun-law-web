import Link from "next/link";
import {
  NAME_CHANGE_SITUATIONS,
  NAME_CHANGE_SITUATIONS_DESCRIPTION,
  NAME_CHANGE_SITUATIONS_HEADING,
} from "@/lib/family-name-change";

// "현재 어떤 상황인가요?" 6개 상황 선택 카드입니다.
// InheritanceSituations/GuardianshipSituations와 동일한 상호작용
// 언어(hover:border-brand, 화살표 표기)를 재사용합니다. PC 3열/모바일
// 1열이며, 문구가 2줄로 감싸질 수 있어 break-keep으로 어절 단위
// 줄바꿈만 허용합니다.
//
// name-change-page-refine에서, InheritanceSituations/GuardianshipSituations
// 와 동일하게 평상시 border를 border-transparent로 바꿔 4면 테두리가
// 보이지 않도록 하고, hover 시에만 border-brand로 나타나게 합니다.
// border 두께(1px, `border`)는 평상시·hover 모두 동일해 레이아웃
// 이동이 없습니다. hover:text-brand·화살표 이동·transition·
// focus-visible 스타일은 그대로 유지했습니다.
export default function NameChangeSituations() {
  return (
    <section className="border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {NAME_CHANGE_SITUATIONS_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {NAME_CHANGE_SITUATIONS_DESCRIPTION}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {NAME_CHANGE_SITUATIONS.map((situation) => (
            <Link
              key={situation.title}
              href={situation.href}
              className="group flex items-center justify-between gap-3 rounded-sm border border-transparent bg-slate-50 p-5 text-sm font-medium text-gray-800 transition-colors hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:text-base"
            >
              <span className="break-keep">{situation.title}</span>
              <span
                aria-hidden="true"
                className="flex-shrink-0 text-brand transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
