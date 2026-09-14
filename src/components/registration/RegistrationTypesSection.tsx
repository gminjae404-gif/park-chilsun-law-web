export type RegistrationTypeItem = {
  title: string;
  description: string;
};

type RegistrationTypesSectionProps = {
  heading: string;
  description: string;
  items: RegistrationTypeItem[];
};

// registration-shared-pattern-audit에서 확인한 대로, RealEstateTypes.tsx와
// CorporateTypes.tsx의 JSX/className이 byte-identical했으므로 이 등기
// 그룹 전용 컴포넌트로 추출합니다. 순수 refactor이므로 DOM/className은
// 두 원본 컴포넌트와 정확히 동일하게 유지합니다(디자인 변경 없음).
// 업무별 데이터는 이 컴포넌트 안에서 import하지 않고 props로만 받습니다
// — 공통 UI 컴포넌트가 특정 업무 데이터에 의존하지 않도록 하기 위함입니다.
//
// "주요 O등기 유형" 목록을 카드 grid가 아닌, 개인회생 RecoveryKeyFactors/
// 개인파산 BankruptcyReviewFactors에서 검증된 좌우 2열 + border-t 공유 +
// 각 항목 border-b 구분선 목록으로 표시합니다. 정보성 목록으로만 보이도록
// hover lift/shadow, 아이콘, 배경 카드를 사용하지 않습니다.
export default function RegistrationTypesSection({
  heading,
  description,
  items,
}: RegistrationTypesSectionProps) {
  const leftItems = items.slice(0, 2);
  const rightItems = items.slice(2);

  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{heading}</h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {description}
        </p>
        <div className="mt-10 grid grid-cols-1 border-t border-gray-200 sm:grid-cols-2 sm:gap-x-12">
          <ul>
            {leftItems.map((item) => (
              <li key={item.title} className="border-b border-gray-200 py-6">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
          <ul>
            {rightItems.map((item) => (
              <li key={item.title} className="border-b border-gray-200 py-6">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
