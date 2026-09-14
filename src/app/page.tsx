import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReviewFactors from "@/components/ReviewFactors";
import ProcessSection from "@/components/ProcessSection";
import HomeInteractiveSections from "@/components/HomeInteractiveSections";
import FAQPreview from "@/components/FAQPreview";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import OfficeHero from "@/components/office/OfficeHero";
import OfficeGuide from "@/components/office/OfficeGuide";
import PracticeAreasOverview from "@/components/office/PracticeAreasOverview";
import RecoveryBankruptcyHighlight from "@/components/office/RecoveryBankruptcyHighlight";
import { SITE_MODE } from "@/lib/constants";

// siteMode="full"(법무사사무소 종합 홈페이지, 현재 기본값): Hero/업무분야/
// 회생·파산 강조 영역만 새로 구성하고, 자가진단 → FAQ → 상담신청 흐름은
// recovery 모드와 완전히 동일한 컴포넌트(HomeInteractiveSections,
// FAQPreview, ConsultationCTA)를 그대로 재사용합니다. 홈에서는 개인회생
// 전용 ProcessSection을 표시하지 않습니다(상세페이지에는 그대로 유지).
//
// siteMode="recovery": 기존 개인회생·개인파산 특화 홈 구조를 그대로
// 보존합니다(이 분기의 JSX는 이전과 동일합니다).
export default function Home() {
  if (SITE_MODE === "full") {
    return (
      <>
        <Header />
        <main id="main-content" className="flex-1">
          <OfficeHero />
          <Reveal>
            <OfficeGuide />
          </Reveal>
          <Reveal>
            <PracticeAreasOverview />
          </Reveal>
          <Reveal>
            <RecoveryBankruptcyHighlight />
          </Reveal>
          <HomeInteractiveSections>
            <Reveal>
              <FAQPreview
                limit={5}
                heading="개인회생 자주 묻는 질문"
                viewAllHref="/individual-recovery#faq"
              />
            </Reveal>
          </HomeInteractiveSections>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <Reveal>
          <ReviewFactors />
        </Reveal>
        {/* 홈페이지는 정보 밀도를 낮추기 위해 진행 절차를 번호+제목만 표시하는
            compact 형태로, FAQ는 처음 5개만 표시합니다. 개인회생 상세 페이지는
            같은 컴포넌트를 detailed/전체 표시로 사용합니다. */}
        <Reveal>
          <ProcessSection variant="compact" />
        </Reveal>
        {/* 자가진단 ↔ 상담폼 사이의 state 공유는 HomeInteractiveSections(Client
            Component)에서만 처리합니다. FAQPreview는 그 사이에 렌더링되는
            정적 섹션으로, Server Component 상태를 유지한 채 children으로 전달합니다. */}
        <HomeInteractiveSections>
          <Reveal>
            <FAQPreview limit={5} viewAllHref="/individual-recovery#faq" />
          </Reveal>
        </HomeInteractiveSections>
      </main>
      <Footer />
    </>
  );
}
