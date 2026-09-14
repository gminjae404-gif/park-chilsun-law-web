import { BANKRUPTCY_DECLARATION_FLOW, BANKRUPTCY_DECLARATION_FLOW_NOTE } from "@/lib/constants";

// 이 페이지에서 시각적으로 가장 중요한 설명 영역입니다. "파산선고 = 면책"으로
// 오해하지 않도록 흐름을 번호와 텍스트로 한눈에 보여줍니다.
//
// 이전에는 각 단계를 진한 배경의 pill(border+bg-slate-50)로 감싸고 화살표로
// 연결했는데, pill이 카드처럼 반복되어 보인다는 피드백에 따라 pill 배경을
// 없애고 작은 번호(원형 테두리)+텍스트만 남긴 가벼운 흐름으로 바꿉니다.
// 모바일에서는 억지로 가로 배치하지 않고 세로로 자연스럽게 쌓이며, PC에서는
// 줄바꿈 가능한 가로 흐름으로 표시합니다. 단계 문구·순서는 변경하지 않습니다.
export default function BankruptcyDeclarationFlow() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          파산선고와 면책은 별개입니다
        </h2>
        <ol className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2.5 sm:gap-y-4">
          {BANKRUPTCY_DECLARATION_FLOW.map((step, index) => (
            <li key={step} className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-300 text-xs font-semibold text-gray-600"
              >
                {index + 1}
              </span>
              <span className="text-sm font-medium text-gray-800 sm:text-base">{step}</span>
              {index < BANKRUPTCY_DECLARATION_FLOW.length - 1 && (
                <span aria-hidden="true" className="hidden text-gray-300 sm:ml-0.5 sm:inline">
                  ·
                </span>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-500">
          {BANKRUPTCY_DECLARATION_FLOW_NOTE}
        </p>
      </div>
    </section>
  );
}
