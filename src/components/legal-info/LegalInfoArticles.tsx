import Link from "next/link";
import {
  LEGAL_INFO_ARTICLES,
  LEGAL_INFO_ARTICLES_DESCRIPTION,
  LEGAL_INFO_ARTICLES_HEADING,
} from "@/lib/legal-info";

// /legal-info 히어로 바로 다음에 배치하는 실제 법률정보 글 카드 목록입니다.
// 절제된 "안내자료" 톤을 유지하기 위해 이미지·아이콘·그라데이션 없이
// 카테고리 텍스트 + 제목 + 요약 + "자세히 보기" 링크만 담은 카드로
// 구성합니다. 카드가 1개뿐이어도 앞으로 늘어날 것을 감안해 grid로
// 배치합니다.
export default function LegalInfoArticles() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {LEGAL_INFO_ARTICLES_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {LEGAL_INFO_ARTICLES_DESCRIPTION}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {LEGAL_INFO_ARTICLES.map((article) => (
            <div key={article.href} className="rounded-sm border border-gray-200 bg-white p-6">
              <p className="text-xs font-medium text-gray-500">{article.category}</p>
              <h3 className="mt-2 text-base font-semibold text-gray-900 sm:text-lg">
                {article.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">{article.summary}</p>
              <Link
                href={article.href}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark"
              >
                자세히 보기
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
