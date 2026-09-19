import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_INTRO_PARAGRAPHS,
  CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_META,
  CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_NOTICE_PARAGRAPHS,
  CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_PROCESS_DESCRIPTION,
  CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_PROCESS_HEADING,
  CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_PROCESS_STEPS,
  CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_REFERENCES,
  CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_SECTIONS,
} from "@/lib/legal-info-corporate-head-office-relocation-registration";

// "17. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~16."이 앞, "18.~19."가
// 뒤). 앞선 네 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 본점이전등기 글의
// 데이터를 그 레이아웃에 연결하는 역할만 합니다(새로운 디자인을 만들지
// 않고 기존 글과 동일한 레이아웃·폭·타이포그래피·CTA 패턴을
// 재사용합니다).
const SECTIONS_BEFORE_PROCESS = CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_SECTIONS.slice(0, 16);
const SECTIONS_AFTER_PROCESS = CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_SECTIONS.slice(16);

export default function CorporateHeadOfficeRelocationRegistrationArticle() {
  return (
    <LegalInfoArticleLayout
      category={CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_META.category}
      title={CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_META.title}
      asOfDate={CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_META.asOfDate}
      introParagraphs={CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_PROCESS_HEADING}
      processDescription={CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_PROCESS_DESCRIPTION}
      processSteps={CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_NOTICE_PARAGRAPHS}
      references={CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_REFERENCES}
      relatedLinks={[
        { href: "/registration/corporate", label: "법인등기" },
        {
          href: "/legal-info/corporate-officer-change-registration",
          label: "주식회사 임원변경등기 준비서류와 절차",
        },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
