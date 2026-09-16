import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HEADER_BRAND_NAME, SITE_URL } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// title.template을 지정해 두면, 이후 페이지가 추가될 때 각 페이지에서는
// `title: "페이지 이름"`만 지정해도 자동으로 "페이지 이름 | 사무소명" 형태로
// 완성됩니다. template은 Header 로고와 동일한 HEADER_BRAND_NAME을 사용해,
// 하위 페이지 탭 제목의 " | 사무소명" 부분이 Header에 보이는 브랜드명과
// 일치하도록 합니다. default(홈 title)는 "단양"이라는 지역명을 포함해
// 지역 검색에서 사무소를 찾을 수 있도록 하되, "전문"·"최고"·"1위" 같은
// 근거 없는 표현은 사용하지 않습니다.
const title = {
  default: "단양 법무사 | 법무사 박칠선 사무소",
  template: `%s | ${HEADER_BRAND_NAME}`,
};

const description =
  "충청북도 단양군 소재 법무사 박칠선 사무소입니다. 부동산등기, 법인등기, 민사소송, 강제집행, 가사·상속 등 주요 업무 절차와 준비자료를 안내합니다.";

// 네이버 서치어드바이저 등에서 사이트 소유를 확인할 때 필요한 HTML meta
// verification 값입니다. 아직 실제 값이 없으므로 임의로 만들지 않고,
// 환경변수(NAVER_SITE_VERIFICATION)가 설정된 경우에만 해당 meta 태그를
// 추가합니다 — 값을 등록하면 재배포 시 자동으로 <meta name=
// "naver-site-verification" content="..."> 태그가 생성되고, 값이 없으면
// 이 필드 자체가 렌더링되지 않습니다.
const naverSiteVerification = process.env.NAVER_SITE_VERIFICATION;

export const metadata: Metadata = {
  // canonical·OpenGraph url 등 상대경로를 이 주소 기준으로 해석합니다.
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  // 정식 오픈에 따라 검색엔진 색인·링크 추적을 허용합니다. robots.txt(전체
  // 공개 페이지 수집 허용)와 함께 작동합니다.
  robots: {
    index: true,
    follow: true,
  },
  ...(naverSiteVerification
    ? { verification: { other: { "naver-site-verification": naverSiteVerification } } }
    : {}),
  // SNS/카카오톡 등에 URL을 공유했을 때 빈 미리보기 카드가 뜨지 않도록
  // 텍스트 기반 기본 metadata를 추가합니다. 대표 이미지는 아직 없으므로
  // og:image는 이번 단계에서 추가하지 않습니다(실제 대표 이미지 준비 후
  // 처리).
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    title: title.default,
    description,
    siteName: HEADER_BRAND_NAME,
  },
  twitter: {
    card: "summary",
    title: title.default,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-gray-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          본문 바로가기
        </a>
        {children}
      </body>
    </html>
  );
}
