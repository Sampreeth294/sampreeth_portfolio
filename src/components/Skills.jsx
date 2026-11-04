
import { Component } from "react";
import "./Skills.css";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.skillCategories = [
      {
        title: "Languages",
        icon: "</>",
        skills: [
          "Python",
        "Java",
          "Node.js",
          "C",
          "Bash"
        ]
      },
      {
        title: "Frontend",
        icon: "✣",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
          "React.js",
        
          "Tailwind CSS",
          
        ]
      },
      {
        title: "Backend",
        icon: "</>",
        skills: [
          "Django",
          "Flask",
          "FastAPI",
          "Express",
          "REST APIs",
   
        ]
      },
      {
        title: "Databases",
        icon: "▤",
        skills: [
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          
        ]
      },
      {
        title: "Cloud & DevOps",
        icon: "☁",
        skills: [
          "Docker",
          "Kubernetes",
          "Github Actions",
          "Vercel",
          "CI/CD"
        ]
      },
      {
        title: "AI & Tools",
        icon: "✣",
        skills: [
          "GPT-4",
          "RAG",
          "Claude",
          "Gemini",
          "Prompt Engineering"
        ]
      }
    ];
  }

  render() {
    return (
      <section className="skills-section" id="skills">
        <div className="skills-container">

          <div className="skills-heading">
            <h2>
              Skills & <span>Technologies</span>
            </h2>

            <div className="skills-heading-line"></div>
          </div>

          <div className="skills-grid">
            {this.skillCategories.map((category, index) => (
              <div className="skill-card" key={index}>

                <div className="skill-card-heading">
                  <span className="skill-icon">
                    {category.icon}
                  </span>

                  <h3>{category.title}</h3>
                </div>

                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span className="skill-tag" key={skillIndex}>
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    );
  }
}

export default Skills;
