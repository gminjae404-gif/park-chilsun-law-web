import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InheritanceRegistrationArticle from "@/components/legal-info/InheritanceRegistrationArticle";
import { HEADER_BRAND_NAME } from "@/lib/constants";
import { INHERITANCE_REGISTRATION_META } from "@/lib/legal-info-inheritance-registration";

// title.template(layout.tsx)이 "%s | 법무사 박칠선 사무소"를 자동으로
// 붙여주므로 title은 짧은 값만 지정합니다. openGraph/twitter는 root
// layout의 홈 기준 값을 상속하지 않고 이 페이지 고유의 값으로 전부
// 다시 지정합니다(요청하신 대로 canonical·OpenGraph URL을 새 페이지
// 경로에 맞춥니다).
const ogTitle = `${INHERITANCE_REGISTRATION_META.title} | ${HEADER_BRAND_NAME}`;

export const metadata: Metadata = {
  title: INHERITANCE_REGISTRATION_META.title,
  description: INHERITANCE_REGISTRATION_META.seoDescription,
  alternates: { canonical: INHERITANCE_REGISTRATION_META.href },
  openGraph: {
    type: "article",
    locale: "ko_KR",
    url: INHERITANCE_REGISTRATION_META.href,
    title: ogTitle,
    description: INHERITANCE_REGISTRATION_META.seoDescription,
    siteName: HEADER_BRAND_NAME,
  },
  twitter: {
    card: "summary",
    title: ogTitle,
    description: INHERITANCE_REGISTRATION_META.seoDescription,
  },
};

// /legal-info의 첫 번째 실제 법률정보 상세글입니다. 본문 콘텐츠는
// src/lib/legal-info-inheritance-registration.ts에 격리되어 있고, 이
// 페이지는 그 데이터를 렌더링하는 InheritanceRegistrationArticle을
// Header/Footer로 감싸기만 합니다(다른 단순 페이지와 동일한 구조).
export default function InheritanceRegistrationPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <InheritanceRegistrationArticle />
      </main>
      <Footer />
    </>
  );
}
