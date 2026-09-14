import { ENFORCEMENT_PRESERVATION_NOTE } from "@/lib/enforcement";

// 가압류와 강제집행을 구분해서 안내하는 짧은 주의문입니다. 앞의
// EnforcementPreCheck(번호 배지+연결선 목록)와는 다른 시각 언어를 써서,
// 가압류가 PreCheck의 "06번째 확인사항"이나 강제집행의 한 유형처럼
// 읽히지 않도록 독립된 강조 panel 1개로 분리합니다. 카드 grid를 쓰는
// EnforcementDocuments와도 구분되도록 왼쪽 brand 색 accent border만
// 사용하고, hover lift/shadow 등 동작 효과는 넣지 않습니다.
//
// enforcement-page-refine에서, 4면 border(및 border-l-4 accent)를
// 제거하고 guardianship/lease와 동일한 제목 왼쪽 짧은 세로 accent
// (h-5 w-1.5)로 정리합니다. 배경(bg-slate-50)·padding은 그대로
// 유지했습니다. 가압류·강제집행의 핵심 차이(가압류만으로는 채권
// 회수가 끝나지 않음)를 해당 문자열이 있는 곳에서만 <strong>으로
// 강조합니다(emphasis 미일치 시 안전하게 기존과 동일하게 렌더링).
const preservationNoteEmphasisIndex = ENFORCEMENT_PRESERVATION_NOTE.emphasis
  ? ENFORCEMENT_PRESERVATION_NOTE.content.indexOf(ENFORCEMENT_PRESERVATION_NOTE.emphasis)
  : -1;

export default function EnforcementPreservationNote() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-3xl rounded-sm bg-slate-50 p-6">
          <h2 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg">
            <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{ENFORCEMENT_PRESERVATION_NOTE.title}</span>
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {ENFORCEMENT_PRESERVATION_NOTE.emphasis && preservationNoteEmphasisIndex !== -1 ? (
              <>
                {ENFORCEMENT_PRESERVATION_NOTE.content.slice(0, preservationNoteEmphasisIndex)}
                <strong className="font-bold">{ENFORCEMENT_PRESERVATION_NOTE.emphasis}</strong>
                {ENFORCEMENT_PRESERVATION_NOTE.content.slice(
                  preservationNoteEmphasisIndex + ENFORCEMENT_PRESERVATION_NOTE.emphasis.length,
                )}
              </>
            ) : (
              ENFORCEMENT_PRESERVATION_NOTE.content
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
