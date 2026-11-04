
import { Component } from "react";
import { Link } from "react-router-dom";
import "./ProjectDetails.css";

class ProjectDetails extends Component {
  render() {
    return (
      <div className="project-details-page">

        {/* Top navigation */}
        <div className="details-topbar">
          <div className="details-topbar-inner">
            <Link to="/#projects" className="back-button">
              ← &nbsp; Back to Projects
            </Link>

            <a
              href="https://github.com/Sampreeth294"
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.74 3.99 1.95.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.28-2.61 5.22-5.1 5.5.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <main className="details-container">

          {/* Project heading */}
          <div className="details-heading">
            <div className="details-icon">✦</div>

            <div>
              <h1>Maritime Vessel Tracker</h1>
              <p>
                Computer vision-based vessel detection
                and persistent tracking system.
              </p>
            </div>
          </div>

          {/* Main project image */}
          <div className="details-preview">
            <img
              src="/Live monitor@1x.png"
              alt="Maritime Vessel Tracker preview"
            />
          </div>

          {/* About and Tech Stack */}
          <div className="details-content">

            <div className="details-main-column">

              <h2 className="details-section-title">
                About the Project
              </h2>

              <div className="details-about-card">
                <ul>
                  <li>
                    Detects ships and boats from maritime video
                    footage using computer vision.
                  </li>

                  <li>
                    Aims to assign persistent IDs to vessels
                    throughout a video.
                  </li>

                  <li>
                    Uses video processing to inspect uploaded
                    footage and extract metadata.
                  </li>

                  <li>
                    Built with a FastAPI backend and MongoDB
                    for storing project data.
                  </li>

                  <li>
                    Designed to support future tracking
                    improvements for camera movement, glare,
                    small vessels, and occlusion.
                  </li>
                </ul>
              </div>

              <h2 className="details-section-title features-title">
                Key Features
              </h2>

              <div className="details-features-grid">
                <div className="details-feature">
                  <span>✓</span>
                  Video Upload and Inspection
                </div>

                <div className="details-feature">
                  <span>✓</span>
                  Vessel Detection
                </div>

                <div className="details-feature">
                  <span>✓</span>
                  Persistent ID Tracking
                </div>

                <div className="details-feature">
                  <span>✓</span>
                  Video Metadata Extraction
                </div>

                <div className="details-feature">
                  <span>✓</span>
                  MongoDB Data Storage
                </div>

                <div className="details-feature">
                  <span>✓</span>
                  FastAPI Backend
                </div>
              </div>

            </div>

            {/* Right sidebar */}
            <aside className="details-sidebar">

              <h2>Tech Stack</h2>

              <div className="details-tech-card">

                <h4>BACKEND</h4>
                <div className="details-tags">
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>Pydantic</span>
                </div>

                <h4>DATABASE</h4>
                <div className="details-tags">
                  <span>MongoDB</span>
                </div>

                <h4>COMPUTER VISION</h4>
                <div className="details-tags">
                  <span>OpenCV</span>
                  <span>YOLO</span>
                  <span>ByteTrack</span>
                </div>

                <h4>TOOLS</h4>
                <div className="details-tags">
                  <span>Git</span>
                  <span>Docker</span>
                </div>

              </div>

              <h2 className="quick-links-title">
                Quick Links
              </h2>

              <a
                href="https://github.com/Sampreeth294"
                target="_blank"
                rel="noopener noreferrer"
                className="source-code-link"
              >
                <span className="source-code-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.74 3.99 1.95.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.28-2.61 5.22-5.1 5.5.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
                    />
                  </svg>
                </span>
                View Source Code ↗
              </a>

            </aside>
          </div>
        </main>
      </div>
    );
  }
}

export default ProjectDetails;
