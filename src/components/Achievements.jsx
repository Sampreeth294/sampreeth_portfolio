import { Component } from "react";
import "./Achievements.css";

class Achievements extends Component {
  render() {
    const achievements = [
      {
        icon: "🏆",
        title: "IEEE Conference Paper Presentation",
        description:
          "Presented a research paper on E-Voter, exploring blockchain technology for secure and transparent electronic voting."
      },
     
      {
        icon: "🤖",
        title: "AI & Software Development",
        description:
          "Building practical projects in AI/ML, computer vision, Python, and full-stack web development."
      }
    ];

    return (
      <section className="achievements-section" id="achievements">
        <div className="achievements-container">
          <h2 className="achievements-title">
            Key <span>Achievements</span>
          </h2>

          <div className="achievements-underline"></div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div className="achievement-card" key={index}>
                <div className="achievement-icon">
                  {achievement.icon}
                </div>

                <h3>{achievement.title}</h3>

                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Achievements;