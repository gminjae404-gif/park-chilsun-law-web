import {
  INHERITANCE_DUTY_SPLIT_COLUMNS,
  INHERITANCE_DUTY_SPLIT_HEADING,
  INHERITANCE_DUTY_SPLIT_NOTE,
} from "@/lib/family-inheritance";

// "등기절차와 세무업무 구분" 섹션입니다. 스펙에서 권장한 대로 2열 카드로
// 구성하며, 두 카드가 "업무영역의 차이"를 보여줄 뿐 우열이나 순서를
// 의미하지 않도록 동일한 무게로 표시합니다. 법무사사무소가 세무대리를
// 수행한다는 인상을 주지 않기 위해 note에서 세무전문가 확인 필요성을
// 명확히 안내합니다.
//
// inheritance-page-refine에서, InheritanceRenunciationVsLimited와 동일한
// "2개 영역 비교" 성격의 카드이므로 4면 border를 제거하고 각 제목 아래
// horizontal brand accent로 대체합니다. 카드 배경(bg-slate-50)·spacing·
// 내용은 그대로 유지했습니다.
//
// inheritance-page-refine 보정에서, 이 두 제목("상속등기와 함께 진행하는
// 절차"/"세무사 등 세무전문가에게 확인할 사항")은 다른 카드형 accent보다
// 길어 기본 w-24(96px)가 짧은 장식선처럼 보인다는 피드백에 따라, 이
// 섹션의 accent만 w-44(176px)로 늘렸습니다. 다른 section의 horizontal
// accent(w-24)는 변경하지 않았습니다.
//
// inheritance-page-refine 2차 보정에서, w-44도 두 제목 길이에 비해 아직
// 짧아 보인다는 피드백에 따라 w-56(224px, max-w-full로 모바일 폭 초과
// 방지)로 다시 늘렸습니다.
//
// inheritance-page-refine 3차 보정에서, w-56도 아직 짧다는 피드백에 따라
// w-72(288px, max-w-full 유지)로 다시 늘렸습니다. 두 카드 accent 폭은
// 동일하게 유지합니다.
export default function InheritanceDutySplit() {
  return (
    <section className="border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {INHERITANCE_DUTY_SPLIT_HEADING}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {INHERITANCE_DUTY_SPLIT_COLUMNS.map((column) => (
            <div key={column.title} className="rounded-sm bg-slate-50 p-6">
              <h3 className="text-base font-semibold text-gray-900 sm:text-lg">{column.title}</h3>
              <span aria-hidden="true" className="mt-2 block h-[3px] w-72 max-w-full rounded-full bg-brand" />
              <ul className="mt-4 flex flex-col gap-2">
                {column.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-gray-600">
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

        <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-500">
          {INHERITANCE_DUTY_SPLIT_NOTE}
        </p>
      </div>
    </section>
  );
}
