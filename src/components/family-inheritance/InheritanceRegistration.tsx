import {
  INHERITANCE_REGISTRATION_DESCRIPTION,
  INHERITANCE_REGISTRATION_HEADING,
  INHERITANCE_REGISTRATION_NOTE,
  INHERITANCE_REGISTRATION_TYPES,
} from "@/lib/family-inheritance";

// "상속등기" 섹션입니다. 법정상속등기·협의분할에 따른 상속등기는
// 순서가 있는 단계가 아니라 "분할 방식에 따라 구분되는 유형"이므로,
// CorporateEntityTypes/FamilyGuardianshipGuide와 동일한 정의목록(dl)
// 형태를 재사용해 번호 배지 없이 나열합니다. 관할·세금 관련 안내는
// 단정적 표현을 피하기 위해 카드가 아닌 얇은 텍스트로 아래에 둡니다.
//
// type.emphasis가 있으면 guardianship과 동일한 방식으로 description 중
// 그 부분문자열만 <strong> 처리합니다(문구 변경 없음).
export default function InheritanceRegistration() {
  return (
    <section id="registration" className="scroll-mt-20 border-b border-gray-200 bg-slate-50 print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {INHERITANCE_REGISTRATION_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {INHERITANCE_REGISTRATION_DESCRIPTION}
        </p>

        <dl className="mt-10 divide-y divide-gray-200 border-t border-gray-200 bg-white">
          {INHERITANCE_REGISTRATION_TYPES.map((type) => {
            const emphasisIndex = type.emphasis ? type.description.indexOf(type.emphasis) : -1;
            return (
              <div
                key={type.title}
                className="grid grid-cols-1 gap-2 px-6 py-6 sm:grid-cols-[220px_1fr] sm:gap-8"
              >
                <dt className="text-base font-semibold text-gray-900 sm:text-lg">{type.title}</dt>
                <dd className="text-sm leading-6 text-gray-600 sm:text-base">
                  {type.emphasis && emphasisIndex !== -1 ? (
                    <>
                      {type.description.slice(0, emphasisIndex)}
                      <strong className="font-bold">{type.emphasis}</strong>
                      {type.description.slice(emphasisIndex + type.emphasis.length)}
                    </>
                  ) : (
                    type.description
                  )}
                </dd>
              </div>
            );
          })}
        </dl>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-500">
          {INHERITANCE_REGISTRATION_NOTE}
        </p>
      </div>
    </section>
  );
}
