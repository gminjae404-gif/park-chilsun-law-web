import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ObjectionToClaimEnforcementStayArticle from "@/components/legal-info/ObjectionToClaimEnforcementStayArticle";
import { HEADER_BRAND_NAME } from "@/lib/constants";
import { OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_META } from "@/lib/legal-info-objection-to-claim-enforcement-stay";

// title.template(layout.tsx)이 "%s | 법무사 박칠선 사무소"를 자동으로
// 붙여주므로 title은 짧은 값만 지정하면 됩니다. openGraph/twitter는
// 홈이나 앞선 글들의 값을 상속하지 않고 이 페이지 고유의 값으로 전부
// 다시 지정합니다(canonical·OpenGraph URL을 이 페이지 경로에 맞춥니다).
const ogTitle = `${OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_META.title} | ${HEADER_BRAND_NAME}`;

export const metadata: Metadata = {
  title: OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_META.title,
  description: OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_META.seoDescription,
  alternates: { canonical: OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_META.href },
  openGraph: {
    type: "article",
    locale: "ko_KR",
    url: OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_META.href,
    title: ogTitle,
    description: OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_META.seoDescription,
    siteName: HEADER_BRAND_NAME,
  },
  twitter: {
    card: "summary",
    title: ogTitle,
    description: OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_META.seoDescription,
  },
};

// /legal-info의 서른일곱 번째 실제 법률정보 상세글입니다. 본문 콘텐츠는
// src/lib/legal-info-objection-to-claim-enforcement-stay.ts 에
// 격리되어 있고, 이 페이지는 그 데이터를 렌더링하는
// ObjectionToClaimEnforcementStayArticle을 Header/Footer로 감싸기만
// 합니다(앞선 서른여섯 글의 page.tsx와 동일한 구조).
export default function ObjectionToClaimEnforcementStayPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <ObjectionToClaimEnforcementStayArticle />
      </main>
      <Footer />
    </>
  );
}
