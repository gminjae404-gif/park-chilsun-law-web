import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  VEHICLE_PROVISIONAL_SEIZURE_AFTER_PROCESS_SECTIONS,
  VEHICLE_PROVISIONAL_SEIZURE_INTRO_PARAGRAPHS,
  VEHICLE_PROVISIONAL_SEIZURE_META,
  VEHICLE_PROVISIONAL_SEIZURE_NOTICE_PARAGRAPHS,
  VEHICLE_PROVISIONAL_SEIZURE_PROCESS_DESCRIPTION,
  VEHICLE_PROVISIONAL_SEIZURE_PROCESS_HEADING,
  VEHICLE_PROVISIONAL_SEIZURE_PROCESS_STEPS,
  VEHICLE_PROVISIONAL_SEIZURE_REFERENCES,
  VEHICLE_PROVISIONAL_SEIZURE_SECTIONS,
} from "@/lib/legal-info-vehicle-provisional-seizure";

// "45. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~44."가 앞,
// "46.~47."이 뒤). 앞선 서른 개 글과 동일하게 실제 렌더링은 공용
// 레이아웃인 LegalInfoArticleLayout이 담당하며, 이 파일은 자동차
// 가압류 신청 절차와 준비자료 글의 데이터를 그 레이아웃에 연결하는
// 역할만 합니다(새로운 디자인을 만들지 않고 기존 글과 동일한
// 레이아웃·폭·타이포그래피·CTA 패턴을 재사용합니다).
export default function VehicleProvisionalSeizureArticle() {
  return (
    <LegalInfoArticleLayout
      category={VEHICLE_PROVISIONAL_SEIZURE_META.category}
      title={VEHICLE_PROVISIONAL_SEIZURE_META.title}
      asOfDate={VEHICLE_PROVISIONAL_SEIZURE_META.asOfDate}
      introParagraphs={VEHICLE_PROVISIONAL_SEIZURE_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={VEHICLE_PROVISIONAL_SEIZURE_SECTIONS}
      processHeading={VEHICLE_PROVISIONAL_SEIZURE_PROCESS_HEADING}
      processDescription={VEHICLE_PROVISIONAL_SEIZURE_PROCESS_DESCRIPTION}
      processSteps={VEHICLE_PROVISIONAL_SEIZURE_PROCESS_STEPS}
      sectionsAfterProcess={VEHICLE_PROVISIONAL_SEIZURE_AFTER_PROCESS_SECTIONS}
      noticeParagraphs={VEHICLE_PROVISIONAL_SEIZURE_NOTICE_PARAGRAPHS}
      references={VEHICLE_PROVISIONAL_SEIZURE_REFERENCES}
      relatedLinks={[
        { href: "/legal-info/real-estate-provisional-attachment", label: "부동산 가압류 신청 절차와 준비자료" },
        { href: "/legal-info/payment-order-procedure", label: "지급명령 신청 절차와 준비자료" },
        { href: "/legal-info/debtor-property-disclosure-inquiry", label: "재산명시·재산조회 신청 절차와 준비자료" },
        { href: "/legal-info/movable-property-enforcement", label: "유체동산 강제집행 절차와 준비자료" },
        { href: "/legal-info/vehicle-enforcement", label: "자동차 강제집행 절차와 준비자료" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
