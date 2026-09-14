import Link from "next/link";
import { FAMILY_AREAS, FAMILY_AREAS_DESCRIPTION, FAMILY_AREAS_HEADING, type FamilyAreaItem } from "@/lib/family";

// "가사·상속의 주요 영역" 4개를 카드 grid가 아닌, CivilTypes와 동일한
// 좌우 2열 + border-t 공유 + 각 항목 border-b 구분선 목록으로
// 표시합니다. 이 섹션은 "현재 상황이 어느 영역인가"를 구분하는
// 목적이므로 정보성 목록으로만 보이도록 hover lift/shadow, 아이콘,
// 배경 카드를 사용하지 않습니다.
//
// 뒤에 나오는 FamilyProcedures와 역할이 겹치지 않도록: 이 섹션은
// "어떤 문제인가"만 다루고, "그 문제를 어떻게 절차로 나누는가"는
// FamilyProcedures(다른 시각 언어)가 담당합니다.
//
// detailLink가 있는 항목(친자·입양·가족관계/후견/상속)에만 완성된
// 상세페이지로 이동하는 링크를 추가합니다. 카드 전체를 클릭 가능하게
// 만들지 않고, 홈페이지 RecoveryBankruptcyHighlight에서 이미 쓰고 있는
// "자세히 보기 →" 텍스트 링크 패턴(className까지 동일)을 그대로
// 재사용했습니다 — 제목/설명 문단은 링크 밖에 그대로 두어 스크린리더가
// 읽는 링크 이름이 "○○ 자세히 보기"로 짧고 명확하게 유지됩니다.
// 화살표는 aria-hidden으로 장식 요소임을 표시합니다. 상세페이지가 아직
// 없는 "혼인·이혼"은 detailLink 자체가 없어 아무 링크도 생기지
// 않습니다.
const LEFT_AREAS = FAMILY_AREAS.slice(0, 2);
const RIGHT_AREAS = FAMILY_AREAS.slice(2);

function AreaListItem({ area }: { area: FamilyAreaItem }) {
  return (
    <li className="border-b border-gray-200 py-6">
      <h3 className="text-base font-semibold text-gray-900 sm:text-lg">{area.title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">{area.description}</p>
      {area.detailLink && (
        <Link
          href={area.detailLink.href}
          className="group mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark"
        >
          {area.detailLink.label}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      )}
    </li>
  );
}

export default function FamilyAreas() {
  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {FAMILY_AREAS_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {FAMILY_AREAS_DESCRIPTION}
        </p>
        <div className="mt-10 grid grid-cols-1 border-t border-gray-200 sm:grid-cols-2 sm:gap-x-12">
          <ul>
            {LEFT_AREAS.map((area) => (
              <AreaListItem key={area.title} area={area} />
            ))}
          </ul>
          <ul>
            {RIGHT_AREAS.map((area) => (
              <AreaListItem key={area.title} area={area} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
