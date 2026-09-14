import {
  GUARDIANSHIP_ARBITRARY_EMPHASIS,
  GUARDIANSHIP_ARBITRARY_HEADING,
  GUARDIANSHIP_ARBITRARY_PARAGRAPH,
  GUARDIANSHIP_ARBITRARY_WARNING_ITEMS,
  GUARDIANSHIP_ARBITRARY_WARNING_TITLE,
} from "@/lib/family-guardianship";

// "임의후견" 섹션입니다. 계약 체결·미개시·등기 및 임의후견감독인 선임
// 절차·효력발생시점 4가지는 순서상 서로 이어지는 내용이지만, 각각을
// 번호 배지로 표시하면 "체결 즉시 효력 발생"처럼 오해할 수 있는 단계로
// 오인될 위험이 있어 통일된 warning panel 안에 점(bullet) 목록으로
// 묶었습니다(패널 안에 목록을 두는 것은 FamilyDocuments류의 카드 내부
// ul과 동일한 시각 언어이므로 새 언어를 만든 것은 아닙니다). "법원이
// 임의후견인을 선임한다"고 쓰지 않고 "임의후견감독인" 표현을 그대로
// 유지합니다.
//
// guardianship-page-refine에서, warning panel의 4면 border(및 border-l-4
// accent)를 제거하고 LeaseRelatedMatters와 동일한 제목 왼쪽 짧은 세로
// accent(h-5 w-1.5)로 정리합니다. 배경(bg-slate-50)·목록·문구는 그대로
// 유지했습니다.
//
// guardianship-eligibility-emphasis에서, GUARDIANSHIP_TYPE_CARDS의
// card.emphasis와 동일한 방식으로 이 문단의 핵심 판단기준(장래의 정신적
// 제약에 대비)을 강조합니다. GuardianshipTypes 카드에서 이미 강조한
// 같은 기준이 이 상세 section에서도 반복된다는 것을 보여줍니다.
const arbitraryEmphasisIndex = GUARDIANSHIP_ARBITRARY_PARAGRAPH.indexOf(GUARDIANSHIP_ARBITRARY_EMPHASIS);

export default function GuardianshipArbitrary() {
  return (
    <section id="arbitrary-guardianship" className="scroll-mt-20 border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {GUARDIANSHIP_ARBITRARY_HEADING}
        </h2>
        <p className="mt-6 max-w-3xl border-t border-gray-100 pt-6 text-sm leading-6 text-gray-700 sm:text-base">
          {arbitraryEmphasisIndex !== -1 ? (
            <>
              {GUARDIANSHIP_ARBITRARY_PARAGRAPH.slice(0, arbitraryEmphasisIndex)}
              <strong className="font-bold">{GUARDIANSHIP_ARBITRARY_EMPHASIS}</strong>
              {GUARDIANSHIP_ARBITRARY_PARAGRAPH.slice(
                arbitraryEmphasisIndex + GUARDIANSHIP_ARBITRARY_EMPHASIS.length,
              )}
            </>
          ) : (
            GUARDIANSHIP_ARBITRARY_PARAGRAPH
          )}
        </p>

        <div className="mt-8 max-w-3xl rounded-sm bg-slate-50 p-6">
          <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg break-keep">
            <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{GUARDIANSHIP_ARBITRARY_WARNING_TITLE}</span>
          </h3>
          <ul className="mt-3 flex flex-col gap-2">
            {GUARDIANSHIP_ARBITRARY_WARNING_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-6 text-gray-600 sm:text-base">
                <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
