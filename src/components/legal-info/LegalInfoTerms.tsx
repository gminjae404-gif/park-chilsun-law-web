import { LEGAL_INFO_TERMS, LEGAL_INFO_TERMS_HEADING } from "@/lib/legal-info";

// 송달/보정명령/지급명령 3개만 다룹니다. 각 용어는 뜻(content)과 실무에서
// 유의할 점(note)만 짧게 담고, 개별 절차의 세부 기한·불복절차는 이번
// 페이지에서 새로 설명하지 않습니다(향후 별도 콘텐츠로 확장 가능하도록
// 남겨둠).
export default function LegalInfoTerms() {
  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {LEGAL_INFO_TERMS_HEADING}
        </h2>

        <dl className="mt-10 flex flex-col gap-8">
          {LEGAL_INFO_TERMS.map((term) => (
            <div key={term.heading} className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
              <dt className="text-base font-semibold text-gray-900 sm:text-lg">{term.heading}</dt>
              <dd className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">{term.content}</dd>
              <dd className="mt-2 text-sm leading-6 text-gray-500">{term.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
