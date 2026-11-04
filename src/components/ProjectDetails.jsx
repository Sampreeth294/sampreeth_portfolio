import { useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjectDetails.css";

const projects = {
  "maritime-vessel-tracker": {
    title: "Maritime Vessel Tracker",
    subtitle:
      "Computer vision-based vessel detection and persistent tracking system.",
    image: "/Live monitor@1x.png",
    about: [
      "Designed to detect ships and boats in maritime video footage using computer vision.",
      "Aims to assign persistent IDs to vessels throughout a video.",
      "Uses OpenCV to inspect uploaded videos and extract video metadata.",
      "Uses FastAPI and MongoDB for backend APIs and data storage.",
      "Designed to address challenges such as camera movement, glare, small vessels, and occlusion."
    ],
    features: [
      "Video Upload and Inspection",
      "Vessel Detection",
      "Persistent ID Tracking",
      "Video Metadata Extraction",
      "MongoDB Data Storage",
      "FastAPI Backend"
    ],
    stack: [
      { title: "BACKEND", items: ["Python", "FastAPI", "Pydantic"] },
      { title: "DATABASE", items: ["MongoDB"] },
      { title: "COMPUTER VISION", items: ["OpenCV", "YOLO", "ByteTrack"] },
      { title: "TOOLS", items: ["Git", "Docker"] }
    ]
  },

  "kiosk-manager": {
    title: "Qiosk Manager",
    subtitle:
      "A smart canteen kiosk and management platform for streamlined food ordering and operations.",
    image: "/kisok.png",
    about: [
      "A canteen management platform designed to simplify food ordering and daily operations.",
      "Provides a customer-facing interface for browsing menus and placing orders.",
      "Includes planned kitchen display and order-status management workflows.",
      "Designed to support menu voting, food ratings, and customer feedback.",
      "Uses Django REST Framework and PostgreSQL for backend services and persistent data storage.",
      "The planned architecture includes Django Channels and Redis for real-time updates."
    ],
    features: [
      "Digital Menu and Food Ordering",
      "Customer Self-Service Kiosk",
      "Order Management",
      "Kitchen Display Workflow",
      "Menu Voting and Food Ratings",
      "Sales and Inventory Management"
    ],
    stack: [
      { title: "FRONTEND", items: ["React", "TypeScript", "Tailwind CSS"] },
      { title: "BACKEND", items: ["Python", "Django", "Django REST Framework"] },
      { title: "DATABASE", items: ["PostgreSQL"] },
      { title: "REAL-TIME & TOOLS", items: ["Django Channels", "Redis", "Docker", "Git"] }
    ]
  },

  "e-voter": {
    title: "E-Voter",
    subtitle:
      "A blockchain-based electronic voting system focused on voting transparency and security.",
    image: "/evoter.png",
    about: [
      "Explores blockchain technology for transparent and verifiable electronic voting.",
      "Uses Ethereum blockchain technology as part of the voting system design.",
      "Integrates live video processing into the project workflow.",
      "Explores speech recognition to support voice-based interaction or processing.",
      "Investigates computer vision approaches for video analysis.",
      "The project was presented at an IEEE conference."
    ],
    features: [
      "Blockchain-Based Voting",
      "Ethereum Integration",
      "Transparent Vote Records",
      "Live Video Processing",
      "Speech Recognition",
      "Security-Focused Voting Workflow"
    ],
    stack: [
      { title: "BLOCKCHAIN", items: ["Ethereum", "Smart Contracts"] },
      { title: "PROGRAMMING", items: ["Python"] },
      { title: "AI & COMPUTER VISION", items: ["OpenCV", "YOLOv8", "DeepFace"] },
      { title: "AUDIO PROCESSING", items: ["Speech Recognition", "Wav2Vec"] }
    ]
  }
};

const githubUrl = "https://github.com/Sampreeth294";

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects[projectId];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <main className="details-container">
        <h1>Project not found</h1>
        <Link to="/#projects" className="back-button">
          ← Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <div className="project-details-page">
      <div className="details-topbar">
        <div className="details-topbar-inner">
          <Link to="/#projects" className="back-button">
            ← &nbsp; Back to Projects
          </Link>

          <a
            href={githubUrl}
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
        <div className="details-heading">
          <div className="details-icon">✦</div>

          <div>
            <h1>{project.title}</h1>
            <p>{project.subtitle}</p>
          </div>
        </div>

        <div className="details-preview">
          <img src={project.image} alt={`${project.title} preview`} />
        </div>

        <div className="details-content">
          <div className="details-main-column">
            <h2 className="details-section-title">
              About the Project
            </h2>

            <div className="details-about-card">
              <ul>
                {project.about.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <h2 className="details-section-title features-title">
              Key Features
            </h2>

            <div className="details-features-grid">
              {project.features.map((feature, index) => (
                <div className="details-feature" key={index}>
                  <span>✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <aside className="details-sidebar">
            <h2>Tech Stack</h2>

            <div className="details-tech-card">
              {project.stack.map((group) => (
                <div key={group.title}>
                  <h4>{group.title}</h4>

                  <div className="details-tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="quick-links-title">Quick Links</h2>

            <a
              href={githubUrl}
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
              View GitHub Profile ↗
            </a>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default ProjectDetails;