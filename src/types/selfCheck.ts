// 자가진단에서 사용하는 타입, 선택지, 초기값을 정의합니다.
// 이 데이터는 상담 전 확인사항을 정리하기 위한 용도이며,
// 법률상 신청 가능 여부를 판단하는 데 사용하지 않습니다.

export type EmploymentType =
  | "employee"
  | "business_owner"
  | "freelancer"
  | "daily_worker"
  | "other"
  | "no_income";

export const EMPLOYMENT_TYPE_OPTIONS: { value: EmploymentType; label: string }[] = [
  { value: "employee", label: "직장인" },
  { value: "business_owner", label: "사업자" },
  { value: "freelancer", label: "프리랜서" },
  { value: "daily_worker", label: "일용직" },
  { value: "other", label: "기타" },
  { value: "no_income", label: "현재 소득 없음" },
];

export type IncomeDuration = "under_3m" | "3m_to_6m" | "6m_to_1y" | "over_1y";

export const INCOME_DURATION_OPTIONS: { value: IncomeDuration; label: string }[] = [
  { value: "under_3m", label: "3개월 미만" },
  { value: "3m_to_6m", label: "3개월 이상 6개월 미만" },
  { value: "6m_to_1y", label: "6개월 이상 1년 미만" },
  { value: "over_1y", label: "1년 이상" },
];

export type YesNo = "yes" | "no";

export const YES_NO_OPTIONS: { value: YesNo; label: string }[] = [
  { value: "yes", label: "있음" },
  { value: "no", label: "없음" },
];

export type DelinquencyStatus = "none" | "partial" | "ongoing";

export const DELINQUENCY_STATUS_OPTIONS: { value: DelinquencyStatus; label: string }[] = [
  { value: "none", label: "연체 없음" },
  { value: "partial", label: "일부 연체" },
  { value: "ongoing", label: "연체 중" },
];

export const DEPENDENT_COUNT_OPTIONS: { value: number; label: string }[] = [
  { value: 0, label: "0명" },
  { value: 1, label: "1명" },
  { value: 2, label: "2명" },
  { value: 3, label: "3명" },
  { value: 4, label: "4명" },
  { value: 5, label: "5명 이상" },
];

export interface IncomeStepData {
  employmentType: EmploymentType | null;
  monthlyIncome: string;
  incomeDuration: IncomeDuration | null;
}

export interface DebtStepData {
  unsecuredDebt: string;
  hasSecuredDebt: YesNo | null;
  securedDebtAmount: string;
  delinquencyStatus: DelinquencyStatus | null;
  hasSeizure: YesNo | null;
}

export interface AssetsStepData {
  hasRealEstate: YesNo | null;
  hasVehicle: YesNo | null;
  hasFinancialAssets: YesNo | null;
  dependentCount: number | null;
  hasSpouse: YesNo | null;
}

export interface SelfCheckData {
  income: IncomeStepData;
  debt: DebtStepData;
  assets: AssetsStepData;
}

export const INITIAL_SELF_CHECK_DATA: SelfCheckData = {
  income: { employmentType: null, monthlyIncome: "", incomeDuration: null },
  debt: {
    unsecuredDebt: "",
    hasSecuredDebt: null,
    securedDebtAmount: "",
    delinquencyStatus: null,
    hasSeizure: null,
  },
  assets: {
    hasRealEstate: null,
    hasVehicle: null,
    hasFinancialAssets: null,
    dependentCount: null,
    hasSpouse: null,
  },
};

export type StepId = 1 | 2 | 3 | 4;

export const STEP_LABELS: { id: StepId; label: string }[] = [
  { id: 1, label: "소득" },
  { id: 2, label: "채무" },
  { id: 3, label: "재산 및 생활관계" },
  { id: 4, label: "결과 확인" },
];

// 선택형 필드의 value에 대응하는 한글 label을 찾습니다. 일치하는 항목이 없으면 "-"를 반환합니다.
export function getOptionLabel<T extends string>(
  options: { value: T; label: string }[],
  value: T | null,
): string {
  return options.find((option) => option.value === value)?.label ?? "-";
}
