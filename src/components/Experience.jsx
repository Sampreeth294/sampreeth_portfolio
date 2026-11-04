
import { Component } from "react";
import "./Experience.css";

class Experience extends Component {
  render() {
    return (
      <section className="experience" id="experience">

        <div className="experience-container">

          {/* Section heading */}
          <h2 className="experience-title">
            Work <span>Experience</span>
          </h2>

          <div className="experience-underline"></div>

          {/* Timeline */}
          <div className="experience-timeline">

            {/* Experience card */}
            <div className="experience-item">

              <div className="experience-timeline-icon">
                &lt;/&gt;
              </div>

              <div className="experience-card">

                <span className="experience-date">
                  Internship · 2 Months
                </span>

                <h3>WordPress Developer Intern</h3>

                <h4>Panada ece</h4>

                <ul>
                  <li>
                    Developed and customized websites using
                    WordPress.
                  </li>

                  <li>
                    Worked with HTML, CSS, and Bootstrap to
                    build responsive web pages.
                  </li>

                  <li>
                    Practiced website layouts, styling, and
                    frontend development.
                  </li>
                </ul>

                <div className="experience-technologies">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>WordPress</span>
                  <span>Bootstrap</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </section>
    );
  }
}

export default Experience;
