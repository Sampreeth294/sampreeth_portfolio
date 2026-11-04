import { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    const email = "sampreeths294@gmail.com";

    return (
      <>
        <section className="contact-section" id="contact">
          <div className="contact-container">

            <h2 className="contact-title">
              Let's <span>Connect</span>
            </h2>

            <div className="contact-underline"></div>

            <p className="contact-description">
              I'm always open to discussing new opportunities,
              interesting projects, or just having a chat about
              technology!
            </p>

            <a
              href={`mailto:${email}`}
              className="contact-email-card"
            >
              <div className="contact-email-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="23"
                  height="23"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <h3>Email Me</h3>

              <p>{email}</p>
            </a>

            <a
              href={`mailto:${email}`}
              className="contact-send-button"
            >
              <span className="contact-send-icon">➤</span>
              <span>Send Me an Email</span>
              <span className="contact-arrow">→</span>
            </a>

          </div>
        </section>

        <footer className="contact-footer">
          <div className="footer-main">
            <div className="footer-socials" aria-label="Social links">
              <a
                href="https://github.com/Sampreeth294"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.74 3.99 1.95.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.28-2.61 5.22-5.1 5.5.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sampreeth-s/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.98V9.4h2.95v9.5ZM6.45 8.1a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.47 10.8h-2.94v-4.62c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.7H9.74V9.4h2.82v1.3h.04c.39-.74 1.35-1.53 2.78-1.53 2.98 0 3.54 1.96 3.54 4.5v5.23Z"
                  />
                </svg>
              </a>
              <a
                href="mailto:sampreeths294@gmail.com"
                aria-label="Email"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()}  All rights reserved.</p>
            <p>
              Made with <span className="footer-heart">♥</span> and a lot of{" "}
              <span className="footer-coffee">☕</span>
            </p>
            <a href="#home" className="footer-top-link">
              Back to top ↑
            </a>
          </div>
        </footer>
      </>
    );
  }
}

export default Contact;