// 금액 입력 필드에서 사용하는 숫자 포맷 유틸리티입니다.

// 입력값에서 숫자가 아닌 문자를 제거해 순수 숫자 문자열로 만듭니다.
export function parseAmountInput(inputValue: string): string {
  return inputValue.replace(/[^0-9]/g, "");
}

// 순수 숫자 문자열을 천 단위 쉼표가 포함된 문자열로 변환합니다.
export function formatAmountInput(rawDigits: string): string {
  if (!rawDigits) return "";
  return Number(rawDigits).toLocaleString("ko-KR");
}

// 휴대전화번호 입력 필드에서 사용하는 포맷 유틸리티입니다.

// 입력값에서 숫자가 아닌 문자를 제거하고 최대 11자리(휴대전화번호 길이)까지만 남깁니다.
export function parsePhoneInput(inputValue: string): string {
  return inputValue.replace(/[^0-9]/g, "").slice(0, 11);
}

// 순수 숫자 문자열을 "010-1234-5678" 형태로 변환합니다.
export function formatPhoneInput(digits: string): string {
  if (digits.length < 4) return digits;
  if (digits.length < 8) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}
