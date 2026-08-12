import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaBriefcase, FaCode, FaTools, FaTrophy, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'experience', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home', icon: <FaHome size={15} /> },
    { name: 'Projects', href: '#projects', id: 'projects', icon: <FaCode size={15} /> },
    { name: 'Experience', href: '#experience', id: 'experience', icon: <FaBriefcase size={15} /> },
    { name: 'Tools', href: '#skills', id: 'skills', icon: <FaTools size={15} /> },
    { name: 'Honors', href: '#achievements', id: 'achievements', icon: <FaTrophy size={15} /> },
    { name: 'Contact', href: '#contact', id: 'contact', icon: <FaEnvelope size={15} /> }
  ];

  return (
    <motion.div
      className="sawad-navbar-wrapper"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="sawad-navbar-pill">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`sawad-nav-item ${activeSection === item.id ? 'active' : ''}`}
            title={item.name}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.name}</span>
          </a>
        ))}
      </nav>
    </motion.div>
  );
};

export default Navbar;
