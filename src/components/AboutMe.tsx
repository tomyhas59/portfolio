import DownButton from "./DownButton";

interface AboutMeProps {
  id: string;
  downButton: () => void;
}

const AboutMe = ({ id, downButton }: AboutMeProps) => {
  return (
    <section className="aboutMeContainer" id={id}>
      <h2 className="aboutMeTitle">About Me</h2>
      <p className="aboutMeContent">
        개발자라는 직업의 매력에 빠져 개발자가 되기 위해 매일 한 걸음씩 나아가고
        있습니다. 내가 만든 세상을 다른 사람들에게 보여줄 수 있고 같이 나눌 수
        있다는 점이 매력인 것 같습 니다. 또한 새로운 것을 배우고 에러를 해결하다
        보면 성장하는 자신을 느낄 수 있고 성취감 또한 매우 높아서 배우고자 하는
        욕심이 더 생기는 것 같습니다. 귀사를 통하여 더 넒은 세계를 경험하고
        성장하고 싶습니다.
      </p>
      <DownButton downButton={downButton} />
    </section>
  );
};

export default AboutMe;
