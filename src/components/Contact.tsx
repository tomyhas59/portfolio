interface ContactProps {
  id: string;
}

const Contact = ({ id }: ContactProps) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="contactWrapper" id={id}>
      <h2>Contact</h2>
      <div className="contact">
        <p>HP : 010-7170-5926</p>
        <p>Email : yh9035926@naver.com</p>
        <p>
          github :&nbsp;
          <a href="https://github.com/tomyhas59" target="blank">
            https://github.com/tomyhas59
          </a>
        </p>
      </div>
      <div className="upButton" onClick={scrollTop}></div>
    </section>
  );
};

export default Contact;
