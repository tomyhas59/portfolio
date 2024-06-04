import DownButton from "./DownButton";
import CSS from "../img/skills/CSS.svg";
import Firebase from "../img/skills/Firebase.svg";
import Git from "../img/skills/Git.svg";
import Github from "../img/skills/Github.svg";
import GraphQL from "../img/skills/GraphQL.svg";
import HTML from "../img/skills/HTML.svg";
import JavaScript from "../img/skills/JavaScript.svg";
import MySQL from "../img/skills/MySQL.svg";
import NextJS from "../img/skills/NextJS.svg";
import NodeJS from "../img/skills/NodeJS.svg";
import React from "../img/skills/React.svg";
import Redux from "../img/skills/Redux.svg";
import Sass from "../img/skills/Sass.svg";
import TypeScript from "../img/skills/TypeScript.svg";

interface AboutMeProps {
  id: string;
  downButton: () => void;
}

const AboutMe = ({ id, downButton }: AboutMeProps) => {
  const skills = [
    HTML,
    CSS,
    Sass,
    JavaScript,
    TypeScript,
    React,
    Redux,
    NextJS,
    NodeJS,
    GraphQL,
    MySQL,
    Firebase,
    Git,
    Github,
  ];

  return (
    <section className="aboutMeWrapper" id={id}>
      <div className="aboutMe">
        <h2 className="aboutMeTitle">About Me</h2>
        <p className="aboutMeContent">
          <p>개발자라는 직업의 매력에 빠져 개발자가 되기 위해</p>
          <p>매일 한 걸음씩 나아가고 있습니다. </p>
          <p>내가 만든 세상을 다른 사람들에게 보여줄 수 있고</p>
          <p>같이 나눌 수 있다는 점이 매력인 것 같습니다.</p>
          <p>또한 새로운 것을 배우고 에러를 해결하다 보면</p>
          <p>성장하는 자신을 느낄 수 있고 성취감 또한 매우 높아서 </p>
          <p>배우고자 하는 욕심이 더 생기는 것 같습니다.</p>
          <p>꾸준히 개발에 매진하여 성장하는 개발자가 되고 싶습니다.</p>
        </p>
      </div>
      <div className="skills">
        <div>SKILLS</div>
        {skills.map((item) => (
          <img className="skillImg" src={item} alt={`${item}`} />
        ))}
      </div>
      <DownButton downButton={downButton} />
    </section>
  );
};

export default AboutMe;
