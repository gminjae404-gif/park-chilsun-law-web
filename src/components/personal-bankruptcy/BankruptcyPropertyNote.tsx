import {
  BANKRUPTCY_PROPERTY_NOTE_PARAGRAPHS,
  BANKRUPTCY_PROPERTY_NOTE_PARAGRAPH_EMPHASIS,
} from "@/lib/constants";

// 일반 설명 문단이므로 카드(배경·테두리·그림자) 없이 editorial 텍스트로
// 배치합니다. 제목과 본문 사이에만 짧은 구분선을 두어 앞 섹션과의 리듬을
// 만듭니다. 문구는 변경하지 않습니다.
//
// bankruptcy-page-refine에서, 재산이 있어도 신청이 가능한 이유와 판단
// 기준을 guardianship 등과 동일한 방식으로 강조합니다. 같은 인덱스에
// 강조할 문자열이 없거나 문단에 없는 경우에는 안전하게 기존과 동일하게
// 렌더링합니다.
export default function BankruptcyPropertyNote() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          재산이 있으면 개인파산을 신청할 수 없나요?
        </h2>
        <div className="mt-6 flex max-w-3xl flex-col gap-4 border-t border-gray-100 pt-6">
          {BANKRUPTCY_PROPERTY_NOTE_PARAGRAPHS.map((paragraph, index) => {
            const emphasis = BANKRUPTCY_PROPERTY_NOTE_PARAGRAPH_EMPHASIS[index];
            const emphasisIndex = emphasis ? paragraph.indexOf(emphasis) : -1;
            return (
              <p key={paragraph} className="text-sm leading-6 text-gray-700 sm:text-base">
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
      </div>
    </section>
  );
}
