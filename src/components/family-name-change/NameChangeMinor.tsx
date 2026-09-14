import {
  NAME_CHANGE_MINOR_HEADING,
  NAME_CHANGE_MINOR_NOTE,
  NAME_CHANGE_MINOR_NOTE_EMPHASIS,
  NAME_CHANGE_MINOR_PARAGRAPH,
  NAME_CHANGE_MINOR_PARAGRAPH_EMPHASIS,
} from "@/lib/family-name-change";

// "미성년자의 개명은 누구를 기준으로 판단하나요?" 섹션입니다. 확정
// 문단 2개만 있는 짧은 section이라 GuardianshipWho와 동일하게 색배경
// 위 완전한 bordered 카드 1개로 감쌉니다. "부모가 원하면 언제든
// 가능하다"거나 "미성년자는 절대 직접 신청할 수 없다"는 식으로
// 단정하지 않고, 의사능력이 있는 미성년자의 단독 신청 가능성도 함께
// 안내합니다.
//
// name-change-page-refine에서, 이 블록은 GuardianshipWho와 동일하게
// 별도 heading이 없는 순수 문단 블록이므로 4면 border만 제거하고
// accent는 추가하지 않습니다(억지로 카드를 더 디자인하지 않음).
// bg-slate-50·padding·문구는 그대로 유지했습니다. 미성년자 개명에서
// 중요한 판단기준(나이·의사능력·법정대리 관계)과 단독 신청 가능성을
// 각각 해당 문자열이 있는 곳에서만 <strong>으로 강조합니다.
const minorParagraphEmphasisIndex = NAME_CHANGE_MINOR_PARAGRAPH.indexOf(NAME_CHANGE_MINOR_PARAGRAPH_EMPHASIS);
const minorNoteEmphasisIndex = NAME_CHANGE_MINOR_NOTE.indexOf(NAME_CHANGE_MINOR_NOTE_EMPHASIS);

export default function NameChangeMinor() {
  return (
    <section id="minor" className="scroll-mt-20 border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {NAME_CHANGE_MINOR_HEADING}
        </h2>
        <div className="mt-8 max-w-3xl rounded-sm bg-slate-50 p-6">
          <p className="text-sm leading-6 text-gray-700 sm:text-base">
            {minorParagraphEmphasisIndex !== -1 ? (
              <>
                {NAME_CHANGE_MINOR_PARAGRAPH.slice(0, minorParagraphEmphasisIndex)}
                <strong className="font-bold">{NAME_CHANGE_MINOR_PARAGRAPH_EMPHASIS}</strong>
                {NAME_CHANGE_MINOR_PARAGRAPH.slice(
                  minorParagraphEmphasisIndex + NAME_CHANGE_MINOR_PARAGRAPH_EMPHASIS.length,
                )}
              </>
            ) : (
              NAME_CHANGE_MINOR_PARAGRAPH
            )}
          </p>
          <p className="mt-3 text-sm leading-6 text-gray-700 sm:text-base">
            {minorNoteEmphasisIndex !== -1 ? (
              <>
                {NAME_CHANGE_MINOR_NOTE.slice(0, minorNoteEmphasisIndex)}
                <strong className="font-bold">{NAME_CHANGE_MINOR_NOTE_EMPHASIS}</strong>
                {NAME_CHANGE_MINOR_NOTE.slice(minorNoteEmphasisIndex + NAME_CHANGE_MINOR_NOTE_EMPHASIS.length)}
              </>
            ) : (
              NAME_CHANGE_MINOR_NOTE
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
