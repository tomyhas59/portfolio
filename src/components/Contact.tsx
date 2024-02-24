import React from "react";
import DownButton from "./DownButton";

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="contact" id={id}>
      <h2>Contact</h2>
      <p>HP:</p>
      <p>Email:</p>
      <div className="upButton" onClick={scrollTop}></div>
    </section>
  );
};

export default Contact;
