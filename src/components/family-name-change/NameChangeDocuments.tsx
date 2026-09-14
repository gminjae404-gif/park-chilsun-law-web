import {
  NAME_CHANGE_DOCUMENTS_DESCRIPTION,
  NAME_CHANGE_DOCUMENTS_HEADING,
  NAME_CHANGE_DOCUMENT_GROUPS,
  NAME_CHANGE_DOCUMENTS_NOTE,
  NAME_CHANGE_NOT_AUTOMATIC_WARNING,
} from "@/lib/family-name-change";
import NameChangePrintButton from "./NameChangePrintButton";

// "준비자료 체크리스트" 섹션입니다. 성격이 다른 세 묶음(준비해야 할
// 기본서류 / 상담할 때 확인할 내용 / 해당 시 추가자료)을
// NAME_CHANGE_DOCUMENT_GROUPS 하나의 데이터로 표현하고, 화면과 인쇄가
// 항상 같은 구조·같은 목록을 보여주도록 별도의 화면용/인쇄용 분기를
// 두지 않습니다(3묶음뿐이라 InheritanceDocumentChecklist의 아코디언
// 방식은 필요 없음). 오래된 교육자료의 "기본증명서 몇 통" 같은 구체적
// 통수나 인지액·송달료 금액은 이 페이지에 고정 기재하지 않습니다.
//
// 인쇄(window.print) 대응: /family/inheritance의
// InheritanceDocumentChecklist와 동일한 방식을 재사용합니다. 이 section
// 자체를 그대로 인쇄 대상으로 두고, 페이지의 다른 모든 section에는 각
// 컴포넌트(및 공용 컴포넌트는 page.tsx)에서 print:hidden을 적용해
// 숨깁니다. 인쇄 결과 맨 위에는 짧은 인쇄 전용 제목("개명허가
// 준비자료")을, 목록 아래에는 이 페이지의 핵심 경고(개명허가 후 1개월
// 이내 개명신고 필요)를 NAME_CHANGE_NOT_AUTOMATIC_WARNING에서 그대로
// 재사용해 새 문구 없이 함께 보여줍니다. 각 묶음 카드와 경고 박스에는
// print:break-inside-avoid를 두어 중간에서 페이지가 나뉘지 않도록
// 했습니다.
//
// 인쇄 전용 A4 1장 레이아웃: 화면(PC/mobile) 디자인은 전혀 건드리지
// 않고, print: variant로만 인쇄 결과의 여백·구성을 조정합니다.
// "준비해야 할 기본서류"는 항목이 가장 많아 인쇄에서도 한 줄
// 너비(print:col-span-2)를 그대로 쓰고, "상담할 때 확인할 내용"과
// "해당 시 추가자료"는 인쇄에서만 2열(print:grid print:grid-cols-2)로
// 나란히 배치해 세로 길이를 줄입니다. 화면에서는 이 grid 클래스가
// 적용되지 않으므로(@media print 안에서만 유효) 기존 flex-col 세로
// 배치가 그대로 유지됩니다. 카드 padding(p-6→print:p-4)과 목록
// 간격(gap-2→print:gap-1), 줄간격(leading-6→print:leading-5)도
// 인쇄에서만 줄였습니다 — 화면 클래스(sm: 이하)는 그대로 두고 print:
// 클래스만 추가했으므로 화면 결과물에는 영향이 없습니다. 글자 크기는
// 각 항목이 이미 모바일 화면에서 쓰는 크기(h3 16px, 목록 14px) 아래로는
// 줄이지 않았습니다.
export default function NameChangeDocuments() {
  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="hidden text-lg font-bold tracking-tight text-gray-900 print:mb-3 print:block">
          개명허가 준비자료
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep print:text-xl">
              {NAME_CHANGE_DOCUMENTS_HEADING}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base print:mt-1">
              {NAME_CHANGE_DOCUMENTS_DESCRIPTION}
            </p>
          </div>
          <div className="print:hidden">
            <NameChangePrintButton />
          </div>
        </div>

        <div className="mt-10 flex max-w-3xl flex-col gap-6 print:mt-4 print:grid print:max-w-none print:grid-cols-2 print:gap-3">
          {NAME_CHANGE_DOCUMENT_GROUPS.map((group, index) => (
            <div
              key={group.id}
              className={`rounded-sm bg-white p-6 print:break-inside-avoid print:p-4${
                index === 0 ? " print:col-span-2" : ""
              }`}
            >
              <h3 className="text-base font-semibold text-gray-900 sm:text-lg print:text-base">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-col gap-2 print:mt-2 print:gap-1">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-6 text-gray-700 sm:text-base print:text-sm print:leading-5"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-500 print:mt-3">
          {NAME_CHANGE_DOCUMENTS_NOTE}
        </p>

        <div className="mt-6 hidden max-w-3xl rounded-sm border border-gray-200 border-l-4 border-l-brand bg-slate-50 p-6 print:mt-3 print:block print:break-inside-avoid print:p-4">
          <h3 className="text-base font-semibold text-gray-900 sm:text-lg print:text-base">
            {NAME_CHANGE_NOT_AUTOMATIC_WARNING.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base print:text-sm print:leading-5">
            {NAME_CHANGE_NOT_AUTOMATIC_WARNING.content}
          </p>
        </div>
      </div>
    </section>
  );
}
