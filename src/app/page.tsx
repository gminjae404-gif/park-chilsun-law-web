import Header from "@/components/Header";
import HomeInteractiveSections from "@/components/HomeInteractiveSections";
import FAQPreview from "@/components/FAQPreview";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import OfficeHero from "@/components/office/OfficeHero";
import OfficeGuide from "@/components/office/OfficeGuide";
import PracticeAreasOverview from "@/components/office/PracticeAreasOverview";
import DirectionsSection from "@/components/office/DirectionsSection";
import RegistrationTypesSection from "@/components/registration/RegistrationTypesSection";
import { HOME_FAQ_ITEMS } from "@/lib/constants";
import { REAL_ESTATE_TYPES } from "@/lib/real-estate-registration";
import { isConsultationEmailConfigured } from "@/lib/consultation-email";

// 홈 section 순서: Header → Hero → 주요업무(부동산등기 강조) → 전체
// 업무분야 → 업무 진행 안내 → FAQ → 상담/연락 → 오시는 길 → Footer.
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
      </main>
      <Footer />
    </>
  );
}
