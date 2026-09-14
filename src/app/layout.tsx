import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HEADER_BRAND_NAME, SITE_CONFIG, SITE_MODE } from "@/lib/constants";
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
// `title: "페이지 이름"`만 지정해도 자동으로 "페이지 이름 | 사무소명" 형태로 완성됩니다.
//
// siteMode="recovery": 기존 개인회생·개인파산 특화 title/description을
// 한 글자도 바꾸지 않고 그대로 사용합니다(SITE_CONFIG.siteName 기준 유지).
// siteMode="full": 종합형 DEMO 사이트임을 드러내는 중립적인 title/description을
// 사용합니다(개인회생 특화 문구로 고정되어 있던 문제를 해소). template도
// Header 로고와 동일한 HEADER_BRAND_NAME을 사용해, 하위 페이지 탭 제목의
// " | 사무소명" 부분이 Header에 보이는 브랜드명과 일치하도록 합니다.
// robots(index/follow)는 두 모드 모두 동일하게 유지합니다.
const title =
  SITE_MODE === "recovery"
    ? {
        default: `${SITE_CONFIG.siteName} | 개인회생·개인파산 상담`,
        template: `%s | ${SITE_CONFIG.siteName}`,
      }
    : {
        default: "법무사사무소 홈페이지 DEMO",
        template: `%s | ${HEADER_BRAND_NAME}`,
      };

const description =
  SITE_MODE === "recovery"
    ? "채무, 소득, 재산 등 현재 상황을 확인하여 개인회생·개인파산 절차 검토를 안내하는 법률상담 사이트입니다."
    : "개인회생·개인파산, 민사, 강제집행, 가사·상속, 부동산등기, 법인등기 등 주요 업무를 안내하는 법무사사무소 홈페이지 DEMO입니다.";

export const metadata: Metadata = {
  title,
  description,
  // 제안용 DEMO 단계에서는 링크를 받은 사람은 바로 열어볼 수 있게 하되,
  // 검색결과에는 노출되지 않도록 모든 페이지에 noindex/nofollow를 적용합니다.
  // robots.txt로 크롤링 자체를 막으면 검색엔진이 이 meta 태그를 읽지 못해
  // 오히려 색인이 남을 수 있으므로, 크롤링은 허용하고 meta로 색인만 막습니다.
  // 실제 사무소 운영사이트로 전환할 때는 아래 robots 항목만 제거하면 됩니다.
  robots: {
    index: false,
    follow: false,
  },
  // SNS/카카오톡 등에 URL을 공유했을 때 빈 미리보기 카드가 뜨지 않도록
  // 텍스트 기반 기본 metadata만 추가합니다. title.default·description·
  // HEADER_BRAND_NAME은 위에서 이미 SITE_MODE 기준으로 계산된 값을 그대로
  // 재사용하므로 브랜드 문자열을 새로 중복 작성하지 않습니다. 실제
  // 도메인·사무소 정보가 아직 없는 DEMO 단계이므로 images/url/metadataBase는
  // 이번 단계에서 추가하지 않습니다(실제 사무소 정보 확정 후 처리).
  openGraph: {
    type: "website",
    locale: "ko_KR",
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
