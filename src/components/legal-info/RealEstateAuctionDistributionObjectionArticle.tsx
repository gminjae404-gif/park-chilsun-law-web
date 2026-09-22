import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_AFTER_PROCESS_SECTIONS,
  REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_INTRO_PARAGRAPHS,
  REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_META,
  REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_NOTICE_PARAGRAPHS,
  REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_PROCESS_DESCRIPTION,
  REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_PROCESS_HEADING,
  REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_PROCESS_STEPS,
  REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_REFERENCES,
  REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_SECTIONS,
} from "@/lib/legal-info-real-estate-auction-distribution-objection";

// "51. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~50."이 앞,
// "52.~53."이 뒤). 앞선 서른세 개 글과 동일하게 실제 렌더링은 공용
// 레이아웃인 LegalInfoArticleLayout이 담당하며, 이 파일은 부동산 경매
// 배당이의·배당이의의 소 절차와 준비자료 글의 데이터를 그 레이아웃에
// 연결하는 역할만 합니다(새로운 디자인을 만들지 않고 기존 글과 동일한
// 레이아웃·폭·타이포그래피·CTA 패턴을 재사용합니다).
export default function RealEstateAuctionDistributionObjectionArticle() {
  return (
    <LegalInfoArticleLayout
      category={REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_META.category}
      title={REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_META.title}
      asOfDate={REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_META.asOfDate}
      introParagraphs={REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_SECTIONS}
      processHeading={REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_PROCESS_HEADING}
      processDescription={REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_PROCESS_DESCRIPTION}
      processSteps={REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_PROCESS_STEPS}
      sectionsAfterProcess={REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_AFTER_PROCESS_SECTIONS}
      noticeParagraphs={REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_NOTICE_PARAGRAPHS}
      references={REAL_ESTATE_AUCTION_DISTRIBUTION_OBJECTION_REFERENCES}
      relatedLinks={[
        { href: "/legal-info/real-estate-auction-distribution-demand", label: "부동산 경매 배당요구 절차와 준비자료" },
        { href: "/legal-info/real-estate-voluntary-auction", label: "부동산 임의경매 신청 절차와 준비자료" },
        { href: "/legal-info/real-estate-compulsory-auction", label: "부동산 강제경매 신청 절차와 준비자료" },
        { href: "/legal-info/real-estate-provisional-attachment", label: "부동산 가압류 신청 절차와 준비자료" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
