import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import FAQPreview from "@/components/FAQPreview";
import RecoveryHero from "@/components/individual-recovery/RecoveryHero";
import RecoveryIntro from "@/components/individual-recovery/RecoveryIntro";
import RecoveryKeyFactors from "@/components/individual-recovery/RecoveryKeyFactors";
import RecoverySituations from "@/components/individual-recovery/RecoverySituations";
import RequiredDocuments from "@/components/individual-recovery/RequiredDocuments";
import RecoveryCTA from "@/components/individual-recovery/RecoveryCTA";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "개인회생 안내",
  description:
    "개인회생 절차를 검토할 때 확인해야 하는 기본 사항을 안내합니다. 구체적인 법률 판단은 상담을 통해 확인하시기 바랍니다.",
};

// 진행 절차(ProcessSection)와 FAQ(FAQPreview)는 메인 페이지와 동일한
// 컴포넌트를 그대로 재사용해 표현을 일관되게 유지합니다. FAQ는 id="faq"를
// 지정해 홈페이지의 "자주 묻는 질문 전체보기" 링크가 이 섹션으로 바로
// 이동할 수 있게 합니다.
//
// 가독성 재구성(2026-08): 기존 10개 섹션(Hero/Intro/Eligibility/
// ReviewFactors/DetailedReview/Checklist/Process/Documents/FAQ/CTA)을
// 개인파산 페이지 수준의 가벼운 8개 섹션으로 재배치했습니다. 법률 문구는
// constants.ts에서 전혀 삭제·수정하지 않았으며, RecoveryKeyFactors가 기존
// RecoveryEligibility+RecoveryReviewFactors를, RequiredDocuments가 기존
// PreApplicationChecklist를 각각 카드/아코디언 형태로 흡수해 보여줍니다.
// RecoverySituations는 RECOVERY_DETAILED_REVIEW_TOPICS만 사용합니다
// (FAQ_ITEMS는 사용하지 않음 — 아래 FAQ 섹션과 역할이 겹치지 않도록
// 심화 검토사항/실제 상황별 질문으로 분리했습니다).
export default function IndividualRecoveryPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <RecoveryHero />
        <Reveal>
          <RecoveryIntro />
        </Reveal>
        <Reveal>
          <RecoveryKeyFactors />
        </Reveal>
        <Reveal>
          <RecoverySituations />
        </Reveal>
        <Reveal>
          <ProcessSection variant="timeline" />
        </Reveal>
        <Reveal>
          <RequiredDocuments />
        </Reveal>
        <Reveal>
          <FAQPreview id="faq" heading="개인회생 자주 묻는 질문" />
        </Reveal>
        <Reveal>
          <RecoveryCTA />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
