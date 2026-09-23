import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_INTRO_PARAGRAPHS,
  INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META,
  INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_NOTICE_PARAGRAPHS,
  INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_PROCESS_DESCRIPTION,
  INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_PROCESS_HEADING,
  INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_PROCESS_STEPS,
  INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_REFERENCES,
  INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_SECTIONS,
} from "@/lib/legal-info-inheritance-division-agreement-registration";

// "31. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~30."이 앞, "32.~33."이
// 뒤). 앞선 열세 개 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 상속재산분할협의 글의
// 데이터를 그 레이아웃에 연결하는 역할만 합니다(새로운 디자인을 만들지
// 않고 기존 글과 동일한 레이아웃·폭·타이포그래피·CTA 패턴을
// 재사용합니다).
const SECTIONS_BEFORE_PROCESS = INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_SECTIONS.slice(0, 30);
const SECTIONS_AFTER_PROCESS = INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_SECTIONS.slice(30);

export default function InheritanceDivisionAgreementRegistrationArticle() {
  return (
    <LegalInfoArticleLayout
      category={INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META.category}
      title={INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META.title}
      asOfDate={INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META.asOfDate}
      introParagraphs={INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_PROCESS_HEADING}
      processDescription={INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_PROCESS_DESCRIPTION}
      processSteps={INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_NOTICE_PARAGRAPHS}
      references={INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_REFERENCES}
      relatedLinks={[
        { href: "/family/inheritance", label: "가사·상속" },
        { href: "/legal-info/inheritance-registration", label: "상속등기 준비서류와 절차" },
        { href: "/legal-info/inheritance-renunciation-limited-acceptance", label: "상속포기와 한정승인 절차와 준비자료" },
        { href: "/legal-info/co-owned-property-division-registration", label: "공유물분할에 따른 소유권이전등기 절차" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
