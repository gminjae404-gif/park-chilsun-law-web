export type SiteConfig = {
  // 화면에 노출되는 사이트 표시명(Header 로고, 페이지 타이틀 등)입니다.
  siteName: string;
  // true인 동안 이 사이트는 특정 사무소에 적용된 실제 운영 사이트가 아니라
  // 법무사사무소 홈페이지 제안용 샘플(DEMO)입니다. 화면 곳곳의 DEMO 안내 문구가
  // 이 값을 기준으로 표시됩니다.
  isDemo: boolean;
  // 아래 항목은 특정 사무소에 실제 적용할 때 입력하는 정보입니다.
  // 확정되지 않은 값은 가상의 문자열로 채우지 않고 null로 둡니다.
  // officeName·judicialScrivenerName·representativePhone·address·
  // businessRegistrationNumber는 실제 사무소 정보가 확정되기 전까지, 누가
  // 봐도 예시임을 알 수 있는 DEMO 값("○○○", "000-00-00000" 등)으로
  // 채워져 있습니다. isDemo=true인 동안 Footer에서 대표전화·사업자등록번호
  // 뒤에 "(예시)"가 함께 표시됩니다.
  officeName: string | null;
  judicialScrivenerName: string | null;
  representativePhone: string | null;
  address: string | null;
  businessRegistrationNumber: string | null;
  // 운영요일·시간·휴무는 DEMO 단계에서 샘플 값으로 확정되어 있으며,
  // 실제 사무소의 값이 아닙니다(Footer에 "샘플 운영시간"으로 표시됩니다).
  businessDays: string;
  businessHours: string;
  closedDays: string;
  kakaoChannelUrl: string | null;
};

// 사무소 관련 정보를 한 곳에서 관리합니다. 나중에 특정 사무소에 적용할 때는
// 이 객체의 값만 채우면 Header/Footer/개인정보처리방침 등 전체 화면에 반영됩니다.
export const SITE_CONFIG: SiteConfig = {
  siteName: "개인회생 상담 홈페이지 DEMO",
  isDemo: true,
  officeName: "○○○ 법무사사무소",
  judicialScrivenerName: "○○○",
  representativePhone: "043-000-0000",
  address: "충청북도 제천시 ○○로 00",
  businessRegistrationNumber: "000-00-00000",
  businessDays: "월~금",
  businessHours: "09:00~18:00",
  closedDays: "주말·공휴일 휴무",
  kakaoChannelUrl: null,
};

export type SiteMode = "recovery" | "full";

// 사이트 모드: 하나의 코드베이스에서 두 가지 사이트 형태를 선택합니다.
// - "recovery": 개인회생·개인파산 특화 홈페이지(기존 모습을 그대로 보존)
// - "full": 법무사사무소 종합 홈페이지(신규, 현재 DEMO 기본값)
// 이 사이트는 정적으로 빌드되므로 런타임 전환은 지원하지 않고, 빌드 시점의
// NEXT_PUBLIC_SITE_MODE 환경변수 하나로만 배포별 모드를 결정합니다
// (예: NEXT_PUBLIC_SITE_MODE=recovery). 값이 없거나 "recovery"가 아니면
// 기본값인 "full"을 사용합니다. 과도한 설정 체계를 두지 않기 위해
// 분기 기준을 이 값 하나로 제한합니다.
export const SITE_MODE: SiteMode =
  process.env.NEXT_PUBLIC_SITE_MODE === "recovery" ? "recovery" : "full";

export type NavItem = {
  label: string;
  href: string;
  // 아직 별도 페이지가 준비되지 않아 이동할 수 없는 메뉴 항목입니다.
  disabled?: boolean;
};

// 전역 내비게이션 정책:
// - 개인회생: /individual-recovery 상세 페이지로 연결합니다.
// - 개인파산: /personal-bankruptcy 상세 페이지로 연결합니다.
// - 신청절차: 절대 경로를 쓰지 않고 "#process"만 사용합니다. id="process" 섹션이
//   있는 페이지(홈, 개인회생/개인파산 상세 페이지 등)에서는 그 페이지 내에서
//   스크롤 이동하고, 해당 섹션이 없는 페이지에서는 이동하지 않는 기존 방식을
//   그대로 유지합니다.
// - 자가진단·상담신청: 이 두 섹션은 메인 페이지에만 있으므로, 어느 페이지에 있든
//   항상 메인 페이지의 "/#self-check", "/#consultation"으로 이동합니다.
export const NAV_ITEMS: NavItem[] = [
  { label: "개인회생", href: "/individual-recovery" },
  { label: "개인파산", href: "/personal-bankruptcy" },
  { label: "신청절차", href: "#process" },
  { label: "자가진단", href: "/#self-check" },
  { label: "상담신청", href: "/#consultation" },
];

// ---- 업무분야(full 모드 전용) ----
// Header 업무분야 드롭다운, 홈 PracticeAreasOverview, /services 페이지가
// 동일한 업무명·href를 공유하기 위한 최소 데이터 구조입니다. 아직 상세
// 콘텐츠가 없는 업무분야이므로 법률 설명은 담지 않고 이동 경로만 정의합니다.
export type ServiceLink = {
  label: string;
  href: string;
};

export type ServiceCategory = {
  id: string;
  label: string;
  href: string;
  // 카테고리 안에 이미 확정된 개별 진입점이 여러 개 있는 경우에만 사용합니다
  // (현재는 개인회생·파산 1건 — RECOVERY_BANKRUPTCY_SERVICE 참고).
  items?: ServiceLink[];
};

// Header 업무분야 드롭다운에서 사용하는 5개 카테고리입니다. 개인회생·개인파산은
// Header에 이미 별도 top-level 메뉴가 있어 이 배열에는 포함하지 않습니다.
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: "civil", label: "민사소송", href: "/civil" },
  { id: "enforcement", label: "강제집행", href: "/enforcement" },
  { id: "family", label: "가사·상속", href: "/family" },
  { id: "registration-real-estate", label: "부동산등기", href: "/registration/real-estate" },
  { id: "registration-corporate", label: "법인등기", href: "/registration/corporate" },
];

// 홈 PracticeAreasOverview·/services의 "개인회생·파산" 카드에서 사용합니다.
// 새 법률문구를 만들지 않고, 이미 확정된 두 상세페이지로 이동하는 링크만
// 구성합니다.
export const RECOVERY_BANKRUPTCY_SERVICE: ServiceCategory = {
  id: "recovery-bankruptcy",
  label: "개인회생·파산",
  href: "/individual-recovery",
  items: [
    { label: "개인회생", href: "/individual-recovery" },
    { label: "개인파산·면책", href: "/personal-bankruptcy" },
  ],
};

// ---- Header 전용 상단 내비게이션(full 모드) ----
// 위 SERVICE_CATEGORIES·RECOVERY_BANKRUPTCY_SERVICE는 홈 PracticeAreasOverview·
// /services에서 계속 그대로 사용하므로 수정하지 않고, Header의 "6개 대분류를
// 한 줄에" 요구에 맞는 구조를 이 아래에 완전히 별도로 둡니다. 두 데이터가
// 서로 다른 형태(5개 vs 6개, 민사소송/강제집행이 분리 vs 통합)로 갈라지는
// 것은 의도된 것이며, 서로 영향을 주지 않습니다.
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

// 6개 대분류 확정 목록입니다. 개인회생·파산 / 민사·집행 / 가사·상속은 단순
// dropdown(2단 flyout 없이 items를 평면으로 나열)이고, 나머지 3개는 직접
// 링크입니다. "가사·상속"의 4개 항목에는 아직 어디에서도 실제로 연결되어
// 있지 않던 /family/inheritance, /family/guardianship, /family/name-change가
// 포함됩니다. /legal-info는 이번에 신규 생성하는 최소 허브 페이지입니다.
export const HEADER_NAV_CATEGORIES: HeaderNavCategory[] = [
  {
    id: "recovery-bankruptcy",
    label: "개인회생·파산",
    items: [
      { label: "개인회생", href: "/individual-recovery" },
      { label: "개인파산", href: "/personal-bankruptcy" },
    ],
  },
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
  { id: "real-estate-registration", label: "부동산등기", href: "/registration/real-estate" },
  { id: "corporate-registration", label: "법인등기", href: "/registration/corporate" },
  { id: "legal-info", label: "법률정보", href: "/legal-info" },
];

// full 모드 Header 브랜드 표시명입니다. SITE_CONFIG.siteName 자체는 recovery
// 모드가 계속 사용하므로 값을 덮어쓰지 않고, Header(그리고 layout.tsx의
// title.template)에서만 SITE_MODE 기준으로 분기해 사용합니다. 실제 사무소명이
// 아직 확정되지 않았으므로 특정 사무소명을 새로 만들지 않고 중립적인 DEMO
// 명칭만 사용합니다.
export const HEADER_BRAND_NAME = SITE_MODE === "recovery" ? SITE_CONFIG.siteName : "법무사사무소 홈페이지 DEMO";

export type ReviewFactor = {
  title: string;
  description: string;
};

export const REVIEW_FACTORS: ReviewFactor[] = [
  {
    title: "채무",
    description: "채권자와 현재 채무 현황을 확인합니다.",
  },
  {
    title: "소득",
    description: "계속적·반복적인 소득 여부를 확인합니다.",
  },
  {
    title: "재산",
    description: "부동산·차량·예금 등 재산관계를 확인합니다.",
  },
];

export type ProcessStep = {
  step: string;
  label: string;
  // 확정된 설명이 없는 절차 데이터(예: 개인파산 진행 절차)는 이 필드를 비워두고
  // compact variant로만 표시합니다. 설명을 임의로 만들어 채우지 않습니다.
  description?: string;
};

// 개인회생 진행 절차 9단계의 확정 문구입니다. 법률 검토를 거쳐 확정된 내용이므로
// 절차·기간·효과를 임의로 추가하거나 수정하지 않습니다.
// ProcessSection은 홈페이지(/)와 개인회생 상세 페이지(/individual-recovery)에서
// 공통으로 재사용되므로, 이 배열을 수정하면 두 페이지 모두에 반영됩니다.
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "상담 및 기초 검토",
    description: "소득·채무·재산 등 개인회생 검토에 필요한 기본 사항을 확인합니다.",
  },
  {
    step: "02",
    label: "서류 준비 및 신청서 작성",
    description:
      "필요한 자료를 준비하고 신청서, 채권자목록, 재산목록 및 변제계획안 등 제출서류를 작성합니다.",
  },
  {
    step: "03",
    label: "법원 접수",
    description: "관할 법원에 개인회생절차 개시신청을 접수합니다.",
  },
  {
    step: "04",
    label: "법원 심사 및 보정 대응",
    description: "법원의 심사 과정에서 추가 자료 제출이나 보정이 필요한 경우 이에 대응합니다.",
  },
  {
    step: "05",
    label: "개인회생절차 개시결정",
    description: "법원이 개시요건을 심사하여 개인회생절차 개시 여부를 결정합니다.",
  },
  {
    step: "06",
    label: "채권자 이의기간 및 채권자집회",
    description:
      "채권내용에 대한 이의절차가 진행되고, 채권자집회에서 채무자가 변제계획안에 관한 설명을 하게 됩니다.",
  },
  {
    step: "07",
    label: "변제계획 인가결정",
    description: "법원이 법에서 정한 요건을 심사하여 변제계획의 인가 여부를 결정합니다.",
  },
  {
    step: "08",
    label: "변제계획에 따른 변제",
    description: "인가된 변제계획에 따라 정해진 기간 동안 변제를 수행합니다.",
  },
  {
    step: "09",
    label: "면책결정",
    description:
      "원칙적으로 변제계획에 따른 변제를 완료하면 면책절차를 거쳐 개인회생절차를 마무리합니다.",
  },
];

export type FaqItem = {
  question: string;
  answer: string[];
};

// FAQ 질문·답변의 확정 문구입니다. 법률 검토를 거쳐 확정된 내용이므로
// 법률 효과·기간·예외사항을 임의로 추가하거나 요약하지 않습니다.
// FAQPreview는 홈페이지(/)와 개인회생 상세 페이지(/individual-recovery)에서
// 공통으로 재사용되므로, 이 배열을 수정하면 두 페이지 모두에 반영됩니다.
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "연체 전에도 개인회생을 검토할 수 있나요?",
    answer: [
      "네. 연체가 시작되어야만 개인회생을 검토할 수 있는 것은 아닙니다. 법은 현재 지급불능 상태에 있거나 그러한 상태가 발생할 염려가 있는 급여소득자 또는 영업소득자를 개인회생 대상자로 규정하고 있습니다.",
      "따라서 연체 여부만이 아니라 소득, 채무, 재산 등 전체 상황을 함께 검토해야 합니다.",
    ],
  },
  {
    question: "급여압류 중에도 신청 절차를 검토할 수 있나요?",
    answer: [
      "급여압류가 진행 중이라는 이유만으로 개인회생 신청이 배제되는 것은 아닙니다.",
      "신청 후 법원이 필요하다고 인정하면 강제집행 등에 대한 중지·금지명령을 할 수 있고, 개인회생절차 개시결정이 있으면 채권자목록에 기재된 개인회생채권에 기한 강제집행 등은 법에서 정한 범위에서 중지·금지됩니다.",
      "다만 개인회생을 신청했다는 사실만으로 기존 압류가 즉시 자동 해제되는 것은 아니므로 현재 압류의 내용과 진행상태를 별도로 확인해야 합니다.",
    ],
  },
  {
    question: "자동차를 보유하고 있어도 신청할 수 있나요?",
    answer: [
      "자동차 보유 자체만으로 개인회생 신청이 배제되는 것은 아닙니다.",
      "다만 자동차는 재산목록에 반영하여 시가와 권리관계를 확인해야 하며, 담보권이나 할부금융 등이 있는 경우에는 그 내용도 함께 검토해야 합니다.",
      "자동차의 실제 가치와 담보관계는 청산가치와 변제계획 검토에 영향을 줄 수 있습니다.",
    ],
  },
  {
    question: "배우자 재산은 어떻게 검토하나요?",
    answer: [
      "배우자 명의의 재산이 있다는 이유만으로 그 재산의 일정 비율을 일률적으로 채무자의 재산으로 보는 것은 적절하지 않습니다.",
      "명의신탁이나 부인권 행사 요건 등이 인정되는 특별한 사정이 있는지, 자금 형성 경위와 명의관계, 재산처분 경위 등을 함께 확인해야 합니다.",
      "구체적인 반영 여부는 사실관계와 관할 법원의 실무에 따라 추가 검토가 필요할 수 있습니다.",
    ],
  },
  {
    question: "변제금은 어떤 요소를 기준으로 검토하나요?",
    answer: [
      "월 변제금은 채무액만으로 일률적으로 정해지는 것이 아닙니다.",
      "개인회생에서는 소득에서 세금, 사회보험료, 법원이 인정하는 생계비와 필요한 영업비용 등을 공제한 가용소득을 기초로 변제계획을 검토합니다.",
      "또한 총 변제액은 청산가치 보장 등 법에서 정한 인가요건도 충족해야 하므로, 소득·부양가족·재산 등 여러 요소를 함께 확인해야 합니다.",
    ],
  },
  {
    question: "판결이나 지급명령으로 확정된 민사채무가 있어도 개인회생을 검토할 수 있나요?",
    answer: [
      "네. 판결이나 지급명령 등으로 채무가 확정되어 있다는 사실만으로 개인회생 신청이 배제되는 것은 아닙니다.",
      "개인회생절차 개시결정 전의 원인으로 발생한 재산상의 청구권은 원칙적으로 개인회생채권에 해당하므로, 대여금·판결금 등 민사채무도 채권자목록에 반영하여 전체 채무와 함께 검토할 수 있습니다.",
      "다만 채권의 성격, 담보 여부, 면책의 효력이 미치지 않는 채권인지 여부 등은 별도로 확인할 필요가 있습니다.",
    ],
  },
  {
    question: "민사소송이 진행 중이어도 개인회생을 신청할 수 있나요?",
    answer: [
      "민사소송이 진행 중이라는 이유만으로 개인회생 신청이 배제되는 것은 아닙니다.",
      "소송에서 다투고 있는 청구권도 개인회생절차 개시결정 전의 원인으로 발생한 재산상의 청구권이라면 개인회생채권에 해당할 수 있으므로, 소송의 당사자·청구금액·현재 진행상태 등을 확인하여 채권자목록에 반영할 필요가 있습니다.",
      "개인회생절차가 개시되더라도 일반적인 소송행위가 모두 자동으로 중지되는 것은 아닙니다.",
      "이미 소송 중인 채권의 존부나 금액에 다툼이 있는 경우에는 기존 민사소송과 개인회생채권 확정절차의 관계를 별도로 검토해야 합니다.",
    ],
  },
  {
    question: "손해배상채무도 개인회생으로 처리할 수 있나요?",
    answer: [
      "손해배상채무라는 이유만으로 모두 개인회생에서 제외되는 것은 아닙니다.",
      "개인회생절차 개시결정 전의 원인으로 발생한 손해배상청구권도 개인회생채권에 해당할 수 있습니다.",
      "다만 채무자가 고의로 가한 불법행위로 인한 손해배상이나, 중대한 과실로 타인의 생명 또는 신체를 침해한 불법행위로 인하여 발생한 손해배상 등은 면책의 효력이 미치지 않는 채권으로 규정되어 있습니다.",
      "따라서 손해배상채무가 있는 경우에는 단순히 사건명만으로 판단하기보다 손해배상책임이 발생한 원인과 판결 또는 청구 내용을 구체적으로 확인해야 합니다.",
    ],
  },
  {
    question: "소송 중이라 채무금액이 아직 확정되지 않았는데도 개인회생을 검토할 수 있나요?",
    answer: [
      "채무금액이 아직 판결로 최종 확정되지 않았다는 이유만으로 개인회생 검토가 불가능한 것은 아닙니다.",
      "개인회생절차 개시결정 전의 원인으로 발생한 청구권이라면 현재 소송 중이거나 금액을 다투고 있는 채권도 그 존재와 내용을 확인하여 채권자목록에 반영할 필요가 있습니다.",
      "채권의 존부나 금액에 다툼이 있는 경우에는 개인회생절차의 채권확정 절차와 진행 중인 민사소송의 관계를 별도로 검토해야 합니다.",
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
      "실제 운영 시 홈페이지 상담 신청 폼을 통해 이용자가 직접 입력하는 방식으로 이름, 연락처, 상담 희망 시간, 문의 유형, 문의 내용을 수집할 예정입니다. 현재 DEMO 단계에서는 입력하신 정보가 사무소 또는 외부 서버로 전송되거나 저장되지 않습니다.",
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

// ---- /individual-recovery (개인회생 상세 페이지) ----
// 이 페이지의 법률 설명·판단 기준 중 아직 법률 검토가 끝나지 않은 항목은
// 구체적인 내용을 작성하지 않고 placeholder 문구로만 표시합니다.

// "개인회생이란" 섹션의 확정 문구입니다. 법률 검토를 거쳐 확정된 내용이므로
// 임의로 수정하지 않습니다.
export const INDIVIDUAL_RECOVERY_INTRO_PARAGRAPHS: string[] = [
  "개인회생은 재정적 어려움으로 채무를 정상적으로 변제하기 어려운 개인이, 장래의 계속적 또는 반복적인 소득을 바탕으로 법원이 인가한 변제계획에 따라 채무를 변제하고 경제적 회복을 도모하는 법적 절차입니다.",
  "개인회생 이용 가능 여부는 현재의 소득, 전체 채무액, 재산, 부양가족, 채무의 종류와 발생 경위 등 구체적인 사정을 종합하여 검토해야 합니다.",
];

// recovery-page-refine에서, guardianship 등에서 검증한 부분 문자열 bold
// 패턴을 이 2개 문단에 맞게 적용하기 위한 선택적 배열입니다.
// INDIVIDUAL_RECOVERY_INTRO_PARAGRAPHS와 같은 인덱스의 문단에서 이
// 문자열과 정확히 일치하는 부분만 <strong>으로 감쌉니다(문구 변경 없음,
// 문단당 최대 1곳). 강조할 문자열이 없는 인덱스는 undefined로 둡니다.
export const INDIVIDUAL_RECOVERY_INTRO_PARAGRAPH_EMPHASIS: (string | undefined)[] = [
  "장래의 계속적 또는 반복적인 소득을 바탕으로",
  "현재의 소득, 전체 채무액, 재산, 부양가족, 채무의 종류와 발생 경위",
];

export type EligibilityFactor = {
  title: string;
  content: string;
  // guardianship 등에서 검증한 부분 문자열 bold 패턴입니다: content 중
  // 이 문자열과 정확히 일치하는 부분만 <strong>으로 감쌉니다(문구
  // 변경 없음).
  emphasis?: string;
};

// "개인회생을 신청하려면 어떤 점을 확인해야 하나요?" 섹션의 확정 문구입니다.
// 법률 검토를 거쳐 확정된 내용이므로 임의로 수정하지 않습니다.
export const RECOVERY_ELIGIBILITY_FACTORS: EligibilityFactor[] = [
  {
    title: "계속적인 소득이 예상되는 개인",
    content:
      "개인회생은 급여, 연금 등 정기적이고 확실한 수입을 얻을 가능성이 있는 급여소득자나, 사업소득 등 장래 계속적 또는 반복적으로 수입을 얻을 가능성이 있는 영업소득자가 이용할 수 있습니다.",
    emphasis: "장래 계속적 또는 반복적으로 수입을 얻을 가능성이 있는",
  },
  {
    title: "현재 채무를 정상적으로 변제하기 어렵거나 그럴 염려가 있는 경우",
    content:
      "단순히 채무가 있다는 것만으로 결정되는 것은 아니며, 현재의 채무와 재산·소득 등을 고려하여 지급불능 상태 또는 그러한 상태가 발생할 염려가 있는지를 검토해야 합니다.",
    emphasis: "지급불능 상태 또는 그러한 상태가 발생할 염려가 있는지",
  },
  {
    title: "법에서 정한 채무한도 내에 있는 경우",
    content:
      "개인회생절차 개시신청 당시 담보된 개인회생채권은 15억 원 이하, 그 밖의 개인회생채권은 10억 원 이하이어야 합니다.",
    emphasis: "담보된 개인회생채권은 15억 원 이하, 그 밖의 개인회생채권은 10억 원 이하",
  },
  {
    title: "과거 면책 여부도 확인이 필요합니다",
    content:
      "신청일 전 5년 이내에 개인회생 또는 파산절차에서 면책을 받은 사실이 있는 경우에는 개인회생절차 개시신청의 기각사유가 될 수 있으므로 별도의 확인이 필요합니다.",
    emphasis: "개인회생절차 개시신청의 기각사유가 될 수 있으므로",
  },
];

// "주요 검토 요소" 섹션에서 사용합니다. 기존 REVIEW_FACTORS(채무·소득·재산)에
// 부양가족·채권 내용을 더한 목록이며, 설명은 법률적 판단이 아닌 확인 절차
// 수준으로만 작성합니다.
export const INDIVIDUAL_RECOVERY_REVIEW_FACTORS: ReviewFactor[] = [
  { title: "소득", description: "계속적·반복적인 소득 여부를 확인합니다." },
  { title: "채무", description: "채권자와 현재 채무 현황을 확인합니다." },
  { title: "재산", description: "부동산·차량·예금 등 재산관계를 확인합니다." },
  { title: "부양가족", description: "부양가족 현황을 확인합니다." },
  { title: "채권 내용", description: "채권자별 채권 내용을 확인합니다." },
];

export type DetailedReviewTopic = {
  title: string;
  paragraphs: string[];
  // guardianship 등에서 검증한 부분 문자열 bold 패턴을 문단 배열에 맞게
  // 확장한 필드입니다. paragraphs와 같은 인덱스의 문단에서 이 문자열과
  // 정확히 일치하는 부분만 <strong>으로 감쌉니다(문구 변경 없음). 강조할
  // 문자열이 없는 인덱스는 undefined로 두거나 배열을 그 길이만큼만
  // 채웁니다.
  paragraphEmphasis?: (string | undefined)[];
};

// "변제계획 수립 시 주요 검토사항" 섹션의 확정 문구입니다. 법률 검토를 거쳐
// 확정된 내용이므로 임의로 수정하지 않습니다.
// "주요 검토 요소"(카테고리 요약, 한 줄 설명)와 달리 소득·재산·변제기간을
// 문단 단위로 설명하는 별도 상세 섹션이며, 서로 내용이 겹치지 않습니다.
export const RECOVERY_DETAILED_REVIEW_TOPICS: DetailedReviewTopic[] = [
  {
    title: "소득과 변제가능액",
    paragraphs: [
      "개인회생에서는 현재의 소득과 앞으로 계속될 것으로 예상되는 소득이 중요한 검토 요소입니다.",
      "변제계획은 소득에서 세금과 생계에 필요한 비용 등을 고려하여 실제로 변제에 사용할 수 있는 금액을 기초로 작성하게 됩니다.",
      "인정되는 생계비와 월 변제금은 소득액만으로 일률적으로 결정되는 것이 아니라 부양가족, 주거비 등 구체적인 사정을 함께 검토해야 합니다.",
    ],
    paragraphEmphasis: [
      undefined,
      "실제로 변제에 사용할 수 있는 금액",
      "소득액만으로 일률적으로 결정되는 것이 아니라",
    ],
  },
  {
    title: "재산과 청산가치",
    paragraphs: [
      "개인회생에서는 채무뿐 아니라 현재 보유하고 있는 재산도 함께 확인합니다.",
      "변제계획에 따른 총 변제금액은 원칙적으로 채무자가 파산할 경우 채권자들이 배당받을 수 있는 금액보다 적지 않아야 하므로, 재산의 종류와 가치를 정확히 확인하는 과정이 중요합니다.",
      "부동산, 차량, 예금, 보험 등은 권리관계와 실제 가치 등에 따라 검토 결과가 달라질 수 있으므로 단순 보유 여부만으로 판단하지 않습니다.",
    ],
    paragraphEmphasis: [undefined, undefined, "단순 보유 여부만으로 판단하지 않습니다"],
  },
  {
    title: "변제기간",
    paragraphs: [
      "개인회생의 변제기간은 원칙적으로 변제개시일부터 3년을 초과하지 않는 범위에서 정합니다.",
      "다만 청산가치 보장 등 법에서 정한 요건을 충족하기 위해 필요한 경우와 같이 특별한 사정이 있는 때에는 5년을 초과하지 않는 범위에서 변제기간이 정해질 수 있습니다.",
      "따라서 모든 사건의 변제기간이 동일하게 결정되는 것은 아니며, 채무액·소득·재산과 변제계획의 내용에 따라 구체적인 검토가 필요합니다.",
    ],
    paragraphEmphasis: ["변제개시일부터 3년을 초과하지 않는 범위", "5년을 초과하지 않는 범위"],
  },
];

export type ChecklistItem = {
  title: string;
};

// "신청 전 확인사항" 섹션의 제목만 구성합니다. 구체적인 법률 판단 기준은
// 아직 작성하지 않습니다.
export const PRE_APPLICATION_CHECKLIST: ChecklistItem[] = [
  { title: "현재 소득 상황" },
  { title: "전체 채무 현황" },
  { title: "부동산 및 차량" },
  { title: "예금·보험 등 재산" },
  { title: "부양가족" },
  { title: "진행 중인 압류·강제집행 여부" },
];

export type RequiredDocumentCategory = {
  category: string;
  note: string;
};

// "개인회생 준비자료 안내" 섹션의 확정 문구입니다. 법률 검토를 거쳐 확정된
// 내용이므로 구체적인 증명서 이름·발급기관·제출부수·유효기간·법원별 제출기준을
// 임의로 추가하지 않습니다. 6개 카테고리 구조는 그대로 유지합니다.
export const REQUIRED_DOCUMENTS_INTRO =
  "개인회생을 검토할 때에는 소득·채무·재산 등 신청인의 현재 상황을 확인할 수 있는 자료가 필요합니다.";

export const REQUIRED_DOCUMENT_CATEGORIES: RequiredDocumentCategory[] = [
  {
    category: "신분 및 가족관계 자료",
    note: "신청인의 주민등록 및 가족관계, 혼인관계, 부양가족 등을 확인하기 위한 자료를 준비합니다.",
  },
  {
    category: "소득 관련 자료",
    note: "급여, 사업, 연금 등 현재 소득과 소득의 계속성을 확인할 수 있는 자료가 필요합니다.",
  },
  {
    category: "채무 관련 자료",
    note: "금융기관, 카드사, 대부업체 등 채권자와 채무의 원금·이자·담보 여부 등을 확인할 수 있는 자료를 준비합니다.",
  },
  {
    category: "재산 관련 자료",
    note: "부동산, 자동차, 예금, 보험, 임차보증금 등 보유 재산과 그 가치를 확인할 수 있는 자료가 필요합니다.",
  },
  {
    category: "주거 관련 자료",
    note: "현재 주거 형태와 임차보증금, 주거비 등을 확인할 수 있는 자료를 준비합니다.",
  },
  {
    category: "사건별 추가자료",
    note: "압류·강제집행, 담보채무, 최근 재산처분이나 채무 발생 경위 등 사건의 내용에 따라 추가자료가 필요할 수 있습니다.",
  },
];

export const REQUIRED_DOCUMENTS_NOTICE: string[] = [
  "위 내용은 개인회생 상담 및 신청 준비 과정에서 일반적으로 확인하는 자료를 항목별로 안내한 것입니다.",
  "실제 제출서류와 추가 소명자료는 관할 법원과 사건의 구체적인 내용에 따라 달라질 수 있습니다.",
];

// ---- /personal-bankruptcy (개인파산·면책 상세 페이지) ----
// 이 블록의 모든 문구는 전달받은 확정 문구를 그대로 사용합니다.
// 새로운 법률요건·조문·판례·금액·기간을 임의로 추가하거나 추정하지 않으며,
// placeholder도 넣지 않습니다(확정되지 않은 항목 자체를 만들지 않습니다).

export const BANKRUPTCY_HERO = {
  title: "개인파산·면책",
  lead: "채무를 정상적으로 변제하기 어려운 상황이라면 소득·재산·채무의 발생 경위 등을 함께 살펴 개인파산과 면책절차를 검토할 수 있습니다.",
  // 파산선고와 면책이 같지 않다는 점을 페이지 전반에서 반복해 명확히 하기 위해
  // Hero와 "개인파산과 면책은 무엇이 다른가요?" 섹션에서 동일하게 재사용합니다.
  note: "파산선고와 면책은 서로 다른 절차이며, 파산선고를 받았다고 남은 채무의 책임이 자동으로 면제되는 것은 아닙니다.",
  // guardianship 등에서 검증한 부분 문자열 bold 패턴입니다: note 중 이
  // 문자열과 정확히 일치하는 부분만 <strong>으로 감쌉니다(문구 변경
  // 없음). note를 재사용하는 두 곳(Hero, BankruptcyDefinitions) 모두
  // 같은 위치가 강조됩니다.
  emphasis: "파산선고를 받았다고 남은 채무의 책임이 자동으로 면제되는 것은 아닙니다",
};

// Hero와 마지막 CTA 섹션에서 동일하게 재사용하는 버튼 문구입니다.
export const BANKRUPTCY_CTA_LABELS = {
  consultation: "상담 안내",
  selfCheck: "개인회생 자가진단",
};

export type BankruptcyCard = {
  title: string;
  content: string;
  // guardianship 등에서 검증한 부분 문자열 bold 패턴입니다: content 중
  // 이 문자열과 정확히 일치하는 부분만 <strong>으로 감쌉니다(문구
  // 변경 없음).
  emphasis?: string;
};

// "개인파산과 면책은 무엇이 다른가요?" 섹션의 카드 2개입니다.
export const BANKRUPTCY_DEFINITION_CARDS: BankruptcyCard[] = [
  {
    title: "개인파산",
    content:
      "개인인 채무자가 자신의 재산과 변제능력으로 채무를 일반적·계속적으로 변제하기 어려운 지급불능 상태에 있는 경우, 채무관계를 정리하기 위한 파산절차입니다.",
    emphasis: "채무를 일반적·계속적으로 변제하기 어려운 지급불능 상태",
  },
  {
    title: "면책",
    content:
      "파산절차에서 배당·변제되지 않은 채무에 대하여 법원의 면책결정을 통해 변제책임을 면제받는 절차입니다. 다만 법에서 정한 비면책채권은 면책결정 후에도 책임이 남을 수 있습니다.",
    emphasis: "비면책채권은 면책결정 후에도 책임이 남을 수 있습니다",
  },
];

export const BANKRUPTCY_DEFINITION_NOTE =
  "개인파산 신청과 면책 신청은 구별되지만 개인채무자의 경우 대부분 함께 신청할 수 있습니다.";

// "개인파산을 검토할 때 확인하는 사항" 섹션의 카드 4개입니다.
export const BANKRUPTCY_REVIEW_FACTORS: BankruptcyCard[] = [
  {
    title: "지급불능 여부",
    content:
      "현재 재산뿐 아니라 소득, 생계비, 장래 변제능력 등을 종합하여 채무를 일반적·계속적으로 변제할 수 있는지를 확인합니다.",
    emphasis: "채무를 일반적·계속적으로 변제할 수 있는지",
  },
  {
    title: "재산과 최근 처분내역",
    content: "부동산, 차량, 예금, 보험 등 재산과 최근 재산처분·자금이동 내역 등을 확인할 수 있습니다.",
    emphasis: "최근 재산처분·자금이동 내역",
  },
  {
    title: "채무가 늘어난 경위",
    content: "대출, 사업, 생활비, 보증, 사행행위 등 채무 발생·증가 경위는 면책심사와 관련해 확인될 수 있습니다.",
    emphasis: "채무 발생·증가 경위는 면책심사와 관련해",
  },
  {
    title: "과거 면책 여부",
    content:
      "개인파산 면책 확정 후 7년, 개인회생 면책 확정 후 5년이 지나지 않은 경우에는 면책불허가사유에 해당할 수 있습니다.",
    emphasis: "개인파산 면책 확정 후 7년, 개인회생 면책 확정 후 5년",
  },
];

// "파산선고와 면책은 별개입니다" 섹션의 흐름입니다. 단계 번호가 아니라
// 개념적인 흐름이므로 화살표로 연결해 표시합니다.
export const BANKRUPTCY_DECLARATION_FLOW: string[] = [
  "파산신청·면책신청",
  "법원의 파산원인 심사",
  "파산선고",
  "재산 및 면책 관련 조사",
  "파산절차의 폐지 또는 환가·배당 후 종결",
  "면책 여부 심사",
  "면책결정",
];

export const BANKRUPTCY_DECLARATION_FLOW_NOTE =
  "사건에 따라 파산관재인 선임 여부, 재산의 환가·배당 여부, 폐지·종결 절차 등은 달라질 수 있습니다.";

// "면책 심사에서 특히 확인되는 사항" 섹션 — A. 면책불허가사유
export const BANKRUPTCY_NONDISCHARGE_GROUNDS_INTRO = "법률상 면책불허가사유가 존재할 수 있습니다.";

export const BANKRUPTCY_NONDISCHARGE_GROUNDS: string[] = [
  "재산을 숨기거나 채권자에게 불이익하게 처분한 경우",
  "허위의 채권자목록 등 신청서류를 제출하거나 재산상태에 관하여 허위 진술을 한 경우",
  "파산원인 사실을 숨기고 일정한 신용거래로 재산을 취득한 경우",
  "법에서 정한 기간 내에 종전 면책을 받은 경우",
  "과다한 낭비·도박 등 사행행위로 재산을 현저히 감소시키거나 과대한 채무를 부담한 경우",
  "법에서 정한 채무자의 의무를 위반한 경우",
];

export const BANKRUPTCY_NONDISCHARGE_GROUNDS_NOTE =
  "면책불허가사유가 있다고 해서 모든 사건에서 결과가 기계적으로 동일한 것은 아니며, 법은 파산에 이르게 된 경위와 그 밖의 사정을 고려하여 재량면책을 허가할 수 있는 규정도 두고 있습니다.";
// bankruptcy-page-refine에서, 면책불허가사유가 있어도 결과가 기계적으로
// 정해지지 않는다는 이 note의 핵심(재량면책 규정)을 guardianship 등과
// 동일한 방식으로 강조하기 위한 companion 상수입니다. 문구 자체는
// 변경하지 않습니다.
export const BANKRUPTCY_NONDISCHARGE_GROUNDS_NOTE_EMPHASIS = "재량면책을 허가할 수 있는";

// "면책 심사에서 특히 확인되는 사항" 섹션 — B. 비면책채권
export const BANKRUPTCY_NONDISCHARGEABLE_CLAIMS_TITLE = "비면책채권";
export const BANKRUPTCY_NONDISCHARGEABLE_CLAIMS_SUBTITLE = "면책되어도 남을 수 있는 채무입니다.";

export const BANKRUPTCY_NONDISCHARGEABLE_CLAIMS: string[] = [
  "조세",
  "벌금·과료·형사소송비용·추징금·과태료",
  "고의의 불법행위로 인한 손해배상",
  "중대한 과실로 타인의 생명 또는 신체를 침해한 불법행위 손해배상",
  "일정한 근로자의 임금·퇴직금 등",
  "채무자가 악의로 채권자목록에 기재하지 않은 청구권(법에서 정한 예외 있음)",
  "양육비·부양비 등",
];

export const BANKRUPTCY_NONDISCHARGEABLE_CLAIMS_NOTE =
  "위 항목은 예시이며, 개별 채무의 면책 여부는 구체적인 성격을 확인해야 합니다.";

// "재산이 있으면 개인파산을 신청할 수 없나요?" 섹션의 확정 문구입니다.
export const BANKRUPTCY_PROPERTY_NOTE_PARAGRAPHS: string[] = [
  "재산이 있다는 사실만으로 개인파산 신청이 당연히 배제되는 것은 아닙니다. 파산선고 당시 채무자의 재산은 원칙적으로 파산재단에 속하지만, 법률상 압류할 수 없는 재산은 파산재단에 속하지 않습니다.",
  "어떤 재산이 환가 대상이 되는지, 보유할 수 있는 재산의 범위가 어떠한지는 재산의 종류와 구체적인 사건 내용을 확인하여 판단해야 합니다.",
];
// bankruptcy-page-refine에서, guardianship 등에서 검증한 부분 문자열
// bold 패턴을 이 2개 문단에 맞게 적용하기 위한 선택적 배열입니다.
// BANKRUPTCY_PROPERTY_NOTE_PARAGRAPHS와 같은 인덱스의 문단에서 이
// 문자열과 정확히 일치하는 부분만 <strong>으로 감쌉니다(문구 변경 없음,
// 문단당 최대 1곳).
export const BANKRUPTCY_PROPERTY_NOTE_PARAGRAPH_EMPHASIS: (string | undefined)[] = [
  "법률상 압류할 수 없는 재산",
  "재산의 종류와 구체적인 사건 내용을 확인하여 판단해야",
];

// "개인파산 진행 절차" 섹션 — 단계 이름만 확정되어 있고 설명 문구는 아직
// 전달받지 않았으므로, description 없이 compact variant로만 사용합니다.
export const BANKRUPTCY_PROCESS_STEPS: ProcessStep[] = [
  { step: "01", label: "상담 및 기초검토" },
  { step: "02", label: "신청자료 준비" },
  { step: "03", label: "개인파산·면책 신청" },
  { step: "04", label: "법원의 심사 및 보정" },
  { step: "05", label: "파산선고 및 필요한 조사" },
  { step: "06", label: "재산 환가·배당 또는 파산절차 폐지·종결" },
  { step: "07", label: "면책 여부 심사" },
  { step: "08", label: "면책결정" },
];

export const BANKRUPTCY_PROCESS_NOTE = "구체적인 절차는 사건 내용에 따라 달라질 수 있습니다.";

// 개인파산 FAQ 8개입니다. FAQ_ITEMS와 별도로 관리하며, 홈페이지·개인회생
// 페이지의 FAQ_ITEMS에는 영향을 주지 않습니다.
export const BANKRUPTCY_FAQ_ITEMS: FaqItem[] = [
  {
    question: "소득이 있어도 개인파산을 신청할 수 있나요?",
    answer: [
      "소득의 존재만으로 개인파산이 당연히 배제되는 것은 아닙니다. 재산, 소득, 생계비, 채무 규모와 변제능력 등을 종합하여 지급불능 상태인지 판단하게 됩니다.",
    ],
  },
  {
    question: "파산선고를 받으면 채무가 바로 없어지나요?",
    answer: [
      "아닙니다. 파산절차와 면책절차는 구별되며, 남은 채무의 변제책임은 면책결정이 확정되어야 원칙적으로 면제됩니다. 비면책채권은 별도로 남을 수 있습니다.",
    ],
  },
  {
    question: "재산이 있으면 개인파산이 불가능한가요?",
    answer: [
      "재산이 있다는 이유만으로 신청이 당연히 배제되는 것은 아닙니다. 다만 파산재단에 속하는 재산은 환가·배당의 대상이 될 수 있으므로 재산의 종류와 가액을 구체적으로 확인해야 합니다.",
    ],
  },
  {
    question: "도박이나 과소비로 생긴 채무가 있으면 무조건 면책이 안 되나요?",
    answer: [
      "과다한 낭비·도박 등은 법률상 면책불허가사유가 될 수 있습니다. 다만 법은 파산에 이르게 된 경위와 그 밖의 사정을 고려하여 재량면책을 허가할 수 있는 규정도 두고 있으므로 구체적인 사실관계를 확인해야 합니다.",
    ],
  },
  {
    question: "예전에 면책을 받은 적이 있어도 다시 신청할 수 있나요?",
    answer: [
      "과거 면책의 종류와 확정일을 확인해야 합니다. 개인파산 면책 확정 후 7년, 개인회생 면책 확정 후 5년이 지나지 않은 경우에는 면책불허가사유가 될 수 있습니다.",
    ],
  },
  {
    question: "세금이나 벌금도 면책되나요?",
    answer: [
      "조세와 벌금·과료·형사소송비용·추징금·과태료 등 법률에서 비면책채권으로 정한 청구권은 면책결정이 확정되어도 책임이 면제되지 않습니다.",
    ],
  },
  {
    question: "채권자를 빠뜨리면 어떻게 되나요?",
    answer: [
      "채무자가 채무의 존재를 알면서도 악의로 채권자목록에 기재하지 않은 청구권은 비면책채권이 될 수 있습니다. 따라서 채권자와 채무내역을 빠짐없이 확인하는 것이 중요합니다.",
    ],
  },
  {
    question: "파산절차에서 재산은 모두 처분되나요?",
    answer: [
      "모든 재산이 일률적으로 처분되는 것은 아닙니다. 법률상 압류할 수 없는 재산은 파산재단에 속하지 않으며, 구체적인 환가 여부는 재산의 종류와 사건 내용에 따라 확인해야 합니다.",
    ],
  },
];
