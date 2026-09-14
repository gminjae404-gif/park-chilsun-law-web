import { CIVIL_TYPES, CIVIL_TYPES_DESCRIPTION, CIVIL_TYPES_HEADING } from "@/lib/civil";

// "대표적인 민사분쟁 유형" 4개를 카드 grid가 아닌, 좌우 2열 + border-t
// 공유 + 각 항목 border-b 구분선 목록으로 표시합니다. 등기 그룹 전용인
// RegistrationTypesSection은 civil-page-design-audit에서 재사용하지
// 않기로 확정했으므로 import하지 않고 이 컴포넌트에서 독립적으로
// 구현합니다(UI 패턴만 참고). 정보성 목록으로만 보이도록 hover lift/
// shadow, 아이콘, 배경 카드를 사용하지 않습니다.
const LEFT_TYPES = CIVIL_TYPES.slice(0, 2);
const RIGHT_TYPES = CIVIL_TYPES.slice(2);

export default function CivilTypes() {
  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {CIVIL_TYPES_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {CIVIL_TYPES_DESCRIPTION}
        </p>
        <div className="mt-10 grid grid-cols-1 border-t border-gray-200 sm:grid-cols-2 sm:gap-x-12">
          <ul>
            {LEFT_TYPES.map((type) => (
              <li key={type.title} className="border-b border-gray-200 py-6">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg">{type.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                  {type.description}
                </p>
              </li>
            ))}
          </ul>
          <ul>
            {RIGHT_TYPES.map((type) => (
              <li key={type.title} className="border-b border-gray-200 py-6">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg">{type.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                  {type.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
