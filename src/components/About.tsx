import React from "react";
import "../styles/About.css";

interface Skill { name:string; file:string; ext?:"png"|"svg"; }

const SKILL_GROUPS = [
  {
    category:"Backend", color:"emerald",
    skills:[
      {name:"Java",        file:"JAVA",       ext:"png" as const},
      {name:"Spring Boot", file:"SpringBoot"},
      {name:"Python",      file:"Python"},
      {name:"Node.js",     file:"NodeJS"},
      {name:"MySQL",       file:"MySQL"},
      {name:"GraphQL",     file:"GraphQL"},
      {name:"Firebase",    file:"Firebase"},
    ],
  },
  {
    category:"Frontend", color:"indigo",
    skills:[
      {name:"React",      file:"React"},
      {name:"TypeScript", file:"TypeScript"},
      {name:"Next.js",    file:"NextJS"},
      {name:"Redux",      file:"Redux"},
      {name:"JavaScript", file:"JavaScript"},
      {name:"HTML",       file:"HTML"},
      {name:"CSS",        file:"CSS"},
      {name:"Sass",       file:"Sass"},
    ],
  },
  {
    category:"Tools", color:"amber",
    skills:[
      {name:"GitHub", file:"Github"},
    ],
  },
];

const SkillIcon: React.FC<{skill:Skill}> = ({skill}) => {
  const ext = skill.ext ?? "svg";
  return (
    <div className="skill-icon" title={skill.name}>
      <div className="skill-icon__img-wrap">
        <img src={`/img/skills/${skill.file}.${ext}`} alt={skill.name} draggable={false}/>
      </div>
      <span className="skill-icon__name">{skill.name}</span>
    </div>
  );
};

const About: React.FC = () => (
  <section className="section about" id="about">
    <div className="section__header reveal">
      <p className="section__label">About</p>
      <h2 className="section__title">개발자 <span>소개</span></h2>
    </div>

    <div className="about__grid">
      {/* Left */}
      <div className="about__left reveal-left">
        <div className="about__avatar">
          <span className="about__avatar-emoji">👨‍💻</span>
        </div>
        <div className="about__info-cards">
          {[
            {label:"Position", value:"Fullstack Dev"},
            {label:"Focus",    value:"Backend · Java"},
            {label:"GitHub",   value:"tomyhas59"},
            {label:"Projects", value:"4 Works"},
          ].map(c=>(
            <div className="about__info-card" key={c.label}>
              <p className="about__info-card-label">{c.label}</p>
              <p className="about__info-card-value">{c.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="about__right reveal-right">
        <p className="about__text">
          안녕하세요! <strong>백엔드 기반의 풀스택 개발자</strong>를 목표로 공부하고 있습니다.
          <strong> Java · Spring Boot</strong>로 서버와 REST API를 설계하는 데 집중하며,
          <strong> Python</strong>까지 활용해 다양한 백엔드 요구사항에 대응합니다.
        </p>
        <p className="about__text">
          서버 구현에 그치지 않고 <strong>React · TypeScript</strong>로 프론트엔드까지 직접 개발하며
          서비스 전체 흐름을 이해하는 풀스택 개발자를 지향합니다.
          실시간 채팅, GraphQL 통신, Oracle DB 연동 등 다양한 경험을 통해 성장하고 있습니다.
        </p>

        <p className="about__skills-title">기술 스택</p>
        {SKILL_GROUPS.map(g=>(
          <div className="about__skill-group" key={g.category}>
            <p className={`about__skill-group-name about__skill-group-name--${g.color}`}>{g.category}</p>
            <div className="skill-icons-grid">
              {g.skills.map(s=><SkillIcon key={s.name} skill={s}/>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default About;
