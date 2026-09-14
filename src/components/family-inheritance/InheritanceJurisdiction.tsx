import {
  INHERITANCE_JURISDICTION_HEADING,
  INHERITANCE_JURISDICTION_ITEMS,
  INHERITANCE_JURISDICTION_NOTE,
} from "@/lib/family-inheritance";

// "어디에 신청하나요?" 섹션입니다. 절차별 관할기관이 서로 다른 "구분"
// 정보이므로 dl-row 패턴을 재사용합니다. 하나의 문장으로 관할을 단정하지
// 않기 위해 note에서 사건에 따라 확인이 필요하다는 점을 분명히
// 안내합니다.
export default function InheritanceJurisdiction() {
  return (
    <section className="border-b border-gray-200 bg-slate-50 print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {INHERITANCE_JURISDICTION_HEADING}
        </h2>

        <dl className="mt-10 divide-y divide-gray-200 border-t border-gray-200 bg-white">
          {INHERITANCE_JURISDICTION_ITEMS.map((item) => (
            <div
              key={item.procedure}
              className="grid grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-[200px_1fr] sm:gap-8"
            >
              <dt className="text-base font-semibold text-gray-900 sm:text-lg">{item.procedure}</dt>
              <dd className="text-sm leading-6 text-gray-600 sm:text-base">{item.description}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-500">
          {INHERITANCE_JURISDICTION_NOTE}
        </p>
      </div>
    </section>
  );
}
