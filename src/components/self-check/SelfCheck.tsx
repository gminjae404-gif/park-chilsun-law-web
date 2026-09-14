"use client";

import { useEffect, useRef, useState } from "react";
import StepIncome from "./StepIncome";
import StepDebt from "./StepDebt";
import StepAssets from "./StepAssets";
import SelfCheckResult from "./SelfCheckResult";
import { SITE_MODE } from "@/lib/constants";
import {
  INITIAL_SELF_CHECK_DATA,
  STEP_LABELS,
  type AssetsStepData,
  type DebtStepData,
  type IncomeStepData,
  type SelfCheckData,
  type StepId,
} from "@/types/selfCheck";

// full 모드 홈에서는 이 섹션 바로 위 RecoveryBankruptcyHighlight도
// bg-white라 경계가 흐려집니다. border-t를 추가해 구간을 나누되, 배경색은
// bg-white 그대로 두고 아래 FAQ(bg-slate-50)와의 기존 경계(border-b)도
// 그대로 유지합니다. recovery 모드 홈에서는 SelfCheck 바로 위 섹션이
// full 모드와 다르므로 이 조정을 적용하지 않아 기존 모습이 완전히
// 그대로 유지됩니다(className이 기존 문자열과 동일).
const SECTION_CLASS_NAME =
  SITE_MODE === "full"
    ? "scroll-mt-20 border-t border-b border-gray-200 bg-white"
    : "scroll-mt-20 border-b border-gray-200 bg-white";

function validateIncome(data: IncomeStepData): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!data.employmentType) {
    errors.employmentType = "현재 직업 형태를 선택해 주세요.";
    return errors;
  }
  if (data.employmentType === "no_income") {
    return errors;
  }
  if (!data.monthlyIncome) errors.monthlyIncome = "월평균 실수령 소득을 입력해 주세요.";
  if (!data.incomeDuration) errors.incomeDuration = "현재 소득활동 기간을 선택해 주세요.";
  return errors;
}

function validateDebt(data: DebtStepData): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!data.unsecuredDebt) errors.unsecuredDebt = "총 무담보채무를 입력해 주세요.";
  if (!data.hasSecuredDebt) errors.hasSecuredDebt = "담보채무 존재 여부를 선택해 주세요.";
  if (data.hasSecuredDebt === "yes" && !data.securedDebtAmount) {
    errors.securedDebtAmount = "담보채무 총액을 입력해 주세요.";
  }
  if (!data.delinquencyStatus) errors.delinquencyStatus = "현재 연체 여부를 선택해 주세요.";
  if (!data.hasSeizure) errors.hasSeizure = "급여 또는 계좌 압류 여부를 선택해 주세요.";
  return errors;
}

function validateAssets(data: AssetsStepData): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!data.hasRealEstate) errors.hasRealEstate = "부동산 보유 여부를 선택해 주세요.";
  if (!data.hasVehicle) errors.hasVehicle = "자동차 보유 여부를 선택해 주세요.";
  if (!data.hasFinancialAssets) errors.hasFinancialAssets = "금융재산 보유 여부를 선택해 주세요.";
  if (data.dependentCount === null) errors.dependentCount = "부양가족 수를 선택해 주세요.";
  if (!data.hasSpouse) errors.hasSpouse = "배우자 여부를 선택해 주세요.";
  return errors;
}

type SelfCheckProps = {
  // 자가진단 결과에서 "상담 신청하기"를 눌렀을 때 호출됩니다.
  onRequestConsultation?: () => void;
};

export default function SelfCheck({ onRequestConsultation }: SelfCheckProps) {
  const [currentStep, setCurrentStep] = useState<StepId>(1);
  // 자가진단 입력값은 이 컴포넌트의 state에만 존재하며,
  // 서버나 localStorage에 저장하지 않습니다. 새로고침하면 사라집니다.
  const [data, setData] = useState<SelfCheckData>(INITIAL_SELF_CHECK_DATA);
  const [hasAttempted, setHasAttempted] = useState(false);
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  // useEffect(..., [currentStep])는 React 규칙상 최초 마운트 시에도 한 번
  // 실행되며, 개발 모드의 Strict Mode에서는 마운트 시 효과가 두 번 연달아
  // 실행됩니다. 이때 focus()를 호출하면 사용자가 아무 조작도 하지 않았는데도
  // 페이지가 자가진단 섹션으로 자동 스크롤됩니다. currentStep이 "실제로
  // 바뀌었을 때"만(이전 값과 다를 때만) 포커스를 이동하도록 이전 값을 직접
  // 비교합니다 — 마운트 시 두 번 실행되어도 currentStep 값 자체는 동일하므로
  // 두 번 다 건너뛰고, 다음/이전/다시 진단하기 등 사용자 조작으로 값이 실제
  // 바뀐 경우에만 접근성 포커스를 이동합니다.
  const previousStepRef = useRef(currentStep);

  useEffect(() => {
    if (previousStepRef.current !== currentStep) {
      stepHeadingRef.current?.focus();
    }
    previousStepRef.current = currentStep;
  }, [currentStep]);

  const updateIncome = <K extends keyof IncomeStepData>(field: K, value: IncomeStepData[K]) => {
    setData((prev) => ({ ...prev, income: { ...prev.income, [field]: value } }));
  };

  const updateDebt = <K extends keyof DebtStepData>(field: K, value: DebtStepData[K]) => {
    setData((prev) => ({ ...prev, debt: { ...prev.debt, [field]: value } }));
  };

  const updateAssets = <K extends keyof AssetsStepData>(field: K, value: AssetsStepData[K]) => {
    setData((prev) => ({ ...prev, assets: { ...prev.assets, [field]: value } }));
  };

  const currentErrors =
    currentStep === 1
      ? validateIncome(data.income)
      : currentStep === 2
        ? validateDebt(data.debt)
        : currentStep === 3
          ? validateAssets(data.assets)
          : {};

  const visibleErrors = hasAttempted ? currentErrors : {};

  const handleNext = () => {
    if (Object.keys(currentErrors).length > 0) {
      setHasAttempted(true);
      return;
    }
    setHasAttempted(false);
    setCurrentStep((step) => (step < 4 ? ((step + 1) as StepId) : step));
  };

  const handlePrev = () => {
    setHasAttempted(false);
    setCurrentStep((step) => (step > 1 ? ((step - 1) as StepId) : step));
  };

  const handleReset = () => {
    setData(INITIAL_SELF_CHECK_DATA);
    setHasAttempted(false);
    setCurrentStep(1);
  };

  const currentStepLabel = STEP_LABELS[currentStep - 1].label;

  return (
    <section id="self-check" className={SECTION_CLASS_NAME}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          개인회생 자가진단
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
          아래 항목을 입력하시면 상담 전 확인사항을 정리해 드립니다. 입력하신 내용은 저장되지
          않으며, 신청 가능 여부를 확정하는 진단이 아닙니다.
        </p>

        <div className="mt-8 max-w-2xl">
          {/* 진행 단계 표시 */}
          <ol className="flex gap-4 border-b border-gray-200 sm:gap-8">
            {STEP_LABELS.map((step) => {
              const isActive = step.id === currentStep;
              const isDone = step.id < currentStep;
              return (
                <li
                  key={step.id}
                  aria-current={isActive ? "step" : undefined}
                  className={`border-b-2 pb-3 text-xs font-semibold sm:text-sm ${
                    isActive
                      ? "border-brand text-brand"
                      : isDone
                        ? "border-gray-300 text-gray-500"
                        : "border-transparent text-gray-400"
                  }`}
                >
                  STEP {step.id}
                  <span className="ml-1 hidden sm:inline">{step.label}</span>
                </li>
              );
            })}
          </ol>

          <div className="mt-8">
            <h3
              ref={stepHeadingRef}
              tabIndex={-1}
              className="text-base font-semibold text-gray-900 outline-none sm:text-lg"
            >
              STEP {currentStep} · {currentStepLabel}
            </h3>

            <div className="mt-6">
              {currentStep === 1 && (
                <StepIncome data={data.income} errors={visibleErrors} onChange={updateIncome} />
              )}
              {currentStep === 2 && (
                <StepDebt data={data.debt} errors={visibleErrors} onChange={updateDebt} />
              )}
              {currentStep === 3 && (
                <StepAssets data={data.assets} errors={visibleErrors} onChange={updateAssets} />
              )}
              {currentStep === 4 && (
                <SelfCheckResult
                  data={data}
                  onReset={handleReset}
                  onRequestConsultation={onRequestConsultation}
                />
              )}
            </div>

            {currentStep < 4 && (
              <div className="mt-10 flex justify-between gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className="inline-flex items-center justify-center rounded-sm border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-300 disabled:hover:text-gray-800 disabled:active:bg-white"
                >
                  이전
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-brand-dark"
                >
                  {currentStep === 3 ? "결과 확인하기" : "다음"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
