import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "Microland",
      role: "Tech Intern — Platforms Team",
      location: "Bangalore, India",
      period: "May 2026 – Present",
      type: "Internship",
      highlights: [
        "Designed and built from scratch a specialized LLM-powered IT Service Engineer CLI in Rust to autonomously diagnose and remediate Azure Kubernetes (AKS) infrastructure issues.",
        "Engineered a 3-layer execution permission system (Hard Rails, dynamic command classification, prompt approvals) and persistent SSH ControlMaster multiplexing for low-latency command execution.",
        "Architected an Enterprise Graph RAG platform to trace alert propagation across 60+ microservices for root-cause analysis, integrating Google Gemini 2.0 Flash & Neo4j topology graph.",
        "Re-engineered enterprise alert routing by transitioning legacy CRON jobs to an Observe observability webhook, implementing inter-instance relation logic to prevent ticket flooding."
      ],
      tags: ["Rust", "Azure AKS", "Neo4j", "Gemini 2.0 Flash", "Observe Webhooks", "Kubernetes", "Linux SSH"]
    },
    {
      company: "NVIRI Solutions",
      role: "Software Intern",
      location: "Remote",
      period: "Jan 2025 – Apr 2025",
      type: "Internship",
      highlights: [
        "Improved data retrieval efficiency by 15% by developing scalable backend microservices using Java Spring Boot and designing a PostgreSQL database with 35+ tables.",
        "Increased merchant productivity by 25% by building a cross-platform application in Flutter consuming internal RESTful APIs for seamless order management.",
        "Applied Clean Architecture principles to enhance code maintainability and defined explicit service boundaries.",
        "Owned features end-to-end leading to a 10% faster feature delivery cycle through effective stakeholder collaboration."
      ],
      companyUrl: "https://nviri.com/",
      demoUrl: "https://iiithydstudents-my.sharepoint.com/:v:/g/personal/nethavath_praveen_students_iiit_ac_in/Ech3gzr5eS9PmzxFALb9vncBz1bBL0ranmY5ymC82yUYgw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=7I5yjl",
      tags: ["Java Spring Boot", "PostgreSQL", "Flutter", "REST APIs", "Clean Architecture"]
    }
  ];

  return (
    <section id="experience" className="sawad-experience-section">
      <div className="sawad-section-tag">💼 WORK EXPERIENCE</div>
      <h2 className="sawad-section-title">Professional Path & Experience</h2>

      <div className="sawad-experience-list">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="sawad-card sawad-exp-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="sawad-exp-header">
              <div>
                <span className="sawad-tag type-tag">{exp.type}</span>
                <h3 className="sawad-exp-role">{exp.role}</h3>
                <h4 className="sawad-exp-company">{exp.company}</h4>
              </div>

              <div className="sawad-exp-meta">
                <div className="meta-pill">
                  <FaCalendarAlt size={12} />
                  <span>{exp.period}</span>
                </div>
                <div className="meta-pill">
                  <FaMapMarkerAlt size={12} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <ul className="sawad-exp-bullets">
              {exp.highlights.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>

            <div className="sawad-exp-footer">
              <div className="sawad-exp-tags">
                {exp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="sawad-tag">{tag}</span>
                ))}
              </div>

              {(exp.companyUrl || exp.demoUrl) && (
                <div className="sawad-exp-actions">
                  {exp.companyUrl && (
                    <a href={exp.companyUrl} target="_blank" rel="noreferrer" className="sawad-exp-link">
                      <FaExternalLinkAlt size={12} />
                      <span>Company</span>
                    </a>
                  )}
                  {exp.demoUrl && (
                    <a href={exp.demoUrl} target="_blank" rel="noreferrer" className="sawad-exp-link highlight-link">
                      <FaPlay size={12} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
