import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Project from "./components/Project.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import Skills from "./components/Skills.jsx";

import "./App.css";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />

          <Route
            path="/projects/:slug"
            element={<ProjectDetails />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;