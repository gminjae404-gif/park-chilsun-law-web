import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_INTRO_PARAGRAPHS,
  INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_META,
  INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_NOTICE_PARAGRAPHS,
  INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_PROCESS_DESCRIPTION,
  INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_PROCESS_HEADING,
  INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_PROCESS_STEPS,
  INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_REFERENCES,
  INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_SECTIONS,
} from "@/lib/legal-info-inheritance-estate-bankruptcy-procedure";

// "30. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~29."가 앞, "31.~32."가
// 뒤). 앞선 열네 개 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 상속재산파산 글의
// 데이터를 그 레이아웃에 연결하는 역할만 합니다(새로운 디자인을 만들지
// 않고 기존 글과 동일한 레이아웃·폭·타이포그래피·CTA 패턴을
// 재사용합니다).
const SECTIONS_BEFORE_PROCESS = INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_SECTIONS.slice(0, 29);
const SECTIONS_AFTER_PROCESS = INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_SECTIONS.slice(29);

export default function InheritanceEstateBankruptcyProcedureArticle() {
  return (
    <LegalInfoArticleLayout
      category={INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_META.category}
      title={INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_META.title}
      asOfDate={INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_META.asOfDate}
      introParagraphs={INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_PROCESS_HEADING}
      processDescription={INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_PROCESS_DESCRIPTION}
      processSteps={INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_NOTICE_PARAGRAPHS}
      references={INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_REFERENCES}
      relatedLinks={[
        { href: "/family/inheritance", label: "가사·상속" },
        { href: "/legal-info/inheritance-renunciation-limited-acceptance", label: "상속포기와 한정승인 절차와 준비자료" },
        { href: "/legal-info/inheritance-division-agreement-registration", label: "상속재산분할협의와 상속등기 절차" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
