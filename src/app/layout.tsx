import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HEADER_BRAND_NAME } from "@/lib/constants";
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
// 일치하도록 합니다.
const title = {
  default: HEADER_BRAND_NAME,
  template: `%s | ${HEADER_BRAND_NAME}`,
};

const description =
  "부동산등기를 중심으로 법인등기, 민사, 강제집행, 가사·상속 등 주요 업무를 안내하는 법무사 박칠선 사무소 홈페이지입니다.";

export const metadata: Metadata = {
  title,
  description,
  // 검토용 샘플 단계에서는 링크를 받은 사람은 바로 열어볼 수 있게 하되,
  // 검색결과에는 노출되지 않도록 모든 페이지에 noindex/nofollow를 적용합니다.
  // robots.txt로 크롤링 자체를 막으면 검색엔진이 이 meta 태그를 읽지 못해
  // 오히려 색인이 남을 수 있으므로, 크롤링은 허용하고 meta로 색인만 막습니다.
  // 실제 운영사이트로 전환할 때는 아래 robots 항목만 제거하면 됩니다.
  robots: {
    index: false,
    follow: false,
  },
  // SNS/카카오톡 등에 URL을 공유했을 때 빈 미리보기 카드가 뜨지 않도록
  // 텍스트 기반 기본 metadata만 추가합니다. 실제 도메인이 아직 없으므로
  // images/url/metadataBase는 이번 단계에서 추가하지 않습니다(도메인 확정
  // 후 처리).
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
