
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
    const greeting =
      this.state.greetings[this.state.currentGreeting];

    return (
      <section className="hero" id="home">

        {/* Decorative background */}
        <div className="hero-background-glow"></div>

        {/* Main content */}
        <div className="hero-container">

          {/* Left side */}
          <div className="hero-content">

            {/* Animated greeting */}
            <div className="hero-greeting">
              <span
                key={this.state.currentGreeting}
                className="greeting-text"
              >
                {greeting}

              </span>
              <span className="greeting-wave">👋</span>
            </div>

            {/* Name */}
            <h1>
              Sampreeth
              <br />
              Shivaprasad.
            </h1>

            {/* Professional role */}
            <h2>Student &amp; Software Developer</h2>

            {/* Location */}
            <p className="hero-location">
              <span className="location-icon" aria-hidden="true">
                ⌖
              </span>
              Bengaluru, India
            </p>

            {/* Introduction */}
            <p className="hero-description">
              MCA student and aspiring Software Developer with
              hands-on experience in Python, Java, and web
              technologies. Passionate about AI/ML, full-stack
              development, and building innovative solutions to
              real-world problems. Always learning, building, and
              ready to turn ideas into impactful applications.
            </p>

            {/* Availability */}
            <div className="hero-status">
              <span>Open and Ready to Work</span>
              <span className="status-dot"></span>
            </div>

          </div>

          {/* Right side: Profile photo */}
          <div className="hero-image-area">

            {/* Decorative stars */}
            <span className="hero-star star-one">✦</span>
            <span className="hero-star star-two">✦</span>
            <span className="hero-star star-three">✧</span>
            <span className="hero-star star-four">✦</span>
            <span className="hero-star star-five">✧</span>
            <span className="hero-star star-six">✦</span>

            {/* Circular profile image */}
            <div className="hero-photo">
              <img
                src="/image.png"
                alt="Sampreeth Shivaprasad"
                className="profile-image"
              />
            </div>

          </div>

        </div>

        {/* Explore More */}
        <a href="#about" className="explore-more">
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
