import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="sawad-app-layout">
      {/* Fixed Sticky Left Profile Sidebar */}
      <Sidebar />

      {/* Main Right Content Feed */}
      <main className="sawad-main-feed">
        <Navbar />
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
