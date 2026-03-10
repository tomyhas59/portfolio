import React from "react";
import "../styles/About.css";

const Contact: React.FC = () => (
  <section className="section contact" id="contact">
    <div className="section__header reveal" style={{textAlign:"center"}}>
      <p className="section__label">Contact</p>
      <h2 className="section__title">함께 <span>일해요</span></h2>
    </div>
    <div className="contact__inner reveal">
      <p className="contact__text">
        새로운 기회와 협업에 항상 열려 있습니다.
        <br/>
        궁금한 점이 있으시면 언제든지 연락해 주세요!
      </p>
      <div className="contact__links">
        <a className="contact__link contact__link--email" href="mailto:tomyhas59@gmail.com">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          이메일 보내기
        </a>
        <a className="contact__link contact__link--github" href="https://github.com/tomyhas59" target="_blank" rel="noreferrer">
          <img src="/img/skills/Github.svg" alt="github" style={{width:16,height:16}}/>
          GitHub 방문
        </a>
      </div>
    </div>
  </section>
);
export default Contact;
