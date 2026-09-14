import Link from "next/link";
import { LEASE_HERO } from "@/lib/civil-lease";

// CivilHero/EnforcementHero와 동일한 시각 구조(이미지 없는 text-led,
// primary 버튼+secondary 텍스트링크)를 그대로 재사용합니다. 새 이미지는
// 추가하지 않았습니다. secondary 링크는 /services가 아니라 상위
// 페이지인 /civil로 연결해, 이 페이지가 민사소송(/civil)의 하위
// 상세페이지임을 자연스럽게 드러냅니다.
//
// box-density-audit 7차(배경 리듬 반전 실험)에서, 페이지 전체 배경
// 순서를 white→slate→white→slate→white→slate→brand로 뒤집는 실험의
// 일환으로 bg-slate-50 → bg-white로 변경했습니다. Header(bg-white)와
// Hero가 같은 흰색으로 맞닿는 절충안(Hero만 slate-50)도 함께
// 검토했으나, A(원래 버전)/B(전체 반전)/C(절충안) 스크린샷 비교
// 결과 C는 Hero+Problems가 모두 slate-50으로 이어져 페이지 콘텐츠
// 시작부에 오히려 더 큰 단일 톤 구간(약 1150px)이 생기는 것으로
// 확인되어, 최종적으로 B안(Hero=white)을 Preview 후보로 채택합니다.
// border·typography·버튼·spacing·문구는 전혀 손대지 않았습니다.
//
// box-density-audit 7차 보완(Hero 수직 페이드)에서, B안의 Hero가
// 완전한 흰색 단색이라 PC 전체화면에서 좌우가 허전해 보인다는
// 피드백에 따라 순수 bg-white를 Tailwind 기본 palette만 쓰는 절제된
// 3단 수직 gradient(bg-gradient-to-b from-slate-50 via-slate-50/40
// to-white)로 바꿨습니다. 상단은 옅은 slate감이 느껴지고 중간부터
// 빠르게 옅어져 하단에서는 완전한 white가 되어, 바로 다음
// LeaseProblems(bg-slate-50)와는 뚜렷이 구분됩니다. 화려한 장식형
// gradient가 아니라 "위에 아주 옅은 색이 있다가 자연스럽게
// 사라지는" 정도로만 조절했습니다. 문구·버튼·spacing·max-width·
// border는 전혀 손대지 않았습니다.
export default function LeaseHero() {
  return (
    <section className="border-b border-gray-200 bg-gradient-to-b from-slate-50 via-slate-50/40 to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight">
            {LEASE_HERO.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            {LEASE_HERO.lead}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">{LEASE_HERO.note}</p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/?inquiry=civil-enforcement#consultation"
              className="inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-brand-dark"
            >
              상담 신청
            </Link>
            <Link
              href="/civil"
              className="inline-flex items-center justify-center rounded-sm text-sm font-medium text-gray-600 underline underline-offset-4 transition-colors hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark"
            >
              민사소송 전체보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
