import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    company: 'Microland',
    role: 'Tech Intern — Platforms Team',
    period: 'May 2026 – Present',
    type: 'Bangalore, India',
    current: true,
    highlights: [
      {
        text: 'Designed and built from scratch an LLM-powered IT Service Engineer CLI in Rust to autonomously diagnose and remediate Azure Kubernetes (AKS) infrastructure issues with a 3-layer execution permission system.',
        stat: 'Rust & Azure AKS',
      },
      {
        text: 'Architected an Enterprise Graph RAG platform tracing alert propagation across 60+ microservices using Google Gemini 2.0 Flash and a Neo4j topology graph for root-cause analysis.',
        stat: 'Graph RAG & Neo4j',
      },
      {
        text: 'Re-engineered enterprise alert routing from legacy CRON to an Observe observability webhook, implementing inter-instance relation logic to prevent ticket flooding and enable real-time telemetry.',
        stat: 'Observe Webhooks',
      },
      {
        text: 'Built multi-tenant SSH multiplexing and context-aware remediation engine running autonomously on live Azure Kubernetes clusters.',
        stat: 'Cloud Native Systems',
      },
    ],
    stack: ['Rust', 'Azure AKS', 'Neo4j', 'Gemini 2.0 Flash', 'Kubernetes', 'SSH Multiplexing', 'Observe'],
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
            Production cloud-native systems engineering, autonomous infrastructure CLI tools, and Graph RAG platforms.
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
