import React from "react";
import DownButton from "./DownButton";

interface AboutMeProps {
  id: string;
  downButton: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ id, downButton }) => {
  return (
    <section className="aboutMe" id={id}>
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        corporis, error earum nemo dignissimos rerum deleniti repellendus
        consectetur officia fugit! Officia porro neque in beatae distinctio
        similique alias asperiores voluptatem.
      </p>
      <DownButton downButton={downButton} />
    </section>
  );
};

export default AboutMe;
