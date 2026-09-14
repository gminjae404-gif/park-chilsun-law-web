import type { FaqItem } from "@/lib/constants";

// 가사·상속(/family) 하위의 상속 실무 안내 페이지(/family/inheritance) 전용
// 확정 문구입니다. family.ts(개괄 허브 페이지)와는 독립된 파일로 격리하며,
// family.ts의 기존 export(FAMILY_HERO, FAMILY_INHERITANCE_NOTE 등)는 이
// 페이지 구현으로 전혀 수정하지 않습니다. FaqItem 타입만 constants.ts에서
// 그대로 가져다 씁니다.
//
// 이 페이지의 목적은 상속을 이제 막 경험한 사람이 "지금 무엇부터
// 확인해야 하는지 → 포기/한정승인이 필요한지 → 재산분할/상속등기가
// 필요한지 → 해외상속인·유언 등 특수상황인지"를 순서대로 이해하도록 돕는
// 실무 안내입니다. 다만 상속포기·한정승인·재산분할·상속등기·해외상속·
// 유언은 사건마다 시작 조건과 순서가 다른 "서로 다른 상황"이므로,
// ProcessSection(공용 timeline)은 사용하지 않고 상황별로 구분된 section을
// 병렬로 구성합니다.
//
// 법무사의 업무범위(법원 제출서류의 작성·제출대행과 이에 부수되는
// 업무)를 벗어나는 "소송을 대리합니다"·"법정에서 대신 변론합니다" 등의
// 표현은 사용하지 않습니다. 아래 내용 역시 단정하지 않습니다: 사망일로부터
// 무조건 3개월이다 / 상속포기가 한정승인보다 항상 유리하다(또는 그
// 반대) / 한정승인은 법원 수리만으로 모든 절차가 끝난다 / 특별한정승인은
// 빚을 늦게 알았다는 사정만으로 자동 인정된다 / 부동산 상속등기는
// 반드시 부동산 소재지 관할 등기소에만 신청한다 / 해외서류는 무조건
// 아포스티유가 필요하다 / 유언검인을 받으면 유언의 실체적 유효성이
// 확정된다 / 상속재산분할협의에서 한 사람이 재산을 받으면 채무도 항상 그
// 사람만 부담한다 / 이 페이지에서 다루는 모든 서류가 모든 사건에 똑같이
// 필요하다. 실제 사무소 상호·법무사 이름·주소·전화번호·영업시간·수임료
// 등 확정되지 않은 실존 정보는 만들어 넣지 않습니다(SITE_CONFIG의 null
// 필드를 그대로 둡니다).
export const INHERITANCE_HERO = {
  title: "상속, 무엇부터 확인해야 할까요?",
  lead: "상속은 재산을 받는 절차만을 의미하지 않습니다. 채무 확인, 상속포기·한정승인, 상속재산분할, 상속등기 등 현재 상황에 따라 먼저 처리해야 할 절차가 달라질 수 있습니다.",
  note: "사망 직후부터 서둘러 처분하거나 명의를 변경하기보다 상속인과 재산·채무 관계를 먼저 확인하는 것이 중요합니다.",
};

export type InheritanceSituation = {
  title: string;
  href: string;
};

export const INHERITANCE_SITUATIONS_HEADING = "현재 어떤 상황인가요?";
export const INHERITANCE_SITUATIONS_DESCRIPTION =
  "해당하는 상황을 선택하면 관련 안내로 바로 이동합니다.";

// 8개 상황 카드입니다. 문항 순서와 문구는 확정된 그대로이며, 각 카드는
// 페이지 내 관련 section으로 anchor 이동합니다("안심상속 원스톱서비스"·
// "3개월 기간"처럼 특정 카드와 1:1로 대응하지 않는 section은 카드 목록에
// 없어도 스크롤로 확인할 수 있습니다).
export const INHERITANCE_SITUATIONS: InheritanceSituation[] = [
  { title: "재산과 채무를 아직 모릅니다", href: "#first-check" },
  { title: "빚이 더 많을까 걱정됩니다", href: "#renunciation-limited" },
  { title: "뒤늦게 채무를 알게 되었습니다", href: "#special-limited" },
  { title: "상속인끼리 재산을 나누려 합니다", href: "#division" },
  { title: "부동산 상속등기가 필요합니다", href: "#registration" },
  { title: "해외에 있는 상속인이 있습니다", href: "#overseas-heir" },
  { title: "유언장이 발견되었습니다", href: "#will" },
  { title: "생전에 증여를 검토하고 있습니다", href: "#lifetime-gift" },
];

export type InheritanceCheckItem = {
  title: string;
  description: string;
};

export const INHERITANCE_FIRST_CHECK_HEADING = "상속 발생 후 먼저 확인할 사항";
export const INHERITANCE_FIRST_CHECK_DESCRIPTION =
  "상속재산을 처분하거나 명의를 정리하기 전에 아래 순서로 현재 상황을 확인하면 도움이 됩니다.";

export const INHERITANCE_FIRST_CHECK_ITEMS: InheritanceCheckItem[] = [
  { title: "누가 상속인인지 확인", description: "법정상속인의 범위와 순위를 확인합니다." },
  { title: "피상속인의 적극재산 확인", description: "부동산, 예금, 보험 등 재산관계를 확인합니다." },
  {
    title: "채무·보증채무 등 소극재산 확인",
    description: "금융기관 채무뿐 아니라 보증채무 등 소극재산도 함께 확인합니다.",
  },
  {
    title: "진행 중인 소송·압류·담보권 등이 있는지 확인",
    description: "상속재산에 소송, 압류, 담보권 등이 걸려 있는지 확인합니다.",
  },
  { title: "유언 존재 여부 확인", description: "유언장이 있는지, 있다면 어떤 방식으로 작성되었는지 확인합니다." },
  {
    title: "포기·한정승인 필요 여부 검토",
    description: "상속재산을 임의로 처분하기 전에 상속포기·한정승인이 필요한지 검토합니다.",
  },
];

export const INHERITANCE_FIRST_CHECK_WARNING = {
  title: "처분하기 전에 절차부터 확인하세요",
  content:
    "상속포기나 한정승인을 검토 중이라면 상속재산을 먼저 처분하거나 임의로 소비하는 행동은 법적 효과에 영향을 줄 수 있으므로 먼저 절차를 확인해야 합니다.",
};

export const INHERITANCE_ONE_STOP_HEADING = "안심상속 원스톱서비스";
export const INHERITANCE_ONE_STOP_PARAGRAPHS: string[] = [
  "안심상속 원스톱서비스는 피상속인의 금융거래, 국세·지방세, 국민연금 등 여러 기관의 재산내역을 한 번에 조회를 신청할 수 있는 서비스입니다.",
  "조회 결과는 재산과 채무를 확인하는 데 참고자료가 되지만, 조회 결과가 나오기까지의 기간과 상속포기·한정승인을 할 수 있는 법정기간은 별개로 계속 진행됩니다.",
];

export const INHERITANCE_ONE_STOP_WARNING = {
  title: "신청기간과 법정기간은 다른 문제입니다",
  content:
    "안심상속 원스톱서비스의 신청기간과 상속포기·한정승인의 법정기간은 서로 다른 문제입니다. 조회 결과를 기다리는 동안 상속포기·한정승인의 법정기간이 함께 지나갈 수 있으므로, 조회와 별도로 기간을 확인해야 합니다.",
};

export type InheritanceComparisonCard = {
  title: string;
  points: string[];
  // guardianship의 GUARDIANSHIP_TYPE_CARDS와 동일한 부분 문자열 bold
  // 패턴입니다: points 중 이 문자열을 포함하는 항목에서만 그 부분만
  // <strong>으로 감쌉니다(문구 변경 없음, 카드당 1곳).
  emphasis?: string;
};

export const INHERITANCE_RENUNCIATION_HEADING = "상속포기·한정승인";
export const INHERITANCE_RENUNCIATION_DESCRIPTION =
  "재산보다 채무가 많을 수 있는 경우 검토하는 두 가지 제도입니다. 어느 한쪽이 항상 더 유리한 것은 아니며, 현재 상황에 맞는 제도를 확인해야 합니다.";

export const INHERITANCE_RENUNCIATION_CARDS: InheritanceComparisonCard[] = [
  {
    title: "상속포기",
    points: [
      "상속인으로서의 지위 자체를 포기하는 것입니다.",
      "상속포기로 다른 공동상속인이나 다음 순위 상속인의 상속관계가 달라질 수 있으므로, 한 사람만이 아니라 가족 전체의 상속관계를 함께 확인할 필요가 있습니다.",
    ],
    emphasis: "상속인으로서의 지위 자체를 포기하는 것",
  },
  {
    title: "한정승인",
    points: [
      "상속으로 취득한 재산의 범위에서만 피상속인의 채무를 부담하는 것입니다.",
      "재산과 채무 관계가 불명확한 경우에 검토하며, 법원의 심판을 받았다고 해서 절차가 모두 끝나는 것은 아닙니다. 이후 채권자에 대한 공고·최고와 상속재산의 청산 등 후속절차를 확인해야 합니다.",
    ],
    emphasis: "상속으로 취득한 재산의 범위에서만 피상속인의 채무를 부담하는 것",
  },
];

export const INHERITANCE_RENUNCIATION_NOTE =
  "상속포기와 한정승인 중 무엇이 더 나은지는 사건마다 다르며, 가족관계와 재산·채무 현황을 함께 확인한 뒤 판단할 사항입니다.";

export const INHERITANCE_THREE_MONTH_HEADING = "3개월 기간";
export const INHERITANCE_THREE_MONTH_PARAGRAPH =
  "상속포기와 한정승인은 원칙적으로 상속개시가 있음을 안 날부터 3개월 내에 할 수 있습니다. 이는 사망일부터 무조건 3개월이라는 의미가 아니라, 통상 사망 사실과 자신이 상속인이 되었다는 사실을 안 때를 기준으로 합니다.";
// inheritance-page-refine에서, guardianship과 동일한 부분 문자열 bold
// 패턴으로 이 페이지에서 가장 자주 반복되는 핵심 기준(3개월 기산 기준)을
// 강조합니다. 문구 자체는 변경하지 않습니다.
export const INHERITANCE_THREE_MONTH_EMPHASIS = "상속개시가 있음을 안 날부터 3개월";

export const INHERITANCE_THREE_MONTH_WARNING = {
  title: "기산일은 사건마다 다르게 판단될 수 있습니다",
  content:
    "언제 상속개시가 있음을 알았다고 볼 것인지는 구체적인 사실관계에 따라 다투어질 수 있으므로, 특정 사건의 기산일을 미리 단정하지 않고 현재까지의 경위를 함께 확인해야 합니다.",
};

export const INHERITANCE_SPECIAL_LIMITED_HEADING = "3개월이 지났다고 항상 끝나는 것은 아닙니다";
export const INHERITANCE_SPECIAL_LIMITED_PARAGRAPHS: string[] = [
  "상속채무가 상속재산을 초과한다는 사실을 상속인이 중대한 과실 없이 법정기간 내에 알지 못한 경우에는, 그 사실을 안 날부터 일정 기간 내에 특별한정승인을 검토할 수 있습니다.",
  "상속인 중 미성년자가 있는 경우에는 친권자·후견인의 인지 시점이나 관련 특별규정을 별도로 확인해야 합니다.",
];
// inheritance-page-refine에서, 특별한정승인을 검토할 수 있는 요건(중대한
// 과실 없이 법정기간 내에 알지 못한 경우)을 강조합니다. 문단 배열 중
// 이 문자열을 포함하는 문단에서만 부분 강조되며(현재는 0번째 문단),
// 문구 자체는 변경하지 않습니다.
export const INHERITANCE_SPECIAL_LIMITED_EMPHASIS = "중대한 과실 없이 법정기간 내에 알지 못한 경우";

export const INHERITANCE_SPECIAL_LIMITED_WARNING = {
  title: "단순히 늦게 알았다는 사정만으로 인정되지 않습니다",
  content:
    "특별한정승인은 상속채무가 상속재산을 초과한다는 사실을 단순히 늦게 알았다는 사정만으로 자동 인정되는 것이 아니며, 중대한 과실이 없었는지 등 요건을 확인해야 합니다.",
};

export const INHERITANCE_DIVISION_HEADING = "상속재산분할";
export const INHERITANCE_DIVISION_PARAGRAPHS: string[] = [
  "공동상속인은 협의로 상속재산을 나눌 수 있습니다. 협의분할은 공동상속인 전원이 참여해야 하며, 일부 상속인만 협의한 분할은 효력에 문제가 생길 수 있습니다.",
  "협의가 이루어지지 않는 경우에는 가정법원에 조정이나 심판을 청구하는 절차를 검토할 수 있습니다.",
];
// inheritance-page-refine에서, 협의분할이 유효하려면 공동상속인 전원이
// 참여해야 한다는 핵심 요건을 강조합니다. 문단 배열 중 이 문자열을
// 포함하는 문단(현재 0번째)에서만 부분 강조되며, 문구는 변경하지
// 않습니다.
export const INHERITANCE_DIVISION_PARAGRAPH_EMPHASIS = "공동상속인 전원이 참여해야";

export type InheritanceDivisionWarning = {
  title: string;
  content: string;
  // guardianship/lease와 동일한 부분 문자열 bold 패턴입니다(문구 변경
  // 없음, 항목당 1곳).
  emphasis?: string;
};

export const INHERITANCE_DIVISION_WARNINGS: InheritanceDivisionWarning[] = [
  {
    title: "재산을 받는 사람과 채무를 부담하는 사람은 다를 수 있습니다",
    content:
      "상속재산을 특정 상속인 한 명이 받기로 협의했다고 해서 피상속인의 채무까지 당연히 그 한 사람만 부담하게 되는 것은 아닙니다.",
    emphasis: "채무까지 당연히 그 한 사람만 부담하게 되는 것은 아닙니다",
  },
  {
    title: "등기 전에 분할 내용을 충분히 확인하세요",
    content:
      "이미 상속등기를 마친 뒤에 재산분할 내용을 바꾸면 소유권경정등기, 등기상 이해관계인, 세금 문제 등이 새로 생길 수 있으므로 등기를 하기 전에 분할 내용을 충분히 확인해야 합니다.",
  },
];

export type InheritanceRegistrationType = {
  title: string;
  description: string;
  // guardianship과 동일한 부분 문자열 bold 패턴입니다(문구 변경 없음).
  emphasis?: string;
};

export const INHERITANCE_REGISTRATION_HEADING = "상속등기";
export const INHERITANCE_REGISTRATION_DESCRIPTION =
  "피상속인 명의의 부동산을 상속인 명의로 정리하는 절차입니다. 분할 방식에 따라 등기의 종류가 구분됩니다.";

export const INHERITANCE_REGISTRATION_TYPES: InheritanceRegistrationType[] = [
  {
    title: "법정상속등기",
    description: "공동상속인이 법정상속분에 따라 상속받는 것으로 정리하는 상속등기입니다.",
    emphasis: "법정상속분에 따라 상속받는 것",
  },
  {
    title: "협의분할에 따른 상속등기",
    description: "공동상속인의 협의분할 내용에 따라 특정 상속인 명의로 정리하는 상속등기입니다.",
    emphasis: "협의분할 내용에 따라 특정 상속인 명의로 정리하는",
  },
];

export const INHERITANCE_REGISTRATION_NOTE =
  "등기신청 관할에는 특례가 있을 수 있으므로 반드시 부동산 소재지 관할 등기소에만 신청해야 한다고 단정하지 않고, 현재의 등기절차를 먼저 확인해야 합니다. 등기와 관련된 세금·공과금은 사건마다 다르므로 이 페이지에서는 구체적인 금액이나 세율을 안내하지 않습니다.";

export const INHERITANCE_OVERSEAS_HEIR_HEADING = "해외 상속인";
export const INHERITANCE_OVERSEAS_HEIR_INTRO =
  "공동상속인 중 아래와 같은 사정이 있는 경우에는 국내 상속인만 있는 경우와 확인할 자료가 달라집니다.";

export const INHERITANCE_OVERSEAS_HEIR_SITUATIONS: string[] = [
  "외국 시민권을 취득한 상속인이 있는 경우",
  "재외국민으로 등록된 상속인이 있는 경우",
  "해외에 거주하는 공동상속인이 있는 경우",
  "국내 인감증명 발급이 어려운 상속인이 있는 경우",
  "해외에서 위임장이나 분할 관련 서류를 작성해야 하는 경우",
];

export const INHERITANCE_OVERSEAS_HEIR_WARNING = {
  title: "해외에서 먼저 임의로 공증받지 마세요",
  content:
    "공증, 영사확인, 아포스티유가 필요한지 여부는 국가, 국적, 문서의 종류, 인감 사용 가능 여부, 재외공관 인증 절차 등에 따라 달라집니다. 해외 서류라고 해서 무조건 아포스티유가 필요한 것은 아니므로, 국내 등기절차에서 요구하는 형식을 먼저 확인한 뒤 서류를 준비해야 합니다.",
};
// inheritance-page-refine에서, 해외 상속인 관련 절차의 대표적인
// 오해("해외 서류=무조건 아포스티유 필요")를 바로잡는 부분을
// 강조합니다. 문구는 변경하지 않습니다.
export const INHERITANCE_OVERSEAS_HEIR_WARNING_EMPHASIS =
  "해외 서류라고 해서 무조건 아포스티유가 필요한 것은 아니므로";

export const INHERITANCE_WILL_HEADING = "유언·유증";
export const INHERITANCE_WILL_PARAGRAPHS: string[] = [
  "유언장이 발견되었다면 먼저 자필증서, 공정증서 등 어떤 방식으로 작성되었는지 확인해야 합니다. 방식에 따라 이후 확인·보존 절차가 다릅니다.",
  "유언집행자가 지정되어 있는지도 함께 확인해야 하며, 유증의 내용에 따라 부동산등기 등 후속절차를 검토할 수 있습니다.",
];
// inheritance-page-refine에서, 유언장 발견 시 가장 먼저 확인할 사항을
// 강조합니다. 문단 배열 중 이 문자열을 포함하는 문단(현재 0번째)에서만
// 부분 강조되며, 문구는 변경하지 않습니다.
export const INHERITANCE_WILL_PARAGRAPH_EMPHASIS = "어떤 방식으로 작성되었는지";

export const INHERITANCE_WILL_WARNING = {
  title: "유언검인이 유언의 유효성을 확정하는 것은 아닙니다",
  content:
    "유언검인은 유언서의 상태와 방식을 확인하고 보존하기 위한 절차일 뿐이며, 유언검인을 받았다고 해서 유언의 실체적 유효성이 확정되는 것은 아닙니다. 유언의 효력 자체에 다툼이 있는 경우에는 별개의 판단이 필요합니다.",
};
// 이 페이지에서 가장 자주 오해되는 지점("유언검인 = 유언의 실체적
// 유효성 확정")을 바로잡는 부분을 강조합니다. 문구는 변경하지 않습니다.
export const INHERITANCE_WILL_WARNING_EMPHASIS = "유언의 실체적 유효성이 확정되는 것은 아닙니다";

export const INHERITANCE_LIFETIME_GIFT_HEADING = "생전 증여";
export const INHERITANCE_LIFETIME_GIFT_PARAGRAPH =
  "생전 증여와 사후 상속은 법률효과와 절차가 다릅니다. 증여등기가 가능한 경우에도 세금 문제는 별도로 검토해야 하며, 가족 간 증여라면 지분관계, 기존 담보권, 세금을 함께 확인해야 합니다.";

export const INHERITANCE_LIFETIME_GIFT_NOTE =
  "세무상 중요한 사건은 증여등기를 하기 전에 세무전문가의 확인이 필요할 수 있습니다.";

export type InheritanceDutyColumn = {
  title: string;
  items: string[];
};

// 상속등기를 진행할 때 실제로 함께 처리하는 절차(취득세 신고·납부 관련
// 절차, 국민주택채권 매입, 소유권이전등기 신청)와, 세무사 등 세무전문가
// 확인이 필요한 사항(상속세 신고·납부, 사전증여재산 합산, 재산평가·공제
// 판단, 양도소득세 등 후속 세금 문제)을 구분합니다. "취득세=법무사가
// 전부 처리 / 그 외 세금=전부 세무사에게"처럼 단정하지 않고, 등기절차와
// 함께 진행할 수 있는 부분과 세무전문가 확인이 필요한 부분을 나란히
// 안내하는 방식으로 구성했습니다.
export const INHERITANCE_DUTY_SPLIT_HEADING = "등기절차와 세무업무 구분";
export const INHERITANCE_DUTY_SPLIT_COLUMNS: InheritanceDutyColumn[] = [
  {
    title: "상속등기와 함께 진행하는 절차",
    items: ["취득세 신고·납부 관련 절차", "국민주택채권 매입", "상속을 원인으로 한 소유권이전등기 신청"],
  },
  {
    title: "세무사 등 세무전문가에게 확인할 사항",
    items: [
      "상속세 신고·납부",
      "사전증여재산 합산 여부",
      "상속재산 평가",
      "상속공제 적용 판단",
      "양도소득세 등 후속 세금 문제",
      "그 밖의 구체적인 세액 계산·세무 판단",
    ],
  },
];

export const INHERITANCE_DUTY_SPLIT_NOTE =
  "상속등기를 진행하는 경우 취득세 신고·납부 관련 절차, 국민주택채권 매입 및 소유권이전등기 신청은 등기절차와 함께 진행할 수 있습니다. 상속세 신고·계산, 사전증여재산 검토, 재산평가·공제 및 양도소득세 등 구체적인 세무 판단은 세무사 등 세무전문가에게 확인하는 것이 필요합니다.";

export type InheritanceJurisdictionItem = {
  procedure: string;
  description: string;
};

export const INHERITANCE_JURISDICTION_HEADING = "어디에 신청하나요?";
export const INHERITANCE_JURISDICTION_ITEMS: InheritanceJurisdictionItem[] = [
  { procedure: "상속포기·한정승인", description: "가정법원의 관할 절차를 확인합니다." },
  { procedure: "상속재산분할", description: "협의가 이루어지지 않는 경우 가정법원의 조정·심판 절차를 확인합니다." },
  { procedure: "상속등기", description: "현재의 등기절차를 확인합니다." },
  { procedure: "유언검인", description: "가정법원의 검인 절차를 확인합니다." },
];

export const INHERITANCE_JURISDICTION_NOTE =
  "관할은 피상속인의 마지막 주소, 사건의 종류, 현재의 등기신청 특례 등에 따라 달라질 수 있으므로 한 문장으로 일률적으로 단정하지 않고 사건에 맞게 확인해야 합니다.";

export type InheritanceDocumentGroup = {
  id: string;
  title: string;
  items: string[];
  note?: string;
};

export const INHERITANCE_DOCUMENTS_HEADING = "준비서류 체크리스트";
export const INHERITANCE_DOCUMENTS_DESCRIPTION =
  "아래 서류가 모든 사건에 동일하게 필요한 것은 아닙니다. 현재 상황에 해당하는 항목부터 확인해 보세요.";

// 아래 7묶음은 "상속 공통 필수서류" 하나로 합치지 않고, 상속포기·
// 한정승인·법정상속등기·협의분할 상속등기·해외 상속인·유언을 각각
// 별개 절차로 분리합니다(같은 "상속"이라도 필요서류가 서로 다름).
// 서류명은 「상속등기에 관한 업무처리지침」(등기예규 제1864호,
// 2025.12.29. 개정, 2026.1.1. 시행) 제10조(1순위)·제11조(2순위 이하)·
// 제14조(동일성 확인) 및 2025.11.14. 의정부지방법원 공식 FAQ(상속포기·
// 한정승인 첨부서류) 기준입니다.
//
// - "법정상속등기"와 "협의분할 상속등기"를 분리한 이유: 법정상속등기는
//   상속재산분할협의서·인감증명서가 필요하지 않으므로, 두 절차를 하나로
//   묶으면 법정상속등기에도 협의서·인감이 필요한 것처럼 보일 위험이
//   있습니다.
// - 상속인의 기본증명서는 예규상 원칙적인 공통 첨부서류가 아니므로(동일
//   인 확인이 어려운 경우 등에 추가 요구될 수 있는 구조) 기본서류
//   목록에 넣지 않았습니다.
// - 피상속인의 말소자 주민등록 등·초본은 법정상속등기의 일반 공통서류가
//   아니라, 등기명의인과 피상속인의 동일성 확인이 필요한 경우에
//   예외적으로 제출하는 서류이므로 그 조건을 그대로 문구에 남겼습니다
//   ("과거 모든 주소 포함"을 전국 공통 필수조건으로 새로 만들지
//   않았습니다).
// - 해외 상속인 관련 자료는 국적·거주상태·본국 제도에 따라 전혀 달라져
//   하나의 고정 목록으로 만들 수 없으므로 "해당 시 확인할 자료의 예"
//   구조를 그대로 유지했습니다. "국내 인감 발급 가능 여부"는 서류가
//   아니므로 별도 "상담할 때 확인할 내용" 묶음으로 옮겼습니다.
// - 유언·유증은 유언검인·유언집행자 선임·유언에 따른 부동산등기가 서로
//   다른 절차라는 점만 이번 라운드에서 반영하고, "유언자 가족관계 관련
//   자료"·"유언집행자 관련 자료" 같은 미확정 서류명은 새로 만들지
//   않았습니다.
export const INHERITANCE_DOCUMENT_GROUPS: InheritanceDocumentGroup[] = [
  {
    id: "renunciation",
    title: "상속포기",
    items: [
      "청구인 가족관계증명서(상세)",
      "청구인 주민등록표등본 또는 주민등록표초본",
      "청구인 인감증명서 또는 본인서명사실확인서",
      "피상속인 기본증명서(상세)",
      "피상속인 가족관계증명서(상세)",
      "피상속인의 말소된 주민등록등본 또는 초본",
      "피상속인이 2008.1.1. 이전 사망한 경우 제적등본",
      "가족관계증명서(상세)로 상속관계가 확인되지 않는 경우 제적등본",
    ],
  },
  {
    id: "limited-approval",
    title: "한정승인",
    items: [
      "청구인 가족관계증명서(상세)",
      "청구인 주민등록등본 또는 초본",
      "청구인 인감증명서 또는 본인서명사실확인서",
      "피상속인 기본증명서(상세)",
      "피상속인 가족관계증명서(상세)",
      "피상속인의 말소된 주민등록등본 또는 초본",
      "피상속인이 2008.1.1. 이전 사망한 경우 제적등본",
      "상속재산목록",
    ],
    note: "상속재산목록 작성에 필요한 자료 예: 부동산 등기사항증명서, 예금잔액을 확인할 수 있는 자료, 보험·증권 등 금융재산 확인자료, 채무잔액 또는 채권자 확인자료 등입니다.",
  },
  {
    id: "statutory-registration",
    title: "법정상속등기",
    items: [
      "피상속인 기본증명서(상세)",
      "피상속인 가족관계증명서(상세)",
      "피상속인 친양자입양관계증명서(상세)",
      "피상속인의 구 호적법상 제적등본(전적 전 제적등본 포함)",
      "2순위 이하 상속인인 경우 피상속인 입양관계증명서(상세)",
      "등기권리자가 되는 상속인의 주민등록표등본 또는 주민등록표초본",
      "등기명의인과 피상속인의 동일성 확인이 필요한 경우 피상속인의 주민등록표 등·초본(말소자 등·초본)",
      "상속관계 확인을 위해 추가 제적등본 등이 필요한 경우 해당 자료",
    ],
    note: "위 서류는 1순위 상속인(배우자·자녀) 기준이며, 2순위 이하 상속인이 있는 경우 등 상속관계에 따라 추가로 확인할 서류가 있을 수 있습니다.",
  },
  {
    id: "division-registration",
    title: "협의분할 상속등기",
    items: [
      "법정상속등기의 상속관계 확인서류(피상속인 기본증명서(상세)·가족관계증명서(상세)·친양자입양관계증명서(상세)·제적등본 등)",
      "상속재산분할협의서",
      "상속인 전원의 인감 날인",
      "상속인 전원의 인감증명서",
      "협의서가 여러 장인 경우 상속인 전원의 간인",
      "미성년자·피성년후견인 등이 상속인인 경우 특별대리인 선임을 증명하는 서면 및 특별대리인의 인감증명서",
      "분할협의 권한을 대리인에게 위임한 경우 상속재산분할협의 위임장 등 위임 관련 자료",
    ],
    note: "협의서가 공정증서이거나 상속인의 날인에 대해 공증인의 인증을 받은 경우에는 인감증명서를 별도로 첨부하지 않아도 될 수 있습니다.",
  },
  {
    id: "overseas-heir",
    title: "해외 거주·재외국민·외국인",
    items: [
      "여권 또는 신분 확인자료",
      "국적 확인자료",
      "국내외 주소를 확인할 수 있는 자료",
      "서명·날인 또는 인감 관련 인증자료",
      "외국 공문서인 경우 아포스티유 또는 영사확인 필요 여부",
      "외국어 서류의 번역문",
      "필요한 경우 부동산등기용등록번호 관련 자료",
    ],
    note: "국적·거주상태·국내 주민등록 여부·본국 제도에 따라 실제 필요한 자료가 달라지며, 위 항목은 해당하는 경우에 확인하는 자료의 예시입니다.",
  },
  {
    id: "will",
    title: "유언·유증",
    items: ["유언서 원본"],
    note: "유언검인, 유언집행자 선임, 유언에 따른 부동산등기는 서로 다른 절차이며 필요한 서류도 다를 수 있습니다. 구체적인 서류는 진행하는 절차에 맞게 확인해야 합니다.",
  },
  {
    id: "consultation",
    title: "상담할 때 확인할 내용",
    items: [
      "현재 국적",
      "현재 거주국",
      "국내 주민등록 또는 국내거소 여부",
      "국내 인감증명 발급 가능 여부",
      "해외에서 직접 작성해야 할 문서가 있는지",
    ],
  },
];

export const INHERITANCE_DOCUMENTS_NOTE =
  "실제 제출서류는 관할법원의 안내와 상속관계에 따라 달라질 수 있습니다.";

// 인쇄 시 체크리스트와 함께 보여줄 핵심 경고 3가지입니다. 새 문구를 만들지
// 않고 위에서 이미 확정한 문구(3개월 기간·해외 공증·유언검인)를 그대로
// 재사용합니다.
export const INHERITANCE_PRINT_KEY_WARNINGS = [
  INHERITANCE_THREE_MONTH_WARNING,
  INHERITANCE_OVERSEAS_HEIR_WARNING,
  INHERITANCE_WILL_WARNING,
];

export const INHERITANCE_DOCUMENT_CAUTION_HEADING = "서류 발급 시 주의사항";
export const INHERITANCE_DOCUMENT_CAUTIONS: string[] = [
  "이 체크리스트에서 '(상세)'로 표시한 기본증명서·가족관계증명서·친양자입양관계증명서 등은 상세증명서 기준으로 준비합니다. 그 밖의 증명서는 상속관계와 진행하는 절차에 따라 필요한 종류가 달라질 수 있으므로 먼저 확인해야 합니다.",
  "과거 호적관계 확인이 필요한 경우에는 제적등본이 필요할 수 있습니다.",
  "주민등록초본은 주소변동 이력 포함 여부 등 발급 옵션이 문제될 수 있으므로 요구되는 기재범위를 확인해야 합니다.",
  "서류별 유효기간은 사건과 제출기관에 따라 다를 수 있어 일률적으로 정해 안내하지 않습니다.",
  "해외에서 발급·작성하는 서류는 형식을 먼저 확인한 뒤 공증 등 절차를 진행하는 것이 안전합니다.",
];

export const INHERITANCE_FAQ_HEADING = "상속 자주 묻는 질문";

export const INHERITANCE_FAQ_ITEMS: FaqItem[] = [
  {
    question: "부모님이 돌아가신 날부터 무조건 3개월인가요?",
    answer: [
      "아닙니다. 상속포기와 한정승인의 법정기간은 사망일이 아니라 상속개시가 있음을 안 날부터 3개월입니다.",
      "통상 사망 사실과 자신이 상속인이 되었다는 사실을 모두 안 때를 기준으로 하며, 구체적인 기산일은 사건마다 확인이 필요합니다.",
    ],
  },
  {
    question: "재산보다 빚이 많은지 모르면 어떻게 하나요?",
    answer: [
      "안심상속 원스톱서비스로 재산내역 조회를 신청하는 방법이 있습니다.",
      "다만 조회 결과가 나오는 기간과 상속포기·한정승인의 법정기간은 별개로 진행되므로, 조회 결과만 기다리다가 법정기간을 놓치지 않도록 함께 확인해야 합니다.",
    ],
  },
  {
    question: "형제 중 한 명만 상속포기하면 끝나나요?",
    answer: [
      "그렇지 않을 수 있습니다. 한 상속인이 상속을 포기하면 다른 공동상속인이나 다음 순위 상속인의 상속관계가 달라질 수 있습니다.",
      "따라서 한 사람의 포기로 문제가 끝나는 것이 아니라 가족 전체의 상속관계를 함께 확인해야 하는 경우가 많습니다.",
    ],
  },
  {
    question: "한정승인을 법원에서 수리받으면 끝난 건가요?",
    answer: [
      "법원의 심판만으로 관련 절차가 모두 끝나는 것은 아닙니다.",
      "한정승인 이후에도 채권자에 대한 공고·최고와 상속재산의 청산 등 확인해야 할 후속절차가 남아 있을 수 있습니다.",
    ],
  },
  {
    question: "상속인 중 한 명이 해외에 있어도 협의분할이 가능한가요?",
    answer: [
      "가능할 수 있습니다. 다만 해외 거주 상속인의 국적, 인감 사용 가능 여부, 국내 등기절차가 요구하는 서류 형식에 따라 준비할 자료가 달라집니다.",
      "해외에서 먼저 임의로 공증을 받기보다 국내에서 요구하는 형식을 먼저 확인하는 것이 안전합니다.",
    ],
  },
  {
    question: "상속등기를 먼저 한 뒤 다시 재산분할을 바꿀 수 있나요?",
    answer: [
      "바꾸는 것 자체가 불가능한 것은 아니지만, 이미 마친 상속등기를 재분할 내용에 맞게 바꾸려면 소유권경정등기, 등기상 이해관계인, 세금 문제 등이 새로 생길 수 있습니다.",
      "따라서 등기를 하기 전에 분할 내용을 충분히 확인하는 것이 좋습니다.",
    ],
  },
  {
    question: "유언장이 있으면 무조건 그 내용대로 처리되나요?",
    answer: [
      "유언장이 있다면 먼저 작성 방식과 유언집행자 지정 여부를 확인해야 합니다.",
      "유언의 효력 자체에 다툼이 있는 경우에는 별도의 판단이 필요할 수 있습니다.",
    ],
  },
  {
    question: "유언검인을 받으면 유언이 유효하다는 뜻인가요?",
    answer: [
      "아닙니다. 유언검인은 유언서의 상태와 방식을 확인하고 보존하는 절차일 뿐입니다.",
      "유언검인을 받았다고 해서 유언의 실체적 유효성이 확정되는 것은 아니며, 효력에 다툼이 있으면 별개로 판단해야 합니다.",
    ],
  },
  {
    question: "상속재산분할협의에서 한 사람이 부동산을 받으면 채무도 그 사람이 모두 부담하나요?",
    answer: [
      "당연히 그렇게 되는 것은 아닙니다.",
      "상속재산을 특정 상속인 한 명이 받기로 협의했다고 해서 피상속인의 채무까지 그 한 사람만 부담하게 되는 것은 아니므로, 채무 부분은 별도로 확인해야 합니다.",
    ],
  },
  {
    question: "상속세 신고와 상속등기는 같은 업무인가요?",
    answer: [
      "다른 업무영역입니다. 상속등기는 등기·법원 절차이고, 상속세 신고는 세무 영역입니다.",
      "두 절차는 서로 연결되어 있지만, 세액 계산이나 절세 판단이 중요한 사건은 세무전문가의 확인이 필요할 수 있습니다.",
    ],
  },
];

export const INHERITANCE_CTA = {
  heading: "지금 상황에 맞는 절차부터 확인해 보세요",
  description:
    "상속사건은 상속인의 범위, 피상속인의 재산·채무, 이미 이루어진 처분행위, 해외 상속인 또는 유언 존재 여부 등에 따라 필요한 절차가 달라질 수 있습니다. 관련 서류를 먼저 확인하면 어떤 절차부터 진행해야 하는지 보다 정확하게 정리할 수 있습니다.",
  buttonLabel: "상담 신청",
};
