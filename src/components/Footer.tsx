import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

// 사무소명·담당 법무사·대표전화·주소·사업자등록번호는 실제 사무소 정보가
// 확정되기 전까지 SITE_CONFIG에 DEMO 예시값이 채워져 있습니다(카카오톡
// 채널만 아직 null). 값이 없는 항목은 화면에 표시하지 않고, 실제 사무소에
// 적용할 때 SITE_CONFIG 값만 채우면 자동으로 노출됩니다. isDemo=true인
// 동안에는 대표전화·사업자등록번호 뒤에 "(예시)"가 함께 표시되어 예시
// 정보임을 분명히 하고, isDemo=false가 되면 "(예시)" 표기는 사라집니다.
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
                {SITE_CONFIG.representativePhone}
                {SITE_CONFIG.isDemo && " (예시)"}
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
              <dd>
                {SITE_CONFIG.businessRegistrationNumber}
                {SITE_CONFIG.isDemo && " (예시)"}
              </dd>
            </div>
          )}
          <div className="flex gap-2">
            <dt className="flex-shrink-0 font-medium text-gray-700">
              운영시간{SITE_CONFIG.isDemo && "(샘플)"}
            </dt>
            <dd>
              {SITE_CONFIG.businessDays} {SITE_CONFIG.businessHours} · {SITE_CONFIG.closedDays}
            </dd>
          </div>
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
          {SITE_CONFIG.isDemo ? (
            <p>
              본 사이트는 법무사사무소 홈페이지 제안용 샘플입니다. 위 사무소명·대표전화·주소·
              사업자등록번호는 화면 구성 확인용 예시 정보이며 실제 사무소 정보가 아니고,
              운영시간도 화면 구성 확인용 샘플 값입니다. 실제 적용 시 해당 사무소의 정보로
              교체됩니다.
            </p>
          ) : (
            <p>상호명은 확정 전 임시 명칭이며, 그 외 사무소 정보는 확정 후 순차적으로 업데이트될 예정입니다.</p>
          )}
          <Link
            href="/privacy-policy"
            className="flex-shrink-0 rounded-sm font-medium text-gray-500 underline-offset-4 transition-colors hover:text-brand hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand active:text-brand-dark"
          >
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  );
}
