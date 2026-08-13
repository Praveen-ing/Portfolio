import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiUsers, FiLayers } from 'react-icons/fi';
import './About.css';

const education = [
  {
    degree: 'B.Tech in Electronics & Communication Engineering (ECE)',
    institution: 'International Institute of Information Technology, Hyderabad (IIITH)',
    period: 'Aug 2023 – May 2027 (Expected)',
    detail: 'Full-Stack Web Development, Data Structures, Systems Engineering',
    current: true,
  },
  {
    degree: 'Secondary & Senior Secondary Education',
    institution: 'Jawahar Navodaya Vidyalaya (JNV), Warangal & Puducherry',
    period: 'Completed',
    detail: 'Top Academic Standing & Foundation in Science & Mathematics',
  },
];

const pillars = [
  {
    icon: <FiLayers />,
    title: 'Full-Stack Architecture',
    desc: 'Designing end-to-end applications with React, Node.js, Spring Boot, and PostgreSQL with robust REST APIs.',
  },
  {
    icon: <FiBookOpen />,
    title: 'Clean Engineering',
    desc: 'Applying Clean Architecture principles, domain boundary isolation, and strong attention to interface design.',
  },
  {
    icon: <FiAward />,
    title: 'Problem-Solving Mindset',
    desc: 'JEE Mains AIR 2107 & JEE Advanced AIR 3894. Proven track record in algorithmic problem solving.',
  },
  {
    icon: <FiUsers />,
    title: 'Leadership & Impact',
    desc: 'Elected NSS Coordinator directing 1,500+ student volunteers in university-wide social impact drives.',
  },
];

export default function About() {
  return (
    <section id="about" className="about-section tech-dot-bg">
      <div className="container">
        <div className="about-layout">
          {/* Left Side text */}
          <motion.div
            className="about-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">01 // About Me</span>
            <h2 className="section-title">
              Engineering with <span className="highlight">Precision</span> & Scale.
            </h2>
            <div className="about-body">
              <p>
                I'm <strong>Nethavath Praveen</strong>, a B.Tech undergraduate at <strong>IIIT Hyderabad (IIITH)</strong> with a passion for building robust full-stack software and high-performance backend systems.
              </p>
              <p>
                During my software engineering internship at <strong>NVIRI Solutions</strong>, I engineered backend microservices in <strong>Java Spring Boot</strong> with a 35+ table PostgreSQL schema, boosting data retrieval efficiency by 15%, and built a cross-platform <strong>Flutter</strong> mobile client that boosted merchant productivity by 25%.
              </p>
              <p>
                Whether architecting full-stack marketplace applications like <strong>CampusMart @ IIITH</strong> or real-time payment platforms like <strong>FooDel</strong> processing 1,000+ transactions via Stripe, I prioritize modularity, performance, and clean maintainable code.
              </p>
            </div>

            <div className="pillars-grid">
              {pillars.map((p, i) => (
                <div key={i} className="pillar-card">
                  <div className="pillar-icon">{p.icon}</div>
                  <h4 className="pillar-title">{p.title}</h4>
                  <p className="pillar-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Education */}
          <motion.div
            className="about-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="edu-card tech-card">
              <h3 className="edu-heading">Educational Journey</h3>
              <div className="edu-list">
                {education.map((e, i) => (
                  <div key={i} className="edu-item">
                    <div className="edu-header">
                      <h4 className="edu-degree">{e.degree}</h4>
                      {e.current && <span className="edu-badge">Enrolled</span>}
                    </div>
                    <div className="edu-inst">{e.institution}</div>
                    <div className="edu-period">{e.period}</div>
                    <p className="edu-detail">{e.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
