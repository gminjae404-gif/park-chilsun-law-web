import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  SUCCESSION_EXECUTION_CLAUSE_OBJECTION_AFTER_PROCESS_SECTIONS,
  SUCCESSION_EXECUTION_CLAUSE_OBJECTION_INTRO_PARAGRAPHS,
  SUCCESSION_EXECUTION_CLAUSE_OBJECTION_META,
  SUCCESSION_EXECUTION_CLAUSE_OBJECTION_NOTICE_PARAGRAPHS,
  SUCCESSION_EXECUTION_CLAUSE_OBJECTION_PROCESS_DESCRIPTION,
  SUCCESSION_EXECUTION_CLAUSE_OBJECTION_PROCESS_HEADING,
  SUCCESSION_EXECUTION_CLAUSE_OBJECTION_PROCESS_STEPS,
  SUCCESSION_EXECUTION_CLAUSE_OBJECTION_REFERENCES,
  SUCCESSION_EXECUTION_CLAUSE_OBJECTION_SECTIONS,
} from "@/lib/legal-info-succession-execution-clause-objection";

// "65. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~64."가 앞,
// "66.~67."가 뒤). 앞선 서른여덟 개 글과 동일하게 실제 렌더링은 공용
// 레이아웃인 LegalInfoArticleLayout이 담당하며, 이 파일은 승계집행문
// 부여와 집행문부여에 대한 이의 절차와 준비자료 글의 데이터를 그
// 레이아웃에 연결하는 역할만 합니다(새로운 디자인을 만들지 않고
// 기존 글과 동일한 레이아웃·폭·타이포그래피·CTA 패턴을 재사용합니다).
export default function SuccessionExecutionClauseObjectionArticle() {
  return (
    <LegalInfoArticleLayout
      category={SUCCESSION_EXECUTION_CLAUSE_OBJECTION_META.category}
      title={SUCCESSION_EXECUTION_CLAUSE_OBJECTION_META.title}
      asOfDate={SUCCESSION_EXECUTION_CLAUSE_OBJECTION_META.asOfDate}
      introParagraphs={SUCCESSION_EXECUTION_CLAUSE_OBJECTION_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SUCCESSION_EXECUTION_CLAUSE_OBJECTION_SECTIONS}
      processHeading={SUCCESSION_EXECUTION_CLAUSE_OBJECTION_PROCESS_HEADING}
      processDescription={SUCCESSION_EXECUTION_CLAUSE_OBJECTION_PROCESS_DESCRIPTION}
      processSteps={SUCCESSION_EXECUTION_CLAUSE_OBJECTION_PROCESS_STEPS}
      sectionsAfterProcess={SUCCESSION_EXECUTION_CLAUSE_OBJECTION_AFTER_PROCESS_SECTIONS}
      noticeParagraphs={SUCCESSION_EXECUTION_CLAUSE_OBJECTION_NOTICE_PARAGRAPHS}
      references={SUCCESSION_EXECUTION_CLAUSE_OBJECTION_REFERENCES}
      relatedLinks={[
        { href: "/legal-info/payment-order-procedure", label: "지급명령 신청 절차와 준비자료" },
        { href: "/legal-info/real-estate-compulsory-auction", label: "부동산 강제경매 신청 절차와 준비자료" },
        { href: "/legal-info/real-estate-auction-withdrawal-stay-cancellation", label: "부동산 경매 취하·정지·취소 절차와 준비자료" },
        { href: "/legal-info/objection-to-claim-enforcement-stay", label: "청구이의의 소와 강제집행정지 절차와 준비자료" },
        { href: "/legal-info/third-party-objection-enforcement-stay", label: "제3자이의의 소와 강제집행정지 절차와 준비자료" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
