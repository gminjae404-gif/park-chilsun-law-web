import { NAME_CHANGE_REPORT_HEADING, NAME_CHANGE_REPORT_PARAGRAPH } from "@/lib/family-name-change";

// "허가 후에는 개명신고를 진행합니다" 섹션입니다. 신고서 기재사항·
// 첨부서류만 짧게 안내하고, 전자·방문 신고 가능 여부 등 이 프로젝트에서
// 공식적으로 확인되지 않은 채널 정보는 임의로 추가하지 않습니다.
export default function NameChangeReport() {
  return (
    <section className="border-b border-gray-200 bg-slate-50 print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl break-keep">
          {NAME_CHANGE_REPORT_HEADING}
        </h2>
        <div className="mt-6 max-w-3xl bg-white p-6">
          <p className="text-sm leading-6 text-gray-700 sm:text-base">{NAME_CHANGE_REPORT_PARAGRAPH}</p>
        </div>
      </div>
    </section>
  );
}
