export type RegistrationDocumentCategory = {
  category: string;
  items: string[];
};

type RegistrationDocumentsSectionProps = {
  heading: string;
  description: string;
  categories: RegistrationDocumentCategory[];
  note: string;
};

// registration-shared-pattern-audit에서 확인한 대로, RealEstateDocuments.tsx와
// CorporateDocuments.tsx의 JSX/className/데이터 shape가 byte-identical했으므로
// 이 등기 그룹 전용 컴포넌트로 추출합니다. 순수 refactor이므로 DOM/className은
// 두 원본 컴포넌트와 정확히 동일하게 유지합니다(디자인 변경 없음).
//
// 개인회생 RequiredDocuments.tsx는 데이터 모양이 다르므로({category, note}
// vs 이 컴포넌트의 {category, items[]}) 이번 공통화 대상이 아니며 건드리지
// 않았습니다.
//
// checklist 성격의 "중요 확인 정보"이므로 카드(패널) 사용을 유지합니다.
// 카드는 hover lift/shadow 없이 정적으로 표시하고(BankruptcyDischargeReview·
// RequiredDocuments에서 이미 검증된 "카드는 유지, hover만 제거" 처리),
// rounded는 rounded-sm 정도로만 두어 페이지에서 유일하게 카드가 있는
// 시각적 anchor 역할을 하게 합니다.
export default function RegistrationDocumentsSection({
  heading,
  description,
  categories,
  note,
}: RegistrationDocumentsSectionProps) {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{heading}</h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {description}
        </p>

        <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map((category) => (
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
          {note}
        </p>
      </div>
    </section>
  );
}
