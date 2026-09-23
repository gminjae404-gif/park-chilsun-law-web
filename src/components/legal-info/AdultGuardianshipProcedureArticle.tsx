import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  ADULT_GUARDIANSHIP_PROCEDURE_INTRO_PARAGRAPHS,
  ADULT_GUARDIANSHIP_PROCEDURE_META,
  ADULT_GUARDIANSHIP_PROCEDURE_NOTICE_PARAGRAPHS,
  ADULT_GUARDIANSHIP_PROCEDURE_PROCESS_DESCRIPTION,
  ADULT_GUARDIANSHIP_PROCEDURE_PROCESS_HEADING,
  ADULT_GUARDIANSHIP_PROCEDURE_PROCESS_STEPS,
  ADULT_GUARDIANSHIP_PROCEDURE_REFERENCES,
  ADULT_GUARDIANSHIP_PROCEDURE_SECTIONS,
} from "@/lib/legal-info-adult-guardianship-procedure";

// "30. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~29."가 앞, "31.~32."가
// 뒤). 앞선 열 개 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 성년후견 글의 데이터를
// 그 레이아웃에 연결하는 역할만 합니다(새로운 디자인을 만들지 않고
// 기존 글과 동일한 레이아웃·폭·타이포그래피·CTA 패턴을 재사용합니다).
const SECTIONS_BEFORE_PROCESS = ADULT_GUARDIANSHIP_PROCEDURE_SECTIONS.slice(0, 29);
const SECTIONS_AFTER_PROCESS = ADULT_GUARDIANSHIP_PROCEDURE_SECTIONS.slice(29);

export default function AdultGuardianshipProcedureArticle() {
  return (
    <LegalInfoArticleLayout
      category={ADULT_GUARDIANSHIP_PROCEDURE_META.category}
      title={ADULT_GUARDIANSHIP_PROCEDURE_META.title}
      asOfDate={ADULT_GUARDIANSHIP_PROCEDURE_META.asOfDate}
      introParagraphs={ADULT_GUARDIANSHIP_PROCEDURE_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={ADULT_GUARDIANSHIP_PROCEDURE_PROCESS_HEADING}
      processDescription={ADULT_GUARDIANSHIP_PROCEDURE_PROCESS_DESCRIPTION}
      processSteps={ADULT_GUARDIANSHIP_PROCEDURE_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={ADULT_GUARDIANSHIP_PROCEDURE_NOTICE_PARAGRAPHS}
      references={ADULT_GUARDIANSHIP_PROCEDURE_REFERENCES}
      relatedLinks={[
        { href: "/family/guardianship", label: "성년후견" },
        { href: "/family", label: "가사·상속" },
        { href: "/legal-info/name-change-permission-procedure", label: "개명허가 신청 절차와 준비자료" },
        { href: "/legal-info/adult-adoption-registration", label: "성년자 일반입양 신고 절차와 준비자료" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
