import {
  INHERITANCE_DIVISION_HEADING,
  INHERITANCE_DIVISION_PARAGRAPH_EMPHASIS,
  INHERITANCE_DIVISION_PARAGRAPHS,
  INHERITANCE_DIVISION_WARNINGS,
} from "@/lib/family-inheritance";

// "상속재산분할" 섹션입니다. 협의분할·조정·심판의 일반적인 흐름을
// 문단으로 짧게 설명하고, 요구된 두 가지 경고(① 재산을 받는 사람과
// 채무 부담자가 다를 수 있음 ② 등기 후 재분할 시 문제)를 통일된
// warning panel 2개로 나란히(세로로) 배치합니다. 두 경고는 서로 다른
// 주제이므로 하나로 합치지 않고 개별 panel로 분리해 각각의 내용이
// 분명하게 전달되도록 했습니다.
//
// inheritance-page-refine에서, 두 warning panel의 4면 border(및
// border-l-4 accent)를 제거하고 제목 왼쪽 짧은 세로 accent(h-5 w-1.5)로
// 정리합니다. 협의분할의 핵심 요건(공동상속인 전원 참여)과 첫 번째
// 경고의 핵심 효과(채무는 자동으로 한 사람에게만 귀속되지 않음)를
// 각각 해당 문자열이 있는 곳에서만 <strong>으로 강조합니다(emphasis
// 미일치 시 안전하게 기존과 동일하게 렌더링).
export default function InheritanceDivision() {
  return (
    <section id="division" className="scroll-mt-20 border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {INHERITANCE_DIVISION_HEADING}
        </h2>
        <div className="mt-6 flex max-w-3xl flex-col gap-3 border-t border-gray-100 pt-6">
          {INHERITANCE_DIVISION_PARAGRAPHS.map((paragraph) => {
            const emphasisIndex = paragraph.indexOf(INHERITANCE_DIVISION_PARAGRAPH_EMPHASIS);
            return (
              <p key={paragraph} className="text-sm leading-6 text-gray-700 sm:text-base">
                {emphasisIndex !== -1 ? (
                  <>
                    {paragraph.slice(0, emphasisIndex)}
                    <strong className="font-bold">{INHERITANCE_DIVISION_PARAGRAPH_EMPHASIS}</strong>
                    {paragraph.slice(emphasisIndex + INHERITANCE_DIVISION_PARAGRAPH_EMPHASIS.length)}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            );
          })}
        </div>

        <div className="mt-8 flex max-w-3xl flex-col gap-4">
          {INHERITANCE_DIVISION_WARNINGS.map((warning) => {
            const emphasisIndex = warning.emphasis ? warning.content.indexOf(warning.emphasis) : -1;
            return (
              <div key={warning.title} className="rounded-sm bg-slate-50 p-6">
                <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg">
                  <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{warning.title}</span>
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                  {warning.emphasis && emphasisIndex !== -1 ? (
                    <>
                      {warning.content.slice(0, emphasisIndex)}
                      <strong className="font-bold">{warning.emphasis}</strong>
                      {warning.content.slice(emphasisIndex + warning.emphasis.length)}
                    </>
                  ) : (
                    warning.content
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
