import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  MORTGAGE_CANCELLATION_REGISTRATION_INTRO_PARAGRAPHS,
  MORTGAGE_CANCELLATION_REGISTRATION_META,
  MORTGAGE_CANCELLATION_REGISTRATION_NOTICE_PARAGRAPHS,
  MORTGAGE_CANCELLATION_REGISTRATION_PROCESS_DESCRIPTION,
  MORTGAGE_CANCELLATION_REGISTRATION_PROCESS_HEADING,
  MORTGAGE_CANCELLATION_REGISTRATION_PROCESS_STEPS,
  MORTGAGE_CANCELLATION_REGISTRATION_REFERENCES,
  MORTGAGE_CANCELLATION_REGISTRATION_SECTIONS,
} from "@/lib/legal-info-mortgage-cancellation-registration";

// "13. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~12."가 앞,
// "14.~15."가 뒤). 앞선 두 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 근저당권 말소등기 글의
// 데이터를 그 레이아웃에 연결하는 역할만 합니다(새로운 디자인을 만들지
// 않고 기존 두 글과 동일한 레이아웃·폭·타이포그래피·CTA 패턴을
// 재사용합니다).
const SECTIONS_BEFORE_PROCESS = MORTGAGE_CANCELLATION_REGISTRATION_SECTIONS.slice(0, 12);
const SECTIONS_AFTER_PROCESS = MORTGAGE_CANCELLATION_REGISTRATION_SECTIONS.slice(12);

export default function MortgageCancellationRegistrationArticle() {
  return (
    <LegalInfoArticleLayout
      category={MORTGAGE_CANCELLATION_REGISTRATION_META.category}
      title={MORTGAGE_CANCELLATION_REGISTRATION_META.title}
      asOfDate={MORTGAGE_CANCELLATION_REGISTRATION_META.asOfDate}
      introParagraphs={MORTGAGE_CANCELLATION_REGISTRATION_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={MORTGAGE_CANCELLATION_REGISTRATION_PROCESS_HEADING}
      processDescription={MORTGAGE_CANCELLATION_REGISTRATION_PROCESS_DESCRIPTION}
      processSteps={MORTGAGE_CANCELLATION_REGISTRATION_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={MORTGAGE_CANCELLATION_REGISTRATION_NOTICE_PARAGRAPHS}
      references={MORTGAGE_CANCELLATION_REGISTRATION_REFERENCES}
      relatedLinks={[
        { href: "/registration/real-estate", label: "부동산등기" },
        {
          href: "/legal-info/real-estate-sale-registration",
          label: "부동산 매매 소유권이전등기 준비서류와 절차",
        },
        { href: "/legal-info/mortgage-establishment-registration", label: "근저당권 설정등기 준비서류와 절차" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
