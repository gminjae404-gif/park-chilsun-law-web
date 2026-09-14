import Image from "next/image";
import Link from "next/link";
import { CORPORATE_HERO } from "@/lib/corporate-registration";

export default function CorporateHero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight">
            {CORPORATE_HERO.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {CORPORATE_HERO.lead}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">{CORPORATE_HERO.note}</p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/?inquiry=corporate-registration#consultation"
              className="inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-brand-dark"
            >
              상담 신청
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-sm text-sm font-medium text-gray-600 underline underline-offset-4 transition-colors hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark"
            >
              전체 업무분야
            </Link>
          </div>
        </div>

        <div className="relative mt-10 aspect-[3/2] w-full overflow-hidden rounded-sm lg:absolute lg:inset-0 lg:z-0 lg:mt-0 lg:aspect-auto lg:rounded-none">
          <Image
            src="/images/corporate-hero.png"
            alt="정돈된 서류와 노트, 펜이 놓인 사무 공간"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_bottom]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent lg:block"
          />
        </div>
      </div>
    </section>
  );
}
