import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  REAL_ESTATE_COMPULSORY_AUCTION_INTRO_PARAGRAPHS,
  REAL_ESTATE_COMPULSORY_AUCTION_META,
  REAL_ESTATE_COMPULSORY_AUCTION_NOTICE_PARAGRAPHS,
  REAL_ESTATE_COMPULSORY_AUCTION_PROCESS_DESCRIPTION,
  REAL_ESTATE_COMPULSORY_AUCTION_PROCESS_HEADING,
  REAL_ESTATE_COMPULSORY_AUCTION_PROCESS_STEPS,
  REAL_ESTATE_COMPULSORY_AUCTION_REFERENCES,
  REAL_ESTATE_COMPULSORY_AUCTION_SECTIONS,
} from "@/lib/legal-info-real-estate-compulsory-auction";

// "29. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~28."이 앞, "30.~31."이
// 뒤). 앞선 여덟 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 부동산 강제경매 글의
// 데이터를 그 레이아웃에 연결하는 역할만 합니다(새로운 디자인을 만들지
// 않고 기존 글과 동일한 레이아웃·폭·타이포그래피·CTA 패턴을
// 재사용합니다).
const SECTIONS_BEFORE_PROCESS = REAL_ESTATE_COMPULSORY_AUCTION_SECTIONS.slice(0, 28);
const SECTIONS_AFTER_PROCESS = REAL_ESTATE_COMPULSORY_AUCTION_SECTIONS.slice(28);

export default function RealEstateCompulsoryAuctionArticle() {
  return (
    <LegalInfoArticleLayout
      category={REAL_ESTATE_COMPULSORY_AUCTION_META.category}
      title={REAL_ESTATE_COMPULSORY_AUCTION_META.title}
      asOfDate={REAL_ESTATE_COMPULSORY_AUCTION_META.asOfDate}
      introParagraphs={REAL_ESTATE_COMPULSORY_AUCTION_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={REAL_ESTATE_COMPULSORY_AUCTION_PROCESS_HEADING}
      processDescription={REAL_ESTATE_COMPULSORY_AUCTION_PROCESS_DESCRIPTION}
      processSteps={REAL_ESTATE_COMPULSORY_AUCTION_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={REAL_ESTATE_COMPULSORY_AUCTION_NOTICE_PARAGRAPHS}
      references={REAL_ESTATE_COMPULSORY_AUCTION_REFERENCES}
      relatedLinks={[
        { href: "/enforcement", label: "강제집행" },
        { href: "/legal-info/payment-order-procedure", label: "지급명령 신청 절차와 준비자료" },
        { href: "/legal-info/claim-seizure-collection-order", label: "채권압류 및 추심명령 절차와 준비자료" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
