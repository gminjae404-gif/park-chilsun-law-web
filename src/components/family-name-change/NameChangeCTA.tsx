import Link from "next/link";
import { NAME_CHANGE_CTA } from "@/lib/family-name-change";

// /family/inheritance·/family/guardianship의 CTA와 동일한 "제목+설명+
// 상담신청 버튼 1개, bg-brand" 패턴을 이 페이지 전용으로 독립
// 구현합니다. 새로운 전화번호·주소·비용·영업시간은 만들지 않았습니다.
export default function NameChangeCTA() {
  return (
    <section className="bg-brand print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl break-keep">
          {NAME_CHANGE_CTA.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base">
          {NAME_CHANGE_CTA.description}
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/?inquiry=family#consultation"
            className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand active:bg-slate-100"
          >
            {NAME_CHANGE_CTA.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
