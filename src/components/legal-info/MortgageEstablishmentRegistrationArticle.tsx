import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  MORTGAGE_ESTABLISHMENT_REGISTRATION_INTRO_PARAGRAPHS,
  MORTGAGE_ESTABLISHMENT_REGISTRATION_META,
  MORTGAGE_ESTABLISHMENT_REGISTRATION_NOTICE_PARAGRAPHS,
  MORTGAGE_ESTABLISHMENT_REGISTRATION_PROCESS_DESCRIPTION,
  MORTGAGE_ESTABLISHMENT_REGISTRATION_PROCESS_HEADING,
  MORTGAGE_ESTABLISHMENT_REGISTRATION_PROCESS_STEPS,
  MORTGAGE_ESTABLISHMENT_REGISTRATION_REFERENCES,
  MORTGAGE_ESTABLISHMENT_REGISTRATION_SECTIONS,
} from "@/lib/legal-info-mortgage-establishment-registration";

// "31. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~30."이 앞, "32.~33."이
// 뒤). 앞선 열여섯 개 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 근저당권 설정등기 글의
// 데이터를 그 레이아웃에 연결하는 역할만 합니다(새로운 디자인을 만들지
// 않고 기존 글과 동일한 레이아웃·폭·타이포그래피·CTA 패턴을
// 재사용합니다).
const SECTIONS_BEFORE_PROCESS = MORTGAGE_ESTABLISHMENT_REGISTRATION_SECTIONS.slice(0, 30);
const SECTIONS_AFTER_PROCESS = MORTGAGE_ESTABLISHMENT_REGISTRATION_SECTIONS.slice(30);

export default function MortgageEstablishmentRegistrationArticle() {
  return (
    <LegalInfoArticleLayout
      category={MORTGAGE_ESTABLISHMENT_REGISTRATION_META.category}
      title={MORTGAGE_ESTABLISHMENT_REGISTRATION_META.title}
      asOfDate={MORTGAGE_ESTABLISHMENT_REGISTRATION_META.asOfDate}
      introParagraphs={MORTGAGE_ESTABLISHMENT_REGISTRATION_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={MORTGAGE_ESTABLISHMENT_REGISTRATION_PROCESS_HEADING}
      processDescription={MORTGAGE_ESTABLISHMENT_REGISTRATION_PROCESS_DESCRIPTION}
      processSteps={MORTGAGE_ESTABLISHMENT_REGISTRATION_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={MORTGAGE_ESTABLISHMENT_REGISTRATION_NOTICE_PARAGRAPHS}
      references={MORTGAGE_ESTABLISHMENT_REGISTRATION_REFERENCES}
      relatedLinks={[
        { href: "/registration/real-estate", label: "부동산등기" },
        { href: "/legal-info/mortgage-cancellation-registration", label: "근저당권 말소등기 준비서류와 절차" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
