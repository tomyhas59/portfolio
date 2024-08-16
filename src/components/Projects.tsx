import DownButton from "./DownButton";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";
import { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ProjectsProps {
  id: string;
  downButton: () => void;
}

const Card = ({
  id,
  imagen,
  name,
}: {
  id: number;
  imagen: any;
  name: string;
}) => {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className="card"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />

      <Link to={`/projects/${id}`} className="go-to-project">
        {name}
      </Link>
    </animated.div>
  );
};

const Projects = ({ id, downButton }: ProjectsProps) => {
  const [goToSlide, setGoToSlide] = useState<number | undefined>(undefined);

  const projects = projectsData.map((project) => ({
    key: project.id,
    content: (
      <Card
        id={project.id}
        imagen={require(`../img/${project.mainImg[0]}`)}
        name={project.name}
      />
    ),
  }));

  const table = projects.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [cards] = useState(table);

  return (
    <section className="projects-wrapper" id={id}>
      <h2 className="project-title">Projects</h2>
      <FaArrowLeft
        className="left-arrow"
        onClick={() =>
          setGoToSlide((prev) => (prev !== undefined ? prev - 1 : 0))
        }
      />
      <div className="projects">
        <Carousel
          slides={cards}
          goToSlide={goToSlide}
          offsetRadius={1}
          showNavigation={false}
          animationConfig={config.gentle}
        />
      </div>
      <FaArrowRight
        className="right-arrow"
        onClick={() =>
          setGoToSlide((prev) => (prev !== undefined ? prev + 1 : 0))
        }
      />

      <DownButton downButton={downButton} />
    </section>
  );
};

export default Projects;
