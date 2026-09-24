import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 이 파일이 없으면 Next.js 기본 not-found 경계가 사용되는데, 이 경우
// 루트 layout의 홈페이지 metadata(title/description/robots/canonical/
// openGraph/twitter)가 그대로 상속되어 기본 not-found의 자체 title·
// noindex와 함께 한 문서에 섞여 나옵니다(중복 title, robots 충돌,
// 홈페이지 canonical·OG·Twitter가 존재하지 않는 URL에 잘못 붙는 문제).
// alternates·openGraph·twitter를 여기서 명시적으로 비워 상속을 끊습니다.
//
// robots: Next.js는 404 상태코드 응답에 <meta name="robots"
// content="noindex" />를 항상 자동으로 추가합니다(이 페이지에 별도로
// robots를 지정하지 않아도 발생하며, 실제 렌더링 결과로 확인함). 이
// 자동 삽입 자체는 코드로 끌 수 없으므로, robots를 지정하지 않으면
// 대신 루트 layout의 { index: true, follow: true }가 상속되어 자동
// noindex와 상반된 두 번째 robots 태그가 남습니다. 따라서 이 페이지도
// 명시적으로 noindex를 지정해 두 robots 태그가 서로 다른 값을 말하지
// 않도록(충돌 없이 둘 다 noindex를 가리키도록) 맞춥니다.
export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다",
  description: "요청하신 페이지를 찾을 수 없습니다. 주소를 다시 확인해 주세요.",
  robots: { index: false, follow: false },
  alternates: {},
  openGraph: {},
  twitter: {},
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <p className="text-sm font-medium text-gray-500">404</p>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              페이지를 찾을 수 없습니다
            </h1>
            <p className="text-sm leading-6 text-gray-600 sm:text-base">
              요청하신 페이지의 주소가 변경되었거나 존재하지 않습니다. 주소를 다시 확인해 주세요.
            </p>
            <Link
              href="/"
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-brand-dark"
            >
              홈페이지로 이동
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
