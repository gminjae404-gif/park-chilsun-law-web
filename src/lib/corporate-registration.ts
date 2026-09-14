import type { FaqItem, ProcessStep } from "@/lib/constants";

// 법인등기(/registration/corporate) 페이지 전용 확정 문구입니다. 법률
// 검토를 거쳐 확정된 내용이므로 임의로 수정하지 않습니다.
//
// 부동산등기(real-estate-registration.ts)와 같은 이유로 이 파일에
// 격리합니다: corporate-registration-design-audit에서 "안 3"(범용
// 컴포넌트만 공유하고 나머지는 독립 구현 후 실제 비교해 공통화를
// 재판단)을 확정했으므로, constants.ts나 real-estate-registration.ts에
// 섞지 않고 법인등기만의 데이터로 독립 유지합니다. ProcessStep/FaqItem
// 타입만 constants.ts에서 그대로 가져다 씁니다(타입 재사용이며
// constants.ts 값 자체는 건드리지 않습니다).
export const CORPORATE_HERO = {
  title: "법인등기",
  lead: "회사를 새로 설립하거나 상호·목적·본점·임원·자본금 등 등기사항에 변경이 생기는 경우, 현재 법인등기와 정관 및 회사의 기관구성을 확인해 필요한 절차와 자료를 정리합니다.",
  note: "아래 내용은 회사등기 중 주식회사에서 자주 접하는 설립·변경등기를 중심으로 한 일반 안내입니다. 회사 형태와 정관, 기관구성 및 변경 내용에 따라 필요한 절차와 자료는 달라질 수 있습니다.",
};

export const CORPORATE_INTRO = {
  heading: "같은 변경등기라도 회사마다 확인할 내용이 다를 수 있습니다",
  paragraph:
    "법인등기는 변경하려는 등기사항만 확인하는 것으로 끝나지 않습니다. 회사 형태와 현재 등기내용, 정관, 임원 및 기관구성 등을 함께 확인해 해당 변경에 필요한 회사 내부 절차와 등기 준비자료를 정리해야 합니다.",
};

export type CorporateEntityType = {
  category: string;
  examples: string;
  description: string;
};

// 이 페이지가 지금까지 주식회사를 대표 예시로 설명해 왔음을 보완하는
// 섹션입니다. 실제 법인·단체는 여러 형태가 있고 형태에 따라 설립·변경
// 절차가 다를 수 있다는 점을 알리는 것이 목적이며, 아래 모든 유형이
// 동일한 법인등기 절차를 거친다거나 이 사무소가 모든 유형을 반드시
// 취급한다는 뜻으로 읽히지 않도록 문구를 구성했습니다.
//
// "법인 아닌 단체"는 나머지 4개(회사·농업 관련 법인·협동조합·
// 비영리법인 등)와 같은 층위의 "법인등기 유형"이 아닙니다. 마을회·
// 종중 등은 법인등기 자체를 하지 않는 경우가 있으므로, 이름만으로
// 법적 성격이 정해지지 않는다는 점과 일반적인 법인 설립·변경등기와
// 동일하게 보지 않는다는 점을 CORPORATE_ENTITY_TYPES_NOTE로 별도
// 안내합니다(카드나 경고박스가 아니라 section 하단의 차분한 안내문).
export const CORPORATE_ENTITY_TYPES_HEADING = "법인과 단체의 형태에 따라 절차가 다릅니다";
export const CORPORATE_ENTITY_TYPES_DESCRIPTION =
  "주식회사는 법인등기의 대표적인 예시입니다. 실제 설립·변경 절차는 조직의 형태와 목적, 적용되는 법률에 따라 달라질 수 있으므로 먼저 어떤 법인이나 단체인지 확인해야 합니다.";

export const CORPORATE_ENTITY_TYPES: CorporateEntityType[] = [
  {
    category: "회사",
    examples: "주식회사 · 유한회사 등",
    description:
      "회사 형태와 현재 등기 상태에 따라 설립, 임원, 본점, 자본 등 확인해야 할 사항이 달라질 수 있습니다.",
  },
  {
    category: "농업 관련 법인",
    examples: "영농조합법인 · 농업회사법인",
    description:
      "일반 회사와 동일하게 보기보다 해당 법인의 형태와 관련 법률에 따른 설립·변경 절차를 함께 확인해야 합니다.",
  },
  {
    category: "협동조합",
    examples: "협동조합 · 사회적협동조합 등",
    description:
      "협동조합의 종류에 따라 설립과 변경에 필요한 절차가 다를 수 있으므로 조합의 형태를 먼저 확인합니다.",
  },
  {
    category: "비영리법인 등",
    examples: "사단법인 · 재단법인 · 사회복지법인 등",
    description:
      "설립 목적과 법인의 종류에 따라 주무관청의 허가 등 선행절차와 등기에 필요한 사항을 함께 확인해야 합니다.",
  },
  {
    category: "법인 아닌 단체",
    examples: "마을회 · 종중 · 동창회 · 기타 임의단체 등",
    description:
      "법인등기를 하지 않은 단체라도 규약, 구성원, 대표자 등을 갖추어 활동하는 경우가 있습니다. 단체의 이름만으로 법적 성격이 정해지는 것은 아니므로 실제 조직과 운영 형태를 확인해 필요한 절차를 구분해야 합니다.",
  },
];

export const CORPORATE_ENTITY_TYPES_NOTE =
  "법인 아닌 단체는 일반적인 법인의 설립·변경등기와 동일하게 보지 않으며, 단체의 성격에 따라 필요한 절차가 달라질 수 있습니다.";

export type CorporateType = {
  title: string;
  description: string;
};

export const CORPORATE_TYPES_HEADING = "주요 법인등기 유형";
export const CORPORATE_TYPES_DESCRIPTION =
  "설립 여부와 변경하려는 등기사항에 따라 확인할 내용이 달라집니다.";

export const CORPORATE_TYPES: CorporateType[] = [
  {
    title: "회사 설립등기",
    description: "새 회사를 설립하고 회사의 기본 등기사항을 등기하는 경우",
  },
  {
    title: "임원 관련 변경등기",
    description: "이사·감사·대표이사 등 임원의 취임·퇴임 또는 변경과 관련된 등기",
  },
  {
    title: "상호·목적·본점 변경등기",
    description: "회사의 상호, 사업 목적 또는 본점 소재지 등이 변경되는 경우",
  },
  {
    title: "자본금 등 그 밖의 변경등기",
    description: "자본금의 변경이나 그 밖의 회사 등기사항에 변경이 생기는 경우",
  },
];

export type CorporateDecisionCheckItem = {
  title: string;
  description: string;
};

export const CORPORATE_DECISION_CHECK_HEADING = "등기신청 전에 먼저 확인할 사항";
export const CORPORATE_DECISION_CHECK_DESCRIPTION =
  "회사 형태와 정관, 기관구성에 따라 필요한 내부 의사결정 절차가 달라질 수 있어 현재 회사 상태를 먼저 확인합니다.";

export const CORPORATE_DECISION_CHECK_ITEMS: CorporateDecisionCheckItem[] = [
  {
    title: "회사 형태와 현재 등기내용",
    description: "회사의 형태와 현재 법인등기사항을 확인합니다.",
  },
  {
    title: "정관",
    description: "변경하려는 사항과 관련된 정관 규정이 있는지 확인합니다.",
  },
  {
    title: "임원과 기관구성",
    description: "현재 임원 구성과 이사회 등 회사의 기관구성을 확인합니다.",
  },
  {
    title: "변경 내용과 필요한 내부 절차",
    description: "어떤 사항을 변경하려는지 확인하고 그에 필요한 결의나 동의 등 내부 절차가 있는지 검토합니다.",
  },
];

export type CorporateDocumentCategory = {
  category: string;
  items: string[];
};

export const CORPORATE_DOCUMENTS_HEADING = "처음 상담할 때 확인하면 좋은 자료";
export const CORPORATE_DOCUMENTS_DESCRIPTION =
  "아래는 상담을 위한 기본 확인자료의 예시이며, 실제 등기신청에 필요한 첨부자료는 회사 형태와 등기 유형, 정관 및 기관구성에 따라 달라질 수 있습니다.";

export const CORPORATE_DOCUMENT_CATEGORIES: CorporateDocumentCategory[] = [
  {
    category: "법인 기본자료",
    items: ["법인 등기사항증명서", "현재 정관"],
  },
  {
    category: "회사 의사결정 자료",
    items: [
      "해당 변경과 관련해 작성된 주주총회·이사회 등의 의사록이나 결정자료",
      "아직 의사결정을 하지 않은 경우에는 현재 회사의 기관구성을 확인할 자료",
    ],
  },
  {
    category: "임원·당사자 정보",
    items: [
      "변경과 관련된 임원 또는 관계인의 인적사항을 확인할 자료",
      "취임·퇴임 등 사건 내용을 확인할 자료",
    ],
  },
  {
    category: "사건별 추가 확인자료",
    items: [
      "변경하려는 등기사항의 원인을 확인할 자료",
      "해당 사건의 세금·등기신청수수료 등을 확인하는 데 필요한 자료",
    ],
  },
];

export const CORPORATE_DOCUMENTS_NOTE =
  "구체적인 준비자료는 회사 형태와 정관, 현재 등기 상태 및 변경하려는 내용을 확인한 뒤 안내합니다.";

// ProcessSection(variant="timeline")에 그대로 전달하는 steps입니다. "법이
// 정한 일률적인 순서"가 아니라 일반적인 진행 흐름이라는 점을 heading/
// description에서 명확히 합니다.
export const CORPORATE_PROCESS_HEADING = "법인등기 진행 흐름";
export const CORPORATE_PROCESS_DESCRIPTION =
  "일반적인 준비 흐름이며, 회사 형태와 등기 유형에 따라 필요한 절차와 자료는 달라질 수 있습니다.";

export const CORPORATE_PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "현재 등기사항 확인",
    description: "법인등기사항과 변경하려는 내용을 먼저 확인합니다.",
  },
  {
    step: "02",
    label: "정관과 회사 구조 검토",
    description: "정관, 임원 구성 및 회사의 기관구성을 확인합니다.",
  },
  {
    step: "03",
    label: "필요한 내부 절차 확인",
    description: "변경 내용에 따라 필요한 결의·동의 등 회사 내부 절차를 확인합니다.",
  },
  {
    step: "04",
    label: "등기 준비자료 확인",
    description: "등기 유형과 회사 상황에 맞춰 필요한 자료를 정리합니다.",
  },
  {
    step: "05",
    label: "신청서 작성 및 접수",
    description: "확인된 내용과 자료를 기준으로 등기신청을 준비하여 접수합니다.",
  },
  {
    step: "06",
    label: "등기 진행 및 완료 확인",
    description: "접수 후 진행 상태를 확인하고 등기 완료 여부를 확인합니다.",
  },
];

export const CORPORATE_FAQ_HEADING = "법인등기 자주 묻는 질문";

export const CORPORATE_FAQ_ITEMS: FaqItem[] = [
  {
    question: "회사 등기는 누가 신청하나요?",
    answer: [
      "법률에 다른 규정이 없는 경우 회사의 등기는 그 대표자가 신청합니다. 구체적인 신청 방식과 준비자료는 회사 형태와 등기 유형에 따라 확인이 필요합니다.",
    ],
  },
  {
    question: "정관이나 의사록은 모든 법인등기에 필요한가요?",
    answer: [
      "모든 사건에서 동일하게 필요한 것은 아닙니다. 변경하려는 내용과 회사 형태, 정관 및 기관구성에 따라 필요한 내부 절차와 첨부자료가 달라질 수 있습니다.",
    ],
  },
  {
    question: "등기사항을 변경하려면 회사 내부 절차도 확인해야 하나요?",
    answer: [
      "변경 내용과 회사의 정관 및 기관구성에 따라 주주총회나 이사회 등 회사 내부의 의사결정이 필요한 경우가 있으므로, 등기신청 전에 현재 회사 상태와 필요한 절차를 함께 확인하는 것이 필요합니다.",
    ],
  },
];

export const CORPORATE_CTA = {
  heading: "법인등기, 현재 회사 상태부터 확인해 보세요",
  description:
    "현재 법인등기와 정관, 회사의 기관구성 및 변경 내용을 확인한 뒤 사건에 맞는 준비자료와 절차를 정리합니다.",
  buttonLabel: "상담 신청",
};
