"use client";

import ChoiceGroup from "./ChoiceGroup";
import { formatAmountInput, parseAmountInput } from "@/lib/format";
import {
  EMPLOYMENT_TYPE_OPTIONS,
  INCOME_DURATION_OPTIONS,
  type IncomeStepData,
} from "@/types/selfCheck";

type StepIncomeProps = {
  data: IncomeStepData;
  errors: Record<string, string>;
  onChange: <K extends keyof IncomeStepData>(field: K, value: IncomeStepData[K]) => void;
};

export default function StepIncome({ data, errors, onChange }: StepIncomeProps) {
  const isNoIncome = data.employmentType === "no_income";

  return (
    <div className="flex flex-col gap-8">
      <ChoiceGroup
        legend="현재 직업 형태"
        name="employmentType"
        options={EMPLOYMENT_TYPE_OPTIONS}
        value={data.employmentType}
        onChange={(value) => onChange("employmentType", value)}
        error={errors.employmentType}
        columns={3}
      />

      {!isNoIncome && (
        <div>
          <label htmlFor="monthlyIncome" className="text-sm font-semibold text-gray-900">
            월평균 실수령 소득 (원)
          </label>
          <input
            id="monthlyIncome"
            type="text"
            inputMode="numeric"
            value={formatAmountInput(data.monthlyIncome)}
            onChange={(event) => onChange("monthlyIncome", parseAmountInput(event.target.value))}
            placeholder="예: 2,500,000"
            aria-invalid={Boolean(errors.monthlyIncome)}
            aria-describedby={errors.monthlyIncome ? "monthlyIncome-error" : undefined}
            className={`mt-2 w-full rounded-sm border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand ${
              errors.monthlyIncome ? "border-red-500" : "border-gray-300 focus:border-brand"
            }`}
          />
          {errors.monthlyIncome && (
            <p id="monthlyIncome-error" className="mt-2 text-sm text-red-600">
              {errors.monthlyIncome}
            </p>
          )}
        </div>
      )}

      {!isNoIncome && (
        <ChoiceGroup
          legend="현재 소득활동 기간"
          name="incomeDuration"
          options={INCOME_DURATION_OPTIONS}
          value={data.incomeDuration}
          onChange={(value) => onChange("incomeDuration", value)}
          error={errors.incomeDuration}
        />
      )}
    </div>
  );
}
