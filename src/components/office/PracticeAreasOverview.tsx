import PracticeAreaCards from "./PracticeAreaCards";

// 홈(full 모드) "주요 업무분야" 섹션입니다. 카드 그리드 자체는
// PracticeAreaCards(홈·/services 공용)를 그대로 사용합니다.
//
// 섹션 사이의 진한 구분선(border-b)을 없애고, 옅은 slate 배경으로만
// 앞뒤 섹션과 구분되도록 해 전체 리듬이 부드럽게 이어지도록 합니다.
export default function PracticeAreasOverview() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          주요 업무분야
        </h2>
        <div className="mt-10">
          <PracticeAreaCards />
        </div>
      </div>
    </section>
  );
}
