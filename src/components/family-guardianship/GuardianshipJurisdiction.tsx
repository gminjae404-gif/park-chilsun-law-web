import {
  GUARDIANSHIP_JURISDICTION_HEADING,
  GUARDIANSHIP_JURISDICTION_PARAGRAPHS,
} from "@/lib/family-guardianship";

// "후견사건은 어느 법원에 신청하나요?" 섹션입니다. "무조건 주소지
// 법원"이라고 단정하지 않기 위해 원칙 문장과 기존 사건이 있는 경우의
// 예외를 두 문단으로 나눠 순서대로 보여줍니다.
export default function GuardianshipJurisdiction() {
  return (
    <section className="border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {GUARDIANSHIP_JURISDICTION_HEADING}
        </h2>
        <div className="mt-6 flex max-w-3xl flex-col gap-3 border-t border-gray-100 pt-6">
          {GUARDIANSHIP_JURISDICTION_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-6 text-gray-700 sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
