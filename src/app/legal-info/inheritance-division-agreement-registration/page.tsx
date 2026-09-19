import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InheritanceDivisionAgreementRegistrationArticle from "@/components/legal-info/InheritanceDivisionAgreementRegistrationArticle";
import { HEADER_BRAND_NAME } from "@/lib/constants";
import { INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META } from "@/lib/legal-info-inheritance-division-agreement-registration";

// title.template(layout.tsx)이 "%s | 법무사 박칠선 사무소"를 자동으로
// 붙여주므로 title은 짧은 값만 지정합니다. openGraph/twitter는 홈이나
// 앞선 글들의 값을 상속하지 않고 이 페이지 고유의 값으로 전부 다시
// 지정합니다(canonical·OpenGraph URL을 이 페이지 경로에 맞춥니다).
const ogTitle = `${INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META.title} | ${HEADER_BRAND_NAME}`;

export const metadata: Metadata = {
  title: INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META.title,
  description: INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META.seoDescription,
  alternates: { canonical: INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META.href },
  openGraph: {
    type: "article",
    locale: "ko_KR",
    url: INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META.href,
    title: ogTitle,
    description: INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META.seoDescription,
    siteName: HEADER_BRAND_NAME,
  },
  twitter: {
    card: "summary",
    title: ogTitle,
    description: INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META.seoDescription,
  },
};

// /legal-info의 열네 번째 실제 법률정보 상세글입니다. 본문 콘텐츠는
// src/lib/legal-info-inheritance-division-agreement-registration.ts 에
// 격리되어 있고, 이 페이지는 그 데이터를 렌더링하는
// InheritanceDivisionAgreementRegistrationArticle을 Header/Footer로
// 감싸기만 합니다(앞선 열세 글의 page.tsx와 동일한 구조).
export default function InheritanceDivisionAgreementRegistrationPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <InheritanceDivisionAgreementRegistrationArticle />
      </main>
      <Footer />
    </>
  );
}
