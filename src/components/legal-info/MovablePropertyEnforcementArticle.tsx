import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  MOVABLE_PROPERTY_ENFORCEMENT_INTRO_PARAGRAPHS,
  MOVABLE_PROPERTY_ENFORCEMENT_META,
  MOVABLE_PROPERTY_ENFORCEMENT_NOTICE_PARAGRAPHS,
  MOVABLE_PROPERTY_ENFORCEMENT_PROCESS_DESCRIPTION,
  MOVABLE_PROPERTY_ENFORCEMENT_PROCESS_HEADING,
  MOVABLE_PROPERTY_ENFORCEMENT_PROCESS_STEPS,
  MOVABLE_PROPERTY_ENFORCEMENT_REFERENCES,
  MOVABLE_PROPERTY_ENFORCEMENT_SECTIONS,
} from "@/lib/legal-info-movable-property-enforcement";

// "40. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~39."가 앞, "41.~42."가
// 뒤). 앞선 스물여덟 개 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 유체동산 강제집행
// 절차와 준비자료 글의 데이터를 그 레이아웃에 연결하는 역할만 합니다
// (새로운 디자인을 만들지 않고 기존 글과 동일한 레이아웃·폭·
// 타이포그래피·CTA 패턴을 재사용합니다).
const SECTIONS_BEFORE_PROCESS = MOVABLE_PROPERTY_ENFORCEMENT_SECTIONS.slice(0, 39);
const SECTIONS_AFTER_PROCESS = MOVABLE_PROPERTY_ENFORCEMENT_SECTIONS.slice(39);

export default function MovablePropertyEnforcementArticle() {
  return (
    <LegalInfoArticleLayout
      category={MOVABLE_PROPERTY_ENFORCEMENT_META.category}
      title={MOVABLE_PROPERTY_ENFORCEMENT_META.title}
      asOfDate={MOVABLE_PROPERTY_ENFORCEMENT_META.asOfDate}
      introParagraphs={MOVABLE_PROPERTY_ENFORCEMENT_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={MOVABLE_PROPERTY_ENFORCEMENT_PROCESS_HEADING}
      processDescription={MOVABLE_PROPERTY_ENFORCEMENT_PROCESS_DESCRIPTION}
      processSteps={MOVABLE_PROPERTY_ENFORCEMENT_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={MOVABLE_PROPERTY_ENFORCEMENT_NOTICE_PARAGRAPHS}
      references={MOVABLE_PROPERTY_ENFORCEMENT_REFERENCES}
      relatedLinks={[
        { href: "/legal-info/payment-order-procedure", label: "지급명령 신청 절차와 준비자료" },
        { href: "/legal-info/claim-seizure-collection-order", label: "채권압류 및 추심명령 절차와 준비자료" },
        { href: "/legal-info/real-estate-compulsory-auction", label: "부동산 강제경매 신청 절차와 준비자료" },
        { href: "/legal-info/debtor-property-disclosure-inquiry", label: "재산명시·재산조회 신청 절차와 준비자료" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
