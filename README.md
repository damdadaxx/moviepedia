# 🎬 Movie Reviews (영화 리뷰 플랫폼)

사용자가 영화를 관람한 후 사진과 별점, 리뷰를 남기고 관리할 수 있는 React 기반의 리뷰 관리 시스템입니다.

## 🚀 주요 기능 (Features)

- 리뷰 관리 (CRUD)
  - 영화 사진, 타이틀, 별점, 리뷰 내용을 포함한 리뷰를 등록할 수 있습니다.
  - 등록된 리뷰의 내용을 수정하거나 삭제할 수 있습니다.

- 정렬 기능 (Sorting)
  - 최신 등록순으로 리뷰를 확인할 수 있습니다.
  - 별점이 높은 '베스트순'으로 정렬이 가능합니다.

- 다국어 지원 (Localization)
  - Context API를 활용하여 서비스 내 언어 설정을 지원합니다.

- 반응형 UI
  - 모듈형 CSS를 사용하여 컴포넌트 기반의 깔끔한 스타일링을 적용했습니다.

## 🛠️ 기술 스택 (Tech Stack)

- Library: React, Vite
- Language: JavaScript
- Styling: CSS Modules

## 📁 프로젝트 구조 (Folder Structure)

```
movie-reviews/
├── src/
│   ├── components/
│   │   ├── Review/      # 리뷰 CRUD 핵심 컴포넌트
│   │   ├── FormControls/# Input, Select, LocaleSelect 등 입력 요소
│   │   ├── Layout/      # 헤더, 푸터 등을 포함한 공통 레이아웃
│   │   └── Modal/       # 알림 및 수정용 모달
│   ├── contexts/        # 전역 상태 관리
│   │   ├── LocaleContext.jsx # 언어 상태(KO/EN) 제공 Provider
│   │   └── useLocale.js      # 언어 상태 소비를 위한 커스텀 훅
│   ├── hooks/           # 커스텀 비즈니스 로직
│   │   └── useTranslate.js   # 선택된 언어에 따른 텍스트 변환 로직
│   ├── App.jsx          # 메인 앱 컴포넌트 (Context 적용)
│   ├── main.jsx         # 진입점
│   └── mock.json        # 목업 데이터
├── package.json
└── README.md
```

## 📦 시작 가이드 (Getting Started)

```
npm install
npm run dev
```
