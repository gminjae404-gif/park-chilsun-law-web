import type { Metadata } from "next";
import Header from "@/components/Header";
import HomeInteractiveSections from "@/components/HomeInteractiveSections";
import FAQPreview from "@/components/FAQPreview";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SiteSearch from "@/components/SiteSearch";
import OfficeHero from "@/components/office/OfficeHero";
import OfficeGuide from "@/components/office/OfficeGuide";
import PracticeAreasOverview from "@/components/office/PracticeAreasOverview";
import DirectionsSection from "@/components/office/DirectionsSection";
import LegalInfoLink from "@/components/office/LegalInfoLink";
import RegistrationTypesSection from "@/components/registration/RegistrationTypesSection";
import { HOME_FAQ_ITEMS } from "@/lib/constants";
import { REAL_ESTATE_TYPES } from "@/lib/real-estate-registration";
import { isConsultationEmailConfigured } from "@/lib/consultation-email";

// title/description은 layout.tsx의 title.default·description을 그대로
// 사용합니다(홈 페이지는 별도로 지정하지 않음). canonical만 명시합니다.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// 홈 section 순서: Header → Hero → 통합검색 → 주요업무(부동산등기 강조) →
// 전체 업무분야 → 업무 진행 안내 → FAQ → 상담/연락 → 오시는 길 →
// 법률정보 → Footer.
//
// 통합검색(SiteSearch)은 업무 페이지가 많아져 메뉴로 원하는 페이지를
// 찾기 어려워진 문제를 해결하기 위해 Hero 바로 아래, 주요업무 section
// 바로 위에 둡니다. state·keyboard 상호작용이 필요한 부분만
// SiteSearch(Client Component)로 분리했고, Hero와 이 페이지 자체는
// 그대로 Server Component로 유지합니다.
//
// 이 section은 다른 section들과 달리 Reveal로 감싸지 않습니다.
// Reveal이 "visible" 상태가 되면 transform(translateY(0), 시각적으로는
// 무변화)을 적용하는데, computed transform이 none이 아니면 새 stacking
// context가 생겨 그 안의 검색결과 패널(z-20)이 다음 형제 section(같은
// Reveal 패턴)의 stacking context에 가려지는 문제가 있었습니다(자체
// Playwright 클릭 QA에서 실제로 재현·확인). OfficeHero도 이미 Reveal
// 없이 렌더링되는 전례가 있어, 검색 section도 동일하게 Reveal을
// 생략해 이 문제를 근본적으로 피합니다.
//
// "주요업무 — 부동산등기" 섹션은 새 법률문구를 만들지 않고, 이미
// /registration/real-estate에서 검토·확정된 REAL_ESTATE_TYPES를 그대로
// 재사용합니다(RegistrationTypesSection은 그 페이지와 완전히 동일한
// 컴포넌트이며 데이터만 그대로 전달합니다).
//
// isConsultationEmailConfigured()는 서버 전용 환경변수(SMTP_HOST 등)
// 존재 여부만 이 Server Component에서 미리 확인해, 그 결과(boolean)만
// 클라이언트 컴포넌트(ConsultationForm)로 내려줍니다. 실제 값은 절대
// 클라이언트로 전달되지 않습니다.
export default function Home() {
  const emailConfigured = isConsultationEmailConfigured();

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <OfficeHero />
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <SiteSearch />
            </div>
          </div>
        </section>
        <Reveal>
          <RegistrationTypesSection
            heading="주요업무 — 부동산등기"
            description="박칠선 법무사사무소는 부동산등기를 중심으로 아래와 같은 등기 업무를 안내합니다."
            items={REAL_ESTATE_TYPES}
            viewAllHref="/registration/real-estate"
            viewAllLabel="부동산등기 자세히 보기"
          />
        </Reveal>
        <Reveal>
          <PracticeAreasOverview />
        </Reveal>
        <Reveal>
          <OfficeGuide />
        </Reveal>
        <HomeInteractiveSections emailConfigured={emailConfigured}>
          <Reveal>
            <FAQPreview items={HOME_FAQ_ITEMS} heading="자주 묻는 질문" id="faq" />
          </Reveal>
        </HomeInteractiveSections>
        <Reveal>
          <DirectionsSection />
        </Reveal>
        <Reveal>
          <LegalInfoLink />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
