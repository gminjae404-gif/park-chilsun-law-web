import type { FaqItem, ProcessStep } from "@/lib/constants";

// 가사·상속(/family) 하위의 개명허가 상세 안내 페이지(/family/name-change)
// 전용 확정 문구입니다. family.ts·family-inheritance.ts·family-guardianship.ts
// 와는 독립된 파일로 격리하며, 세 파일의 기존 export는 이 페이지 구현으로
// 전혀 수정하지 않습니다. FaqItem·ProcessStep 타입만 constants.ts에서
// 그대로 가져다 씁니다.
//
// 법무사의 업무범위(법원 제출서류의 작성·제출대행과 이에 부수되는
// 업무)를 벗어나는 "소송을 대리합니다"·"법정에서 대신 변론합니다" 등의
// 표현은 사용하지 않습니다. 아래 내용 역시 단정하지 않습니다: 개명신청은
// 자동으로 허가된다 / 특정 개명사유가 있으면 반드시 허가된다 / 법원의
// 개명허가를 받으면 즉시 모든 이름이 변경 완료된다 / 개명신고는 필요
// 없다 / 출생신고 당시 이름 오류는 무조건 등록부정정 대상이다 /
// 미성년자는 무조건 부모만 신청할 수 있다 / 부모가 동의하면 무조건
// 개명허가가 된다 / 주민등록·은행·등기 등이 모두 자동으로 변경된다 /
// 개명과 성·본 변경을 같은 절차로 설명한다. 오래된 교육자료의 인지액·
// 송달료·서류 통수를 현재 확정 금액·부수로 단정하지 않으며, 실제
// 사무소 상호·법무사 이름·주소·전화번호·영업시간·수임료 등 확정되지
// 않은 실존 정보는 만들어 넣지 않습니다(SITE_CONFIG의 null 필드를
// 그대로 둡니다).
export const NAME_CHANGE_HERO = {
  title: "이름을 바꾸려면 무엇부터 해야 할까요?",
  lead: "개명은 단순히 행정기관에서 이름을 변경하는 절차가 아닙니다. 원칙적으로 가정법원의 개명허가를 받은 뒤 개명신고를 해야 가족관계등록부의 이름이 변경됩니다.",
  note: "개명허가 신청부터 허가 후 신고와 후속 명의변경까지 순서대로 확인해 보세요.",
};

export type NameChangeSituation = {
  title: string;
  href: string;
};

export const NAME_CHANGE_SITUATIONS_HEADING = "현재 어떤 상황인가요?";
export const NAME_CHANGE_SITUATIONS_DESCRIPTION =
  "해당하는 상황을 선택하면 관련 안내로 바로 이동합니다.";

export const NAME_CHANGE_SITUATIONS: NameChangeSituation[] = [
  { title: "오랫동안 다른 이름을 사용해 왔습니다", href: "#evidence" },
  { title: "현재 이름 때문에 생활상 불편이 있습니다", href: "#explanation" },
  { title: "한글 이름이나 한자를 변경하고 싶습니다", href: "#distinction" },
  { title: "미성년 자녀의 이름을 바꾸고 싶습니다", href: "#minor" },
  { title: "출생신고 당시 이름 기재에 문제가 있었습니다", href: "#distinction" },
  { title: "개명허가는 받았는데 이후 절차를 모르겠습니다", href: "#not-automatic" },
];

export type NameChangeCard = {
  title: string;
  description: string;
  // guardianship과 동일한 부분 문자열 bold 패턴입니다(문구 변경 없음).
  emphasis?: string;
};

export const NAME_CHANGE_DISTINCTION_HEADING =
  "이름을 바꾸는 것과 잘못된 등록기록을 바로잡는 것은 다릅니다";
export const NAME_CHANGE_DISTINCTION_CARDS: NameChangeCard[] = [
  {
    title: "개명",
    description: "현재 가족관계등록부에 적법하게 등록되어 있는 이름을 다른 이름으로 변경하려는 경우입니다.",
    emphasis: "적법하게 등록되어 있는 이름을 다른 이름으로 변경하려는",
  },
  {
    title: "가족관계등록부 정정",
    description:
      "등록부의 기록 자체가 법률상 허용될 수 없거나 기재에 착오·누락 등이 있어 그 기록을 바로잡는 문제입니다.",
    emphasis: "기록 자체가 법률상 허용될 수 없거나 기재에 착오·누락 등이 있어 그 기록을 바로잡는",
  },
];

export const NAME_CHANGE_DISTINCTION_WARNING = {
  title: "먼저 어떤 문제인지 구분해야 합니다",
  content:
    "출생신고 당시 이름을 잘못 적었다는 사정만으로 모든 사건이 등록부정정 절차가 되는 것은 아닙니다. 실제로 이름 자체를 다른 이름으로 변경하려는 것인지, 등록기록의 착오·누락을 바로잡는 것인지 먼저 구분해야 합니다.",
  // name-change-page-refine에서, 위 두 카드(개명/가족관계등록부 정정)의
  // emphasis와 동일한 구분 기준이 이 경고 패널에서도 반복된다는 것을
  // 보여주기 위해 guardianship과 동일한 방식으로 content 중 구분 기준
  // 부분만 <strong> 처리합니다(문구 변경 없음).
  //
  // name-change-page-refine 보정에서, 문장 전체가 아니라 두 제도를
  // 구분하는 핵심 substring("개명" 쪽 판단)만 남기도록 범위를
  // 좁혔습니다.
  emphasis: "이름 자체를 다른 이름으로 변경하려는 것인지",
};

// 가족관계등록부 정정은 이 페이지의 핵심 주제가 아니므로 상세 절차를
// 확장하지 않고, 개명과의 구분 지점만 짧게 안내합니다. 정정 절차의
// 상세 안내는 향후 별도 페이지(/family/registry-correction)로 분리할
// 수 있도록 이 파일과 컴포넌트를 개명 내용으로만 한정합니다.

// "개명허가의 일반적인 흐름"은 개명허가 신청이라는 하나의 절차
// 유형을 설명하는 것이므로 공용 ProcessSection(timeline)을 재사용
//합니다(guardianship 페이지와 동일한 재사용 방식).
export const NAME_CHANGE_PROCESS_HEADING = "개명허가의 일반적인 흐름";
export const NAME_CHANGE_PROCESS_NOTE =
  "허가결정을 받았다고 해서 각 기관의 이름 정보가 즉시 자동으로 변경되는 것은 아닙니다. 허가 이후에도 개명신고와 기관별 명의변경 절차를 확인해야 합니다.";

export const NAME_CHANGE_PROCESS_STEPS: ProcessStep[] = [
  { step: "01", label: "현재 이름과 변경하려는 이름 확인" },
  { step: "02", label: "개명사유 및 소명자료 준비" },
  { step: "03", label: "개명허가신청" },
  { step: "04", label: "가정법원 심사" },
  { step: "05", label: "허가결정" },
  { step: "06", label: "개명신고" },
  { step: "07", label: "각종 명의정보 변경" },
];

export const NAME_CHANGE_JURISDICTION_HEADING = "개명허가는 어느 법원에 신청하나요?";
export const NAME_CHANGE_JURISDICTION_PARAGRAPHS: string[] = [
  "개명하려는 사람의 주소지를 관할하는 가정법원의 허가를 받는 것이 원칙입니다.",
  "재외국민의 경우에는 등록기준지를 관할하는 가정법원이 기준이 됩니다.",
];

export const NAME_CHANGE_EXPLANATION_HEADING = "왜 이름을 바꾸려는지 구체적으로 설명해야 합니다";
export const NAME_CHANGE_EXPLANATION_PARAGRAPH =
  "개명허가신청에서는 단순히 지금 이름이 마음에 들지 않는다는 한 줄 설명보다, 현재 이름으로 인해 발생한 생활관계, 새 이름을 실제 사용해 온 사정, 가족관계와 사회생활상의 사정 등 개명 필요성을 뒷받침하는 내용을 사건에 맞게 정리하는 것이 중요합니다.";
// name-change-page-refine에서, 단순 변심("마음에 들지 않는다")과
// 구별되는, 실제로 정리해야 할 사정을 강조합니다. 문구 자체는 변경하지
// 않습니다.
//
// name-change-page-refine 보정에서, 문장 전체("...정리하는 것이
// 중요합니다"까지)가 아니라 핵심 명사구만 남기도록 범위를 좁혔습니다.
export const NAME_CHANGE_EXPLANATION_PARAGRAPH_EMPHASIS = "개명 필요성을 뒷받침하는 내용";

export const NAME_CHANGE_EXPLANATION_ITEMS: string[] = [
  "실제 사용해 온 이름",
  "현재 이름으로 인한 생활상 불편",
  "발음·표기 등으로 생기는 지속적인 문제",
  "가족관계나 사회생활에서의 사용 경위",
  "그 밖에 개명 필요성을 확인할 수 있는 객관적 사정",
];

export const NAME_CHANGE_EXPLANATION_WARNING = {
  title: "특정 사유가 있다고 반드시 허가되는 것은 아닙니다",
  content:
    "개명 필요성을 뒷받침하는 사정이 있다고 해서 신청이 항상 허가되는 것은 아니며, 사건마다 구체적인 사정에 따라 심사됩니다.",
  // name-change-page-refine에서, 개명허가의 핵심 판단기준(사건마다
  // 개별심사)을 강조합니다. 문구 자체는 변경하지 않습니다.
  //
  // name-change-page-refine 보정에서, 문장 전체가 아니라 판단기준
  // 핵심어만 남기도록 범위를 좁혔습니다.
  emphasis: "구체적인 사정에 따라 심사",
};

export const NAME_CHANGE_EVIDENCE_HEADING = "개명사유를 뒷받침할 자료가 있다면 함께 확인합니다";
export const NAME_CHANGE_EVIDENCE_ITEMS: string[] = [
  "변경하려는 이름을 실제 사용한 자료",
  "학교·직장·단체 등에서 사용한 자료",
  "우편물·명함·문서 등 사회생활상 사용자료",
  "현재 이름 때문에 발생한 불편을 확인할 자료",
  "그 밖에 신청이유를 객관적으로 뒷받침할 자료",
];

export const NAME_CHANGE_EVIDENCE_NOTE = "모든 신청에 위 자료가 전부 필요한 것은 아닙니다.";

export const NAME_CHANGE_MINOR_HEADING = "미성년자의 개명은 누구를 기준으로 판단하나요?";
export const NAME_CHANGE_MINOR_PARAGRAPH =
  "미성년자의 경우에도 개명허가 절차가 필요하며, 자녀의 나이와 의사능력, 법정대리 관계 등 사건의 구체적인 상황을 확인해야 합니다.";
// name-change-page-refine에서, 미성년자 개명에서 실제로 확인해야 하는
// 핵심 기준을 강조합니다. 문구 자체는 변경하지 않습니다.
export const NAME_CHANGE_MINOR_PARAGRAPH_EMPHASIS = "자녀의 나이와 의사능력, 법정대리 관계 등 사건의 구체적인 상황";
export const NAME_CHANGE_MINOR_NOTE =
  "의사능력이 있는 미성년자는 단독으로 개명허가를 신청할 수 있는 경우도 있으므로, 신청주체는 사건에 맞게 확인해야 합니다.";
// name-change-page-refine에서, 미성년자도 단독 신청이 가능할 수 있다는
// 사실을 강조합니다. 문구 자체는 변경하지 않습니다.
export const NAME_CHANGE_MINOR_NOTE_EMPHASIS = "의사능력이 있는 미성년자는 단독으로 개명허가를 신청할 수 있는";

// 이 페이지의 핵심 경고 section입니다. "허가결정 = 절차 종료"로
// 오해하지 않도록, 신고 의무와 그 기간(가족관계등록법 제99조 기준
// 1개월)을 통일된 warning panel로 분명하게 안내합니다.
export const NAME_CHANGE_NOT_AUTOMATIC_HEADING = "개명허가를 받았다고 절차가 모두 끝나는 것은 아닙니다";
export const NAME_CHANGE_NOT_AUTOMATIC_PARAGRAPH =
  "가정법원의 개명허가를 받은 뒤에는 개명신고가 필요합니다.";
export const NAME_CHANGE_NOT_AUTOMATIC_WARNING = {
  title: "법원의 허가와 개명신고는 별개의 단계입니다",
  content: "개명허가결정등본을 받은 날부터 1개월 이내에 개명신고를 해야 합니다.",
  // 경고박스 제목이 기간을 특정하지 않으므로, content의 기간 부분만
  // guardianship과 동일한 방식으로 <strong> 처리합니다(문구 변경 없음).
  emphasis: "개명허가결정등본을 받은 날부터 1개월 이내",
};

export const NAME_CHANGE_REPORT_HEADING = "허가 후에는 개명신고를 진행합니다";
export const NAME_CHANGE_REPORT_PARAGRAPH =
  "개명신고서에는 변경 전 이름, 변경한 이름, 허가연월일 등을 기재하고 개명허가결정등본을 첨부합니다.";

export const NAME_CHANGE_AFTER_CHANGE_HEADING = "가족관계등록부 변경 후에도 확인할 곳이 남아 있습니다";
export const NAME_CHANGE_AFTER_CHANGE_ITEMS: string[] = [
  "주민등록 관련 정보",
  "신분증",
  "은행·금융기관",
  "신용카드",
  "보험",
  "운전면허",
  "자격증",
  "학교·직장",
  "부동산 또는 등기명의 등",
];
export const NAME_CHANGE_AFTER_CHANGE_NOTE =
  "기관별 반영 방식과 요구서류는 서로 다를 수 있으므로 해당 기관의 현재 기준을 확인해야 합니다.";

export const NAME_CHANGE_DOCUMENTS_HEADING = "준비자료 체크리스트";
export const NAME_CHANGE_DOCUMENTS_DESCRIPTION =
  "아래 자료가 모든 사건에 동일하게 필요한 것은 아닙니다. 현재 상황에 해당하는 항목부터 확인해 보세요.";

export type NameChangeDocumentGroup = {
  id: string;
  title: string;
  items: string[];
};

// 준비자료를 성격이 다른 세 묶음으로 나눕니다. "관련 자료"처럼
// 추상적이던 표현을 실제 법원 안내 기준의 서류명으로 구체화하되,
// 확인되지 않은 명칭은 임의로 만들지 않았습니다("주민등록등본(상세)"
// 같은 존재하지 않는 구분을 새로 만들지 않음). 화면과 인쇄가 항상
// 같은 데이터를 공유하므로(이 페이지는 별도의 인쇄 전용 그룹을 두지
// 않습니다) 두 화면의 구체성 수준이 자연히 일치합니다.
//
// - "준비해야 할 기본서류": 성년자 개명 사건에서 공통적으로 요구되는
//   서류입니다. 부·모의 가족관계증명서는 법원이 친권관계 등을 확인하기
//   위한 것으로, 미성년자 사건에서만 필요한 것이 아니라 성년자 사건의
//   기본서류로도 요구될 수 있습니다.
// - "상담할 때 확인할 내용": 서류가 아니라 사실관계 확인사항이므로
//   준비서류 목록에서 분리했습니다.
// - "해당 시 추가자료": 사건마다 있거나 없을 수 있는 자료입니다.
//   미성년자 전체에 "동의서와 인감증명서가 항상 필요하다"고 단정하지
//   않고, 연령·친권관계·신청방법에 따라 달라질 수 있다는 조건을
//   유지했습니다. 부모의 가족관계증명서를 발급받기 어려운 경우의
//   대안(제적등본 등)과, 과거 개명허가를 받은 적이 있는 경우에만
//   필요한 자료도 이 묶음으로 분리했습니다.
export const NAME_CHANGE_DOCUMENT_GROUPS: NameChangeDocumentGroup[] = [
  {
    id: "basic",
    title: "준비해야 할 기본서류",
    items: [
      "사건본인 기본증명서(상세)",
      "사건본인 가족관계증명서(상세)",
      "사건본인 주민등록등본",
      "사건본인의 부 가족관계증명서(상세)",
      "사건본인의 모 가족관계증명서(상세)",
      "사건본인에게 성년자녀가 있는 경우 성년자녀 각 가족관계증명서(상세)",
    ],
  },
  {
    id: "consultation",
    title: "상담할 때 확인할 내용",
    items: ["현재 이름", "변경하려는 이름", "개명하려는 구체적인 사유"],
  },
  {
    id: "additional",
    title: "해당 시 추가자료",
    items: [
      "개명사유를 뒷받침할 객관적 자료가 있는 경우 해당 자료",
      "부 또는 모의 가족관계증명서를 발급하기 어려운 경우 제적등본 등으로 확인할 수 있는 자료",
      "미성년자인 경우 연령·친권관계·신청방법에 따라 필요한 동의서 또는 위임 관련 자료",
      "과거 개명허가와 관련된 확인이 필요한 경우 개명허가결정등본 등 해당 자료",
    ],
  },
];

export const NAME_CHANGE_DOCUMENTS_NOTE =
  "실제 제출서류는 사건본인의 가족관계, 연령, 신청사유 및 법원의 보정 요구 등에 따라 달라질 수 있습니다.";

export const NAME_CHANGE_MISCONCEPTIONS_HEADING = "자주 하는 오해";
export const NAME_CHANGE_MISCONCEPTIONS_DESCRIPTION =
  "개명 절차에 관해 실제와 다르게 알려진 내용을 확인해 보세요.";

export const NAME_CHANGE_MISCONCEPTIONS: string[] = [
  "개명허가를 받으면 모든 기관의 이름이 자동으로 변경된다고 생각하기 쉽지만, 실제로는 개명신고와 기관별 확인 절차가 남아 있습니다.",
  "출생신고 당시 이름에 문제가 있었다고 해서 언제나 등록부정정 대상이 되는 것은 아니며, 개명에 해당하는 경우도 있습니다.",
  "부모가 원한다는 사정만으로 미성년 자녀의 이름이 바로 변경되는 것은 아니며, 개명허가 절차를 거쳐야 합니다.",
  "개명사유는 아무 내용이나 적어도 결과가 같지 않으며, 구체적인 사정을 사건에 맞게 정리하는 것이 중요합니다.",
  "개명허가결정을 받았다고 해서 신고가 필요 없는 것은 아니며, 정해진 기간 내에 개명신고를 해야 합니다.",
];

export const NAME_CHANGE_FAQ_HEADING = "개명 자주 묻는 질문";

export const NAME_CHANGE_FAQ_ITEMS: FaqItem[] = [
  {
    question: "이름이 마음에 들지 않는다는 이유만으로 개명을 신청할 수 있나요?",
    answer: [
      "신청 자체는 할 수 있지만, 단순히 마음에 들지 않는다는 한 줄 설명보다 현재 이름으로 인한 불편이나 새 이름을 사용해 온 사정 등 구체적인 개명 필요성을 정리하는 것이 중요합니다.",
    ],
  },
  {
    question: "개명신청을 하면 반드시 허가되나요?",
    answer: [
      "그렇지 않습니다. 개명 필요성을 뒷받침하는 사정이 있다고 해서 항상 허가되는 것은 아니며, 사건마다 구체적인 사정에 따라 심사됩니다.",
    ],
  },
  {
    question: "다른 이름을 오랫동안 사용한 자료가 도움이 되나요?",
    answer: [
      "실제로 사용해 온 이름과 관련된 자료는 개명 필요성을 뒷받침하는 참고자료가 될 수 있습니다. 다만 모든 신청에 동일한 자료가 전부 필요한 것은 아닙니다.",
    ],
  },
  {
    question: "출생신고 때 이름을 잘못 적었다면 개명인가요, 등록부정정인가요?",
    answer: [
      "사정에 따라 다릅니다. 등록부의 기재 자체에 착오·누락이 있어 바로잡는 문제라면 등록부정정, 적법하게 등록된 이름을 다른 이름으로 바꾸려는 것이라면 개명에 해당할 수 있으므로 먼저 구분이 필요합니다.",
    ],
  },
  {
    question: "미성년 자녀도 개명할 수 있나요?",
    answer: [
      "네. 미성년자도 개명허가 절차를 거쳐 이름을 변경할 수 있습니다. 다만 자녀의 나이와 의사능력, 법정대리 관계 등 구체적인 사정을 확인해야 합니다.",
    ],
  },
  {
    question: "미성년자의 개명은 부모가 신청해야 하나요?",
    answer: [
      "사건마다 다릅니다. 의사능력이 있는 미성년자는 단독으로 신청할 수 있는 경우도 있으므로, 신청주체는 구체적인 사정에 맞게 확인해야 합니다.",
    ],
  },
  {
    question: "개명허가를 받으면 이름이 자동으로 변경되나요?",
    answer: [
      "아닙니다. 가정법원의 개명허가를 받은 뒤에는 개명신고를 해야 가족관계등록부의 이름이 변경됩니다.",
    ],
  },
  {
    question: "개명신고는 언제까지 해야 하나요?",
    answer: ["개명허가결정등본을 받은 날부터 1개월 이내에 개명신고를 해야 합니다."],
  },
  {
    question: "개명 후 주민등록·은행·면허 등의 이름도 자동으로 바뀌나요?",
    answer: [
      "그렇지 않습니다. 가족관계등록부 변경 이후에도 주민등록, 신분증, 금융기관, 운전면허 등은 별도로 확인이 필요하며, 기관별 반영 방식과 요구서류가 다를 수 있습니다.",
    ],
  },
  {
    question: "개명신청은 어느 법원에 하나요?",
    answer: [
      "원칙적으로 개명하려는 사람의 주소지를 관할하는 가정법원에 신청합니다. 재외국민의 경우에는 등록기준지를 관할하는 가정법원이 기준이 됩니다.",
    ],
  },
];

export const NAME_CHANGE_CTA = {
  heading: "지금 상황에서 필요한 절차부터 확인해 보세요",
  description:
    "개명이 필요한 상황인지, 가족관계등록부 정정에 해당하는 문제인지에 따라 확인해야 할 절차와 자료가 달라질 수 있습니다. 현재 이름과 변경하려는 이름, 그 사유를 먼저 정리하면 어떤 절차부터 진행해야 하는지 보다 정확하게 확인할 수 있습니다.",
  buttonLabel: "상담 신청",
};
