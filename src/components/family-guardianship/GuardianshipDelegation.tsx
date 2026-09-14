import {
  GUARDIANSHIP_DELEGATION_CONVERSE,
  GUARDIANSHIP_DELEGATION_HEADING,
  GUARDIANSHIP_DELEGATION_KEY_POINT,
  GUARDIANSHIP_DELEGATION_PARAGRAPH,
  GUARDIANSHIP_DELEGATION_WARNING,
} from "@/lib/family-guardianship";

// "위임·대리와 후견은 어떻게 다른가요?" 섹션입니다. 위임/대리의 정의
// 문단과 두 개의 확정 핵심 문구(판단능력이 있는 경우/문제되는 경우)는
// 순서 그대로 문단으로 이어서 보여주고, "위임장이 항상 유효한 것은
// 아니다"라는 주의는 통일된 warning panel로 분리해 다른 문단과 섞이지
// 않도록 했습니다.
//
// guardianship-page-refine에서, warning panel의 4면 border(및 border-l-4
// accent)를 제거하고 LeaseRelatedMatters와 동일한 제목 왼쪽 짧은 세로
// accent(h-5 w-1.5)로 정리합니다. 배경(bg-slate-50)·문구는 그대로
// 유지했습니다.
export default function GuardianshipDelegation() {
  return (
    <section id="delegation" className="scroll-mt-20 border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {GUARDIANSHIP_DELEGATION_HEADING}
        </h2>
        <div className="mt-6 flex max-w-3xl flex-col gap-3 border-t border-gray-100 pt-6">
          <p className="text-sm leading-6 text-gray-700 sm:text-base">
            {GUARDIANSHIP_DELEGATION_PARAGRAPH}
          </p>
          <p className="text-sm leading-6 text-gray-700 sm:text-base">
            {GUARDIANSHIP_DELEGATION_KEY_POINT}
          </p>
          <p className="text-sm leading-6 text-gray-700 sm:text-base">
            {GUARDIANSHIP_DELEGATION_CONVERSE}
          </p>
        </div>

        <div className="mt-8 max-w-3xl rounded-sm bg-slate-50 p-6">
          <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg break-keep">
            <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{GUARDIANSHIP_DELEGATION_WARNING.title}</span>
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {GUARDIANSHIP_DELEGATION_WARNING.content}
          </p>
        </div>
      </div>
    </section>
  );
}
