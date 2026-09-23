import Link from "next/link";
import ProcessSection from "@/components/ProcessSection";
import { SITE_CONFIG } from "@/lib/constants";
import type { ProcessStep } from "@/lib/constants";
import type { ArticleBlock, ArticleSection, LegalReference } from "@/lib/legal-info-article-types";
import type { ReactNode } from "react";

// /legal-info 하위 법률정보 상세글(inheritance-registration,
// real-estate-sale-registration 등)이 공통으로 사용하는 레이아웃입니다.
// InheritanceRegistrationArticle에서 처음 만들어진 폭(max-w-3xl 본문 +
// max-w-6xl ProcessSection)·타이포그래피·관련업무 영역·CTA 패턴을 그대로
// 옮겨, 글이 늘어나도 같은 디자인을 재사용하고 새 디자인을 만들지
// 않습니다. 실제 문구는 각 글 전용 데이터 파일에서 props로만 전달받고,
// 이 컴포넌트 자체는 어떤 글의 문구도 직접 담지 않습니다.

// 본문 문맥형 내부링크 전용 최소 파서입니다. 각 글의 텍스트 안에
// "[앵커](/legal-info/slug)" 형태로 표시된 부분만 Link로 변환하고,
// 그 외 텍스트는 그대로 둡니다(법률문장 자체를 바꾸지 않고 기존 표현을
// 그대로 anchor로 감싸는 용도). 새 컴포넌트나 새 블록 타입을 만들지
// 않고, 기존 문자열 렌더링 지점(문단·목록 항목)에서만 재사용합니다.
function renderTextWithLinks(text: string) {
  const linkPattern = /\[([^\]]+)\]\((\/legal-info\/[a-z0-9-]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(
      <Link
        key={`inline-link-${key++}`}
        href={match[2]}
        className="text-brand underline underline-offset-2 transition-colors hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        {match[1]}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex === 0) {
    return text;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

function ArticleBlockView({ block }: { block: ArticleBlock }) {
  if (block.type === "p") {
    return <p className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">{renderTextWithLinks(block.text)}</p>;
  }
  if (block.type === "subheading") {
    return <p className="text-sm font-semibold text-gray-900 sm:text-base">{block.text}</p>;
  }
  return (
    <ul className="flex flex-col gap-2">
      {block.items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm leading-6 text-gray-700 sm:text-base">
          <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
          {renderTextWithLinks(item)}
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

export type LegalInfoArticleRelatedLink = {
  href: string;
  label: string;
};

export type LegalInfoArticleLayoutProps = {
  category: string;
  title: string;
  asOfDate: string;
  introParagraphs: string[];
  sectionsBeforeProcess: ArticleSection[];
  processHeading: string;
  processDescription: string;
  processSteps: ProcessStep[];
  sectionsAfterProcess: ArticleSection[];
  noticeParagraphs: string[];
  references: LegalReference[];
  relatedLinks: LegalInfoArticleRelatedLink[];
};

export default function LegalInfoArticleLayout({
  category,
  title,
  asOfDate,
  introParagraphs,
  sectionsBeforeProcess,
  processHeading,
  processDescription,
  processSteps,
  sectionsAfterProcess,
  noticeParagraphs,
  references,
  relatedLinks,
}: LegalInfoArticleLayoutProps) {
  const phone = SITE_CONFIG.representativePhone;
  const email = SITE_CONFIG.contactEmail;

  return (
    <>
      <section className="border-b border-gray-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-medium text-gray-500">{category}</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl sm:leading-tight break-keep">
            {title}
          </h1>
          <p className="mt-4 text-sm text-gray-500">법률정보 기준일: {asOfDate}</p>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col gap-16">
            <div className="flex flex-col gap-4">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
                  {renderTextWithLinks(paragraph)}
                </p>
              ))}
            </div>

            {sectionsBeforeProcess.map((section) => (
              <ArticleSectionView key={section.heading} section={section} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        steps={processSteps}
        heading={processHeading}
        description={processDescription}
        variant="timeline"
      />

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col gap-16">
            {sectionsAfterProcess.map((section) => (
              <ArticleSectionView key={section.heading} section={section} />
            ))}

            <div className="rounded-sm bg-slate-50 p-6">
              <div className="flex flex-col gap-3">
                {noticeParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-6 text-gray-600 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-500">법률정보 기준일: {asOfDate}</p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-900 sm:text-lg">관련 근거</h2>
              <dl className="mt-4 flex flex-col gap-3 border-t border-gray-200 pt-4">
                {references.map((reference) => (
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
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:text-brand-dark sm:text-base"
                    >
                      {link.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
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
