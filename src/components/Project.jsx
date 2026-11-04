
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Project.css";

class Project extends Component {
  render() {
    return (
      <section className="projects-section" id="projects">
        <div className="projects-container">

          <div className="projects-heading">
            <h2>
              Featured <span>Projects</span>
            </h2>
            <div className="projects-underline"></div>
          </div>

          <div className="projects-grid">

            <div className="project-card">

              <div className="project-image">
                <img
                  src="/Live monitor@1x.png"
                  alt="Maritime Vessel Tracker project"
                />
              </div>

              <div className="project-icon">✦</div>

              <h3>Maritime Vessel Tracker</h3>

              <p className="project-description">
                An intelligent vessel tracking system designed
                to detect and track ships in maritime video
                footage using computer vision and persistent
                object tracking.
              </p>

              <div className="project-tags">
                <span>Python</span>
                <span>FastAPI</span>
                <span>MongoDB</span>
                <span>YOLO</span>
              </div>

              <Link
                to="/projects/maritime-vessel-tracker"
                className="project-link"
              >
                Learn more <span>→</span>
              </Link>

            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Project;
