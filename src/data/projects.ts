export interface Project {
  id: number;
  name: string;
  mainImg: string[];
  imgs: string[];
  description: string;
  url: string;
  gitHub: string;
  features: string[];
  role?: string;
  teamSize?: number;
  stack: {
    frontend: string[];
    backend: string[];
    deploy: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    name: "SNS",
    mainImg: ["SNSMain.png"],
    imgs: [
      "SNSMain.png",
      "SNSLogin.png",
      "SNSPost.png",
      "SNSChat.png",
      "SNSInfo.png",
      "SNSDark.png",
      "SNSPOstDetail.png",
    ],
    description:
      "JWT 인증·실시간 채팅·피드 추천 알고리즘을 갖춘 풀스택 SNS 플랫폼. Socket.IO 기반 양방향 통신과 해시태그 검색까지 직접 설계·구현.",
    url: "https://tomyhasblog.vercel.app",
    gitHub: "https://github.com/tomyhas59/blog",
    features: [
      "JWT 인증 구조 설계",
      "게시글·댓글·이미지 CRUD, Multer 파일 업로드 처리",
      "팔로우 그래프 기반 피드 추천 알고리즘 구현",
      "Socket.IO 룸 관리로 1:1 실시간 채팅 및 읽음 처리",
      "해시태그 파싱·색인 및 키워드 전체 검색 기능",
      "CSS-in-JS 다크모드 토글 및 반응형 레이아웃",
    ],
    stack: {
      frontend: [
        "React",
        "Redux",
        "TypeScript",
        "styled-components",
        "Socket.IO-client",
      ],
      backend: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Sequelize",
        "JWT",
        "Socket.IO",
      ],
      deploy: ["Vercel", "Koyeb"],
    },
  },
  {
    id: 2,
    name: "쇼핑몰",
    mainImg: ["shopMain.png"],
    imgs: [
      "shopMain.png",
      "shopProductDetail.png",
      "shopProducts.png",
      "shopCart.png",
      "shopLogin.png",
      "shopOrder.png",
    ],
    description:
      "GraphQL API·Firebase 인증을 조합한 Next.js 기반 커머스 플랫폼. Apollo Server 스키마 설계부터 장바구니 상태 관리까지 구현.",
    url: "https://tmshop.vercel.app/",
    gitHub: "https://github.com/tomyhas59/shop",
    features: [
      "Apollo Server GraphQL 스키마 및 Resolver 직접 설계",
      "Firebase Auth 소셜 로그인 및 Firestore 상품 데이터 관리",
      "React Query 캐싱으로 중복 네트워크 요청 최소화",
      "Recoil Atom으로 장바구니 전역 상태 관리",
      "상품 목록·상세·장바구니 페이지 SSR/CSR 혼합 렌더링",
    ],
    stack: {
      frontend: ["Next.js", "TypeScript", "Recoil", "GraphQL", "React Query"],
      backend: ["Apollo Server", "Firebase Firestore"],
      deploy: ["Vercel", "CloudType"],
    },
  },
  {
    id: 3,
    name: "가계부",
    mainImg: ["household1.png"],
    imgs: ["householdMain.png", "household1.png", "household2.png"],
    description:
      "Java Spring Boot로 RESTful API 서버를 직접 설계·구현하고 React와 연동한 가계부 애플리케이션. JPA 엔티티 설계부터 배포까지 백엔드 전 과정 담당.",
    url: "https://tomyhas59.github.io/household-book",
    gitHub: "https://github.com/tomyhas59/household-book",
    features: [
      "Spring Boot REST API 엔드포인트 설계 및 구현",
      "JPA Entity·Repository 패턴으로 MariaDB 데이터 모델링",
      "월별 수입·지출 집계 쿼리 및 카테고리 필터 API 구현",
      "React Recharts 기반 카테고리별 통계 시각화",
      "Recoil로 클라이언트 상태 관리, Axios 비동기 처리",
      "CloudType 서버 배포 및 GitHub Pages 프론트 배포",
    ],
    stack: {
      frontend: ["React", "TypeScript", "Recoil"],
      backend: ["Java", "Spring Boot", "MariaDB"],
      deploy: ["GitHub Pages", "CloudType"],
    },
  },
  {
    id: 4,
    name: "LawMate",
    mainImg: ["lawmateMain.png"],
    imgs: ["lawmateMain.png", "LawMate1.png", "lawMate2.png", "lawMate3.png"],
    description:
      "법률 질문·답변, 판례 검색, 변호사 매칭·후기 시스템을 갖춘 법률 서비스 플랫폼. 5인 팀 프로젝트에서 법률 질문·판례·변호사 도메인 3개 파트 전담.",
    url: "",
    gitHub: "https://github.com/tomyhas59/lawMate",
    teamSize: 5,
    role: "법률 질문/답변 · 판례 검색 · 변호사 도메인 담당",
    features: [
      "법률 질문 등록·목록·상세 API 및 UI 구현 (사건유형·상태 필터)",
      "변호사 전용 답변 등록, 의뢰인 채택 처리",
      "판례 키워드·유형 검색 구현",
      "판례 상세 및 유사 판례 추천 연동",
      "변호사 목록 페이지네이션",
    ],
    stack: {
      frontend: ["React", "JavaScript"],
      backend: ["Java", "Spring Boot", "Oracle DB", "Python"],
      deploy: [],
    },
  },
];
