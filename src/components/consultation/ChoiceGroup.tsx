"use client";

type ChoiceOption<T extends string> = {
  value: T;
  label: string;
};

type ChoiceGroupProps<T extends string> = {
  legend: string;
  name: string;
  options: ChoiceOption<T>[];
  value: T | null;
  onChange: (value: T) => void;
  error?: string;
  columns?: 2 | 3;
};

// 라디오 버튼을 선택형 버튼 그룹처럼 보여주는 공통 컴포넌트입니다.
// 상담 신청 폼의 "상담 희망 시간"·"문의 유형" 선택에 사용합니다.
export default function ChoiceGroup<T extends string>({
  legend,
  name,
  options,
  value,
  onChange,
  error,
  columns = 2,
}: ChoiceGroupProps<T>) {
  const errorId = `${name}-error`;

  return (
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend className="text-sm font-semibold text-gray-900">{legend}</legend>
      <div
        className={`mt-3 grid gap-2 ${
          columns === 3 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"
        }`}
      >
        {options.map((option) => {
          const checked = value === option.value;
          return (
            <label
              key={option.value}
              className={`flex cursor-pointer items-center justify-center rounded-sm border px-3 py-2 text-center text-sm transition-colors focus-within:ring-2 focus-within:ring-brand focus-within:ring-offset-2 ${
                checked
                  ? "border-brand bg-brand text-white"
                  : "border-gray-300 text-gray-700 hover:border-brand"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={checked}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />
              {option.label}
            </label>
          );
        })}
      </div>
      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </fieldset>
  );
}
