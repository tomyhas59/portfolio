import { FaArrowUp } from "react-icons/fa";
interface ContactProps {
  id: string;
}

const Contact = ({ id }: ContactProps) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="contact-wrapper" id={id}>
      <h2 className="contact-title">Contact</h2>
      <div className="contact-content">
        <p>HP : 010-7170-5926</p>
        <p>Email : yh9035926@naver.com</p>
        <p>
          github :&nbsp;
          <a href="https://github.com/tomyhas59" target="blank">
            https://github.com/tomyhas59
          </a>
        </p>
      </div>
      <FaArrowUp className="up-button" onClick={scrollTop} />
    </section>
  );
};

export default Contact;
