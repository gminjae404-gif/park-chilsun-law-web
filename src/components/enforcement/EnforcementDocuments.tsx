import {
  ENFORCEMENT_DOCUMENT_CATEGORIES,
  ENFORCEMENT_DOCUMENTS_DESCRIPTION,
  ENFORCEMENT_DOCUMENTS_HEADING,
  ENFORCEMENT_DOCUMENTS_NOTE,
} from "@/lib/enforcement";

// 이 섹션은 checklist 성격의 "중요 확인 정보"이므로 CivilDocuments와
// 동일하게 카드(패널) 사용을 유지합니다. 등기 그룹 전용인
// RegistrationDocumentsSection은 재사용하지 않고 강제집행 전용 데이터
// 구조(category + items 목록 + 선택적 note)에 맞춰 이 컴포넌트에서
// 독립적으로 구현합니다(UI 패턴만 참고). 카드는 hover lift/shadow 없이
// 정적으로 표시합니다.
export default function EnforcementDocuments() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {ENFORCEMENT_DOCUMENTS_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {ENFORCEMENT_DOCUMENTS_DESCRIPTION}
        </p>

        <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ENFORCEMENT_DOCUMENT_CATEGORIES.map((category) => (
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

        <p className="mt-8 max-w-3xl border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500">
          {ENFORCEMENT_DOCUMENTS_NOTE}
        </p>
      </div>
    </section>
  );
}
