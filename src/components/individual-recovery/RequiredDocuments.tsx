import Image from "next/image";
import {
  PRE_APPLICATION_CHECKLIST,
  REQUIRED_DOCUMENT_CATEGORIES,
  REQUIRED_DOCUMENTS_INTRO,
  REQUIRED_DOCUMENTS_NOTICE,
} from "@/lib/constants";

// 법률 검토를 거쳐 확정된 문구입니다. 임의로 수정하지 않습니다.
// 기존에 별도 섹션("신청 전 확인사항")이었던 PRE_APPLICATION_CHECKLIST는
// 준비자료 안내와 주제가 맞닿아 있어(제출자료·확인사항) 이 섹션 안에
// 간단한 체크리스트로 함께 배치합니다. 법률적 주의문구인 안내문은 삭제하지
// 않고 "신청 전 확인사항" 소제목과 함께 원문 그대로 표시합니다.
// documents.png는 안내 텍스트 옆의 보조 이미지로만 사용하고, 아래 6개
// 준비자료 카테고리 카드보다 시각적으로 커지지 않도록 3분의 1 정도의
// 폭으로 제한합니다.
//
// 아래 6개 준비자료 카테고리는 신청인이 실제로 챙겨야 하는 "중요 체크
// 정보"이므로 박스(카드) 자체는 유지합니다. 다만 BankruptcyDischargeReview와
// 동일하게 hover 시 떠오르는 효과(translate/shadow)만 제거해 정적인 정보
// 패널로 보이게 합니다. 카드 배경·테두리·내용·분류는 변경하지 않습니다.
export default function RequiredDocuments() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start lg:gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              개인회생 준비자료 안내
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
              {REQUIRED_DOCUMENTS_INTRO}
            </p>

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-brand">
              신청 전 확인사항
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-500">
              아래 항목은 개인회생을 검토할 때 확인하는 주요 사항이며, 구체적인 판단은 신청인의
              소득·채무·재산 등 개별 사정과 제출자료에 따라 달라질 수 있습니다.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {PRE_APPLICATION_CHECKLIST.map((item) => (
                <li
                  key={item.title}
                  className="rounded-full border border-gray-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-gray-700 sm:text-sm"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm lg:aspect-square">
            <Image
              src="/images/documents.png"
              alt="상담 준비를 위해 정리된 서류와 체크리스트"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REQUIRED_DOCUMENT_CATEGORIES.map((item) => (
            <div
              key={item.category}
              className="rounded-sm bg-slate-50 p-6"
            >
              <dt className="text-base font-semibold text-gray-900 sm:text-lg">{item.category}</dt>
              <dd className="mt-2 text-sm leading-6 text-gray-600">{item.note}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-6">
          {REQUIRED_DOCUMENTS_NOTICE.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-6 text-gray-500">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
