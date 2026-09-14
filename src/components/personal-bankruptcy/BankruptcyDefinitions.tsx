import {
  BANKRUPTCY_DEFINITION_CARDS,
  BANKRUPTCY_DEFINITION_NOTE,
  BANKRUPTCY_HERO,
} from "@/lib/constants";

// 개인파산/면책 두 정의를 카드가 아닌 editorial 2단 텍스트로 배치합니다.
// PC에서는 가운데 아주 얇은 세로 구분선(divide-x)으로만 나누고, 모바일에서는
// 같은 구분선이 가로선(divide-y)으로 전환되어 "개인파산 → 면책" 순서로
// 자연스럽게 이어집니다. 배경·테두리·모서리·그림자가 있는 카드 박스는
// 사용하지 않습니다. "파산선고=면책 아님"이라는 핵심 note만 왼쪽 얇은
// brand 라인 + 텍스트로 가볍게 강조합니다(문구는 Hero와 동일한 확정
// 문구를 그대로 재사용).
//
// bankruptcy-page-refine에서, card.emphasis가 있는 카드만 content 중 그
// 부분문자열을 guardianship 등과 동일한 방식으로 <strong> 처리합니다
// (카드당 1곳, 문구 변경 없음).
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

export default function BankruptcyDefinitions() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          개인파산과 면책은 무엇이 다른가요?
        </h2>
        <div className="mt-10 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {BANKRUPTCY_DEFINITION_CARDS.map((card, index) => (
            <div
              key={card.title}
              className={`py-6 first:pt-0 last:pb-0 sm:py-0 ${index === 0 ? "sm:pr-10" : "sm:pl-10"}`}
            >
              <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {renderEmphasized(card.content, card.emphasis)}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 border-l-2 border-brand py-1 pl-4">
          <p className="text-sm font-medium leading-6 text-gray-800">{BANKRUPTCY_HERO.note}</p>
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-500">{BANKRUPTCY_DEFINITION_NOTE}</p>
      </div>
    </section>
  );
}
