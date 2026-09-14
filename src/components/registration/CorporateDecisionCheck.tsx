import { Fragment } from "react";
import {
  CORPORATE_DECISION_CHECK_DESCRIPTION,
  CORPORATE_DECISION_CHECK_HEADING,
  CORPORATE_DECISION_CHECK_ITEMS,
} from "@/lib/corporate-registration";

// 법인등기 페이지만의 고유 section입니다: "현재 회사 확인 → 내부 절차
// 확인 → 자료 준비"로 이어지는 이 페이지만의 확인 순서를 보여줍니다.
// CorporateTypes(좌우 2열 divider 목록)를 그대로 복제하지 않고, 순서가
// 있는 흐름임을 드러내기 위해 OfficeGuide에서 검증된 "번호 배지 + 얇은
// 연결선"(PC 가로 / mobile 세로) 언어를 설명 문단이 있는 버전으로
// 확장합니다. ProcessSection의 실제 절차 타임라인(원형 배지)과 헷갈리지
// 않도록 사각형 배지를 사용해 "확인 순서"와 "진행 절차"를 시각적으로
// 구분합니다.
export default function CorporateDecisionCheck() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {CORPORATE_DECISION_CHECK_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {CORPORATE_DECISION_CHECK_DESCRIPTION}
        </p>
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-0">
          {CORPORATE_DECISION_CHECK_ITEMS.map((item, index) => (
            <Fragment key={item.title}>
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="hidden h-px flex-1 bg-gray-200 sm:mt-4 sm:block"
                />
              )}
              <div className="flex gap-4 sm:flex-1 sm:flex-col sm:gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-brand text-xs font-semibold text-brand"
                >
                  {index + 1}
                </span>
                <div className="sm:pr-4">
                  <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">{item.description}</p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
