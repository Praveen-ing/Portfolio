import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import { FiCheckCircle, FiArrowUpRight } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    company: 'NVIRI Solutions',
    role: 'Software Intern (Order Management System)',
    period: 'Jan 2025 – Apr 2025',
    type: 'Remote',
    highlights: [
      {
        text: 'Improved data retrieval efficiency by 15% by developing scalable backend microservices using Java Spring Boot and designing a PostgreSQL database with 35+ tables.',
        stat: '+15% Retrieval Speed',
      },
      {
        text: 'Increased merchant productivity by 25% by building a cross-platform application in Flutter that consumed internal RESTful APIs for seamless order management.',
        stat: '+25% Merchant Productivity',
      },
      {
        text: 'Enhanced code maintainability by applying Clean Architecture principles, defining clear service boundaries and interfaces.',
        stat: 'Clean Architecture',
      },
      {
        text: 'Owned end-to-end features through stakeholder collaboration, leading to a 10% faster feature delivery cycle.',
        stat: '+10% Faster Delivery',
      },
    ],
    stack: ['Java Spring Boot', 'PostgreSQL (35+ Tables)', 'Flutter', 'RESTful APIs', 'Clean Architecture'],
    demoUrl: 'https://iiithydstudents-my.sharepoint.com/:v:/g/personal/nethavath_praveen_students_iiit_ac_in/Ech3gzr5eS9PmzxFALb9vncBz1bBL0ranmY5ymC82yUYgw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=7I5yjl',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section tech-grid-bg">
      <div className="container">
        <div className="section-header">
          <span className="section-label">02 // Engineering Experience</span>
          <h2 className="section-title">
            Industry <span className="highlight">Impact</span> & Internship
          </h2>
          <p className="section-desc">
            Measurable software engineering deliverables in production backend microservices and mobile apps.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="experience-card tech-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <h4 className="exp-company">{exp.company}</h4>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">
                    <FaCalendarAlt /> {exp.period}
                  </span>
                  <span className="exp-type">{exp.type}</span>
                </div>
              </div>

              <div className="exp-highlights-grid">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="exp-highlight-card">
                    <div className="stat-pill">{h.stat}</div>
                    <p className="highlight-text">{h.text}</p>
                  </div>
                ))}
              </div>

              <div className="exp-footer">
                <div className="exp-stack">
                  {exp.stack.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                {exp.demoUrl && (
                  <a
                    href={exp.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary exp-demo-btn"
                  >
                    <FaPlay style={{ fontSize: '0.8rem' }} /> Company Demo Video <FiArrowUpRight />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
