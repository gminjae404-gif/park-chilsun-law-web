import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_INTRO_PARAGRAPHS,
  INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_META,
  INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_NOTICE_PARAGRAPHS,
  INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_PROCESS_DESCRIPTION,
  INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_PROCESS_HEADING,
  INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_PROCESS_STEPS,
  INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_REFERENCES,
  INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_SECTIONS,
} from "@/lib/legal-info-inheritance-renunciation-limited-acceptance";

// "29. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~28."이 앞, "30.~31."이
// 뒤). 앞선 아홉 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 상속포기·한정승인 글의
// 데이터를 그 레이아웃에 연결하는 역할만 합니다(새로운 디자인을 만들지
// 않고 기존 글과 동일한 레이아웃·폭·타이포그래피·CTA 패턴을
// 재사용합니다).
const SECTIONS_BEFORE_PROCESS = INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_SECTIONS.slice(0, 28);
const SECTIONS_AFTER_PROCESS = INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_SECTIONS.slice(28);

export default function InheritanceRenunciationLimitedAcceptanceArticle() {
  return (
    <LegalInfoArticleLayout
      category={INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_META.category}
      title={INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_META.title}
      asOfDate={INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_META.asOfDate}
      introParagraphs={INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_PROCESS_HEADING}
      processDescription={INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_PROCESS_DESCRIPTION}
      processSteps={INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_NOTICE_PARAGRAPHS}
      references={INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_REFERENCES}
      relatedLinks={[
        { href: "/family/inheritance", label: "가사·상속" },
        { href: "/legal-info/inheritance-registration", label: "상속등기 준비서류와 절차" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
