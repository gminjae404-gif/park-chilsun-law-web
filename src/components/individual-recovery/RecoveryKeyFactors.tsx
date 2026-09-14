import { RECOVERY_ELIGIBILITY_FACTORS, INDIVIDUAL_RECOVERY_REVIEW_FACTORS } from "@/lib/constants";

// "개인회생을 신청하려면 어떤 점을 확인해야 하나요?"(신청요건, 문장형)와
// "주요 검토 요소"(확인하는 항목, 한 줄 요약)를 하나의 섹션으로 묶어
// editorial 형태로 재배치합니다. 두 데이터 모두 법률 검토를 거쳐 확정된
// 문구를 그대로 사용하며, 문단을 줄이거나 새로운 요건을 추가하지
// 않습니다(원문 전체를 그대로 표시).
//
// 신청요건(4개)과 확인하는 항목(5개) 모두 PracticeAreaCards/
// BankruptcyReviewFactors에서 검증된 좌우 2열 + border-t 공유 + 각 항목
// border-b 구분선 목록으로 표시합니다(divide-x/divide-y 2단 텍스트는
// 정확히 2개 항목에만 맞는 기법이라 4개·5개 항목에는 이 목록형을
// 사용합니다). 배경·테두리·모서리·그림자가 있는 카드 박스와 hover lift
// 효과는 이 섹션 전체에서 사용하지 않습니다.
//
// factor.emphasis가 있으면 guardianship 등과 동일한 방식으로 content
// 중 그 부분문자열만 <strong> 처리합니다(항목당 1곳).
const LEFT_ELIGIBILITY_FACTORS = RECOVERY_ELIGIBILITY_FACTORS.slice(0, 2);
const RIGHT_ELIGIBILITY_FACTORS = RECOVERY_ELIGIBILITY_FACTORS.slice(2);

function renderEmphasized(content: string, emphasis?: string) {
  const emphasisIndex = emphasis ? content.indexOf(emphasis) : -1;
  if (!emphasis || emphasisIndex === -1) return content;
  return (
    <>
      {content.slice(0, emphasisIndex)}
      <strong className="font-bold">{emphasis}</strong>
      {content.slice(emphasisIndex + emphasis.length)}
    </>
  );
}

const LEFT_REVIEW_FACTORS = INDIVIDUAL_RECOVERY_REVIEW_FACTORS.slice(0, 3);
const RIGHT_REVIEW_FACTORS = INDIVIDUAL_RECOVERY_REVIEW_FACTORS.slice(3);

export default function RecoveryKeyFactors() {
  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          개인회생을 검토할 때 보는 핵심사항
        </h2>

        <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-brand">
          신청요건
        </h3>
        <div className="mt-4 grid grid-cols-1 border-t border-gray-200 sm:grid-cols-2 sm:gap-x-12">
          <ul>
            {LEFT_ELIGIBILITY_FACTORS.map((factor) => (
              <li key={factor.title} className="border-b border-gray-200 py-6">
                <h4 className="text-base font-semibold text-gray-900 sm:text-lg">{factor.title}</h4>
                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                  {renderEmphasized(factor.content, factor.emphasis)}
                </p>
              </li>
            ))}
          </ul>
          <ul>
            {RIGHT_ELIGIBILITY_FACTORS.map((factor) => (
              <li key={factor.title} className="border-b border-gray-200 py-6">
                <h4 className="text-base font-semibold text-gray-900 sm:text-lg">{factor.title}</h4>
                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                  {renderEmphasized(factor.content, factor.emphasis)}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="mt-12 text-sm font-semibold uppercase tracking-wide text-brand">
          확인하는 항목
        </h3>
        <div className="mt-4 grid grid-cols-1 border-t border-gray-200 sm:grid-cols-2 sm:gap-x-12">
          <ul>
            {LEFT_REVIEW_FACTORS.map((factor) => (
              <li key={factor.title} className="border-b border-gray-200 py-4">
                <span className="block text-sm font-semibold text-gray-900 sm:text-base">
                  {factor.title}
                </span>
                <span className="mt-1 block text-xs leading-5 text-gray-600 sm:text-sm">
                  {factor.description}
                </span>
              </li>
            ))}
          </ul>
          <ul>
            {RIGHT_REVIEW_FACTORS.map((factor) => (
              <li key={factor.title} className="border-b border-gray-200 py-4">
                <span className="block text-sm font-semibold text-gray-900 sm:text-base">
                  {factor.title}
                </span>
                <span className="mt-1 block text-xs leading-5 text-gray-600 sm:text-sm">
                  {factor.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
