import {
  BANKRUPTCY_NONDISCHARGEABLE_CLAIMS,
  BANKRUPTCY_NONDISCHARGEABLE_CLAIMS_NOTE,
  BANKRUPTCY_NONDISCHARGEABLE_CLAIMS_SUBTITLE,
  BANKRUPTCY_NONDISCHARGEABLE_CLAIMS_TITLE,
  BANKRUPTCY_NONDISCHARGE_GROUNDS,
  BANKRUPTCY_NONDISCHARGE_GROUNDS_INTRO,
  BANKRUPTCY_NONDISCHARGE_GROUNDS_NOTE,
  BANKRUPTCY_NONDISCHARGE_GROUNDS_NOTE_EMPHASIS,
} from "@/lib/constants";

// 면책불허가사유(A)와 비면책채권(B)은 서로 다른 개념이므로 구분되는 카드
// 2개로 나누어 표시합니다. 목록은 짧은 항목으로만 구성해 긴 문단이 이어지지
// 않도록 합니다.
//
// 이 두 항목은 신청인에게 실질적으로 불리해질 수 있는 "중요 주의정보"이므로
// 박스(카드) 자체는 유지합니다. 다만 다른 일반 정보 카드와 동일하게
// hover 시 떠오르는 효과(translate/shadow)가 들어가 있으면 "그냥 흔한
// 카드 중 하나"처럼 보이므로, hover 효과만 제거해 정적인 정보 패널로
// 보이게 합니다. 문구·목록 내용은 변경하지 않습니다.
//
// bankruptcy-page-refine에서, 4면 border를 제거하고 LeaseHousingCommercial/
// GuardianshipTypes와 동일하게 각 제목 아래 brand horizontal accent로
// 대체합니다. 기본 w-24가 두 제목 길이에 비해 짧아 보인다는 피드백에
// 따라 w-40(160px)으로 늘렸습니다(두 카드 폭 동일). 카드 배경(bg-white
// on bg-slate-50)·padding·목록·note는 그대로 유지했습니다.
// GROUNDS_NOTE_EMPHASIS가 있으면 그 부분문자열만 guardianship과 동일한
// 방식으로 <strong> 처리합니다(문구 변경 없음).
const groundsNoteEmphasisIndex = BANKRUPTCY_NONDISCHARGE_GROUNDS_NOTE_EMPHASIS
  ? BANKRUPTCY_NONDISCHARGE_GROUNDS_NOTE.indexOf(BANKRUPTCY_NONDISCHARGE_GROUNDS_NOTE_EMPHASIS)
  : -1;

export default function BankruptcyDischargeReview() {
  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          면책 심사에서 특히 확인되는 사항
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-sm bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-gray-900">면책불허가사유</h3>
            <span aria-hidden="true" className="mt-2 block h-[3px] w-40 rounded-full bg-brand" />
            <p className="mt-4 text-sm leading-6 text-gray-600">
              {BANKRUPTCY_NONDISCHARGE_GROUNDS_INTRO}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {BANKRUPTCY_NONDISCHARGE_GROUNDS.map((ground) => (
                <li key={ground} className="flex items-start gap-3 text-sm leading-6 text-gray-700">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand"
                  />
                  {ground}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-5 text-gray-500">
              {BANKRUPTCY_NONDISCHARGE_GROUNDS_NOTE_EMPHASIS && groundsNoteEmphasisIndex !== -1 ? (
                <>
                  {BANKRUPTCY_NONDISCHARGE_GROUNDS_NOTE.slice(0, groundsNoteEmphasisIndex)}
                  <strong className="font-bold">{BANKRUPTCY_NONDISCHARGE_GROUNDS_NOTE_EMPHASIS}</strong>
                  {BANKRUPTCY_NONDISCHARGE_GROUNDS_NOTE.slice(
                    groundsNoteEmphasisIndex + BANKRUPTCY_NONDISCHARGE_GROUNDS_NOTE_EMPHASIS.length,
                  )}
                </>
              ) : (
                BANKRUPTCY_NONDISCHARGE_GROUNDS_NOTE
              )}
            </p>
          </div>

          <div className="rounded-sm bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-gray-900">
              {BANKRUPTCY_NONDISCHARGEABLE_CLAIMS_TITLE}
            </h3>
            <span aria-hidden="true" className="mt-2 block h-[3px] w-40 rounded-full bg-brand" />
            <p className="mt-4 text-sm leading-6 text-gray-600">
              {BANKRUPTCY_NONDISCHARGEABLE_CLAIMS_SUBTITLE}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {BANKRUPTCY_NONDISCHARGEABLE_CLAIMS.map((claim) => (
                <li key={claim} className="flex items-start gap-3 text-sm leading-6 text-gray-700">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand"
                  />
                  {claim}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-5 text-gray-500">
              {BANKRUPTCY_NONDISCHARGEABLE_CLAIMS_NOTE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
