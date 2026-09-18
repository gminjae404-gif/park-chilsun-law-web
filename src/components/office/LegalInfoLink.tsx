import Link from "next/link";

// 홈 하단(오시는 길 다음, Footer 앞)에 배치하는 "법률정보" 바로가기
// 영역입니다. /legal-info 페이지 자체의 법률 내용은 이 컴포넌트에서
// 전혀 다루지 않고, 그 페이지로 이동하는 안내 문구와 링크 1개만
// 구성합니다. 다른 홈 섹션과 동일한 컨테이너 폭·여백·구분선 스타일을
// 그대로 따릅니다.
export default function LegalInfoLink() {
  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              법률정보
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              등기·민사·집행·가사·상속 등 실무에 필요한 법률정보를 확인할 수 있습니다.
            </p>
          </div>
          <Link
            href="/legal-info"
            className="inline-flex flex-shrink-0 items-center justify-center rounded-sm border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            법률정보 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
