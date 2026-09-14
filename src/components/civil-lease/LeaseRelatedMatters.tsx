import {
  LEASE_PRE_LAWSUIT_SETTLEMENT,
  LEASE_REGISTRATION_ORDER,
  LEASE_RELATED_CLAIMS,
} from "@/lib/civil-lease";

// "임차권등기명령"(이 페이지의 핵심 안내), "제소전화해"(계약 단계에서
// 함께 검토할 수 있는 절차), "임대차보증금과 관련된 채권 문제"(채권양도·
// 채권질권) 세 항목을 안내합니다.
//
// box-density-audit(카드/박스 밀도 1차 감사)에서 LeaseRegistrationOrder
// 바로 다음에 동일한 accent border 패널이 2개 더 연속되어 "패널
// 3연속"처럼 보인다는 지적에 따라, 큰 bordered/accent 패널들을
// LegalInfoTerms와 동일한 "제목+본문, whitespace로만 구분" 형태로
// 전환했습니다.
//
// box-density-audit 3~4차(시각적 리듬 보완)에서 각 제목의 accent를
// "소제목 왼쪽 짧고 굵은 세로 accent"(h-5 w-1.5, brand color,
// rounded-full)로 통일했습니다.
//
// box-density-audit 6차(임차권등기명령·제소전화해·채권 문제 시각
// 계층 통일)에서, 별도 파일(LeaseRegistrationOrder.tsx)·별도
// slate-50 block·별도 section에 있던 "임차권등기명령"을 이 컴포넌트로
// 옮겨와 세 항목을 하나의 동일한 section·배경(bg-white) 안에서
// 보여줍니다. 서로 다른 구획·배경 레벨에 있던 탓에 동일한 accent를
// 쓰고도 통일감이 떨어졌던 문제를 해결하기 위한 조정입니다.
// 임차권등기명령을 감싸고 있던 rounded bg-slate-50 내부 block·별도
// 카드/패널 느낌은 제거했고, 세 항목 모두 border·shadow·card 없이
// 동일한 세로 accent + whitespace(gap-10)만으로 구분합니다. 항목
// 순서(임차권등기명령 → 제소전화해 → 채권 문제)는 기존 페이지 순서와
// 동일하게 유지했고, 법률문구·조문·내용은 전혀 변경하지 않았습니다.
// LeaseRegistrationOrder.tsx는 더 이상 사용되지 않아 삭제했고,
// src/app/civil/lease/page.tsx에서 해당 import·렌더링도 함께
// 제거했습니다.
//
// box-density-audit 6차 보정(heading semantics)에서, 6차 통합 직후
// 세 제목이 <dt>로 내려가면서 이 구간에 <h2>가 하나도 없어지는 부수
// 효과가 있었습니다. 세 항목은 페이지 안에서 서로 같은 레벨의
// 주제이므로, <dl>/<dt>/<dd> 대신 일반 <div>/<h2>/<p>로 바꿔 세
// 제목을 모두 동일한 sibling <h2>로 렌더링합니다. className은
// <dt>/<dd>에 쓰던 값을 그대로 <h2>/<p>로 옮겼을 뿐이라 시각적으로는
// 전혀 달라지지 않습니다(세로 accent 크기·색상, spacing, 배경,
// font-size/weight 모두 동일).
//
// box-density-audit 6차 재보정(컬러 배경 박스)에서, "테두리 없이도
// LeaseDocuments의 준비자료 블록과 같은 계열의 배경으로 구분해
// 달라"는 피드백에 따라 각 항목에 LeaseDocuments 카드와 동일한
// rounded-sm bg-slate-50 p-6을 적용합니다(border 없음, shadow 없음).
// 세 항목 사이 간격은 LeaseDocuments 카드 grid의 gap-4와 동일한
// 수준으로 좁혀 "준비자료" 구간과 자연스럽게 이어지도록 했습니다.
// 제목 구조(h2 sibling·왼쪽 세로 accent h-5 w-1.5·gap-3)와
// 법률문구·데이터·섹션 순서는 전혀 변경하지 않았습니다.
//
// box-density-audit 7차(배경 리듬 반전 실험)에서, 페이지 전체 배경
// 순서를 white→slate→white→slate→white→slate→brand로 뒤집는 실험의
// 일환으로 section 배경을 bg-white → bg-slate-50으로, 내부 3개 블록
// 배경을 bg-slate-50 → bg-white로 서로 반전했습니다("SLATE-50 section
// 위 WHITE 블록 3개"). border 없음·왼쪽 세로 accent·h2 sibling·
// rounded-sm·p-6·gap-4·법률문구는 그대로 유지했습니다.
const LEASE_KEY_PROCEDURES = [LEASE_REGISTRATION_ORDER, LEASE_PRE_LAWSUIT_SETTLEMENT, LEASE_RELATED_CLAIMS];

export default function LeaseRelatedMatters() {
  return (
    <section className="border-b border-gray-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex max-w-3xl flex-col gap-4">
          {LEASE_KEY_PROCEDURES.map((item) => (
            <div key={item.heading} className="rounded-sm bg-white p-6">
              <h2 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold text-gray-900 sm:text-lg">
                <span aria-hidden="true" className="h-5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{item.heading}</span>
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
