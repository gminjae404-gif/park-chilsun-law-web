import Link from "next/link";
import {
  GUARDIANSHIP_SITUATIONS,
  GUARDIANSHIP_SITUATIONS_DESCRIPTION,
  GUARDIANSHIP_SITUATIONS_HEADING,
} from "@/lib/family-guardianship";

// "현재 어떤 상황인가요?" 6개 상황 선택 카드입니다. /family/inheritance의
// InheritanceSituations와 같은 상호작용 언어(hover:border-brand, 화살표
// 표기)를 재사용하되, 배경 구성은 bg-slate-50 부모 + bg-white 카드로
// 반대로 구성해 같은 시리즈 페이지라는 느낌은 유지하면서도 화면을 열자마자
// 이전 페이지를 그대로 복제한 느낌이 들지 않도록 했습니다. 문구 길이가
// inheritance보다 길어 2줄로 감싸질 수 있어 break-keep으로 단어 중간
// (예: "필요합" / "니다")이 아니라 어절 단위로만 줄바꿈되도록 합니다.
//
// guardianship-situations-interaction-unify에서, 평상시에도 보이던
// border border-gray-200을 InheritanceSituations와 동일한 방식으로
// border-transparent로 바꿔 평상시에는 보이지 않고 hover 시에만
// border-brand로 나타나도록 정리합니다. border 두께(1px, `border`)는
// 평상시·hover 모두 동일해 hover 시 레이아웃이 움직이지 않습니다.
// bg·hover:text-brand·화살표 이동·transition·focus-visible 접근성
// 스타일은 그대로 유지했습니다.
export default function GuardianshipSituations() {
  return (
    <section className="border-b border-gray-200 bg-slate-50 print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {GUARDIANSHIP_SITUATIONS_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {GUARDIANSHIP_SITUATIONS_DESCRIPTION}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GUARDIANSHIP_SITUATIONS.map((situation) => (
            <Link
              key={situation.title}
              href={situation.href}
              className="group flex items-center justify-between gap-3 rounded-sm border border-transparent bg-white p-5 text-sm font-medium text-gray-800 transition-colors hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:text-base"
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
