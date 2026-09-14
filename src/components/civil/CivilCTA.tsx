import Link from "next/link";
import { CIVIL_CTA } from "@/lib/civil";

// "제목+설명+상담신청 버튼 1개, bg-brand" 패턴입니다. 등기 그룹 전용인
// RegistrationCTA는 civil-page-design-audit에서 재사용하지 않기로
// 확정했으므로 import하지 않고 이 페이지 전용으로 독립 구현합니다.
export default function CivilCTA() {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {CIVIL_CTA.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-200 sm:text-base">
          {CIVIL_CTA.description}
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/?inquiry=civil-enforcement#consultation"
            className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand active:bg-slate-100"
          >
            {CIVIL_CTA.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
