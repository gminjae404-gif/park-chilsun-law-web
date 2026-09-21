import { ADULT_ADOPTION_REGISTRATION_META } from "./legal-info-adult-adoption-registration";
import { ADULT_GUARDIANSHIP_PROCEDURE_META } from "./legal-info-adult-guardianship-procedure";
import { CLAIM_SEIZURE_COLLECTION_ORDER_META } from "./legal-info-claim-seizure-collection-order";
import { CO_OWNED_PROPERTY_DIVISION_REGISTRATION_META } from "./legal-info-co-owned-property-division-registration";
import { CORPORATE_CAPITAL_INCREASE_REGISTRATION_META } from "./legal-info-corporate-capital-increase-registration";
import { CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_META } from "./legal-info-corporate-head-office-relocation-registration";
import { CORPORATE_OFFICER_CHANGE_REGISTRATION_META } from "./legal-info-corporate-officer-change-registration";
import { INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META } from "./legal-info-inheritance-division-agreement-registration";
import { INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_META } from "./legal-info-inheritance-estate-bankruptcy-procedure";
import { INHERITANCE_REGISTRATION_META } from "./legal-info-inheritance-registration";
import { INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_META } from "./legal-info-inheritance-renunciation-limited-acceptance";
import { JEONSE_RIGHT_REGISTRATION_META } from "./legal-info-jeonse-right-registration";
import { MORTGAGE_CANCELLATION_REGISTRATION_META } from "./legal-info-mortgage-cancellation-registration";
import { MORTGAGE_ESTABLISHMENT_REGISTRATION_META } from "./legal-info-mortgage-establishment-registration";
import { NAME_CHANGE_PERMISSION_PROCEDURE_META } from "./legal-info-name-change-permission-procedure";
import { OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_META } from "./legal-info-ownership-transfer-cancellation-restoration";
import { PAYMENT_ORDER_PROCEDURE_META } from "./legal-info-payment-order-procedure";
import { PROVISIONAL_REGISTRATION_PROCEDURE_META } from "./legal-info-provisional-registration-procedure";
import { REAL_ESTATE_COMPULSORY_AUCTION_META } from "./legal-info-real-estate-compulsory-auction";
import { REAL_ESTATE_DELIVERY_ORDER_META } from "./legal-info-real-estate-delivery-order";
import { REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_META } from "./legal-info-real-estate-disposition-provisional-injunction";
import { REAL_ESTATE_GIFT_REGISTRATION_META } from "./legal-info-real-estate-gift-registration";
import { REAL_ESTATE_POSSESSION_TRANSFER_PROVISIONAL_INJUNCTION_META } from "./legal-info-real-estate-possession-transfer-provisional-injunction";
import { REAL_ESTATE_PROVISIONAL_ATTACHMENT_META } from "./legal-info-real-estate-provisional-attachment";
import { REAL_ESTATE_SALE_REGISTRATION_META } from "./legal-info-real-estate-sale-registration";

// /legal-info(법률정보) 전용 콘텐츠입니다. 이 페이지는 업무분야를 다시
// 소개하는 곳이 아니라, 사건을 진행할 때 자주 접하는 공통적인 실무
// 정보(사건번호·사건검색, 법원 문서 용어, 증명서 발급, 공식 확인처)를
// 안내하는 페이지입니다. 아래 문구는 전부 확정 문구이며, 기간·비용·
// 수수료·관할·불복기간·신청자격·법무사의 대리권에 관한 내용은 이 문구
// 외에 임의로 추가하지 않습니다. 다른 페이지와 마찬가지로 페이지 전용
// 콘텐츠를 이 파일 하나에 완전히 격리합니다.
export const LEGAL_INFO_HERO = {
  title: "법률정보",
  lead: "사건 진행 중 자주 확인하는 법원 절차, 사건번호, 증명서와 공식 확인처를 정리했습니다.",
  note: "사건마다 적용되는 절차와 기한은 다를 수 있으므로 실제 진행 시에는 법원 문서와 현행 법령을 함께 확인해야 합니다.",
};

// ---- 1. 사건번호와 사건검색 ----
export const LEGAL_INFO_CASE_GUIDE_HEADING = "사건번호와 사건검색";
export const LEGAL_INFO_CASE_GUIDE_INTRO =
  "법원 사건은 사건구분 부호를 통해 사건의 종류를 확인할 수 있습니다. 사건 진행상황은 대한민국 법원의 사건검색 서비스를 통해 확인합니다.";

export type LegalInfoCaseType = {
  code: string;
  label: string;
};

// 대한민국 법원 사건구분안내의 공식 표현을 기준으로 합니다.
export const LEGAL_INFO_CASE_TYPES: LegalInfoCaseType[] = [
  { code: "가단", label: "민사1심단독사건" },
  { code: "가합", label: "민사1심합의사건" },
  { code: "가소", label: "민사소액사건" },
  { code: "카", label: "민사가압류,가처분등사건" },
  { code: "차", label: "독촉사건" },
  { code: "타경", label: "부동산등경매사건" },
  { code: "타채", label: "채권등집행사건" },
  { code: "개회", label: "개인회생사건" },
  { code: "하단", label: "파산단독사건" },
  { code: "하면", label: "면책사건" },
];

export const LEGAL_INFO_CASE_GUIDE_NOTE =
  "사건구분만으로 구체적인 사건 내용까지 알 수 있는 것은 아니므로, 실제 사건은 법원명·사건번호와 함께 확인해야 합니다.";

export type LegalInfoExternalLink = {
  label: string;
  href: string;
  // 링크 곁에 표시하는 출처 표기입니다("대한민국 법원" 등).
  source: string;
};

// URL은 대한민국 법원 공식 사이트(scourt.go.kr)에서 확인한 주소만
// 사용합니다. 이 환경은 네트워크 정책상 scourt.go.kr에 직접 접속해
// 화면을 열어볼 수는 없었고, 검색 결과에 나타난 공식 도메인의 페이지
// 제목·경로를 근거로 사용했습니다(아래 보고에 그대로 밝힙니다).
export const LEGAL_INFO_CASE_SEARCH_LINKS: LegalInfoExternalLink[] = [
  {
    label: "나의 사건검색",
    href: "https://www.scourt.go.kr/portal/information/events/search/search.jsp",
    source: "대한민국 법원",
  },
  {
    label: "사건구분안내",
    href: "https://www.scourt.go.kr/portal/information/event/guide/index.html",
    source: "대한민국 법원",
  },
  {
    label: "관할법원 찾기",
    href: "https://www.scourt.go.kr/region/location/RegionSearchListAction.work",
    source: "대한민국 법원",
  },
];

// ---- 2. 법원 문서에서 자주 보는 용어 ----
export const LEGAL_INFO_TERMS_HEADING = "법원 문서에서 자주 보는 용어";

export type LegalInfoTerm = {
  heading: string;
  content: string;
  note: string;
};

export const LEGAL_INFO_TERMS: LegalInfoTerm[] = [
  {
    heading: "송달",
    content:
      "법원이 소송서류나 재판서 등을 법에서 정한 방식으로 당사자에게 전달하는 절차입니다. 민사소송에서는 특별한 규정이 없으면 송달은 법원이 직권으로 합니다.",
    note: "주소 변경이나 송달장소에 문제가 있으면 사건 진행에 영향을 줄 수 있으므로 법원에 등록된 송달정보를 확인할 필요가 있습니다.",
  },
  {
    heading: "보정명령",
    content:
      "제출한 서류에 보완이 필요한 사항이 있을 때 법원이 정해진 사항을 보완하도록 명하는 절차입니다.",
    note: "보정명령을 받은 경우에는 문서에 적힌 보정사항과 제출기한을 먼저 확인해야 합니다.",
  },
  {
    heading: "지급명령",
    content:
      "금전 등의 지급을 목적으로 하는 청구에 대하여 채권자의 신청에 따라 법원이 발령할 수 있는 절차입니다.",
    note: "지급명령에 대한 이의신청 여부 등에 따라 이후 절차가 달라질 수 있습니다.",
  },
];

// ---- 3. 자주 발급하는 증명서 ----
export const LEGAL_INFO_DOCUMENTS_HEADING = "자주 발급하는 증명서";

export type LegalInfoDocument = {
  title: string;
  description: string;
  issuerLabel: string;
};

export const LEGAL_INFO_DOCUMENTS: LegalInfoDocument[] = [
  {
    title: "가족관계증명서",
    description: "본인과 부모, 배우자, 자녀에 관한 사항을 확인하는 가족관계등록부 증명서입니다.",
    issuerLabel: "대한민국 법원 전자가족관계등록시스템",
  },
  {
    title: "기본증명서",
    description: "본인의 출생, 사망, 국적 등 신분사항을 확인하는 증명서입니다.",
    issuerLabel: "대한민국 법원 전자가족관계등록시스템",
  },
  {
    title: "혼인관계증명서",
    description: "본인 및 배우자와 혼인에 관한 사항을 확인하는 증명서입니다.",
    issuerLabel: "대한민국 법원 전자가족관계등록시스템",
  },
  {
    title: "입양관계증명서 / 친양자입양관계증명서",
    description: "입양 또는 친양자입양 관계에 관한 사항을 확인하는 증명서입니다.",
    issuerLabel: "대한민국 법원 전자가족관계등록시스템",
  },
  {
    title: "제적등본·제적초본",
    description: "종전 호적제도에 따른 제적부의 내용을 확인할 때 사용하는 증명서입니다.",
    issuerLabel: "대한민국 법원 전자가족관계등록시스템",
  },
  {
    title: "주민등록표 등본·초본",
    description: "등본은 세대의 주민등록사항을, 초본은 개인의 주민등록사항을 확인하는 서류입니다.",
    issuerLabel: "정부24 또는 주민센터 등",
  },
];

export const LEGAL_INFO_DOCUMENTS_NOTE =
  "같은 이름의 증명서라도 일반·상세·특정 등 발급 형태나 포함해야 할 내용은 사건에 따라 달라질 수 있습니다. 법원 또는 제출기관이 요구한 서류명과 발급 형태를 확인한 뒤 발급하는 것이 좋습니다.";

// 가족관계 증명서 5종 공통 발급처(전자가족관계등록시스템)와 주민등록표
// 등·초본 발급처(정부24)입니다. 이 환경은 efamily.scourt.go.kr·gov.kr에도
// 직접 접속할 수 없어, 검색 결과로 확인되는 각 기관의 대표 주소를
// 사용했습니다(깊은 경로는 자주 바뀔 수 있어 대표 주소로 연결합니다).
export const LEGAL_INFO_EFAMILY_LINK: LegalInfoExternalLink = {
  label: "전자가족관계등록시스템 바로가기",
  href: "https://efamily.scourt.go.kr/",
  source: "대한민국 법원 전자가족관계등록시스템",
};

export const LEGAL_INFO_GOV24_LINK: LegalInfoExternalLink = {
  label: "정부24 바로가기",
  href: "https://www.gov.kr/",
  source: "정부24",
};

// ---- 4. 공식 사이트에서 확인하기 ----
// legal-info-page-refine에서, 기존 5곳 뒤에 대한법률구조공단을 6번째
// 항목으로 추가했습니다. 다른 항목과 동일하게 LegalInfoOfficialLinks가
// 그대로 렌더링하므로 컴포넌트는 수정하지 않았습니다. 기존 5곳의
// 제목·설명·href·순서는 변경하지 않았습니다.
export const LEGAL_INFO_OFFICIAL_LINKS_HEADING = "공식 사이트에서 확인하기";
export const LEGAL_INFO_OFFICIAL_LINKS_DESCRIPTION =
  "법령과 법원 절차는 변경될 수 있으므로 최신 정보는 공식 사이트에서 확인하는 것이 좋습니다.";

export type LegalInfoOfficialSite = {
  title: string;
  description: string;
  href: string;
};

export const LEGAL_INFO_OFFICIAL_LINKS: LegalInfoOfficialSite[] = [
  {
    title: "대한민국 법원",
    description: "사건검색, 사건구분, 관할법원과 각급 법원 정보를 확인할 수 있습니다.",
    href: "https://www.scourt.go.kr",
  },
  {
    title: "국가법령정보센터",
    description: "현재 시행 중인 법률, 대통령령, 부령, 대법원규칙 등 법령을 확인할 수 있습니다.",
    href: "https://www.law.go.kr/",
  },
  {
    title: "전자가족관계등록시스템",
    description: "가족관계등록부와 제적부 관련 증명서 발급 및 일부 신고 서비스를 제공합니다.",
    href: "https://efamily.scourt.go.kr/",
  },
  {
    title: "정부24",
    description: "주민등록표 등본·초본 등 각종 행정증명 발급서비스를 확인할 수 있습니다.",
    href: "https://www.gov.kr/",
  },
  {
    title: "인터넷등기소",
    description: "부동산·법인 등기와 관련된 열람·발급 및 등기 서비스를 확인할 수 있습니다.",
    href: "https://www.iros.go.kr/",
  },
  {
    title: "대한법률구조공단",
    description: "법률상담·법률구조 안내와 소송비용 등 자동계산을 확인할 수 있습니다.",
    href: "https://www.klac.or.kr/",
  },
];

// ---- 0. 법률정보 글 목록 ----
// 실제 법률정보 상세글(예: /legal-info/inheritance-registration) 카드
// 목록입니다. 카드의 제목·요약·카테고리는 각 글 전용 데이터 파일(예:
// legal-info-inheritance-registration.ts)의 META를 그대로 참조해,
// 같은 문구를 두 곳에 따로 적지 않습니다. 글이 늘어나면 이 배열에
// 항목만 추가하면 됩니다.
export const LEGAL_INFO_ARTICLES_HEADING = "법률정보 글";
export const LEGAL_INFO_ARTICLES_DESCRIPTION =
  "실무에서 자주 확인하는 절차와 준비서류를 주제별로 안내합니다.";

export type LegalInfoArticleSummary = {
  title: string;
  summary: string;
  category: string;
  href: string;
};

export const LEGAL_INFO_ARTICLES: LegalInfoArticleSummary[] = [
  {
    title: INHERITANCE_REGISTRATION_META.title,
    summary: INHERITANCE_REGISTRATION_META.cardSummary,
    category: INHERITANCE_REGISTRATION_META.category,
    href: INHERITANCE_REGISTRATION_META.href,
  },
  {
    title: REAL_ESTATE_SALE_REGISTRATION_META.title,
    summary: REAL_ESTATE_SALE_REGISTRATION_META.cardSummary,
    category: REAL_ESTATE_SALE_REGISTRATION_META.category,
    href: REAL_ESTATE_SALE_REGISTRATION_META.href,
  },
  {
    title: MORTGAGE_CANCELLATION_REGISTRATION_META.title,
    summary: MORTGAGE_CANCELLATION_REGISTRATION_META.cardSummary,
    category: MORTGAGE_CANCELLATION_REGISTRATION_META.category,
    href: MORTGAGE_CANCELLATION_REGISTRATION_META.href,
  },
  {
    title: CORPORATE_OFFICER_CHANGE_REGISTRATION_META.title,
    summary: CORPORATE_OFFICER_CHANGE_REGISTRATION_META.cardSummary,
    category: CORPORATE_OFFICER_CHANGE_REGISTRATION_META.category,
    href: CORPORATE_OFFICER_CHANGE_REGISTRATION_META.href,
  },
  {
    title: CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_META.title,
    summary: CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_META.cardSummary,
    category: CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_META.category,
    href: CORPORATE_HEAD_OFFICE_RELOCATION_REGISTRATION_META.href,
  },
  {
    title: CORPORATE_CAPITAL_INCREASE_REGISTRATION_META.title,
    summary: CORPORATE_CAPITAL_INCREASE_REGISTRATION_META.cardSummary,
    category: CORPORATE_CAPITAL_INCREASE_REGISTRATION_META.category,
    href: CORPORATE_CAPITAL_INCREASE_REGISTRATION_META.href,
  },
  {
    title: PAYMENT_ORDER_PROCEDURE_META.title,
    summary: PAYMENT_ORDER_PROCEDURE_META.cardSummary,
    category: PAYMENT_ORDER_PROCEDURE_META.category,
    href: PAYMENT_ORDER_PROCEDURE_META.href,
  },
  {
    title: CLAIM_SEIZURE_COLLECTION_ORDER_META.title,
    summary: CLAIM_SEIZURE_COLLECTION_ORDER_META.cardSummary,
    category: CLAIM_SEIZURE_COLLECTION_ORDER_META.category,
    href: CLAIM_SEIZURE_COLLECTION_ORDER_META.href,
  },
  {
    title: REAL_ESTATE_COMPULSORY_AUCTION_META.title,
    summary: REAL_ESTATE_COMPULSORY_AUCTION_META.cardSummary,
    category: REAL_ESTATE_COMPULSORY_AUCTION_META.category,
    href: REAL_ESTATE_COMPULSORY_AUCTION_META.href,
  },
  {
    title: INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_META.title,
    summary: INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_META.cardSummary,
    category: INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_META.category,
    href: INHERITANCE_RENUNCIATION_LIMITED_ACCEPTANCE_META.href,
  },
  {
    title: ADULT_GUARDIANSHIP_PROCEDURE_META.title,
    summary: ADULT_GUARDIANSHIP_PROCEDURE_META.cardSummary,
    category: ADULT_GUARDIANSHIP_PROCEDURE_META.category,
    href: ADULT_GUARDIANSHIP_PROCEDURE_META.href,
  },
  {
    title: NAME_CHANGE_PERMISSION_PROCEDURE_META.title,
    summary: NAME_CHANGE_PERMISSION_PROCEDURE_META.cardSummary,
    category: NAME_CHANGE_PERMISSION_PROCEDURE_META.category,
    href: NAME_CHANGE_PERMISSION_PROCEDURE_META.href,
  },
  {
    title: ADULT_ADOPTION_REGISTRATION_META.title,
    summary: ADULT_ADOPTION_REGISTRATION_META.cardSummary,
    category: ADULT_ADOPTION_REGISTRATION_META.category,
    href: ADULT_ADOPTION_REGISTRATION_META.href,
  },
  {
    title: INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META.title,
    summary: INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META.cardSummary,
    category: INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META.category,
    href: INHERITANCE_DIVISION_AGREEMENT_REGISTRATION_META.href,
  },
  {
    title: INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_META.title,
    summary: INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_META.cardSummary,
    category: INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_META.category,
    href: INHERITANCE_ESTATE_BANKRUPTCY_PROCEDURE_META.href,
  },
  {
    title: REAL_ESTATE_GIFT_REGISTRATION_META.title,
    summary: REAL_ESTATE_GIFT_REGISTRATION_META.cardSummary,
    category: REAL_ESTATE_GIFT_REGISTRATION_META.category,
    href: REAL_ESTATE_GIFT_REGISTRATION_META.href,
  },
  {
    title: MORTGAGE_ESTABLISHMENT_REGISTRATION_META.title,
    summary: MORTGAGE_ESTABLISHMENT_REGISTRATION_META.cardSummary,
    category: MORTGAGE_ESTABLISHMENT_REGISTRATION_META.category,
    href: MORTGAGE_ESTABLISHMENT_REGISTRATION_META.href,
  },
  {
    title: JEONSE_RIGHT_REGISTRATION_META.title,
    summary: JEONSE_RIGHT_REGISTRATION_META.cardSummary,
    category: JEONSE_RIGHT_REGISTRATION_META.category,
    href: JEONSE_RIGHT_REGISTRATION_META.href,
  },
  {
    title: PROVISIONAL_REGISTRATION_PROCEDURE_META.title,
    summary: PROVISIONAL_REGISTRATION_PROCEDURE_META.cardSummary,
    category: PROVISIONAL_REGISTRATION_PROCEDURE_META.category,
    href: PROVISIONAL_REGISTRATION_PROCEDURE_META.href,
  },
  {
    title: CO_OWNED_PROPERTY_DIVISION_REGISTRATION_META.title,
    summary: CO_OWNED_PROPERTY_DIVISION_REGISTRATION_META.cardSummary,
    category: CO_OWNED_PROPERTY_DIVISION_REGISTRATION_META.category,
    href: CO_OWNED_PROPERTY_DIVISION_REGISTRATION_META.href,
  },
  {
    title: OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_META.title,
    summary: OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_META.cardSummary,
    category: OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_META.category,
    href: OWNERSHIP_TRANSFER_CANCELLATION_RESTORATION_META.href,
  },
  {
    title: REAL_ESTATE_PROVISIONAL_ATTACHMENT_META.title,
    summary: REAL_ESTATE_PROVISIONAL_ATTACHMENT_META.cardSummary,
    category: REAL_ESTATE_PROVISIONAL_ATTACHMENT_META.category,
    href: REAL_ESTATE_PROVISIONAL_ATTACHMENT_META.href,
  },
  {
    title: REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_META.title,
    summary: REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_META.cardSummary,
    category: REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_META.category,
    href: REAL_ESTATE_DISPOSITION_PROVISIONAL_INJUNCTION_META.href,
  },
  {
    title: REAL_ESTATE_POSSESSION_TRANSFER_PROVISIONAL_INJUNCTION_META.title,
    summary: REAL_ESTATE_POSSESSION_TRANSFER_PROVISIONAL_INJUNCTION_META.cardSummary,
    category: REAL_ESTATE_POSSESSION_TRANSFER_PROVISIONAL_INJUNCTION_META.category,
    href: REAL_ESTATE_POSSESSION_TRANSFER_PROVISIONAL_INJUNCTION_META.href,
  },
  {
    title: REAL_ESTATE_DELIVERY_ORDER_META.title,
    summary: REAL_ESTATE_DELIVERY_ORDER_META.cardSummary,
    category: REAL_ESTATE_DELIVERY_ORDER_META.category,
    href: REAL_ESTATE_DELIVERY_ORDER_META.href,
  },
];

// ---- 5. 페이지 하단 안내 ----
export const LEGAL_INFO_FOOTER_NOTICE = {
  heading: "이용 전 확인해 주세요",
  content:
    "이 페이지는 일반적인 법률절차와 공식 정보 확인 방법을 안내하기 위한 것입니다. 사건의 종류, 진행단계와 법원 명령에 따라 필요한 조치와 제출서류가 달라질 수 있습니다.",
};
