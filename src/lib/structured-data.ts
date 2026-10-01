import { OFFICE_LOCATION, SITE_CONFIG, SITE_URL } from "@/lib/constants";

// 이 파일은 JSON-LD(Schema.org) 구조화데이터를 만드는 순수 helper
// 함수만 모아둡니다. 여기서 사용하는 사실(명칭·주소·전화·팩스·이메일·
// 사업자등록번호·좌표)은 전부 src/lib/constants.ts의 SITE_CONFIG/
// OFFICE_LOCATION에서 그대로 가져온 값이며, 이미 Footer·오시는 길
// 섹션 등 실제 화면에 노출되는 값과 동일합니다. 영업시간(SNS 등은
// 확정되지 않아 SITE_CONFIG에 null로 비어 있으므로 이 파일에서도
// 임의로 채우지 않고 생략합니다.
//
// 모든 페이지가 같은 사무소(LegalService)·같은 사이트(WebSite)를
// 가리킬 때 동일한 @id를 재사용하도록 두 id를 상수로 고정합니다.
export const LEGAL_SERVICE_ID = `${SITE_URL}/#legal-service`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// JSON.stringify 결과를 <script type="application/ld+json">에
// dangerouslySetInnerHTML로 넣을 때, 문자열 값에 "</script>"가 섞여
// 있으면 스크립트가 조기 종료될 수 있습니다. "<"를 유니코드 이스케이프로
// 바꿔 이 문제를 원천 차단합니다(데이터 자체는 전혀 바뀌지 않음).
export function toSafeJsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

// 사무소 entity입니다(LegalService). 홈페이지에서 한 번만 전체 속성과
// 함께 정의하고, 다른 페이지는 이 @id만 참조합니다(동일 LegalService
// 객체를 페이지마다 복붙하지 않음).
export function getLegalServiceJsonLd() {
  return {
    "@type": "LegalService",
    "@id": LEGAL_SERVICE_ID,
    name: SITE_CONFIG.officeName ?? undefined,
    url: SITE_URL,
    telephone: SITE_CONFIG.representativePhone ?? undefined,
    faxNumber: SITE_CONFIG.faxNumber ?? undefined,
    email: SITE_CONFIG.contactEmail ?? undefined,
    taxID: SITE_CONFIG.businessRegistrationNumber ?? undefined,
    address: SITE_CONFIG.address
      ? {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address,
          addressCountry: "KR",
        }
      : undefined,
    geo: {
      "@type": "GeoCoordinates",
      latitude: OFFICE_LOCATION.lat,
      longitude: OFFICE_LOCATION.lng,
    },
    // 영업시간(openingHoursSpecification)·sameAs(SNS)는 SITE_CONFIG에
    // 확정된 값이 없어(null) 넣지 않습니다. logo도 현재 저장소에
    // 실제 로고 이미지 자산이 없어(파비콘만 존재) 넣지 않습니다.
  };
}

// 사이트 전체를 나타내는 WebSite entity입니다. 실제 site search
// endpoint(/search?q=)가 없으므로 potentialAction/SearchAction은
// 추가하지 않습니다.
export function getWebSiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_CONFIG.officeName ?? undefined,
    inLanguage: "ko-KR",
    publisher: { "@id": LEGAL_SERVICE_ID },
  };
}

// 홈페이지 전용: WebSite + LegalService를 하나의 @graph로 묶습니다.
export function getHomeJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [getWebSiteJsonLd(), getLegalServiceJsonLd()],
  };
}

export type BreadcrumbEntry = {
  name: string;
  path: string;
};

// 실제 라우트 계층만 사용합니다(존재하지 않는 중간 카테고리 URL을
// breadcrumb 중간 항목으로 만들지 않습니다 — 예: "민사·집행"은 Header
// 드롭다운 라벨일 뿐 실제 페이지가 아니므로 breadcrumb에 넣지 않음).
export function getBreadcrumbJsonLd(entries: BreadcrumbEntry[], currentPath: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(currentPath)}#breadcrumb`,
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: absoluteUrl(entry.path),
    })),
  };
}

type WebPageInput = {
  name: string;
  description: string;
  path: string;
  dateModified?: string;
  lastReviewed?: string;
};

// legal-info 40편, privacy-policy 등 일반 정보성 페이지에 사용하는
// WebPage입니다. datePublished는 넣지 않습니다(신뢰할 수 있는
// publishedAt 데이터가 없어 asOfDate를 전용하지 않기로 한 원칙을
// 그대로 따름). author도 넣지 않습니다(특정 글의 실제 작성자·감수자가
// 코드/화면에 명시되어 있지 않음).
//
// 참고: Schema.org의 lastReviewed는 공식적으로는 MedicalWebPage에
// domain이 걸려 있는 속성입니다. 이 프로젝트는 법률정보 글에도 동일한
// 의미(마지막 법률검토일)로 그대로 사용하기로 했습니다 — 구문상
// 유효한 JSON-LD이고 Google도 이런 확장 속성을 거부하지 않지만,
// 엄격한 Schema.org vocabulary 기준으로는 WebPage의 표준 속성이
// 아니라는 점을 밝혀둡니다.
export function getWebPageJsonLd({ name, description, path, dateModified, lastReviewed }: WebPageInput) {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "ko-KR",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": LEGAL_SERVICE_ID },
    ...(dateModified ? { dateModified } : {}),
    ...(lastReviewed ? { lastReviewed } : {}),
  };
}

// /legal-info, /services처럼 여러 항목을 모아 보여주는 목록 페이지에
// 사용합니다. 전체 article/서비스를 ItemList로 다시 나열하지는
// 않습니다(sitemap·레지스트리와 데이터를 이중관리하지 않기 위함).
export function getCollectionPageJsonLd({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@type": "CollectionPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "ko-KR",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": LEGAL_SERVICE_ID },
  };
}

// 9개 업무 소개 페이지(부동산등기·법인등기·민사소송 등) 전용입니다.
// serviceType은 실제 페이지 제목을 그대로 사용합니다(새 분류를
// 만들지 않음).
export function getServiceJsonLd({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": LEGAL_SERVICE_ID },
  };
}

// legal-info 아티클 40편 전용: WebPage + BreadcrumbList를 하나의
// @graph로 묶습니다. 각 글의 META(href/title/seoDescription/
// updatedAt/legalReviewedAt)를 그대로 사용하고, 날짜 값은 이미
// 구축된 updatedAt/legalReviewedAt 그대로만 사용합니다(asOfDate를
// 끌어오거나 재계산하지 않음).
export function getLegalInfoArticleJsonLd(meta: {
  href: string;
  title: string;
  seoDescription: string;
  updatedAt: string;
  legalReviewedAt: string;
}) {
  const breadcrumb = getBreadcrumbJsonLd(
    [
      { name: "홈", path: "/" },
      { name: "법률정보", path: "/legal-info" },
      { name: meta.title, path: meta.href },
    ],
    meta.href,
  );
  const webPage = getWebPageJsonLd({
    name: meta.title,
    description: meta.seoDescription,
    path: meta.href,
    dateModified: meta.updatedAt,
    lastReviewed: meta.legalReviewedAt,
  });
  return {
    "@context": "https://schema.org",
    "@graph": [webPage, breadcrumb],
  };
}

// 9개 업무 페이지 전용: Service + BreadcrumbList.
export function getServicePageJsonLd({ name, description, path }: { name: string; description: string; path: string }) {
  const breadcrumb = getBreadcrumbJsonLd(
    [
      { name: "홈", path: "/" },
      { name, path },
    ],
    path,
  );
  return {
    "@context": "https://schema.org",
    "@graph": [getServiceJsonLd({ name, description, path }), breadcrumb],
  };
}

// /legal-info, /services처럼 2단계(홈 > 현재 페이지) breadcrumb만
// 필요한 CollectionPage 전용.
export function getCollectionPageWithBreadcrumbJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const breadcrumb = getBreadcrumbJsonLd(
    [
      { name: "홈", path: "/" },
      { name, path },
    ],
    path,
  );
  return {
    "@context": "https://schema.org",
    "@graph": [getCollectionPageJsonLd({ name, description, path }), breadcrumb],
  };
}

// privacy-policy처럼 일반 WebPage + 2단계 breadcrumb만 필요한 페이지
// 전용.
export function getSimpleWebPageJsonLd({ name, description, path }: { name: string; description: string; path: string }) {
  const breadcrumb = getBreadcrumbJsonLd(
    [
      { name: "홈", path: "/" },
      { name, path },
    ],
    path,
  );
  return {
    "@context": "https://schema.org",
    "@graph": [getWebPageJsonLd({ name, description, path }), breadcrumb],
  };
}
