import type { Metadata } from "next";
import { HEADER_BRAND_NAME } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalInfoArticles from "@/components/legal-info/LegalInfoArticles";
import LegalInfoCaseGuide from "@/components/legal-info/LegalInfoCaseGuide";
import LegalInfoTerms from "@/components/legal-info/LegalInfoTerms";
import LegalInfoDocuments from "@/components/legal-info/LegalInfoDocuments";
import LegalInfoOfficialLinks from "@/components/legal-info/LegalInfoOfficialLinks";
import { LEGAL_INFO_FOOTER_NOTICE, LEGAL_INFO_HERO } from "@/lib/legal-info";

// title.template(layout.tsx)이 "%s | 사무소명"을 자동으로 붙여주므로 다른
// 페이지와 동일하게 짧은 title만 지정합니다.
const title = "법률정보";
const description =
  "사건번호와 사건검색, 법원 절차 용어, 가족관계·주민등록 증명서 발급과 공식 법률정보 확인처를 안내합니다.";
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

// Header "법률정보" 대분류가 연결되는 페이지(/legal-info)입니다. 업무분야를
// 다시 소개하는 허브가 아니라, 사건을 진행하며 실제로 자주 확인하는
// 공통 실무 정보(사건번호·사건검색 / 법원 문서 용어 / 증명서 발급 /
// 공식 확인처)를 안내합니다. 각 상세 업무페이지의 법률설명·FAQ는 이
// 페이지에서 복제하지 않았고, 기간·비용·수수료·관할·불복기간·신청자격·
// 법무사의 대리권에 관한 내용은 새로 추가하지 않았습니다. Hero는 다른
// 간단한 페이지와 마찬가지로 별도 컴포넌트로 분리하지 않고 인라인으로
// 둡니다. 이 페이지 자체에는 ConsultationCTA를 두지 않습니다 — Header의
// 상담신청 진입점을 그대로 유지합니다. Header/Footer 컴포넌트 자체나
// 다른 페이지의 디자인·문구는 전혀 수정하지 않았습니다.
//
// legal-info-page-refine에서, 하단 "이용 전 확인해 주세요" 안내의 4면
// border와 border-l-4 accent를 제거하고 enforcement/family 등과 동일하게
// 제목 왼쪽 짧은 세로 accent(h-5 w-1.5)로 정리합니다. 배경(bg-slate-50)·
// 문구·순서는 그대로 유지했습니다.
export default function LegalInfoPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight break-keep">
              {LEGAL_INFO_HERO.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              {LEGAL_INFO_HERO.lead}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">{LEGAL_INFO_HERO.note}</p>
          </div>
        </section>

        <LegalInfoArticles />
        <LegalInfoCaseGuide />
        <LegalInfoTerms />
        <LegalInfoDocuments />
        <LegalInfoOfficialLinks />

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
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
