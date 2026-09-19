import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// 실제로 공개되어 있는 페이지만 나열합니다. /individual-recovery,
// /personal-bankruptcy는 라우트 자체가 존재하지 않으므로(404) 포함하지
// 않습니다. 우선순위는 홈 > 핵심 업무(부동산등기) > 그 외 업무 페이지 >
// 안내성 페이지 순으로 상대적인 비중만 표시합니다.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
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
    { path: "/legal-info/inheritance-registration", priority: 0.4 },
    { path: "/legal-info/real-estate-sale-registration", priority: 0.4 },
    { path: "/legal-info/mortgage-cancellation-registration", priority: 0.4 },
    { path: "/legal-info/corporate-officer-change-registration", priority: 0.4 },
    { path: "/legal-info/corporate-head-office-relocation-registration", priority: 0.4 },
    { path: "/legal-info/corporate-capital-increase-registration", priority: 0.4 },
    { path: "/legal-info/payment-order-procedure", priority: 0.4 },
    { path: "/legal-info/claim-seizure-collection-order", priority: 0.4 },
    { path: "/legal-info/real-estate-compulsory-auction", priority: 0.4 },
    { path: "/legal-info/inheritance-renunciation-limited-acceptance", priority: 0.4 },
    { path: "/legal-info/adult-guardianship-procedure", priority: 0.4 },
    { path: "/legal-info/name-change-permission-procedure", priority: 0.4 },
    { path: "/legal-info/adult-adoption-registration", priority: 0.4 },
    { path: "/legal-info/inheritance-division-agreement-registration", priority: 0.4 },
    { path: "/legal-info/inheritance-estate-bankruptcy-procedure", priority: 0.4 },
    { path: "/legal-info/real-estate-gift-registration", priority: 0.4 },
    { path: "/legal-info/mortgage-establishment-registration", priority: 0.4 },
    { path: "/legal-info/jeonse-right-registration", priority: 0.4 },
    { path: "/legal-info/provisional-registration-procedure", priority: 0.4 },
    { path: "/legal-info/co-owned-property-division-registration", priority: 0.4 },
    { path: "/legal-info/ownership-transfer-cancellation-restoration", priority: 0.4 },
    { path: "/privacy-policy", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    priority,
  }));
}
