import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_AFTER_PROCESS_SECTIONS,
  OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_INTRO_PARAGRAPHS,
  OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_META,
  OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_NOTICE_PARAGRAPHS,
  OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_PROCESS_DESCRIPTION,
  OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_PROCESS_HEADING,
  OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_PROCESS_STEPS,
  OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_REFERENCES,
  OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_SECTIONS,
} from "@/lib/legal-info-objection-to-claim-enforcement-stay";

// "52. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~51."이 앞,
// "53.~54."이 뒤). 앞선 서른여섯 개 글과 동일하게 실제 렌더링은 공용
// 레이아웃인 LegalInfoArticleLayout이 담당하며, 이 파일은 청구이의의
// 소와 강제집행정지 절차와 준비자료 글의 데이터를 그 레이아웃에
// 연결하는 역할만 합니다(새로운 디자인을 만들지 않고 기존 글과 동일한
// 레이아웃·폭·타이포그래피·CTA 패턴을 재사용합니다).
export default function ObjectionToClaimEnforcementStayArticle() {
  return (
    <LegalInfoArticleLayout
      category={OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_META.category}
      title={OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_META.title}
      asOfDate={OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_META.asOfDate}
      introParagraphs={OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_SECTIONS}
      processHeading={OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_PROCESS_HEADING}
      processDescription={OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_PROCESS_DESCRIPTION}
      processSteps={OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_PROCESS_STEPS}
      sectionsAfterProcess={OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_AFTER_PROCESS_SECTIONS}
      noticeParagraphs={OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_NOTICE_PARAGRAPHS}
      references={OBJECTION_TO_CLAIM_ENFORCEMENT_STAY_REFERENCES}
      relatedLinks={[
        { href: "/legal-info/payment-order-procedure", label: "지급명령 신청 절차와 준비자료" },
        { href: "/legal-info/claim-seizure-collection-order", label: "채권압류 및 추심명령 절차와 준비자료" },
        { href: "/legal-info/real-estate-compulsory-auction", label: "부동산 강제경매 신청 절차와 준비자료" },
        { href: "/legal-info/real-estate-auction-distribution-objection", label: "부동산 경매 배당이의·배당이의의 소 절차와 준비자료" },
        { href: "/legal-info/real-estate-auction-withdrawal-stay-cancellation", label: "부동산 경매 취하·정지·취소 절차와 준비자료" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
