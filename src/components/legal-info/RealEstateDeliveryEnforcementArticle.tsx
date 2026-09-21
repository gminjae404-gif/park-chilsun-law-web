import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  REAL_ESTATE_DELIVERY_ENFORCEMENT_INTRO_PARAGRAPHS,
  REAL_ESTATE_DELIVERY_ENFORCEMENT_META,
  REAL_ESTATE_DELIVERY_ENFORCEMENT_NOTICE_PARAGRAPHS,
  REAL_ESTATE_DELIVERY_ENFORCEMENT_PROCESS_DESCRIPTION,
  REAL_ESTATE_DELIVERY_ENFORCEMENT_PROCESS_HEADING,
  REAL_ESTATE_DELIVERY_ENFORCEMENT_PROCESS_STEPS,
  REAL_ESTATE_DELIVERY_ENFORCEMENT_REFERENCES,
  REAL_ESTATE_DELIVERY_ENFORCEMENT_SECTIONS,
} from "@/lib/legal-info-real-estate-delivery-enforcement";

// "40. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~39."가 앞, "41.~42."가
// 뒤). 앞선 스물다섯 개 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 부동산 인도집행 절차와
// 집행관 강제집행 준비자료 글의 데이터를 그 레이아웃에 연결하는
// 역할만 합니다(새로운 디자인을 만들지 않고 기존 글과 동일한
// 레이아웃·폭·타이포그래피·CTA 패턴을 재사용합니다).
const SECTIONS_BEFORE_PROCESS = REAL_ESTATE_DELIVERY_ENFORCEMENT_SECTIONS.slice(0, 39);
const SECTIONS_AFTER_PROCESS = REAL_ESTATE_DELIVERY_ENFORCEMENT_SECTIONS.slice(39);

export default function RealEstateDeliveryEnforcementArticle() {
  return (
    <LegalInfoArticleLayout
      category={REAL_ESTATE_DELIVERY_ENFORCEMENT_META.category}
      title={REAL_ESTATE_DELIVERY_ENFORCEMENT_META.title}
      asOfDate={REAL_ESTATE_DELIVERY_ENFORCEMENT_META.asOfDate}
      introParagraphs={REAL_ESTATE_DELIVERY_ENFORCEMENT_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={REAL_ESTATE_DELIVERY_ENFORCEMENT_PROCESS_HEADING}
      processDescription={REAL_ESTATE_DELIVERY_ENFORCEMENT_PROCESS_DESCRIPTION}
      processSteps={REAL_ESTATE_DELIVERY_ENFORCEMENT_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={REAL_ESTATE_DELIVERY_ENFORCEMENT_NOTICE_PARAGRAPHS}
      references={REAL_ESTATE_DELIVERY_ENFORCEMENT_REFERENCES}
      relatedLinks={[
        { href: "/legal-info/real-estate-compulsory-auction", label: "부동산 강제경매 신청 절차와 준비자료" },
        { href: "/legal-info/real-estate-possession-transfer-provisional-injunction", label: "부동산 점유이전금지가처분 신청 절차와 준비자료" },
        { href: "/legal-info/real-estate-delivery-order", label: "부동산 인도명령 신청 절차와 준비자료" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
