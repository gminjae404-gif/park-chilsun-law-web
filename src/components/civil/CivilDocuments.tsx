import {
  CIVIL_DOCUMENT_CATEGORIES,
  CIVIL_DOCUMENTS_DESCRIPTION,
  CIVIL_DOCUMENTS_HEADING,
  CIVIL_DOCUMENTS_NOTE,
} from "@/lib/civil";

// 이 섹션은 checklist 성격의 "중요 확인 정보"이므로 카드(패널) 사용을
// 유지합니다. 등기 그룹 전용인 RegistrationDocumentsSection은
// civil-page-design-audit에서 재사용하지 않기로 확정했으므로 import하지
// 않고 민사 전용 데이터 구조(category + items 목록)에 맞춰 이
// 컴포넌트에서 독립적으로 구현합니다(UI 패턴만 참고). 카드는 hover
// lift/shadow 없이 정적으로 표시하고, rounded는 rounded-sm 정도로만 두어
// 페이지에서 유일하게 카드가 있는 시각적 anchor 역할을 하게 합니다.
//
// document-card-border-audit Batch 1에서, 임대차 LeaseDocuments와
// 동일한 방향으로 4면 border(border border-gray-200)를 제거합니다.
// bg-white section 위 bg-slate-50 배경만으로 카드 영역이 구분되며,
// rounded-sm·padding·내용·구조는 그대로 유지했습니다.
export default function CivilDocuments() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {CIVIL_DOCUMENTS_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {CIVIL_DOCUMENTS_DESCRIPTION}
        </p>

        <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CIVIL_DOCUMENT_CATEGORIES.map((category) => (
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
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 max-w-3xl border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500">
          {CIVIL_DOCUMENTS_NOTE}
        </p>
      </div>
    </section>
  );
}
