"use client";

// window.print()만 호출하는 최소 client 경계입니다. 새 라이브러리를
// 추가하지 않고 브라우저 기본 인쇄 기능만 사용합니다(/family/inheritance,
// /family/name-change의 인쇄 버튼과 동일한 패턴). 이 버튼을 포함하는
// GuardianshipDocuments는 그대로 서버 컴포넌트로 남겨두기 위해 "use
// client"가 필요한 부분만 이 파일 하나로 분리했습니다. 버튼 자체는
// 인쇄 결과물에 포함될 필요가 없으므로 print:hidden을 둡니다.
export default function GuardianshipPrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-brand-dark active:text-white print:hidden"
    >
      준비자료 인쇄하기
    </button>
  );
}
