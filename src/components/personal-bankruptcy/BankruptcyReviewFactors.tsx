import { BANKRUPTCY_REVIEW_FACTORS } from "@/lib/constants";

// 4개 항목을 카드가 아닌 얇은 구분선 기반 목록으로 표시합니다
// (PracticeAreaCards에서 이미 검증된 좌우 2열 + border-t 공유 + 각 항목
// border-b 패턴을 재사용). 배경·테두리·그림자가 있는 카드 박스나 hover
// lift 효과는 사용하지 않습니다. 항목 내용·순서는 변경하지 않습니다.
//
// card.emphasis가 있으면 guardianship 등과 동일한 방식으로 content 중
// 그 부분문자열만 <strong> 처리합니다(항목당 1곳).
const LEFT_FACTORS = BANKRUPTCY_REVIEW_FACTORS.slice(0, 2);
const RIGHT_FACTORS = BANKRUPTCY_REVIEW_FACTORS.slice(2);

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

export default function BankruptcyReviewFactors() {
  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          개인파산을 검토할 때 확인하는 사항
        </h2>
        <div className="mt-10 grid grid-cols-1 border-t border-gray-200 sm:grid-cols-2 sm:gap-x-12">
          <ul>
            {LEFT_FACTORS.map((card) => (
              <li key={card.title} className="border-b border-gray-200 py-6">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {renderEmphasized(card.content, card.emphasis)}
                </p>
              </li>
            ))}
          </ul>
          <ul>
            {RIGHT_FACTORS.map((card) => (
              <li key={card.title} className="border-b border-gray-200 py-6">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {renderEmphasized(card.content, card.emphasis)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
