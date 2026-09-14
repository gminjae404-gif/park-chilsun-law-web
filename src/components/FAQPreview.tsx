import Link from "next/link";
import { FAQ_ITEMS, type FaqItem } from "@/lib/constants";

type FAQPreviewProps = {
  // 아래는 모두 다른 페이지(예: 개인파산)에서 이 컴포넌트를 재사용하기 위한
  // 선택적 props입니다. 아무것도 전달하지 않으면 기존과 동일하게 FAQ_ITEMS +
  // "자주 묻는 질문" + 설명 없음 + id 없음 + 전체보기 링크 없음으로 렌더링됩니다.
  items?: FaqItem[];
  heading?: string;
  description?: string;
  id?: string;
  // 지정하지 않으면 items(또는 FAQ_ITEMS) 전체를 표시합니다(개인회생 상세 페이지).
  // 지정하면 앞에서부터 그 개수만큼만 표시합니다(홈페이지).
  // 문항 자체의 질문·답변·순서는 이 컴포넌트에서 변경하지 않습니다.
  limit?: number;
  // 지정하면 목록 아래에 "전체보기" 링크를 추가로 표시합니다(홈페이지에서
  // 개인회생 상세 페이지의 FAQ 전체 목록으로 안내할 때 사용). 지정하지
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
  const source = items ?? FAQ_ITEMS;
  const visibleItems = typeof limit === "number" ? source.slice(0, limit) : source;

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
