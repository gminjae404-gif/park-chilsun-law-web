import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  CO_OWNED_PROPERTY_DIVISION_REGISTRATION_INTRO_PARAGRAPHS,
  CO_OWNED_PROPERTY_DIVISION_REGISTRATION_META,
  CO_OWNED_PROPERTY_DIVISION_REGISTRATION_NOTICE_PARAGRAPHS,
  CO_OWNED_PROPERTY_DIVISION_REGISTRATION_PROCESS_DESCRIPTION,
  CO_OWNED_PROPERTY_DIVISION_REGISTRATION_PROCESS_HEADING,
  CO_OWNED_PROPERTY_DIVISION_REGISTRATION_PROCESS_STEPS,
  CO_OWNED_PROPERTY_DIVISION_REGISTRATION_REFERENCES,
  CO_OWNED_PROPERTY_DIVISION_REGISTRATION_SECTIONS,
} from "@/lib/legal-info-co-owned-property-division-registration";

// "34. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~33."이 앞, "35.~36."이
// 뒤). 앞선 열아홉 개 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 공유물분할에 따른
// 소유권이전등기 글의 데이터를 그 레이아웃에 연결하는 역할만 합니다
// (새로운 디자인을 만들지 않고 기존 글과 동일한 레이아웃·폭·
// 타이포그래피·CTA 패턴을 재사용합니다).
const SECTIONS_BEFORE_PROCESS = CO_OWNED_PROPERTY_DIVISION_REGISTRATION_SECTIONS.slice(0, 33);
const SECTIONS_AFTER_PROCESS = CO_OWNED_PROPERTY_DIVISION_REGISTRATION_SECTIONS.slice(33);

export default function CoOwnedPropertyDivisionRegistrationArticle() {
  return (
    <LegalInfoArticleLayout
      category={CO_OWNED_PROPERTY_DIVISION_REGISTRATION_META.category}
      title={CO_OWNED_PROPERTY_DIVISION_REGISTRATION_META.title}
      asOfDate={CO_OWNED_PROPERTY_DIVISION_REGISTRATION_META.asOfDate}
      introParagraphs={CO_OWNED_PROPERTY_DIVISION_REGISTRATION_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={CO_OWNED_PROPERTY_DIVISION_REGISTRATION_PROCESS_HEADING}
      processDescription={CO_OWNED_PROPERTY_DIVISION_REGISTRATION_PROCESS_DESCRIPTION}
      processSteps={CO_OWNED_PROPERTY_DIVISION_REGISTRATION_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={CO_OWNED_PROPERTY_DIVISION_REGISTRATION_NOTICE_PARAGRAPHS}
      references={CO_OWNED_PROPERTY_DIVISION_REGISTRATION_REFERENCES}
      relatedLinks={[
        { href: "/registration/real-estate", label: "부동산등기" },
        { href: "/legal-info/provisional-registration-procedure", label: "가등기 설정·본등기·말소 절차" },
        { href: "/legal-info/inheritance-division-agreement-registration", label: "상속재산분할협의와 상속등기 절차" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
