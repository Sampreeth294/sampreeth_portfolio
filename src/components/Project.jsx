
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

            {/* Project 1: Maritime Vessel Tracker */}
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

            {/* Project 2: Kiosk Manager */}
            <div className="project-card">
              <div className="project-image">
                <img
                  src="/kisok.png"
                  alt="Kiosk Manager project"
                />
              </div>

              <div className="project-icon">✦</div>

              <h3>Kiosk Manager</h3>

              <p className="project-description">
                A kiosk management platform designed to
                streamline restaurant operations with digital
                ordering, menu management, order tracking,
                and an administrative dashboard.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>Django REST</span>
                <span>PostgreSQL</span>
              </div>

              <Link
                to="/projects/kiosk-manager"
                className="project-link"
              >
                Learn more <span>→</span>
              </Link>
            </div>

            {/* Project 3: E-Voter */}
            <div className="project-card">
              <div className="project-image">
                <img
                  src="/evoter.png"
                  alt="E-Voter blockchain voting system"
                />
              </div>

              <div className="project-icon">✦</div>

              <h3>E-Voter - Blockchain Voting System</h3>

              <p className="project-description">
                A blockchain-based electronic voting project
                exploring secure and transparent voting
                through Ethereum, with live video processing
                and speech recognition.
              </p>

              <div className="project-tags">
                <span>Ethereum</span>
                <span>Blockchain</span>
                <span>Python</span>
                <span>YOLOv8</span>
                <span>Speech Recognition</span>
              </div>

              <Link
                to="/projects/e-voter"
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
