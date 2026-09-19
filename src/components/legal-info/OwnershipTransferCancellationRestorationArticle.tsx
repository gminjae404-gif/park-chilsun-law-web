import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_INTRO_PARAGRAPHS,
  OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_META,
  OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_NOTICE_PARAGRAPHS,
  OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_PROCESS_DESCRIPTION,
  OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_PROCESS_HEADING,
  OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_PROCESS_STEPS,
  OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_REFERENCES,
  OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_SECTIONS,
} from "@/lib/legal-info-ownership-transfer-cancellation-restoration";

// "36. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~35."이 앞, "37.~38."이
// 뒤). 앞선 스무 개 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 소유권이전등기 말소·
// 말소회복 절차 글의 데이터를 그 레이아웃에 연결하는 역할만 합니다
// (새로운 디자인을 만들지 않고 기존 글과 동일한 레이아웃·폭·
// 타이포그래피·CTA 패턴을 재사용합니다).
const SECTIONS_BEFORE_PROCESS = OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_SECTIONS.slice(0, 35);
const SECTIONS_AFTER_PROCESS = OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_SECTIONS.slice(35);

export default function OwnershipTransferCancellationRestorationArticle() {
  return (
    <LegalInfoArticleLayout
      category={OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_META.category}
      title={OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_META.title}
      asOfDate={OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_META.asOfDate}
      introParagraphs={OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_PROCESS_HEADING}
      processDescription={OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_PROCESS_DESCRIPTION}
      processSteps={OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_NOTICE_PARAGRAPHS}
      references={OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_REFERENCES}
      relatedLinks={[
        { href: "/registration/real-estate", label: "부동산등기" },
        { href: "/legal-info/real-estate-sale-registration", label: "부동산 매매 소유권이전등기 준비서류와 절차" },
        { href: "/legal-info/provisional-registration-procedure", label: "가등기 설정·본등기·말소 절차" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
