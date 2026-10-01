import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { LEGAL_INFO_ARTICLES } from "@/lib/legal-info";

// 실제로 공개되어 있는 페이지만 나열합니다. /individual-recovery,
// /personal-bankruptcy는 라우트 자체가 존재하지 않으므로(404) 포함하지
// 않습니다. 우선순위는 홈 > 핵심 업무(부동산등기) > 그 외 업무 페이지 >
// 안내성 페이지 순으로 상대적인 비중만 표시합니다.
//
// lastModified는 "빌드/요청 시점"이 아니라 "실제 콘텐츠가 마지막으로
// 바뀐 날짜"만 표시합니다. legal-info 40편은 각 글 전용 META에 이미
// 구축된 updatedAt(실제 공개 콘텐츠 최종 변경일, git 이력 기반으로
// 산정됨)을 LEGAL_INFO_ARTICLES 레지스트리를 통해 그대로 사용합니다.
// 그 외 13개 일반 페이지는 페이지별로 신뢰할 수 있는 수정일 데이터가
// 아직 없으므로 lastModified를 추측해 채우지 않고 생략합니다.
export default function sitemap(): MetadataRoute.Sitemap {
  const routesWithoutLastModified: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/registration/real-estate", priority: 0.9 },
    { path: "/registration/corporate", priority: 0.8 },
    { path: "/civil", priority: 0.8 },
    { path: "/civil/lease", priority: 0.7 },
    { path: "/enforcement", priority: 0.8 },
    { path: "/family", priority: 0.8 },
    { path: "/family/inheritance", priority: 0.7 },
    { path: "/family/guardianship", priority: 0.7 },
    { path: "/family/name-change", priority: 0.7 },
    { path: "/services", priority: 0.6 },
    { path: "/legal-info", priority: 0.5 },
    { path: "/privacy-policy", priority: 0.3 },
  ];

  const generalEntries: MetadataRoute.Sitemap = routesWithoutLastModified.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    priority,
  }));

  const legalInfoEntries: MetadataRoute.Sitemap = LEGAL_INFO_ARTICLES.map((article) => ({
    url: `${SITE_URL}${article.href}`,
    lastModified: article.updatedAt,
    priority: 0.4,
  }));

  return [...generalEntries, ...legalInfoEntries];
}
