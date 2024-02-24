import React from "react";
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

    if (currnetScrollY < aboutMeOffset) {
      window.scrollTo({
        top: aboutMeOffset,
        behavior: "smooth",
      });
    } else if (currnetScrollY < projectsOffset) {
      window.scrollTo({
        top: projectsOffset,
        behavior: "smooth",
      });
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
