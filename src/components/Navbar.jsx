
import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLink: "home",
    };
  }

  links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact", id: "contact" },
  ];

  componentDidMount() {
    this.updateActiveLink();
    window.addEventListener("scroll", this.updateActiveLink, {
      passive: true,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateActiveLink);
  }

  updateActiveLink = () => {
    const navbarHeight =
      document.querySelector(".navbar")?.getBoundingClientRect().height ?? 0;
    const activeLine = window.scrollY + navbarHeight + 80;
    let activeLink = "home";

    for (const link of this.links) {
      const section = document.getElementById(link.id);

      if (section && section.getBoundingClientRect().top + window.scrollY <= activeLine) {
        activeLink = link.id;
      }
    }

    const isAtPageBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;

    if (isAtPageBottom) {
      activeLink = "contact";
    }

    if (activeLink !== this.state.activeLink) {
      this.setState({ activeLink });
    }
  };

  render() {
    const { activeLink } = this.state;

    return (
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="navbar-logo">
            Sampreeth S.
          </a>

          <div className="navbar-links">
            {this.links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`navbar-link${activeLink === link.id ? " active" : ""}`}
                aria-current={activeLink === link.id ? "location" : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="navbar-socials">
            <a
              href="https://github.com/Sampreeth294"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/sampreeth-s/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z"
                  fill="currentColor"
                />
                <circle cx="4" cy="4" r="2" fill="currentColor" />
              </svg>
            </a>

            <a
              href="mailto:sampreeths294@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="m4 7 8 6 8-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
