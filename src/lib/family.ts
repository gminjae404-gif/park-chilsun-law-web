import type { FaqItem } from "@/lib/constants";

// 가사·상속(/family) 페이지 전용 확정 문구입니다. 강제집행 페이지에서
// 적용한 "쉬운 말 → 필요한 경우 법률용어 보충" 순서를 그대로 따르며,
// 법적 의미를 지나치게 단순화하지 않습니다.
//
// 이 페이지의 가장 중요한 설계 원칙: 가사·상속은 혼인·이혼/친자·입양/
// 후견/상속이 각각 시작 조건과 진행절차가 다른 "허브형" 영역입니다.
// 따라서 공용 ProcessSection(timeline)을 사용하지 않고, "1→2→3단계"
// 식으로 모든 사건이 같은 순서로 진행되는 것처럼 표현하지 않습니다.
// FamilyProcedures는 번호 배지 없는 병렬 editorial section으로
// 구현합니다(구현은 components/family/FamilyProcedures.tsx 참고).
//
// 민사(civil.ts)·강제집행(enforcement.ts)과 마찬가지로 등기 그룹과
// 정보 성격이 달라 데이터/컴포넌트를 재사용하지 않고 이 파일에
// 독립적으로 격리합니다. FaqItem 타입만 constants.ts에서 그대로
// 가져다 씁니다.
//
// 법무사의 업무범위(법원 제출서류의 작성·제출대행 및 이에 부수되는
// 업무)를 벗어나는 "가사소송을 대리합니다"·"법정에서 대신 변론합니다"
// 등의 표현은 사용하지 않습니다. 아래 단정도 하지 않습니다: 입양은
// 모두 가정법원 허가가 필요하다 / 성년자·미성년자 입양 절차가 같다 /
// 몸이 불편하거나 노인이면 성년후견 대상이다 / 상속포기와 한정승인의
// 효과가 같다 / 사망일로부터 무조건 3개월이다 / 모든 상속문제가 3개월
// 내 처리 대상이다 / 접수만 하면 모든 채무 문제가 끝난다 / 모든
// 가족관계 문제에 법원의 심판이 필요하다.
export const FAMILY_HERO = {
  title: "가사·상속",
  lead: "가족관계에 관한 문제는 현재의 가족관계와 원하는 법적 결과에 따라 확인해야 할 절차가 달라집니다. 혼인·이혼, 친자·입양, 후견, 상속 등 어떤 문제인지 먼저 구분하고 관련 자료와 필요한 절차를 살펴봅니다.",
  note: "가사·상속 관련 법원 제출서류의 작성·제출대행과 이에 부수되는 일반적인 안내를 제공합니다.",
};

export const FAMILY_INTRO = {
  heading: "같은 가족 문제라도 필요한 절차는 서로 다릅니다",
  paragraph:
    "가사·상속 사건은 단순히 '가족 문제'라는 이유만으로 같은 절차를 거치는 것이 아닙니다. 혼인관계를 정리하려는 경우, 법률상 부모·자녀 관계를 확인하거나 새롭게 형성하려는 경우, 후견이 필요한 경우, 상속재산이나 채무를 정리하는 경우에는 각각 확인해야 할 내용이 다릅니다. 따라서 먼저 현재 가족관계와 원하는 결과가 무엇인지 정리하는 것이 중요합니다.",
  // family-page-refine에서, 이 페이지 전체를 관통하는 핵심 판단기준
  // (혼인·이혼/친자·입양/후견/상속 중 어느 영역인지 구분하기 전에 먼저
  // 현재 가족관계와 원하는 결과를 정리해야 한다는 점)을 civil/enforcement와
  // 동일한 방식으로 강조합니다.
  emphasis: "현재 가족관계와 원하는 결과가 무엇인지 정리하는 것",
};

export type FamilyAreaItem = {
  title: string;
  description: string;
  // 이 영역에 대응하는 완성된 상세페이지가 있는 경우에만 채웁니다.
  // 지금은 영역당 상세페이지가 1개뿐이라 배열이 아닌 단일 객체로
  // 충분합니다(향후 한 영역에 여러 상세페이지가 생기면 그때
  // detailLinks 배열로 확장). 상세페이지가 아직 없는 영역(혼인·이혼)은
  // 이 필드를 생략해 링크가 생기지 않습니다.
  detailLink?: {
    label: string;
    href: string;
  };
};

export const FAMILY_AREAS_HEADING = "가사·상속의 주요 영역";
export const FAMILY_AREAS_DESCRIPTION = "현재 상황이 어느 영역에 해당하는지부터 살펴볼 수 있습니다.";

// 4개 영역은 "어떤 문제인가"를 구분하는 목적이므로, 재산분할·위자료·
// 친권 등 세부 쟁점을 여기서 나열하지 않습니다. 입양(②)은 미성년자·
// 성년자 절차가 같다고 단정하지 않고, 후견(③)은 신체적 불편만으로
// 대상이 된다고 표현하지 않습니다.
//
// detailLink: 완성된 상세페이지로 이동하는 순수 내비게이션 링크입니다.
// 제목·설명 문구는 상세페이지 연결과 무관하게 전혀 수정하지 않았습니다.
// "친자·입양·가족관계"의 detailLink는 개명허가(/family/name-change)로
// 연결합니다 — 개명은 가족관계등록과 관련된 문제이지만, 이 영역의 기존
// 설명문(입양·친자관계 중심)을 개명에 맞춰 다시 쓰지 않고 문구는 그대로
// 둔 채 링크만 추가했습니다. "후견"은 성년후견·한정후견·특정후견·
// 임의후견을 폭넓게 다루는 /family/guardianship으로, "상속"은
// /family/inheritance로 연결합니다. "혼인·이혼"은 대응하는 완성된
// 상세페이지가 아직 없어 detailLink를 두지 않았습니다(존재하지 않는
// 페이지로 링크를 만들지 않음).
export const FAMILY_AREAS: FamilyAreaItem[] = [
  {
    title: "혼인·이혼",
    description:
      "혼인관계의 성립이나 해소, 이혼과 이에 관련된 가족관계 문제 등 현재 혼인관계와 필요한 절차를 확인합니다.",
  },
  {
    title: "친자·입양·가족관계",
    description:
      "부모·자녀 관계, 입양, 가족관계등록과 관련된 문제 등 현재 가족관계와 원하는 법적 결과를 확인합니다.",
    detailLink: { label: "개명허가 자세히 보기", href: "/family/name-change" },
  },
  {
    title: "후견",
    description:
      "질병·장애·노령 등으로 인한 정신적 제약 때문에 스스로 사무를 처리하기 어려운 경우, 현재 상태와 필요한 후견절차를 확인합니다.",
    detailLink: { label: "후견 자세히 보기", href: "/family/guardianship" },
  },
  {
    title: "상속",
    description:
      "상속재산과 채무, 상속포기·한정승인, 상속재산의 분할 등 현재 상속관계에서 필요한 절차를 확인합니다.",
    detailLink: { label: "상속 자세히 보기", href: "/family/inheritance" },
  },
];

export type FamilyGuardianshipTypeItem = {
  title: string;
  description: string;
  // /family/guardianship의 GUARDIANSHIP_TYPE_CARDS에서 검증한 부분
  // 문자열 bold 패턴과 동일합니다: description 중 이 문자열과 정확히
  // 일치하는 부분만 <strong>으로 감쌉니다(문구 자체는 그대로 유지).
  emphasis?: string;
};

// FamilyAreas의 "후견" 항목을 보완하는 section입니다. 후견은 성년후견·
// 한정후견·특정후견·미성년후견·임의후견처럼 대상과 요건, 절차가 서로
// 다른 여러 제도를 통칭하므로, 5종류를 한 문단이 아니라 개별 항목으로
// 구분해 보여줍니다. 성년후견/한정후견을 단순 중증·경증 차이로,
// 미성년후견을 "정신능력 부족" 때문으로, 임의후견을 "계약 즉시 효력
// 발생"으로 표현하지 않습니다. 청구권자·감정·진단서·후견인의
// 대리권/동의권/취소권 등 세부내용은 이 페이지에서 다루지 않습니다.
export const FAMILY_GUARDIANSHIP_GUIDE_HEADING = "후견은 상황에 따라 구분됩니다";
export const FAMILY_GUARDIANSHIP_GUIDE_DESCRIPTION =
  "후견은 모두 같은 기준과 절차로 진행되지 않습니다. 성년자의 사무처리 능력과 필요한 도움의 범위, 미성년자의 친권관계, 장래를 대비한 후견계약 여부 등에 따라 확인해야 할 제도가 달라집니다.";

export const FAMILY_GUARDIANSHIP_TYPES: FamilyGuardianshipTypeItem[] = [
  {
    title: "성년후견",
    description:
      "질병·장애·노령 등으로 인한 정신적 제약으로 스스로 사무를 처리할 능력이 지속적으로 결여된 경우에 검토하는 후견입니다.",
    emphasis: "정신적 제약으로 스스로 사무를 처리할 능력이 지속적으로 결여된",
  },
  {
    title: "한정후견",
    description:
      "질병·장애·노령 등으로 인한 정신적 제약으로 사무를 처리할 능력이 부족한 경우, 필요한 후견의 범위를 확인합니다.",
    emphasis: "사무를 처리할 능력이 부족한",
  },
  {
    title: "특정후견",
    description:
      "정신적 제약으로 일시적인 도움이 필요하거나 특정한 사무에 대해서만 도움이 필요한 경우, 필요한 기간이나 사무의 범위를 정해 검토하는 후견입니다.",
    emphasis: "일시적인 도움이 필요하거나 특정한 사무에 대해서만 도움이 필요한",
  },
  {
    title: "미성년후견",
    description:
      "미성년자에게 친권자가 없거나 친권자가 친권의 전부 또는 일부를 행사할 수 없는 경우 등에 필요한 후견입니다. 성년자를 위한 후견과는 출발점과 확인사항이 다릅니다.",
    emphasis: "친권자가 없거나 친권자가 친권의 전부 또는 일부를 행사할 수 없는 경우",
  },
  {
    title: "임의후견",
    description:
      "장래에 정신적 제약으로 사무처리 능력이 부족해질 상황에 대비하여 미리 후견계약으로 재산관리나 신상보호에 관한 사무를 정해 두는 방식입니다. 후견계약은 공정증서로 체결하고, 가정법원이 임의후견감독인을 선임한 때부터 효력이 발생합니다.",
    emphasis: "미리 후견계약으로 재산관리나 신상보호에 관한 사무를 정해 두는",
  },
];

export const FAMILY_GUARDIANSHIP_GUIDE_NOTE =
  "어떤 후견이 필요한지는 나이나 신체적 불편만으로 정해지는 것이 아니라, 현재 상태와 사무처리 능력, 친권관계 및 필요한 도움의 범위 등을 함께 확인해 구분해야 합니다.";

export type FamilyPreCheckItem = {
  title: string;
  description: string;
  // family-page-refine에서, 항목별 핵심 판단기준만 civil/enforcement와
  // 동일한 방식으로 강조하기 위한 선택적 필드입니다(모든 항목이 아니라
  // "원하는 결과 판단"·"당사자 확인"·"가족관계 자료"처럼 절차를 구분하는
  // 데 특히 중요한 항목에만 지정합니다).
  emphasis?: string;
};

export const FAMILY_PRE_CHECK_HEADING = "먼저 확인하면 좋은 다섯 가지";
export const FAMILY_PRE_CHECK_DESCRIPTION =
  "사건의 종류에 관계없이 먼저 아래 다섯 가지를 확인하면 필요한 절차를 정리하는 데 도움이 됩니다.";

export const FAMILY_PRE_CHECK_ITEMS: FamilyPreCheckItem[] = [
  {
    title: "현재 가족관계",
    description: "혼인관계, 부모·자녀 관계, 상속관계 등 현재 법률상 가족관계를 확인합니다.",
  },
  {
    title: "원하는 결과",
    description:
      "혼인관계를 정리하려는 것인지, 가족관계를 새롭게 형성하거나 바로잡으려는 것인지, 상속이나 후견 문제를 해결하려는 것인지 원하는 결과를 먼저 정리합니다.",
    emphasis: "상속이나 후견 문제를 해결하려는 것인지",
  },
  {
    title: "당사자 관계",
    description:
      "본인과 상대방, 부모·자녀, 피상속인과 상속인 등 사건에 관계된 사람들의 관계를 확인합니다.",
    emphasis: "본인과 상대방, 부모·자녀, 피상속인과 상속인",
  },
  {
    title: "가족관계 자료",
    description: "가족관계증명서, 기본증명서 등 현재 가족관계를 확인할 수 있는 자료를 살펴봅니다.",
    emphasis: "현재 가족관계를 확인할 수 있는 자료",
  },
  {
    title: "추가 확인사항",
    description:
      "재산, 채무, 입양 관계, 후견 필요성 등 사건의 종류에 따라 추가로 확인해야 할 내용을 정리합니다.",
  },
];

export type FamilyDocumentCategory = {
  category: string;
  items: string[];
  note?: string;
};

export const FAMILY_DOCUMENTS_HEADING = "상담 전 준비하면 좋은 자료";
export const FAMILY_DOCUMENTS_DESCRIPTION =
  "모든 서류를 미리 준비할 필요는 없습니다. 현재 가지고 있는 자료부터 확인하면 됩니다.";

export const FAMILY_DOCUMENT_CATEGORIES: FamilyDocumentCategory[] = [
  {
    category: "가족관계를 확인할 수 있는 자료",
    items: ["가족관계증명서", "기본증명서", "혼인관계증명서 등"],
    note: "사건의 종류에 따라 필요한 증명서는 달라질 수 있습니다.",
  },
  {
    category: "사건의 경위를 확인할 수 있는 자료",
    items: [
      "당사자 사이의 합의나 연락 내용",
      "법원 또는 행정기관에서 받은 문서",
      "현재 상황을 확인할 수 있는 관련 자료",
    ],
  },
  {
    category: "재산·채무 등 사건별 자료",
    items: [
      "상속재산 또는 채무 관련 자료",
      "재산관계 관련 자료",
      "그 밖에 사건의 종류에 따라 필요한 자료",
    ],
  },
];

export const FAMILY_DOCUMENTS_NOTE =
  "구체적으로 필요한 자료는 사건의 종류와 현재 상황을 확인한 뒤 안내해 드립니다.";

// 상속 사건에서만 추가로 문제되는 자료를 3개 카드와 같은 무게의 새
// 카드로 늘어놓지 않고, FamilyDocuments 내부의 차분한 bordered
// sub-section 1개로 보완합니다. 제적등본 등을 "모든 상속사건의
// 필수서류"처럼 표현하지 않고, 상속인 범위·가족관계·사망 시점·사건
// 종류에 따라 달라질 수 있다는 완충 문구로 마무리합니다.
export const FAMILY_INHERITANCE_DOCUMENTS_HEADING = "상속이라면 추가로 확인할 자료";

export const FAMILY_INHERITANCE_DOCUMENTS_ITEMS: string[] = [
  "사망하신 분의 가족관계·기본증명 관련 자료",
  "주민등록 말소 관련 자료",
  "과거 가족관계 확인이 필요한 경우 제적등본·제적초본 등 관련 자료",
  "상속재산과 채무를 확인할 수 있는 자료",
];

export const FAMILY_INHERITANCE_DOCUMENTS_NOTE =
  "상속인의 범위와 가족관계, 사망 시점 및 사건의 종류에 따라 필요한 서류는 달라질 수 있습니다.";

// 가족관계등록증명서(가족관계증명서·기본증명서 등)의 "일반/상세" 종류나
// 기재범위, 법원의 최근 발급본 요구 여부는 사건마다 다를 수 있어
// 여기서는 일반 원칙만 짧게 안내합니다. 구체적인 발급기준은 이
// 페이지가 아니라 향후 별도 "서류 준비·발급 안내" 페이지에서 다룰
// 예정이므로, "무조건 상세증명서"·"모든 서류 3개월 이내"·"주소보정은
// 항상 1개월 이내"처럼 일률적인 기준을 단정하지 않습니다.
export const FAMILY_DOCUMENTS_REGISTRATION_NOTE =
  "가족관계등록증명서는 사건에 따라 필요한 종류와 기재범위가 다를 수 있으며, 법원에서 최근 발급본을 요구하는 경우에는 해당 안내를 우선 확인합니다.";

export type FamilyProcedureItem = {
  title: string;
  description: string;
};

// "사건별로 절차가 다르다"는 것을 보여주는 병렬 section입니다.
// FamilyAreas(어떤 문제인가)와 역할이 겹치지 않도록, 여기서는 "그
// 문제를 어떤 정보(관계·상태·재산 등)로 나누어 절차를 정하는가"에
// 초점을 둡니다. ProcessSection의 원형 배지+세로선 타임라인이나
// 1→4 번호는 사용하지 않아 시간 순서로 오인되지 않도록 합니다.
export const FAMILY_PROCEDURES_HEADING = "사건의 종류에 따라 진행방식이 달라집니다";
export const FAMILY_PROCEDURES_DESCRIPTION =
  "같은 가사·상속 분야라도 사건의 성격에 따라 법원의 심판·소송·신고 등 필요한 절차가 달라질 수 있습니다.";
// family-page-refine에서, 법원 절차(심판·소송)와 신고 등 후속절차가
// 구별된다는 이 section의 핵심을 civil/enforcement와 동일한 방식으로
// 강조합니다. FAMILY_PROCEDURES_DESCRIPTION 자체를 객체로 바꾸지 않고,
// 이 문자열만 참조하는 별도 상수로 둡니다(문구 변경 없음).
export const FAMILY_PROCEDURES_DESCRIPTION_EMPHASIS = "법원의 심판·소송·신고 등 필요한 절차";

export const FAMILY_PROCEDURES: FamilyProcedureItem[] = [
  {
    title: "혼인·이혼 관련 절차",
    description: "현재 혼인관계와 당사자 사이의 쟁점 등을 확인한 뒤 사건에 맞는 절차와 제출자료를 정리합니다.",
  },
  {
    title: "친자·입양·가족관계 관련 절차",
    description:
      "현재 가족관계등록 내용과 당사자의 관계, 원하는 법적 결과를 확인해 필요한 절차를 구분합니다.",
  },
  {
    title: "후견 관련 절차",
    description: "본인의 현재 상태와 도움이 필요한 사무의 범위 등을 확인하고 사건에 맞는 후견절차를 살펴봅니다.",
  },
  {
    title: "상속 관련 절차",
    description:
      "상속인 관계, 상속재산과 채무, 현재까지의 처리 상황을 확인해 상속포기·한정승인·상속재산분할 등 관련 절차를 구분합니다.",
  },
];

// 상속에만 있는 기간 관련 주의문입니다. EnforcementPreservationNote와
// 동일하게 카드 grid가 아닌 독립 강조 panel 1개로 분리합니다.
// "사망일로부터 무조건 3개월"이라고 쓰지 않고, 특별한정승인 요건이나
// 예외를 확대 설명하지 않습니다.
export const FAMILY_INHERITANCE_NOTE = {
  title: "상속은 기간 확인이 중요합니다",
  content:
    "상속포기와 한정승인은 원칙적으로 상속개시가 있음을 안 날부터 3개월 내에 할 수 있습니다. 다만 구체적인 기간 계산과 특별한 사정에 따른 처리 가능 여부는 사건별로 확인해야 합니다.",
  // guardianship과 동일한 부분 문자열 bold 패턴입니다(문구 변경 없음).
  emphasis: "상속개시가 있음을 안 날부터 3개월 내",
};

export const FAMILY_FAQ_HEADING = "가사·상속 자주 묻는 질문";

export const FAMILY_FAQ_ITEMS: FaqItem[] = [
  {
    question: "가사·상속 사건은 모두 같은 절차로 진행되나요?",
    answer: [
      "아닙니다. 혼인·이혼, 친자·입양, 후견, 상속 등 사건의 종류와 원하는 법적 결과에 따라 필요한 절차와 준비자료가 달라질 수 있습니다.",
    ],
  },
  {
    question: "성년자를 입양하는 경우에도 미성년자 입양과 절차가 같은가요?",
    answer: [
      "같지 않습니다. 미성년자 입양과 성년자 입양은 적용되는 요건과 절차가 다를 수 있으므로 입양하려는 사람의 연령과 가족관계를 먼저 확인해야 합니다.",
    ],
  },
  {
    question: "몸이 불편하면 성년후견을 신청할 수 있나요?",
    answer: [
      "신체적으로 거동이 불편하다는 사정만으로 성년후견 여부가 결정되는 것은 아닙니다. 성년후견은 정신적 제약으로 사무를 처리할 능력이 지속적으로 결여되었는지 등 법에서 정한 요건을 확인해야 합니다.",
    ],
  },
  {
    question: "상속포기나 한정승인은 언제까지 해야 하나요?",
    answer: [
      "원칙적으로 상속개시가 있음을 안 날부터 3개월 내에 할 수 있습니다. 다만 기간 계산이나 현재까지의 재산 처리 상황 등에 따라 추가 확인이 필요한 경우가 있으므로 구체적인 사정을 함께 살펴봐야 합니다.",
    ],
  },
];

export const FAMILY_CTA = {
  heading: "현재 가족관계와 원하는 결과부터 확인해 보세요",
  description:
    "가지고 있는 가족관계 관련 자료와 현재 상황을 기준으로 어떤 절차와 자료가 필요한지 정리해 볼 수 있습니다.",
  buttonLabel: "상담 신청",
};
