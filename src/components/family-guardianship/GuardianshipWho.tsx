import {
  GUARDIANSHIP_WHO_HEADING,
  GUARDIANSHIP_WHO_NOTE,
  GUARDIANSHIP_WHO_PARAGRAPH,
} from "@/lib/family-guardianship";

// "신청한 가족이 바로 후견인이 되나요?" 섹션입니다. 확정 문단 2개만
// 있는 짧은 section이라 slate-50 부모 위에 완전한 bordered 카드 1개로
// 감싸 GuardianshipTypes/InheritanceRenunciationVsLimited와 동일한
// "색배경 위 흰 카드" 언어를 재사용했습니다(테두리 일부만 있는 절반짜리
// 박스를 새로 만들지 않음). "가족보다 전문가가 선임된다" 또는 그
// 반대로 읽히지 않도록 법원이 고려하는 여러 사정을 나열하는 데 그치고
// 우열을 암시하는 표현은 사용하지 않았습니다.
//
// guardianship-page-refine 마무리에서, 이 블록의 4면 border만
// 제거합니다. 별도 heading이 없는 순수 문단 블록이라 accent를 추가하지
// 않고, bg-white·padding·문구는 그대로 유지해 배경(slate-50 section 위
// white block) 대비만으로 다른 정리된 안내영역과 같은 방향을
// 맞춥니다.
export default function GuardianshipWho() {
  return (
    <section className="border-b border-gray-200 bg-slate-50 print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {GUARDIANSHIP_WHO_HEADING}
        </h2>
        <div className="mt-8 max-w-3xl rounded-sm bg-white p-6">
          <p className="text-sm leading-6 text-gray-700 sm:text-base">{GUARDIANSHIP_WHO_PARAGRAPH}</p>
          <p className="mt-3 text-sm leading-6 text-gray-700 sm:text-base">{GUARDIANSHIP_WHO_NOTE}</p>
        </div>
      </div>
    </section>
  );
}
