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

// 박칠선 법무사사무소가 실제로 다루는 5개 업무영역입니다(법률정보는
// 상담 업무분야가 아니므로 포함하지 않습니다). 개인회생·개인파산은 이
// 사무소의 취급 업무가 아니므로 문의 유형에서 제외합니다. value는
// HEADER_NAV_CATEGORIES/SERVICE_CATEGORIES(constants.ts)와 동일한 규칙의
// id를 사용합니다. 기존에 하나로 묶여 있던 "민사·집행"은 민사소송/
// 강제집행을 별도 문의 유형으로 구분해 달라는 요청에 따라 "civil"/
// "enforcement"로 분리했습니다.
export type InquiryType =
  | "real-estate-registration"
  | "corporate-registration"
  | "civil"
  | "enforcement"
  | "family";

export const INQUIRY_TYPE_OPTIONS: { value: InquiryType; label: string }[] = [
  { value: "real-estate-registration", label: "부동산등기" },
  { value: "corporate-registration", label: "법인등기" },
  { value: "civil", label: "민사" },
  { value: "enforcement", label: "강제집행" },
  { value: "family", label: "가사·상속" },
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
