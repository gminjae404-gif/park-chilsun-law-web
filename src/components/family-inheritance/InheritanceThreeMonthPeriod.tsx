import {
  INHERITANCE_THREE_MONTH_EMPHASIS,
  INHERITANCE_THREE_MONTH_HEADING,
  INHERITANCE_THREE_MONTH_PARAGRAPH,
  INHERITANCE_THREE_MONTH_WARNING,
} from "@/lib/family-inheritance";

// "3개월 기간" 강조 섹션입니다. EnforcementPreservationNote/
// FamilyInheritanceNote와 동일하게 py-16/20이 아닌 py-10의 짧은 강조
// section으로 구성해, 다른 설명형 section들과 구분되는 무게감을
// 줍니다. 핵심은 "사망일부터 무조건 3개월"이 아니라 "상속개시 있음을
// 안 날부터 3개월"이라는 점이며, 개별 사건의 기산일을 단정하지 않는다는
// 점을 통일된 warning panel로 별도 강조합니다.
//
// inheritance-page-refine에서, warning panel의 4면 border(및 border-l-4
// accent)를 제거하고 제목 왼쪽 짧은 세로 accent(h-5 w-1.5)로 정리합니다.
// 또한 이 페이지에서 가장 자주 반복되는 핵심 기준(3개월 기산 기준)을
// guardianship과 동일한 방식(정확히 일치하는 부분문자열만 <strong>으로
// 감싸기)으로 본문에서도 강조합니다. emphasis가 문단에 없는 경우에는
// 안전하게 기존과 동일하게 렌더링합니다.
const threeMonthEmphasisIndex = INHERITANCE_THREE_MONTH_PARAGRAPH.indexOf(INHERITANCE_THREE_MONTH_EMPHASIS);

export default function InheritanceThreeMonthPeriod() {
  return (
    <section className="border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl break-keep">
          {INHERITANCE_THREE_MONTH_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-700 sm:text-base">
          {threeMonthEmphasisIndex !== -1 ? (
            <>
              {INHERITANCE_THREE_MONTH_PARAGRAPH.slice(0, threeMonthEmphasisIndex)}
              <strong className="font-bold">{INHERITANCE_THREE_MONTH_EMPHASIS}</strong>
              {INHERITANCE_THREE_MONTH_PARAGRAPH.slice(
                threeMonthEmphasisIndex + INHERITANCE_THREE_MONTH_EMPHASIS.length,
              )}
            </>
          ) : (
            INHERITANCE_THREE_MONTH_PARAGRAPH
          )}
        </p>

        <div className="mt-6 max-w-3xl rounded-sm bg-slate-50 p-6">
          <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg">
            <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{INHERITANCE_THREE_MONTH_WARNING.title}</span>
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {INHERITANCE_THREE_MONTH_WARNING.content}
          </p>
        </div>
      </div>
    </section>
  );
}
