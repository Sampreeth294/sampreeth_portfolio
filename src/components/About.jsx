
import { Component } from "react";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [
        {
          icon: "✧",
          title: "Innovation",
          subtitle: "Creative Problem Solving",
          color: "blue"
        },
        {
          icon: "ϟ",
          title: "Execution",
          subtitle: "Learning by Building",
          color: "purple"
        },
        {
          icon: "◎",
          title: "Excellence",
          subtitle: "Continuous Improvement",
          color: "cyan"
        }
      ],

      interests: [
        {
          icon: "✦",
          title: "AI & Machine Learning",
          description:
            "Exploring intelligent applications, machine learning models, and computer vision.",
          color: "blue"
        },
        {
          icon: "</>",
          title: "Full-Stack Development",
          description:
            "Building interactive web applications using React, JavaScript, Python, and APIs.",
          color: "purple"
        },
        {
          icon: "☁",
          title: "Backend Development",
          description:
            "Working with Django REST Framework, FastAPI, databases, and backend services.",
          color: "cyan"
        },
        {
          icon: "▤",
          title: "Data & Databases",
          description:
            "Learning SQL, PostgreSQL, MongoDB, data processing, and data-driven applications.",
          color: "pink"
        },
        {
          icon: "⌘",
          title: "Problem Solving",
          description:
            "Strengthening Python, Java, data structures, algorithms, and logical thinking.",
          color: "orange"
        },
        {
          icon: "↗",
          title: "Project Development",
          description:
            "Turning ideas into practical projects while learning new tools and technologies.",
          color: "green"
        }
      ]
    };
  }

  render() {
    return (
      <section className="about" id="about">
        <div className="about-container">

          {/* Introduction card */}
          <div className="about-intro-card">

            <div className="about-brain-icon">
              <span>✧</span>
            </div>

            <div className="about-intro-content">

              <span className="about-eyebrow">
                WHO I AM
              </span>

              <h2>
                I'm an Aspiring Software Developer
              </h2>

              <div className="about-paragraph">
                I'm pursuing my Master's in Computer Applications
                and developing my skills in software development,
                Artificial Intelligence, and Machine Learning.
                I enjoy exploring new technologies and building
                applications that solve real-world problems.
              </div>

              <div className="about-paragraph second-paragraph">
                My interests include full-stack development,
                backend engineering, computer vision, and
                intelligent applications. Through hands-on
                projects and continuous learning, I'm working
                towards becoming a versatile software developer.
              </div>

            </div>
          </div>

          {/* Personal values */}
          <div className="about-values">

            {this.state.values.map((value) => (
              <div
                className="about-value-card"
                key={value.title}
              >
                <div
                  className={`about-value-icon ${value.color}`}
                >
                  {value.icon}
                </div>

                <h3>{value.title}</h3>
                <p>{value.subtitle}</p>
              </div>
            ))}

          </div>

          {/* Interests and technical focus */}
          <div className="about-interests">

            {this.state.interests.map((item) => (
              <div
                className={`about-interest-card ${item.color}`}
                key={item.title}
              >
                <div className="interest-heading">

                  <div
                    className={`interest-icon ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                </div>

                <div className="interest-underline"></div>

                <p>{item.description}</p>
              </div>
            ))}

          </div>

          {/* Closing note */}
          <div className="about-note">
            <span className="about-note-icon">✦</span>

            <p>
              Learning every day, building with curiosity,
              and turning ideas into reality.
            </p>
          </div>

        </div>
      </section>
    );
  }
}

export default About;
