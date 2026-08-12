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
        "Engineered a 3-layer execution permission system (Hard Rails, dynamic command classification, prompt approvals) and persistent SSH ControlMaster multiplexing for low-latency troubleshooting.",
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
    <section id="experience" className="experience-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-badge">Professional Path</span>
        <h2 className="section-title">Work Experience</h2>
      </motion.div>

      <div className="experience-container">
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-card-wrapper"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="timeline-node">
                <FaBriefcase size={14} />
              </div>

              <div className="glass-card exp-card">
                <div className="exp-header">
                  <div>
                    <span className="exp-type">{exp.type}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>

                  <div className="exp-meta">
                    <div className="meta-item">
                      <FaCalendarAlt size={13} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt size={13} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="exp-bullets">
                  {exp.highlights.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>

                <div className="exp-footer">
                  <div className="exp-tags">
                    {exp.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tag-badge">{tag}</span>
                    ))}
                  </div>

                  {(exp.companyUrl || exp.demoUrl) && (
                    <div className="exp-action-links">
                      {exp.companyUrl && (
                        <a href={exp.companyUrl} target="_blank" rel="noreferrer" className="exp-link">
                          <FaExternalLinkAlt size={12} />
                          <span>Website</span>
                        </a>
                      )}
                      {exp.demoUrl && (
                        <a href={exp.demoUrl} target="_blank" rel="noreferrer" className="exp-link primary-link">
                          <FaPlay size={12} />
                          <span>Demo Video</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
