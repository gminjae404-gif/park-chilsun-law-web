import Link from "next/link";
import {
  CIVIL_SERVICE_AREAS,
  CIVIL_SERVICE_AREAS_DESCRIPTION,
  CIVIL_SERVICE_AREAS_HEADING,
} from "@/lib/civil";

// "주요 민사 업무" 8개 항목입니다. CivilTypes와 동일한 좌우 2열 +
// border-t 공유 + 각 항목 border-b 구분선 목록 패턴을 재사용해 이
// 페이지에 새 시각 언어를 추가하지 않았습니다. href가 있는 항목
// (임대차·보증금 → /civil/lease)만 제목을 링크로 표시하고, 나머지는
// 기존 CivilTypes와 동일하게 일반 텍스트로 둡니다.
const LEFT_AREAS = CIVIL_SERVICE_AREAS.slice(0, 4);
const RIGHT_AREAS = CIVIL_SERVICE_AREAS.slice(4);

export default function CivilServiceAreas() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {CIVIL_SERVICE_AREAS_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {CIVIL_SERVICE_AREAS_DESCRIPTION}
        </p>
        <div className="mt-10 grid grid-cols-1 border-t border-gray-200 sm:grid-cols-2 sm:gap-x-12">
          <ul>
            {LEFT_AREAS.map((area) => (
              <li key={area.label} className="border-b border-gray-200 py-6">
                {area.href ? (
                  <Link
                    href={area.href}
                    className="group inline-flex items-center gap-1 rounded-sm text-base font-semibold text-gray-900 transition-colors hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:text-lg"
                  >
                    {area.label}
                    <span
                      aria-hidden="true"
                      className="text-gray-400 transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                ) : (
                  <h3 className="text-base font-semibold text-gray-900 sm:text-lg">{area.label}</h3>
                )}
                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                  {area.description}
                </p>
              </li>
            ))}
          </ul>
          <ul>
            {RIGHT_AREAS.map((area) => (
              <li key={area.label} className="border-b border-gray-200 py-6">
                {area.href ? (
                  <Link
                    href={area.href}
                    className="group inline-flex items-center gap-1 rounded-sm text-base font-semibold text-gray-900 transition-colors hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:text-lg"
                  >
                    {area.label}
                    <span
                      aria-hidden="true"
                      className="text-gray-400 transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                ) : (
                  <h3 className="text-base font-semibold text-gray-900 sm:text-lg">{area.label}</h3>
                )}
                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                  {area.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
