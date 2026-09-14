import { REAL_ESTATE_INTRO } from "@/lib/real-estate-registration";

// 확정 문단 1개만 사용하는 짧은 editorial 섹션입니다(BankruptcyPropertyNote와
// 동일한 "제목 + 얇은 구분선 + 문단" 패턴). 문단이 1개뿐이라 2단
// divide-x/divide-y 기법(정확히 2개 항목용)은 적용하지 않습니다. 카드
// 없이 whitespace와 얇은 구분선만으로 앞 Hero와의 리듬을 만듭니다.
export default function RealEstateIntro() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {REAL_ESTATE_INTRO.heading}
        </h2>
        <div className="mt-6 max-w-3xl border-t border-gray-100 pt-6">
          <p className="text-sm leading-6 text-gray-700 sm:text-base">
            {REAL_ESTATE_INTRO.paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}
