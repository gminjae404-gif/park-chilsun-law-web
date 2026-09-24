import type { Metadata } from "next";
import { HEADER_BRAND_NAME } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import FAQPreview from "@/components/FAQPreview";
import CivilHero from "@/components/civil/CivilHero";
import CivilIntro from "@/components/civil/CivilIntro";
import CivilTypes from "@/components/civil/CivilTypes";
import CivilPreCheck from "@/components/civil/CivilPreCheck";
import CivilServiceAreas from "@/components/civil/CivilServiceAreas";
import CivilDocuments from "@/components/civil/CivilDocuments";
import CivilCTA from "@/components/civil/CivilCTA";
import Reveal from "@/components/Reveal";
import {
  CIVIL_FAQ_HEADING,
  CIVIL_FAQ_ITEMS,
  CIVIL_PROCESS_DESCRIPTION,
  CIVIL_PROCESS_HEADING,
  CIVIL_PROCESS_STEPS,
} from "@/lib/civil";

// title.template(layout.tsx)이 "%s | 사무소명"을 자동으로 붙여주므로 다른
// 업무 페이지와 동일하게 짧은 title만 지정합니다.
const title = "민사소송";
const description =
  "대여금·매매대금·공사대금·임대차·손해배상 등 민사분쟁의 기본 확인사항과 민사소송 진행 흐름을 안내합니다.";
const canonicalPath = "/civil";
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

// civil-page-design-audit에서 확정한 구조로 기존 ServicePlaceholder
// 자리를 실제 콘텐츠로 교체합니다.
//
// 등기 그룹(부동산등기/법인등기)과 "일반 업무 상세페이지"라는 시각적
// family resemblance는 유지하되(Hero/Types/Documents/CTA의 UI 언어가
// 유사), Registration* 컴포넌트는 import하지 않고 민사 전용으로 완전히
// 독립 구현했습니다 — 민사는 당사자 간 분쟁·청구·증거가 핵심인 점이
// 등기(신청·변경 절차형)와 정보 성격이 달라, civil-page-design-audit에서
// "아직 공통화하지 않는다"로 판정했습니다.
//
// 이 페이지만의 고유 섹션은 CivilPreCheck입니다: 소송서류를 준비하기
// 전에 상대방·청구내용·사건 경위·증거자료·다른 절차의 필요성을 먼저
// 확인하는 흐름을 보여줍니다. 법인등기의 CorporateDecisionCheck와 같은
// 시각 언어(번호 배지+연결선)를 참고했지만 그 컴포넌트를 import하지
// 않고 독립 구현했습니다.
//
// 법무사의 업무범위(법원 제출서류의 작성·제출대행과 이에 부수되는
// 업무)를 벗어나는 "소송대리"·"변론대리" 등의 표현은 이 페이지 어디에도
// 사용하지 않았습니다.
//
// 진행 절차(ProcessSection)와 FAQ(FAQPreview)는 다른 상세페이지와 동일한
// 공용 컴포넌트를 데이터만 바꿔 재사용합니다. 두 컴포넌트 자체는
// 수정하지 않았습니다. 민사 전용 콘텐츠는 src/lib/civil.ts에 격리되어
// 있으며, 기존 constants.ts는 이 페이지 구현으로 전혀 변경되지
// 않았습니다.
//
// civil-lease-enforcement-expand 작업에서 CivilServiceAreas("주요 민사
// 업무")를 CivilPreCheck 다음, CivilDocuments 앞에 추가했습니다.
// CivilTypes(대표적인 "분쟁 유형")와 겹치지 않도록, 이 섹션은 실제로
// 준비하는 "서류·절차 종류"(금전청구/지급명령/임대차·보증금/제소전화해/
// 내용증명/채권양도·채권질권/가압류·가처분/기타)를 안내합니다.
// "임대차·보증금" 항목만 새로 생긴 /civil/lease 상세페이지로 연결하고,
// 그 외 기존 6개 컴포넌트(Hero/Intro/Types/PreCheck/Documents/CTA)와
// 상단 대분류 구조는 전혀 변경하지 않았습니다.
export default function CivilPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <CivilHero />
        <Reveal>
          <CivilIntro />
        </Reveal>
        <Reveal>
          <CivilTypes />
        </Reveal>
        <Reveal>
          <CivilPreCheck />
        </Reveal>
        <Reveal>
          <CivilServiceAreas />
        </Reveal>
        <Reveal>
          <CivilDocuments />
        </Reveal>
        <Reveal>
          <ProcessSection
            steps={CIVIL_PROCESS_STEPS}
            heading={CIVIL_PROCESS_HEADING}
            description={CIVIL_PROCESS_DESCRIPTION}
            variant="timeline"
          />
        </Reveal>
        <Reveal>
          <FAQPreview items={CIVIL_FAQ_ITEMS} heading={CIVIL_FAQ_HEADING} />
        </Reveal>
        <Reveal>
          <CivilCTA />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
