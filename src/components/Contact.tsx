import React from "react";

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section className="contact" id={id}>
      <h2>Contact</h2>
      <p>HP:</p>
      <p>Email:</p>
    </section>
  );
};

export default Contact;
