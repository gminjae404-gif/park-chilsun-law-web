import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  PROVISIONAL_REGISTRATION_PROCEDURE_INTRO_PARAGRAPHS,
  PROVISIONAL_REGISTRATION_PROCEDURE_META,
  PROVISIONAL_REGISTRATION_PROCEDURE_NOTICE_PARAGRAPHS,
  PROVISIONAL_REGISTRATION_PROCEDURE_PROCESS_DESCRIPTION,
  PROVISIONAL_REGISTRATION_PROCEDURE_PROCESS_HEADING,
  PROVISIONAL_REGISTRATION_PROCEDURE_PROCESS_STEPS,
  PROVISIONAL_REGISTRATION_PROCEDURE_REFERENCES,
  PROVISIONAL_REGISTRATION_PROCEDURE_SECTIONS,
} from "@/lib/legal-info-provisional-registration-procedure";

// "32. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~31."이 앞, "33.~34."이
// 뒤). 앞선 열여덟 개 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 가등기 설정·본등기·
// 말소 절차 글의 데이터를 그 레이아웃에 연결하는 역할만 합니다(새로운
// 디자인을 만들지 않고 기존 글과 동일한 레이아웃·폭·타이포그래피·CTA
// 패턴을 재사용합니다).
const SECTIONS_BEFORE_PROCESS = PROVISIONAL_REGISTRATION_PROCEDURE_SECTIONS.slice(0, 31);
const SECTIONS_AFTER_PROCESS = PROVISIONAL_REGISTRATION_PROCEDURE_SECTIONS.slice(31);

export default function ProvisionalRegistrationProcedureArticle() {
  return (
    <LegalInfoArticleLayout
      category={PROVISIONAL_REGISTRATION_PROCEDURE_META.category}
      title={PROVISIONAL_REGISTRATION_PROCEDURE_META.title}
      asOfDate={PROVISIONAL_REGISTRATION_PROCEDURE_META.asOfDate}
      introParagraphs={PROVISIONAL_REGISTRATION_PROCEDURE_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={PROVISIONAL_REGISTRATION_PROCEDURE_PROCESS_HEADING}
      processDescription={PROVISIONAL_REGISTRATION_PROCEDURE_PROCESS_DESCRIPTION}
      processSteps={PROVISIONAL_REGISTRATION_PROCEDURE_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={PROVISIONAL_REGISTRATION_PROCEDURE_NOTICE_PARAGRAPHS}
      references={PROVISIONAL_REGISTRATION_PROCEDURE_REFERENCES}
      relatedLinks={[
        { href: "/registration/real-estate", label: "부동산등기" },
        { href: "/legal-info/real-estate-sale-registration", label: "부동산 매매 소유권이전등기 준비서류와 절차" },
        { href: "/legal-info/mortgage-establishment-registration", label: "근저당권 설정등기 준비서류와 절차" },
        { href: "/legal-info/ownership-transfer-cancellation-restoration", label: "소유권이전등기 말소·말소회복 절차" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
