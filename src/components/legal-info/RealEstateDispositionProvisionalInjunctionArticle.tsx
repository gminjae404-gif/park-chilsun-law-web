import LegalInfoArticleLayout from "@/components/legal-info/LegalInfoArticleLayout";
import {
  REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_INTRO_PARAGRAPHS,
  REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_META,
  REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_NOTICE_PARAGRAPHS,
  REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_PROCESS_DESCRIPTION,
  REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_PROCESS_HEADING,
  REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_PROCESS_STEPS,
  REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_REFERENCES,
  REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_SECTIONS,
} from "@/lib/legal-info-real-estate-disposition-provisional-injunction";

// "39. 일반적인 진행절차" 앞뒤로 섹션을 나눕니다("1.~38."이 앞, "40."이
// 뒤). 앞선 스물두 개 글과 동일하게 실제 렌더링은 공용 레이아웃인
// LegalInfoArticleLayout이 담당하며, 이 파일은 부동산 처분금지가처분
// 신청 절차와 준비자료 글의 데이터를 그 레이아웃에 연결하는 역할만
// 합니다(새로운 디자인을 만들지 않고 기존 글과 동일한 레이아웃·폭·
// 타이포그래피·CTA 패턴을 재사용합니다). 이번 글은 "별도 검토가
// 필요한 경우" 섹션이 없어 slice 경계가 38(진행절차 직전)뿐입니다.
const SECTIONS_BEFORE_PROCESS = REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_SECTIONS.slice(0, 38);
const SECTIONS_AFTER_PROCESS = REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_SECTIONS.slice(38);

export default function RealEstateDispositionProvisionalInjunctionArticle() {
  return (
    <LegalInfoArticleLayout
      category={REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_META.category}
      title={REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_META.title}
      asOfDate={REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_META.asOfDate}
      introParagraphs={REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_INTRO_PARAGRAPHS}
      sectionsBeforeProcess={SECTIONS_BEFORE_PROCESS}
      processHeading={REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_PROCESS_HEADING}
      processDescription={REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_PROCESS_DESCRIPTION}
      processSteps={REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_PROCESS_STEPS}
      sectionsAfterProcess={SECTIONS_AFTER_PROCESS}
      noticeParagraphs={REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_NOTICE_PARAGRAPHS}
      references={REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_REFERENCES}
      relatedLinks={[
        { href: "/enforcement", label: "강제집행" },
        { href: "/legal-info/real-estate-provisional-attachment", label: "부동산 가압류 신청 절차와 준비자료" },
        { href: "/legal-info/ownership-transfer-cancellation-restoration", label: "소유권이전등기 말소·말소회복 절차" },
        { href: "/legal-info", label: "법률정보 목록으로" },
      ]}
    />
  );
}
