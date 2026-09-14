import {
  GUARDIANSHIP_ALTERNATIVE_NOTE,
  GUARDIANSHIP_DOCUMENTS_DESCRIPTION,
  GUARDIANSHIP_DOCUMENTS_HEADING,
  GUARDIANSHIP_DOCUMENTS_NOTE,
  GUARDIANSHIP_DOCUMENT_GROUPS,
  GUARDIANSHIP_NEED_CHECK_WARNING,
} from "@/lib/family-guardianship";
import GuardianshipPrintButton from "./GuardianshipPrintButton";

// "준비자료 체크리스트" 섹션입니다. 화면용 카드와 인쇄용 목록이 이제
// 같은 데이터(GUARDIANSHIP_DOCUMENT_GROUPS, 4묶음)를 공유합니다 —
// 서류 분류와 서류명 자체는 화면·인쇄가 동일하되, 화면은 sm:grid-
// cols-2 카드(다른 페이지의 FamilyDocuments와 동일한 패턴), 인쇄는
// 기존처럼 좁은 여백·작은 글자의 2열 grid + "□" 글머리표를 유지합니다
// (일반 화면 디자인을 인쇄물과 똑같이 만들라는 요구는 아니었으므로,
// 정보구조·서류명만 맞추고 각 화면의 기존 표현방식은 그대로 둡니다).
//
// 인쇄(window.print) 대응: 화면용 블록은 print:hidden, 인쇄 전용
// 블록은 hidden print:block으로 서로 배타적으로 노출됩니다. 인쇄
// 결과 맨 위에는 화면용 h2("준비자료 체크리스트")를 print:hidden으로
// 숨기고 하나로 합친 인쇄 전용 제목("성년후견 준비자료 체크리스트")만
// 보이도록 했습니다. 4개 묶음 뒤에는 제출서류가 사건마다 달라질 수
// 있다는 안내와 이 페이지의 핵심 경고(GuardianshipNeedCheck에서 이미
// 쓰는 GUARDIANSHIP_NEED_CHECK_WARNING, 새 문구 아님)를, 마지막에는
// 위임·대리 등 대안을 먼저 확인할 필요가 있다는 안내를 차례로
// 보여줍니다. "후견인 후보자가 있어도 최종 선임은 가정법원이
// 판단한다"는 안내는 이제 "상담할 때 확인할 내용" 묶음의 note로
// 이어붙여 화면·인쇄 모두에서 그 묶음 바로 아래에 나타납니다. 긴
// 법률설명·FAQ·관할·절차 타임라인은 추가하지 않았습니다.
export default function GuardianshipDocuments() {
  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="hidden text-lg font-bold tracking-tight text-gray-900 print:mb-3 print:block">
          성년후견 준비자료 체크리스트
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep print:hidden">
              {GUARDIANSHIP_DOCUMENTS_HEADING}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base print:mt-1">
              {GUARDIANSHIP_DOCUMENTS_DESCRIPTION}
            </p>
          </div>
          <div className="print:hidden">
            <GuardianshipPrintButton />
          </div>
        </div>

        {/* 화면용 카드 그리드 (인쇄 시 숨김 — 인쇄는 아래 별도 블록으로 대체) */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 print:hidden">
          {GUARDIANSHIP_DOCUMENT_GROUPS.map((group) => (
            <div key={group.id} className="rounded-sm bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900 sm:text-lg">{group.title}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-6 text-gray-700 sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              {group.note && <p className="mt-3 text-xs leading-5 text-gray-500">{group.note}</p>}
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-500 print:hidden">{GUARDIANSHIP_DOCUMENTS_NOTE}</p>

        {/* 인쇄 전용: 같은 4개 묶음(화면과 동일 데이터) + 제출서류 편차 안내 + 핵심 경고 + 대안 확인 안내 */}
        <div className="hidden print:mt-4 print:block">
          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
            {GUARDIANSHIP_DOCUMENT_GROUPS.map((group) => (
              <div key={group.id} className="print:break-inside-avoid">
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

          <p className="mt-3 text-xs leading-5 text-gray-500">{GUARDIANSHIP_DOCUMENTS_NOTE}</p>

          <div className="mt-3 rounded-sm print:break-inside-avoid border border-gray-200 border-l-4 border-l-brand bg-slate-50 p-3">
            <h3 className="text-sm font-semibold text-gray-900">{GUARDIANSHIP_NEED_CHECK_WARNING.title}</h3>
            <p className="mt-1 text-xs leading-5 text-gray-600">{GUARDIANSHIP_NEED_CHECK_WARNING.content}</p>
          </div>

          <p className="mt-2 text-xs leading-5 text-gray-500">{GUARDIANSHIP_ALTERNATIVE_NOTE}</p>
        </div>
      </div>
    </section>
  );
}
