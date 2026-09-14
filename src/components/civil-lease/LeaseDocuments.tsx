import {
  LEASE_DOCUMENT_CATEGORIES,
  LEASE_DOCUMENTS_DESCRIPTION,
  LEASE_DOCUMENTS_HEADING,
  LEASE_DOCUMENTS_NOTE,
} from "@/lib/civil-lease";

// CivilDocuments/EnforcementDocuments와 동일한 checklist 카드(패널)
// 패턴입니다. 6개 카테고리를 2열 grid로 배치하며, 모든 사건에 전부
// 필요한 것처럼 보이지 않도록 note에서 사건별로 다를 수 있음을
// 안내합니다.
//
// box-density-audit 5차(카드형 외곽 테두리 정리, 이 페이지 한정)에서
// 각 카드의 4면 중립 border(border border-gray-200)를 제거합니다.
// "배경이 서로 다르면 외곽 테두리가 없어도 구분된다"는 피드백에 따라
// bg-white section 위 bg-slate-50 배경과 grid 간격만으로 6개 자료
// 묶음을 구분합니다. rounded-sm·padding·제목/내용/구조는 그대로
// 유지했고, shadow는 추가하지 않았습니다. 다른 페이지의 CivilDocuments/
// EnforcementDocuments/RegistrationDocumentsSection 등은 이번 작업
// 대상이 아니므로 그대로 border를 유지합니다(이 파일에 격리된 변경).
export default function LeaseDocuments() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {LEASE_DOCUMENTS_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {LEASE_DOCUMENTS_DESCRIPTION}
        </p>

        <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {LEASE_DOCUMENT_CATEGORIES.map((category) => (
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
          {LEASE_DOCUMENTS_NOTE}
        </p>
      </div>
    </section>
  );
}
