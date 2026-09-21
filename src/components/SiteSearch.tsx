"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { searchSite } from "@/lib/site-search";

const RESULT_LIMIT = 8;

// 메인 통합검색 UI입니다. state·keyboard 상호작용이 필요해 이 컴포넌트만
// Client Component로 만들고, 홈페이지/Hero는 그대로 Server Component로
// 유지합니다(hydration 범위 최소화). 검색은 client-side local 검색이며
// 입력할 때마다 외부로 아무 것도 전송하지 않고, 검색어를 저장하지도
// 않습니다.
//
// 접근성: 커스텀 ARIA combobox 위젯을 만드는 대신 표준 HTML만
// 사용합니다 — 결과는 평범한 목록(ul/li) 안의 실제 링크(a)이고,
// 화살표 키는 input과 각 결과 링크 사이의 실제 DOM focus를
// 이동시킵니다(roving focus). Enter/클릭은 브라우저의 기본 링크 동작
// 그대로 동작합니다.
export default function SiteSearch() {
  const [query, setQuery] = useState("");
  const [closed, setClosed] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const results = useMemo(() => searchSite(query, RESULT_LIMIT), [query]);
  const isOpen = !closed && query.trim() !== "";

  useEffect(() => {
    if (!isOpen) return;
    function handlePointerDown(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setClosed(true);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isOpen]);

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setClosed(true);
      return;
    }
    if (event.key === "ArrowDown" && isOpen && results.length > 0) {
      event.preventDefault();
      resultRefs.current[0]?.focus();
    }
  }

  function handleResultKeyDown(event: KeyboardEvent<HTMLAnchorElement>, index: number) {
    if (event.key === "Escape") {
      setClosed(true);
      inputRef.current?.focus();
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      resultRefs.current[index + 1]?.focus();
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (index === 0) {
        inputRef.current?.focus();
      } else {
        resultRefs.current[index - 1]?.focus();
      }
    }
  }

  function handleSelect() {
    setClosed(true);
    setQuery("");
  }

  return (
    <div ref={wrapperRef} className="relative scroll-mt-20">
      <label htmlFor="site-search-input" className="sr-only">
        사이트 통합검색
      </label>
      <div className="relative">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
        </svg>
        <input
          id="site-search-input"
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setClosed(false);
          }}
          onFocus={() => setClosed(false)}
          onKeyDown={handleInputKeyDown}
          placeholder="원하는 업무나 법률정보를 검색해 보세요"
          autoComplete="off"
          className="w-full rounded-sm border border-gray-300 bg-white py-3 pl-11 pr-10 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand sm:text-base [&::-webkit-search-cancel-button]:appearance-none"
        />
        {query && (
          <button
            type="button"
            aria-label="검색어 지우기"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-sm text-gray-400 transition-colors hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        )}
      </div>
      <p className="mt-2 text-xs text-gray-500 sm:text-sm">
        예: 상속등기 · 지급명령 · 근저당 말소 · 자동차 압류 · 개명
      </p>

      {isOpen && (
        <div
          id="site-search-results"
          className="absolute left-0 right-0 z-20 mt-2 max-h-[70vh] overflow-y-auto rounded-xl border border-gray-100 bg-white shadow-lg shadow-gray-900/5"
        >
          {results.length === 0 ? (
            <div className="px-4 py-6">
              <p className="text-sm text-gray-600 sm:text-base">
                검색 결과가 없습니다. 다른 검색어를 입력해 보세요.
              </p>
              <p className="mt-1 text-xs text-gray-400">
                업무명이나 법률용어 일부만 입력해도 검색할 수 있습니다.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100 py-1">
              {results.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    ref={(el) => {
                      resultRefs.current[index] = el;
                    }}
                    onClick={handleSelect}
                    onKeyDown={(event) => handleResultKeyDown(event, index)}
                    className="flex flex-col gap-1 px-4 py-3 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:bg-slate-50"
                  >
                    <span className="flex items-center gap-2">
                      <span className="inline-flex shrink-0 items-center rounded-sm border border-gray-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-gray-600">
                        {item.type === "service" ? "업무" : "법률정보"}
                      </span>
                      <span className="line-clamp-2 text-sm font-semibold text-gray-900 sm:text-base">
                        {item.title}
                      </span>
                    </span>
                    <span className="line-clamp-2 text-xs leading-5 text-gray-500 sm:text-sm">
                      {item.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
