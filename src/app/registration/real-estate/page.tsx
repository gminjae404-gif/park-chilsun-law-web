import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import FAQPreview from "@/components/FAQPreview";
import RealEstateHero from "@/components/registration/RealEstateHero";
import RealEstateIntro from "@/components/registration/RealEstateIntro";
import RegistrationTypesSection from "@/components/registration/RegistrationTypesSection";
import RegistrationDocumentsSection from "@/components/registration/RegistrationDocumentsSection";
import RegistrationCTA from "@/components/registration/RegistrationCTA";
import Reveal from "@/components/Reveal";
import {
  REAL_ESTATE_CTA,
  REAL_ESTATE_DOCUMENT_CATEGORIES,
  REAL_ESTATE_DOCUMENTS_DESCRIPTION,
  REAL_ESTATE_DOCUMENTS_HEADING,
  REAL_ESTATE_DOCUMENTS_NOTE,
  REAL_ESTATE_FAQ_HEADING,
  REAL_ESTATE_FAQ_ITEMS,
  REAL_ESTATE_PROCESS_DESCRIPTION,
  REAL_ESTATE_PROCESS_HEADING,
  REAL_ESTATE_PROCESS_STEPS,
  REAL_ESTATE_TYPES,
  REAL_ESTATE_TYPES_DESCRIPTION,
  REAL_ESTATE_TYPES_HEADING,
} from "@/lib/real-estate-registration";

// title.template(layout.tsx)이 "%s | 사무소명"을 자동으로 붙여주므로 다른
// 업무 페이지와 동일하게 짧은 title만 지정합니다.
export const metadata: Metadata = {
  title: "부동산등기",
  description:
    "매매·증여·상속에 따른 소유권이전등기와 근저당권·전세권 등 부동산등기의 기본 절차와 준비자료를 안내합니다.",
};

// services-architecture-audit에서 첫 실제 업무 상세페이지로 선정된 부동산등기
// 페이지입니다. 기존 ServicePlaceholder 자리를 실제 콘텐츠로 교체합니다.
//
// 진행 절차(ProcessSection)와 FAQ(FAQPreview)는 개인회생/개인파산과 동일한
// 공용 컴포넌트를 데이터만 바꿔 재사용합니다(steps/items/heading/description
// props). 두 컴포넌트 자체는 수정하지 않았습니다.
//
// registration-shared-pattern-audit에서 법인등기와 비교한 결과 Types/
// Documents/CTA의 JSX/className이 byte-identical했으므로,
// registration-shared-components-refactor에서 등기 그룹 전용 공통
// 컴포넌트(RegistrationTypesSection/RegistrationDocumentsSection/
// RegistrationCTA)로 추출했습니다. 순수 refactor이므로 화면/문구/data는
// 전혀 변하지 않았습니다. Hero/Intro는 여전히 부동산등기 전용
// 컴포넌트를 그대로 사용합니다(Hero는 공통 이미지 A/B 계획 대기, Intro는
// 민사 사례 확보 후 재판단 — 아직 공통화하지 않음).
//
// 부동산등기 전용 콘텐츠는 src/lib/real-estate-registration.ts에
// 격리되어 있으며, 기존 constants.ts는 전혀 변경되지 않았습니다.
export default function RealEstateRegistrationPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <RealEstateHero />
        <Reveal>
          <RealEstateIntro />
        </Reveal>
        <Reveal>
          <RegistrationTypesSection
            heading={REAL_ESTATE_TYPES_HEADING}
            description={REAL_ESTATE_TYPES_DESCRIPTION}
            items={REAL_ESTATE_TYPES}
          />
        </Reveal>
        <Reveal>
          <RegistrationDocumentsSection
            heading={REAL_ESTATE_DOCUMENTS_HEADING}
            description={REAL_ESTATE_DOCUMENTS_DESCRIPTION}
            categories={REAL_ESTATE_DOCUMENT_CATEGORIES}
            note={REAL_ESTATE_DOCUMENTS_NOTE}
          />
        </Reveal>
        <Reveal>
          <ProcessSection
            steps={REAL_ESTATE_PROCESS_STEPS}
            heading={REAL_ESTATE_PROCESS_HEADING}
            description={REAL_ESTATE_PROCESS_DESCRIPTION}
            variant="timeline"
          />
        </Reveal>
        <Reveal>
          <FAQPreview items={REAL_ESTATE_FAQ_ITEMS} heading={REAL_ESTATE_FAQ_HEADING} />
        </Reveal>
        <Reveal>
          <RegistrationCTA
            heading={REAL_ESTATE_CTA.heading}
            description={REAL_ESTATE_CTA.description}
            buttonLabel={REAL_ESTATE_CTA.buttonLabel}
            inquiryType="real-estate-registration"
          />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
