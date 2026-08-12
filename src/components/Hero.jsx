import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight, FaTerminal } from 'react-icons/fa';
import { SiRust, SiReact, SiKubernetes, SiSpringboot, SiFlutter } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  const roles = [
    "Tech Intern @ Microland (Platforms Team)",
    "B.Tech in ECE @ IIIT Hyderabad",
    "Rust & Systems Programmer",
    "Full-Stack MERN & Spring Boot Developer"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Column: Headline & Content */}
        <motion.div
          className="hero-text-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Status Badge */}
          <div className="availability-badge">
            <span className="status-dot"></span>
            <span>Open for Software & Systems Engineering Roles</span>
          </div>

          <h1 className="hero-greeting">
            Hi, I'm <span className="highlight-name">Nethavath Praveen</span>
          </h1>

          <div className="typewriter-container">
            <span className="typewriter-text">{displayText}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-bio">
            Undergraduate at <strong>IIIT Hyderabad</strong> specializing in high-performance distributed systems, 
            cloud platforms, and modern full-stack web applications. Passionate about building robust microservices, 
            LLM-powered automation tooling, and scalable software solutions.
          </p>

          {/* Quick Metrics Bar */}
          <div className="hero-metrics">
            <div className="metric-pill">
              <span className="metric-val">Top 50</span>
              <span className="metric-lbl">Google BigCode '26</span>
            </div>
            <div className="metric-pill">
              <span className="metric-val">AIR 3137</span>
              <span className="metric-lbl">JEE Mains</span>
            </div>
            <div className="metric-pill">
              <span className="metric-val">AIR 4894</span>
              <span className="metric-lbl">JEE Advanced</span>
            </div>
            <div className="metric-pill">
              <span className="metric-val">TA @ IIITH</span>
              <span className="metric-lbl">Prob. & Real Analysis</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <FaArrowRight size={14} />
            </a>
            <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaFileDownload size={15} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Connections */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="social-icons">
              <a href="https://github.com/Praveen-ing" target="_blank" rel="noreferrer" title="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nethavath-praveen-0a7a84287/" target="_blank" rel="noreferrer" title="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:praveeeening@gmail.com" title="Email Direct">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Code Terminal / Visual Graphic */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="terminal-card glass-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="terminal-title">
                <FaTerminal size={12} />
                <span>praveen@iiith-dev:~</span>
              </div>
            </div>

            <div className="terminal-body">
              <p className="term-line"><span className="term-prompt">$</span> rustc --version</p>
              <p className="term-out">rustc 1.78.0 (edition 2021)</p>
              
              <p className="term-line"><span className="term-prompt">$</span> cat profile.json</p>
              <pre className="term-code">
{`{
  "name": "Nethavath Praveen",
  "college": "IIIT Hyderabad",
  "degree": "B.Tech in ECE",
  "internship": "Microland (Platforms Team)",
  "skills": ["Rust", "Java", "C++", "React", "K8s"],
  "status": "Ready to innovate"
}`}
              </pre>
              
              <p className="term-line"><span className="term-prompt">$</span> ./run_diagnostics.sh --target=aks</p>
              <p className="term-out term-success">✔ LLM Agent Ready. Graph RAG initialized.</p>
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-tech-badge badge-1">
              <SiRust color="#f74c00" size={18} />
              <span>Rust Systems</span>
            </div>
            <div className="floating-tech-badge badge-2">
              <SiReact color="#61dafb" size={18} />
              <span>React.js</span>
            </div>
            <div className="floating-tech-badge badge-3">
              <SiKubernetes color="#326ce5" size={18} />
              <span>Kubernetes</span>
            </div>
            <div className="floating-tech-badge badge-4">
              <SiSpringboot color="#6db33f" size={18} />
              <span>Spring Boot</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
