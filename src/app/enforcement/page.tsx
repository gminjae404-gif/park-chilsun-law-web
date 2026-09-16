import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import FAQPreview from "@/components/FAQPreview";
import EnforcementHero from "@/components/enforcement/EnforcementHero";
import EnforcementIntro from "@/components/enforcement/EnforcementIntro";
import EnforcementTypes from "@/components/enforcement/EnforcementTypes";
import EnforcementClaimOrders from "@/components/enforcement/EnforcementClaimOrders";
import EnforcementPreCheck from "@/components/enforcement/EnforcementPreCheck";
import EnforcementPreservationNote from "@/components/enforcement/EnforcementPreservationNote";
import EnforcementAdditionalProcedures from "@/components/enforcement/EnforcementAdditionalProcedures";
import EnforcementDocuments from "@/components/enforcement/EnforcementDocuments";
import EnforcementCTA from "@/components/enforcement/EnforcementCTA";
import Reveal from "@/components/Reveal";
import {
  ENFORCEMENT_FAQ_HEADING,
  ENFORCEMENT_FAQ_ITEMS,
  ENFORCEMENT_PROCESS_DESCRIPTION,
  ENFORCEMENT_PROCESS_HEADING,
  ENFORCEMENT_PROCESS_STEPS,
} from "@/lib/enforcement";

// title.template(layout.tsx)이 "%s | 사무소명"을 자동으로 붙여주므로 다른
// 업무 페이지와 동일하게 짧은 title만 지정합니다.
export const metadata: Metadata = {
  title: "강제집행",
  description:
    "판결·지급명령 등 집행의 기초가 되는 문서와 집행대상을 확인하고, 부동산·채권·유체동산·부동산 인도 등 강제집행 절차를 살펴볼 수 있는 안내 페이지입니다.",
  alternates: { canonical: "/enforcement" },
};

// 강제집행(/enforcement) 페이지입니다. 민사(/civil)와 마찬가지로
// 등기 그룹(부동산등기/법인등기)과 "일반 업무 상세페이지"라는 시각적
// family resemblance는 유지하되(Hero/Types/Documents/CTA의 UI 언어가
// 유사), Registration*·Civil* 컴포넌트는 import하지 않고 강제집행
// 전용으로 완전히 독립 구현했습니다 — 강제집행은 집행권원·집행대상이
// 핵심인 점이 등기(신청·변경 절차형)·민사(당사자 간 분쟁·청구·증거
// 중심)와 정보 성격이 달라 공통화하지 않았습니다.
//
// 이 페이지만의 고유 섹션은 EnforcementPreCheck(집행권원 → 미이행 내용
// → 채무자 → 집행대상 → 집행방법 확인 순서)와
// EnforcementPreservationNote(가압류와 강제집행의 구분 안내)입니다.
// 가압류 안내를 PreCheck의 번호 목록에 포함하지 않고 독립 섹션으로 둔
// 것은, 가압류를 강제집행의 한 유형이나 확인순서 중 하나처럼 배열하지
// 않기 위함입니다.
//
// 법무사의 업무범위(법원 제출서류의 작성·제출대행과 이에 부수되는
// 업무)를 벗어나는 "강제집행을 대리합니다"·"채권회수를 보장합니다" 등의
// 표현과, 법무사가 압류·경매·인도집행을 직접 실시한다는 인상을 주는
// 표현은 이 페이지 어디에도 사용하지 않았습니다.
//
// 진행 절차(ProcessSection)와 FAQ(FAQPreview)는 다른 상세페이지와 동일한
// 공용 컴포넌트를 데이터만 바꿔 재사용합니다. 두 컴포넌트 자체는
// 수정하지 않았습니다. 강제집행 전용 콘텐츠는 src/lib/enforcement.ts에
// 격리되어 있으며, 기존 constants.ts·civil.ts는 이 페이지 구현으로 전혀
// 변경되지 않았습니다.
//
// civil-lease-enforcement-expand 작업에서 두 섹션을 추가했습니다.
// EnforcementClaimOrders(채권압류 후 추심명령·전부명령 비교)는
// EnforcementTypes가 이미 소개한 "예금·급여·거래대금 등 채권"을 이어받아
// 배치했고, EnforcementAdditionalProcedures(부동산 강제경매·배당요구·
// 재산명시/재산조회·가압류→본압류 전환)는 가압류와 강제집행을 구분하는
// EnforcementPreservationNote 바로 다음, 준비자료(Documents) 앞에
// 배치했습니다. 기존 6개 컴포넌트(Hero/Intro/Types/PreCheck/
// PreservationNote/Documents/CTA)와 상단 대분류 구조는 전혀
// 변경하지 않았습니다.
export default function EnforcementPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <EnforcementHero />
        <Reveal>
          <EnforcementIntro />
        </Reveal>
        <Reveal>
          <EnforcementTypes />
        </Reveal>
        <Reveal>
          <EnforcementClaimOrders />
        </Reveal>
        <Reveal>
          <EnforcementPreCheck />
        </Reveal>
        <Reveal>
          <EnforcementPreservationNote />
        </Reveal>
        <Reveal>
          <EnforcementAdditionalProcedures />
        </Reveal>
        <Reveal>
          <EnforcementDocuments />
        </Reveal>
        <Reveal>
          <ProcessSection
            steps={ENFORCEMENT_PROCESS_STEPS}
            heading={ENFORCEMENT_PROCESS_HEADING}
            description={ENFORCEMENT_PROCESS_DESCRIPTION}
            variant="timeline"
          />
        </Reveal>
        <Reveal>
          <FAQPreview items={ENFORCEMENT_FAQ_ITEMS} heading={ENFORCEMENT_FAQ_HEADING} />
        </Reveal>
        <Reveal>
          <EnforcementCTA />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
