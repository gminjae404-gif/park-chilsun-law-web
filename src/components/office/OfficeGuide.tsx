import { Fragment } from "react";

// full 모드 전용, Hero 바로 다음에 오는 부드러운 안내 흐름입니다. Hero
// 다음에 곧바로 업무 카드가 등장하면 딱딱하게 느껴진다는 피드백에 따라,
// 새 법률 설명 없이 "어떤 순서로 이 페이지를 보면 되는지"만 짧게 안내합니다.
// 카드 박스를 반복하지 않고, 작은 원형 번호와 얇은 연결선만으로 흐름을
// 표현합니다.
//
// 배경은 white로 둡니다. Hero(bg-slate-50)·PracticeAreas(bg-slate-50)와
// 인접해 있어, 이 섹션이 이전과 같은 slate 계열이면 세 섹션이 경계 없이
// 하나의 회색 덩어리처럼 이어져 보입니다. white로 색을 바꾸는 것만으로
// Hero가 끝나고 새 섹션이 시작된다는 느낌과, 다음 PracticeAreas(slate-50)
// 와의 경계를 별도 테두리 없이도 만들 수 있습니다.
const GUIDE_STEPS = ["업무분야 확인", "필요한 정보 확인", "상담 신청"];

export default function OfficeGuide() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-center text-xl font-semibold text-gray-900 sm:text-2xl">
          필요한 내용을 순서대로 확인해 보세요
        </h2>
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-0">
          {GUIDE_STEPS.map((label, index) => (
            <Fragment key={label}>
              {index > 0 && (
                <div
                  aria-hidden="true"
                  className="ml-4 h-8 w-px bg-gray-200 sm:ml-0 sm:h-px sm:w-full sm:flex-1"
                />
              )}
              <div className="flex items-center gap-3 sm:flex-1 sm:flex-col sm:gap-3 sm:text-center">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-gray-700 sm:text-base">{label}</span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
