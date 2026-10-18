import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { HEADER_BRAND_NAME, getPrivacyPolicySections } from "@/lib/constants";
import { isConsultationEmailConfigured } from "@/lib/consultation-email";
import { getSimpleWebPageJsonLd } from "@/lib/structured-data";

const title = "개인정보처리방침";
const description = "법무사 박칠선 사무소 홈페이지의 개인정보 수집·이용 안내와 개인정보처리방침을 확인할 수 있습니다.";
const canonicalPath = "/privacy-policy";
const ogTitle = `${title} | ${HEADER_BRAND_NAME}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: canonicalPath,
    title: ogTitle,
    description,
    siteName: HEADER_BRAND_NAME,
  },
  twitter: {
    card: "summary",
    title: ogTitle,
    description,
  },
};

export default function PrivacyPolicyPage() {
  const emailConfigured = isConsultationEmailConfigured();
  return (
    <>
      <JsonLd data={getSimpleWebPageJsonLd({ name: title, description, path: canonicalPath })} />
      <Header />
      <main id="main-content" className="flex-1">
        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              개인정보처리방침
            </h1>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              {HEADER_BRAND_NAME} 홈페이지는 상담 신청 과정에서 수집하는 개인정보의
              처리방침을 다음과 같이 안내합니다.
            </p>

            <p className="mt-6 bg-slate-50 p-4 text-sm leading-6 text-gray-600">
              {emailConfigured
                ? "홈페이지 상담 신청 기능에 입력하신 정보는 상담 접수 및 연락을 위해 사무실 상담 이메일로 전송됩니다."
                : "현재 상담은 대표전화 또는 이메일로 접수합니다. 홈페이지에서 상담 내용을 입력해 전송하는 폼은 제공하지 않습니다."}
            </p>

            <dl className="mt-10 flex flex-col gap-8">
              {getPrivacyPolicySections(emailConfigured).map((section) => (
                <div key={section.title}>
                  <dt className="text-base font-semibold text-gray-900">{section.title}</dt>
                  <dd className="mt-2 text-sm leading-6 text-gray-600">{section.content}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-10 text-xs text-gray-500">
              이 개인정보처리방침은 2026년 10월 7일에 공고되었으며, 2026년 10월 7일부터 시행됩니다.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
