import React, { useEffect, useState } from "react";
import DownButton from "./DownButton";

interface ProjectsProps {
  id: string;
  downButton: () => void;
}

const Main = ({ id, downButton }: ProjectsProps) => {
  const text = " Hello, This is YongHyeon's portfolio!!";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (typedText.length < text.length) {
        setTypedText((prev) => prev + text[prev.length]);
      } else {
        setTimeout(() => {
          setTypedText("");
        }, 2000);
      }
    }, 70);
    return () => clearInterval(typingInterval);
  }, [typedText.length]);

  return (
    <section className="main" id={id}>
      <div className="main-text">{typedText}</div>
      <DownButton downButton={downButton} />
    </section>
  );
};

export default Main;
