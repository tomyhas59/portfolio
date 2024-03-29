import React, { useEffect, useState } from "react";
import DownButton from "./DownButton";

interface ProjectsProps {
  downButton: () => void;
}

const Main = ({ downButton }: ProjectsProps) => {
  const text = " Hello, This is Yonghyeon's portfolio!!";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (typedText.length < text.length) {
        setTypedText((prev) => prev + text[prev.length]);
      } else {
        setTimeout(() => {
          setTypedText("");
        }, 3000);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [typedText.length]);

  return (
    <section className="main">
      <div>{typedText}</div>
      <DownButton downButton={downButton} />
    </section>
  );
};

export default Main;
