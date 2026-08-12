import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaTrophy, FaChalkboardTeacher, FaCheckCircle } from 'react-icons/fa';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <FaBriefcase size={22} />,
      title: "Current Experience",
      value: "Tech Intern @ Microland",
      desc: "Platforms Team (May 2026 – Present)"
    },
    {
      icon: <FaGraduationCap size={22} />,
      title: "Education",
      value: "IIIT Hyderabad",
      desc: "B.Tech ECE (2023 – 2027)"
    },
    {
      icon: <FaTrophy size={22} />,
      title: "Top Ranker",
      value: "Google BigCode Top 50",
      desc: "JEE Mains AIR 3137 | Advanced 4894"
    },
    {
      icon: <FaChalkboardTeacher size={22} />,
      title: "Teaching Assistant",
      value: "IIITH Courses",
      desc: "Probability & Real Analysis (2025)"
    }
  ];

  const focusPoints = [
    "High-Performance Systems Programming in Rust & C",
    "LLM Automation Tools & Graph RAG Architecture",
    "Microservices with Java Spring Boot & PostgreSQL",
    "Full-Stack MERN (MongoDB, Express, React, Node)",
    "Distributed Sockets, LRU Caching & POSIX Multithreading"
  ];

  return (
    <section id="about" className="about-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-badge">Get To Know Me</span>
        <h2 className="section-title">About Me</h2>
      </motion.div>

      <div className="about-container">
        {/* Metric Cards Grid */}
        <div className="about-metrics-grid">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="about-card-icon">{item.icon}</div>
              <h3 className="about-card-title">{item.title}</h3>
              <p className="about-card-val">{item.value}</p>
              <p className="about-card-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Narrative & Focus Points */}
        <div className="about-bio-grid">
          <motion.div
            className="glass-card bio-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="bio-title">My Journey & Technical Mindset</h3>
            <p className="bio-text">
              I am an undergraduate student at <strong>International Institute of Information Technology, Hyderabad (IIITH)</strong> pursuing a B.Tech in Electronics and Communication Engineering. My passion lies at the intersection of systems engineering, distributed infrastructure, and full-stack software development.
            </p>
            <p className="bio-text">
              Currently interning at <strong>Microland (Platforms Team)</strong>, I engineer LLM-driven diagnostic tools, graph-based RAG architectures for enterprise microservices, and observability telemetry pipelines. I take pride in applying <em>Clean Architecture</em>, robust concurrency primitives, and scalable API design to solve complex technical challenges.
            </p>
          </motion.div>

          <motion.div
            className="glass-card focus-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="bio-title">Core Technical Focus</h3>
            <ul className="focus-list">
              {focusPoints.map((point, index) => (
                <li key={index} className="focus-item">
                  <FaCheckCircle className="check-icon" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          className="education-timeline-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="sub-section-title">Education Background</h3>
          <div className="edu-grid">
            <div className="glass-card edu-card">
              <div className="edu-year">2023 – 2027 (Expected)</div>
              <h4 className="edu-school">International Institute of Information Technology, Hyderabad</h4>
              <p className="edu-degree">B.Tech in Electronics & Communication Engineering (ECE)</p>
              <p className="edu-detail">Courses: Data Structures, Algorithms, Operating Systems, Database Systems, Computer Networks, Machine Learning, Systems Programming</p>
            </div>

            <div className="glass-card edu-card">
              <div className="edu-year">Secondary & Senior Secondary</div>
              <h4 className="edu-school">Jawahar Navodaya Vidyalaya (JNV)</h4>
              <p className="edu-degree">Puducherry & Warangal, India</p>
              <p className="edu-detail">Class XII CBSE: 80% | Class X CBSE: 95%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
