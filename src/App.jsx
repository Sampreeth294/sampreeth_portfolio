import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Project from "./components/Project.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import Skills from "./components/Skills.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";

function HomePage() {
  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Project />
      <Skills />
      <Achievements />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects/:projectId"
          element={<ProjectDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;