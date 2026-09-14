"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  HEADER_BRAND_NAME,
  HEADER_NAV_CATEGORIES,
  SITE_CONFIG,
  type HeaderNavCategory,
} from "@/lib/constants";

function navLinkClassName(isActive: boolean) {
  return `rounded-sm text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
    isActive ? "font-semibold text-brand" : "font-medium text-gray-700 hover:text-brand"
  }`;
}

function mobileNavLinkClassName(isActive: boolean) {
  return `block rounded-sm py-3 text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
    isActive ? "font-semibold text-brand" : "font-medium text-gray-700 hover:text-brand"
  }`;
}

// 경로 경계를 지켜서만 접두어를 비교합니다("/civil"이 "/civil-notice"처럼
// 실제로는 다른 경로를 오인식하지 않도록, 정확히 일치하거나 반드시"/"로
// 이어지는 하위 경로일 때만 true를 반환합니다).
function pathMatches(href: string, pathname: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

// 대분류 카테고리가 활성 상태인지 판정합니다. 하위 상세 페이지(예:
// /family/inheritance)를 방문 중이어도 상위 대분류(가사·상속)가 active로
// 표시되어야 하므로 카테고리 자신의 href뿐 아니라 items의 각 href도 함께
// 확인합니다.
function isCategoryActive(category: HeaderNavCategory, pathname: string): boolean {
  if (category.href && pathMatches(category.href, pathname)) return true;
  return category.items?.some((item) => pathMatches(item.href, pathname)) ?? false;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();

  // 데스크톱 대분류 dropdown(민사·집행/가사·상속): 바깥 클릭 또는 Esc로
  // 닫습니다. 한 번에 하나만 열리므로(openCategoryId 하나로 전체 제어)
  // nav 전체를 감싸는 ref 하나로 바깥 클릭을 판정하는 것으로 충분합니다.
  useEffect(() => {
    if (!openCategoryId) return;
    function handleClick(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenCategoryId(null);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenCategoryId(null);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openCategoryId]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      {/* 이 사이트가 아직 실제로 상담을 접수하는 운영 사이트가 아니라
          검토용 샘플 화면임을 과도하게 눈에 띄지 않는 선에서 항상 보이도록
          안내합니다. */}
      {SITE_CONFIG.isPreviewSite && (
        <p className="border-b border-gray-200 bg-slate-100 px-4 py-1.5 text-center text-xs text-gray-500 sm:px-6 lg:px-8">
          본 사이트는 검토용 샘플 페이지입니다. 상담 신청 내용은 아직 실제로 접수되지 않습니다.
        </p>
      )}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="rounded-sm text-lg font-bold tracking-tight text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          {HEADER_BRAND_NAME}
        </Link>

        {/* 데스크톱 메뉴: 부동산등기/법인등기/민사·집행/가사·상속/상담신청
            5개가 한 줄에 들어오므로 md(768px)부터 전환합니다. */}
        <nav aria-label="주 메뉴" className="hidden md:block">
          <ul ref={navRef} className="flex items-center gap-4 lg:gap-6">
            {HEADER_NAV_CATEGORIES.map((category) => {
              const active = isCategoryActive(category, pathname);

              if (category.items) {
                const isOpen = openCategoryId === category.id;
                return (
                  <li key={category.id} className="relative">
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      aria-controls={`nav-dropdown-${category.id}`}
                      onClick={() =>
                        setOpenCategoryId((prev) => (prev === category.id ? null : category.id))
                      }
                      className={`flex items-center gap-1 ${navLinkClassName(active)}`}
                    >
                      {category.label}
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    {isOpen && (
                      <ul
                        id={`nav-dropdown-${category.id}`}
                        role="menu"
                        className="absolute left-0 top-full z-50 mt-2 w-52 rounded-xl border border-gray-100 bg-white p-2 shadow-lg shadow-gray-900/5"
                      >
                        {category.items.map((item) => (
                          <li key={item.href} role="none">
                            <Link
                              role="menuitem"
                              href={item.href}
                              aria-current={pathMatches(item.href, pathname) ? "page" : undefined}
                              onClick={() => setOpenCategoryId(null)}
                              className="block rounded-lg px-3 py-2.5 text-sm text-gray-700 transition-colors hover:bg-slate-50 hover:text-brand focus:outline-none focus-visible:bg-slate-50 focus-visible:text-brand"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={category.id}>
                  <Link
                    href={category.href ?? "#"}
                    aria-current={active ? "page" : undefined}
                    className={navLinkClassName(active)}
                  >
                    {category.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/#consultation" className={navLinkClassName(false)}>
                상담신청
              </Link>
            </li>
          </ul>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 md:hidden"
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 모바일 메뉴 패널 */}
      {isMenuOpen && (
        <nav id="mobile-menu" aria-label="모바일 메뉴" className="border-t border-gray-200 bg-white md:hidden">
          <ul className="flex flex-col px-4 py-2 sm:px-6">
            {HEADER_NAV_CATEGORIES.map((category) => {
              const active = isCategoryActive(category, pathname);

              if (category.items) {
                return (
                  <li key={category.id} className="border-b border-gray-100">
                    <details className="group">
                      <summary
                        className={`flex cursor-pointer list-none items-center justify-between rounded-sm py-3 text-base [&::-webkit-details-marker]:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                          active ? "font-semibold text-brand" : "font-medium text-gray-700"
                        }`}
                      >
                        {category.label}
                        <span
                          aria-hidden="true"
                          className="text-lg font-light text-brand transition-transform duration-150 group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <ul className="flex flex-col gap-1 pb-3 pl-4">
                        {category.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setIsMenuOpen(false)}
                              aria-current={pathMatches(item.href, pathname) ? "page" : undefined}
                              className="block rounded-sm py-2 text-sm text-gray-600 transition-colors hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                );
              }

              return (
                <li key={category.id} className="border-b border-gray-100">
                  <Link
                    href={category.href ?? "#"}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={mobileNavLinkClassName(active)}
                  >
                    {category.label}
                  </Link>
                </li>
              );
            })}
            <li className="border-b border-gray-100 last:border-b-0">
              <Link
                href="/#consultation"
                onClick={() => setIsMenuOpen(false)}
                className={mobileNavLinkClassName(false)}
              >
                상담신청
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
