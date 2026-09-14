import {
  CORPORATE_ENTITY_TYPES,
  CORPORATE_ENTITY_TYPES_DESCRIPTION,
  CORPORATE_ENTITY_TYPES_HEADING,
  CORPORATE_ENTITY_TYPES_NOTE,
} from "@/lib/corporate-registration";

// CorporateIntro 바로 다음, 기존 RegistrationTypesSection(주요
// 법인등기 유형) 바로 앞에 위치하는 법인등기 전용 섹션입니다. 이
// 페이지가 그동안 주식회사를 대표 예시로 설명해 온 것을 보완해, 실제
// 법인·단체는 여러 형태가 있고 형태에 따라 설립·변경 절차가 다를 수
// 있다는 점을 알립니다.
//
// 사이트 원칙("탐색·설명은 글과 선, 중요한 선택·기능·주의정보만
// 카드")에 따라 5개를 카드 grid로 만들지 않습니다. RegistrationTypesSection
// (좌우 2열 divider 목록)을 그대로 복제하지 않고, "분류명 → 예시 →
// 설명"을 한 행으로 보여주는 정의목록(dl) 형태를 사용합니다 — PC에서는
// 왼쪽 고정폭 분류명 + 오른쪽 예시/설명 2영역 row, mobile에서는 분류명
// → 예시 → 설명이 자연스럽게 세로로 쌓입니다. 아이콘, hover 애니메이션,
// shadow, 색상 카드, 큰 번호 배지는 사용하지 않습니다.
//
// "법인 아닌 단체"(마을회·종중 등)는 나머지 4개와 같은 층위의
// "법인등기 유형"으로 오해되지 않도록, 별도의 카드나 경고박스 없이
// section 하단에 작고 차분한 안내문(CORPORATE_ENTITY_TYPES_NOTE) 1줄만
// 덧붙입니다.
export default function CorporateEntityTypes() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {CORPORATE_ENTITY_TYPES_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {CORPORATE_ENTITY_TYPES_DESCRIPTION}
        </p>

        <dl className="mt-10 divide-y divide-gray-200 border-t border-gray-200">
          {CORPORATE_ENTITY_TYPES.map((item) => (
            <div
              key={item.category}
              className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[200px_1fr] sm:gap-8"
            >
              <dt className="text-base font-semibold text-gray-900 sm:text-lg">
                {item.category}
              </dt>
              <dd>
                <p className="text-sm font-medium text-gray-800 sm:text-base">{item.examples}</p>
                <p className="mt-1 text-sm leading-6 text-gray-600">{item.description}</p>
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 max-w-3xl border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500">
          {CORPORATE_ENTITY_TYPES_NOTE}
        </p>
      </div>
    </section>
  );
}
