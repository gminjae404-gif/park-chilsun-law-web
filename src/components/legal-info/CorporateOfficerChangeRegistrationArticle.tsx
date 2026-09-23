import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  CORPORATE_OFFICER_CHANGE_REGISTRATION_INTRO_PARAGRAPHS,
  CORPORATE_OFFICER_CHANGE_REGISTRATION_META,
  CORPORATE_OFFICER_CHANGE_REGISTRATION_NOTICE_PARAGRAPHS,
  CORPORATE_OFFICER_CHANGE_REGISTRATION_PROCESS_DESCRIPTION,
  CORPORATE_OFFICER_CHANGE_REGISTRATION_PROCESS_HEADING,
  CORPORATE_OFFICER_CHANGE_REGISTRATION_PROCESS_STEPS,
  CORPORATE_OFFICER_CHANGE_REGISTRATION_REFERENCES,
  CORPORATE_OFFICER_CHANGE_REGISTRATION_SECTIONS,
} from "@/lib/legal-info-corporate-officer-change-registration";

// "17. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~16."이 앞, "18.~19."가
// 뒤). 앞선 세 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 임원변경등기 글의
// 데이터를 그 레이아웃에 연결하는 역할만 합니다(새로운 디자인을 만들지
// 않고 기존 글과 동일한 레이아웃·폭·타이포그래피·CTA 패턴을
// 재사용합니다).
const SECTIONS_BEFORE_PROCESS = CORPORATE_OFFICER_CHANGE_REGISTRATION_SECTIONS.slice(0, 16);
const SECTIONS_AFTER_PROCESS = CORPORATE_OFFICER_CHANGE_REGISTRATION_SECTIONS.slice(16);

export default function CorporateOfficerChangeRegistrationArticle() {
  return (
    <LegalInfoArticleLayout
      category={CORPORATE_OFFICER_CHANGE_REGISTRATION_META.category}
      title={CORPORATE_OFFICER_CHANGE_REGISTRATION_META.title}
      asOfDate={CORPORATE_OFFICER_CHANGE_REGISTRATION_META.asOfDate}
      introParagraphs={CORPORATE_OFFICER_CHANGE_REGISTRATION_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={CORPORATE_OFFICER_CHANGE_REGISTRATION_PROCESS_HEADING}
      processDescription={CORPORATE_OFFICER_CHANGE_REGISTRATION_PROCESS_DESCRIPTION}
      processSteps={CORPORATE_OFFICER_CHANGE_REGISTRATION_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={CORPORATE_OFFICER_CHANGE_REGISTRATION_NOTICE_PARAGRAPHS}
      references={CORPORATE_OFFICER_CHANGE_REGISTRATION_REFERENCES}
      relatedLinks={[
        { href: "/registration/corporate", label: "법인등기" },
        { href: "/legal-info/corporate-head-office-relocation-registration", label: "주식회사 본점이전등기 준비서류와 절차" },
        { href: "/legal-info/corporate-capital-increase-registration", label: "주식회사 유상증자·신주발행 변경등기 준비서류와 절차" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
