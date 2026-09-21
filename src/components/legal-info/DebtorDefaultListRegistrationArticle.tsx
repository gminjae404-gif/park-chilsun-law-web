import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  DEBTOR_DEFAULT_LIST_REGISTRATION_INTRO_PARAGRAPHS,
  DEBTOR_DEFAULT_LIST_REGISTRATION_META,
  DEBTOR_DEFAULT_LIST_REGISTRATION_NOTICE_PARAGRAPHS,
  DEBTOR_DEFAULT_LIST_REGISTRATION_PROCESS_DESCRIPTION,
  DEBTOR_DEFAULT_LIST_REGISTRATION_PROCESS_HEADING,
  DEBTOR_DEFAULT_LIST_REGISTRATION_PROCESS_STEPS,
  DEBTOR_DEFAULT_LIST_REGISTRATION_REFERENCES,
  DEBTOR_DEFAULT_LIST_REGISTRATION_SECTIONS,
} from "@/lib/legal-info-debtor-default-list-registration";

// "37. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~36."이 앞, "38.~39."가
// 뒤). 앞선 스물일곱 개 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 채무불이행자명부등재
// 신청 절차와 준비자료 글의 데이터를 그 레이아웃에 연결하는 역할만
// 합니다(새로운 디자인을 만들지 않고 기존 글과 동일한 레이아웃·폭·
// 타이포그래피·CTA 패턴을 재사용합니다).
const SECTIONS_BEFORE_PROCESS = DEBTOR_DEFAULT_LIST_REGISTRATION_SECTIONS.slice(0, 36);
const SECTIONS_AFTER_PROCESS = DEBTOR_DEFAULT_LIST_REGISTRATION_SECTIONS.slice(36);

export default function DebtorDefaultListRegistrationArticle() {
  return (
    <LegalInfoArticleLayout
      category={DEBTOR_DEFAULT_LIST_REGISTRATION_META.category}
      title={DEBTOR_DEFAULT_LIST_REGISTRATION_META.title}
      asOfDate={DEBTOR_DEFAULT_LIST_REGISTRATION_META.asOfDate}
      introParagraphs={DEBTOR_DEFAULT_LIST_REGISTRATION_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={DEBTOR_DEFAULT_LIST_REGISTRATION_PROCESS_HEADING}
      processDescription={DEBTOR_DEFAULT_LIST_REGISTRATION_PROCESS_DESCRIPTION}
      processSteps={DEBTOR_DEFAULT_LIST_REGISTRATION_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={DEBTOR_DEFAULT_LIST_REGISTRATION_NOTICE_PARAGRAPHS}
      references={DEBTOR_DEFAULT_LIST_REGISTRATION_REFERENCES}
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
