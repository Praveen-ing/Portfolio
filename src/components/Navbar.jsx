import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTerminal, FiDownload, FiMenu, FiX, FiActivity } from 'react-icons/fi';
import Terminal from './Terminal';
import './Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [termOpen, setTermOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar__inner">
          {/* Brand */}
          <a href="#hero" className="navbar__brand">
            <div className="brand__logo">P</div>
            <div className="brand__text">
              <span className="brand__name">Praveen N.</span>
              <span className="brand__status">
                <span className="status__dot" /> IIIT HYDERABAD
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="navbar__links">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="navbar__link">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="navbar__right">
            <button
              className="navbar__term-btn"
              onClick={() => setTermOpen(true)}
              title="Launch PraveenOS CLI Terminal"
            >
              <FiTerminal className="term-btn-icon" />
              <span className="term-btn-text">Terminal</span>
            </button>

            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary navbar__cta"
            >
              <FiDownload /> Resume
            </a>

            <button
              className="navbar__burger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="navbar__mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="mobile__link"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <div className="mobile__actions">
                <button
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => {
                    setMenuOpen(false);
                    setTermOpen(true);
                  }}
                >
                  <FiTerminal /> Open Terminal CLI
                </button>
                <a
                  href="./resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => setMenuOpen(false)}
                >
                  <FiDownload /> Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Terminal Modal */}
      <Terminal isOpen={termOpen} onClose={() => setTermOpen(false)} />
    </>
  );
}
