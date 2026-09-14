import {
  LEGAL_INFO_CASE_GUIDE_HEADING,
  LEGAL_INFO_CASE_GUIDE_INTRO,
  LEGAL_INFO_CASE_GUIDE_NOTE,
  LEGAL_INFO_CASE_SEARCH_LINKS,
  LEGAL_INFO_CASE_TYPES,
} from "@/lib/legal-info";

// 사건구분 10개는 HTML table이 아니라 dl(정의 목록)로 표시합니다. table은
// 폭이 고정되어 모바일에서 가로스크롤이 생기기 쉬운 반면, dl은 각 행을
// flex-wrap으로 감싸 좁은 화면에서도 코드/설명이 자연스럽게 줄바꿈되어
// 가로스크롤 없이 읽을 수 있습니다(Footer의 dt/dd 행과 동일한 언어).
//
// 외부 공식 사이트 링크(scourt.go.kr)는 target="_blank" + rel="noopener
// noreferrer"로 새 창에서 열고, 링크 옆에 출처("대한민국 법원")를 작은
// 텍스트로 표시해 내부 링크(Link)와 시각적으로 구분되게 합니다.
export default function LegalInfoCaseGuide() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {LEGAL_INFO_CASE_GUIDE_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {LEGAL_INFO_CASE_GUIDE_INTRO}
        </p>

        <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-gray-200 pt-6 sm:grid-cols-2">
          {LEGAL_INFO_CASE_TYPES.map((item) => (
            <div key={item.code} className="flex flex-wrap items-baseline gap-2">
              <dt className="flex-shrink-0 font-semibold text-gray-900">{item.code}</dt>
              <dd className="text-gray-600">: {item.label}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-500">
          {LEGAL_INFO_CASE_GUIDE_NOTE}
        </p>

        <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
          {LEGAL_INFO_CASE_SEARCH_LINKS.map((link) => (
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
      </div>
    </section>
  );
}
