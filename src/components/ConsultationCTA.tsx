import Image from "next/image";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import { SITE_CONFIG } from "@/lib/constants";
import type { InquiryType } from "@/types/consultation";

type ConsultationCTAProps = {
  prefillInquiryType?: InquiryType | null;
  // page.tsx(Server Component)에서 SMTP/수신 이메일 환경변수 설정 여부를
  // 미리 확인해 내려주는 값입니다. ConsultationForm으로 그대로 전달합니다.
  emailConfigured: boolean;
};

// consultation.png는 얼굴보다 서류·펜·노트북 등 "함께 검토하는 과정"이
// 보이도록 상단이 이미 크롭된 사진입니다. 데스크톱에서는 이 이미지와 상담
// 폼을 2단으로 나란히 배치하고, 모바일에서는 이미지를 폼 위에 1열로
// 둡니다(그리드의 자연스러운 소스 순서를 그대로 사용).
export default function ConsultationCTA({ prefillInquiryType, emailConfigured }: ConsultationCTAProps) {
  const phone = SITE_CONFIG.representativePhone;
  const email = SITE_CONFIG.contactEmail;
  const kakaoUrl = SITE_CONFIG.kakaoChannelUrl;

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

        {/* 전화상담 · 카카오톡 상담(연결 전에는 숨김) · 홈페이지 상담신청
            (이메일 발송 설정이 끝난 뒤에만 노출), 상담 방법을 한눈에
            보여줍니다. 카카오톡은 실제 채널 URL이 연결되기 전까지 작동하지
            않는 가짜 버튼을 두지 않고 버튼 자체를 숨깁니다(kakaoUrl이
            null이면 렌더링하지 않음). */}
        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-3">
          {phone && (
            <a
              href={`tel:${phone.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
            >
              전화상담
            </a>
          )}
          {kakaoUrl && (
            <a
              href={kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
            >
              카카오톡 상담
            </a>
          )}
          {emailConfigured && (
            <a
              href="#consultation-form-start"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
            >
              홈페이지 상담신청
            </a>
          )}
        </div>

        {emailConfigured ? (
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
              <ConsultationForm prefillInquiryType={prefillInquiryType} emailConfigured={emailConfigured} />
            </div>
          </div>
        ) : (
          // 홈페이지 상담신청 폼은 이메일 발송 환경변수가 설정되기 전까지
          // 실제 접수 기능이 없으므로 노출하지 않습니다. 대신 지금 바로
          // 작동하는 전화·이메일 연락 수단을 안내합니다. 환경변수가
          // 설정되면(emailConfigured=true) 이 블록 대신 위 폼이 자동으로
          // 다시 노출됩니다(별도 코드 수정 불필요).
          <div className="mx-auto mt-10 max-w-xl rounded-sm border border-white/30 bg-white/10 p-6 text-center sm:p-8">
            <p className="text-sm leading-6 text-slate-100 sm:text-base">
              지금은 대표전화 또는 이메일로 상담을 접수하고 있습니다.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {phone && (
                <a
                  href={`tel:${phone.replace(/-/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
                >
                  {phone}
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
                >
                  {email}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
