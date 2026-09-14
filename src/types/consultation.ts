// 상담 신청 폼에서 사용하는 타입, 선택지, 초기값을 정의합니다.
// 이 데이터는 이 폼의 React state에만 존재하며, 서버로 전송하거나
// 저장하지 않습니다.

export type PreferredTime = "morning" | "afternoon" | "evening" | "any";

export const PREFERRED_TIME_OPTIONS: { value: PreferredTime; label: string }[] = [
  { value: "morning", label: "오전" },
  { value: "afternoon", label: "오후" },
  { value: "evening", label: "저녁" },
  { value: "any", label: "시간 무관" },
];

// full 모드의 6개 업무영역(법률정보 제외 — 법률정보는 상담 업무분야가
// 아니므로 문의 유형에 포함하지 않습니다)을 반영합니다. 새로 추가한 4개
// value는 HEADER_NAV_CATEGORIES(constants.ts)에서 이미 쓰고 있는 카테고리
// id("civil-enforcement"/"family"/"real-estate-registration"/
// "corporate-registration")를 그대로 재사용해 프로젝트 전체의 명명
// 규칙과 맞췄습니다. 기존 "recovery"/"bankruptcy"/"other"는 자가진단
// prefill 등 기존 코드와의 호환을 위해 값을 바꾸지 않았습니다.
export type InquiryType =
  | "recovery"
  | "bankruptcy"
  | "civil-enforcement"
  | "family"
  | "real-estate-registration"
  | "corporate-registration"
  | "other";

export const INQUIRY_TYPE_OPTIONS: { value: InquiryType; label: string }[] = [
  { value: "recovery", label: "개인회생" },
  { value: "bankruptcy", label: "개인파산" },
  { value: "civil-enforcement", label: "민사·집행" },
  { value: "family", label: "가사·상속" },
  { value: "real-estate-registration", label: "부동산등기" },
  { value: "corporate-registration", label: "법인등기" },
  { value: "other", label: "기타" },
];

const INQUIRY_TYPE_VALUES = new Set<string>(INQUIRY_TYPE_OPTIONS.map((option) => option.value));

// 업무페이지 CTA에서 "/?inquiry=<값>#consultation" 형태로 전달된 문의
// 유형을 상담 폼 초기값으로 반영하기 전에 거치는 유일한 검증 지점입니다.
// INQUIRY_TYPE_OPTIONS에 실제로 존재하는 값인지만 확인하므로, 임의의
// 문자열이나 목록에 없는 값은 전부 걸러지고 안전하게 무시됩니다.
export function isInquiryType(value: string | null): value is InquiryType {
  return value !== null && INQUIRY_TYPE_VALUES.has(value);
}

export interface ConsultationFormData {
  name: string;
  // 숫자만 저장하고, 화면에 표시할 때만 하이픈을 붙입니다.
  phone: string;
  preferredTime: PreferredTime | null;
  inquiryType: InquiryType | null;
  message: string;
  agreedToPrivacyPolicy: boolean;
}

export const INITIAL_CONSULTATION_FORM_DATA: ConsultationFormData = {
  name: "",
  phone: "",
  preferredTime: null,
  inquiryType: null,
  message: "",
  agreedToPrivacyPolicy: false,
};
