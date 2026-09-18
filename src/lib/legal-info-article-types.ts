// /legal-info 하위 법률정보 상세글(예: inheritance-registration,
// real-estate-sale-registration)이 공통으로 사용하는 콘텐츠 타입입니다.
// 글이 늘어날 때마다 각 글 전용 데이터 파일(src/lib/legal-info-*.ts)이
// 이 타입만 가져다 쓰고, 실제 문구는 각 파일에 완전히 격리된 채로
// 유지합니다.
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
