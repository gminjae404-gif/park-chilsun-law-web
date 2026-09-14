import Link from "next/link";
import { BANKRUPTCY_CTA_LABELS } from "@/lib/constants";

// 이 페이지에는 자가진단·상담신청 기능이 직접 있지 않으므로,
// 메인 페이지의 해당 섹션(#self-check, #consultation)으로 연결합니다.
// 상담 안내를 primary CTA로 유지하고, 개인파산 전용 자가진단이 없는 상태에서
// 개인회생 자가진단(BANKRUPTCY_CTA_LABELS.selfCheck)이 주된 행동처럼 보이지
// 않도록 버튼이 아닌 보조 텍스트 링크로 낮춰서 표시합니다.
export default function BankruptcyCTA() {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          현재 상황을 정리한 뒤 상담을 통해 필요한 절차를 확인해 보세요.
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/?inquiry=bankruptcy#consultation"
            className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand active:bg-slate-100"
          >
            {BANKRUPTCY_CTA_LABELS.consultation}
          </Link>
          <Link
            href="/#self-check"
            className="inline-flex items-center justify-center rounded-sm text-sm font-medium text-white/80 underline underline-offset-4 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand active:text-white"
          >
            {BANKRUPTCY_CTA_LABELS.selfCheck}
          </Link>
        </div>
      </div>
    </section>
  );
}
