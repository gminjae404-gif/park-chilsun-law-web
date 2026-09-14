import { PROCESS_STEPS, type ProcessStep } from "@/lib/constants";

type ProcessSectionProps = {
  // detailed(기본값): 제목+설명 전체 표시 — 개인회생 상세 페이지.
  // compact: 번호+제목만 표시하고 설명은 숨김 — 홈페이지(recovery 모드).
  // timeline: 카드 그리드 대신 번호+얇은 연결선 기반 세로 타임라인으로
  //   표시 — 개인파산 상세 페이지 전용. compact를 재사용하지 않고 별도
  //   값으로 둔 이유는, compact가 recovery 모드 홈페이지에서도 이미
  //   사용 중이라 그 자리에서 시각적으로 바뀌면 안 되기 때문입니다.
  //   box-density-audit(카드/박스 밀도 1차 감사)에서 detailed·compact가
  //   공유하는 카드 그리드에만 남아 있던 hover elevation(translate/
  //   border/shadow)과 그 전환에만 쓰이던 transition을 제거했습니다 —
  //   BankruptcyDischargeReview·RequiredDocuments 등에 이미 적용된
  //   "카드는 유지하되 hover elevation만 제거" 원칙에 맞춘 것으로, 그
  //   외 DOM 구조·배경·간격·타이포그래피·데이터는 전혀 건드리지
  //   않았습니다.
  variant?: "compact" | "detailed" | "timeline";
  // 아래 3개는 다른 페이지(예: 개인파산)에서 이 컴포넌트를 재사용하기 위한
  // 선택적 props입니다. 아무것도 전달하지 않으면 기존과 동일하게
  // PROCESS_STEPS + "개인회생 진행 절차" + 설명 없음으로 렌더링됩니다.
  steps?: ProcessStep[];
  heading?: string;
  description?: string;
};

export default function ProcessSection({
  variant = "detailed",
  steps,
  heading = "개인회생 진행 절차",
  description,
}: ProcessSectionProps) {
  const items = steps ?? PROCESS_STEPS;

  return (
    <section id="process" className="scroll-mt-20 border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {heading}
        </h2>
        {description && (
          <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
            {description}
          </p>
        )}
        {variant === "timeline" ? (
          <ol className="mt-10 max-w-2xl">
            {items.map((item, index) => (
              <li key={item.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand text-xs font-semibold text-brand"
                  >
                    {item.step}
                  </span>
                  {index < items.length - 1 && (
                    <span aria-hidden="true" className="mt-1 w-px flex-1 bg-gray-200" />
                  )}
                </div>
                <div className={index < items.length - 1 ? "pb-8" : ""}>
                  <h3 className="pt-1 text-base font-semibold text-gray-900 sm:text-lg">
                    {item.label}
                  </h3>
                  {item.description && (
                    <p className="mt-1 text-sm leading-6 text-gray-600 sm:text-base">
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <li
                key={item.step}
                className="rounded-sm border border-gray-200 bg-white p-6"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white"
                >
                  {item.step}
                </span>
                <h3 className="mt-3 text-base font-semibold text-gray-900 sm:text-lg">
                  {item.label}
                </h3>
                {variant === "detailed" && item.description && (
                  <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
