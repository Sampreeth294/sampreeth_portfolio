
import React, { Component } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import "./App.css";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";

class App extends Component {
  render() {
    return (
      <div className="portfolio">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default App;
