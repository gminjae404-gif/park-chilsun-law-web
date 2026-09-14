"use client";

import Link from "next/link";
import { formatAmountInput } from "@/lib/format";
import {
  DELINQUENCY_STATUS_OPTIONS,
  EMPLOYMENT_TYPE_OPTIONS,
  INCOME_DURATION_OPTIONS,
  YES_NO_OPTIONS,
  getOptionLabel,
  type SelfCheckData,
} from "@/types/selfCheck";

type SelfCheckResultProps = {
  data: SelfCheckData;
  onReset: () => void;
  // 자가진단 결과에서 상담 섹션으로 이동할 때 호출됩니다.
  // 자가진단의 세부 입력값이나 금액은 함께 전달하지 않습니다.
  onRequestConsultation?: () => void;
};

function displayAmount(value: string): string {
  return value ? `${formatAmountInput(value)}원` : "-";
}

// 사용자가 입력한 내용에 따라 상담 시 확인이 필요한 항목을 안내합니다.
// 이는 법률 판단이 아니라, 상담 시 준비하면 좋은 자료를 알려주는 용도입니다.
//
// home-shared-notices-refine에서, 이 heading 있는 안내 박스의 4면 border를
// 제거하고 다른 페이지와 동일하게 heading 왼쪽 짧은 세로 accent(h-5 w-1.5)로
// 정리합니다. 문구·조건부 노출 조건·자가진단 로직은 변경하지 않았습니다.
function getConfirmationNotices(data: SelfCheckData): string[] {
  const notices: string[] = [];
  if (data.assets.hasRealEstate === "yes") {
    notices.push("부동산의 시가 및 담보채무 확인이 필요합니다.");
  }
  if (data.assets.hasVehicle === "yes") {
    notices.push("차량의 현재 가액 및 담보 설정 여부 확인이 필요합니다.");
  }
  if (data.debt.hasSecuredDebt === "yes") {
    notices.push("담보권 및 담보목적물 가액 확인이 필요합니다.");
  }
  if (data.debt.hasSeizure === "yes") {
    notices.push("현재 진행 중인 압류·집행 내용 확인이 필요합니다.");
  }
  if (data.income.employmentType === "no_income") {
    notices.push("현재 소득 상황과 향후 소득 발생 가능성에 대한 추가 확인이 필요합니다.");
  }
  return notices;
}

export default function SelfCheckResult({ data, onReset, onRequestConsultation }: SelfCheckResultProps) {
  const notices = getConfirmationNotices(data);
  const dependentLabel =
    data.assets.dependentCount === null ? "-" : `${data.assets.dependentCount}명`;

  return (
    <div className="flex flex-col gap-8">
      <h4 className="text-base font-semibold text-gray-900 sm:text-lg">
        입력하신 내용을 바탕으로 상담 전 확인사항을 정리했습니다.
      </h4>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-brand">소득</p>
          <dl className="mt-3 flex flex-col gap-2 text-sm text-gray-700">
            <div className="flex justify-between gap-2">
              <dt className="text-gray-500">직업 형태</dt>
              <dd>{getOptionLabel(EMPLOYMENT_TYPE_OPTIONS, data.income.employmentType)}</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-gray-500">월평균 소득</dt>
              <dd>{displayAmount(data.income.monthlyIncome)}</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-gray-500">소득활동 기간</dt>
              <dd>{getOptionLabel(INCOME_DURATION_OPTIONS, data.income.incomeDuration)}</dd>
            </div>
          </dl>
        </div>

        <div>
          <p className="text-sm font-semibold text-brand">채무</p>
          <dl className="mt-3 flex flex-col gap-2 text-sm text-gray-700">
            <div className="flex justify-between gap-2">
              <dt className="text-gray-500">무담보채무</dt>
              <dd>{displayAmount(data.debt.unsecuredDebt)}</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-gray-500">담보채무</dt>
              <dd>
                {data.debt.hasSecuredDebt === "yes"
                  ? displayAmount(data.debt.securedDebtAmount)
                  : getOptionLabel(YES_NO_OPTIONS, data.debt.hasSecuredDebt)}
              </dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-gray-500">현재 연체</dt>
              <dd>{getOptionLabel(DELINQUENCY_STATUS_OPTIONS, data.debt.delinquencyStatus)}</dd>
            </div>
          </dl>
        </div>

        <div>
          <p className="text-sm font-semibold text-brand">재산 및 생활관계</p>
          <dl className="mt-3 flex flex-col gap-2 text-sm text-gray-700">
            <div className="flex justify-between gap-2">
              <dt className="text-gray-500">부동산</dt>
              <dd>{getOptionLabel(YES_NO_OPTIONS, data.assets.hasRealEstate)}</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-gray-500">자동차</dt>
              <dd>{getOptionLabel(YES_NO_OPTIONS, data.assets.hasVehicle)}</dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-gray-500">부양가족</dt>
              <dd>{dependentLabel}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 text-sm leading-6 text-gray-600">
        <p>
          개인회생 여부와 변제계획은 채무액뿐 아니라 소득의 계속성, 재산가액, 부양가족, 채권
          내용 등 여러 자료를 함께 확인하여 검토할 사항입니다.
        </p>
        <p className="mt-2">
          자가진단 결과만으로 신청 가능 여부나 예상 변제금이 확정되는 것은 아닙니다.
        </p>
      </div>

      {notices.length > 0 && (
        <div className="rounded-sm bg-slate-50 p-5">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-gray-900">
            <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>상담 시 확인이 필요한 사항</span>
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-600">
            {notices.map((notice) => (
              <li key={notice} className="flex gap-2">
                <span aria-hidden="true" className="text-brand">
                  ·
                </span>
                {notice}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="#consultation"
          onClick={onRequestConsultation}
          className="inline-flex items-center justify-center rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-brand-dark"
        >
          상담 신청하기
        </Link>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center rounded-sm border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:bg-slate-50"
        >
          다시 입력하기
        </button>
      </div>
    </div>
  );
}
