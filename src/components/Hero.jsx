import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FiTerminal, FiArrowRight, FiCheckCircle, FiCode } from 'react-icons/fi';
import Terminal from './Terminal';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const roles = [
  'Full-Stack Software Engineer',
  'Backend & Microservices Specialist',
  'Software Intern @ NVIRI Solutions',
  'B.Tech Undergrad @ IIIT Hyderabad',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [termOpen, setTermOpen] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 35 : 70;

    const t = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1800);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="hero" className="hero tech-grid-bg">
      {/* Background ambient lighting */}
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Pill */}
          <motion.div variants={childVariants} className="hero__pill">
            <span className="hero__pulse" />
            <span className="pill-text">Open to Engineering Roles & Internships</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 variants={childVariants} className="hero__title">
            Crafting Scalable <span className="highlight">Full-Stack Platforms</span> & Systems.
          </motion.h1>

          {/* Typing Ticker */}
          <motion.div variants={childVariants} className="hero__role-box">
            <span className="role-prefix">I am a </span>
            <span className="role-text">{text}<span className="cursor">|</span></span>
          </motion.div>

          {/* Bio */}
          <motion.p variants={childVariants} className="hero__bio">
            Undergraduate at <strong>IIIT Hyderabad (ECE '27)</strong> specializing in full-stack architecture, 
            Spring Boot microservices, high-volume database engineering (35+ schema tables), and production web apps. 
            Focused on robust REST API design, real-time transaction processing, and modular Clean Architecture.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={childVariants} className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View Featured Work <FiArrowRight />
            </a>
            <button className="btn btn-secondary" onClick={() => setTermOpen(true)}>
              <FiTerminal /> Launch CLI Console
            </button>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div variants={childVariants} className="hero__metrics">
            <div className="metric-card">
              <span className="metric-num">AIR 2107</span>
              <span className="metric-label">JEE Mains Rank</span>
            </div>
            <div className="metric-card">
              <span className="metric-num">1,000+</span>
              <span className="metric-label">Stripe Transactions</span>
            </div>
            <div className="metric-card">
              <span className="metric-num">35+</span>
              <span className="metric-label">PostgreSQL Tables</span>
            </div>
            <div className="metric-card">
              <span className="metric-num">1,500+</span>
              <span className="metric-label">NSS Volunteers Led</span>
            </div>
          </motion.div>

          {/* Socials Bar */}
          <motion.div variants={childVariants} className="hero__socials">
            <a href="https://github.com/Praveen-ing" target="_blank" rel="noreferrer" className="social-pill">
              <FaGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/nethavath-praveen-0a7a84287" target="_blank" rel="noreferrer" className="social-pill">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:praveennayak045@gmail.com" className="social-pill">
              <FaEnvelope /> praveennayak045@gmail.com
            </a>
            <a href="tel:9391206849" className="social-pill">
              <FaPhone /> +91 9391206849
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Picture Card & Holographic Ring */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="profile-frame-wrapper">
            <div className="profile-frame">
              <img
                src={profileImg}
                alt="Nethavath Praveen"
                className="profile-img"
              />
              <div className="profile-overlay-gradient" />
            </div>

            {/* Orbiting Tech Floating Badges */}
            <motion.div
              className="orbit-badge orbit-badge--1"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <FiCheckCircle className="badge-icon" />
              <div>
                <span className="badge-title">IIIT Hyderabad</span>
                <span className="badge-sub">B.Tech 2023–2027</span>
              </div>
            </motion.div>

            <motion.div
              className="orbit-badge orbit-badge--2"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
            >
              <FiCode className="badge-icon badge-icon--alt" />
              <div>
                <span className="badge-title">NVIRI Solutions</span>
                <span className="badge-sub">Software Intern</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Code Preview Drawer */}
          <div className="code-snippet-box">
            <div className="snippet-header">
              <span className="snippet-dot dot-r" />
              <span className="snippet-dot dot-y" />
              <span className="snippet-dot dot-g" />
              <span className="snippet-file">DeveloperProfile.java</span>
            </div>
            <pre className="snippet-code"><code>{`@RestController
@RequestMapping("/api/v1/praveen")
public class EngineeringProfile {

    @GetMapping("/skills")
    public StackOverview getStack() {
        return StackOverview.builder()
            .primary("Spring Boot", "React.js", "Java", "Python")
            .database("PostgreSQL", "MongoDB", "MySQL")
            .architecture("Clean Microservices", "RESTful APIs")
            .achievement("JEE Mains AIR 2107")
            .build();
    }
}`}</code></pre>
          </div>
        </motion.div>
      </div>

      <Terminal isOpen={termOpen} onClose={() => setTermOpen(false)} />
    </section>
  );
}
