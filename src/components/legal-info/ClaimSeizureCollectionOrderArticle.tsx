import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  CLAIM_SEIZURE_COLLECTION_ORDER_INTRO_PARAGRAPHS,
  CLAIM_SEIZURE_COLLECTION_ORDER_META,
  CLAIM_SEIZURE_COLLECTION_ORDER_NOTICE_PARAGRAPHS,
  CLAIM_SEIZURE_COLLECTION_ORDER_PROCESS_DESCRIPTION,
  CLAIM_SEIZURE_COLLECTION_ORDER_PROCESS_HEADING,
  CLAIM_SEIZURE_COLLECTION_ORDER_PROCESS_STEPS,
  CLAIM_SEIZURE_COLLECTION_ORDER_REFERENCES,
  CLAIM_SEIZURE_COLLECTION_ORDER_SECTIONS,
} from "@/lib/legal-info-claim-seizure-collection-order";

// "24. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~23."이 앞, "25.~26."이
// 뒤). 앞선 일곱 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 채권압류 및 추심명령
// 글의 데이터를 그 레이아웃에 연결하는 역할만 합니다(새로운 디자인을
// 만들지 않고 기존 글과 동일한 레이아웃·폭·타이포그래피·CTA 패턴을
// 재사용합니다).
const SECTIONS_BEFORE_PROCESS = CLAIM_SEIZURE_COLLECTION_ORDER_SECTIONS.slice(0, 23);
const SECTIONS_AFTER_PROCESS = CLAIM_SEIZURE_COLLECTION_ORDER_SECTIONS.slice(23);

export default function ClaimSeizureCollectionOrderArticle() {
  return (
    <LegalInfoArticleLayout
      category={CLAIM_SEIZURE_COLLECTION_ORDER_META.category}
      title={CLAIM_SEIZURE_COLLECTION_ORDER_META.title}
      asOfDate={CLAIM_SEIZURE_COLLECTION_ORDER_META.asOfDate}
      introParagraphs={CLAIM_SEIZURE_COLLECTION_ORDER_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={CLAIM_SEIZURE_COLLECTION_ORDER_PROCESS_HEADING}
      processDescription={CLAIM_SEIZURE_COLLECTION_ORDER_PROCESS_DESCRIPTION}
      processSteps={CLAIM_SEIZURE_COLLECTION_ORDER_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={CLAIM_SEIZURE_COLLECTION_ORDER_NOTICE_PARAGRAPHS}
      references={CLAIM_SEIZURE_COLLECTION_ORDER_REFERENCES}
      relatedLinks={[
        { href: "/enforcement", label: "강제집행" },
        { href: "/legal-info/payment-order-procedure", label: "지급명령 신청 절차와 준비자료" },
        { href: "/civil", label: "민사" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
