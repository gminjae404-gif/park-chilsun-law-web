import {
  INHERITANCE_DOCUMENT_CAUTIONS,
  INHERITANCE_DOCUMENT_CAUTION_HEADING,
} from "@/lib/family-inheritance";

// "서류 발급 시 주의사항" 섹션입니다. 서류별 유효기간을 일률적으로
// "3개월"이라 쓰지 않는 등 스펙의 제약을 그대로 반영한 5개 항목을
// 점(bullet) 목록으로 나열합니다. 인쇄 시에도 그대로 유지되는
// section입니다(서류 준비와 직접 관련된 안내이므로 print:hidden을 걸지
// 않습니다).
//
// 인쇄 페이지 구성(4→3페이지 축소 작업으로 재조정): 이전에는 이 section
// 앞에 print:break-before-page를 두어 항상 새 페이지에서 시작하도록
// 강제했지만, 준비서류 체크리스트의 2열 배치가 grid라서 마지막 7번째
// 그룹이 자기 행 전체와 함께 다음 페이지로 밀려나 있었고(3페이지 대부분이
// 빈 공간), 거기에 break-before-page까지 겹쳐 이 section이 다시
// 4페이지로 밀려났습니다. InheritanceDocumentChecklist의 2열 배치를
// grid→columns로 바꿔 그 낭비를 없앤 결과, 이 section은 이제 앞 내용이
// 끝나는 지점에 자연스럽게 이어져도 됩니다. 다만 "제목과 5개 항목
// 전체가 페이지 중간에서 잘리지 않아야 한다"는 요건은 여전히 유효하므로,
// break-before-page 대신 section 전체에 print:break-inside-avoid를
// 적용해 이 블록이 남은 공간에 다 들어가지 않으면 통째로 다음 페이지로
// 넘어가도록(중간 절단 없이) 했습니다. 문구·항목·글자 크기·여백은 전혀
// 바꾸지 않았고, 화면 레이아웃에는 print: variant라 전혀 영향이
// 없습니다.
export default function InheritanceDocumentCaution() {
  return (
    <section className="border-b border-gray-200 bg-white print:break-inside-avoid">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {INHERITANCE_DOCUMENT_CAUTION_HEADING}
        </h2>
        <ul className="mt-8 flex max-w-3xl flex-col gap-3">
          {INHERITANCE_DOCUMENT_CAUTIONS.map((caution) => (
            <li key={caution} className="flex items-start gap-2 text-sm leading-6 text-gray-700 sm:text-base">
              <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
              {caution}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
