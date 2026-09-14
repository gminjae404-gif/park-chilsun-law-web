"use client";

import { Suspense, useCallback, useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import ConsultationCTA from "@/components/ConsultationCTA";
import Reveal from "@/components/Reveal";
import { isInquiryType, type InquiryType } from "@/types/consultation";

type HomeInteractiveSectionsProps = {
  // 상담 섹션(ConsultationCTA) 앞에 렌더링되는 FAQ 등 정적 섹션입니다.
  // page.tsx(Server Component)에서 그대로 전달받아 렌더링 순서만
  // 유지하며, 이 컴포넌트의 state와는 무관합니다.
  children: ReactNode;
};

type QueryInquiryPrefillProps = {
  onDetected: (type: InquiryType) => void;
};

// 업무페이지 CTA(예: "/?inquiry=family#consultation")에서 전달된 문의
// 유형을 읽기만 하는 하위 컴포넌트입니다. useSearchParams()는 정적으로
// prerender되는 페이지에서 Suspense 경계 안에서만 사용할 수 있으므로,
// 이 값을 읽는 부분만 이 컴포넌트 하나로 분리해 그 제약을 가둡니다 —
// 부모 page.tsx나 형제 컴포넌트(children, ConsultationCTA)는 이 경계와
// 무관하게 그대로 정적으로 렌더링됩니다. 화면에 아무것도 그리지 않습니다.
function QueryInquiryPrefill({ onDetected }: QueryInquiryPrefillProps) {
  const searchParams = useSearchParams();
  const raw = searchParams.get("inquiry");

  useEffect(() => {
    if (isInquiryType(raw)) {
      onDetected(raw);
    }
    // raw 값이 실제로 바뀔 때만 다시 확인하면 충분하므로 onDetected는
    // 의존성에서 제외합니다(부모에서 useCallback으로 안정된 참조를 넘김).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [raw]);

  return null;
}

// 업무페이지 CTA에서 전달된 문의 유형(URL의 inquiry 파라미터)을 상담
// 신청 폼의 초기값으로 반영하는 state만 관리하는 클라이언트 경계입니다.
// 상담 신청 개인정보는 이 state에 담기지 않으며, localStorage/
// sessionStorage도 사용하지 않습니다.
export default function HomeInteractiveSections({ children }: HomeInteractiveSectionsProps) {
  const [prefillInquiryType, setPrefillInquiryType] = useState<InquiryType | null>(null);

  const handleQueryInquiryDetected = useCallback((type: InquiryType) => {
    setPrefillInquiryType(type);
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <QueryInquiryPrefill onDetected={handleQueryInquiryDetected} />
      </Suspense>
      {children}
      <Reveal>
        <ConsultationCTA prefillInquiryType={prefillInquiryType} />
      </Reveal>
    </>
  );
}
