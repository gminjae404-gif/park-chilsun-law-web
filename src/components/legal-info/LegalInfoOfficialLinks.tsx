import {
  LEGAL_INFO_OFFICIAL_LINKS,
  LEGAL_INFO_OFFICIAL_LINKS_DESCRIPTION,
  LEGAL_INFO_OFFICIAL_LINKS_HEADING,
} from "@/lib/legal-info";

// 5개 공식 사이트를 FamilyAreas·PracticeAreaCards와 동일한 border-t/
// border-b 목록으로 표시합니다. 전부 외부 사이트이므로 target="_blank" +
// rel="noopener noreferrer"를 사용하고, 링크 라벨 자체가 이미 기관명이라
// 별도 출처 캡션 없이 "새 창" 표기만 덧붙입니다.
export default function LegalInfoOfficialLinks() {
  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {LEGAL_INFO_OFFICIAL_LINKS_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {LEGAL_INFO_OFFICIAL_LINKS_DESCRIPTION}
        </p>

        <ul className="mt-10 border-t border-gray-200">
          {LEGAL_INFO_OFFICIAL_LINKS.map((site) => (
            <li key={site.href} className="border-b border-gray-200 py-6">
              <h3 className="text-base font-semibold text-gray-900 sm:text-lg">{site.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">{site.description}</p>
              <a
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark"
              >
                공식 사이트 바로가기
                <span aria-hidden="true">↗</span>
              </a>
              <span className="ml-1 text-xs text-gray-400">(새 창)</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
