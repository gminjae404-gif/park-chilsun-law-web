import { FAMILY_INHERITANCE_NOTE } from "@/lib/family";

// 상속에만 있는 기간 관련 짧은 주의문입니다.
// EnforcementPreservationNote와 동일하게 카드 grid나 큰 경고박스가
// 아니라 독립된 강조 panel 1개로 분리합니다(hover lift/shadow 등 동작
// 효과 없음).
//
// content 중 emphasis와 정확히 일치하는 부분만 guardianship과 동일한
// 방식으로 <strong> 처리합니다(문구 변경 없음).
//
// family-page-refine에서, 4면 border(및 border-l-4 accent)를 제거하고
// enforcement/guardianship/lease와 동일하게 제목 왼쪽 짧은 세로 accent
// (h-5 w-1.5)로 정리합니다. 배경(bg-slate-50)·padding·emphasis 로직은
// 그대로 유지했습니다.
export default function FamilyInheritanceNote() {
  const emphasisIndex = FAMILY_INHERITANCE_NOTE.emphasis
    ? FAMILY_INHERITANCE_NOTE.content.indexOf(FAMILY_INHERITANCE_NOTE.emphasis)
    : -1;
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-3xl rounded-sm bg-slate-50 p-6">
          <h2 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg">
            <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{FAMILY_INHERITANCE_NOTE.title}</span>
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {FAMILY_INHERITANCE_NOTE.emphasis && emphasisIndex !== -1 ? (
              <>
                {FAMILY_INHERITANCE_NOTE.content.slice(0, emphasisIndex)}
                <strong className="font-bold">{FAMILY_INHERITANCE_NOTE.emphasis}</strong>
                {FAMILY_INHERITANCE_NOTE.content.slice(
                  emphasisIndex + FAMILY_INHERITANCE_NOTE.emphasis.length,
                )}
              </>
            ) : (
              FAMILY_INHERITANCE_NOTE.content
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
