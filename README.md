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
moviepedia/
├── public/              # 정적 자원 (이미지, 파비콘 등)
├── src/
│   ├── components/      # UI 컴포넌트 단위 관리
│   │   ├── Review/      # 리뷰 CRUD 핵심 (Form, List, Item)
│   │   ├── FormControls/# 공통 입력 요소 (Input, FileInput, Select 등)
│   │   ├── Layout/      # 전체 페이지 구조 정의 및 레이아웃
│   │   ├── Modal/       # 알림 및 수정용 모달
│   │   └── Header, Footer, Button
│   ├── contexts/        # 전역 상태 관리 (LocaleContext - 다국어 설정)
│   ├── hooks/           # 커스텀 훅 (비즈니스 로직 및 번역 처리)
│   ├── utils/           # 유틸리티 함수 (API 인스턴스 관리 등)
│   ├── App.jsx          # 메인 로직, API 연동 및 페이지네이션 관리
│   ├── main.jsx         # 애플리케이션 진입점
│   ├── mock.json        # 초기 구성을 위한 목업 데이터
│   └── index.css        # 전역 스타일 및 공통 변수(z-index 등) 정의
├── index.html           # 메인 HTML 템플릿 (lang="ko" 설정)
├── package.json         # 프로젝트 의존성 및 스크립트 관리
└── README.md            # 프로젝트 상세 정보 문서
```

## 📦 시작 가이드 (Getting Started)

```
npm install
npm run dev
```
