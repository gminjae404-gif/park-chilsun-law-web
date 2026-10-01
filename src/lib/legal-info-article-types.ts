// /legal-info 하위 법률정보 상세글(예: inheritance-registration,
// real-estate-sale-registration)이 공통으로 사용하는 콘텐츠 타입입니다.
// 글이 늘어날 때마다 각 글 전용 데이터 파일(src/lib/legal-info-*.ts)이
// 이 타입만 가져다 쓰고, 실제 문구는 각 파일에 완전히 격리된 채로
// 유지합니다.
//
// 각 글 METADATA의 날짜 세 개는 서로 다른 사실을 가리킵니다(혼용 금지).
// - asOfDate: 독자에게 표시하는 "법률정보 기준일"(UI 문구, locale 표기)
// - updatedAt: 독자에게 보이는 본문·REFERENCES가 실제로 마지막으로
//   바뀐 날짜(ISO, 코드 리팩터링·링크 구조·QA성 변경은 제외)
// - legalReviewedAt: 현행 법령·판례 기준으로 마지막으로 법률검토를
//   완료한 날짜(ISO, 검토 결과 수정이 없었던 경우도 포함)
export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subheading"; text: string };

export type ArticleSection = {
  heading: string;
  blocks: ArticleBlock[];
};

export type LegalReference = {
  source: string;
  detail: string;
};
