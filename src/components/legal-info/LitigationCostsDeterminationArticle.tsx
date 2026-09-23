import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  LITIGATION_COSTS_DETERMINATION_AFTER_PROCESS_SECTIONS,
  LITIGATION_COSTS_DETERMINATION_INTRO_PARAGRAPHS,
  LITIGATION_COSTS_DETERMINATION_META,
  LITIGATION_COSTS_DETERMINATION_NOTICE_PARAGRAPHS,
  LITIGATION_COSTS_DETERMINATION_PROCESS_DESCRIPTION,
  LITIGATION_COSTS_DETERMINATION_PROCESS_HEADING,
  LITIGATION_COSTS_DETERMINATION_PROCESS_STEPS,
  LITIGATION_COSTS_DETERMINATION_REFERENCES,
  LITIGATION_COSTS_DETERMINATION_SECTIONS,
} from "@/lib/legal-info-litigation-costs-determination";

// "66. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~65."가 앞,
// "67.~68."가 뒤). 앞선 서른아홉 개 글과 동일하게 실제 렌더링은 공용
// 레이아웃인 LegalInfoArticleLayout이 담당하며, 이 파일은 소송비용액
// 확정신청 절차와 준비자료 글의 데이터를 그 레이아웃에 연결하는
// 역할만 합니다(새로운 디자인을 만들지 않고 기존 글과 동일한
// 레이아웃·폭·타이포그래피·CTA 패턴을 재사용합니다).
export default function LitigationCostsDeterminationArticle() {
  return (
    <LegalInfoArticleLayout
      category={LITIGATION_COSTS_DETERMINATION_META.category}
      title={LITIGATION_COSTS_DETERMINATION_META.title}
      asOfDate={LITIGATION_COSTS_DETERMINATION_META.asOfDate}
      introParagraphs={LITIGATION_COSTS_DETERMINATION_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={LITIGATION_COSTS_DETERMINATION_SECTIONS}
      processHeading={LITIGATION_COSTS_DETERMINATION_PROCESS_HEADING}
      processDescription={LITIGATION_COSTS_DETERMINATION_PROCESS_DESCRIPTION}
      processSteps={LITIGATION_COSTS_DETERMINATION_PROCESS_STEPS}
      sectionsAfterProcess={LITIGATION_COSTS_DETERMINATION_AFTER_PROCESS_SECTIONS}
      noticeParagraphs={LITIGATION_COSTS_DETERMINATION_NOTICE_PARAGRAPHS}
      references={LITIGATION_COSTS_DETERMINATION_REFERENCES}
      relatedLinks={[
        { href: "/legal-info/payment-order-procedure", label: "지급명령 신청 절차와 준비자료" },
        { href: "/legal-info/claim-seizure-collection-order", label: "채권압류 및 추심명령 절차와 준비자료" },
        { href: "/legal-info/real-estate-compulsory-auction", label: "부동산 강제경매 신청 절차와 준비자료" },
        { href: "/legal-info/objection-to-claim-enforcement-stay", label: "청구이의의 소와 강제집행정지 절차와 준비자료" },
        { href: "/legal-info/succession-execution-clause-objection", label: "승계집행문 부여와 집행문부여에 대한 이의 절차와 준비자료" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
