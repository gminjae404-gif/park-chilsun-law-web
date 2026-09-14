import {
  INHERITANCE_FIRST_CHECK_DESCRIPTION,
  INHERITANCE_FIRST_CHECK_HEADING,
  INHERITANCE_FIRST_CHECK_ITEMS,
  INHERITANCE_FIRST_CHECK_WARNING,
} from "@/lib/family-inheritance";

// "상속 발생 후 먼저 확인할 사항" ①~⑥입니다. Family/Civil/Enforcement의
// "번호 배지+연결선" PreCheck는 5개 항목·가로 1행 배치를 전제로 설계되어
// 있어 6개 항목에 그대로 재사용하면 PC 좁은 칸에서 제목이 중간에
// 꺾이는 문제가 재발할 수 있습니다. 이 section은 순서가 있는 확인목록
// (①~⑥)이므로 배지를 세로로 쌓는 목록 형태로 구성해 항목 수가 늘어나도
// 줄바꿈 위험 없이 안전하게 표시합니다(가로 연결선은 사용하지 않음).
// 아래 경고 박스는 EnforcementPreservationNote/FamilyInheritanceNote와
// 동일한 통일된 warning 스타일을 그대로 재사용합니다.
//
// inheritance-page-refine에서, warning panel의 4면 border(및 border-l-4
// accent)를 제거하고 guardianship/lease와 동일한 제목 왼쪽 짧은 세로
// accent(h-5 w-1.5)로 정리합니다. 배경(bg-slate-50)·문구는 그대로
// 유지했습니다.
export default function InheritanceFirstCheck() {
  return (
    <section id="first-check" className="scroll-mt-20 border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {INHERITANCE_FIRST_CHECK_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {INHERITANCE_FIRST_CHECK_DESCRIPTION}
        </p>

        <ol className="mt-10 divide-y divide-gray-200 border-t border-gray-200">
          {INHERITANCE_FIRST_CHECK_ITEMS.map((item, index) => (
            <li key={item.title} className="flex gap-4 py-5">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-brand text-xs font-semibold text-brand"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 sm:text-base">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 max-w-3xl rounded-sm bg-slate-50 p-6">
          <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg">
            <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{INHERITANCE_FIRST_CHECK_WARNING.title}</span>
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {INHERITANCE_FIRST_CHECK_WARNING.content}
          </p>
        </div>
      </div>
    </section>
  );
}
