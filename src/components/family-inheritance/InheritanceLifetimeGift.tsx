import {
  INHERITANCE_LIFETIME_GIFT_HEADING,
  INHERITANCE_LIFETIME_GIFT_NOTE,
  INHERITANCE_LIFETIME_GIFT_PARAGRAPH,
} from "@/lib/family-inheritance";

// "생전 증여"는 스펙상 "간단히만" 다루도록 요구된 섹션입니다. 다른
// section들과 달리 목록·카드 없이 문단 1개 + 얇은 note 문구만으로
// 짧게 구성해 분량 차이를 시각적으로도 드러냅니다.
export default function InheritanceLifetimeGift() {
  return (
    <section id="lifetime-gift" className="scroll-mt-20 border-b border-gray-200 bg-slate-50 print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {INHERITANCE_LIFETIME_GIFT_HEADING}
        </h2>
        <p className="mt-6 max-w-3xl border-t border-gray-200 pt-6 text-sm leading-6 text-gray-700 sm:text-base">
          {INHERITANCE_LIFETIME_GIFT_PARAGRAPH}
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-500">
          {INHERITANCE_LIFETIME_GIFT_NOTE}
        </p>
      </div>
    </section>
  );
}
