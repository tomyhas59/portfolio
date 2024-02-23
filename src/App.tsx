import React from "react";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const downButton = () => {
    const yOffset = window.scrollY;
    const projectsOffset = document.getElementById("projects")?.offsetTop || 0;
    const contactOffset = document.getElementById("contact")?.offsetTop || 0;

    if (yOffset < projectsOffset) {
      window.scrollTo({
        top: projectsOffset,
        behavior: "smooth",
      });
    } else if (yOffset < contactOffset) {
      window.scrollTo({
        top: contactOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      <Header />
      <AboutMe id="aboutMe" downButton={downButton} />
      <Projects id="projects" downButton={downButton} />
      <Contact id="contact" />
      <Footer />
    </div>
  );
};

export default App;
