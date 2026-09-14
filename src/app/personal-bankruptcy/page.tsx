import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import FAQPreview from "@/components/FAQPreview";
import BankruptcyHero from "@/components/personal-bankruptcy/BankruptcyHero";
import BankruptcyDefinitions from "@/components/personal-bankruptcy/BankruptcyDefinitions";
import BankruptcyReviewFactors from "@/components/personal-bankruptcy/BankruptcyReviewFactors";
import BankruptcyDeclarationFlow from "@/components/personal-bankruptcy/BankruptcyDeclarationFlow";
import BankruptcyDischargeReview from "@/components/personal-bankruptcy/BankruptcyDischargeReview";
import BankruptcyPropertyNote from "@/components/personal-bankruptcy/BankruptcyPropertyNote";
import BankruptcyCTA from "@/components/personal-bankruptcy/BankruptcyCTA";
import Reveal from "@/components/Reveal";
import { BANKRUPTCY_FAQ_ITEMS, BANKRUPTCY_PROCESS_NOTE, BANKRUPTCY_PROCESS_STEPS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "개인파산·면책 안내",
  description:
    "개인파산·면책 절차를 검토할 때 확인해야 하는 기본 사항을 안내합니다. 구체적인 법률 판단은 상담을 통해 확인하시기 바랍니다.",
};

// 진행 절차(ProcessSection)와 FAQ(FAQPreview)는 개인회생 페이지와 동일한
// 컴포넌트를 데이터만 바꿔 재사용합니다(steps/items/heading props).
export default function PersonalBankruptcyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <BankruptcyHero />
        <Reveal>
          <BankruptcyDefinitions />
        </Reveal>
        <Reveal>
          <BankruptcyReviewFactors />
        </Reveal>
        <Reveal>
          <BankruptcyDeclarationFlow />
        </Reveal>
        <Reveal>
          <BankruptcyDischargeReview />
        </Reveal>
        <Reveal>
          <BankruptcyPropertyNote />
        </Reveal>
        <Reveal>
          <ProcessSection
            steps={BANKRUPTCY_PROCESS_STEPS}
            heading="개인파산 진행 절차"
            description={BANKRUPTCY_PROCESS_NOTE}
            variant="timeline"
          />
        </Reveal>
        <Reveal>
          <FAQPreview items={BANKRUPTCY_FAQ_ITEMS} heading="개인파산 자주 묻는 질문" />
        </Reveal>
        <Reveal>
          <BankruptcyCTA />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
