import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaTerminal, FaGraduationCap } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const stats = [
    { number: "+2", label: "YEARS EXP & INTERNSHIPS" },
    { number: "+10", label: "PROJECTS COMPLETED" },
    { number: "Top 50", label: "GOOGLE BIGCODE '26" },
    { number: "3137", label: "JEE MAINS AIR" }
  ];

  return (
    <section id="home" className="sawad-hero-section">
      <motion.div
        className="hero-header-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Sawad Massive Stacked Headline */}
        <div className="giant-title-box">
          <h1 className="giant-title-line1">SOFTWARE &</h1>
          <h1 className="giant-title-line2">SYSTEMS ENGINEER</h1>
        </div>

        <p className="hero-description">
          Undergraduate student at <strong>IIIT Hyderabad</strong> specializing in high-performance Rust/C systems, 
          Azure AKS remediation CLI tools, microservice architectures with Java Spring Boot & PostgreSQL, 
          and scalable MERN web applications.
        </p>

        {/* Sawad Large Number Stat Counters */}
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="stat-box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Quick Highlights Row */}
        <div className="sawad-hero-highlights">
          <div className="sawad-card highlight-pill-card">
            <FaGraduationCap size={20} className="pill-icon" />
            <div>
              <h4 className="pill-title">B.Tech ECE @ IIIT Hyderabad</h4>
              <p className="pill-sub">TA for Probability & Real Analysis (2025)</p>
            </div>
          </div>

          <div className="sawad-card highlight-pill-card">
            <FaTerminal size={20} className="pill-icon" />
            <div>
              <h4 className="pill-title">Microland Platforms Intern</h4>
              <p className="pill-sub">Rust AKS CLI, Graph RAG with Gemini 2.0 & Neo4j</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
