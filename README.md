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
├── public/              # 정적 자원 (이미지, 로고 등)
├── src/
│   ├── components/      # UI 컴포넌트 단위 관리
│   │   ├── ReviewForm   # 리뷰 등록 및 수정을 위한 폼
│   │   ├── ReviewList   # 리뷰 목록 및 정렬 필터
│   │   ├── ReviewListItem # 개별 리뷰 아이템 (사진, 별점, 내용)
│   │   ├── Modal        # 수정/삭제 확인용 모달
│   │   └── Common UI    # Button, Input, Select, Layout 등 공통 요소[cite: 1]
│   ├── contexts/        # 전역 상태 관리 (LocaleContext - 다국어 설정 등)[cite: 1]
│   ├── App.jsx          # 리뷰 데이터 CRUD 로직 및 메인 페이지[cite: 1]
│   ├── main.jsx         # React 앱 진입점[cite: 1]
│   ├── mock.json        # 초기 화면 구성을 위한 목업 데이터[cite: 1]
│   └── index.css        # 전역 스타일 및 초기화(reset) 시트[cite: 1]
├── index.html           # 메인 HTML 템플릿[cite: 1]
├── package.json         # 의존성 및 스크립트 관리[cite: 1]
└── vite.config.js       # Vite 빌드 및 개발 환경 설정[cite: 1]
```

## 📦 시작 가이드 (Getting Started)
```
npm install
npm run dev
```