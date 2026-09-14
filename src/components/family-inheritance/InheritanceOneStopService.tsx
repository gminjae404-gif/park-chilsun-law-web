import {
  INHERITANCE_ONE_STOP_HEADING,
  INHERITANCE_ONE_STOP_PARAGRAPHS,
  INHERITANCE_ONE_STOP_WARNING,
} from "@/lib/family-inheritance";

// "안심상속 원스톱서비스" 섹션입니다. CivilIntro/FamilyIntro와 동일한
// "제목+얇은 구분선+문단" editorial 패턴을 짧게 재사용하되, 신청기간과
// 상속포기·한정승인 법정기간이 별개라는 핵심 경고를 통일된 warning
// panel로 강조합니다. 서비스의 구체적인 조회기관·소요일수 등 세부
// 수치는 나열하지 않습니다.
//
// inheritance-page-refine에서, warning panel의 4면 border(및 border-l-4
// accent)를 제거하고 제목 왼쪽 짧은 세로 accent(h-5 w-1.5)로 정리합니다.
// 배경(bg-slate-50)·문구는 그대로 유지했습니다.
export default function InheritanceOneStopService() {
  return (
    <section className="border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {INHERITANCE_ONE_STOP_HEADING}
        </h2>
        <div className="mt-6 flex max-w-3xl flex-col gap-3 border-t border-gray-100 pt-6">
          {INHERITANCE_ONE_STOP_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-6 text-gray-700 sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 max-w-3xl rounded-sm bg-slate-50 p-6">
          <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg">
            <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{INHERITANCE_ONE_STOP_WARNING.title}</span>
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {INHERITANCE_ONE_STOP_WARNING.content}
          </p>
        </div>
      </div>
    </section>
  );
}
