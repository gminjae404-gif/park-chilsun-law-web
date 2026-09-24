import type { Metadata } from "next";
import { HEADER_BRAND_NAME } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQPreview from "@/components/FAQPreview";
import ProcessSection from "@/components/ProcessSection";
import Reveal from "@/components/Reveal";
import GuardianshipHero from "@/components/family-guardianship/GuardianshipHero";
import GuardianshipSituations from "@/components/family-guardianship/GuardianshipSituations";
import GuardianshipNeedCheck from "@/components/family-guardianship/GuardianshipNeedCheck";
import GuardianshipTypes from "@/components/family-guardianship/GuardianshipTypes";
import GuardianshipDelegation from "@/components/family-guardianship/GuardianshipDelegation";
import GuardianshipArbitrary from "@/components/family-guardianship/GuardianshipArbitrary";
import GuardianshipWho from "@/components/family-guardianship/GuardianshipWho";
import GuardianshipAuthority from "@/components/family-guardianship/GuardianshipAuthority";
import GuardianshipJurisdiction from "@/components/family-guardianship/GuardianshipJurisdiction";
import GuardianshipDocuments from "@/components/family-guardianship/GuardianshipDocuments";
import GuardianshipRegistration from "@/components/family-guardianship/GuardianshipRegistration";
import GuardianshipCTA from "@/components/family-guardianship/GuardianshipCTA";
import {
  GUARDIANSHIP_FAQ_HEADING,
  GUARDIANSHIP_FAQ_ITEMS,
  GUARDIANSHIP_PROCESS_HEADING,
  GUARDIANSHIP_PROCESS_NOTE,
  GUARDIANSHIP_PROCESS_STEPS,
} from "@/lib/family-guardianship";

// title.template(layout.tsx)이 "%s | 사무소명"을 자동으로 붙여주므로 다른
// 업무 상세페이지와 동일하게 짧은 title만 지정합니다.
const title = "성년후견";
const description =
  "성년후견·한정후견·특정후견·임의후견 중 현재 상황에 필요한 제도가 무엇인지 먼저 구분하고, 위임·대리와의 차이와 일반적인 절차·준비자료를 확인할 수 있는 안내 페이지입니다.";
const canonicalPath = "/family/guardianship";
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

// 가사·상속(/family) 하위의 성년후견 상세 안내 페이지(/family/guardianship)
// 입니다. 이번 작업 범위는 이 페이지 한 곳으로 한정하며, Header/Footer
// 컴포넌트 자체나 전역 내비게이션(constants.ts), 다른 페이지의 디자인·
// 문구는 전혀 수정하지 않았습니다. /family의 FamilyGuardianshipGuide(후견
// 5종 개괄)와 /family/inheritance의 기존 export도 그대로 두고, 이 페이지
// 전용 콘텐츠는 별도 파일 src/lib/family-guardianship.ts에 완전히
// 격리했습니다.
//
// 이 페이지의 목적은 성년후견 신청을 권유하는 것이 아니라, 후견제도
// 자체가 필요한지, 필요하다면 성년후견·한정후견·특정후견·임의후견 중
// 어떤 제도를 검토해야 하는지 일반인이 먼저 구분하도록 돕는 것입니다.
// 그래서 "① 상황 선택 → ② 후견 필요 여부 확인 → ③ 네 제도 비교 →
// ④ 위임·대리와의 구분 → ⑤ 임의후견 상세 → ⑥~⑦ 후견인 선임·권한 →
// ⑧ 절차 → ⑨ 관할 → ⑩ 준비자료 → ⑪ 후견등기 → FAQ → CTA" 순서로
// 구성했습니다.
//
// GuardianshipTypes(네 가지 제도 비교)와 GuardianshipDelegation(위임·
// 대리와의 구분)은 /family/inheritance의 카드형 비교·경고 patterns를
// 그대로 재사용했고, "일반적인 절차"는 성년후견·한정후견·특정후견처럼
// 가정법원 청구로 시작하는 사건들에 공통되는 하나의 절차 유형이므로
// (계약으로 시작하는 임의후견은 별도 section에서 설명) 공용
// ProcessSection(timeline variant, personal-bankruptcy 페이지와 동일한
// 재사용 방식)을 그대로 사용했습니다 — /family, /family/inheritance에서
// ProcessSection을 피했던 이유(서로 시작 조건이 다른 여러 영역을 하나의
// 타임라인으로 묶으면 안 된다는 원칙)와 충돌하지 않습니다.
//
// 법무사의 업무범위(법원 제출서류의 작성·제출대행과 이에 부수되는
// 업무)를 벗어나는 "소송을 대리합니다"·"법정에서 대신 변론합니다" 등의
// 표현은 이 페이지 어디에도 사용하지 않았습니다.
export default function FamilyGuardianshipPage() {
  return (
    <>
      <div className="print:hidden">
        <Header />
      </div>
      <main id="main-content" className="flex-1">
        <GuardianshipHero />
        <Reveal>
          <GuardianshipSituations />
        </Reveal>
        <Reveal>
          <GuardianshipNeedCheck />
        </Reveal>
        <Reveal>
          <GuardianshipTypes />
        </Reveal>
        <Reveal>
          <GuardianshipDelegation />
        </Reveal>
        <Reveal>
          <GuardianshipArbitrary />
        </Reveal>
        <Reveal>
          <GuardianshipWho />
        </Reveal>
        <Reveal>
          <GuardianshipAuthority />
        </Reveal>
        <div className="print:hidden">
          <Reveal>
            <ProcessSection
              steps={GUARDIANSHIP_PROCESS_STEPS}
              heading={GUARDIANSHIP_PROCESS_HEADING}
              description={GUARDIANSHIP_PROCESS_NOTE}
              variant="timeline"
            />
          </Reveal>
        </div>
        <Reveal>
          <GuardianshipJurisdiction />
        </Reveal>
        <Reveal>
          <GuardianshipDocuments />
        </Reveal>
        <Reveal>
          <GuardianshipRegistration />
        </Reveal>
        <div className="print:hidden">
          <Reveal>
            <FAQPreview items={GUARDIANSHIP_FAQ_ITEMS} heading={GUARDIANSHIP_FAQ_HEADING} />
          </Reveal>
        </div>
        <Reveal>
          <GuardianshipCTA />
        </Reveal>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
      {/* 인쇄 시 A4 용지 기준 여백만 지정합니다. 이 규칙은 이 페이지에서만
          사용되므로 전역 globals.css가 아니라 이 파일에 인라인 <style>로
          한정했습니다(/family/inheritance, /family/name-change와 동일한
          패턴). */}
      <style>{"@media print { @page { size: A4; margin: 16mm; } }"}</style>
    </>
  );
}
