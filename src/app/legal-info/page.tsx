import type { Metadata } from "next";
import { HEADER_BRAND_NAME } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import LegalInfoArticles from "@/components/legal-info/LegalInfoArticles";
import LegalInfoCaseGuide from "@/components/legal-info/LegalInfoCaseGuide";
import LegalInfoTerms from "@/components/legal-info/LegalInfoTerms";
import LegalInfoDocuments from "@/components/legal-info/LegalInfoDocuments";
import LegalInfoOfficialLinks from "@/components/legal-info/LegalInfoOfficialLinks";
import { LEGAL_INFO_ARTICLES, LEGAL_INFO_FOOTER_NOTICE, LEGAL_INFO_HERO } from "@/lib/legal-info";
import { getCollectionPageWithBreadcrumbJsonLd } from "@/lib/structured-data";

// title.template(layout.tsx)이 "%s | 사무소명"을 자동으로 붙여주므로 다른
// 페이지와 동일하게 짧은 title만 지정합니다.
const title = "법률정보";
const description =
  "민사·집행, 가사·상속, 부동산등기, 법인등기 법률정보 40편과 사건검색·증명서 발급 정보를 안내합니다.";
const canonicalPath = "/legal-info";
const ogTitle = `${title} | ${HEADER_BRAND_NAME}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: canonicalPath,
    title: ogTitle,
    description,
    siteName: HEADER_BRAND_NAME,
  },
  twitter: {
    card: "summary",
    title: ogTitle,
    description,
  },
};

// 기존 40편의 요약만 클라이언트 목록에 전달합니다. 본문·목차·관련 링크는 유지합니다.
export default function LegalInfoPage() {
  return (
    <>
      <JsonLd data={getCollectionPageWithBreadcrumbJsonLd({ name: title, description, path: canonicalPath })} />
      <Header />
      <main id="main-content" className="flex-1">
        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight break-keep">
              {LEGAL_INFO_HERO.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              민사·집행부터 상속·등기까지, 필요한 절차와 준비자료를 찾아보세요.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">{LEGAL_INFO_HERO.note}</p>
          </div>
        </section>

        <LegalInfoArticles articles={LEGAL_INFO_ARTICLES} />
        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            <details className="rounded-lg border border-gray-200 bg-white">
              <summary className="min-h-12 cursor-pointer rounded-lg px-5 py-4 font-semibold text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">사건검색·법원 용어·증명서·공식 확인처</summary>
              <LegalInfoCaseGuide />
              <LegalInfoTerms />
              <LegalInfoDocuments />
              <LegalInfoOfficialLinks />
            </details>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
            <div className="max-w-3xl rounded-sm bg-slate-50 p-6">
              <h2 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg">
                <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{LEGAL_INFO_FOOTER_NOTICE.heading}</span>
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                {LEGAL_INFO_FOOTER_NOTICE.content}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

