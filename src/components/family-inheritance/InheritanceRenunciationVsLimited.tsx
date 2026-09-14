import {
  INHERITANCE_RENUNCIATION_CARDS,
  INHERITANCE_RENUNCIATION_DESCRIPTION,
  INHERITANCE_RENUNCIATION_HEADING,
  INHERITANCE_RENUNCIATION_NOTE,
} from "@/lib/family-inheritance";

// "상속포기·한정승인" 비교 섹션입니다. 두 제도 중 어느 한쪽이 항상 더
// 유리하다고 단정하지 않기 위해, 우열을 암시할 수 있는 순위·색상 강조
// 없이 동일한 무게의 2열 카드로 나란히 배치합니다(FamilyDocuments의
// bg-slate-50 카드 grid 패턴 재사용). 표(<table>)는 이 프로젝트에 아직
// 선례가 없고 모바일에서 가로 스크롤 문제가 생기기 쉬워, 대신 카드
// 형태를 사용해 모바일에서도 자연스럽게 세로로 쌓이도록 합니다.
//
// card.emphasis가 있으면 그 문자열을 포함하는 point에서만 해당 부분을
// guardianship과 동일한 방식으로 <strong> 처리합니다(카드당 1곳).
//
// inheritance-page-refine에서, 4면 border를 제거하고 LeaseHousingCommercial/
// GuardianshipTypes와 동일하게 각 제목 아래 96px×3px brand horizontal
// accent로 대체합니다. 카드 배경(bg-white on bg-slate-50)·spacing·
// emphasis 로직·내용은 그대로 유지했습니다.
//
// fix-emphasis-flex-wrapping에서, EnforcementClaimOrders.tsx와 동일한
// 렌더링 버그를 고쳤습니다. flex인 <li> 바로 아래에 Fragment(문자열+
// <strong>+문자열)를 그대로 두면 각 조각이 개별 flex item으로 분리되어
// 줄바꿈/간격이 깨지는 문제가 있어(예: "…것 입니다"처럼 strong 뒤
// 텍스트 앞에 원치 않는 간격 발생), LeaseHousingCommercial의 원래
// 패턴과 동일하게 <span className="min-w-0 flex-1">로 감쌌습니다.
// 문구·emphasis 대상 문자열은 변경하지 않았습니다.
export default function InheritanceRenunciationVsLimited() {
  return (
    <section id="renunciation-limited" className="scroll-mt-20 border-b border-gray-200 bg-slate-50 print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {INHERITANCE_RENUNCIATION_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {INHERITANCE_RENUNCIATION_DESCRIPTION}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {INHERITANCE_RENUNCIATION_CARDS.map((card) => (
            <div key={card.title} className="rounded-sm bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900 sm:text-lg">{card.title}</h3>
              <span aria-hidden="true" className="mt-2 block h-[3px] w-24 rounded-full bg-brand" />
              <ul className="mt-4 flex flex-col gap-2">
                {card.points.map((point) => {
                  const emphasisIndex = card.emphasis ? point.indexOf(card.emphasis) : -1;
                  return (
                    <li key={point} className="flex items-start gap-2 text-sm leading-6 text-gray-600">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400"
                      />
                      <span className="min-w-0 flex-1">
                        {card.emphasis && emphasisIndex !== -1 ? (
                          <>
                            {point.slice(0, emphasisIndex)}
                            <strong className="font-bold">{card.emphasis}</strong>
                            {point.slice(emphasisIndex + card.emphasis.length)}
                          </>
                        ) : (
                          point
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-500">
          {INHERITANCE_RENUNCIATION_NOTE}
        </p>
      </div>
    </section>
  );
}
