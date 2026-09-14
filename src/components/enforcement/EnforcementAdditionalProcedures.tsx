import {
  ENFORCEMENT_ADDITIONAL_PROCEDURES,
  ENFORCEMENT_ADDITIONAL_PROCEDURES_HEADING,
  ENFORCEMENT_ADDITIONAL_PROCEDURES_NOTE,
} from "@/lib/enforcement";

// "강제집행과 함께 확인하는 절차"입니다. InheritanceJurisdiction과
// 동일한 dl-row 목록 패턴(절차명 + 설명, 구분선으로만 구분)을
// 재사용합니다. 부동산 강제경매·배당요구·재산명시·재산조회·가압류에서
// 본압류로 이어지는 경우를 모든 사건에 공통되는 고정 순서처럼 표현하지
// 않기 위해, 번호 목록이 아니라 병렬적인 항목 목록으로 구성했습니다.
export default function EnforcementAdditionalProcedures() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {ENFORCEMENT_ADDITIONAL_PROCEDURES_HEADING}
        </h2>

        <dl className="mt-10 divide-y divide-gray-200 border-t border-gray-200 bg-slate-50">
          {ENFORCEMENT_ADDITIONAL_PROCEDURES.map((item) => (
            <div
              key={item.procedure}
              className="grid grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-[240px_1fr] sm:gap-8"
            >
              <dt className="text-base font-semibold text-gray-900 sm:text-lg">
                {item.procedure}
              </dt>
              <dd className="text-sm leading-6 text-gray-600 sm:text-base">{item.description}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-500">
          {ENFORCEMENT_ADDITIONAL_PROCEDURES_NOTE}
        </p>
      </div>
    </section>
  );
}
