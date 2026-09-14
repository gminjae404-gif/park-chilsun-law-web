import Image from "next/image";
import Link from "next/link";
import { BANKRUPTCY_HERO } from "@/lib/constants";

// 종합 홈(full 모드)에서도 개인회생·개인파산이 이 사이트의 핵심 업무임을
// 보여주는 강조 영역입니다. 새 법률 문구를 작성하지 않고, 이미 확정된 두
// 상세페이지로 이동하는 단순 navigation 2개로 구성합니다. 제목은 각
// 페이지에서 이미 쓰이고 있는 확정 라벨을 그대로 재사용합니다("개인회생"은
// Header 등에서, {BANKRUPTCY_HERO.title}은 개인파산 Hero에서). 이미지·링크·
// 순서는 이전과 동일합니다.
//
// 이전에는 rounded-2xl + bg-brand/5 배경으로 감싼 카드 2개였는데, 개인회생/
// 개인파산 상세페이지가 모두 카드 없는 editorial 톤(typography + whitespace
// + divider)으로 정리된 뒤라 이 섹션만 "큰 카드 2개"로 남아 튀어 보였습니다.
// 그래서 개인회생 RecoveryIntro·개인파산 BankruptcyDefinitions와 같은
// divide-x(PC)/divide-y(모바일) 2단 editorial 구성으로 전환합니다. 다만
// 이 섹션은 이미지가 핵심 진입점이므로, 텍스트만 남기지 않고 이미지를 각
// 열의 위쪽에 그대로 유지해 시각적 anchor 역할을 하도록 합니다. 카드
// 배경·테두리·그림자와 hover 시 블록 전체가 떠오르는 효과는 사용하지
// 않고, 링크의 화살표 이동 정도의 미세한 반응만 남깁니다.
export default function RecoveryBankruptcyHighlight() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          개인회생·개인파산
        </h2>
        <div className="mt-10 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          <div className="py-8 first:pt-0 last:pb-0 sm:py-0 sm:pr-10">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/recovery-highlight.png"
                alt="개인회생 상담 자료가 놓인 사무실 책상"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">개인회생</h3>
            <Link
              href="/individual-recovery"
              className="group mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark"
            >
              자세히 보기
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
          <div className="py-8 first:pt-0 last:pb-0 sm:py-0 sm:pl-10">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/bankruptcy-highlight.png"
                alt="개인파산·면책 상담 자료가 놓인 사무실 책상"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">{BANKRUPTCY_HERO.title}</h3>
            <Link
              href="/personal-bankruptcy"
              className="group mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark"
            >
              자세히 보기
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
