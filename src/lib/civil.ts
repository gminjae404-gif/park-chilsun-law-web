import type { FaqItem, ProcessStep } from "@/lib/constants";

// 민사소송(/civil) 페이지 전용 확정 문구입니다. 법률 검토를 거쳐 확정된
// 내용이므로 임의로 수정하지 않습니다.
//
// civil-page-design-audit에서 판단한 대로, 민사는 등기(부동산/법인)와
// 정보 성격이 달라(당사자 간 분쟁·청구·증거 중심) Registration* 데이터/
// 컴포넌트를 재사용하지 않고 이 파일에 독립적으로 격리합니다.
// ProcessStep/FaqItem 타입만 constants.ts에서 그대로 가져다 씁니다(타입
// 재사용이며 constants.ts 값 자체는 건드리지 않습니다).
//
// 법무사의 업무범위(법원 제출서류의 작성·제출대행 및 이에 부수되는
// 업무)를 벗어나는 "소송대리"·"변론대리" 등으로 오인될 표현은 어디에도
// 사용하지 않습니다.
export const CIVIL_HERO = {
  title: "민사소송",
  lead: "대여금·매매대금·공사대금·임대차·손해배상 등 민사분쟁에서 법원에 제출할 서류를 작성하려면 상대방과 청구내용, 사실관계 및 이를 뒷받침할 자료를 먼저 정리해야 합니다.",
  note: "본 페이지는 민사소송 관련 법원 제출서류의 작성·제출대행과 이에 부수되는 업무에 관한 일반 안내입니다. 사건에 따라 필요한 주장과 자료, 진행절차는 달라질 수 있습니다.",
};

export const CIVIL_INTRO = {
  heading: "민사소송은 청구 내용과 자료를 함께 정리하는 것에서 시작합니다",
  paragraph:
    "민사재판은 개인이나 법인 사이의 사적인 권리 또는 법률관계에 관한 다툼을 법원이 판단하는 절차입니다. 소장을 제출하기 전 상대방, 무엇을 청구하는지, 사건의 경위와 이를 뒷받침할 자료를 확인해 법원 제출서류에 필요한 내용을 정리합니다.",
  // civil-page-refine에서, 이 페이지에서 가장 먼저 등장하는 핵심 확인사항
  // (제소 전에 상대방·청구내용·경위·자료를 확인해야 한다는 점)을
  // guardianship/enforcement와 동일한 방식으로 강조합니다. 아래 CivilPreCheck
  // 항목별 emphasis와 같은 개념을 도입부에서 먼저 짚어 반복 강조합니다.
  emphasis: "상대방, 무엇을 청구하는지, 사건의 경위와 이를 뒷받침할 자료",
};

export type CivilTypeItem = {
  title: string;
  description: string;
};

export const CIVIL_TYPES_HEADING = "대표적인 민사분쟁 유형";
export const CIVIL_TYPES_DESCRIPTION =
  "민사분쟁의 원인과 청구 내용은 다양하며, 아래는 자주 문제되는 유형의 예시입니다.";

export const CIVIL_TYPES: CivilTypeItem[] = [
  {
    title: "금전 지급 청구",
    description: "대여금·매매대금·공사대금 등 금전 지급이 문제되는 분쟁",
  },
  {
    title: "계약 및 거래 분쟁",
    description: "계약의 이행 여부나 계약관계에서 발생한 금전·재산상 분쟁",
  },
  {
    title: "임대차 분쟁",
    description: "보증금 반환, 차임, 원상회복 등 임대차관계에서 발생하는 분쟁",
  },
  {
    title: "손해배상 청구",
    description: "계약위반이나 그 밖의 행위로 발생한 손해의 배상이 문제되는 분쟁",
  },
];

export type CivilPreCheckItem = {
  title: string;
  description: string;
  // civil-page-refine에서, 항목별 핵심 판단기준만 guardianship/inheritance와
  // 동일한 방식으로 강조하기 위한 선택적 필드입니다(모든 항목이 아니라
  // "상대방 특정"·"청구원인"·"뒷받침 자료"처럼 소송서류 준비 전 확인이
  // 특히 중요한 항목에만 지정합니다).
  emphasis?: string;
};

export const CIVIL_PRE_CHECK_HEADING = "소송서류를 준비하기 전에 먼저 확인할 사항";
export const CIVIL_PRE_CHECK_DESCRIPTION =
  "청구할 내용과 이를 뒷받침할 사실 및 자료를 정리하기 위해 사건의 기본 내용을 먼저 확인합니다.";

export const CIVIL_PRE_CHECK_ITEMS: CivilPreCheckItem[] = [
  {
    title: "상대방",
    description: "누구를 상대로 청구하는 사건인지와 상대방을 특정할 수 있는 정보를 확인합니다.",
    emphasis: "상대방을 특정할 수 있는 정보",
  },
  {
    title: "청구할 내용",
    description: "상대방에게 무엇을 어떤 범위에서 구하려는 사건인지 확인합니다.",
    emphasis: "무엇을 어떤 범위에서 구하려는",
  },
  {
    title: "사건의 경위",
    description: "계약이나 거래가 어떻게 이루어졌고 현재 분쟁에 이르게 된 과정을 정리합니다.",
  },
  {
    title: "증거자료",
    description: "계약서, 입금내역, 문자 등 주장하는 사실을 확인할 수 있는 자료가 무엇인지 살펴봅니다.",
    emphasis: "주장하는 사실을 확인할 수 있는 자료",
  },
  {
    title: "다른 절차의 필요성",
    description:
      "사건 내용에 따라 지급명령이나 가압류 등 다른 절차를 함께 확인할 필요가 있는지 살펴봅니다.",
  },
];

export type CivilDocumentCategory = {
  category: string;
  items: string[];
};

export const CIVIL_DOCUMENTS_HEADING = "처음 상담할 때 확인하면 좋은 자료";
export const CIVIL_DOCUMENTS_DESCRIPTION =
  "아래는 사건 내용을 파악하기 위한 기본 확인자료의 예시이며, 실제 소송서류 작성에 필요한 자료는 청구 내용과 사건 경위에 따라 달라질 수 있습니다.";

export const CIVIL_DOCUMENT_CATEGORIES: CivilDocumentCategory[] = [
  {
    category: "계약·거래 자료",
    items: [
      "계약서·차용증·견적서 등 계약 또는 거래관계를 확인할 자료",
      "사건의 원인이 된 약정이나 거래내용을 확인할 자료",
    ],
  },
  {
    category: "금전 지급·이행 자료",
    items: [
      "계좌이체내역·영수증 등 금전 지급 여부를 확인할 자료",
      "물품 인도나 공사 등 약정의 이행 여부를 확인할 자료",
    ],
  },
  {
    category: "대화·사진 등 사건자료",
    items: [
      "문자·메신저·이메일 등 당사자 사이의 대화를 확인할 자료",
      "사진 등 사건의 경위를 확인하는 데 도움이 되는 자료",
    ],
  },
  {
    category: "당사자 기본정보",
    items: [
      "상대방의 성명·주소 등 당사자를 확인할 수 있는 정보",
      "상대방이 법인인 경우 법인 기본정보를 확인할 자료",
    ],
  },
];

export const CIVIL_DOCUMENTS_NOTE =
  "구체적으로 필요한 자료는 청구 내용과 사실관계, 현재 확보된 자료를 확인한 뒤 정리합니다.";

// ProcessSection(variant="timeline")에 그대로 전달하는 steps입니다. 모든
// 사건이 정확히 이 순서라거나, 법무사가 변론기일에서 당사자를 대리한다는
// 뜻으로 읽히지 않도록 heading/description에서 "일반적인 흐름"임을
// 명확히 합니다.
export const CIVIL_PROCESS_HEADING = "일반적인 민사소송 진행 흐름";
export const CIVIL_PROCESS_DESCRIPTION =
  "일반적인 제1심 민사소송의 흐름을 기준으로 한 안내이며, 사건 내용과 법원의 진행에 따라 필요한 절차와 제출서류는 달라질 수 있습니다.";

export const CIVIL_PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    label: "사건 내용과 자료 확인",
    description: "상대방, 청구내용, 사건 경위와 현재 확보된 자료를 확인합니다.",
  },
  {
    step: "02",
    label: "청구내용과 사실관계 정리",
    description: "법원 제출서류 작성에 필요한 청구내용과 관련 사실을 정리합니다.",
  },
  {
    step: "03",
    label: "소장 작성 및 제출",
    description: "확인된 내용과 자료를 기준으로 소장을 작성하여 법원에 제출합니다.",
  },
  {
    step: "04",
    label: "소장 송달과 답변",
    description: "법원이 피고에게 소장 부본을 송달하고, 청구를 다투는 경우 피고의 답변이 제출될 수 있습니다.",
  },
  {
    step: "05",
    label: "변론 및 증거 제출",
    description: "사건 진행에 따라 주장과 증거를 정리한 서면을 제출하고 변론 및 증거조사가 진행될 수 있습니다.",
  },
  {
    step: "06",
    label: "판결 및 후속 절차 확인",
    description: "판결 내용을 확인하고 필요한 경우 상소나 강제집행 등 후속 절차가 문제될 수 있는지 확인합니다.",
  },
];

export const CIVIL_FAQ_HEADING = "민사소송 자주 묻는 질문";

export const CIVIL_FAQ_ITEMS: FaqItem[] = [
  {
    question: "민사소송은 어떻게 시작되나요?",
    answer: [
      "민사소송은 원고가 법원에 소장을 제출하면서 시작됩니다. 소장이 접수되면 법원은 피고에게 소장 부본을 송달하고, 피고가 청구를 다투는 경우 답변서 제출과 변론·증거조사 등의 절차를 거쳐 판결이 선고될 수 있습니다.",
    ],
  },
  {
    question: "지급명령과 민사소송은 같은 절차인가요?",
    answer: [
      "지급명령은 금전이나 그 밖의 대체물 또는 유가증권의 일정한 수량의 지급을 목적으로 하는 청구에 이용되는 독촉절차입니다. 채무자가 지급명령에 적법하게 이의하면 그 범위에서 지급명령은 효력을 잃고 소송절차로 이어질 수 있으므로 사건 내용에 따라 절차를 확인할 필요가 있습니다.",
    ],
  },
  {
    question: "판결을 받으면 강제집행까지 자동으로 진행되나요?",
    answer: [
      "자동으로 진행되는 것은 아닙니다. 상대방이 판결 등에 따른 의무를 임의로 이행하지 않는 경우에는 집행권원에 기초한 강제집행 절차가 별도로 필요할 수 있습니다.",
    ],
  },
];

export const CIVIL_CTA = {
  heading: "민사소송 서류, 사실관계와 자료부터 정리해 보세요",
  description: "상대방과 청구내용, 사건 경위 및 증거자료를 확인한 뒤 법원 제출서류 작성에 필요한 내용을 정리합니다.",
  buttonLabel: "상담 신청",
};

export type CivilServiceAreaItem = {
  label: string;
  description: string;
  // /civil/lease처럼 별도 상세페이지가 있는 항목에만 지정합니다. 제소전화해·
  // 채권양도·채권질권·가압류·가처분 등은 이번 작업에서 별도 route를 새로
  // 만들지 않았으므로 href 없이 이 페이지 안의 설명으로만 안내합니다.
  href?: string;
};

// "주요 민사 업무" 섹션입니다. CivilTypes(대표적인 민사분쟁 "유형")와는
// 성격이 달라 — 이 목록은 실제로 준비하는 서류·절차의 종류를 안내합니다.
// 임대차·보증금은 새로 생긴 /civil/lease 상세페이지로 연결하고, 그
// 외에는 이번 작업에서 새 상세 route를 만들지 않았으므로(제소전화해·
// 채권양도·채권질권은 지나치게 기술적이거나 계약 단계 보충 정보 성격이라
// 별도 페이지 없이 이 목록의 설명만으로 안내) href를 지정하지 않습니다.
// 법무사의 업무범위(법원 제출서류의 작성·제출대행 및 이에 부수되는
// 업무)를 벗어나는 표현은 사용하지 않습니다. 특히 "채권양도·채권질권"
// 항목은 법무사가 일반 사적 계약서를 작성·검토해 주는 것처럼 읽히지
// 않도록, "서류" 대신 권리관계·대항요건을 확인하는 업무로 표현합니다
// (civil-lease.ts의 LEASE_RELATED_CLAIMS와 동일한 표현 원칙).
export const CIVIL_SERVICE_AREAS_HEADING = "주요 민사 업무";
export const CIVIL_SERVICE_AREAS_DESCRIPTION =
  "민사소송 관련 법원 제출서류의 작성·제출대행과 이에 부수되는 업무로 아래와 같은 사건을 다룹니다.";

export const CIVIL_SERVICE_AREAS: CivilServiceAreaItem[] = [
  {
    label: "금전청구",
    description: "대여금·공사대금·매매대금 등 금전 지급을 청구하는 소송서류",
  },
  {
    label: "지급명령",
    description: "금전 등의 지급을 목적으로 하는 청구에 이용하는 독촉절차 신청서류",
  },
  {
    label: "임대차·보증금",
    description: "임대차 종료 후 보증금 반환, 임차권등기명령 등 임대차 관련 서류",
    href: "/civil/lease",
  },
  {
    label: "제소전화해",
    description: "소를 제기하기 전에 법원에 화해를 신청하는 절차의 신청서류",
  },
  {
    label: "내용증명 등 분쟁 전 서류",
    description: "소송 전 의사표시나 최고를 명확히 해 두기 위한 서류",
  },
  {
    label: "채권양도·채권질권 관련 확인사항",
    description: "채권양도·채권질권 관련 권리관계와 대항요건 확인",
  },
  {
    label: "가압류·가처분 관련 서류",
    description: "본안소송 전 권리를 보전하기 위한 신청서류",
  },
  {
    label: "기타 민사 법원 제출서류",
    description: "그 밖에 민사사건에서 필요한 법원 제출서류",
  },
];
