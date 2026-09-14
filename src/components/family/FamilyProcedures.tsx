import {
  FAMILY_PROCEDURES,
  FAMILY_PROCEDURES_DESCRIPTION,
  FAMILY_PROCEDURES_DESCRIPTION_EMPHASIS,
  FAMILY_PROCEDURES_HEADING,
} from "@/lib/family";

// "사건별로 절차가 다르다"는 것을 보여주는 병렬 section입니다. 공용
// ProcessSection(timeline)은 사용하지 않습니다 — 혼인·이혼/친자·입양/
// 후견/상속은 시작 조건과 진행절차가 서로 다른 별개 영역이므로,
// "1→2→3단계"처럼 모든 사건이 같은 순서로 진행되는 것으로 표현하면
// 안 되기 때문입니다.
//
// FamilyAreas(좌우 2열 divider 목록, "어떤 문제인가")와 시각적으로
// 겹치지 않도록, 여기서는 구분선·번호·카드 없이 순수 타이포그래피
// grid만 사용합니다. 번호 배지가 없으므로 1→4 순서로 오인되지
// 않습니다("그 문제를 어떤 정보로 나누어 절차를 정하는가"라는 역할
// 차이가 읽히도록).
//
// family-page-refine에서, 법원 절차(심판·소송)와 신고 등 후속절차가
// 구별된다는 이 section의 핵심을 civil/enforcement와 동일한 방식으로
// 강조합니다. 4개 항목 각각이 아니라 이를 아우르는 section 설명
// 문단에서 한 번만 강조해, 4개 항목이 각각 다시 강조되며 반복되는
// 인상을 주지 않습니다.
const proceduresDescriptionEmphasisIndex = FAMILY_PROCEDURES_DESCRIPTION_EMPHASIS
  ? FAMILY_PROCEDURES_DESCRIPTION.indexOf(FAMILY_PROCEDURES_DESCRIPTION_EMPHASIS)
  : -1;

export default function FamilyProcedures() {
  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {FAMILY_PROCEDURES_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {FAMILY_PROCEDURES_DESCRIPTION_EMPHASIS && proceduresDescriptionEmphasisIndex !== -1 ? (
            <>
              {FAMILY_PROCEDURES_DESCRIPTION.slice(0, proceduresDescriptionEmphasisIndex)}
              <strong className="font-bold">{FAMILY_PROCEDURES_DESCRIPTION_EMPHASIS}</strong>
              {FAMILY_PROCEDURES_DESCRIPTION.slice(
                proceduresDescriptionEmphasisIndex + FAMILY_PROCEDURES_DESCRIPTION_EMPHASIS.length,
              )}
            </>
          ) : (
            FAMILY_PROCEDURES_DESCRIPTION
          )}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {FAMILY_PROCEDURES.map((item) => (
            <div key={item.title}>
              <h3 className="text-base font-semibold text-gray-900 sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
