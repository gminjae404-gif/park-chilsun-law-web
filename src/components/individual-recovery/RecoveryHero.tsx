import Image from "next/image";
import Link from "next/link";

// 홈페이지 Hero(Hero.tsx)와 동일한 "은은한 배경 이미지 + 차분한 텍스트" 톤을
// 사용합니다. 자가진단·상담신청 섹션은 이 페이지가 아닌 메인 페이지에
// 있으므로 "/#self-check", "/#consultation"으로 연결합니다.
// 상담 신청을 primary CTA로, 자가진단은 보조 텍스트 링크로 낮춰
// 개인파산 페이지 Hero와 시각적 위계를 통일합니다.
//
// 데스크톱(lg+)에서는 recovery-highlight.png가 섹션 전체 배경으로 깔리고
// 텍스트 쪽에는 slate 톤 그라디언트를 겹쳐 이미지가 별도 카드처럼 튀지
// 않으면서도 텍스트 가독성을 확보합니다(Hero.tsx·OfficeHero.tsx와 동일한
// 기법). 모바일에서는 배경 합성 대신 텍스트 아래 배너 이미지로 표시합니다.
export default function RecoveryHero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative z-10 lg:max-w-2xl">
          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight">
            개인회생 안내
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            개인회생 절차를 검토할 때 확인해야 하는 기본 사항을 안내합니다.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/?inquiry=recovery#consultation"
              className="inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-brand-dark"
            >
              상담 신청
            </Link>
            <Link
              href="/#self-check"
              className="inline-flex items-center justify-center rounded-sm text-sm font-medium text-gray-600 underline underline-offset-4 transition-colors hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark"
            >
              자가진단
            </Link>
          </div>
        </div>

        <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-sm lg:absolute lg:inset-0 lg:z-0 lg:mt-0 lg:aspect-auto lg:rounded-none">
          <Image
            src="/images/recovery-highlight.png"
            alt="개인회생 상담 자료가 놓인 사무실 책상"
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
