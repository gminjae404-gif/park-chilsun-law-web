import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HEADER_BRAND_NAME, PRIVACY_POLICY_SECTIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "법무사 박칠선 사무소 홈페이지의 개인정보 수집·이용 안내와 개인정보처리방침을 확인할 수 있습니다.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              개인정보처리방침
            </h1>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              {HEADER_BRAND_NAME}는 법무사사무소 홈페이지 제안용 샘플(DEMO)이며, 특정
              사무소의 실제 정보는 아직 적용되지 않았습니다. 이 페이지는 상담 신청 과정에서
              수집하는 개인정보의 처리 방침 예시를 안내합니다.
            </p>

            <p className="mt-6 bg-slate-50 p-4 text-sm leading-6 text-gray-600">
              ※ 아래 항목 중 &ldquo;운영정책 확정 후 반영 예정&rdquo;으로 표시된 부분은 아직
              구체적인 정책이 확정되지 않아 임의로 작성하지 않은 항목입니다. 정책이 확정되는
              대로 해당 내용으로 교체됩니다. 또한 현재 홈페이지의 상담 신청 기능은 준비
              중이며, 입력하신 정보를 실제로 전송하거나 저장하지 않습니다.
            </p>

            <dl className="mt-10 flex flex-col gap-8">
              {PRIVACY_POLICY_SECTIONS.map((section) => (
                <div key={section.title}>
                  <dt className="text-base font-semibold text-gray-900">{section.title}</dt>
                  <dd className="mt-2 text-sm leading-6 text-gray-600">{section.content}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-10 text-xs text-gray-500">
              공고일자·시행일자는 운영정책 확정 후 반영 예정입니다.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
