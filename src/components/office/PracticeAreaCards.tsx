import Link from "next/link";
import { Fragment } from "react";
import { RECOVERY_BANKRUPTCY_SERVICE, SERVICE_CATEGORIES } from "@/lib/constants";

// 홈 PracticeAreasOverview와 /services 페이지가 함께 사용하는 업무분야
// 목록입니다. 새로운 법률 설명·요건·기간·비용은 작성하지 않고, 업무명과
// 이동 링크만 구성합니다.
//
// 이전에는 6개 업무를 rounded-2xl/bg-white 카드로 표시했는데, "네모 네모"
// 하다는 피드백에 따라 카드형 배경·테두리·그림자를 모두 제거하고,
// FAQPreview와 같은 얇은 구분선 기반 목록(행)으로 재구성했습니다. PC에서는
// 좌우 3개씩 2열로 나눠, 세로 구분선 없이 여백으로만 두 열을 나눠 6개가
// 하나의 큰 사각 grid처럼 보이지 않게 합니다. 그리드가 상단 구분선 하나만
// 공유하므로 두 열의 첫 행이 같은 선에서 시작합니다.
//
// 개인회생·파산 행만 예외입니다: 목록형으로 바꾸는 과정에서도 기존
// navigation semantics(개인회생/개인파산 각각의 개별 진입 경로)는 유지해야
// 하므로, "개인회생·파산" 제목은 링크로 만들지 않고 RECOVERY_BANKRUPTCY_
// SERVICE.items의 두 항목(개인회생/개인파산·면책)을 작은 텍스트 링크로
// 나란히 표시합니다. 카드형 배경·버튼 스타일은 사용하지 않고 hover 시
// text-brand로만 가볍게 반응합니다. 모바일에서는 두 링크의 실제 터치
// 영역만 min-h-11(44px)로 확보하고(inline-flex + items-center로 텍스트를
// 그 안에서 세로 중앙 정렬), sm 이상에서는 min-h-0으로 되돌려 기존 PC
// 레이아웃(py-2 기반 높이)을 그대로 유지합니다. 배경·테두리·모서리는
// 추가하지 않아 텍스트 크기·색상·위치, 링크 사이 gap-3은 변하지 않습니다.
const LEFT_CATEGORIES = SERVICE_CATEGORIES.slice(0, 2); // 민사소송, 강제집행
const RIGHT_CATEGORIES = SERVICE_CATEGORIES.slice(2); // 가사·상속, 부동산등기, 법인등기

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

function RecoveryBankruptcyRow() {
  return (
    <li className="border-b border-gray-200">
      <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-6">
        <span className="text-base font-semibold text-gray-900 sm:text-lg">
          {RECOVERY_BANKRUPTCY_SERVICE.label}
        </span>
        <div className="flex items-center gap-3 text-sm font-medium text-gray-600 sm:text-base">
          {RECOVERY_BANKRUPTCY_SERVICE.items?.map((item, index) => (
            <Fragment key={item.href}>
              {index > 0 && (
                <span aria-hidden="true" className="text-gray-300">
                  ·
                </span>
              )}
              <Link
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-sm py-2 transition-colors hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:min-h-0"
              >
                {item.label}
              </Link>
            </Fragment>
          ))}
        </div>
      </div>
    </li>
  );
}

export default function PracticeAreaCards() {
  return (
    <div className="grid grid-cols-1 border-t border-gray-200 sm:grid-cols-2 sm:gap-x-12">
      <ul>
        <RecoveryBankruptcyRow />
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
