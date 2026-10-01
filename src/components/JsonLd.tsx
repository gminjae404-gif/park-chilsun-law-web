import { toSafeJsonLdString } from "@/lib/structured-data";

// JSON-LD를 <script type="application/ld+json">로 서버에서 렌더링하는
// 최소 컴포넌트입니다. 디자인에 영향을 주지 않으며(화면에 아무것도
// 그리지 않음), 직렬화는 toSafeJsonLdString이 담당합니다("<" 이스케이프로
// "</script>" 조기 종료를 방지).
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: toSafeJsonLdString(data) }}
    />
  );
}
