import {
  ENFORCEMENT_TYPES,
  ENFORCEMENT_TYPES_DESCRIPTION,
  ENFORCEMENT_TYPES_HEADING,
} from "@/lib/enforcement";

// "강제집행 대상별 업무유형" 4개를 카드 grid가 아닌, CivilTypes와 동일한
// 좌우 2열 + border-t 공유 + 각 항목 border-b 구분선 목록으로
// 표시합니다. 등기 그룹 전용인 RegistrationTypesSection은 이 페이지에서
// 재사용하지 않고 이 컴포넌트에서 독립적으로 구현합니다(UI 패턴만
// 참고). 정보성 목록으로만 보이도록 hover lift/shadow, 아이콘, 배경
// 카드를 사용하지 않습니다.
const LEFT_TYPES = ENFORCEMENT_TYPES.slice(0, 2);
const RIGHT_TYPES = ENFORCEMENT_TYPES.slice(2);

export default function EnforcementTypes() {
  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {ENFORCEMENT_TYPES_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {ENFORCEMENT_TYPES_DESCRIPTION}
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
