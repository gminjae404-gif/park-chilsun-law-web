import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_AFTER_PROCESS_SECTIONS,
  THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_INTRO_PARAGRAPHS,
  THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_META,
  THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_NOTICE_PARAGRAPHS,
  THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_PROCESS_DESCRIPTION,
  THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_PROCESS_HEADING,
  THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_PROCESS_STEPS,
  THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_REFERENCES,
  THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_SECTIONS,
} from "@/lib/legal-info-third-party-objection-enforcement-stay";

// "53. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~52."가 앞,
// "54.~55."가 뒤). 앞선 서른일곱 개 글과 동일하게 실제 렌더링은 공용
// 레이아웃인 LegalInfoArticleLayout이 담당하며, 이 파일은 제3자이의의
// 소와 강제집행정지 절차와 준비자료 글의 데이터를 그 레이아웃에
// 연결하는 역할만 합니다(새로운 디자인을 만들지 않고 기존 글과 동일한
// 레이아웃·폭·타이포그래피·CTA 패턴을 재사용합니다).
export default function ThirdPartyObjectionEnforcementStayArticle() {
  return (
    <LegalInfoArticleLayout
      category={THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_META.category}
      title={THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_META.title}
      asOfDate={THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_META.asOfDate}
      introParagraphs={THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_SECTIONS}
      processHeading={THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_PROCESS_HEADING}
      processDescription={THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_PROCESS_DESCRIPTION}
      processSteps={THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_PROCESS_STEPS}
      sectionsAfterProcess={THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_AFTER_PROCESS_SECTIONS}
      noticeParagraphs={THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_NOTICE_PARAGRAPHS}
      references={THIRD_PARTY_OBJECTION_ENFORCEMENT_STAY_REFERENCES}
      relatedLinks={[
        { href: "/legal-info/movable-property-enforcement", label: "유체동산 강제집행 절차와 준비자료" },
        { href: "/legal-info/vehicle-enforcement", label: "자동차 강제집행 절차와 준비자료" },
        { href: "/legal-info/real-estate-compulsory-auction", label: "부동산 강제경매 신청 절차와 준비자료" },
        { href: "/legal-info/objection-to-claim-enforcement-stay", label: "청구이의의 소와 강제집행정지 절차와 준비자료" },
        { href: "/legal-info/real-estate-auction-withdrawal-stay-cancellation", label: "부동산 경매 취하·정지·취소 절차와 준비자료" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
