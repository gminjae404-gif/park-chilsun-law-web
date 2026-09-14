"use client";

import ChoiceGroup from "./ChoiceGroup";
import { formatAmountInput, parseAmountInput } from "@/lib/format";
import {
  DELINQUENCY_STATUS_OPTIONS,
  YES_NO_OPTIONS,
  type DebtStepData,
} from "@/types/selfCheck";

type StepDebtProps = {
  data: DebtStepData;
  errors: Record<string, string>;
  onChange: <K extends keyof DebtStepData>(field: K, value: DebtStepData[K]) => void;
};

export default function StepDebt({ data, errors, onChange }: StepDebtProps) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <label htmlFor="unsecuredDebt" className="text-sm font-semibold text-gray-900">
          총 무담보채무 (원)
        </label>
        <input
          id="unsecuredDebt"
          type="text"
          inputMode="numeric"
          value={formatAmountInput(data.unsecuredDebt)}
          onChange={(event) => onChange("unsecuredDebt", parseAmountInput(event.target.value))}
          placeholder="예: 80,000,000"
          aria-invalid={Boolean(errors.unsecuredDebt)}
          aria-describedby={errors.unsecuredDebt ? "unsecuredDebt-error" : undefined}
          className={`mt-2 w-full rounded-sm border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand ${
            errors.unsecuredDebt ? "border-red-500" : "border-gray-300 focus:border-brand"
          }`}
        />
        {errors.unsecuredDebt && (
          <p id="unsecuredDebt-error" className="mt-2 text-sm text-red-600">
            {errors.unsecuredDebt}
          </p>
        )}
      </div>

      <ChoiceGroup
        legend="담보채무 존재 여부"
        name="hasSecuredDebt"
        options={YES_NO_OPTIONS}
        value={data.hasSecuredDebt}
        onChange={(value) => onChange("hasSecuredDebt", value)}
        error={errors.hasSecuredDebt}
      />

      {data.hasSecuredDebt === "yes" && (
        <div>
          <label htmlFor="securedDebtAmount" className="text-sm font-semibold text-gray-900">
            담보채무 총액 (원)
          </label>
          <input
            id="securedDebtAmount"
            type="text"
            inputMode="numeric"
            value={formatAmountInput(data.securedDebtAmount)}
            onChange={(event) =>
              onChange("securedDebtAmount", parseAmountInput(event.target.value))
            }
            placeholder="예: 150,000,000"
            aria-invalid={Boolean(errors.securedDebtAmount)}
            aria-describedby={errors.securedDebtAmount ? "securedDebtAmount-error" : undefined}
            className={`mt-2 w-full rounded-sm border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand ${
              errors.securedDebtAmount ? "border-red-500" : "border-gray-300 focus:border-brand"
            }`}
          />
          {errors.securedDebtAmount && (
            <p id="securedDebtAmount-error" className="mt-2 text-sm text-red-600">
              {errors.securedDebtAmount}
            </p>
          )}
        </div>
      )}

      <ChoiceGroup
        legend="현재 연체 여부"
        name="delinquencyStatus"
        options={DELINQUENCY_STATUS_OPTIONS}
        value={data.delinquencyStatus}
        onChange={(value) => onChange("delinquencyStatus", value)}
        error={errors.delinquencyStatus}
        columns={3}
      />

      <ChoiceGroup
        legend="급여 또는 계좌 압류 여부"
        name="hasSeizure"
        options={YES_NO_OPTIONS}
        value={data.hasSeizure}
        onChange={(value) => onChange("hasSeizure", value)}
        error={errors.hasSeizure}
      />
    </div>
  );
}
