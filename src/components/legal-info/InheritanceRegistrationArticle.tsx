import Link from "next/link";
import ProcessSection from "@/components/ProcessSection";
import { SITE_CONFIG } from "@/lib/constants";
import {
  INHERITANCE_REGISTRATION_INTRO_PARAGRAPHS,
  INHERITANCE_REGISTRATION_META,
  INHERITANCE_REGISTRATION_NOTICE_PARAGRAPHS,
  INHERITANCE_REGISTRATION_PROCESS_DESCRIPTION,
  INHERITANCE_REGISTRATION_PROCESS_HEADING,
  INHERITANCE_REGISTRATION_PROCESS_STEPS,
  INHERITANCE_REGISTRATION_REFERENCES,
  INHERITANCE_REGISTRATION_SECTIONS,
  type ArticleBlock,
  type ArticleSection,
} from "@/lib/legal-info-inheritance-registration";

// 본문 폭은 다른 페이지의 max-w-6xl 컨테이너보다 좁은 max-w-3xl로 감싸
// 한 줄 길이를 읽기 편하게 유지합니다("블로그"보다는 사무소 안내자료에
// 가까운 톤). 목록 항목의 점 bullet은 RegistrationDocumentsSection에서
// 이미 쓰고 있는 것과 동일한 패턴(작은 회색 점)을 그대로 재사용합니다.
function ArticleBlockView({ block }: { block: ArticleBlock }) {
  if (block.type === "p") {
    return <p className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">{block.text}</p>;
  }
  if (block.type === "subheading") {
    return <p className="text-sm font-semibold text-gray-900 sm:text-base">{block.text}</p>;
  }
  return (
    <ul className="flex flex-col gap-2">
      {block.items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm leading-6 text-gray-700 sm:text-base">
          <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ArticleSectionView({ section }: { section: ArticleSection }) {
  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">{section.heading}</h2>
      <div className="mt-4 flex flex-col gap-4">
        {section.blocks.map((block, index) => (
          <ArticleBlockView key={index} block={block} />
        ))}
      </div>
    </section>
  );
}

// 상속등기 진행 절차(7번) 앞뒤로 섹션을 나눕니다 — ProcessSection은 다른
// 업무 상세페이지와 동일하게 자체 폭(max-w-6xl)의 독립 섹션이라, 본문의
// max-w-3xl 컨테이너 밖에 그대로 재사용합니다(디자인을 새로 만들지
// 않음).
const SECTIONS_BEFORE_PROCESS = INHERITANCE_REGISTRATION_SECTIONS.slice(0, 6);
const SECTIONS_AFTER_PROCESS = INHERITANCE_REGISTRATION_SECTIONS.slice(6);

export default function InheritanceRegistrationArticle() {
  const phone = SITE_CONFIG.representativePhone;
  const email = SITE_CONFIG.contactEmail;

  return (
    <>
      <section className="border-b border-gray-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium text-gray-500">{INHERITANCE_REGISTRATION_META.category}</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight break-keep">
            {INHERITANCE_REGISTRATION_META.title}
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            법률정보 기준일: {INHERITANCE_REGISTRATION_META.asOfDate}
          </p>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col gap-16">
            <div className="flex flex-col gap-4">
              {INHERITANCE_REGISTRATION_INTRO_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph} className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
                  {paragraph}
                </p>
              ))}
            </div>

            {SECTIONS_BEFORE_PROCESS.map((section) => (
              <ArticleSectionView key={section.heading} section={section} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        steps={INHERITANCE_REGISTRATION_PROCESS_STEPS}
        heading={INHERITANCE_REGISTRATION_PROCESS_HEADING}
        description={INHERITANCE_REGISTRATION_PROCESS_DESCRIPTION}
        variant="timeline"
      />

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col gap-16">
            {SECTIONS_AFTER_PROCESS.map((section) => (
              <ArticleSectionView key={section.heading} section={section} />
            ))}

            <div className="rounded-sm bg-slate-50 p-6">
              <div className="flex flex-col gap-3">
                {INHERITANCE_REGISTRATION_NOTICE_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-6 text-gray-600 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-500">
                법률정보 기준일: {INHERITANCE_REGISTRATION_META.asOfDate}
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-900 sm:text-lg">관련 근거</h2>
              <dl className="mt-4 flex flex-col gap-3 border-t border-gray-200 pt-4">
                {INHERITANCE_REGISTRATION_REFERENCES.map((reference) => (
                  <div key={reference.source}>
                    <dt className="text-sm font-medium text-gray-900 sm:text-base">{reference.source}</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-600">{reference.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border-t border-gray-200 pt-10">
              <h2 className="text-base font-semibold text-gray-900 sm:text-lg">관련 업무</h2>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <Link
                    href="/registration/real-estate"
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark sm:text-base"
                  >
                    부동산등기
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/family/inheritance"
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark sm:text-base"
                  >
                    가사·상속
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal-info"
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark sm:text-base"
                  >
                    법률정보 목록으로
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              </ul>

              {(phone || email) && (
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <p className="text-sm leading-6 text-gray-600 sm:text-base">
                    추가로 궁금한 사항은 대표전화 또는 이메일로 문의하실 수 있습니다.
                  </p>
                  <div className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:gap-6 sm:text-base">
                    {phone && (
                      <a
                        href={`tel:${phone.replace(/-/g, "")}`}
                        className="font-medium text-gray-700 underline-offset-4 transition-colors hover:text-brand hover:underline"
                      >
                        {phone}
                      </a>
                    )}
                    {email && (
                      <a
                        href={`mailto:${email}`}
                        className="font-medium text-gray-700 underline-offset-4 transition-colors hover:text-brand hover:underline"
                      >
                        {email}
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
