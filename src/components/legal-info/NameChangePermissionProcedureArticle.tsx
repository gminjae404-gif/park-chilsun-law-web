import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  NAME_CHANGE_PERMISSION_PROCEDURE_INTRO_PARAGRAPHS,
  NAME_CHANGE_PERMISSION_PROCEDURE_META,
  NAME_CHANGE_PERMISSION_PROCEDURE_NOTICE_PARAGRAPHS,
  NAME_CHANGE_PERMISSION_PROCEDURE_PROCESS_DESCRIPTION,
  NAME_CHANGE_PERMISSION_PROCEDURE_PROCESS_HEADING,
  NAME_CHANGE_PERMISSION_PROCEDURE_PROCESS_STEPS,
  NAME_CHANGE_PERMISSION_PROCEDURE_REFERENCES,
  NAME_CHANGE_PERMISSION_PROCEDURE_SECTIONS,
} from "@/lib/legal-info-name-change-permission-procedure";

// "28. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~27."가 앞, "29.~30."가
// 뒤). 앞선 열한 개 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 개명허가 글의 데이터를
// 그 레이아웃에 연결하는 역할만 합니다(새로운 디자인을 만들지 않고
// 기존 글과 동일한 레이아웃·폭·타이포그래피·CTA 패턴을 재사용합니다).
const SECTIONS_BEFORE_PROCESS = NAME_CHANGE_PERMISSION_PROCEDURE_SECTIONS.slice(0, 27);
const SECTIONS_AFTER_PROCESS = NAME_CHANGE_PERMISSION_PROCEDURE_SECTIONS.slice(27);

export default function NameChangePermissionProcedureArticle() {
  return (
    <LegalInfoArticleLayout
      category={NAME_CHANGE_PERMISSION_PROCEDURE_META.category}
      title={NAME_CHANGE_PERMISSION_PROCEDURE_META.title}
      asOfDate={NAME_CHANGE_PERMISSION_PROCEDURE_META.asOfDate}
      introParagraphs={NAME_CHANGE_PERMISSION_PROCEDURE_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={NAME_CHANGE_PERMISSION_PROCEDURE_PROCESS_HEADING}
      processDescription={NAME_CHANGE_PERMISSION_PROCEDURE_PROCESS_DESCRIPTION}
      processSteps={NAME_CHANGE_PERMISSION_PROCEDURE_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={NAME_CHANGE_PERMISSION_PROCEDURE_NOTICE_PARAGRAPHS}
      references={NAME_CHANGE_PERMISSION_PROCEDURE_REFERENCES}
      relatedLinks={[
        { href: "/family/name-change", label: "개명" },
        { href: "/family", label: "가사·상속" },
        { href: "/legal-info/adult-guardianship-procedure", label: "성년후견 신청 절차와 준비자료" },
        { href: "/legal-info/adult-adoption-registration", label: "성년자 일반입양 신고 절차와 준비자료" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
