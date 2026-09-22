import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_AFTER_PROCESS_SECTIONS,
  REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_INTRO_PARAGRAPHS,
  REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_META,
  REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_NOTICE_PARAGRAPHS,
  REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_PROCESS_DESCRIPTION,
  REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_PROCESS_HEADING,
  REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_PROCESS_STEPS,
  REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_REFERENCES,
  REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_SECTIONS,
} from "@/lib/legal-info-real-estate-auction-sale-permission-objection-appeal";

// "55. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~54."가 앞,
// "56.~57."이 뒤). 앞선 서른네 개 글과 동일하게 실제 렌더링은 공용
// 레이아웃인 LegalInfoArticleLayout이 담당하며, 이 파일은 부동산 경매
// 매각허가에 대한 이의·즉시항고 절차와 준비자료 글의 데이터를 그
// 레이아웃에 연결하는 역할만 합니다(새로운 디자인을 만들지 않고
// 기존 글과 동일한 레이아웃·폭·타이포그래피·CTA 패턴을 재사용합니다).
export default function RealEstateAuctionSalePermissionObjectionAppealArticle() {
  return (
    <LegalInfoArticleLayout
      category={REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_META.category}
      title={REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_META.title}
      asOfDate={REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_META.asOfDate}
      introParagraphs={REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_SECTIONS}
      processHeading={REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_PROCESS_HEADING}
      processDescription={REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_PROCESS_DESCRIPTION}
      processSteps={REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_PROCESS_STEPS}
      sectionsAfterProcess={REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_AFTER_PROCESS_SECTIONS}
      noticeParagraphs={REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_NOTICE_PARAGRAPHS}
      references={REAL_ESTATE_AUCTION_SALE_PERMISSION_OBJECTION_APPEAL_REFERENCES}
      relatedLinks={[
        { href: "/legal-info/real-estate-compulsory-auction", label: "부동산 강제경매 신청 절차와 준비자료" },
        { href: "/legal-info/real-estate-delivery-order", label: "부동산 인도명령 신청 절차와 준비자료" },
        { href: "/legal-info/real-estate-voluntary-auction", label: "부동산 임의경매 신청 절차와 준비자료" },
        { href: "/legal-info/real-estate-auction-distribution-demand", label: "부동산 경매 배당요구 절차와 준비자료" },
        { href: "/legal-info/real-estate-auction-distribution-objection", label: "부동산 경매 배당이의·배당이의의 소 절차와 준비자료" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
