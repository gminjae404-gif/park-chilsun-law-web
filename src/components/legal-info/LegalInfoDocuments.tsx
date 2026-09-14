import {
  LEGAL_INFO_DOCUMENTS,
  LEGAL_INFO_DOCUMENTS_HEADING,
  LEGAL_INFO_DOCUMENTS_NOTE,
  LEGAL_INFO_EFAMILY_LINK,
  LEGAL_INFO_GOV24_LINK,
} from "@/lib/legal-info";

// 6개 증명서 중 5개는 전자가족관계등록시스템, 1개(주민등록표 등·초본)는
// 정부24가 발급처입니다. 목록 아래 발급처별 공식 링크 2개를 두고,
// 발급 형태가 사건마다 달라질 수 있다는 주의 안내는 별도 문단으로
// 분리합니다.
//
// legal-info-page-refine에서, 이 안내는 heading 없는 보조 문구이므로
// 4면 border와 border-l-4 accent를 모두 제거하고 배경(bg-slate-50)과
// padding만으로 구분합니다("simple block" 규칙 — heading이 없는 박스는
// accent를 새로 넣지 않음). 문구는 변경하지 않았습니다.
export default function LegalInfoDocuments() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {LEGAL_INFO_DOCUMENTS_HEADING}
        </h2>

        <dl className="mt-10 grid grid-cols-1 border-t border-gray-200 sm:grid-cols-2 sm:gap-x-12">
          {LEGAL_INFO_DOCUMENTS.map((doc) => (
            <div key={doc.title} className="border-b border-gray-200 py-6">
              <dt className="text-base font-semibold text-gray-900 sm:text-lg">{doc.title}</dt>
              <dd className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">{doc.description}</dd>
              <dd className="mt-2 text-xs text-gray-500">발급처: {doc.issuerLabel}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
          {[LEGAL_INFO_EFAMILY_LINK, LEGAL_INFO_GOV24_LINK].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark"
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
              <span className="ml-1 text-xs text-gray-400">({link.source} · 새 창)</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 max-w-3xl rounded-sm bg-slate-50 p-6">
          <p className="text-sm leading-6 text-gray-600 sm:text-base">{LEGAL_INFO_DOCUMENTS_NOTE}</p>
        </div>
      </div>
    </section>
  );
}
