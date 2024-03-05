interface ContactProps {
  id: string;
}

const Contact = ({ id }: ContactProps) => {
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
