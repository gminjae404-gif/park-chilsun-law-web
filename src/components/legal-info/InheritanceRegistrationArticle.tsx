import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  INHERITANCE_REGISTRATION_INTRO_PARAGRAPHS,
  INHERITANCE_REGISTRATION_META,
  INHERITANCE_REGISTRATION_NOTICE_PARAGRAPHS,
  INHERITANCE_REGISTRATION_PROCESS_DESCRIPTION,
  INHERITANCE_REGISTRATION_PROCESS_HEADING,
  INHERITANCE_REGISTRATION_PROCESS_STEPS,
  INHERITANCE_REGISTRATION_REFERENCES,
  INHERITANCE_REGISTRATION_SECTIONS,
} from "@/lib/legal-info-inheritance-registration";

// 상속등기 진행 절차(7번) 앞뒤로 섹션을 나눕니다 — ProcessSection은 다른
// 업무 상세페이지와 동일하게 자체 폭(max-w-6xl)의 독립 섹션이라, 본문의
// max-w-3xl 컨테이너 밖에 그대로 재사용합니다(디자인을 새로 만들지
// 않음). 실제 렌더링은 LegalInfoArticleLayout(공용 레이아웃)이 담당하며,
// 이 파일은 상속등기 글의 데이터를 그 레이아웃에 연결하는 역할만
// 합니다(리팩터링 전과 동일한 화면을 그대로 유지).
const SECTIONS_BEFORE_PROCESS = INHERITANCE_REGISTRATION_SECTIONS.slice(0, 6);
const SECTIONS_AFTER_PROCESS = INHERITANCE_REGISTRATION_SECTIONS.slice(6);

export default function InheritanceRegistrationArticle() {
  return (
    <LegalInfoArticleLayout
      category={INHERITANCE_REGISTRATION_META.category}
      title={INHERITANCE_REGISTRATION_META.title}
      asOfDate={INHERITANCE_REGISTRATION_META.asOfDate}
      introParagraphs={INHERITANCE_REGISTRATION_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={INHERITANCE_REGISTRATION_PROCESS_HEADING}
      processDescription={INHERITANCE_REGISTRATION_PROCESS_DESCRIPTION}
      processSteps={INHERITANCE_REGISTRATION_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={INHERITANCE_REGISTRATION_NOTICE_PARAGRAPHS}
      references={INHERITANCE_REGISTRATION_REFERENCES}
      relatedLinks={[
        { href: "/registration/real-estate", label: "부동산등기" },
        { href: "/family/inheritance", label: "가사·상속" },
        { href: "/legal-info/inheritance-renunciation-limited-acceptance", label: "상속포기와 한정승인 절차와 준비자료" },
        { href: "/legal-info/inheritance-division-agreement-registration", label: "상속재산분할협의와 상속등기 절차" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
