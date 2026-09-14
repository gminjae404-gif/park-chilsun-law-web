import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQPreview from "@/components/FAQPreview";
import ProcessSection from "@/components/ProcessSection";
import Reveal from "@/components/Reveal";
import NameChangeHero from "@/components/family-name-change/NameChangeHero";
import NameChangeSituations from "@/components/family-name-change/NameChangeSituations";
import NameChangeDistinction from "@/components/family-name-change/NameChangeDistinction";
import NameChangeJurisdiction from "@/components/family-name-change/NameChangeJurisdiction";
import NameChangeExplanation from "@/components/family-name-change/NameChangeExplanation";
import NameChangeEvidence from "@/components/family-name-change/NameChangeEvidence";
import NameChangeMinor from "@/components/family-name-change/NameChangeMinor";
import NameChangeNotAutomatic from "@/components/family-name-change/NameChangeNotAutomatic";
import NameChangeReport from "@/components/family-name-change/NameChangeReport";
import NameChangeAfterChange from "@/components/family-name-change/NameChangeAfterChange";
import NameChangeDocuments from "@/components/family-name-change/NameChangeDocuments";
import NameChangeMisconceptions from "@/components/family-name-change/NameChangeMisconceptions";
import NameChangeCTA from "@/components/family-name-change/NameChangeCTA";
import {
  NAME_CHANGE_FAQ_HEADING,
  NAME_CHANGE_FAQ_ITEMS,
  NAME_CHANGE_PROCESS_HEADING,
  NAME_CHANGE_PROCESS_NOTE,
  NAME_CHANGE_PROCESS_STEPS,
} from "@/lib/family-name-change";

// title.template(layout.tsx)이 "%s | 사무소명"을 자동으로 붙여주므로 다른
// 업무 상세페이지와 동일하게 짧은 title만 지정합니다.
export const metadata: Metadata = {
  title: "개명허가",
  description:
    "개명과 가족관계등록부 정정을 구분하고, 개명허가 신청부터 허가 후 개명신고와 후속 명의변경까지 확인할 수 있는 안내 페이지입니다.",
};

// 가사·상속(/family) 하위의 개명허가 상세 안내 페이지(/family/name-change)
// 입니다. 이번 작업 범위는 이 페이지 한 곳으로 한정하며, Header/Footer
// 컴포넌트 자체나 전역 내비게이션(constants.ts), /family 허브, 다른
// 페이지의 디자인·문구는 전혀 수정하지 않았습니다. /family/inheritance,
// /family/guardianship의 기존 export도 그대로 두고, 이 페이지 전용
// 콘텐츠는 별도 파일 src/lib/family-name-change.ts에 완전히 격리했습니다.
//
// 이 페이지의 가장 중요한 설계 원칙은 "개명"과 "가족관계등록부 정정"이
// 서로 다른 문제라는 점입니다. 그래서 "① 상황 선택 → ② 개명·정정
// 구분 → ③ 개명허가 일반 흐름 → ④ 관할법원 → ⑤~⑥ 개명사유·소명자료 →
// ⑦ 미성년자 개명 → ⑧ 허가 후 신고 의무(핵심 경고) → ⑨ 개명신고 →
// ⑩ 개명 후 확인사항 → ⑪ 준비자료 → ⑫ 자주 하는 오해 → FAQ → CTA"
// 순서로 구성했습니다. 등록부정정의 상세 절차는 이 페이지에서 확장하지
// 않고 개명과의 구분 지점만 안내하며(향후 별도 /family/registry-
// correction 페이지로 분리 가능하도록 함), 개명과 성·본 변경도 같은
// 절차로 설명하지 않습니다.
//
// "개명허가의 일반적인 흐름"은 개명허가 신청이라는 하나의 절차
// 유형(가정법원 청구로 시작)을 설명하는 것이므로, /family/guardianship
// 에서 확립한 방식과 동일하게 공용 ProcessSection(timeline variant)을
// 그대로 재사용했습니다. "허가결정 = 모든 기관 자동 변경"으로 오해하지
// 않도록 description prop에 그 취지의 caution을 담았고, 별도의 핵심
// 경고 section(NameChangeNotAutomatic)에서 개명신고 의무와 1개월
// 기간(가족관계등록법 제99조 기준)을 다시 한번 통일된 warning panel로
// 강조합니다.
//
// 법무사의 업무범위(법원 제출서류의 작성·제출대행과 이에 부수되는
// 업무)를 벗어나는 "소송을 대리합니다"·"법정에서 대신 변론합니다" 등의
// 표현은 이 페이지 어디에도 사용하지 않았습니다.
export default function FamilyNameChangePage() {
  return (
    <>
      <div className="print:hidden">
        <Header />
      </div>
      <main id="main-content" className="flex-1">
        <NameChangeHero />
        <Reveal>
          <NameChangeSituations />
        </Reveal>
        <Reveal>
          <NameChangeDistinction />
        </Reveal>
        <div className="print:hidden">
          <Reveal>
            <ProcessSection
              steps={NAME_CHANGE_PROCESS_STEPS}
              heading={NAME_CHANGE_PROCESS_HEADING}
              description={NAME_CHANGE_PROCESS_NOTE}
              variant="timeline"
            />
          </Reveal>
        </div>
        <Reveal>
          <NameChangeJurisdiction />
        </Reveal>
        <Reveal>
          <NameChangeExplanation />
        </Reveal>
        <Reveal>
          <NameChangeEvidence />
        </Reveal>
        <Reveal>
          <NameChangeMinor />
        </Reveal>
        <Reveal>
          <NameChangeNotAutomatic />
        </Reveal>
        <Reveal>
          <NameChangeReport />
        </Reveal>
        <Reveal>
          <NameChangeAfterChange />
        </Reveal>
        <Reveal>
          <NameChangeDocuments />
        </Reveal>
        <Reveal>
          <NameChangeMisconceptions />
        </Reveal>
        <div className="print:hidden">
          <Reveal>
            <FAQPreview items={NAME_CHANGE_FAQ_ITEMS} heading={NAME_CHANGE_FAQ_HEADING} />
          </Reveal>
        </div>
        <Reveal>
          <NameChangeCTA />
        </Reveal>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
      {/* 인쇄 시 A4 용지 기준 여백만 지정합니다. 이 규칙은 이 페이지에서만
          사용되므로 전역 globals.css가 아니라 이 파일에 인라인 <style>로
          한정했습니다(/family/inheritance와 동일한 패턴). */}
      <style>{"@media print { @page { size: A4; margin: 16mm; } }"}</style>
    </>
  );
}
