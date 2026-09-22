import { CIVIL_HERO } from "@/lib/civil";
import { LEASE_HERO } from "@/lib/civil-lease";
import { CORPORATE_HERO } from "@/lib/corporate-registration";
import { ENFORCEMENT_HERO } from "@/lib/enforcement";
import { FAMILY_HERO } from "@/lib/family";
import { GUARDIANSHIP_HERO } from "@/lib/family-guardianship";
import { INHERITANCE_HERO } from "@/lib/family-inheritance";
import { NAME_CHANGE_HERO } from "@/lib/family-name-change";
import { LEGAL_INFO_ARTICLES } from "@/lib/legal-info";
import { REAL_ESTATE_HERO } from "@/lib/real-estate-registration";

// 메인 통합검색의 데이터·검색 로직 전용 파일입니다. 이 사이트에 실제로
// 존재하는 업무 페이지와 30편의 법률정보 글을 하나의 색인으로 합쳐
// 검색합니다.
//
// 데이터 이중관리 금지 원칙: 법률정보 검색 데이터는 legal-info.ts의
// LEGAL_INFO_ARTICLES를 그대로 매핑해서 사용합니다(제목·요약·카테고리·
// href를 다시 타이핑하지 않음). 따라서 향후 31~40편이
// LEGAL_INFO_ARTICLES에 등록되면 이 검색 색인에도 자동으로
// 포함됩니다. 업무페이지 데이터도 각 업무 페이지가 이미 가지고 있는
// HERO 상수(title·lead)를 그대로 import해서 재사용하며, 검색을 위해
// 새 설명 문구를 작성하지 않았습니다. 실제 route가 없는 가상의
// 업무페이지는 포함하지 않았습니다.
//
// alias는 이 파일의 SEARCH_ALIASES 맵 하나로만 관리합니다(item17).
// alias는 검색용 메타데이터일 뿐이며, 실제 페이지 제목이나 본문의
// 법률용어를 바꾸지 않습니다.
export type SearchItem = {
  type: "service" | "legal-info";
  title: string;
  description: string;
  href: string;
  category?: string;
  aliases?: string[];
};

// 실제 존재하는 업무 상세 페이지만 포함합니다(가상의 업무 페이지 없음).
// title·description은 각 페이지의 실제 HERO(title·lead)를 그대로
// 재사용합니다.
const SERVICE_SEARCH_ITEMS: SearchItem[] = [
  { type: "service", title: REAL_ESTATE_HERO.title, description: REAL_ESTATE_HERO.lead, href: "/registration/real-estate" },
  { type: "service", title: CORPORATE_HERO.title, description: CORPORATE_HERO.lead, href: "/registration/corporate" },
  { type: "service", title: CIVIL_HERO.title, description: CIVIL_HERO.lead, href: "/civil" },
  { type: "service", title: LEASE_HERO.title, description: LEASE_HERO.lead, href: "/civil/lease" },
  { type: "service", title: ENFORCEMENT_HERO.title, description: ENFORCEMENT_HERO.lead, href: "/enforcement" },
  { type: "service", title: FAMILY_HERO.title, description: FAMILY_HERO.lead, href: "/family" },
  { type: "service", title: INHERITANCE_HERO.title, description: INHERITANCE_HERO.lead, href: "/family/inheritance" },
  { type: "service", title: GUARDIANSHIP_HERO.title, description: GUARDIANSHIP_HERO.lead, href: "/family/guardianship" },
  { type: "service", title: NAME_CHANGE_HERO.title, description: NAME_CHANGE_HERO.lead, href: "/family/name-change" },
];

// 법률정보 30편 전체를 legal-info.ts의 LEGAL_INFO_ARTICLES에서 그대로
// 매핑합니다. 이 배열을 별도로 다시 작성하지 않습니다.
const LEGAL_INFO_SEARCH_ITEMS: SearchItem[] = LEGAL_INFO_ARTICLES.map((article) => ({
  type: "legal-info",
  title: article.title,
  description: article.summary,
  href: article.href,
  category: article.category,
}));

// 일반 사용자가 정확한 법률용어를 모르고 검색할 수 있는 표현을
// route(href) 기준으로 최소한만 등록합니다. 실제 의미와 다른 페이지로
// 억지로 연결하지 않습니다.
const SEARCH_ALIASES: Record<string, string[]> = {
  "/legal-info/inheritance-registration": ["상속", "상속이전", "부모님 재산", "상속재산"],
  "/legal-info/inheritance-renunciation-limited-acceptance": ["부모 빚", "상속빚", "빚상속", "상속 포기"],
  "/legal-info/payment-order-procedure": ["돈 받기", "대여금", "미수금", "공사대금"],
  "/legal-info/claim-seizure-collection-order": ["통장압류", "계좌압류", "예금압류", "급여압류", "추심명령"],
  "/legal-info/debtor-property-disclosure-inquiry": ["채무자 재산", "재산 찾기", "채무자 재산 찾기"],
  "/legal-info/debtor-default-list-registration": ["신용불량", "신용불량자", "신용불량 등록", "채무불이행 등록"],
  "/legal-info/movable-property-enforcement": ["빨간딱지", "집안 물건 압류", "가재도구 압류", "동산압류"],
  "/legal-info/vehicle-enforcement": ["자동차압류", "자동차 압류", "차량압류", "차량 압류", "차압류", "자동차경매", "차량경매"],
  "/legal-info/mortgage-cancellation-registration": ["근저당말소", "근저당 말소", "대출말소", "은행근저당"],
  "/legal-info/name-change-permission-procedure": ["개명", "이름변경", "이름 변경"],
  "/legal-info/corporate-officer-change-registration": ["대표이사 변경", "대표 변경", "임원 변경", "이사 변경"],
  "/legal-info/corporate-capital-increase-registration": ["증자", "자본금 증가", "신주발행", "가수금증자", "가수금 증자"],
  "/legal-info/vehicle-provisional-seizure": [
    "자동차가압류",
    "자동차 가압류",
    "차량가압류",
    "차량 가압류",
    "차가압류",
    "차 가압류",
    "자동차 보전처분",
  ],
  "/legal-info/real-estate-voluntary-auction": [
    "임의경매",
    "부동산임의경매",
    "부동산 임의경매",
    "근저당경매",
    "근저당 경매",
    "근저당권경매",
    "근저당권 경매",
    "담보권경매",
    "담보권 실행",
  ],
  "/legal-info/real-estate-auction-distribution-demand": [
    "배당요구",
    "경매배당",
    "경매 배당",
    "배당요구종기",
    "배당 요구",
    "임차인배당",
    "임차인 배당",
    "경매채권계산서",
  ],
  "/legal-info/real-estate-auction-distribution-objection": [
    "배당이의",
    "배당 이의",
    "배당이의소",
    "배당이의의소",
    "배당이의 소",
    "배당이의의 소",
    "배당표이의",
    "배당표 이의",
    "배당기일이의",
  ],
};

const SEARCH_INDEX: SearchItem[] = [...SERVICE_SEARCH_ITEMS, ...LEGAL_INFO_SEARCH_ITEMS].map((item) => {
  const aliases = SEARCH_ALIASES[item.href];
  return aliases ? { ...item, aliases } : item;
});

// trim, 연속 공백 정리, 영문 소문자화, 전각공백 등 유니코드 공백까지
// 함께 정리합니다. 사용자 입력을 정규식에 직접 삽입하지 않고, 항상
// 고정된 정규식(/\s+/)으로만 처리합니다.
export function normalizeSearchText(input: string): string {
  return input.normalize("NFKC").trim().replace(/\s+/g, " ").toLowerCase();
}

// 공백 유무와 무관하게 비교하기 위한 압축 버전입니다("근저당 말소" →
// "근저당말소").
function toCompact(normalized: string): string {
  return normalized.replace(/\s+/g, "");
}

type PreparedItem = {
  item: SearchItem;
  normalizedTitle: string;
  compactTitle: string;
  normalizedDescription: string;
  compactDescription: string;
  normalizedCategory: string;
  normalizedAliases: { normalized: string; compact: string }[];
  // 복수 단어 검색(tier 8 fallback)용으로, 서로 관련 없는 필드에 각
  // 토큰이 우연히 흩어져 있는 것과 "한 필드 안에서 함께" 나타나는
  // 것을 구분하기 위해 필드별로 압축 문자열을 따로 둡니다("|"로 이어
  // alias 경계를 넘어 우연히 이어붙는 것을 방지합니다).
  compactFields: string[];
};

const PREPARED_INDEX: PreparedItem[] = SEARCH_INDEX.map((item) => {
  const normalizedTitle = normalizeSearchText(item.title);
  const normalizedDescription = normalizeSearchText(item.description);
  const normalizedCategory = normalizeSearchText(item.category ?? "");
  const normalizedAliases = (item.aliases ?? []).map((alias) => {
    const normalized = normalizeSearchText(alias);
    return { normalized, compact: toCompact(normalized) };
  });
  const compactTitle = toCompact(normalizedTitle);
  const compactDescription = toCompact(normalizedDescription);
  const compactCategory = toCompact(normalizedCategory);
  const compactAliases = normalizedAliases.map((alias) => alias.compact).join("|");
  return {
    item,
    normalizedTitle,
    compactTitle,
    normalizedDescription,
    compactDescription,
    normalizedCategory,
    normalizedAliases,
    compactFields: [compactTitle, compactDescription, compactCategory, compactAliases].filter(Boolean),
  };
});

// 검색어 하나에 대해 항목의 relevance 순위를 매깁니다. 숫자가 작을수록
// 더 관련도가 높습니다. 매칭되지 않으면 null을 반환합니다.
//
// 우선순위(1이 최고): 1.제목 exact, 2.제목 정규화(공백무시) exact,
// 3.제목 prefix, 4.제목 partial, 5.alias exact, 6.alias partial,
// 7.카테고리 match, 8.설명 match 또는 복수 단어 전체 포함.
export function scoreSearchItem(
  prepared: PreparedItem,
  normalizedQuery: string,
  compactQuery: string,
  tokens: string[],
): number | null {
  if (!normalizedQuery) return null;

  if (prepared.normalizedTitle === normalizedQuery) return 1;
  if (prepared.compactTitle === compactQuery) return 2;
  if (prepared.normalizedTitle.startsWith(normalizedQuery) || prepared.compactTitle.startsWith(compactQuery)) return 3;
  if (prepared.normalizedTitle.includes(normalizedQuery) || prepared.compactTitle.includes(compactQuery)) return 4;

  const hasAliasExact = prepared.normalizedAliases.some(
    (alias) => alias.normalized === normalizedQuery || alias.compact === compactQuery,
  );
  if (hasAliasExact) return 5;

  const hasAliasPartial = prepared.normalizedAliases.some(
    (alias) => alias.normalized.includes(normalizedQuery) || alias.compact.includes(compactQuery),
  );
  if (hasAliasPartial) return 6;

  if (prepared.normalizedCategory && prepared.normalizedCategory.includes(normalizedQuery)) return 7;

  if (prepared.normalizedDescription.includes(normalizedQuery) || prepared.compactDescription.includes(compactQuery)) {
    return 8;
  }

  if (tokens.length > 1) {
    const compactTokens = tokens.map(toCompact);
    const matchesSameField = prepared.compactFields.some((field) =>
      compactTokens.every((token) => field.includes(token)),
    );
    if (matchesSameField) return 8;
  }

  return null;
}

// 실제 검색을 실행합니다. 클라이언트 사이드 로컬 검색이며 외부
// 검색서비스·서버 API를 호출하지 않습니다. 빈 문자열(공백만 있는
// 경우 포함)이면 빈 배열을 반환합니다.
export function searchSite(rawQuery: string, limit = 8): SearchItem[] {
  const normalizedQuery = normalizeSearchText(rawQuery);
  if (!normalizedQuery) return [];

  const compactQuery = toCompact(normalizedQuery);
  const tokens = normalizedQuery.split(" ").filter(Boolean);

  const scored: { item: SearchItem; tier: number }[] = [];
  for (const prepared of PREPARED_INDEX) {
    const tier = scoreSearchItem(prepared, normalizedQuery, compactQuery, tokens);
    if (tier !== null) scored.push({ item: prepared.item, tier });
  }

  scored.sort((a, b) => a.tier - b.tier);

  return scored.slice(0, limit).map((entry) => entry.item);
}

// 완료보고용 개수 확인에 사용합니다.
export const SEARCH_INDEX_COUNTS = {
  serviceCount: SERVICE_SEARCH_ITEMS.length,
  legalInfoCount: LEGAL_INFO_SEARCH_ITEMS.length,
  totalCount: SEARCH_INDEX.length,
  aliasedItemCount: Object.keys(SEARCH_ALIASES).length,
};
