import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

// 사무소명·담당 법무사·대표전화·팩스·주소·사업자등록번호는 이 사이트가
// 적용된 사무소의 실제 정보입니다. 값이 없는 항목(예: 아직 확정되지 않은
// 영업시간, 개설되지 않은 카카오톡 채널)은 화면에 표시하지 않습니다.
// isPreviewSite는 "정보가 예시"라는 의미가 아니라 "상담 신청이 아직 실제로
// 접수되지 않는다"는 의미만 담당하므로, 위 사무소 정보에는 영향을 주지
// 않습니다(예시 표기를 붙이지 않습니다).
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-3 text-sm text-gray-500 sm:grid-cols-2">
          {SITE_CONFIG.officeName && (
            <div className="flex gap-2">
              <dt className="flex-shrink-0 font-medium text-gray-700">사무소명</dt>
              <dd>{SITE_CONFIG.officeName}</dd>
            </div>
          )}
          {SITE_CONFIG.judicialScrivenerName && (
            <div className="flex gap-2">
              <dt className="flex-shrink-0 font-medium text-gray-700">담당 법무사</dt>
              <dd>{SITE_CONFIG.judicialScrivenerName}</dd>
            </div>
          )}
          {SITE_CONFIG.representativePhone && (
            <div className="flex gap-2">
              <dt className="flex-shrink-0 font-medium text-gray-700">대표전화</dt>
              <dd>
                <a
                  href={`tel:${SITE_CONFIG.representativePhone.replace(/-/g, "")}`}
                  className="underline-offset-4 transition-colors hover:text-brand hover:underline"
                >
                  {SITE_CONFIG.representativePhone}
                </a>
              </dd>
            </div>
          )}
          {SITE_CONFIG.faxNumber && (
            <div className="flex gap-2">
              <dt className="flex-shrink-0 font-medium text-gray-700">팩스</dt>
              <dd>{SITE_CONFIG.faxNumber}</dd>
            </div>
          )}
          {SITE_CONFIG.contactEmail && (
            <div className="flex gap-2">
              <dt className="flex-shrink-0 font-medium text-gray-700">이메일</dt>
              <dd>
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="underline-offset-4 transition-colors hover:text-brand hover:underline"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
              </dd>
            </div>
          )}
          {SITE_CONFIG.address && (
            <div className="flex gap-2">
              <dt className="flex-shrink-0 font-medium text-gray-700">주소</dt>
              <dd>{SITE_CONFIG.address}</dd>
            </div>
          )}
          {SITE_CONFIG.businessRegistrationNumber && (
            <div className="flex gap-2">
              <dt className="flex-shrink-0 font-medium text-gray-700">사업자등록번호</dt>
              <dd>{SITE_CONFIG.businessRegistrationNumber}</dd>
            </div>
          )}
          {SITE_CONFIG.businessDays && SITE_CONFIG.businessHours && (
            <div className="flex gap-2">
              <dt className="flex-shrink-0 font-medium text-gray-700">운영시간</dt>
              <dd>
                {SITE_CONFIG.businessDays} {SITE_CONFIG.businessHours}
                {SITE_CONFIG.closedDays && ` · ${SITE_CONFIG.closedDays}`}
              </dd>
            </div>
          )}
          {SITE_CONFIG.kakaoChannelUrl && (
            <div className="flex gap-2">
              <dt className="flex-shrink-0 font-medium text-gray-700">카카오톡 상담</dt>
              <dd>
                <a
                  href={SITE_CONFIG.kakaoChannelUrl}
                  className="underline underline-offset-4 transition-colors hover:text-brand active:text-brand-dark"
                >
                  채널 바로가기
                </a>
              </dd>
            </div>
          )}
        </dl>

        <div className="mt-8 flex flex-col gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          {SITE_CONFIG.isPreviewSite && (
            <p>
              본 사이트는 검토용 샘플 페이지입니다. 온라인 상담 신청 기능은 아직 실제로 연결되어
              있지 않습니다.
            </p>
          )}
          <div className="flex flex-shrink-0 flex-wrap gap-x-4 gap-y-2">
            <Link
              href="/legal-info"
              className="rounded-sm font-medium text-gray-500 underline-offset-4 transition-colors hover:text-brand hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand active:text-brand-dark"
            >
              법률정보
            </Link>
            <Link
              href="/privacy-policy"
              className="rounded-sm font-medium text-gray-500 underline-offset-4 transition-colors hover:text-brand hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand active:text-brand-dark"
            >
              개인정보처리방침
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
