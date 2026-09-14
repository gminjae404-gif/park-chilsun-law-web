"use client";

import ChoiceGroup from "./ChoiceGroup";
import {
  DEPENDENT_COUNT_OPTIONS,
  YES_NO_OPTIONS,
  type AssetsStepData,
} from "@/types/selfCheck";

type StepAssetsProps = {
  data: AssetsStepData;
  errors: Record<string, string>;
  onChange: <K extends keyof AssetsStepData>(field: K, value: AssetsStepData[K]) => void;
};

export default function StepAssets({ data, errors, onChange }: StepAssetsProps) {
  return (
    <div className="flex flex-col gap-8">
      <ChoiceGroup
        legend="부동산 보유 여부"
        name="hasRealEstate"
        options={YES_NO_OPTIONS}
        value={data.hasRealEstate}
        onChange={(value) => onChange("hasRealEstate", value)}
        error={errors.hasRealEstate}
      />

      <ChoiceGroup
        legend="자동차 보유 여부"
        name="hasVehicle"
        options={YES_NO_OPTIONS}
        value={data.hasVehicle}
        onChange={(value) => onChange("hasVehicle", value)}
        error={errors.hasVehicle}
      />

      <ChoiceGroup
        legend="예금·보험·주식 등 금융재산 여부"
        name="hasFinancialAssets"
        options={YES_NO_OPTIONS}
        value={data.hasFinancialAssets}
        onChange={(value) => onChange("hasFinancialAssets", value)}
        error={errors.hasFinancialAssets}
      />

      <div>
        <label htmlFor="dependentCount" className="text-sm font-semibold text-gray-900">
          부양가족 수
        </label>
        <select
          id="dependentCount"
          value={data.dependentCount === null ? "" : data.dependentCount}
          onChange={(event) => onChange("dependentCount", Number(event.target.value))}
          aria-invalid={Boolean(errors.dependentCount)}
          aria-describedby={errors.dependentCount ? "dependentCount-error" : undefined}
          className={`mt-2 w-full rounded-sm border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand ${
            errors.dependentCount ? "border-red-500" : "border-gray-300 focus:border-brand"
          }`}
        >
          <option value="" disabled>
            선택해 주세요
          </option>
          {DEPENDENT_COUNT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.dependentCount && (
          <p id="dependentCount-error" className="mt-2 text-sm text-red-600">
            {errors.dependentCount}
          </p>
        )}
      </div>

      <ChoiceGroup
        legend="배우자 여부"
        name="hasSpouse"
        options={YES_NO_OPTIONS}
        value={data.hasSpouse}
        onChange={(value) => onChange("hasSpouse", value)}
        error={errors.hasSpouse}
      />
    </div>
  );
}
