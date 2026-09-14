import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/lib/constants";

// 홈 PracticeAreasOverview와 /services 페이지가 함께 사용하는 업무분야
// 목록입니다. 새로운 법률 설명·요건·기간·비용은 작성하지 않고, 업무명과
// 이동 링크만 구성합니다.
//
// 카드형 배경·테두리·그림자 대신 얇은 구분선 기반 목록(행)으로
// 표시합니다. PC에서는 좌우로 나눠 세로 구분선 없이 여백으로만 두 열을
// 나눕니다. 부동산등기가 박칠선 법무사사무소의 핵심 업무이므로
// SERVICE_CATEGORIES의 첫 항목(부동산등기)이 항상 왼쪽 열 맨 위, 즉 PC·
// 모바일 모두에서 가장 먼저 노출되는 위치에 오도록 왼쪽 열을 앞 3개로
// 구성합니다(모바일은 grid-cols-1이라 왼쪽 열 전체가 오른쪽 열보다 먼저
// 렌더링됩니다).
const LEFT_CATEGORIES = SERVICE_CATEGORIES.slice(0, 3); // 부동산등기, 법인등기, 민사소송
const RIGHT_CATEGORIES = SERVICE_CATEGORIES.slice(3); // 강제집행, 가사·상속

function PracticeAreaRow({ label, href }: { label: string; href: string }) {
  return (
    <li className="border-b border-gray-200">
      <Link
        href={href}
        className="group flex items-center justify-between gap-4 py-5 text-base font-semibold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:py-6 sm:text-lg"
      >
        {label}
        <span
          aria-hidden="true"
          className="text-gray-400 transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </li>
  );
}

export default function PracticeAreaCards() {
  return (
    <div className="grid grid-cols-1 border-t border-gray-200 sm:grid-cols-2 sm:gap-x-12">
      <ul>
        {LEFT_CATEGORIES.map((category) => (
          <PracticeAreaRow key={category.id} label={category.label} href={category.href} />
        ))}
      </ul>
      <ul>
        {RIGHT_CATEGORIES.map((category) => (
          <PracticeAreaRow key={category.id} label={category.label} href={category.href} />
        ))}
      </ul>
    </div>
  );
}
