import Link from "next/link";

export type RegistrationTypeItem = {
  title: string;
  description: string;
};

type RegistrationTypesSectionProps = {
  heading: string;
  description: string;
  items: RegistrationTypeItem[];
  // 홈에서 이 섹션을 업무 강조용으로 재사용할 때, 목록 아래에 해당 업무의
  // 상세 페이지로 이동하는 링크를 추가로 표시하기 위한 선택적 props입니다.
  // 지정하지 않으면 기존 등기 상세 페이지(부동산등기/법인등기)와 동일하게
  // 링크 없이 렌더링됩니다(디자인 변경 없음).
  viewAllHref?: string;
  viewAllLabel?: string;
};

// registration-shared-pattern-audit에서 확인한 대로, RealEstateTypes.tsx와
// CorporateTypes.tsx의 JSX/className이 byte-identical했으므로 이 등기
// 그룹 전용 컴포넌트로 추출합니다. 순수 refactor이므로 DOM/className은
// 두 원본 컴포넌트와 정확히 동일하게 유지합니다(디자인 변경 없음).
// 업무별 데이터는 이 컴포넌트 안에서 import하지 않고 props로만 받습니다
// — 공통 UI 컴포넌트가 특정 업무 데이터에 의존하지 않도록 하기 위함입니다.
//
// "주요 O등기 유형" 목록을 카드 grid가 아닌 좌우 2열 + border-t 공유 +
// 각 항목 border-b 구분선 목록으로 표시합니다. 정보성 목록으로만 보이도록
// hover lift/shadow, 아이콘, 배경 카드를 사용하지 않습니다.
export default function RegistrationTypesSection({
  heading,
  description,
  items,
  viewAllHref,
  viewAllLabel = "자세히 보기",
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
        {viewAllHref && (
          <div className="mt-8">
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-brand transition-colors hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark"
            >
              {viewAllLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
