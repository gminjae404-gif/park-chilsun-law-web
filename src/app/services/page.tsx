import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PracticeAreaCards from "@/components/office/PracticeAreaCards";

export const metadata: Metadata = {
  title: "업무분야 전체보기",
  description: "개인회생·파산, 민사·집행, 가사·상속, 부동산등기, 법인등기 등 주요 업무분야를 안내합니다.",
};

// "업무분야 전체보기" 페이지입니다. 카드 그리드는 홈의 PracticeAreasOverview와
// 동일한 PracticeAreaCards를 그대로 재사용합니다. 법률 설명·조문·요건·기간·
// 비용은 이번 단계에서 작성하지 않습니다. 콘텐츠/route는 변경하지 않고,
// 진한 구분선만 없애 소개 영역과 카드 영역이 하나의 옅은 slate 배경 위에서
// 자연스럽게 이어지도록(업무 목록표처럼 보이지 않도록) 조정합니다.
export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight">
              업무분야 전체보기
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              법무사사무소에서 다루는 주요 업무분야를 확인할 수 있습니다.
            </p>
          </div>
        </section>
        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
            <PracticeAreaCards />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
