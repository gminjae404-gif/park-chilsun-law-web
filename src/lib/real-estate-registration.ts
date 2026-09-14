import type { FaqItem, ProcessStep } from "@/lib/constants";

// 부동산등기(/registration/real-estate) 페이지 전용 확정 문구입니다. 법률
// 검토를 거쳐 확정된 내용이므로 임의로 수정하지 않습니다.
//
// 기존 constants.ts에 추가하지 않고 이 파일에 격리한 이유: 부동산등기는
// services-architecture-audit에서 판단한 "아직 공통 컴포넌트로 일반화하지
// 않는 첫 실제 사례(3번째 사례)"입니다. constants.ts에 섞으면 civil/
// enforcement/family/corporate registration 등 아직 콘텐츠가 없는 다른
// 업무 데이터와 뒤섞여 향후 공통화 여부를 판단하기 어려워지므로, 이
// 페이지만의 데이터로 독립적으로 유지합니다. ProcessStep/FaqItem 타입만
// constants.ts에서 그대로 가져다 씁니다(타입 재사용이며 constants.ts 값
// 자체는 건드리지 않습니다).
export const REAL_ESTATE_HERO = {
  title: "부동산등기",
  lead: "매매·증여·상속 등으로 소유권이 변동되거나 근저당권·전세권 등 권리관계가 바뀌는 경우, 등기원인과 현재 등기 상태를 확인해 필요한 절차와 자료를 정리합니다.",
  note: "사건의 원인과 당사자, 부동산의 현재 등기 상태에 따라 준비해야 할 자료가 달라질 수 있습니다.",
};

export const REAL_ESTATE_INTRO = {
  heading: "같은 부동산등기라도 준비 내용은 달라질 수 있습니다",
  paragraph:
    "부동산등기는 등기원인, 권리의 종류, 당사자 구성과 기존 등기 상태에 따라 신청인과 준비자료가 달라질 수 있습니다. 먼저 등기부와 원인서류를 확인한 뒤 사건에 맞는 절차를 정리하는 것이 중요합니다.",
};

export type RealEstateType = {
  title: string;
  description: string;
};

export const REAL_ESTATE_TYPES_HEADING = "주요 부동산등기 유형";
export const REAL_ESTATE_TYPES_DESCRIPTION =
  "등기의 원인과 대상 권리에 따라 확인할 내용이 달라집니다.";

export const REAL_ESTATE_TYPES: RealEstateType[] = [
  {
    title: "소유권이전등기",
    description: "매매·증여·상속 등으로 부동산의 소유권이 이전되는 경우",
  },
  {
    title: "담보권 등기",
    description: "근저당권의 설정·변경·말소 등 담보와 관련된 등기",
  },
  {
    title: "전세권 등기",
    description: "전세권의 설정·변경·말소와 관련된 등기",
  },
  {
    title: "그 밖의 권리변동 등기",
    description: "소유권보존이나 각종 권리의 변경·말소 등 사건별로 확인이 필요한 등기",
  },
];

export type RealEstateDocumentCategory = {
  category: string;
  items: string[];
};

export const REAL_ESTATE_DOCUMENTS_HEADING = "처음 상담할 때 확인하면 좋은 자료";
export const REAL_ESTATE_DOCUMENTS_DESCRIPTION =
  "아래는 상담을 위한 기본 확인자료의 예시이며, 실제 등기신청에 필요한 첨부자료는 사건별로 달라질 수 있습니다.";

export const REAL_ESTATE_DOCUMENT_CATEGORIES: RealEstateDocumentCategory[] = [
  {
    category: "부동산 정보",
    items: ["부동산 등기사항증명서 또는 정확한 부동산 표시"],
  },
  {
    category: "등기원인 자료",
    items: [
      "매매계약서·증여계약서 등 원인관계를 확인할 자료",
      "상속의 경우 상속관계를 확인할 수 있는 자료",
    ],
  },
  {
    category: "당사자 정보",
    items: [
      "당사자의 인적사항과 주소 등을 확인할 자료",
      "법인이 당사자인 경우 법인 관련 기본자료",
    ],
  },
  {
    category: "사건별 추가 확인자료",
    items: [
      "세금·국민주택채권·등기신청수수료 관련 자료",
      "허가·신고 등이 필요한 사건은 관련 자료",
    ],
  },
];

export const REAL_ESTATE_DOCUMENTS_NOTE =
  "구체적인 준비자료는 등기원인과 당사자, 부동산 종류 및 기존 등기 상태를 확인한 뒤 안내합니다.";

// ProcessSection(variant="timeline")에 그대로 전달하는 steps입니다. "법이
// 정한 일률적인 순서"가 아니라 일반적인 진행 흐름이라는 점을 heading/
// description에서 명확히 합니다.
export const REAL_ESTATE_PROCESS_HEADING = "부동산등기 진행 흐름";
export const REAL_ESTATE_PROCESS_DESCRIPTION =
  "일반적인 준비 흐름이며, 사건에 따라 순서와 필요한 자료는 달라질 수 있습니다.";

export const REAL_ESTATE_PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "등기 유형 확인",
    description: "등기원인과 필요한 등기의 종류를 먼저 확인합니다.",
  },
  {
    step: "02",
    label: "등기부 및 원인자료 검토",
    description: "현재 등기 상태와 계약서 등 원인관계를 확인합니다.",
  },
  {
    step: "03",
    label: "신청인과 준비자료 확인",
    description: "등기 유형과 당사자에 맞춰 필요한 자료를 정리합니다.",
  },
  {
    step: "04",
    label: "세금·채권·수수료 확인",
    description: "해당 사건에 필요한 세금, 국민주택채권 및 등기신청수수료 등을 확인합니다.",
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

export const REAL_ESTATE_FAQ_HEADING = "부동산등기 자주 묻는 질문";

export const REAL_ESTATE_FAQ_ITEMS: FaqItem[] = [
  {
    question: "부동산등기는 당사자가 함께 신청해야 하나요?",
    answer: [
      "법률에 다른 규정이 없는 경우에는 등기권리자와 등기의무자가 공동으로 신청하는 것이 원칙입니다. 다만 상속 등 포괄승계나 판결에 의한 등기처럼 단독신청이 가능한 경우도 있어 등기원인에 따라 확인이 필요합니다.",
    ],
  },
  {
    question: "부동산등기 준비서류는 모두 같은가요?",
    answer: [
      "같지 않습니다. 매매·증여·상속 등 등기원인과 당사자 구성, 부동산 종류 및 현재 등기 상태에 따라 필요한 자료가 달라질 수 있으므로 사건별 확인이 필요합니다.",
    ],
  },
  {
    question: "등기와 관련된 비용은 어떻게 확인하나요?",
    answer: [
      "등기 유형에 따라 취득세 또는 등록면허세, 국민주택채권, 등기신청수수료 등의 확인이 필요할 수 있습니다. 구체적인 금액은 부동산과 등기원인 등 사건 내용을 기준으로 확인해야 합니다.",
    ],
  },
];

export const REAL_ESTATE_CTA = {
  heading: "부동산등기, 먼저 자료를 확인해 보세요",
  description: "등기원인과 현재 등기 상태를 확인한 뒤 사건에 맞는 준비자료와 절차를 정리합니다.",
  buttonLabel: "상담 신청",
};
