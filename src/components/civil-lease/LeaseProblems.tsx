import { LEASE_PROBLEMS, LEASE_PROBLEMS_DESCRIPTION, LEASE_PROBLEMS_HEADING } from "@/lib/civil-lease";

// "임대차에서 자주 발생하는 문제" 8개 항목입니다. box-density-audit(카드/
// 박스 밀도 1차 감사)에서 이 페이지의 첫 번째 카드벽으로 지목되어,
// CivilServiceAreas/EnforcementTypes와 동일한 좌우 2열 + border-t 공유 +
// 각 항목 border-b 구분선 목록으로 전환합니다. 배경 카드(rounded-sm
// border bg-slate-50 p-6)와 hover 효과를 모두 제거해 정보성 목록으로만
// 보이도록 합니다. 임대인·임차인 양쪽의 문제를 모두 포함하며, 어느
// 한쪽 관점만 강조하지 않도록 "보증금 미반환(임차인) → 연체 차임
// (임대인) → ..." 순으로 번갈아 배치한 기존 8개 항목의 순서·문구는
// 전혀 변경하지 않았습니다.
//
// box-density-audit 2차(시각적 리듬 보완)에서, 카드를 되살리지 않고도
// 시선이 각 항목을 따라 내려가도록 01~08 번호를 보조 요소로 추가합니다.
// 배지·pill·배경 없이 옅은 brand 색조의 작은 숫자만 제목 왼쪽에
// 두고, 설명 문단은 제목과 같은 시작 위치에 오도록 들여써서 "번호 →
// 제목 → 설명"이 한 눈에 읽히는 하나의 단위로 보이게 합니다.
//
// box-density-audit 7차(배경 리듬 반전 실험)에서, 페이지 전체 배경
// 순서를 white→slate→white→slate→white→slate→brand로 뒤집는 실험의
// 일환으로 section 배경을 bg-white → bg-slate-50으로 변경했습니다.
// 01~08 목록 구조·divider·번호·spacing은 그대로이며, 개별 항목에
// 새 배경 박스는 추가하지 않았습니다.
const LEFT_PROBLEMS = LEASE_PROBLEMS.slice(0, 4);
const RIGHT_PROBLEMS = LEASE_PROBLEMS.slice(4);

function ProblemItem({
  problem,
  index,
}: {
  problem: (typeof LEASE_PROBLEMS)[number];
  index: number;
}) {
  return (
    <li className="border-b border-gray-200 py-6">
      <div className="flex items-baseline gap-2">
        <span aria-hidden="true" className="w-6 shrink-0 text-xs font-semibold tabular-nums text-brand/60">
          {String(index).padStart(2, "0")}
        </span>
        <h3 className="text-base font-semibold text-gray-900 sm:text-lg">{problem.title}</h3>
      </div>
      <p className="mt-2 pl-8 text-sm leading-6 text-gray-600 sm:text-base">{problem.description}</p>
    </li>
  );
}

export default function LeaseProblems() {
  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {LEASE_PROBLEMS_HEADING}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base">
          {LEASE_PROBLEMS_DESCRIPTION}
        </p>

        <div className="mt-10 grid grid-cols-1 border-t border-gray-200 sm:grid-cols-2 sm:gap-x-12">
          <ul>
            {LEFT_PROBLEMS.map((problem, i) => (
              <ProblemItem key={problem.title} problem={problem} index={i + 1} />
            ))}
          </ul>
          <ul>
            {RIGHT_PROBLEMS.map((problem, i) => (
              <ProblemItem key={problem.title} problem={problem} index={i + 1 + LEFT_PROBLEMS.length} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
