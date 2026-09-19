import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  JEONSE_RIGHT_REGISTRATION_INTRO_PARAGRAPHS,
  JEONSE_RIGHT_REGISTRATION_META,
  JEONSE_RIGHT_REGISTRATION_NOTICE_PARAGRAPHS,
  JEONSE_RIGHT_REGISTRATION_PROCESS_DESCRIPTION,
  JEONSE_RIGHT_REGISTRATION_PROCESS_HEADING,
  JEONSE_RIGHT_REGISTRATION_PROCESS_STEPS,
  JEONSE_RIGHT_REGISTRATION_REFERENCES,
  JEONSE_RIGHT_REGISTRATION_SECTIONS,
} from "@/lib/legal-info-jeonse-right-registration";

// "32. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~31."이 앞, "33.~34."이
// 뒤). 앞선 열일곱 개 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 전세권 설정등기와
// 말소등기 글의 데이터를 그 레이아웃에 연결하는 역할만 합니다(새로운
// 디자인을 만들지 않고 기존 글과 동일한 레이아웃·폭·타이포그래피·CTA
// 패턴을 재사용합니다).
const SECTIONS_BEFORE_PROCESS = JEONSE_RIGHT_REGISTRATION_SECTIONS.slice(0, 31);
const SECTIONS_AFTER_PROCESS = JEONSE_RIGHT_REGISTRATION_SECTIONS.slice(31);

export default function JeonseRightRegistrationArticle() {
  return (
    <LegalInfoArticleLayout
      category={JEONSE_RIGHT_REGISTRATION_META.category}
      title={JEONSE_RIGHT_REGISTRATION_META.title}
      asOfDate={JEONSE_RIGHT_REGISTRATION_META.asOfDate}
      introParagraphs={JEONSE_RIGHT_REGISTRATION_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={JEONSE_RIGHT_REGISTRATION_PROCESS_HEADING}
      processDescription={JEONSE_RIGHT_REGISTRATION_PROCESS_DESCRIPTION}
      processSteps={JEONSE_RIGHT_REGISTRATION_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={JEONSE_RIGHT_REGISTRATION_NOTICE_PARAGRAPHS}
      references={JEONSE_RIGHT_REGISTRATION_REFERENCES}
      relatedLinks={[
        { href: "/registration/real-estate", label: "부동산등기" },
        { href: "/legal-info/mortgage-establishment-registration", label: "근저당권 설정등기 준비서류와 절차" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
