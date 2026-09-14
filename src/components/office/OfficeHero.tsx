import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

// 홈 Hero입니다. 데스크톱(lg+)에서는 이미지가 섹션 전체를 채우는 배경으로
// 깔리고, 텍스트 쪽(왼쪽)에는 slate 톤 그라디언트를 겹쳐 이미지가 텍스트를
// 방해하지 않으면서도 카드처럼 분리되어 보이지 않게 합니다. 모바일에서는
// 배경 합성 대신 텍스트 아래 별도 배너 이미지로 표시합니다.
export default function OfficeHero() {
  const phone = SITE_CONFIG.representativePhone;

  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative z-10 lg:max-w-2xl">
          <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight">
            법무사 박칠선 사무소
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            부동산등기를 중심으로 필요한 법무 절차를 안내합니다.
          </p>
          <p className="mt-2 max-w-xl text-sm text-gray-500 sm:text-base">
            충청북도 단양군 소재
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/registration/real-estate"
              className="inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-brand-dark"
            >
              부동산등기 안내
            </Link>
            {phone && (
              <a
                href={`tel:${phone.replace(/-/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-slate-50"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h2.28a1 1 0 01.97.757l1.05 4.2a1 1 0 01-.5 1.11l-1.7.85a12.06 12.06 0 006.06 6.06l.85-1.7a1 1 0 011.11-.5l4.2 1.05a1 1 0 01.757.97V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"
                  />
                </svg>
                {phone}
              </a>
            )}
          </div>
        </div>

        <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-sm lg:absolute lg:inset-0 lg:z-0 lg:mt-0 lg:aspect-auto lg:rounded-none">
          <Image
            src="/images/office-hero.jpg"
            alt="법무사 박칠선 사무소 대표 이미지"
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-gradient-to-r from-slate-50 via-slate-50/60 to-transparent lg:block"
          />
        </div>
      </div>
    </section>
  );
}
