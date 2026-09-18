import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  REAL_ESTATE_SALE_REGISTRATION_INTRO_PARAGRAPHS,
  REAL_ESTATE_SALE_REGISTRATION_META,
  REAL_ESTATE_SALE_REGISTRATION_NOTICE_PARAGRAPHS,
  REAL_ESTATE_SALE_REGISTRATION_PROCESS_DESCRIPTION,
  REAL_ESTATE_SALE_REGISTRATION_PROCESS_HEADING,
  REAL_ESTATE_SALE_REGISTRATION_PROCESS_STEPS,
  REAL_ESTATE_SALE_REGISTRATION_REFERENCES,
  REAL_ESTATE_SALE_REGISTRATION_SECTIONS,
} from "@/lib/legal-info-real-estate-sale-registration";

// "11. 일반적인 진행순서" 앞뒤로 섹션을 나눕니다("1.~10."이 앞, "12.~13."이
// 뒤). 상속등기 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 매매 소유권이전등기 글의
// 데이터를 그 레이아웃에 연결하는 역할만 합니다(새로운 디자인을 만들지
// 않고 첫 번째 글과 동일한 레이아웃·폭·타이포그래피·CTA 패턴을
// 재사용합니다).
const SECTIONS_BEFORE_PROCESS = REAL_ESTATE_SALE_REGISTRATION_SECTIONS.slice(0, 10);
const SECTIONS_AFTER_PROCESS = REAL_ESTATE_SALE_REGISTRATION_SECTIONS.slice(10);

export default function RealEstateSaleRegistrationArticle() {
  return (
    <LegalInfoArticleLayout
      category={REAL_ESTATE_SALE_REGISTRATION_META.category}
      title={REAL_ESTATE_SALE_REGISTRATION_META.title}
      asOfDate={REAL_ESTATE_SALE_REGISTRATION_META.asOfDate}
      introParagraphs={REAL_ESTATE_SALE_REGISTRATION_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={REAL_ESTATE_SALE_REGISTRATION_PROCESS_HEADING}
      processDescription={REAL_ESTATE_SALE_REGISTRATION_PROCESS_DESCRIPTION}
      processSteps={REAL_ESTATE_SALE_REGISTRATION_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={REAL_ESTATE_SALE_REGISTRATION_NOTICE_PARAGRAPHS}
      references={REAL_ESTATE_SALE_REGISTRATION_REFERENCES}
      relatedLinks={[
        { href: "/registration/real-estate", label: "부동산등기" },
        { href: "/legal-info/inheritance-registration", label: "상속등기 준비서류와 절차" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
