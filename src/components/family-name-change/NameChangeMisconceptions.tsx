import {
  NAME_CHANGE_MISCONCEPTIONS,
  NAME_CHANGE_MISCONCEPTIONS_DESCRIPTION,
  NAME_CHANGE_MISCONCEPTIONS_HEADING,
} from "@/lib/family-name-change";

// "자주 하는 오해" 섹션입니다. 항목마다 큰 warning panel(경고 아이콘·
// "X" 표기 등)을 5개나 반복하면 오히려 과도한 장식이 되므로, 이미
// 자료 안내 section들(NameChangeDocuments 등)에서 쓰인 단일 카드 +
// bullet 목록 패턴을 그대로 재사용해 차분하게 나열합니다. 각 문장은
// "오해 → 실제로는" 구조로 한 문장에 담아 새로운 시각 언어(X 아이콘,
// 취소선 등)를 만들지 않았습니다.
//
// name-change-page-refine에서, 이 블록도 별도 heading이 없는 단순
// bullet 목록 블록이므로 4면 border만 제거하고 accent는 추가하지
// 않습니다(카드를 더 디자인하지 않고 박스 느낌만 줄임). bg-slate-50·
// padding·문구는 그대로 유지했습니다.
export default function NameChangeMisconceptions() {
  return (
    <section className="border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {NAME_CHANGE_MISCONCEPTIONS_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {NAME_CHANGE_MISCONCEPTIONS_DESCRIPTION}
        </p>

        <div className="mt-10 max-w-3xl rounded-sm bg-slate-50 p-6">
          <ul className="flex flex-col gap-4">
            {NAME_CHANGE_MISCONCEPTIONS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-6 text-gray-700 sm:text-base">
                <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
