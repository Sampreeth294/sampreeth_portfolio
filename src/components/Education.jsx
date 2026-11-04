
import { Component } from "react";
import "./Education.css";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: [
        {
          degree: "Master of Computer Applications",
          institution: "RV College of Engineering",
          location: "Bengaluru, Karnataka, India",
          duration: "2024 - Present",
        },
        {
          degree: "Bachelor of Computer Applications",
          institution: "Jain [Deemed-to-be] University",
          location: "Bengaluru, Karnataka, India",
          duration: "2021 - 2024",
        },
      ],
    };
  }

  render() {
    return (
      <section className="education" id="education">
        <div className="education-container">

          <h2 className="education-title">
            Academic <span>Journey</span>
          </h2>

          <div className="education-underline"></div>

          <div className="education-grid">
            {this.state.education.map((item) => (
              <div className="education-card" key={item.degree}>

                <div className="education-icon">
                  <span>♧</span>
                </div>

                <div className="education-content">
                  <h3>{item.degree}</h3>

                  <p className="education-institution">
                    <span>⌖</span>
                    {item.institution}, {item.location}
                  </p>

                  <p className="education-duration">
                    <span>▢</span>
                    {item.duration}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    );
  }
}

export default Education;
