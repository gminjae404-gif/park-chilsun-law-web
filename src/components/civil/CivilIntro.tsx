import { CIVIL_INTRO } from "@/lib/civil";

// 확정 문단 1개만 사용하는 짧은 editorial 섹션입니다(BankruptcyPropertyNote/
// RealEstateIntro/CorporateIntro와 동일한 "제목 + 얇은 구분선 + 문단"
// 패턴). 카드 없이 whitespace와 얇은 구분선만으로 앞 Hero와의 리듬을
// 만듭니다.
//
// civil-page-refine에서, 이 페이지에서 가장 먼저 등장하는 핵심 확인사항
// (제소 전에 상대방·청구내용·경위·자료를 확인해야 한다는 점)을
// enforcement/guardianship과 동일한 방식으로 강조합니다. emphasis가
// 문단에 없는 경우에는 안전하게 기존과 동일하게 렌더링합니다.
const introEmphasisIndex = CIVIL_INTRO.emphasis
  ? CIVIL_INTRO.paragraph.indexOf(CIVIL_INTRO.emphasis)
  : -1;

export default function CivilIntro() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {CIVIL_INTRO.heading}
        </h2>
        <div className="mt-6 max-w-3xl border-t border-gray-100 pt-6">
          <p className="text-sm leading-6 text-gray-700 sm:text-base">
            {CIVIL_INTRO.emphasis && introEmphasisIndex !== -1 ? (
              <>
                {CIVIL_INTRO.paragraph.slice(0, introEmphasisIndex)}
                <strong className="font-bold">{CIVIL_INTRO.emphasis}</strong>
                {CIVIL_INTRO.paragraph.slice(introEmphasisIndex + CIVIL_INTRO.emphasis.length)}
              </>
            ) : (
              CIVIL_INTRO.paragraph
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
