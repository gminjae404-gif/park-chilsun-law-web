import Link from "next/link";
import {
  INHERITANCE_SITUATIONS,
  INHERITANCE_SITUATIONS_DESCRIPTION,
  INHERITANCE_SITUATIONS_HEADING,
} from "@/lib/family-inheritance";

// "현재 어떤 상황인가요?" 8개 상황 선택 카드입니다. FamilyDocuments의
// bg-white 부모 + bg-slate-50 카드 관례를 재사용하되, 여기서는 각 카드가
// 페이지 내 관련 section으로 이동하는 링크라는 점에서 Header 드롭다운
// 링크와 동일한 hover:border-brand/hover:text-brand 상호작용 언어를
// 사용합니다(새 색상·아이콘 없이 기존 화살표 "→"는 FAQPreview의
// 전체보기 링크에서 이미 사용한 표기를 재사용). 인쇄 시에는 안내
// 문서로서 의미가 없어 print:hidden 처리합니다.
//
// inheritance-page-refine에서, 4면 border를 제거합니다. 배경(bg-slate-50
// on bg-white)·hover:text-brand·화살표 이동 효과·spacing은 그대로
// 유지해 border 없이도 클릭 가능한 링크임이 충분히 드러나도록 했습니다.
//
// inheritance-page-refine 보정에서, /family/guardianship의
// GuardianshipSituations와 동일한 hover interaction(border-brand,
// transition-colors)을 재사용하되, 평상시에는 border가 보이지 않도록
// border-transparent를 기본값으로 둡니다. border 두께(1px, `border`)는
// 평상시·hover 모두 동일해 hover 시 레이아웃이 움직이지 않습니다.
export default function InheritanceSituations() {
  return (
    <section className="border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {INHERITANCE_SITUATIONS_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {INHERITANCE_SITUATIONS_DESCRIPTION}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INHERITANCE_SITUATIONS.map((situation) => (
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
