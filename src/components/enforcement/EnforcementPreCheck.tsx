import { Fragment } from "react";
import {
  ENFORCEMENT_PRE_CHECK_DESCRIPTION,
  ENFORCEMENT_PRE_CHECK_HEADING,
  ENFORCEMENT_PRE_CHECK_ITEMS,
} from "@/lib/enforcement";

// 강제집행 페이지만의 고유 section입니다: "집행권원 → 미이행 내용 →
// 채무자 → 집행대상 → 집행방법"으로 이어지는, 강제집행을 검토하기 전에
// 먼저 확인하는 순서를 보여줍니다. CivilPreCheck/CorporateDecisionCheck와
// 동일한 시각 언어(번호 배지+연결선, PC 가로/mobile 세로)를 참고했지만
// 그 컴포넌트를 import하지 않고 이 페이지 전용으로 독립 구현합니다.
// ProcessSection의 실제 절차 타임라인(원형 배지)과 헷갈리지 않도록
// 사각형 배지를 사용해 "확인 순서"와 "진행 절차"를 시각적으로
// 구분합니다. 이 항목들은 모든 사건에 공통되는 법정 의무절차가 아니라
// 확인 순서를 안내하는 목적이므로 그런 뉘앙스로 표현하지 않습니다.
//
// item.emphasis가 있으면 guardianship·가사/상속 페이지와 동일한
// 방식으로 description 중 그 부분문자열만 <strong> 처리합니다(항목당
// 1곳). emphasis가 없거나 description에 없는 경우에는 기존과 동일하게
// description을 그대로 렌더링합니다.
export default function EnforcementPreCheck() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {ENFORCEMENT_PRE_CHECK_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {ENFORCEMENT_PRE_CHECK_DESCRIPTION}
        </p>
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-0">
          {ENFORCEMENT_PRE_CHECK_ITEMS.map((item, index) => {
            const emphasisIndex = item.emphasis ? item.description.indexOf(item.emphasis) : -1;
            return (
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
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {item.emphasis && emphasisIndex !== -1 ? (
                        <>
                          {item.description.slice(0, emphasisIndex)}
                          <strong className="font-bold">{item.emphasis}</strong>
                          {item.description.slice(emphasisIndex + item.emphasis.length)}
                        </>
                      ) : (
                        item.description
                      )}
                    </p>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
