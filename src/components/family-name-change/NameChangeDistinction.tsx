import {
  NAME_CHANGE_DISTINCTION_CARDS,
  NAME_CHANGE_DISTINCTION_HEADING,
  NAME_CHANGE_DISTINCTION_WARNING,
} from "@/lib/family-name-change";

// 이 페이지의 가장 중요한 구분 section입니다: "개명"과 "가족관계등록부
// 정정"은 서로 다른 문제이므로, 우열이나 순서를 암시하지 않는 동일
// 무게의 2열 카드로 나란히 배치합니다(InheritanceRenunciationVsLimited/
// GuardianshipTypes와 동일한 카드 비교 패턴). 등록부정정의 상세 절차는
// 이 페이지에서 확장하지 않고 개명과의 구분 지점만 안내합니다.
//
// card.emphasis가 있으면 GuardianshipTypes와 동일한 방식으로
// description 중 그 부분문자열만 <strong> 처리합니다(카드당 1곳).
//
// name-change-page-refine에서, 두 비교 카드의 4면 border를 제거하고
// 각 제목 아래 horizontal brand accent로 대체합니다. "개명"(2자)과
// "가족관계등록부 정정"(9자)의 제목 길이 차이가 커 기본 w-24는 짧은
// 제목에서도 균형이 맞았지만, 두 카드의 accent 길이를 동일하게
// 맞춰야 하므로 실제 렌더링을 보고 폭을 정합니다. 경고 패널은
// border-l-4 accent 대신 제목 왼쪽 짧은 세로 accent로 정리하고, 위
// 두 카드에서 이미 강조한 구분 기준이 이 패널에서도 반복된다는 것을
// 보여주기 위해 content 중 해당 부분만 <strong>으로 강조합니다
// (emphasis 미일치 시 안전하게 기존과 동일하게 렌더링).
const distinctionWarningEmphasisIndex = NAME_CHANGE_DISTINCTION_WARNING.emphasis
  ? NAME_CHANGE_DISTINCTION_WARNING.content.indexOf(NAME_CHANGE_DISTINCTION_WARNING.emphasis)
  : -1;

export default function NameChangeDistinction() {
  return (
    <section id="distinction" className="scroll-mt-20 border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {NAME_CHANGE_DISTINCTION_HEADING}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {NAME_CHANGE_DISTINCTION_CARDS.map((card) => {
            const emphasisIndex = card.emphasis ? card.description.indexOf(card.emphasis) : -1;
            return (
              <div key={card.title} className="rounded-sm bg-slate-50 p-6">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg break-keep">{card.title}</h3>
                <span aria-hidden="true" className="mt-2 block h-[3px] w-44 rounded-full bg-brand" />
                <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
                  {card.emphasis && emphasisIndex !== -1 ? (
                    <>
                      {card.description.slice(0, emphasisIndex)}
                      <strong className="font-bold">{card.emphasis}</strong>
                      {card.description.slice(emphasisIndex + card.emphasis.length)}
                    </>
                  ) : (
                    card.description
                  )}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 max-w-3xl rounded-sm bg-slate-50 p-6">
          <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg break-keep">
            <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{NAME_CHANGE_DISTINCTION_WARNING.title}</span>
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {NAME_CHANGE_DISTINCTION_WARNING.emphasis && distinctionWarningEmphasisIndex !== -1 ? (
              <>
                {NAME_CHANGE_DISTINCTION_WARNING.content.slice(0, distinctionWarningEmphasisIndex)}
                <strong className="font-bold">{NAME_CHANGE_DISTINCTION_WARNING.emphasis}</strong>
                {NAME_CHANGE_DISTINCTION_WARNING.content.slice(
                  distinctionWarningEmphasisIndex + NAME_CHANGE_DISTINCTION_WARNING.emphasis.length,
                )}
              </>
            ) : (
              NAME_CHANGE_DISTINCTION_WARNING.content
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
