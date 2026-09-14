import { Fragment } from "react";
import {
  CIVIL_PRE_CHECK_DESCRIPTION,
  CIVIL_PRE_CHECK_HEADING,
  CIVIL_PRE_CHECK_ITEMS,
  type CivilPreCheckItem,
} from "@/lib/civil";

// civil-page-refine에서, item.emphasis가 있는 항목만 description 문자열 중
// 그 부분문자열을 <strong>으로 강조합니다(항목당 1곳, 문구 변경 없음).
// 모든 항목이 아니라 소송서류 준비 전 확인이 특히 중요한 항목(상대방
// 특정·청구원인·뒷받침 자료)에만 지정되어 있습니다. emphasis가
// description에 없는 경우에는 안전하게 기존과 동일하게 렌더링합니다.
function renderPreCheckDescription(item: CivilPreCheckItem) {
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

// 민사소송 페이지만의 고유 section입니다: "상대방 → 청구할 내용 → 사건의
// 경위 → 증거자료 → 다른 절차의 필요성"으로 이어지는, 소송서류를
// 준비하기 전에 먼저 확인하는 순서를 보여줍니다. CivilTypes(좌우 2열
// divider 목록)를 그대로 복제하지 않고, 순서가 있는 흐름임을 드러내기
// 위해 번호 배지 + 얇은 연결선(PC 가로 / mobile 세로) 언어를 사용합니다.
// 법인등기의 CorporateDecisionCheck와 같은 시각 언어를 참고했지만 그
// 컴포넌트를 import하지 않고 이 페이지 전용으로 독립 구현합니다.
// ProcessSection의 실제 절차 타임라인(원형 배지)과 헷갈리지 않도록
// 사각형 배지를 사용해 "확인 순서"와 "진행 절차"를 시각적으로
// 구분합니다. 이 항목들은 모든 사건에 공통되는 법정 의무절차가 아니라
// 확인 순서를 안내하는 목적이므로 그런 뉘앙스로 표현하지 않습니다.
//
// civil-precheck-heading-align에서, 항목 내부 배치를 "번호 → 소제목(위) →
// 설명(아래)" 세로 스택(PC에서만 sm:flex-col)에서 "번호와 소제목이 같은
// 행, 설명은 소제목 시작선에 맞춰 그 아래"로 바꿨습니다. 배지(고정 폭
// h-8 w-8)와 소제목+설명 영역을 항상 가로로 배치하고, 소제목+설명
// 영역은 min-w-0 flex-1로 감싸 배지 너비를 제외한 나머지 폭에서
// 자연스럽게 줄바꿈되도록 합니다(긴 설명·strong 포함 문장도 소제목
// 시작선에 맞춰 정렬). 이 배치는 모바일에서 이미 쓰이던 방식과 같아서
// PC에서만 구조가 바뀌고 모바일은 그대로입니다. 번호 배지 스타일·소제목
// typography·strong 강조·section 구조는 변경하지 않았습니다.
//
// 부수 발견 및 수정: 위 배치 변경을 실제 화면(PC 1280)에서 확인하는
// 과정에서, 항목 사이 연결선(<span className="... flex-1 ...">)이 각
// 항목과 동일한 flex-1이라 5개 항목 + 4개 연결선 총 9개가 폭을 균등
// 분배하고 있었습니다(연결선이 장식용 얇은 선인데도 항목 1개와 같은
// 몫을 차지). 배지가 소제목과 같은 행으로 옮겨오면서 항목당 남는 텍스트
// 폭이 더 줄어들어, 이 문제가 설명 텍스트가 한 줄에 5~6자만 들어가는
// 수준으로 크게 드러났습니다(검수 체크리스트의 "세로 공간이 과도하게
// 늘지 않는지" 항목에 위배). 연결선을 flex-1 대신 고정 폭(w-6)+shrink-0로
// 바꿔 항목들이 폭 대부분을 차지하도록 고쳤습니다. 연결선의 시각적
// 역할(항목 사이 얇은 회색 구분선)과 위치(sm:mt-4로 배지 높이 중앙)는
// 그대로이며, 폭 분배 방식만 바로잡았습니다.
export default function CivilPreCheck() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {CIVIL_PRE_CHECK_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {CIVIL_PRE_CHECK_DESCRIPTION}
        </p>
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-0">
          {CIVIL_PRE_CHECK_ITEMS.map((item, index) => (
            <Fragment key={item.title}>
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="hidden h-px w-6 shrink-0 bg-gray-200 sm:mt-4 sm:block"
                />
              )}
              <div className="flex items-start gap-3 sm:flex-1">
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-brand text-xs font-semibold text-brand"
                >
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1 pt-1 sm:pr-4">
                  <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {renderPreCheckDescription(item)}
                  </p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
