import { OFFICE_LOCATION, SITE_CONFIG } from "@/lib/constants";

// 홈 Footer 직전에 배치하는 "오시는 길" 섹션입니다. 지도는 API 키가 필요
// 없는 Google 지도 embed(output=embed) 방식을 사용하므로 소스코드에
// 노출되는 키가 없습니다. "지도에서 보기"·"길찾기" 링크도 동일한 좌표
// 기반의 키 없는 공개 URL을 사용합니다.
//
// PC(sm 이상)에서는 사무소 정보와 지도를 2열로 배치하고, 모바일에서는
// 1열로 쌓이며 지도 폭이 100%가 되도록 합니다(overflow 방지를 위해 별도
// 고정 폭을 주지 않습니다).
export default function DirectionsSection() {
  const { lat, lng } = OFFICE_LOCATION;
  const mapQuery = `${lat},${lng}`;
  const embedSrc = `https://maps.google.com/maps?q=${mapQuery}&z=16&output=embed`;
  const viewOnMapHref = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">오시는 길</h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
          <div>
            <dl className="flex flex-col gap-3 text-sm text-gray-600 sm:text-base">
              {SITE_CONFIG.officeName && (
                <div className="flex gap-2">
                  <dt className="flex-shrink-0 font-medium text-gray-900">사무소명</dt>
                  <dd>{SITE_CONFIG.officeName}</dd>
                </div>
              )}
              {SITE_CONFIG.address && (
                <div className="flex gap-2">
                  <dt className="flex-shrink-0 font-medium text-gray-900">주소</dt>
                  <dd>{SITE_CONFIG.address}</dd>
                </div>
              )}
              {SITE_CONFIG.representativePhone && (
                <div className="flex gap-2">
                  <dt className="flex-shrink-0 font-medium text-gray-900">대표전화</dt>
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
                  <dt className="flex-shrink-0 font-medium text-gray-900">팩스</dt>
                  <dd>{SITE_CONFIG.faxNumber}</dd>
                </div>
              )}
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={viewOnMapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                지도에서 보기
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-brand-dark"
              >
                길찾기
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full max-w-full overflow-hidden rounded-sm border border-gray-200 sm:aspect-auto sm:h-full sm:min-h-[280px]">
            <iframe
              src={embedSrc}
              title="법무사 박칠선 사무소 위치 지도"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
