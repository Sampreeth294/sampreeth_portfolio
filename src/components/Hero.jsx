
import React, { Component } from "react";
import "./Hero.css";

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greetings: ["Namaste", "Hello"],
      currentGreeting: 0
    };
  }

  componentDidMount() {
    this.greetingInterval = setInterval(() => {
      this.setState((prevState) => ({
        currentGreeting:
          (prevState.currentGreeting + 1) %
          prevState.greetings.length
      }));
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.greetingInterval);
  }

  render() {
    return (
      <section className="hero" id="home">

        {/* Animated Greeting */}
        <div className="hero-greeting">
          <span
            key={this.state.currentGreeting}
            className="greeting-text"
          >
            {this.state.greetings[this.state.currentGreeting]}
          </span>
        </div>

        {/* Main Hero Content */}
        <div className="hero-container">

          {/* Introduction */}
          <div className="hero-content">

            <h1>
              Sampreeth
              <br />
              Shivaprasad.
            </h1>

            <h2>Student &amp; Software Developer</h2>

            <p className="hero-location">
              <span aria-hidden="true">⌖</span>
              Bengaluru, India
            </p>

            <p className="hero-description">
               MCA student and aspiring Software Developer 
               with hands-on experience in Python, Java, and web technologies. 
               Passionate about AI/ML, full-stack development, and building 
               innovative solutions to real-world problems. Always learning, building, and 
               ready to turn ideas into impactful applications.
            </p>

            {/* Availability Status */}
            <div className="hero-status">
              <span>Open and Ready to Work</span>
              <span className="status-dot"></span>
            </div>

          </div>

          {/* Profile Image */}
          <div className="hero-image-area">
            <div className="hero-photo">
              <div className="photo-placeholder">
                <img src="/path/to/your/image.jpg" alt="Profile" />
              </div>
            </div>
          </div>

        </div>

        {/* Explore More */}
        <a className="explore-more" href="#about">
          <span>Explore More</span>
          <span className="explore-arrow" aria-hidden="true">
            ↓
          </span>
        </a>

      </section>
    );
  }
}

export default Hero;
