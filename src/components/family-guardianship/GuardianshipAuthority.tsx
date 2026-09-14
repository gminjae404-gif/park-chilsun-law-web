import {
  GUARDIANSHIP_AUTHORITY_HEADING,
  GUARDIANSHIP_AUTHORITY_PARAGRAPH,
  GUARDIANSHIP_AUTHORITY_WARNING,
} from "@/lib/family-guardianship";

// "후견인이 모든 것을 마음대로 결정할 수 있나요?" 섹션입니다. 짧은
// 설명 문단 하나와, 이 페이지에서 가장 자주 오해되는 지점("후견개시 =
// 모든 권리 이전")을 통일된 warning panel로 분명하게 바로잡습니다.
//
// guardianship-page-refine에서, warning panel의 4면 border(및 border-l-4
// accent)를 제거하고 LeaseRelatedMatters와 동일한 제목 왼쪽 짧은 세로
// accent(h-5 w-1.5)로 정리합니다. 배경(bg-slate-50)·문구는 그대로
// 유지했습니다.
export default function GuardianshipAuthority() {
  return (
    <section className="border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {GUARDIANSHIP_AUTHORITY_HEADING}
        </h2>
        <p className="mt-6 max-w-3xl border-t border-gray-100 pt-6 text-sm leading-6 text-gray-700 sm:text-base">
          {GUARDIANSHIP_AUTHORITY_PARAGRAPH}
        </p>

        <div className="mt-8 max-w-3xl rounded-sm bg-slate-50 p-6">
          <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg break-keep">
            <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{GUARDIANSHIP_AUTHORITY_WARNING.title}</span>
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {GUARDIANSHIP_AUTHORITY_WARNING.content}
          </p>
        </div>
      </div>
    </section>
  );
}
