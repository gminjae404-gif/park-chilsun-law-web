import Link from "next/link";

// 이 페이지에는 자가진단·상담신청 기능이 직접 있지 않으므로,
// 메인 페이지의 해당 섹션(#self-check, #consultation)으로 연결합니다.
// 상담 신청을 primary CTA로 유지하고, 자가진단은 버튼이 아닌 보조 텍스트
// 링크로 낮춰 개인파산 페이지 CTA와 시각적 위계를 통일합니다. 문구 자체는
// 변경하지 않습니다.
export default function RecoveryCTA() {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          자가진단 또는 상담 신청으로 다음 단계를 확인해 보세요.
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/?inquiry=recovery#consultation"
            className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand active:bg-slate-100"
          >
            상담 신청하기
          </Link>
          <Link
            href="/#self-check"
            className="inline-flex items-center justify-center rounded-sm text-sm font-medium text-white/80 underline underline-offset-4 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand active:text-white"
          >
            자가진단 시작하기
          </Link>
        </div>
      </div>
    </section>
  );
}
