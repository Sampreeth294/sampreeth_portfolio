
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">

          {/* Portfolio Logo */}
          <a href="#home" className="navbar-logo">
            Sampreeth S.
          </a>

          {/* Navigation Links */}
          <div className="navbar-links">
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Social Links */}
          <div className="navbar-socials">

            <a
              href="https://github.com/Sampreeth294"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/sampreeth-s/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="mailto:sampreeths294@gmail.com"
              aria-label="Email"
            >
              @
            </a>

          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
