import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiStar, FiCheckCircle } from 'react-icons/fi';
import './Achievements.css';

const honors = [
  {
    badge: 'AIR 2107',
    title: 'JEE Mains Rank',
    desc: 'Secured All India Rank 2107 in JEE Mains among over 1.2+ Million candidates nationwide.',
    icon: <FiAward />,
    highlight: true,
  },
  {
    badge: 'AIR 3894',
    title: 'JEE Advanced Rank',
    desc: 'Achieved AIR 3894 in JEE Advanced, qualifying for top Indian Institutes of Technology (IITs).',
    icon: <FiAward />,
    highlight: true,
  },
  {
    badge: 'Leader',
    title: 'Elected NSS Coordinator',
    desc: 'Elected as NSS Coordinator at IIIT Hyderabad, leading and directing 1,500+ student volunteers.',
    icon: <FiUsers />,
    highlight: true,
  },
  {
    badge: 'Scholar',
    title: 'FFE Scholar',
    desc: 'Awarded prestigious scholarship by Foundation for Excellence (FFE) for academic brilliance.',
    icon: <FiStar />,
  },
  {
    badge: 'National Cadet',
    title: "NCC 'A' Certificate",
    desc: "Earned NCC 'A' Certificate, developing discipline, teamwork, and leadership resilience.",
    icon: <FiCheckCircle />,
  },
  {
    badge: 'Organizing',
    title: 'Felicity Fest Marketing Team',
    desc: 'Key member of marketing team for Felicity, IIIT Hyderabad annual flagship cultural fest.',
    icon: <FiStar />,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section tech-dot-bg">
      <div className="container">
        <div className="section-header">
          <span className="section-label">05 // Ranks & Leadership</span>
          <h2 className="section-title">
            Honors & <span className="highlight">Achievements</span>
          </h2>
          <p className="section-desc">
            Competitive examination milestones, academic scholarships, and campus leadership roles.
          </p>
        </div>

        <div className="achievements-grid">
          {honors.map((h, i) => (
            <motion.div
              key={i}
              className={`ach-card tech-card ${h.highlight ? 'ach-card--highlight' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="ach-top">
                <div className="ach-icon-box">{h.icon}</div>
                <span className="ach-badge">{h.badge}</span>
              </div>
              <h3 className="ach-card-title">{h.title}</h3>
              <p className="ach-card-desc">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
