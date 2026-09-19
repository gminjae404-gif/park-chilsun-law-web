import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  PAYMENT_ORDER_PROCEDURE_INTRO_PARAGRAPHS,
  PAYMENT_ORDER_PROCEDURE_META,
  PAYMENT_ORDER_PROCEDURE_NOTICE_PARAGRAPHS,
  PAYMENT_ORDER_PROCEDURE_PROCESS_DESCRIPTION,
  PAYMENT_ORDER_PROCEDURE_PROCESS_HEADING,
  PAYMENT_ORDER_PROCEDURE_PROCESS_STEPS,
  PAYMENT_ORDER_PROCEDURE_REFERENCES,
  PAYMENT_ORDER_PROCEDURE_SECTIONS,
} from "@/lib/legal-info-payment-order-procedure";

// "21. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~20."이 앞, "22.~23."이
// 뒤). 앞선 여섯 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 지급명령 글의 데이터를
// 그 레이아웃에 연결하는 역할만 합니다(새로운 디자인을 만들지 않고
// 기존 글과 동일한 레이아웃·폭·타이포그래피·CTA 패턴을 재사용합니다).
const SECTIONS_BEFORE_PROCESS = PAYMENT_ORDER_PROCEDURE_SECTIONS.slice(0, 20);
const SECTIONS_AFTER_PROCESS = PAYMENT_ORDER_PROCEDURE_SECTIONS.slice(20);

export default function PaymentOrderProcedureArticle() {
  return (
    <LegalInfoArticleLayout
      category={PAYMENT_ORDER_PROCEDURE_META.category}
      title={PAYMENT_ORDER_PROCEDURE_META.title}
      asOfDate={PAYMENT_ORDER_PROCEDURE_META.asOfDate}
      introParagraphs={PAYMENT_ORDER_PROCEDURE_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={PAYMENT_ORDER_PROCEDURE_PROCESS_HEADING}
      processDescription={PAYMENT_ORDER_PROCEDURE_PROCESS_DESCRIPTION}
      processSteps={PAYMENT_ORDER_PROCEDURE_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={PAYMENT_ORDER_PROCEDURE_NOTICE_PARAGRAPHS}
      references={PAYMENT_ORDER_PROCEDURE_REFERENCES}
      relatedLinks={[
        { href: "/civil", label: "민사" },
        { href: "/enforcement", label: "강제집행" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
