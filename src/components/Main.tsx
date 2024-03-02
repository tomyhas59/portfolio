import React, { useEffect, useState } from "react";
import DownButton from "./DownButton";

interface ProjectsProps {
  downButton: () => void;
}

const Main: React.FC<ProjectsProps> = ({ downButton }) => {
  const text = " Hello, This is Yonghyeon's portfolio!!";
  const [typedText, setTypedText] = useState("");
  const [textColor, setTextColor] = useState("#000"); // 초기 색상은 검정색으로 설정

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

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setTextColor(randomColor());
    }, 100); // 0.1초마다 랜덤 컬러 적용

    return () => clearInterval(colorInterval);
  }, []);

  const randomColor = (): string => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <section className="main">
      <div style={{ color: textColor }}>{typedText}</div>
      <DownButton downButton={downButton} />
    </section>
  );
};

export default Main;
