import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import FAQPreview from "@/components/FAQPreview";
import CorporateHero from "@/components/registration/CorporateHero";
import CorporateIntro from "@/components/registration/CorporateIntro";
import CorporateEntityTypes from "@/components/registration/CorporateEntityTypes";
import RegistrationTypesSection from "@/components/registration/RegistrationTypesSection";
import CorporateDecisionCheck from "@/components/registration/CorporateDecisionCheck";
import RegistrationDocumentsSection from "@/components/registration/RegistrationDocumentsSection";
import RegistrationCTA from "@/components/registration/RegistrationCTA";
import Reveal from "@/components/Reveal";
import {
  CORPORATE_CTA,
  CORPORATE_DOCUMENT_CATEGORIES,
  CORPORATE_DOCUMENTS_DESCRIPTION,
  CORPORATE_DOCUMENTS_HEADING,
  CORPORATE_DOCUMENTS_NOTE,
  CORPORATE_FAQ_HEADING,
  CORPORATE_FAQ_ITEMS,
  CORPORATE_PROCESS_DESCRIPTION,
  CORPORATE_PROCESS_HEADING,
  CORPORATE_PROCESS_STEPS,
  CORPORATE_TYPES,
  CORPORATE_TYPES_DESCRIPTION,
  CORPORATE_TYPES_HEADING,
} from "@/lib/corporate-registration";

// title.template(layout.tsx)이 "%s | 사무소명"을 자동으로 붙여주므로 다른
// 업무 페이지와 동일하게 짧은 title만 지정합니다.
export const metadata: Metadata = {
  title: "법인등기",
  description:
    "회사 설립과 임원·상호·목적·본점·자본금 등 주요 변경등기의 기본 확인사항과 진행 흐름을 안내합니다.",
};

// corporate-registration-design-audit에서 "안 3"(ProcessSection/
// FAQPreview처럼 이미 범용화된 것만 재사용하고, 나머지는 법인등기 전용으로
// 독립 구현)으로 확정된 페이지입니다. 기존 ServicePlaceholder 자리를
// 실제 콘텐츠로 교체합니다.
//
// registration-shared-pattern-audit에서 부동산등기와 비교한 결과 Types/
// Documents/CTA의 JSX/className이 byte-identical했으므로,
// registration-shared-components-refactor에서 등기 그룹 전용 공통
// 컴포넌트(RegistrationTypesSection/RegistrationDocumentsSection/
// RegistrationCTA)로 추출했습니다. 순수 refactor이므로 화면/문구/data는
// 전혀 변하지 않았습니다.
//
// Hero/Intro는 여전히 법인등기 전용 컴포넌트를 그대로 사용합니다(Hero는
// 공통 이미지 A/B 계획 대기, Intro는 민사 사례 확보 후 재판단 — 아직
// 공통화하지 않음). 이 페이지만의 고유 섹션인 CorporateDecisionCheck도
// 그대로 독립 유지합니다: 법인등기는 등기신청 전에 회사 내부 의사결정
// (주주총회·이사회 결의 등)을 먼저 확인해야 하는 경우가 있다는, 부동산
// 등기에는 없는 성격을 반영하므로 공통화 대상이 아닙니다.
//
// CorporateIntro 바로 다음, RegistrationTypesSection 바로 앞에는
// CorporateEntityTypes를 추가했습니다: 이 페이지가 지금까지 주식회사를
// 대표 예시로 설명해 온 것을 보완해, 실제 법인·단체는 형태가 다양하고
// 형태에 따라 설립·변경 절차가 다를 수 있다는 점을 알리는 섹션입니다.
// RegistrationTypesSection(등기 유형별 구분)과는 다른 층위의 정보이므로
// 그 컴포넌트를 재사용하지 않고 법인등기 전용으로 독립 구현했습니다.
//
// 진행 절차(ProcessSection)와 FAQ(FAQPreview)는 다른 상세페이지와 동일한
// 공용 컴포넌트를 데이터만 바꿔 재사용합니다. 두 컴포넌트 자체는
// 수정하지 않았습니다. 법인등기 전용 콘텐츠는
// src/lib/corporate-registration.ts에 격리되어 있으며, 기존 constants.ts는
// 이 페이지 구현으로 전혀 변경되지 않았습니다.
export default function CorporateRegistrationPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <CorporateHero />
        <Reveal>
          <CorporateIntro />
        </Reveal>
        <Reveal>
          <CorporateEntityTypes />
        </Reveal>
        <Reveal>
          <RegistrationTypesSection
            heading={CORPORATE_TYPES_HEADING}
            description={CORPORATE_TYPES_DESCRIPTION}
            items={CORPORATE_TYPES}
          />
        </Reveal>
        <Reveal>
          <CorporateDecisionCheck />
        </Reveal>
        <Reveal>
          <RegistrationDocumentsSection
            heading={CORPORATE_DOCUMENTS_HEADING}
            description={CORPORATE_DOCUMENTS_DESCRIPTION}
            categories={CORPORATE_DOCUMENT_CATEGORIES}
            note={CORPORATE_DOCUMENTS_NOTE}
          />
        </Reveal>
        <Reveal>
          <ProcessSection
            steps={CORPORATE_PROCESS_STEPS}
            heading={CORPORATE_PROCESS_HEADING}
            description={CORPORATE_PROCESS_DESCRIPTION}
            variant="timeline"
          />
        </Reveal>
        <Reveal>
          <FAQPreview items={CORPORATE_FAQ_ITEMS} heading={CORPORATE_FAQ_HEADING} />
        </Reveal>
        <Reveal>
          <RegistrationCTA
            heading={CORPORATE_CTA.heading}
            description={CORPORATE_CTA.description}
            buttonLabel={CORPORATE_CTA.buttonLabel}
            inquiryType="corporate-registration"
          />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
