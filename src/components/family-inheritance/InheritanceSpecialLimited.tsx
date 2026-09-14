import {
  INHERITANCE_SPECIAL_LIMITED_EMPHASIS,
  INHERITANCE_SPECIAL_LIMITED_HEADING,
  INHERITANCE_SPECIAL_LIMITED_PARAGRAPHS,
  INHERITANCE_SPECIAL_LIMITED_WARNING,
} from "@/lib/family-inheritance";

// "특별한정승인" 섹션입니다. 제목 자체가 확정 문구("3개월이 지났다고
// 항상 끝나는 것은 아닙니다")이므로 그대로 h2에 사용합니다. 미성년
// 상속인이 있는 경우 별도 확인이 필요하다는 점은 본문 문단에서 짧게
// 안내하고, "단순히 늦게 알았다는 사정만으로 자동 인정되지 않는다"는
// 취지는 통일된 warning panel로 분리합니다.
//
// inheritance-page-refine에서, warning panel의 4면 border(및 border-l-4
// accent)를 제거하고 제목 왼쪽 짧은 세로 accent(h-5 w-1.5)로 정리합니다.
// 또한 특별한정승인을 검토할 수 있는 핵심 요건을 문단 중 해당 문자열이
// 있는 곳에서만 <strong>으로 강조합니다(emphasis 미일치 시 안전하게
// 기존과 동일하게 렌더링).
export default function InheritanceSpecialLimited() {
  return (
    <section id="special-limited" className="scroll-mt-20 border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {INHERITANCE_SPECIAL_LIMITED_HEADING}
        </h2>
        <div className="mt-6 flex max-w-3xl flex-col gap-3 border-t border-gray-100 pt-6">
          {INHERITANCE_SPECIAL_LIMITED_PARAGRAPHS.map((paragraph) => {
            const emphasisIndex = paragraph.indexOf(INHERITANCE_SPECIAL_LIMITED_EMPHASIS);
            return (
              <p key={paragraph} className="text-sm leading-6 text-gray-700 sm:text-base">
                {emphasisIndex !== -1 ? (
                  <>
                    {paragraph.slice(0, emphasisIndex)}
                    <strong className="font-bold">{INHERITANCE_SPECIAL_LIMITED_EMPHASIS}</strong>
                    {paragraph.slice(emphasisIndex + INHERITANCE_SPECIAL_LIMITED_EMPHASIS.length)}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            );
          })}
        </div>

        <div className="mt-8 max-w-3xl rounded-sm bg-slate-50 p-6">
          <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg">
            <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{INHERITANCE_SPECIAL_LIMITED_WARNING.title}</span>
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {INHERITANCE_SPECIAL_LIMITED_WARNING.content}
          </p>
        </div>
      </div>
    </section>
  );
}
