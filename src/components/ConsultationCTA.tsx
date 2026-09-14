import Image from "next/image";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import { SITE_CONFIG } from "@/lib/constants";
import type { InquiryType } from "@/types/consultation";

type ConsultationCTAProps = {
  prefillInquiryType?: InquiryType | null;
};

// consultation.png는 얼굴보다 서류·펜·노트북 등 "함께 검토하는 과정"이
// 보이도록 상단이 이미 크롭된 사진입니다. 데스크톱에서는 이 이미지와 상담
// 폼을 2단으로 나란히 배치하고, 모바일에서는 이미지를 폼 위에 1열로
// 둡니다(그리드의 자연스러운 소스 순서를 그대로 사용).
export default function ConsultationCTA({ prefillInquiryType }: ConsultationCTAProps) {
  return (
    <section id="consultation" className="scroll-mt-20 bg-brand">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            상담 내용을 미리 정리해서 남겨 주세요.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-200 sm:text-base">
            문의 유형과 상담 희망 시간을 알려주시면 더 정확한 안내가 가능합니다.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm lg:aspect-auto lg:h-full">
            <Image
              src="/images/consultation.png"
              alt="서류를 함께 확인하는 상담 장면"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="rounded-sm border border-gray-200 bg-white p-6 sm:p-8">
            {SITE_CONFIG.isPreviewSite && (
              <p className="mb-6 rounded-sm bg-slate-50 p-3 text-xs leading-5 text-gray-500">
                현재는 검토용 샘플 화면입니다. 상담 신청 내용은 실제로 전송되거나 저장되지
                않으며, 빠른 문의는 대표전화로 연락해 주세요.
              </p>
            )}
            <ConsultationForm prefillInquiryType={prefillInquiryType} />
          </div>
        </div>
      </div>
    </section>
  );
}
