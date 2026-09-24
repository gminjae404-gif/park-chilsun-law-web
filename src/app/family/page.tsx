import type { Metadata } from "next";
import { HEADER_BRAND_NAME } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQPreview from "@/components/FAQPreview";
import FamilyHero from "@/components/family/FamilyHero";
import FamilyIntro from "@/components/family/FamilyIntro";
import FamilyAreas from "@/components/family/FamilyAreas";
import FamilyGuardianshipGuide from "@/components/family/FamilyGuardianshipGuide";
import FamilyPreCheck from "@/components/family/FamilyPreCheck";
import FamilyDocuments from "@/components/family/FamilyDocuments";
import FamilyProcedures from "@/components/family/FamilyProcedures";
import FamilyInheritanceNote from "@/components/family/FamilyInheritanceNote";
import FamilyCTA from "@/components/family/FamilyCTA";
import Reveal from "@/components/Reveal";
import { FAMILY_FAQ_HEADING, FAMILY_FAQ_ITEMS } from "@/lib/family";

// title.template(layout.tsx)이 "%s | 사무소명"을 자동으로 붙여주므로 다른
// 업무 페이지와 동일하게 짧은 title만 지정합니다.
const title = "가사·상속";
const description =
  "혼인·이혼, 친자·입양·가족관계, 후견, 상속 등 가사·상속 분야에서 현재 가족관계와 필요한 절차를 확인할 수 있는 안내 페이지입니다.";
const canonicalPath = "/family";
const ogTitle = `${title} | ${HEADER_BRAND_NAME}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: canonicalPath,
    title: ogTitle,
    description,
    siteName: HEADER_BRAND_NAME,
  },
  twitter: {
    card: "summary",
    title: ogTitle,
    description,
  },
};

// 가사·상속(/family) 페이지입니다. 이 페이지의 가장 중요한 설계
// 원칙은 "가사·상속은 하나의 동일한 절차가 아니다"라는 점입니다.
// 혼인·이혼/친자·입양/후견/상속은 각각 시작 조건과 진행절차가 다르므로,
// 다른 업무 상세페이지에서 재사용해 온 공용 ProcessSection(timeline)을
// 이 페이지에서는 사용하지 않습니다. 대신 이 페이지는 "내 문제가 어느
// 영역인지 확인 → 무엇을 원하는지 정리 → 필요한 자료와 절차를
// 구분"하는 허브형 페이지로 구성했습니다.
//
// FamilyAreas("어떤 문제인가", 좌우 2열 divider 목록)와
// FamilyProcedures("그 문제를 어떤 정보로 나누어 절차를 정하는가",
// 번호·구분선 없는 병렬 grid)는 의도적으로 서로 다른 시각 언어를
// 사용해 두 섹션이 같은 내용의 반복처럼 보이지 않도록 했습니다.
// FamilyPreCheck는 Civil/Enforcement/Corporate의 "번호 배지+연결선"
// 확인순서 언어를 참고해 독립 구현했고, FamilyInheritanceNote는
// EnforcementPreservationNote와 동일하게 카드 grid가 아닌 독립 강조
// panel 1개로 상속의 기간 관련 주의사항만 짧게 안내합니다.
//
// 법무사의 업무범위(법원 제출서류의 작성·제출대행과 이에 부수되는
// 업무)를 벗어나는 "가사소송을 대리합니다"·"법정에서 대신 변론합니다"
// 등의 표현은 이 페이지 어디에도 사용하지 않았습니다.
//
// FAQ(FAQPreview)는 다른 상세페이지와 동일한 공용 컴포넌트를 데이터만
// 바꿔 재사용합니다. 컴포넌트 자체는 수정하지 않았습니다. 가사·상속
// 전용 콘텐츠는 src/lib/family.ts에 격리되어 있으며, 기존
// constants.ts·civil.ts·enforcement.ts·corporate-registration.ts는
// 이 페이지 구현으로 전혀 변경되지 않았습니다.
//
// FamilyAreas 바로 다음, FamilyPreCheck 바로 앞에는
// FamilyGuardianshipGuide를 추가했습니다: FamilyAreas의 "후견" 1개
// 항목만으로는 성년후견·한정후견·특정후견·미성년후견·임의후견처럼
// 대상과 요건이 서로 다른 여러 제도를 구분해 보여줄 수 없어, 별도
// section에서 5종류를 CorporateEntityTypes와 동일한 정의목록(dl) 형태로
// 나열합니다. 번호 배지를 쓰지 않아 5개가 시간 순서로 오인되지
// 않습니다.
export default function FamilyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <FamilyHero />
        <Reveal>
          <FamilyIntro />
        </Reveal>
        <Reveal>
          <FamilyAreas />
        </Reveal>
        <Reveal>
          <FamilyGuardianshipGuide />
        </Reveal>
        <Reveal>
          <FamilyPreCheck />
        </Reveal>
        <Reveal>
          <FamilyDocuments />
        </Reveal>
        <Reveal>
          <FamilyProcedures />
        </Reveal>
        <Reveal>
          <FamilyInheritanceNote />
        </Reveal>
        <Reveal>
          <FAQPreview items={FAMILY_FAQ_ITEMS} heading={FAMILY_FAQ_HEADING} />
        </Reveal>
        <Reveal>
          <FamilyCTA />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
