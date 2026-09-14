import {
  LEASE_HOUSING_COMMERCIAL_CARDS,
  LEASE_HOUSING_COMMERCIAL_DESCRIPTION,
  LEASE_HOUSING_COMMERCIAL_HEADING,
  LEASE_HOUSING_COMMERCIAL_NOTE,
} from "@/lib/civil-lease";

// "주택과 상가는 확인할 사항이 다릅니다" 비교 섹션입니다.
// InheritanceRenunciationVsLimited/GuardianshipTypes와 동일한 동일 무게
// 2열 카드 비교 패턴을 재사용합니다 — 어느 한쪽이 항상 더 유리하다는
// 인상을 주지 않기 위해 우열을 암시하는 순위·색상 강조를 두지 않습니다.
// card.emphasis가 있으면 그 문자열을 포함하는 point에서만 해당 부분을
// <strong>으로 강조합니다(카드당 1곳, 문구 변경 없음).
//
// box-density-audit 3차(시각적 리듬 재보완)에서, "테두리 있는 카드"
// 대신 "제목에 accent가 있는 비교영역"으로 조정합니다. 외곽
// border(및 2차에서 추가했던 상단 border-t-2 border-t-brand)를 모두
// 제거하고, 배경(bg-white on bg-slate-50)과 spacing만으로 두 영역을
// 구분합니다. 대신 각 제목 바로 아래에 짧고 굵은 brand accent line을
// 두어 제목 전체를 긋는 underline이나 카드 폭 전체를 긋는 line처럼
// 보이지 않게 했습니다. shadow·gradient·아이콘·hover는 추가하지
// 않았고, 두 카드의 시각적 무게는 여전히 동일합니다(우열 암시 없음).
//
// box-density-audit 4차(사용자 피드백 반영)에서, 처음 넣었던 32px
// 폭(w-8)이 소제목("주택임대차"/"상가임대차") 글자폭보다 짧아
// 어정쩡해 보인다는 피드백에 따라 폭을 w-24(96px)로 늘렸습니다.
// 두께(3px)·색상(brand)·위치(제목 바로 아래)는 그대로이며, 카드
// 폭 전체를 긋는 divider처럼 보이지 않는 선에서 늘린 길이입니다.
//
// box-density-audit 7차(배경 리듬 반전 실험)에서, 페이지 전체 배경
// 순서를 white→slate→white→slate→white→slate→brand로 뒤집는 실험의
// 일환으로 section 배경을 bg-slate-50 → bg-white로, 내부 두 블록
// 배경을 bg-white → bg-slate-50으로 서로 반전했습니다("WHITE section
// 위 SLATE-50 블록 2개"). border 없음·96px×3px accent line·rounded-sm·
// padding·내용·두 블록 동일 디자인은 그대로 유지했습니다.
export default function LeaseHousingCommercial() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {LEASE_HOUSING_COMMERCIAL_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {LEASE_HOUSING_COMMERCIAL_DESCRIPTION}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {LEASE_HOUSING_COMMERCIAL_CARDS.map((card) => (
            <div key={card.title} className="rounded-sm bg-slate-50 p-6">
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
          {LEASE_HOUSING_COMMERCIAL_NOTE}
        </p>
      </div>
    </section>
  );
}
