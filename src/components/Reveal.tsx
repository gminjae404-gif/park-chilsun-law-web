"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

type RevealState = "idle" | "hidden" | "visible";

// 스크롤 시 섹션이 살짝 fade + translateY 되며 나타나는 절제된 등장 효과입니다.
// - Server Component로 렌더링되는 각 섹션을 그대로 children으로 감싸기만 하므로,
//   기존 섹션 컴포넌트를 Client Component로 바꿀 필요가 없습니다.
//
// Progressive enhancement:
// - 서버 렌더링과 클라이언트 최초 렌더는 모두 state="idle"이며, 이때는
//   `.reveal` 클래스를 전혀 붙이지 않습니다. 즉 JavaScript가 실행되지
//   않거나(비활성화·차단·에러) 아직 실행되기 전이어도, 그리고 hydration이
//   실패하더라도 CSS상 숨김 스타일이 처음부터 적용되지 않으므로 콘텐츠는
//   항상 기본적으로 보이는 상태로 남습니다.
// - useEffect가 정상 실행되고 IntersectionObserver를 지원하는 경우에만
//   관찰을 시작합니다. 실제 state 전환은 전부 IntersectionObserver의
//   콜백(비동기) 안에서만 일어납니다: 요소가 이미 화면에 보이는 상태라면
//   곧바로 "visible"로, 아직 화면 밖이라면 "hidden"으로 전환합니다
//   ("hidden"이 되는 순간부터 .reveal 클래스가 붙어 opacity:0이 적용됨).
//   이렇게 하면 이미 화면에 보이는 섹션이 잠깐 사라졌다가 다시 나타나는
//   깜빡임 없이 그대로 유지됩니다.
// - IntersectionObserver를 지원하지 않는 환경에서는 관찰 자체를 시작하지
//   않으므로 state가 계속 "idle"로 남아 콘텐츠가 항상 표시됩니다.
// - 실제 숨김/등장 스타일(.reveal, .reveal.is-visible)은 globals.css에서
//   `@media (prefers-reduced-motion: no-preference)` 안에서만 정의되어 있어,
//   모션 축소를 선호하는 사용자에게는 state가 "hidden"이 되어도 항상 즉시
//   보입니다(숨김 스타일 자체가 적용되지 않음).
// - setState 호출이 전부 IntersectionObserver의 비동기 콜백 안에서만
//   이루어지고 effect 본문에서 동기적으로 호출되지 않으므로, 별도 우회
//   없이도 react-hooks/set-state-in-effect 규칙과 자연스럽게 맞습니다.
export default function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("visible");
            observer.disconnect();
          } else {
            setState((prev) => (prev === "idle" ? "hidden" : prev));
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [state !== "idle" ? "reveal" : "", state === "visible" ? "is-visible" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes || undefined}>
      {children}
    </div>
  );
}
