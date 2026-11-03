
import React, { Component } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="portfolio">
        <Navbar />
        <Hero />
      </div>
    );
  }
}

export default App;
