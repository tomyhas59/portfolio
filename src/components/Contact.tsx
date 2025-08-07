import gsap from "gsap";
import { FaArrowUp } from "react-icons/fa";
interface ContactProps {
  id: string;
}

const Contact = ({ id }: ContactProps) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  gsap.fromTo(
    ".contact-title",
    { opacity: 0, y: -50 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 1,
      ease: "bounce.out",
    }
  );

  gsap.fromTo(
    ".contact-content",
    { opacity: 0, x: 100 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
    }
  );

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
