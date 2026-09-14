import {
  INHERITANCE_OVERSEAS_HEIR_HEADING,
  INHERITANCE_OVERSEAS_HEIR_INTRO,
  INHERITANCE_OVERSEAS_HEIR_SITUATIONS,
  INHERITANCE_OVERSEAS_HEIR_WARNING,
  INHERITANCE_OVERSEAS_HEIR_WARNING_EMPHASIS,
} from "@/lib/family-inheritance";

// "해외 상속인" 섹션입니다. 5가지 상황은 동시에 해당할 수도, 하나만
// 해당할 수도 있는 병렬 목록이므로 번호 배지 없이 점(bullet) 목록으로
// 나열합니다. 이 섹션에서 가장 중요한 것은 "해외에서 먼저 임의로
// 공증받지 마세요"라는 경고이므로, 통일된 warning panel로 별도
// 강조합니다.
//
// inheritance-page-refine에서, warning panel의 4면 border(및 border-l-4
// accent)를 제거하고 제목 왼쪽 짧은 세로 accent(h-5 w-1.5)로 정리합니다.
// 또한 이 섹션의 가장 대표적인 오해("해외 서류=무조건 아포스티유
// 필요")를 바로잡는 부분을 <strong>으로 강조합니다(emphasis 미일치 시
// 안전하게 기존과 동일하게 렌더링).
const overseasHeirWarningEmphasisIndex = INHERITANCE_OVERSEAS_HEIR_WARNING.content.indexOf(
  INHERITANCE_OVERSEAS_HEIR_WARNING_EMPHASIS,
);

export default function InheritanceOverseasHeir() {
  return (
    <section id="overseas-heir" className="scroll-mt-20 border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {INHERITANCE_OVERSEAS_HEIR_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {INHERITANCE_OVERSEAS_HEIR_INTRO}
        </p>

        <ul className="mt-8 flex max-w-3xl flex-col gap-2">
          {INHERITANCE_OVERSEAS_HEIR_SITUATIONS.map((situation) => (
            <li key={situation} className="flex items-start gap-2 text-sm leading-6 text-gray-700 sm:text-base">
              <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
              {situation}
            </li>
          ))}
        </ul>

        <div className="mt-8 max-w-3xl rounded-sm bg-slate-50 p-6">
          <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg">
            <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{INHERITANCE_OVERSEAS_HEIR_WARNING.title}</span>
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {overseasHeirWarningEmphasisIndex !== -1 ? (
              <>
                {INHERITANCE_OVERSEAS_HEIR_WARNING.content.slice(0, overseasHeirWarningEmphasisIndex)}
                <strong className="font-bold">{INHERITANCE_OVERSEAS_HEIR_WARNING_EMPHASIS}</strong>
                {INHERITANCE_OVERSEAS_HEIR_WARNING.content.slice(
                  overseasHeirWarningEmphasisIndex + INHERITANCE_OVERSEAS_HEIR_WARNING_EMPHASIS.length,
                )}
              </>
            ) : (
              INHERITANCE_OVERSEAS_HEIR_WARNING.content
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
