import BabylonScene from "./BabylonScene";
import DownButton from "./DownButton";

interface ProjectsProps {
  downButton: () => void;
}

const Main: React.FC<ProjectsProps> = ({ downButton }) => {
  return (
    <section className="main">
      <div>메인 페이지입니다</div>
      <BabylonScene />
      <DownButton downButton={downButton} />
    </section>
  );
};

export default Main;
