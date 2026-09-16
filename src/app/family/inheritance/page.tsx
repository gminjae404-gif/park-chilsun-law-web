import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQPreview from "@/components/FAQPreview";
import Reveal from "@/components/Reveal";
import InheritanceHero from "@/components/family-inheritance/InheritanceHero";
import InheritanceSituations from "@/components/family-inheritance/InheritanceSituations";
import InheritanceFirstCheck from "@/components/family-inheritance/InheritanceFirstCheck";
import InheritanceOneStopService from "@/components/family-inheritance/InheritanceOneStopService";
import InheritanceRenunciationVsLimited from "@/components/family-inheritance/InheritanceRenunciationVsLimited";
import InheritanceThreeMonthPeriod from "@/components/family-inheritance/InheritanceThreeMonthPeriod";
import InheritanceSpecialLimited from "@/components/family-inheritance/InheritanceSpecialLimited";
import InheritanceDivision from "@/components/family-inheritance/InheritanceDivision";
import InheritanceRegistration from "@/components/family-inheritance/InheritanceRegistration";
import InheritanceOverseasHeir from "@/components/family-inheritance/InheritanceOverseasHeir";
import InheritanceWill from "@/components/family-inheritance/InheritanceWill";
import InheritanceLifetimeGift from "@/components/family-inheritance/InheritanceLifetimeGift";
import InheritanceDutySplit from "@/components/family-inheritance/InheritanceDutySplit";
import InheritanceJurisdiction from "@/components/family-inheritance/InheritanceJurisdiction";
import InheritanceDocumentChecklist from "@/components/family-inheritance/InheritanceDocumentChecklist";
import InheritanceDocumentCaution from "@/components/family-inheritance/InheritanceDocumentCaution";
import InheritanceCTA from "@/components/family-inheritance/InheritanceCTA";
import { INHERITANCE_FAQ_HEADING, INHERITANCE_FAQ_ITEMS } from "@/lib/family-inheritance";

// title.template(layout.tsx)이 "%s | 사무소명"을 자동으로 붙여주므로 다른
// 업무 상세페이지와 동일하게 짧은 title만 지정합니다.
export const metadata: Metadata = {
  title: "상속 실무 안내",
  description:
    "상속 발생 후 먼저 확인할 사항부터 상속포기·한정승인, 상속재산분할, 상속등기, 해외 상속인, 유언·유증까지 상황별로 확인할 절차와 준비서류를 안내합니다.",
  alternates: { canonical: "/family/inheritance" },
};

// 가사·상속(/family) 하위의 상속 실무 안내 페이지(/family/inheritance)입니다.
// 이번 작업 범위는 이 페이지 한 곳으로 한정하며, Header/Footer 컴포넌트
// 자체나 전역 내비게이션(constants.ts의 SERVICE_CATEGORIES 등), 다른
// 페이지의 디자인·문구는 전혀 수정하지 않았습니다. /family 페이지의
// FAMILY_INHERITANCE_NOTE 등 기존 export도 그대로 두고, 이 페이지 전용
// 콘텐츠는 별도 파일 src/lib/family-inheritance.ts에 완전히 격리했습니다.
//
// 설계 원칙: 상속은 "포기/한정승인 → 재산분할/상속등기 → 해외상속인·
// 유언 등 특수상황"이 모든 사건에 동일한 순서로 이어지는 하나의
// 타임라인이 아니라, 사건마다 다른 시작 조건을 갖는 여러 상황의
// 묶음입니다. 따라서 공용 ProcessSection(timeline)은 사용하지 않고,
// "① 상황 선택 → ② 먼저 확인할 사항 → ③~⑭ 상황별 안내 → ⑮~⑯ 서류
// 준비 → ⑰ FAQ → ⑱ 상담 CTA" 순서의 허브형 안내로 구성했습니다.
// InheritanceSituations의 8개 카드는 관련 section으로 anchor 이동합니다.
//
// 중요한 경고(법정기간, 해외 서류, 한정승인 이후 절차, 유언검인의
// 한계 등)는 EnforcementPreservationNote/FamilyInheritanceNote에서 이미
// 확립된 "왼쪽 brand 색 accent border + bg-slate-50" panel 스타일을
// 모든 section에서 동일하게 재사용해 하나의 통일된 warning 스타일로
// 보이도록 했습니다. 상속포기·한정승인 비교, 등기절차/세무업무 구분,
// 신청기관 구분에는 <table>을 새로 도입하지 않고 이미 이 프로젝트에
// 있는 카드형 grid·정의목록(dl) 패턴을 사용해 모바일에서 가로 스크롤
// 없이 자연스럽게 세로로 쌓이도록 했습니다.
//
// 준비서류 체크리스트(15번)는 FAQPreview의 <details>/<summary> 아코디언
// 패턴을 재사용한 5개 그룹(A~E)으로 구성했고, "준비서류 인쇄하기"
// 버튼(window.print()만 호출하는 최소 client 컴포넌트)과 Tailwind
// 기본 제공 print: variant(별도 라이브러리 아님)만으로 인쇄 시
// 헤더·푸터·상황 카드·버튼 등을 숨기고 체크리스트+핵심 경고만 보이도록
// 구성했습니다. @page 용지 크기(A4)만 이 페이지 자체의 인라인 <style>
// 태그로 지정했으며, 다른 페이지에 영향을 주는 전역 CSS(globals.css)는
// 전혀 수정하지 않았습니다.
export default function FamilyInheritancePage() {
  return (
    <>
      {/* Header 자체는 수정하지 않고, 이 페이지에서만 인쇄 시 숨깁니다. */}
      <div className="print:hidden">
        <Header />
      </div>
      <main id="main-content" className="flex-1">
        <InheritanceHero />
        <Reveal>
          <InheritanceSituations />
        </Reveal>
        <Reveal>
          <InheritanceFirstCheck />
        </Reveal>
        <Reveal>
          <InheritanceOneStopService />
        </Reveal>
        <Reveal>
          <InheritanceRenunciationVsLimited />
        </Reveal>
        <Reveal>
          <InheritanceThreeMonthPeriod />
        </Reveal>
        <Reveal>
          <InheritanceSpecialLimited />
        </Reveal>
        <Reveal>
          <InheritanceDivision />
        </Reveal>
        <Reveal>
          <InheritanceRegistration />
        </Reveal>
        <Reveal>
          <InheritanceOverseasHeir />
        </Reveal>
        <Reveal>
          <InheritanceWill />
        </Reveal>
        <Reveal>
          <InheritanceLifetimeGift />
        </Reveal>
        <Reveal>
          <InheritanceDutySplit />
        </Reveal>
        <Reveal>
          <InheritanceJurisdiction />
        </Reveal>
        <Reveal>
          <InheritanceDocumentChecklist />
        </Reveal>
        <Reveal>
          <InheritanceDocumentCaution />
        </Reveal>
        {/* FAQPreview 자체는 수정하지 않고, 인쇄 결과에서는 체크리스트·주의사항
            중심으로 보이도록 이 페이지에서만 감싸서 숨깁니다. */}
        <div className="print:hidden">
          <Reveal>
            <FAQPreview items={INHERITANCE_FAQ_ITEMS} heading={INHERITANCE_FAQ_HEADING} />
          </Reveal>
        </div>
        <Reveal>
          <InheritanceCTA />
        </Reveal>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
      {/* 이 페이지에서만 적용되는 인쇄용 용지 크기 지정입니다. 클래스
          선택자가 아니라 @page 규칙이라 Tailwind의 print: variant로는
          표현할 수 없어 최소한의 인라인 <style>로 별도 선언했으며,
          globals.css 등 다른 페이지가 공유하는 파일은 수정하지
          않았습니다. */}
      <style>{"@media print { @page { size: A4; margin: 16mm; } }"}</style>
    </>
  );
}
