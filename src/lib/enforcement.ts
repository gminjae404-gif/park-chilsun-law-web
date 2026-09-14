import type { FaqItem, ProcessStep } from "@/lib/constants";

// 강제집행(/enforcement) 페이지 전용 확정 문구입니다. "쉬운 말 → 필요한
// 경우 법률용어 보충" 순서로 다듬은 버전이며, 법적 의미는 이전 확정
// 문구의 범위를 넘지 않습니다. 전문용어를 전부 없애는 것이 목적이
// 아니라, 제목·첫 문장은 쉬운 말을 우선하고 필요한 법률용어는 설명
// 안에서 최소한으로만 병기합니다.
//
// 용어 사용 원칙(2차 다듬기 라운드에서 확정):
// - 집행권원: PreCheck 01 설명에서 "…문서(집행권원)" 형태로 1회만 병기.
//   그 외 자리(Documents/Process 상단 설명 등)는 "가지고 있는 문서"·
//   "집행할 대상"처럼 쉬운 말로 대체하고 "집행권원"을 반복하지 않음.
// - 금전채권: 예금·급여·거래대금 설명(Types 2번)에서 법률적 의미를
//   보충하는 용도로 1회만 사용.
// - 유체동산: "물건 등에 대한 집행" 설명(Types 3번)에서 법률용어
//   안내 목적으로 1회만 사용.
// - 인도집행: "부동산을 넘겨받기 위한 집행" 설명(Types 4번)에서 쉬운
//   설명 뒤에 1회 사용.
// - "집행할 재산·대상"처럼 반복되던 표현은 PreCheck/Documents/Process
//   전체에서 "집행할 대상"으로 통일해 PC 5열 레이아웃에서 제목이
//   불필요하게 길어지지 않도록 함.
//
// 새로운 법률요건·예외·조문·판례·기간·비용, 성공 가능성이나 채권회수
// 보장을 암시하는 표현은 추가하지 않습니다.
//
// 민사(civil.ts)와 마찬가지로 등기 그룹(Registration*)과는 정보 성격이
// 달라 데이터/컴포넌트를 재사용하지 않고 이 파일에 독립적으로
// 격리합니다. ProcessStep/FaqItem 타입만 constants.ts에서 그대로
// 가져다 씁니다(타입 재사용이며 constants.ts 값 자체는 건드리지
// 않습니다).
//
// 법무사의 업무범위(법원 제출서류의 작성·제출대행 및 이에 부수되는
// 업무)를 벗어나는 "강제집행을 대리합니다"·"채권회수를 보장합니다" 등
// 표현은 어디에도 사용하지 않습니다. 법무사가 압류·경매·인도집행을
// 직접 실시한다는 인상을 주는 표현도 사용하지 않습니다.
export const ENFORCEMENT_HERO = {
  title: "강제집행",
  lead: "판결문이나 지급명령을 받았는데도 상대방이 돈을 갚지 않거나 정해진 의무를 이행하지 않는 경우가 있습니다. 이때 가지고 있는 문서와 상대방의 재산 등을 확인해 어떤 강제집행 절차가 필요한지 살펴봅니다.",
  note: "강제집행 관련 법원 제출서류의 작성·제출대행과 이에 부수되는 일반적인 안내를 제공합니다.",
};

export const ENFORCEMENT_INTRO = {
  heading: "먼저 확인할 두 가지",
  paragraph:
    "첫째는 판결문·지급명령 등 강제집행의 근거가 되는 문서가 무엇인지, 둘째는 상대방의 어떤 재산이나 의무를 대상으로 집행할 것인지입니다. 부동산, 예금·급여, 물건 등 대상에 따라 진행하는 절차가 달라질 수 있습니다. 돈을 받는 문제가 아니라 부동산을 넘겨받아야 하는 경우에도 그에 맞는 집행절차를 확인해야 합니다.",
  // enforcement-page-refine에서, 이 페이지 전체를 관통하는 핵심
  // 판단기준(강제집행의 근거 문서 확인)을 EnforcementPreCheck의 상세
  // 설명보다 먼저 이 문단에서 강조해, 이후 PreCheck 01번 항목에서 같은
  // 기준("집행권원" 용어와 함께)이 반복된다는 것을 자연스럽게 읽어가도록
  // 합니다. 이 파일의 용어 사용 원칙(집행권원은 PreCheck에서만 1회
  // 병기)에 따라 여기서는 "집행권원" 용어 없이 같은 개념만 강조합니다.
  emphasis: "강제집행의 근거가 되는 문서가 무엇인지",
};

export type EnforcementTypeItem = {
  title: string;
  description: string;
};

export const ENFORCEMENT_TYPES_HEADING = "강제집행 대상별 유형";
export const ENFORCEMENT_TYPES_DESCRIPTION =
  "강제집행은 대상 재산의 종류나 집행할 의무의 내용에 따라 절차가 달라지며, 아래는 자주 다루는 유형의 예시입니다.";

// 제목은 법률용어("금전채권"·"유체동산" 등)보다 방문자가 바로 이해할
// 수 있는 말을 우선 사용합니다. "유체동산"은 3번 설명 안에서 한 번만
// 병기하고, "모든 물건을 압류할 수 있다"는 인상을 주지 않도록
// "법률상 집행할 수 있는" 물건으로 한정해 표현합니다.
export const ENFORCEMENT_TYPES: EnforcementTypeItem[] = [
  {
    title: "부동산에 대한 집행",
    description: "상대방 소유의 부동산을 대상으로 강제경매 등 필요한 집행절차를 검토합니다.",
  },
  {
    title: "예금·급여·거래대금 등에 대한 집행",
    description:
      "상대방의 예금이나 급여, 거래처에서 받을 돈 등 제3자로부터 받을 금전채권을 대상으로 압류·추심 등 절차를 검토합니다.",
  },
  {
    title: "물건 등에 대한 집행",
    description:
      "상대방이 가지고 있는 물건 중 법률상 집행할 수 있는 유체동산을 대상으로 필요한 절차를 검토합니다.",
  },
  {
    title: "부동산을 넘겨받기 위한 집행",
    description:
      "판결 등에서 정한 부동산 인도의무를 상대방이 스스로 이행하지 않는 경우 인도집행에 필요한 사항을 확인합니다.",
  },
];

export type EnforcementPreCheckItem = {
  title: string;
  description: string;
  // guardianship·가사/상속 페이지에서 검증한 부분 문자열 bold
  // 패턴입니다: description 중 이 문자열과 정확히 일치하는 부분만
  // <strong>으로 감쌉니다(문구 변경 없음).
  emphasis?: string;
};

export const ENFORCEMENT_PRE_CHECK_HEADING = "강제집행 전에 먼저 확인할 사항";
export const ENFORCEMENT_PRE_CHECK_DESCRIPTION =
  "집행에 필요한 요건과 대상을 확인하기 위해 사건의 기본 내용을 먼저 살펴봅니다.";

// 제목을 전문용어 중심에서 방문자가 먼저 이해할 수 있는 말로 바꾸고,
// 필요한 법률용어는 설명 안에서 한 번 병기합니다(예: "강제집행의
// 근거가 되는 문서(집행권원)"). 04/05 제목은 PC 1280 5열 레이아웃에서
// 단어 중간에 어색하게 줄바꿈되지 않도록 "집행할 대상"·"집행방법"으로
// 짧게 정리했습니다(다른 3개 항목과 길이를 맞춤).
export const ENFORCEMENT_PRE_CHECK_ITEMS: EnforcementPreCheckItem[] = [
  {
    title: "집행의 근거가 되는 문서",
    description: "판결문·지급명령 등 강제집행의 근거가 되는 문서(집행권원)와 현재 상태를 확인합니다.",
    emphasis: "강제집행의 근거가 되는 문서(집행권원)",
  },
  {
    title: "아직 이행되지 않은 내용",
    description:
      "상대방이 지급하지 않은 돈이 있는지, 부동산을 넘겨주는 등 아직 이행하지 않은 의무가 무엇인지 확인합니다.",
  },
  {
    title: "상대방 정보",
    description: "강제집행의 상대방이 누구인지 확인하고, 현재 알고 있는 주소 등 기본정보를 살펴봅니다.",
  },
  {
    title: "집행할 대상",
    description:
      "부동산, 예금·급여 등의 채권, 물건 등 실제로 어떤 재산이나 의무를 대상으로 할 수 있는지 확인합니다.",
  },
  {
    title: "집행방법",
    description: "가지고 있는 문서와 집행할 대상에 따라 어떤 집행절차를 진행할지 구분합니다.",
  },
];

// 가압류와 강제집행을 구분해서 안내하는 짧은 주의문입니다. 가압류를
// 강제집행의 한 유형처럼 배열하지 않도록 EnforcementTypes/PreCheck의
// 번호 목록과는 별도의 독립 섹션(EnforcementPreservationNote)으로
// 분리합니다. 가압류가 항상 필요하다거나 가압류 후 반드시 강제집행을
// 해야 한다고 단정하지 않으며, 가압류를 압류나 강제집행과 같은
// 것으로 표현하지 않습니다.
export const ENFORCEMENT_PRESERVATION_NOTE = {
  title: "가압류와 강제집행은 다른 절차입니다",
  content:
    "가압류는 돈을 받을 권리 등에 관해, 나중에 강제집행을 할 수 있도록 재산을 미리 보전해 두는 절차입니다. 가압류를 했다고 해서 실제 채권 회수가 끝난 것은 아니며, 이후 사건의 진행 상태에 따라 별도의 강제집행 절차가 필요할 수 있습니다.",
  // enforcement-page-refine에서, 가압류(보전절차)와 강제집행(본집행)의
  // 핵심 차이(가압류만으로는 채권 회수가 끝나지 않는다는 점)를
  // guardianship과 동일한 방식으로 강조합니다. 문구 자체는 변경하지
  // 않습니다.
  emphasis: "가압류를 했다고 해서 실제 채권 회수가 끝난 것은 아니며",
};

export type EnforcementDocumentCategory = {
  category: string;
  items: string[];
  // 문서 종류에 따라 확인해야 할 사항이 달라질 수 있다는 완충 문구가
  // 필요한 카테고리(판결문·지급명령 등 관련 자료)에만 선택적으로
  // 사용합니다.
  note?: string;
};

export const ENFORCEMENT_DOCUMENTS_HEADING = "상담 전 준비하면 좋은 자료";
export const ENFORCEMENT_DOCUMENTS_DESCRIPTION =
  "아래는 사건 내용을 파악하기 위한 기본 확인자료의 예시이며, 실제 필요한 자료는 가지고 있는 문서의 종류와 집행할 대상에 따라 달라질 수 있습니다.";

export const ENFORCEMENT_DOCUMENT_CATEGORIES: EnforcementDocumentCategory[] = [
  {
    category: "판결문·지급명령 등 관련 자료",
    items: ["판결문", "지급명령 등", "그 밖에 강제집행의 근거가 되는 문서"],
    note: "문서의 종류와 현재 상태에 따라 추가로 확인할 사항이 달라질 수 있습니다.",
  },
  {
    category: "받아야 할 돈·이행내용 관련 자료",
    items: [
      "받아야 할 금액이나 이행내용을 확인할 수 있는 자료",
      "일부 변제 또는 일부 이행이 있었다면 그 내역",
    ],
  },
  {
    category: "상대방 기본정보",
    items: ["상대방을 확인할 수 있는 기본자료", "현재 알고 있는 주소 등 관련 정보"],
  },
  {
    category: "집행할 대상 관련 자료",
    items: [
      "부동산 관련 자료",
      "예금·급여·거래대금 등 채권 관련 자료",
      "그 밖에 알고 있는 집행할 대상 정보",
    ],
  },
];

export const ENFORCEMENT_DOCUMENTS_NOTE =
  "구체적으로 필요한 자료는 가지고 있는 문서의 종류와 집행할 대상, 현재 확보된 자료를 확인한 뒤 정리합니다.";

// ProcessSection(variant="timeline")에 그대로 전달하는 steps입니다.
// 법무사가 집행을 직접 실시한다는 인상을 주지 않도록 "법원 또는
// 집행관을 통한" 절차임을 명확히 합니다. 순서는 이전과 동일하게
// 유지하고 제목·설명만 쉬운 말로 다듬었습니다. 01번 제목의 "미이행"은
// 다소 딱딱한 표현이라 "이행 여부"로 순화했습니다.
export const ENFORCEMENT_PROCESS_HEADING = "일반적인 강제집행 진행 흐름";
export const ENFORCEMENT_PROCESS_DESCRIPTION =
  "일반적인 강제집행 절차의 흐름을 기준으로 한 안내이며, 가지고 있는 문서와 집행할 대상, 법원의 진행에 따라 필요한 절차와 제출서류는 달라질 수 있습니다.";

export const ENFORCEMENT_PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "집행 근거와 이행 여부 확인",
    description: "판결문·지급명령 등 가지고 있는 문서와 상대방이 아직 이행하지 않은 내용을 확인합니다.",
  },
  {
    step: "02",
    label: "집행할 대상 확인",
    description: "부동산, 예금·급여 등의 채권, 물건 등 집행을 검토할 대상을 확인합니다.",
  },
  {
    step: "03",
    label: "집행방법 검토",
    description: "가지고 있는 문서와 집행할 대상에 맞는 집행절차를 살펴봅니다.",
  },
  {
    step: "04",
    label: "신청서류 준비",
    description: "해당 절차에 필요한 법원 제출서류와 관련 자료를 정리합니다.",
  },
  {
    step: "05",
    label: "집행절차 진행",
    description: "접수 후 법원 또는 집행관을 통해 해당 집행절차가 진행됩니다.",
  },
  {
    step: "06",
    label: "결과 확인 및 후속절차 검토",
    description: "진행 결과를 확인하고 추가로 필요한 절차가 있는지 살펴봅니다.",
  },
];

export const ENFORCEMENT_FAQ_HEADING = "강제집행 자주 묻는 질문";

export const ENFORCEMENT_FAQ_ITEMS: FaqItem[] = [
  {
    question: "판결을 받으면 자동으로 강제집행이 되나요?",
    answer: [
      "아닙니다. 판결문 등 강제집행의 근거가 되는 문서가 있더라도 상대방이 스스로 이행하지 않는다면 집행할 재산이나 대상을 확인한 뒤 별도의 강제집행 절차를 진행해야 할 수 있습니다.",
    ],
  },
  {
    question: "가압류를 해두면 돈을 받은 것과 같은가요?",
    answer: [
      "아닙니다. 가압류는 나중의 강제집행에 대비해 재산을 보전해 두는 절차입니다. 실제로 돈을 받기 위한 후속절차는 사건의 진행 상태에 따라 달라질 수 있습니다.",
    ],
  },
  {
    question: "상대방 재산의 종류에 따라 절차가 달라지나요?",
    answer: [
      "네. 부동산, 예금·급여 등의 채권, 물건 등 집행할 대상의 종류에 따라 신청방법과 진행절차가 달라질 수 있습니다. 따라서 어떤 재산이나 대상을 집행할지 먼저 확인하는 것이 중요합니다.",
    ],
  },
];

export const ENFORCEMENT_CTA = {
  heading: "가지고 있는 문서와 집행할 대상을 먼저 확인해 보세요",
  description:
    "판결문·지급명령 등 현재 가지고 있는 자료와 알고 있는 상대방 및 재산 정보를 기준으로 어떤 절차가 필요한지 정리해 볼 수 있습니다.",
  buttonLabel: "상담 신청",
};

// civil-lease-enforcement-expand 작업에서 추가하는 채권집행 세부 내용입니다.
// 민사집행법 제229조(추심명령과 전부명령) 확인 기준으로 작성했으며,
// 두 절차 중 어느 하나가 항상 더 유리하다고 단정하지 않습니다. 전부명령은
// (1) 압류된 채권이 지급에 갈음하여 압류채권자에게 이전되는 제도라는 점,
// (2) 확정되어야 효력이 발생한다는 점, (3) 제3채무자에게 송달되기 전에
// 다른 압류·가압류·배당요구가 있는 경우 등에는 효력이 문제될 수 있다는
// 점을 모두 반영했습니다. 예금채권·급여채권·임대차보증금반환채권 등은
// description에서 채권집행의 대상 예시로만 안내합니다.
export type EnforcementClaimOrderCard = {
  title: string;
  points: string[];
  // guardianship·family-inheritance 등에서 검증한 부분 문자열 bold
  // 패턴입니다: points 중 이 문자열을 포함하는 항목에서만 그 부분만
  // <strong>으로 감쌉니다(문구 변경 없음, 카드당 1곳).
  emphasis?: string;
};

export const ENFORCEMENT_CLAIM_ORDER_HEADING = "채권압류 후 추심명령과 전부명령";
export const ENFORCEMENT_CLAIM_ORDER_DESCRIPTION =
  "압류한 금전채권에 대하여 추심명령 또는 전부명령을 신청할 수 있습니다(민사집행법 제229조). 예금채권, 급여채권, 임대차보증금반환채권 등이 대상이 될 수 있으며, 각 절차의 효과와 적합성은 사건 상황에 따라 달라질 수 있습니다.";

export const ENFORCEMENT_CLAIM_ORDER_CARDS: EnforcementClaimOrderCard[] = [
  {
    title: "추심명령",
    points: [
      "압류한 금전채권을 채권자가 직접 추심(수령)할 수 있는 권능을 가지게 되는 절차입니다.",
      "제3채무자가 임의로 지급하지 않으면 추심의 소 등 후속절차가 필요할 수 있습니다.",
      "다른 채권자가 있는 경우 그 채권자와 안분하여 배당받는 관계가 문제될 수 있습니다.",
    ],
    // enforcement-page-refine에서, 전부명령 카드와 동일하게 이 카드도
    // 추심명령을 구별하는 핵심 정의(채권 자체가 아니라 "수령 권능"만
    // 가지게 됨)를 강조해 두 절차의 차이가 한눈에 비교되도록 합니다.
    emphasis: "채권자가 직접 추심(수령)할 수 있는 권능을 가지게 되는",
  },
  {
    title: "전부명령",
    points: [
      "압류한 채권 자체가 지급에 갈음하여 압류채권자에게 이전되는 절차입니다.",
      "전부명령은 확정되어야 효력이 발생합니다.",
      "제3채무자에게 송달되기 전에 다른 채권자의 압류·가압류나 배당요구가 있는 경우 등에는 전부명령의 효력이 문제될 수 있습니다.",
    ],
    emphasis: "확정되어야 효력이 발생합니다",
  },
];

export const ENFORCEMENT_CLAIM_ORDER_NOTE =
  "추심명령과 전부명령 중 어느 절차가 더 적합한지는 채권의 종류와 금액, 다른 채권자의 존재 여부 등 사건 상황에 따라 달라지며, 전부명령이 추심명령보다 항상 유리한 것은 아닙니다.";

// "부동산 강제경매·배당요구·재산명시·재산조회·가압류에서 본압류로
// 이어지는 경우"를 InheritanceJurisdiction과 동일한 dl-row 목록
// 패턴으로 안내합니다. 모든 사건에 공통되는 고정된 순서가 아니라는
// 점을 note에서 분명히 합니다.
export type EnforcementAdditionalProcedureItem = {
  procedure: string;
  description: string;
};

export const ENFORCEMENT_ADDITIONAL_PROCEDURES_HEADING = "강제집행과 함께 확인하는 절차";

export const ENFORCEMENT_ADDITIONAL_PROCEDURES: EnforcementAdditionalProcedureItem[] = [
  {
    procedure: "부동산 강제경매",
    description: "상대방 소유의 부동산을 대상으로 경매를 신청하는 절차입니다.",
  },
  {
    procedure: "배당요구·배당",
    description: "경매나 채권집행 절차에서 다른 채권자가 배당을 요구하거나 배당받는 절차를 확인합니다.",
  },
  {
    procedure: "재산명시·재산조회",
    description: "상대방의 재산을 확인하기 어려운 경우 법원의 재산명시·재산조회 절차를 검토할 수 있습니다.",
  },
  {
    procedure: "가압류에서 본압류로 이어지는 경우",
    description: "가압류를 해 둔 경우에도 집행권원을 확보한 뒤에는 본압류로 전환하는 절차를 별도로 확인해야 합니다.",
  },
  {
    procedure: "공탁",
    description:
      "채권자를 알 수 없거나 채권에 다툼이 있는 경우 등에는 변제공탁·집행공탁 등 공탁 절차를 검토할 수 있습니다. 법무사는 등기·공탁사건 신청대리 업무를 수행할 수 있습니다.",
  },
];

export const ENFORCEMENT_ADDITIONAL_PROCEDURES_NOTE =
  "위 절차가 모든 사건에 공통적으로 필요한 것은 아니며, 가지고 있는 문서와 집행할 대상, 사건의 진행 상태에 따라 필요한 절차가 달라질 수 있습니다.";
