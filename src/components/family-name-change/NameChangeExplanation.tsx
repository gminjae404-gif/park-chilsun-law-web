import {
  NAME_CHANGE_EXPLANATION_HEADING,
  NAME_CHANGE_EXPLANATION_ITEMS,
  NAME_CHANGE_EXPLANATION_PARAGRAPH,
  NAME_CHANGE_EXPLANATION_PARAGRAPH_EMPHASIS,
  NAME_CHANGE_EXPLANATION_WARNING,
} from "@/lib/family-name-change";

// "법원에는 무엇을 설명해야 하나요?" 섹션입니다. 5가지 예시는 동시에
// 해당할 수 있는 병렬적 사정이므로 번호 배지 없이 점(bullet) 목록으로
// 나열합니다. "특정 사유가 있으면 반드시 허가된다"는 오해를 막기 위해
// 통일된 warning panel로 별도 강조하고, 허가율·성공률이나 법원의 특정
// 기관 조회 여부는 이 페이지에서 다루지 않습니다.
//
// name-change-page-refine에서, warning panel의 4면 border(및 border-l-4
// accent)를 제거하고 제목 왼쪽 짧은 세로 accent(h-5 w-1.5)로 정리합니다.
// 또한 단순 변심과 구별되는 실제 정리 대상(본문)과 개명허가의 핵심
// 판단기준(사건마다 개별심사, 경고 패널)을 각각 해당 문자열이 있는
// 곳에서만 <strong>으로 강조합니다(emphasis 미일치 시 안전하게 기존과
// 동일하게 렌더링).
const explanationParagraphEmphasisIndex = NAME_CHANGE_EXPLANATION_PARAGRAPH.indexOf(
  NAME_CHANGE_EXPLANATION_PARAGRAPH_EMPHASIS,
);
const explanationWarningEmphasisIndex = NAME_CHANGE_EXPLANATION_WARNING.emphasis
  ? NAME_CHANGE_EXPLANATION_WARNING.content.indexOf(NAME_CHANGE_EXPLANATION_WARNING.emphasis)
  : -1;

export default function NameChangeExplanation() {
  return (
    <section id="explanation" className="scroll-mt-20 border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {NAME_CHANGE_EXPLANATION_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {explanationParagraphEmphasisIndex !== -1 ? (
            <>
              {NAME_CHANGE_EXPLANATION_PARAGRAPH.slice(0, explanationParagraphEmphasisIndex)}
              <strong className="font-bold">{NAME_CHANGE_EXPLANATION_PARAGRAPH_EMPHASIS}</strong>
              {NAME_CHANGE_EXPLANATION_PARAGRAPH.slice(
                explanationParagraphEmphasisIndex + NAME_CHANGE_EXPLANATION_PARAGRAPH_EMPHASIS.length,
              )}
            </>
          ) : (
            NAME_CHANGE_EXPLANATION_PARAGRAPH
          )}
        </p>

        <ul className="mt-8 flex max-w-3xl flex-col gap-2">
          {NAME_CHANGE_EXPLANATION_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm leading-6 text-gray-700 sm:text-base">
              <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 max-w-3xl rounded-sm bg-slate-50 p-6">
          <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg break-keep">
            <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{NAME_CHANGE_EXPLANATION_WARNING.title}</span>
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {NAME_CHANGE_EXPLANATION_WARNING.emphasis && explanationWarningEmphasisIndex !== -1 ? (
              <>
                {NAME_CHANGE_EXPLANATION_WARNING.content.slice(0, explanationWarningEmphasisIndex)}
                <strong className="font-bold">{NAME_CHANGE_EXPLANATION_WARNING.emphasis}</strong>
                {NAME_CHANGE_EXPLANATION_WARNING.content.slice(
                  explanationWarningEmphasisIndex + NAME_CHANGE_EXPLANATION_WARNING.emphasis.length,
                )}
              </>
            ) : (
              NAME_CHANGE_EXPLANATION_WARNING.content
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
