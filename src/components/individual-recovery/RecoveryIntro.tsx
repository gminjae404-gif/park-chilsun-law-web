import {
  INDIVIDUAL_RECOVERY_INTRO_PARAGRAPHS,
  INDIVIDUAL_RECOVERY_INTRO_PARAGRAPH_EMPHASIS,
} from "@/lib/constants";

// 법률 검토를 거쳐 확정된 문구입니다. 임의로 수정하지 않습니다.
// 확정된 문단 2개를 카드가 아닌 editorial 2단 텍스트로 배치합니다(개인파산
// BankruptcyDefinitions와 같은 divide-x/divide-y 기법). PC에서는 가운데
// 얇은 세로 구분선으로만 나누고, 모바일에서는 같은 구분선이 가로선으로
// 전환되어 두 문단이 자연스럽게 이어집니다. 배경·테두리·모서리·그림자가
// 있는 카드 박스는 사용하지 않습니다. 텍스트 자체는 변경 없습니다.
//
// recovery-page-refine에서, 이 페이지에서 가장 먼저 등장하는 핵심
// 판단기준(계속적·반복적 소득 요건, 신청 전 확인해야 할 소득·채무·재산
// 관련 사항)을 guardianship 등과 동일한 방식으로 강조합니다. 같은
// 인덱스에 강조할 문자열이 없거나 문단에 없는 경우에는 안전하게
// 기존과 동일하게 렌더링합니다.
export default function RecoveryIntro() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          개인회생이란
        </h2>
        <div className="mt-10 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {INDIVIDUAL_RECOVERY_INTRO_PARAGRAPHS.map((paragraph, index) => {
            const emphasis = INDIVIDUAL_RECOVERY_INTRO_PARAGRAPH_EMPHASIS[index];
            const emphasisIndex = emphasis ? paragraph.indexOf(emphasis) : -1;
            return (
              <p
                key={paragraph}
                className={`py-6 text-sm leading-6 text-gray-700 first:pt-0 last:pb-0 sm:py-0 sm:text-base ${
                  index === 0 ? "sm:pr-10" : "sm:pl-10"
                }`}
              >
                {emphasis && emphasisIndex !== -1 ? (
                  <>
                    {paragraph.slice(0, emphasisIndex)}
                    <strong className="font-bold">{emphasis}</strong>
                    {paragraph.slice(emphasisIndex + emphasis.length)}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
