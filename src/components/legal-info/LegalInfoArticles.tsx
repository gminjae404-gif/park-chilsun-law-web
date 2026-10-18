"use client";

import Link from "next/link";
import { useState } from "react";
import type { LegalInfoArticleSummary } from "@/lib/legal-info";

const categories = ["전체", "민사·집행", "가사·상속", "부동산등기", "법인등기"];
const normalize = (value: string) => value.normalize("NFKC").toLowerCase().replace(/\s+/g, "");
const aliases: Record<string, string> = {
  "/legal-info/payment-order-procedure": "돈받기 미수금 공사대금 대여금",
  "/legal-info/claim-seizure-collection-order": "통장압류 계좌압류 급여압류",
  "/legal-info/inheritance-renunciation-limited-acceptance": "부모빚 상속빚 빚상속",
  "/legal-info/mortgage-cancellation-registration": "근저당말소 대출말소",
};

export default function LegalInfoArticles({ articles }: { articles: LegalInfoArticleSummary[] }) {
  const [category, setCategory] = useState("전체");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const tokens = query.normalize("NFKC").trim().split(/\s+/).filter(Boolean).map(normalize);
  const filtered = articles.filter((article) => {
    const haystack = normalize(`${article.title} ${article.summary} ${article.category} ${aliases[article.href] ?? ""}`);
    return (category === "전체" || article.category.startsWith(category)) && tokens.every((token) => haystack.includes(token));
  });
  const visible = filtered.slice(0, visibleCount);
  const reset = () => { setQuery(""); setCategory("전체"); setVisibleCount(8); };

  return (
    <section aria-labelledby="legal-library-heading" className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-[#21685f]">주제별 안내 · {articles.length}편</p>
            <h2 id="legal-library-heading" className="mt-2 text-2xl font-bold text-brand sm:text-3xl">어떤 정보가 필요하신가요?</h2>
          </div>
        </div>

        <div role="search" aria-label="법률정보 글 검색" className="mt-6">
          <label htmlFor="legal-library-query" className="block text-sm font-medium text-gray-700">궁금한 주제 검색</label>
          <div className="mt-2 flex gap-2">
            <input id="legal-library-query" type="search" value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(8); }} placeholder="예: 상속, 지급명령, 통장압류" className="min-h-12 min-w-0 flex-1 rounded-lg border border-gray-300 bg-white px-4 text-base text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#21685f]" />
            {query ? <button type="button" onClick={() => { setQuery(""); setVisibleCount(8); }} className="min-h-12 shrink-0 rounded-lg px-3 text-sm text-brand underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">검색 지우기</button> : null}
          </div>
        </div>

        <div role="group" aria-label="법률정보 분야 선택" className="mt-5 flex flex-wrap gap-2">
          {categories.map((item) => {
            const count = item === "전체" ? articles.length : articles.filter((article) => article.category.startsWith(item)).length;
            return <button key={item} type="button" aria-pressed={category === item} onClick={() => { setCategory(item); setVisibleCount(8); }} className={`min-h-11 rounded-full border px-4 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#21685f] ${category === item ? "border-brand bg-brand text-white" : "border-gray-300 bg-white text-gray-700 hover:border-[#21685f] hover:text-[#21685f]"}`}>{item} <span className={category === item ? "text-white" : "text-gray-500"}>{count}</span></button>;
          })}
        </div>

        <p role="status" aria-live="polite" aria-atomic="true" className="mt-5 text-sm text-gray-600">{filtered.length}편 중 {visible.length}편 표시</p>
        {filtered.length ? (
          <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
            {visible.map((article) => <li key={article.href} className="border-t border-gray-200">
              <Link href={article.href} className="group block rounded-sm py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#21685f]">
                <p className="text-xs font-medium text-[#21685f]">{article.category}</p>
                <h3 className="mt-2 text-base font-semibold leading-7 text-brand group-hover:underline group-hover:underline-offset-4 sm:text-lg">{article.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{article.summary}</p>
                <span className="mt-3 inline-block text-sm font-medium text-[#21685f]">내용 보기 <span aria-hidden="true">→</span></span>
              </Link>
            </li>)}
          </ul>
        ) : <div className="mt-4 rounded-lg bg-slate-50 p-6"><p className="text-sm leading-6 text-gray-700">검색 결과가 없습니다. 짧은 단어로 검색하거나 다른 분야를 선택해 주세요.</p><button type="button" onClick={reset} className="mt-3 min-h-11 rounded-sm text-sm font-medium text-brand underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">전체 글 다시 보기</button></div>}

        {visibleCount < filtered.length ? <button type="button" onClick={() => setVisibleCount((count) => count + 8)} className="mt-6 min-h-12 w-full rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-brand hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">글 더 보기 · {filtered.length - visible.length}편 남음</button> : null}
      </div>
    </section>
  );
}
