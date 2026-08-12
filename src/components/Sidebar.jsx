import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaPaperPlane, FaCodeBranch } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sawad-sidebar-wrapper">
      <motion.div
        className="sawad-sidebar-card sawad-card"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Visual Header */}
        <div className="profile-image-container">
          <div className="profile-backdrop-glow"></div>
          <div className="avatar-frame">
            <div className="avatar-placeholder">
              <FaCodeBranch size={42} className="avatar-icon" />
            </div>
          </div>
        </div>

        {/* Profile Identity Details */}
        <div className="profile-details">
          <h1 className="profile-name">Nethavath Praveen</h1>
          <p className="profile-tagline">
            Undergraduate at <strong>IIIT Hyderabad</strong> & Tech Intern at <strong>Microland (Platforms Team)</strong>
          </p>

          <div className="profile-status-pill">
            <span className="status-indicator-dot"></span>
            <span>Open for Engineering Roles</span>
          </div>

          <p className="profile-bio-summary">
            Specializing in high-performance Rust/C systems, Azure AKS remediation agents, and modern full-stack web applications.
          </p>
        </div>

        {/* Social Icons Row */}
        <div className="sidebar-socials">
          <a href="https://github.com/Praveen-ing" target="_blank" rel="noreferrer" title="GitHub" className="social-box">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/nethavath-praveen-0a7a84287/" target="_blank" rel="noreferrer" title="LinkedIn" className="social-box">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:praveeeening@gmail.com" title="Direct Email" className="social-box">
            <FaEnvelope size={18} />
          </a>
        </div>

        {/* Action CTAs */}
        <div className="sidebar-actions">
          <a href="#contact" className="sawad-btn sawad-btn-primary full-btn">
            <FaPaperPlane size={14} />
            <span>Contact Me</span>
          </a>
          <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="sawad-btn sawad-btn-secondary full-btn">
            <FaFileDownload size={14} />
            <span>Download CV</span>
          </a>
        </div>

        {/* Footer Meta */}
        <div className="sidebar-footer-meta">
          <span>Based in Hyderabad, India</span>
          <span>© {new Date().getFullYear()} Praveen.dev</span>
        </div>
      </motion.div>
    </aside>
  );
};

export default Sidebar;
