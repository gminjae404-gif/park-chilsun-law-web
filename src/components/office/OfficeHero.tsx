import Image from "next/image";
import Link from "next/link";

// full 모드(법무사사무소 종합 홈페이지) 전용 Hero입니다. recovery 모드의
// 기존 Hero.tsx는 건드리지 않습니다.
//
// 이전 두 버전(전체 배경 확대 → 2단 grid 카드형 이미지)을 거쳐, 이번에는
// recovery 홈 Hero.tsx와 동일한 "은은한 배경 이미지 + 차분한 텍스트" 톤으로
// 다시 정리합니다. 데스크톱(lg+)에서는 이미지가 섹션 전체를 채우는 배경으로
// 깔리고, 텍스트 쪽(왼쪽)에는 slate 톤 그라디언트를 겹쳐 이미지가 텍스트를
// 방해하지 않으면서도 카드처럼 분리되어 보이지 않게 합니다. 모바일에서는
// 배경 합성 대신 텍스트 아래 별도 배너 이미지로 표시합니다.
//
// recovery 모드와 full 모드가 서로 다른 독립 테마처럼 느껴지도록, full
// 모드는 home-hero.png를 공유하지 않고 별도의 대표 이미지
// (public/images/office-hero.jpg)를 사용합니다. 문자열 경로로 참조하므로
// (정적 import가 아님) 파일이 없어도 next build는 깨지지 않습니다.
export default function OfficeHero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative z-10 lg:max-w-2xl">
          <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight">
            필요한 법무사 업무를 편하게 확인해 보세요
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            개인회생·개인파산부터 민사, 강제집행, 가사·상속, 부동산등기, 법인등기까지 주요
            업무를 한곳에서 살펴볼 수 있습니다.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-brand-dark"
            >
              업무분야 보기
            </Link>
            <Link
              href="/#consultation"
              className="inline-flex items-center justify-center rounded-sm border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-slate-50"
            >
              상담신청
            </Link>
          </div>
        </div>

        <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-sm lg:absolute lg:inset-0 lg:z-0 lg:mt-0 lg:aspect-auto lg:rounded-none">
          <Image
            src="/images/office-hero.jpg"
            alt="법무사사무소 대표 이미지"
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
