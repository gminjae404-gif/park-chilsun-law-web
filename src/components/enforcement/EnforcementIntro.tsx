import { ENFORCEMENT_INTRO } from "@/lib/enforcement";

// 확정 문단 1개만 사용하는 짧은 editorial 섹션입니다(CivilIntro와 동일한
// "제목 + 얇은 구분선 + 문단" 패턴). 카드 없이 whitespace와 얇은
// 구분선만으로 앞 Hero와의 리듬을 만듭니다.
//
// enforcement-page-refine에서, 이 페이지에서 가장 먼저 등장하는 핵심
// 판단기준(강제집행의 근거 문서 확인)을 guardianship과 동일한 방식으로
// 강조합니다. emphasis가 문단에 없는 경우에는 안전하게 기존과 동일하게
// 렌더링합니다.
const introEmphasisIndex = ENFORCEMENT_INTRO.emphasis
  ? ENFORCEMENT_INTRO.paragraph.indexOf(ENFORCEMENT_INTRO.emphasis)
  : -1;

export default function EnforcementIntro() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {ENFORCEMENT_INTRO.heading}
        </h2>
        <div className="mt-6 max-w-3xl border-t border-gray-100 pt-6">
          <p className="text-sm leading-6 text-gray-700 sm:text-base">
            {ENFORCEMENT_INTRO.emphasis && introEmphasisIndex !== -1 ? (
              <>
                {ENFORCEMENT_INTRO.paragraph.slice(0, introEmphasisIndex)}
                <strong className="font-bold">{ENFORCEMENT_INTRO.emphasis}</strong>
                {ENFORCEMENT_INTRO.paragraph.slice(introEmphasisIndex + ENFORCEMENT_INTRO.emphasis.length)}
              </>
            ) : (
              ENFORCEMENT_INTRO.paragraph
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
