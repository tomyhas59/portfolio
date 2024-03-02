import React, { useEffect } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App: React.FC = () => {
  const downButton = () => {
    const currnetScrollY = window.scrollY;
    const aboutMeOffset = document.getElementById("aboutMe")?.offsetTop || 0;
    const projectsOffset = document.getElementById("projects")?.offsetTop || 0;
    const contactOffset = document.getElementById("contact")?.offsetTop || 0;

    const aboutMeTitle: any = document.querySelector(".aboutMeTitle");
    const aboutMeContent: any = document.querySelector(".aboutMeContent");

    if (currnetScrollY < aboutMeOffset) {
      window.scrollTo({
        top: aboutMeOffset,
        behavior: "smooth",
      });
      aboutMeTitle.style.opacity = 1;
      aboutMeTitle.style.transform = "translateX(0)";
      aboutMeContent.style.opacity = 1;
      aboutMeContent.style.transform = "translateX(0)";
    } else if (
      currnetScrollY <
      projectsOffset - 100 /**projects에서 내려가게 동작 */
    ) {
      window.scrollTo({
        top: projectsOffset,
        behavior: "smooth",
      });
      aboutMeTitle.style.opacity = 0;
      aboutMeTitle.style.transform = "translateX(-500px)";
      aboutMeContent.style.opacity = 0;
      aboutMeContent.style.transform = "translateX(500px)";
    } else if (currnetScrollY < contactOffset) {
      window.scrollTo({
        top: contactOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      <Main downButton={downButton} />
      <AboutMe id="aboutMe" downButton={downButton} />
      <Projects id="projects" downButton={downButton} />
      <Contact id="contact" />
      <Footer />
    </div>
  );
};

export default App;
