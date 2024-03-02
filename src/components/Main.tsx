import React, { useEffect, useState } from "react";
import DownButton from "./DownButton";

interface ProjectsProps {
  downButton: () => void;
}

const Main: React.FC<ProjectsProps> = ({ downButton }) => {
  const text = "Hello, This is Yonghyeon's portfolio!!";
  const [typedText, setTypedText] = useState("");
  const [textColor, setTextColor] = useState("#000"); // 초기 색상은 검정색으로 설정
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        setTypedText((prevTypedText) => {
          if (prevTypedText.length < text.length) {
            return prevTypedText + text[prevTypedText.length];
          } else {
            setIsTyping(false);
            clearInterval(typingInterval);
            return prevTypedText;
          }
        });
      } else {
        setTypedText((prevTypedText) => {
          if (prevTypedText.length > 0) {
            return prevTypedText.slice(0, -1);
          } else {
            setIsTyping(true);
            clearInterval(deleteInterval);
            return prevTypedText;
          }
        });
      }
    }, 100);

    const deleteInterval = setInterval(() => {
      if (!isTyping && typedText.length > 0) {
        setTypedText((prevTypedText) => prevTypedText.slice(0, -1));
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
      clearInterval(deleteInterval);
    };
  }, [isTyping, typedText.length]);

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
