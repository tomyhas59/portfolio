import React from "react";
import "../styles/About.css";

const Contact: React.FC = () => (
  <section className="section contact" id="contact">
    <div className="section__header reveal" style={{ textAlign: "center" }}>
      <p className="section__label">Contact</p>
      <h2 className="section__title">
        함께 <span>일해요</span>
      </h2>
    </div>
    <div className="contact__inner reveal">
      <p className="contact__text">
        새로운 기회와 협업에 항상 열려 있습니다.
        <br />
        궁금한 점이 있으시면 언제든지 연락해 주세요!
      </p>
      <div className="contact__info-grid">
        <div className="contact__info-card">
          <div className="contact__info-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div className="contact__info-content">
            <div className="contact__info-label">Email</div>
            <div className="contact__info-value">yh9035926@naver.com</div>
          </div>
        </div>

        <div className="contact__info-card">
          <div className="contact__info-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className="contact__info-content">
            <div className="contact__info-label">Phone</div>
            <div className="contact__info-value">010-7170-5926</div>
          </div>
        </div>
      </div>

      <div className="contact__github">
        <a
          className="contact__github-link"
          href="https://github.com/tomyhas59"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/img/skills/Github.svg"
            alt="github"
            className="contact__github-icon"
          />
          <span>GitHub 방문하기</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
