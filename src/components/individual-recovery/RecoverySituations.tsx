import { RECOVERY_DETAILED_REVIEW_TOPICS } from "@/lib/constants";

// "개인회생에서 추가로 확인하는 사항" 섹션입니다. 새로운 법률 문구를 만들지
// 않고, 이미 확정된 RECOVERY_DETAILED_REVIEW_TOPICS(변제계획 수립 시 주요
// 검토사항)만 그대로 재사용합니다. FAQ_ITEMS는 이 섹션에서 사용하지
// 않습니다 — 실제 상황별 질문은 아래 FAQ 섹션(9개)에서만 다루어 두 섹션의
// 역할을 분리하고 동일 문구가 중복 노출되지 않도록 합니다.
//
// topic.paragraphEmphasis가 있으면 guardianship 등과 동일한 방식으로
// 같은 인덱스의 문단 중 그 부분문자열만 <strong> 처리합니다(문단당
// 최대 1곳). 해당 인덱스에 강조할 문자열이 없으면 문단을 그대로
// 렌더링합니다.
export default function RecoverySituations() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          개인회생에서 추가로 확인하는 사항
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          변제계획을 수립할 때 함께 검토하는 사항입니다. 눌러서 자세한 내용을 확인하실 수
          있습니다.
        </p>
        <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
          {RECOVERY_DETAILED_REVIEW_TOPICS.map((topic) => (
            <details key={topic.title} className="group py-4">
              <summary className="flex list-none cursor-pointer items-center justify-between gap-4 rounded-sm text-sm font-medium text-gray-800 transition-colors [&::-webkit-details-marker]:hidden hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:text-base">
                {topic.title}
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 text-lg font-light text-brand transition-transform duration-150 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="mt-3 flex flex-col gap-3">
                {topic.paragraphs.map((paragraph, index) => {
                  const emphasis = topic.paragraphEmphasis?.[index];
                  const emphasisIndex = emphasis ? paragraph.indexOf(emphasis) : -1;
                  return (
                    <p key={paragraph} className="text-sm leading-6 text-gray-600">
                      {emphasis && emphasisIndex !== -1 ? (
                        <>
                          {paragraph.slice(0, emphasisIndex)}
                          <strong className="font-bold">{emphasis}</strong>
                          {paragraph.slice(emphasisIndex + emphasis.length)}
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  );
                })}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
