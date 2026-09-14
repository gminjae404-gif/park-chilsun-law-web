import {
  FAMILY_DOCUMENT_CATEGORIES,
  FAMILY_DOCUMENTS_DESCRIPTION,
  FAMILY_DOCUMENTS_HEADING,
  FAMILY_DOCUMENTS_NOTE,
  FAMILY_DOCUMENTS_REGISTRATION_NOTE,
  FAMILY_INHERITANCE_DOCUMENTS_HEADING,
  FAMILY_INHERITANCE_DOCUMENTS_ITEMS,
  FAMILY_INHERITANCE_DOCUMENTS_NOTE,
} from "@/lib/family";

// checklist 성격의 "중요 확인 정보"이므로 EnforcementDocuments/
// CivilDocuments와 동일하게 카드(패널) 사용을 유지합니다. 카드는 hover
// lift/shadow 없이 정적으로 표시합니다. 3개뿐이라 grid는 sm:grid-cols-2
// 기준으로 마지막 한 칸이 비지만, 새로운 레이아웃을 만들지 않고 기존
// 패턴을 그대로 재사용합니다.
//
// "상속이라면 추가로 확인할 자료"는 3개 카드와 같은 무게의 4번째
// 카드를 추가하는 대신, section 내부의 차분한 bordered sub-section
// 1개로 보완합니다(hover/아이콘/새 색상 없음). 제적등본 등을 모든
// 상속사건의 필수서류처럼 보이지 않도록 목록 아래 완충 문구를
// 함께 둡니다. 가족관계등록증명서 발급 관련 note는 카드가 아닌
// 얇은 텍스트로 section 맨 아래에 둡니다(구체적 발급기준은 이
// 페이지에서 다루지 않음).
export default function FamilyDocuments() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {FAMILY_DOCUMENTS_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {FAMILY_DOCUMENTS_DESCRIPTION}
        </p>

        <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FAMILY_DOCUMENT_CATEGORIES.map((category) => (
            <div key={category.category} className="rounded-sm bg-slate-50 p-6">
              <dt className="text-base font-semibold text-gray-900 sm:text-lg">
                {category.category}
              </dt>
              <dd className="mt-3">
                <ul className="flex flex-col gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-6 text-gray-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                {category.note && (
                  <p className="mt-3 text-xs leading-5 text-gray-500">{category.note}</p>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 max-w-3xl rounded-sm bg-slate-50 p-6">
          <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
            {FAMILY_INHERITANCE_DOCUMENTS_HEADING}
          </h3>
          <ul className="mt-3 flex flex-col gap-2">
            {FAMILY_INHERITANCE_DOCUMENTS_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-6 text-gray-600">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400"
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs leading-5 text-gray-500">
            {FAMILY_INHERITANCE_DOCUMENTS_NOTE}
          </p>
        </div>

        <p className="mt-8 max-w-3xl border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500">
          {FAMILY_DOCUMENTS_NOTE}
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-500">
          {FAMILY_DOCUMENTS_REGISTRATION_NOTE}
        </p>
      </div>
    </section>
  );
}
