import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// 관리자 화면이나 비공개 페이지가 없는 사이트이므로, 공개 페이지 전체
// 수집을 기본으로 허용합니다(일반 검색엔진·네이버 검색로봇 모두
// 대상으로 별도 규칙을 두지 않고 동일하게 허용). /individual-recovery,
// /personal-bankruptcy는 실제로 존재하지 않는 라우트(404)이므로 여기서
// 별도로 막을 필요가 없습니다.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
