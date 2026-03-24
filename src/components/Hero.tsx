import React, { useEffect, useRef } from "react";
import "../styles/Hero.css";

interface HeroProps {
  onScrollToProjects: () => void;
}

const HERO_TECHS = [
  { name: "Java", file: "JAVA", ext: "png" },
  { name: "Spring Boot", file: "SpringBoot", ext: "svg" },
  { name: "Python", file: "Python", ext: "svg" },
  { name: "React", file: "React", ext: "svg" },
  { name: "TypeScript", file: "TypeScript", ext: "svg" },
  { name: "Node.js", file: "NodeJS", ext: "svg" },
  { name: "MySQL", file: "MySQL", ext: "svg" },
  { name: "GitHub", file: "Github", ext: "svg" },
];

const ROLES = [
  "Backend Developer",
  "Fullstack Developer",
  "Spring Boot Engineer",
];

const Hero: React.FC<HeroProps> = ({ onScrollToProjects }) => {
  const roleRef = useRef<HTMLSpanElement>(null);
  const idx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  /* Typing animation */
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const type = () => {
      const current = ROLES[idx.current];
      if (!roleRef.current) return;
      if (!deleting.current) {
        roleRef.current.textContent = current.slice(0, charIdx.current + 1);
        charIdx.current++;
        if (charIdx.current === current.length) {
          deleting.current = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIdx.current - 1);
        charIdx.current--;
        if (charIdx.current === 0) {
          deleting.current = false;
          idx.current = (idx.current + 1) % ROLES.length;
        }
      }
      timer = setTimeout(type, deleting.current ? 55 : 90);
    };
    timer = setTimeout(type, 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Mesh blobs */}
      <div className="hero__mesh">
        <div className="hero__mesh-blob hero__mesh-blob--1" />
        <div className="hero__mesh-blob hero__mesh-blob--2" />
        <div className="hero__mesh-blob hero__mesh-blob--3" />
      </div>
      {/* Rings */}
      <div className="hero__ring hero__ring--1" />
      <div className="hero__ring hero__ring--2" />

      <div className="hero__content">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-dot" />
          Backend-focused Fullstack Developer
        </p>

        <h1 className="hero__title">
          <span className="hero__title-name">Lee Yong Hyeon</span>
          <span className="hero__title-role">
            <span ref={roleRef}>Backend Developer</span>
            <span className="hero__cursor" />
          </span>
        </h1>

        <p className="hero__desc">
          <strong style={{ color: "var(--accent)" }}>
            Java · Spring Boot · Python
          </strong>
          으로 견고한 서버를 설계하고,
          <br />
          <strong style={{ color: "var(--accent2)" }}>
            React · TypeScript
          </strong>
          로 서비스 전체를 완성합니다.
        </p>

        <div className="hero__cta">
          <button className="btn btn--primary" onClick={onScrollToProjects}>
            프로젝트 보기
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <a
            className="btn btn--outline"
            href="https://github.com/tomyhas59"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Tech icons — SVG 로고 활용 */}
        <div className="hero__tech">
          {HERO_TECHS.map((t) => (
            <div className="hero__tech-item" key={t.name}>
              <div className="hero__tech-icon">
                <img src={`/img/skills/${t.file}.${t.ext}`} alt={t.name} />
              </div>
              <span className="hero__tech-name">{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll">
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect
            x="1"
            y="1"
            width="14"
            height="22"
            rx="7"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity=".5"
          />
          <circle cx="8" cy="8" r="2.5" fill="var(--accent)">
            <animate
              attributeName="cy"
              values="8;15;8"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
        Scroll
      </div>
    </section>
  );
};

export default Hero;
