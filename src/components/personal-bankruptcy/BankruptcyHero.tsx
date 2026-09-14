import Image from "next/image";
import Link from "next/link";
import { BANKRUPTCY_CTA_LABELS, BANKRUPTCY_HERO } from "@/lib/constants";

// 자가진단·상담신청 섹션은 이 페이지가 아닌 메인 페이지에 있으므로
// "/#self-check", "/#consultation"으로 연결합니다.
//
// RecoveryHero.tsx·Hero.tsx와 동일한 "은은한 배경 이미지 + 차분한 텍스트"
// 톤을 사용합니다. 데스크톱(lg+)에서는 bankruptcy-highlight.png가 섹션
// 전체 배경으로 깔리고 텍스트 쪽에는 slate 톤 그라디언트를 겹쳐 이미지가
// 별도 카드처럼 튀지 않으면서도 텍스트 가독성을 확보합니다. 모바일에서는
// 배경 합성 대신 텍스트 아래 배너 이미지로 표시합니다.
//
// BANKRUPTCY_HERO.emphasis가 있으면 guardianship 등과 동일한 방식으로
// note 중 그 부분문자열만 <strong> 처리합니다(1곳).
export default function BankruptcyHero() {
  const emphasisIndex = BANKRUPTCY_HERO.emphasis
    ? BANKRUPTCY_HERO.note.indexOf(BANKRUPTCY_HERO.emphasis)
    : -1;
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative z-10 lg:max-w-2xl">
          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight">
            {BANKRUPTCY_HERO.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {BANKRUPTCY_HERO.lead}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">
            {BANKRUPTCY_HERO.emphasis && emphasisIndex !== -1 ? (
              <>
                {BANKRUPTCY_HERO.note.slice(0, emphasisIndex)}
                <strong className="font-bold">{BANKRUPTCY_HERO.emphasis}</strong>
                {BANKRUPTCY_HERO.note.slice(emphasisIndex + BANKRUPTCY_HERO.emphasis.length)}
              </>
            ) : (
              BANKRUPTCY_HERO.note
            )}
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/?inquiry=bankruptcy#consultation"
              className="inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-brand-dark"
            >
              {BANKRUPTCY_CTA_LABELS.consultation}
            </Link>
            {/* 상담 안내를 primary CTA로 유지하고, 개인파산 전용 자가진단이 없는
                상태에서 개인회생 자가진단이 주된 행동처럼 보이지 않도록
                버튼이 아닌 보조 텍스트 링크로 낮춰서 표시합니다. */}
            <Link
              href="/#self-check"
              className="inline-flex items-center justify-center rounded-sm text-sm font-medium text-gray-600 underline underline-offset-4 transition-colors hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark"
            >
              {BANKRUPTCY_CTA_LABELS.selfCheck}
            </Link>
          </div>
        </div>

        <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-sm lg:absolute lg:inset-0 lg:z-0 lg:mt-0 lg:aspect-auto lg:rounded-none">
          <Image
            src="/images/bankruptcy-highlight.png"
            alt="개인파산·면책 상담 자료가 놓인 사무실 책상"
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
