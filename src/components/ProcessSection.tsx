import type { ProcessStep } from "@/lib/constants";

type ProcessSectionProps = {
  // detailed(기본값): 제목+설명 전체 표시.
  // compact: 번호+제목만 표시하고 설명은 숨김.
  // timeline: 카드 그리드 대신 번호+얇은 연결선 기반 세로 타임라인으로 표시.
  variant?: "compact" | "detailed" | "timeline";
  // 이 사이트의 모든 업무 상세 페이지는 각자의 확정된 진행 절차 데이터를
  // steps/heading으로 명시적으로 전달합니다(공용 기본값을 두지 않습니다).
  steps: ProcessStep[];
  heading: string;
  description?: string;
};

export default function ProcessSection({
  variant = "detailed",
  steps,
  heading,
  description,
}: ProcessSectionProps) {
  const items = steps;

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
