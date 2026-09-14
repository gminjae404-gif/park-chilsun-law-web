import {
  FAMILY_PRE_CHECK_DESCRIPTION,
  FAMILY_PRE_CHECK_HEADING,
  FAMILY_PRE_CHECK_ITEMS,
  type FamilyPreCheckItem,
} from "@/lib/family";

// family-page-refine에서, item.emphasis가 있는 항목만 description 문자열
// 중 그 부분문자열을 <strong>으로 강조합니다(항목당 1곳, 문구 변경
// 없음). 모든 항목이 아니라 절차를 구분하는 데 특히 중요한 항목(원하는
// 결과 판단·당사자 확인·가족관계 자료)에만 지정되어 있습니다. emphasis가
// description에 없는 경우에는 안전하게 기존과 동일하게 렌더링합니다.
function renderPreCheckDescription(item: FamilyPreCheckItem) {
  const emphasisIndex = item.emphasis ? item.description.indexOf(item.emphasis) : -1;
  if (!item.emphasis || emphasisIndex === -1) {
    return item.description;
  }
  return (
    <>
      {item.description.slice(0, emphasisIndex)}
      <strong className="font-bold">{item.emphasis}</strong>
      {item.description.slice(emphasisIndex + item.emphasis.length)}
    </>
  );
}

// 가사·상속 페이지의 핵심 section입니다: "현재 가족관계 → 원하는 결과
// → 당사자 관계 → 기본 증명·등록자료 → 사건별 추가사항"으로 이어지는,
// 사건 종류와 관계없이 먼저 확인하면 좋은 다섯 가지를 보여줍니다.
//
// family-precheck-vertical-stack에서, InheritanceFirstCheck와 동일한
// 세로 번호 목록(ol + divide-y + border-t, 배지+제목+설명이 위에서
// 아래로 하나씩 쌓이는 구조)으로 바꿨습니다. 이전에는 Civil/Enforcement/
// CorporateDecisionCheck의 "번호 배지+연결선" PC 가로 1행 배치를
// 참고했지만, 상속 페이지의 "먼저 확인할 사항"과 같은 디자인 언어로
// 통일해 달라는 요청에 따라 PC/mobile 모두 세로형으로 통일합니다.
// 항목 사이 가로 연결선은 제거했고(divide-y의 얇은 구분선으로 대체),
// 번호 배지 스타일(h-8 w-8, rounded-sm, border-brand)과 제목/설명
// typography, strong 강조 로직·대상은 그대로 유지했습니다.
export default function FamilyPreCheck() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {FAMILY_PRE_CHECK_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {FAMILY_PRE_CHECK_DESCRIPTION}
        </p>

        <ol className="mt-10 divide-y divide-gray-200 border-t border-gray-200">
          {FAMILY_PRE_CHECK_ITEMS.map((item, index) => (
            <li key={item.title} className="flex gap-4 py-5">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-brand text-xs font-semibold text-brand"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 sm:text-base">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  {renderPreCheckDescription(item)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
