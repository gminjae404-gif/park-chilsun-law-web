import {
  ENFORCEMENT_CLAIM_ORDER_CARDS,
  ENFORCEMENT_CLAIM_ORDER_DESCRIPTION,
  ENFORCEMENT_CLAIM_ORDER_HEADING,
  ENFORCEMENT_CLAIM_ORDER_NOTE,
} from "@/lib/enforcement";

// "채권압류 후 추심명령과 전부명령" 비교 섹션입니다.
// InheritanceRenunciationVsLimited/GuardianshipTypes와 동일한 동일 무게
// 2열 카드 비교 패턴을 재사용해, 어느 한쪽이 항상 더 유리하다는 인상을
// 주지 않습니다. card.emphasis가 있으면 그 문자열을 포함하는 point에서만
// 해당 부분을 <strong>으로 강조합니다(카드당 1곳, 문구 변경 없음).
//
// enforcement-page-refine에서, 4면 border를 제거하고 LeaseHousingCommercial/
// GuardianshipTypes와 동일하게 각 제목 아래 96px×3px brand horizontal
// accent로 대체합니다. 카드 배경(bg-white on bg-slate-50)·spacing·
// emphasis 로직·내용은 그대로 유지했습니다.
//
// enforcement-page-refine에서, emphasis 렌더링 부분을 LeaseHousingCommercial의
// 원래 패턴과 동일하게 <span className="min-w-0 flex-1">로 감싸도록
// 고쳤습니다. flex인 <li> 바로 아래에 Fragment(문자열+<strong>+문자열)를
// 그대로 두면 각 조각이 개별 flex item으로 분리되어 줄바꿈이 깨지는
// 문제가 있었습니다(전부명령 카드의 기존 emphasis에도 있던 문제이며,
// 이번에 추심명령 카드에 emphasis를 추가하며 발견해 두 카드 모두
// 함께 고쳤습니다). 문구·emphasis 대상 문자열은 변경하지 않았습니다.
export default function EnforcementClaimOrders() {
  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {ENFORCEMENT_CLAIM_ORDER_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {ENFORCEMENT_CLAIM_ORDER_DESCRIPTION}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ENFORCEMENT_CLAIM_ORDER_CARDS.map((card) => (
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
          {ENFORCEMENT_CLAIM_ORDER_NOTE}
        </p>
      </div>
    </section>
  );
}
