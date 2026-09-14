import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQPreview from "@/components/FAQPreview";
import Reveal from "@/components/Reveal";
import LeaseHero from "@/components/civil-lease/LeaseHero";
import LeaseProblems from "@/components/civil-lease/LeaseProblems";
import LeaseHousingCommercial from "@/components/civil-lease/LeaseHousingCommercial";
import LeaseRelatedMatters from "@/components/civil-lease/LeaseRelatedMatters";
import LeaseDocuments from "@/components/civil-lease/LeaseDocuments";
import LeaseCTA from "@/components/civil-lease/LeaseCTA";
import { LEASE_FAQ_HEADING, LEASE_FAQ_ITEMS } from "@/lib/civil-lease";

// title.template(layout.tsx)이 "%s | 사무소명"을 자동으로 붙여주므로 다른
// 업무 상세페이지와 동일하게 짧은 title만 지정합니다.
export const metadata: Metadata = {
  title: "임대차·보증금",
  description:
    "임대차 종료 후 보증금 반환, 임차권등기명령, 제소전화해, 차임·원상회복·건물인도 및 관련 민사·집행 절차에서 확인할 사항을 안내합니다.",
};

// 민사소송(/civil) 하위의 "임대차·보증금" 상세페이지(/civil/lease)입니다.
// 상단 대분류 구조(HEADER_NAV_CATEGORIES)는 이 작업으로 전혀 변경하지
// 않았고, "임대차"·"채권·담보" 등을 새 대분류로 추가하지도 않았습니다.
// Header는 그대로 두고, /civil 페이지의 "주요 민사 업무" 섹션에서
// 이 페이지로 연결합니다.
//
// 순서: 문제 확인(LeaseProblems) → 주택/상가 구분(LeaseHousingCommercial)
// → 임차권등기명령·제소전화해·채권 문제(LeaseRelatedMatters) →
// 준비자료(LeaseDocuments) → FAQ → CTA. 화면용 PC/mobile 레이아웃은
// civil/enforcement 상세페이지와 동일한 기존 typography·color·
// spacing·card 시스템을 그대로 재사용했고, 새 배경 이미지나 새
// 아이콘, 광고형 랜딩 디자인은 추가하지 않았습니다.
//
// box-density-audit 6차(시각 계층 통일)에서, 별도 컴포넌트·별도
// section이던 LeaseRegistrationOrder(임차권등기명령)를
// LeaseRelatedMatters로 통합했습니다. 세 항목(임차권등기명령·
// 제소전화해·채권 문제)이 서로 다른 배경 레벨에 있어 동일한 accent를
// 쓰고도 통일감이 떨어졌던 문제를 해결하기 위한 조정으로,
// LeaseRegistrationOrder.tsx 파일은 삭제했습니다.
//
// 법무사의 업무범위(법원 제출서류의 작성·제출대행, 등기·공탁사건
// 신청대리, 경매 관련 법정 범위의 상담·매수신청/입찰신청 대리, 관련
// 상담·자문 등 부수업무)를 벗어나는 "소송대리"·"변론대리"·"재판대리"
// 표현이나 "보증금 반환 보장"·"즉시 회수"·"무조건"·"100%"·"완벽" 등
// 단정·보장성 표현은 이 페이지 어디에도 사용하지 않았습니다.
export default function CivilLeasePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <LeaseHero />
        <Reveal>
          <LeaseProblems />
        </Reveal>
        <Reveal>
          <LeaseHousingCommercial />
        </Reveal>
        <Reveal>
          <LeaseRelatedMatters />
        </Reveal>
        <Reveal>
          <LeaseDocuments />
        </Reveal>
        <Reveal>
          <FAQPreview items={LEASE_FAQ_ITEMS} heading={LEASE_FAQ_HEADING} />
        </Reveal>
        <Reveal>
          <LeaseCTA />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
