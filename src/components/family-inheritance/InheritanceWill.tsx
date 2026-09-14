import {
  INHERITANCE_WILL_HEADING,
  INHERITANCE_WILL_PARAGRAPH_EMPHASIS,
  INHERITANCE_WILL_PARAGRAPHS,
  INHERITANCE_WILL_WARNING,
  INHERITANCE_WILL_WARNING_EMPHASIS,
} from "@/lib/family-inheritance";

// "유언·유증" 섹션입니다. 방식별 절차·유언집행자·후속절차를 짧은
// 문단으로 안내하고, 이 섹션에서 가장 중요한 오해("유언검인 = 유언의
// 실체적 유효성 확정")를 통일된 warning panel로 분명하게 바로잡습니다.
//
// inheritance-page-refine에서, warning panel의 4면 border(및 border-l-4
// accent)를 제거하고 제목 왼쪽 짧은 세로 accent(h-5 w-1.5)로 정리합니다.
// 유언장 발견 시 가장 먼저 확인할 사항(작성 방식)과, 이 섹션의 핵심
// 오해를 바로잡는 문구를 각각 해당 문자열이 있는 곳에서만 <strong>으로
// 강조합니다(emphasis 미일치 시 안전하게 기존과 동일하게 렌더링).
const willWarningEmphasisIndex = INHERITANCE_WILL_WARNING.content.indexOf(INHERITANCE_WILL_WARNING_EMPHASIS);

export default function InheritanceWill() {
  return (
    <section id="will" className="scroll-mt-20 border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {INHERITANCE_WILL_HEADING}
        </h2>
        <div className="mt-6 flex max-w-3xl flex-col gap-3 border-t border-gray-100 pt-6">
          {INHERITANCE_WILL_PARAGRAPHS.map((paragraph) => {
            const emphasisIndex = paragraph.indexOf(INHERITANCE_WILL_PARAGRAPH_EMPHASIS);
            return (
              <p key={paragraph} className="text-sm leading-6 text-gray-700 sm:text-base">
                {emphasisIndex !== -1 ? (
                  <>
                    {paragraph.slice(0, emphasisIndex)}
                    <strong className="font-bold">{INHERITANCE_WILL_PARAGRAPH_EMPHASIS}</strong>
                    {paragraph.slice(emphasisIndex + INHERITANCE_WILL_PARAGRAPH_EMPHASIS.length)}
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
            <span>{INHERITANCE_WILL_WARNING.title}</span>
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {willWarningEmphasisIndex !== -1 ? (
              <>
                {INHERITANCE_WILL_WARNING.content.slice(0, willWarningEmphasisIndex)}
                <strong className="font-bold">{INHERITANCE_WILL_WARNING_EMPHASIS}</strong>
                {INHERITANCE_WILL_WARNING.content.slice(
                  willWarningEmphasisIndex + INHERITANCE_WILL_WARNING_EMPHASIS.length,
                )}
              </>
            ) : (
              INHERITANCE_WILL_WARNING.content
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
