import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React, { useEffect } from "react";

const App: React.FC = () => {
  const handleScroll = (e: any) => {
    console.log(e);
    if (e.deltaY === 100) {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollBy({
        top: -window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
