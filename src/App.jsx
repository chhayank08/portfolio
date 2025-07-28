import React, { useState } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";

import { Route, Routes } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div id="home" className="section">
        <Hero />
      </div>
      <div id="skills" className="section">
        <Skills />
      </div>
      {/* <div id="experience" className="section">
        <Experience />
      </div> */}
      <div id="education" className="section">
        <Education />
      </div>
      <div id="projects" className="section">
        <Projects />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<HomePage />} />
        <Route path="/experience" element={<HomePage />} />
        <Route path="/education" element={<HomePage />} />
        <Route path="/projects" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
      </Routes>
    </>
  );
}
