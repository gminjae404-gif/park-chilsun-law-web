import {
  GUARDIANSHIP_NEED_CHECK_EMPHASIS,
  GUARDIANSHIP_NEED_CHECK_HEADING,
  GUARDIANSHIP_NEED_CHECK_PARAGRAPH,
  GUARDIANSHIP_NEED_CHECK_POINTS,
  GUARDIANSHIP_NEED_CHECK_WARNING,
} from "@/lib/family-guardianship";

// "후견이 필요한지 먼저 확인" 섹션입니다. 5가지 확인사항은 순서대로
// 진행하는 절차가 아니라 동시에 살펴볼 수 있는 병렬적 고려사항이므로
// 번호 배지 없이 점(bullet) 목록으로 나열합니다(INHERITANCE_OVERSEAS_
// HEIR_SITUATIONS와 동일한 언어). "고령·거동불편만으로 요건이 충족되지
// 않는다"는 핵심 경고는 EnforcementPreservationNote 이후 이 세션에서
// 계속 재사용해 온 통일된 warning panel로 강조합니다.
//
// guardianship-page-refine에서, warning panel의 4면 border(및 border-l-4
// accent)를 제거하고 LeaseRelatedMatters와 동일한 제목 왼쪽 짧은 세로
// accent(h-5 w-1.5)로 정리합니다. 배경(bg-slate-50)·문구는 그대로
// 유지했습니다.
//
// guardianship-eligibility-emphasis에서, GUARDIANSHIP_TYPE_CARDS의
// card.emphasis와 동일한 방식(정확히 일치하는 부분문자열만 <strong>으로
// 감싸기)으로 이 문단의 핵심 판단기준을 강조합니다. emphasis가 문단에
// 없는 경우(정의되지 않았거나 문자열이 일치하지 않는 경우)에는 안전하게
// 기존과 동일하게 문단을 그대로 렌더링합니다.
const needCheckEmphasisIndex = GUARDIANSHIP_NEED_CHECK_PARAGRAPH.indexOf(GUARDIANSHIP_NEED_CHECK_EMPHASIS);

export default function GuardianshipNeedCheck() {
  return (
    <section id="need-check" className="scroll-mt-20 border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {GUARDIANSHIP_NEED_CHECK_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {needCheckEmphasisIndex !== -1 ? (
            <>
              {GUARDIANSHIP_NEED_CHECK_PARAGRAPH.slice(0, needCheckEmphasisIndex)}
              <strong className="font-bold">{GUARDIANSHIP_NEED_CHECK_EMPHASIS}</strong>
              {GUARDIANSHIP_NEED_CHECK_PARAGRAPH.slice(
                needCheckEmphasisIndex + GUARDIANSHIP_NEED_CHECK_EMPHASIS.length,
              )}
            </>
          ) : (
            GUARDIANSHIP_NEED_CHECK_PARAGRAPH
          )}
        </p>

        <ul className="mt-8 flex max-w-3xl flex-col gap-2">
          {GUARDIANSHIP_NEED_CHECK_POINTS.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm leading-6 text-gray-700 sm:text-base">
              <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-8 max-w-3xl rounded-sm bg-slate-50 p-6">
          <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg break-keep">
            <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{GUARDIANSHIP_NEED_CHECK_WARNING.title}</span>
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {GUARDIANSHIP_NEED_CHECK_WARNING.content}
          </p>
        </div>
      </div>
    </section>
  );
}
