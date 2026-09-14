import {
  NAME_CHANGE_EVIDENCE_HEADING,
  NAME_CHANGE_EVIDENCE_ITEMS,
  NAME_CHANGE_EVIDENCE_NOTE,
} from "@/lib/family-name-change";

// "소명자료" 섹션입니다. 5가지 예시를 점(bullet) 목록으로 나열하고,
// "모든 신청에 전부 필요한 것은 아니다"라는 완충 문구는 무거운 warning
// panel이 아니라 FAMILY_DOCUMENTS_NOTE류의 얇은 note 문구로 마무리합니다
// (이미 존재하는 자료를 안내하는 것이며, 자료를 새로 만들거나 과장해
// 제출하라는 취지는 어디에도 없습니다).
export default function NameChangeEvidence() {
  return (
    <section id="evidence" className="scroll-mt-20 border-b border-gray-200 bg-slate-50 print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {NAME_CHANGE_EVIDENCE_HEADING}
        </h2>

        <ul className="mt-8 flex max-w-3xl flex-col gap-2">
          {NAME_CHANGE_EVIDENCE_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm leading-6 text-gray-700 sm:text-base">
              <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-3xl border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500">
          {NAME_CHANGE_EVIDENCE_NOTE}
        </p>
      </div>
    </section>
  );
}
