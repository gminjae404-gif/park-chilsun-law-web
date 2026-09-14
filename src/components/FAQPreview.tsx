import Link from "next/link";
import type { FaqItem } from "@/lib/constants";

type FAQPreviewProps = {
  // 이 사이트의 모든 페이지는 각자의 확정된 FAQ 데이터를 items로 명시적으로
  // 전달합니다(공용 기본값을 두지 않습니다).
  items: FaqItem[];
  heading?: string;
  description?: string;
  id?: string;
  // 지정하지 않으면 items 전체를 표시합니다(업무 상세 페이지).
  // 지정하면 앞에서부터 그 개수만큼만 표시합니다(홈페이지 등).
  // 문항 자체의 질문·답변·순서는 이 컴포넌트에서 변경하지 않습니다.
  limit?: number;
  // 지정하면 목록 아래에 "전체보기" 링크를 추가로 표시합니다. 지정하지
  // 않으면 렌더링하지 않습니다.
  viewAllHref?: string;
  viewAllLabel?: string;
};

export default function FAQPreview({
  items,
  heading = "자주 묻는 질문",
  description,
  id,
  limit,
  viewAllHref,
  viewAllLabel = "자주 묻는 질문 전체보기",
}: FAQPreviewProps) {
  const visibleItems = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <section id={id} className="scroll-mt-20 border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {heading}
        </h2>
        {description && (
          <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
            {description}
          </p>
        )}
        <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
          {visibleItems.map((item) => (
            <details key={item.question} className="group py-4">
              <summary className="flex list-none cursor-pointer items-center justify-between gap-4 rounded-sm text-sm font-medium text-gray-800 transition-colors [&::-webkit-details-marker]:hidden hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:text-base">
                {item.question}
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 text-lg font-light text-brand transition-transform duration-150 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="mt-3 flex flex-col gap-3">
                {item.answer.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-6 text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </details>
          ))}
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
