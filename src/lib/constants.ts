export type SiteConfig = {
  // 아래 항목은 이 사이트가 적용된 사무소의 실제 정보입니다.
  // 확인되지 않은 값은 임의로 만들지 않고 null로 둡니다(예: 확정되지 않은
  // 영업시간, 아직 개설되지 않은 카카오톡 채널).
  officeName: string | null;
  judicialScrivenerName: string | null;
  representativePhone: string | null;
  faxNumber: string | null;
  // 연락처에 표시하는 공개 이메일 주소입니다(mailto: 링크로 연결). 상담
  // 신청 폼의 서버측 수신 이메일(CONSULTATION_RECEIVER_EMAIL 환경변수,
  // src/lib/consultation-email.ts)과는 별개입니다 — 그 값은 SMTP 발송
  // 설정이 끝난 뒤에만 쓰이는 서버 전용 값이고, 이 값은 지금 바로 화면에
  // 노출되는 공개 연락처입니다.
  contactEmail: string | null;
  address: string | null;
  businessRegistrationNumber: string | null;
  // 확정되지 않았으면 null로 두어 Footer 등 화면에서 해당 항목 자체를
  // 표시하지 않습니다(불확실한 값을 노출하지 않기 위함).
  businessDays: string | null;
  businessHours: string | null;
  closedDays: string | null;
  kakaoChannelUrl: string | null;
  // true인 동안에는 이 사이트가 아직 실제로 상담을 접수하는 운영
  // 사이트가 아니라 검토용 샘플 화면이라는 안내(Header 상단 배너,
  // 상담 섹션 안내문, Footer 하단 안내문)가 표시됩니다. 위 사무소 정보
  // 자체는 이 값과 무관하게 항상 실제 값 그대로 표시됩니다(정보가
  // 예시라는 의미가 아니라, "상담 신청이 아직 실제로 접수되지 않는다"는
  // 의미만 담습니다).
  isPreviewSite: boolean;
};

// 사무소 관련 정보를 한 곳에서 관리합니다. 이 객체의 값을 바꾸면 Header/
// Footer/개인정보처리방침 등 화면 전체에 반영됩니다.
export const SITE_CONFIG: SiteConfig = {
  officeName: "법무사 박칠선 사무소",
  judicialScrivenerName: "박칠선",
  representativePhone: "043-423-6700",
  faxNumber: "043-423-6701",
  contactEmail: "ps7345@naver.com",
  address: "충청북도 단양군 단양읍 별곡1로 16",
  businessRegistrationNumber: "376-34-00159",
  businessDays: null,
  businessHours: null,
  closedDays: null,
  kakaoChannelUrl: null,
  isPreviewSite: false,
};

// Hero·오시는 길 섹션의 지도에서 사용하는 사무소 위치 좌표입니다.
export const OFFICE_LOCATION = {
  lat: 36.984295,
  lng: 128.367004,
};

// 현재 정식 공개 주소입니다. metadataBase·canonical·OpenGraph url·
// robots.txt·sitemap.xml이 전부 이 값 하나를 공유합니다(도메인이 바뀌면
// 이 값만 수정하면 됩니다). 끝에 슬래시(/)를 붙이지 않습니다.
export const SITE_URL = "https://park-chilsun-law-web.vercel.app";

// ---- 업무분야 ----
// Header 업무분야 nav, 홈 PracticeAreasOverview, /services 페이지가 동일한
// 업무명·href를 공유하기 위한 최소 데이터 구조입니다. 아직 상세 콘텐츠가
// 없는 업무분야이므로 법률 설명은 담지 않고 이동 경로만 정의합니다.
// 박칠선 법무사사무소의 핵심 업무인 부동산등기가 항상 첫 번째로 노출되도록
// 순서를 정합니다.
export type ServiceLink = {
  label: string;
  href: string;
};

export type ServiceCategory = {
  id: string;
  label: string;
  href: string;
  items?: ServiceLink[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: "registration-real-estate", label: "부동산등기", href: "/registration/real-estate" },
  { id: "registration-corporate", label: "법인등기", href: "/registration/corporate" },
  { id: "civil", label: "민사소송", href: "/civil" },
  { id: "enforcement", label: "강제집행", href: "/enforcement" },
  { id: "family", label: "가사·상속", href: "/family" },
];

// ---- Header 전용 상단 내비게이션 ----
// 부동산등기·법인등기는 단순 링크, 민사·집행과 가사·상속은 dropdown으로
// 하위 페이지를 묶습니다. /legal-info는 route 자체는 유지하되 주요
// navigation에는 포함하지 않습니다.
export type HeaderNavLink = {
  label: string;
  href: string;
};

export type HeaderNavCategory = {
  id: string;
  label: string;
  // items가 있으면 label은 dropdown을 여닫는 버튼일 뿐 이동하지 않습니다.
  // items가 없으면 href로 바로 이동하는 단순 링크입니다.
  href?: string;
  items?: HeaderNavLink[];
};

export const HEADER_NAV_CATEGORIES: HeaderNavCategory[] = [
  { id: "real-estate-registration", label: "부동산등기", href: "/registration/real-estate" },
  { id: "corporate-registration", label: "법인등기", href: "/registration/corporate" },
  {
    id: "civil-enforcement",
    label: "민사·집행",
    items: [
      { label: "민사소송", href: "/civil" },
      { label: "임대차·보증금", href: "/civil/lease" },
      { label: "강제집행", href: "/enforcement" },
    ],
  },
  {
    id: "family",
    label: "가사·상속",
    items: [
      { label: "가사·상속 전체", href: "/family" },
      { label: "상속", href: "/family/inheritance" },
      { label: "성년후견", href: "/family/guardianship" },
      { label: "개명허가", href: "/family/name-change" },
    ],
  },
];

// Header 로고, 페이지 타이틀 template 등에서 사용하는 사이트 표시명입니다.
export const HEADER_BRAND_NAME = "법무사 박칠선 사무소";

export type ProcessStep = {
  step: string;
  label: string;
  description?: string;
};

export type FaqItem = {
  question: string;
  answer: string[];
};

// 홈페이지 FAQ입니다. 박칠선 법무사사무소의 업무 특성(부동산등기 중심의
// 종합 법무사 업무)에 맞춰 일반적인 상담 절차 안내 위주로 구성했으며,
// 새로운 법률적 단정이나 기간·비용·세율은 임의로 기재하지 않습니다.
export const HOME_FAQ_ITEMS: FaqItem[] = [
  {
    question: "부동산등기 상담 전에 어떤 자료를 준비하면 되나요?",
    answer: [
      "등기원인(매매·증여·상속 등)에 따라 필요한 자료가 다르므로, 부동산 등기사항증명서와 계약서 등 원인관계를 확인할 수 있는 자료가 있다면 함께 준비해 주시면 상담이 수월합니다.",
      "구체적으로 어떤 자료가 필요한지는 사건 내용을 확인한 뒤 안내해 드립니다.",
    ],
  },
  {
    question: "부동산등기 업무는 어떤 방식으로 상담하나요?",
    answer: [
      "전화 또는 홈페이지 상담 신청을 통해 먼저 사건의 개요를 확인한 뒤, 필요한 자료와 절차를 안내해 드립니다.",
    ],
  },
  {
    question: "민사소송이나 강제집행 관련 문제도 상담할 수 있나요?",
    answer: [
      "네. 부동산등기 외에 민사소송, 강제집행, 가사·상속, 법인등기 관련 업무도 상담을 진행하고 있습니다. 문의 유형을 선택하여 상담을 신청해 주시면 됩니다.",
    ],
  },
  {
    question: "방문 전에 전화로 먼저 문의할 수 있나요?",
    answer: [
      "네. 대표전화로 먼저 문의해 주시면 간단한 사항을 안내해 드리고, 필요한 경우 방문 상담 일정을 함께 확인해 드립니다.",
    ],
  },
];

export type PrivacyPolicySection = {
  title: string;
  content: string;
};

// 개인정보처리방침 각 항목의 내용입니다.
// 보유·이용기간, 파기절차, 처리위탁, 제3자 제공, 저장방식 등 아직 운영정책이
// 확정되지 않은 항목은 임의로 값을 채우지 않고 "운영정책 확정 후 반영 예정"으로
// 표시합니다. 실제 정책이 확정되면 이 값만 교체하면 됩니다.
export const PRIVACY_POLICY_SECTIONS: PrivacyPolicySection[] = [
  {
    title: "1. 수집하는 개인정보 항목 및 수집방법",
    content:
      "실제 운영 시 홈페이지 상담 신청 폼을 통해 이용자가 직접 입력하는 방식으로 이름, 연락처, 상담 희망 시간, 문의 유형, 문의 내용을 수집할 예정입니다. 현재 단계에서는 입력하신 정보가 사무소 또는 외부 서버로 전송되거나 저장되지 않습니다.",
  },
  {
    title: "2. 개인정보의 수집 및 이용 목적",
    content: "상담 신청 접수 및 상담 연락을 위한 목적으로 이용합니다.",
  },
  {
    title: "3. 개인정보의 보유 및 이용기간",
    content: "운영정책 확정 후 반영 예정입니다.",
  },
  {
    title: "4. 개인정보의 파기절차 및 파기방법",
    content: "운영정책 확정 후 반영 예정입니다.",
  },
  {
    title: "5. 개인정보 처리업무의 위탁",
    content: "운영정책 확정 후 반영 예정입니다.",
  },
  {
    title: "6. 개인정보의 제3자 제공",
    content: "운영정책 확정 후 반영 예정입니다.",
  },
  {
    title: "7. 개인정보의 안전성 확보조치 (저장방식 포함)",
    content: "운영정책 확정 후 반영 예정입니다.",
  },
  {
    title: "8. 정보주체의 권리·의무 및 행사방법",
    content:
      "이용자는 개인정보 수집·이용에 동의를 거부할 권리가 있습니다. 다만 동의를 거부할 경우 온라인 상담 신청 기능을 이용할 수 없습니다.",
  },
  {
    title: "9. 개인정보 보호책임자 및 문의처",
    content: "운영정책 확정 후 반영 예정입니다.",
  },
];
