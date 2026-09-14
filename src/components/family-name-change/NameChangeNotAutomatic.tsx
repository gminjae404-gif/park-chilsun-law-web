import {
  NAME_CHANGE_NOT_AUTOMATIC_HEADING,
  NAME_CHANGE_NOT_AUTOMATIC_PARAGRAPH,
  NAME_CHANGE_NOT_AUTOMATIC_WARNING,
} from "@/lib/family-name-change";

// 이 페이지의 핵심 경고 섹션입니다. "허가결정 = 절차 종료"로 오해하지
// 않도록, 개명신고 의무와 그 기간(가족관계등록법 제99조 기준 1개월)을
// 통일된 warning panel로 분명하게 안내합니다.
//
// 이 경고박스는 제목이 "허가와 신고는 별개의 단계"만 설명하고 구체적인
// 1개월 기간은 content에만 있으므로, guardianship과 동일한 방식으로
// content 중 기간 부분만 <strong> 처리합니다(문구 변경 없음).
//
// name-change-page-refine에서, warning panel의 4면 border(및 border-l-4
// accent)를 제거하고 제목 왼쪽 짧은 세로 accent(h-5 w-1.5)로 정리합니다.
// emphasis 로직 자체는 변경하지 않았습니다.
export default function NameChangeNotAutomatic() {
  const emphasisIndex = NAME_CHANGE_NOT_AUTOMATIC_WARNING.emphasis
    ? NAME_CHANGE_NOT_AUTOMATIC_WARNING.content.indexOf(NAME_CHANGE_NOT_AUTOMATIC_WARNING.emphasis)
    : -1;
  return (
    <section id="not-automatic" className="scroll-mt-20 border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {NAME_CHANGE_NOT_AUTOMATIC_HEADING}
        </h2>
        <p className="mt-6 max-w-3xl border-t border-gray-100 pt-6 text-sm leading-6 text-gray-700 sm:text-base">
          {NAME_CHANGE_NOT_AUTOMATIC_PARAGRAPH}
        </p>

        <div className="mt-8 max-w-3xl rounded-sm bg-slate-50 p-6">
          <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg break-keep">
            <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{NAME_CHANGE_NOT_AUTOMATIC_WARNING.title}</span>
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {NAME_CHANGE_NOT_AUTOMATIC_WARNING.emphasis && emphasisIndex !== -1 ? (
              <>
                {NAME_CHANGE_NOT_AUTOMATIC_WARNING.content.slice(0, emphasisIndex)}
                <strong className="font-bold">{NAME_CHANGE_NOT_AUTOMATIC_WARNING.emphasis}</strong>
                {NAME_CHANGE_NOT_AUTOMATIC_WARNING.content.slice(
                  emphasisIndex + NAME_CHANGE_NOT_AUTOMATIC_WARNING.emphasis.length,
                )}
              </>
            ) : (
              NAME_CHANGE_NOT_AUTOMATIC_WARNING.content
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
