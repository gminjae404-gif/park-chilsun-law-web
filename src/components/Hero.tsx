import Image from "next/image";
import Link from "next/link";

// home-hero.png는 왼쪽이 빈 벽면, 오른쪽이 책상·법률서적 등 디테일로 구성된
// 사진이라 텍스트가 올라가는 왼쪽 영역과 자연스럽게 맞습니다.
// - 데스크톱(lg+): 섹션 전체를 덮는 배경으로 사용하고, 텍스트 위에 옅은
//   흰색 그라디언트를 겹쳐 대비를 보강합니다(제목/본문 색상은 변경 없음).
// - 모바일: 배경 합성 대신 텍스트/CTA 아래에 별도 배너 이미지로 배치하고,
//   책상·노트북 등 디테일이 있는 오른쪽을 기준으로 object-position을
//   조정합니다.
export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative z-10 lg:max-w-2xl">
          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight">
            개인회생,
            <br />
            정확한 검토에서 시작합니다.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            채무·소득·재산 및 현재 상황을 확인하여 적절한 절차를 검토할 수 있도록 안내합니다.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#self-check"
              className="inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-brand-dark"
            >
              개인회생 자가진단
            </Link>
            <Link
              href="#consultation"
              className="inline-flex items-center justify-center rounded-sm border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-slate-50"
            >
              상담 신청
            </Link>
          </div>
        </div>

        <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-sm lg:absolute lg:inset-0 lg:z-0 lg:mt-0 lg:aspect-auto lg:rounded-none">
          <Image
            src="/images/home-hero.png"
            alt="법률 상담을 위한 정돈된 사무실"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right lg:object-center"
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
