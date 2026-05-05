import { useLocale } from "../contexts/LocaleContext";

const dict = {
  ko: {
    // 버튼
    "confirm button": "확인",
    "cancel button": "취소",
    "edit button": "수정",
    "delete button": "삭제",
    "create button": "추가하기",
    "load more": "더보기",
    "submit button": "등록하기",

    // 정렬
    "sort by latest": "최신순",
    "sort by best": "인기순",

    // 모달 제목
    "edit review title": "리뷰 수정",
    "create review title": "리뷰 작성",

    // 입력 필드 Placeholder
    "enter the title": "제목을 입력해주세요",
    "enter the content": "내용을 입력해주세요",

    // 언어 선택
    language: "한국어",

    // 푸터
    "terms of service": "서비스 이용약관",
    "privacy policy": "개인정보 처리방침",
  },
  en: {
    // 버튼
    "confirm button": "Confirm",
    "cancel button": "Cancel",
    "edit button": "Edit",
    "delete button": "Delete",
    "create button": "Add",
    "load more": "Load More",
    "submit button": "Submit",

    // 정렬
    "sort by latest": "Latest",
    "sort by best": "Popular",

    // 모달 제목
    "edit review title": "Edit Review",
    "create review title": "Write Review",

    // 입력 필드 Placeholder
    "enter the title": "Enter title",
    "enter the content": "Enter content",

    // 언어 선택
    language: "English",

    // 푸터
    "terms of service": "Terms of Service",
    "privacy policy": "Privacy Policy",
  },
};

export default function useTranslate() {
  const locale = useLocale();
  const translate = (key) => dict[locale][key] || "";
  return translate;
}
