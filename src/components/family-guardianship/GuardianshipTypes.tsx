import {
  GUARDIANSHIP_TYPES_DESCRIPTION,
  GUARDIANSHIP_TYPES_HEADING,
  GUARDIANSHIP_TYPES_SPECIFIC_WARNING,
  GUARDIANSHIP_TYPE_CARDS,
} from "@/lib/family-guardianship";

// "네 가지 후견제도 비교"입니다. <table>은 이 프로젝트에 선례가 없고
// 모바일 가로 스크롤 위험이 있어(요청사항의 "표보다 카드 우선" 지침과도
// 일치), INHERITANCE_RENUNCIATION_CARDS와 동일한 동일 무게 카드 비교
// 패턴을 재사용합니다. 4개 카드는 grid-cols-2로 균등하게 배치해 어느
// 하나도 우열이 있는 것처럼 보이지 않게 합니다. 특정후견에만 해당하는
// 경고("본인의 의사에 반하여 할 수 없다")는 4개 카드와 같은 무게의
// 5번째 칸을 만드는 대신, 통일된 warning panel로 카드 grid 아래에 짧게
// 분리했습니다(문구 자체에 "특정후견은"이 명시되어 있어 어떤 카드에
// 대한 보충 설명인지 분명합니다).
//
// card.emphasis가 있는 카드는 description 문자열 중 그 부분문자열만
// <strong>으로 감싸 굵게 강조합니다. 4개 카드 모두 각 제도를 구별하는
// 핵심구절 1곳씩만 강조해 한눈에 비교할 수 있도록 했습니다. 문구·색상·
// 글자 크기·레이아웃은 그대로 두고 font-weight만 바뀝니다. emphasis가
// description에 없는 경우(정의되지 않았거나 문자열이 일치하지 않는
// 경우)에는 안전하게 기존과 동일하게 description을 그대로 렌더링합니다.
//
// guardianship-page-refine에서, 4면 border를 모두 제거합니다. 비교
// 카드는 LeaseHousingCommercial과 동일하게 각 제목 아래 96px×3px brand
// horizontal accent로 대체하고(카드 bg-slate-50·section bg-white 대비는
// 그대로 유지), 특정후견 경고 패널은 border-l-4 accent 대신 제목 왼쪽
// 짧은 세로 accent(LeaseRelatedMatters와 동일한 h-5 w-1.5 accent)로
// 정리합니다. 카드 개수·순서·문구·emphasis 로직은 전혀 변경하지
// 않았습니다.
//
// guardianship-eligibility-emphasis에서, 임의후견 카드의
// GUARDIANSHIP_TYPE_CARDS.emphasis 대상 부분문자열만 데이터 파일에서
// 조정했습니다("위탁 방식" → 다른 세 카드와 동일하게 "장래의 정신적
// 제약에 대비"). 이 컴포넌트의 emphasis 렌더링 로직 자체는 변경하지
// 않았습니다.
export default function GuardianshipTypes() {
  return (
    <section id="types" className="scroll-mt-20 border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {GUARDIANSHIP_TYPES_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {GUARDIANSHIP_TYPES_DESCRIPTION}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {GUARDIANSHIP_TYPE_CARDS.map((card) => {
            const emphasisIndex = card.emphasis ? card.description.indexOf(card.emphasis) : -1;
            return (
              <div key={card.title} className="rounded-sm bg-slate-50 p-6">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg break-keep">{card.title}</h3>
                <span aria-hidden="true" className="mt-2 block h-[3px] w-24 rounded-full bg-brand" />
                <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
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
            <span>{GUARDIANSHIP_TYPES_SPECIFIC_WARNING.title}</span>
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {GUARDIANSHIP_TYPES_SPECIFIC_WARNING.content}
          </p>
        </div>
      </div>
    </section>
  );
}
