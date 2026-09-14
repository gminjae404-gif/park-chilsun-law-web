"use client";

import { Suspense, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import SelfCheck from "@/components/self-check/SelfCheck";
import ConsultationCTA from "@/components/ConsultationCTA";
import Reveal from "@/components/Reveal";
import { isInquiryType, type InquiryType } from "@/types/consultation";

type HomeInteractiveSectionsProps = {
  // 자가진단(SelfCheck)과 상담 섹션(ConsultationCTA) 사이에 렌더링되는
  // FAQ 등 정적 섹션입니다. page.tsx(Server Component)에서 그대로 전달받아
  // 렌더링 순서만 유지하며, 이 컴포넌트의 state와는 무관합니다.
  children: ReactNode;
};

type QueryInquiryPrefillProps = {
  onDetected: (type: InquiryType) => void;
};

// 업무페이지 CTA(예: "/?inquiry=family#consultation")에서 전달된 문의
// 유형을 읽기만 하는 하위 컴포넌트입니다. useSearchParams()는 정적으로
// prerender되는 페이지에서 Suspense 경계 안에서만 사용할 수 있으므로,
// 이 값을 읽는 부분만 이 컴포넌트 하나로 분리해 그 제약을 가둡니다 —
// 부모 page.tsx나 형제 컴포넌트(SelfCheck, children, ConsultationCTA)는
// 이 경계와 무관하게 그대로 정적으로 렌더링됩니다. 화면에 아무것도
// 그리지 않습니다.
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

// 자가진단 결과 화면과 상담 신청 폼 사이의 "문의 유형" state만 관리하는
// 클라이언트 경계입니다. 이 state가 필요한 두 컴포넌트만 여기서 조합합니다.
//
// 자가진단의 세부 입력값(금액 등)이나 상담 신청 개인정보는 이 state에 담기지 않으며,
// localStorage/sessionStorage도 사용하지 않습니다.
//
// 업무페이지 CTA에서 전달된 문의 유형(URL의 inquiry 파라미터)도 이 state의
// 초기값으로만 반영합니다. 자가진단에서 "상담 신청하기"를 누르는 것은
// 사용자가 그 화면에서 방금 한 명시적 동작이므로, 이후에는 URL의 inquiry
// 값이 그 선택을 덮어쓰지 않도록 explicitPrefillRef로 표시해 둡니다.
export default function HomeInteractiveSections({ children }: HomeInteractiveSectionsProps) {
  const [prefillInquiryType, setPrefillInquiryType] = useState<InquiryType | null>(null);
  const explicitPrefillRef = useRef(false);

  const handleQueryInquiryDetected = useCallback((type: InquiryType) => {
    if (!explicitPrefillRef.current) {
      setPrefillInquiryType(type);
    }
  }, []);

  const handleRequestConsultation = useCallback(() => {
    explicitPrefillRef.current = true;
    setPrefillInquiryType("recovery");
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <QueryInquiryPrefill onDetected={handleQueryInquiryDetected} />
      </Suspense>
      {/* SelfCheck는 단계 전환 시 포커스를 이동시키는 로직이 있어, 등장
          애니메이션(Reveal)으로 감싸지 않습니다. */}
      <SelfCheck onRequestConsultation={handleRequestConsultation} />
      {children}
      <Reveal>
        <ConsultationCTA prefillInquiryType={prefillInquiryType} />
      </Reveal>
    </>
  );
}
