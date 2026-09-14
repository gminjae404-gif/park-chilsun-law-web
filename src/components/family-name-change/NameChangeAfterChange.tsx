import {
  NAME_CHANGE_AFTER_CHANGE_HEADING,
  NAME_CHANGE_AFTER_CHANGE_ITEMS,
  NAME_CHANGE_AFTER_CHANGE_NOTE,
} from "@/lib/family-name-change";

// "가족관계등록부 변경 후에도 확인할 곳이 남아 있습니다" 섹션입니다.
// 9개 항목은 병렬적으로 확인할 대상이므로 번호 배지 없이 점(bullet)
// 목록으로 나열하고, "전부 자동 변경된다"는 오해를 막는 완충 문구는
// 얇은 note로 마무리합니다.
export default function NameChangeAfterChange() {
  return (
    <section className="border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {NAME_CHANGE_AFTER_CHANGE_HEADING}
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
          {NAME_CHANGE_AFTER_CHANGE_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm leading-6 text-gray-700 sm:text-base">
              <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-3xl border-t border-gray-200 pt-6 text-sm leading-6 text-gray-500">
          {NAME_CHANGE_AFTER_CHANGE_NOTE}
        </p>
      </div>
    </section>
  );
}
