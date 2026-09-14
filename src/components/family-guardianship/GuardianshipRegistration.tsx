import {
  GUARDIANSHIP_REGISTRATION_HEADING,
  GUARDIANSHIP_REGISTRATION_PARAGRAPH,
} from "@/lib/family-guardianship";

// "후견사항은 후견등기제도로 공시됩니다" 섹션입니다. 짧은 확정 문단
// 하나만 있는 section이라 CivilIntro류의 "제목+구분선+문단" 패턴을
// 재사용합니다. 가족관계등록부에 성년후견이 기재된다는 오해를 만들지
// 않기 위해 "가족관계등록부가 아니라 별도의 후견등기제도"라는 대비를
// 문장에 그대로 남겼습니다.
export default function GuardianshipRegistration() {
  return (
    <section className="border-b border-gray-200 bg-white print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {GUARDIANSHIP_REGISTRATION_HEADING}
        </h2>
        <div className="mt-6 max-w-3xl border-t border-gray-100 pt-6">
          <p className="text-sm leading-6 text-gray-700 sm:text-base">
            {GUARDIANSHIP_REGISTRATION_PARAGRAPH}
          </p>
        </div>
      </div>
    </section>
  );
}
