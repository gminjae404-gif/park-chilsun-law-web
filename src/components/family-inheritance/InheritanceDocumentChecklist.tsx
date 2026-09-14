import {
  INHERITANCE_DOCUMENTS_DESCRIPTION,
  INHERITANCE_DOCUMENTS_HEADING,
  INHERITANCE_DOCUMENTS_NOTE,
  INHERITANCE_DOCUMENT_GROUPS,
  INHERITANCE_PRINT_KEY_WARNINGS,
} from "@/lib/family-inheritance";
import InheritancePrintButton from "./InheritancePrintButton";

// "준비서류 체크리스트" 섹션입니다. 7개 그룹(상속포기·한정승인·
// 법정상속등기·협의분할 상속등기·해외 거주자·유언·상담확인)을 하나로
// 합친 목록 대신, 이 프로젝트에 이미 있는 유일한 아코디언 primitive인
// FAQPreview의 <details>/<summary> 패턴을 그대로 재사용합니다(새
// 라이브러리·탭 상태관리 없이 그룹별로 펼쳐볼 수 있습니다).
//
// 인쇄(window.print) 대응: <details>가 접혀 있으면 브라우저가 그
// 내용을 인쇄 시에도 렌더링하지 않으므로, 화면용 아코디언은
// print:hidden으로 인쇄에서 제외하고, 같은 데이터로 만든 "펼친 상태의
// 평문 목록"을 별도로 두어 hidden print:block으로 인쇄 시에만
// 보이도록 합니다. 두 블록은 INHERITANCE_DOCUMENT_GROUPS 데이터를
// 그대로 공유하므로(그룹별 note 포함) 화면·인쇄의 정보구조·서류명이
// 서로 달라질 위험이 없습니다.
//
// 그룹이 5개(A~E)에서 7개로 늘고 그룹당 항목도 늘어난 만큼, 인쇄
// 전용 블록은 성년후견 페이지에서 이미 쓰는 "좁은 여백·작은 글자의
// 2열 grid"를 재사용해 실용적인 분량을 시도합니다(글자를 과도하게
// 줄이지 않고, 내용을 삭제하지 않습니다 — 분량이 늘어난 만큼 필요하면
// 여러 페이지에 걸쳐도 무방합니다). 각 그룹은 print:break-inside-
// avoid로 중간에 잘리지 않도록 했습니다.
//
// 인쇄 결과에는 체크리스트와 함께 핵심 경고 3가지(3개월 기간·해외
// 공증·유언검인)도 함께 보이도록 합니다(새 문구가 아니라 다른
// section에서 이미 확정한 문구를 그대로 재사용). 헤더·푸터·상황
// 카드·버튼 등은 각 컴포넌트에 이미 둔 print:hidden으로 인쇄에서
// 제외됩니다.
//
// 인쇄 페이지 수 축소(4→3페이지) 작업: 7개 그룹을 2열로 배치하던
// `grid grid-cols-2`를 인쇄 시에만 `print:columns-2`(CSS
// multi-column)로 바꿨습니다. grid는 같은 행(row)의 높이가 서로
// 맞물려 있어서, 마지막 7번째 그룹처럼 혼자 남는 행이 남은 페이지
// 공간에 조금이라도 못 들어가면 "행 전체"가 다음 페이지로 밀려나 그
// 페이지 대부분이 빈 채로 남는 문제가 있었습니다(실제로 이 문제
// 때문에 3페이지 전체가 그룹 1개만 담고 거의 비어 있었고, 뒤이은
// "서류 발급 시 주의사항"까지 4페이지로 밀려났습니다). multi-column은
// 항목을 행 단위가 아니라 개별 단위로 다음 칸/다음 페이지에
// 흘려보내므로 이 낭비가 사라집니다. 그룹 내용·순서·개수·글자
// 크기·여백은 전혀 바꾸지 않았고, 각 그룹은 여전히
// print:break-inside-avoid로 중간에 잘리지 않습니다. 화면 아코디언
// (위 별도 블록)은 이 변경과 무관하게 그대로입니다.
export default function InheritanceDocumentChecklist() {
  return (
    <section id="documents" className="scroll-mt-20 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
              {INHERITANCE_DOCUMENTS_HEADING}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
              {INHERITANCE_DOCUMENTS_DESCRIPTION}
            </p>
          </div>
          <div className="print:hidden">
            <InheritancePrintButton />
          </div>
        </div>

        {/* 화면용 아코디언 (인쇄 시 숨김) */}
        <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200 print:hidden">
          {INHERITANCE_DOCUMENT_GROUPS.map((group) => (
            <details key={group.id} className="group py-4">
              <summary className="flex list-none cursor-pointer items-center justify-between gap-4 rounded-sm text-sm font-medium text-gray-800 transition-colors [&::-webkit-details-marker]:hidden hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:text-base">
                {group.title}
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 text-lg font-light text-brand transition-transform duration-150 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <ul className="mt-3 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-gray-600">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              {group.note && <p className="mt-3 text-xs leading-5 text-gray-500">{group.note}</p>}
            </details>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-500 print:hidden">
          {INHERITANCE_DOCUMENTS_NOTE}
        </p>

        {/* 인쇄 전용: 접힘 상태와 무관하게 항상 펼쳐진 목록 + 핵심 경고.
            그룹이 7개로 늘어난 만큼 2열로 배치해 세로 길이를 줄이되
            (GuardianshipDocuments와 동일 패턴), 글자 크기·내용은 줄이거나
            삭제하지 않았습니다.
            2열 배치는 grid가 아니라 print:columns-2(멀티컬럼)를
            사용합니다: grid는 같은 행에 묶인 그룹들의 높이가 서로
            맞물려 있어 혼자 남는 마지막 그룹(7번째)이 페이지 하단에
            조금이라도 못 들어가면 행 전체가 다음 페이지로 넘어가며 그
            페이지 대부분을 빈 공간으로 남기는 문제가 있었습니다.
            columns는 그룹을 행이 아닌 개별 단위로 다음 칸/다음 페이지로
            흘려보내 이 낭비를 없앱니다. gap-y 대신 각 그룹에 mb-3을
            둔 것도 grid가 아닌 columns에서는 row-gap 개념이 없기
            때문입니다(간격 값 자체는 그대로 유지). */}
        <div className="hidden print:block">
          <div className="mt-4 flex flex-col gap-2 rounded-sm border border-gray-300 p-3 print:break-inside-avoid">
            <p className="text-sm font-semibold text-gray-900">인쇄 시 함께 확인하세요</p>
            {INHERITANCE_PRINT_KEY_WARNINGS.map((warning) => (
              <div key={warning.title}>
                <p className="text-sm font-semibold text-gray-900">{warning.title}</p>
                <p className="mt-1 text-sm leading-6 text-gray-700">{warning.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 print:columns-2 print:gap-x-8">
            {INHERITANCE_DOCUMENT_GROUPS.map((group) => (
              <div key={group.id} className="mb-3 print:break-inside-avoid">
                <h3 className="text-sm font-semibold text-gray-900">{group.title}</h3>
                <ul className="mt-1.5 flex flex-col gap-1">
                  {group.items.map((item) => (
                    <li key={item} className="text-xs leading-5 text-gray-700">
                      □ {item}
                    </li>
                  ))}
                </ul>
                {group.note && <p className="mt-1.5 text-[11px] leading-4 text-gray-500">{group.note}</p>}
              </div>
            ))}
          </div>

          <p className="text-xs leading-5 text-gray-500">{INHERITANCE_DOCUMENTS_NOTE}</p>
        </div>
      </div>
    </section>
  );
}
