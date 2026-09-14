import {
  FAMILY_GUARDIANSHIP_GUIDE_DESCRIPTION,
  FAMILY_GUARDIANSHIP_GUIDE_HEADING,
  FAMILY_GUARDIANSHIP_GUIDE_NOTE,
  FAMILY_GUARDIANSHIP_TYPES,
} from "@/lib/family";

// FamilyAreas("후견" 1개 항목) 바로 다음, FamilyPreCheck 바로 앞에
// 위치하는 가사·상속 전용 section입니다. 후견은 성년후견·한정후견·
// 특정후견·미성년후견·임의후견처럼 대상과 요건이 서로 다른 여러
// 제도를 통칭하므로, 이 section에서 5종류를 구분해 보여줍니다.
//
// CorporateEntityTypes와 동일한 정의목록(dl) 형태를 재사용합니다 —
// PC에서는 왼쪽 고정폭 후견명 + 오른쪽 설명 2영역 row, mobile에서는
// 후견명 → 설명이 자연스럽게 세로로 쌓입니다. 번호 배지·아이콘·
// hover·shadow·새 색상은 사용하지 않아 5개가 시간 순서나 단계처럼
// 보이지 않도록 합니다.
//
// item.emphasis가 있으면 /family/guardianship의 GuardianshipTypes와
// 동일한 방식으로 description 중 그 부분문자열만 <strong>으로 감쌉니다.
// emphasis가 없거나 description에 없는 경우에는 기존과 동일하게
// description을 그대로 렌더링합니다.
export default function FamilyGuardianshipGuide() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {FAMILY_GUARDIANSHIP_GUIDE_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {FAMILY_GUARDIANSHIP_GUIDE_DESCRIPTION}
        </p>

        <dl className="mt-10 divide-y divide-gray-200 border-t border-gray-200">
          {FAMILY_GUARDIANSHIP_TYPES.map((item) => {
            const emphasisIndex = item.emphasis ? item.description.indexOf(item.emphasis) : -1;
            return (
              <div
                key={item.title}
                className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[200px_1fr] sm:gap-8"
              >
                <dt className="text-base font-semibold text-gray-900 sm:text-lg">{item.title}</dt>
                <dd className="text-sm leading-6 text-gray-600 sm:text-base">
                  {item.emphasis && emphasisIndex !== -1 ? (
                    <>
                      {item.description.slice(0, emphasisIndex)}
                      <strong className="font-bold">{item.emphasis}</strong>
                      {item.description.slice(emphasisIndex + item.emphasis.length)}
                    </>
                  ) : (
                    item.description
                  )}
                </dd>
              </div>
            );
          })}
        </dl>

        <p className="mt-8 max-w-3xl border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500">
          {FAMILY_GUARDIANSHIP_GUIDE_NOTE}
        </p>
      </div>
    </section>
  );
}
