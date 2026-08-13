import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiLayers, FiShield, FiTrendingUp, FiServer } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 'foodel',
    title: 'FooDel — Full-Stack Food Delivery Platform',
    category: 'Full-Stack',
    metrics: '1,000+ Transactions · 99.9% Uptime',
    desc: 'Full-stack food delivery application built using the MERN stack with Stripe API integration processing over 1,000+ simulated transactions with 99.9% accuracy. Features JWT + bcrypt authentication, cart management, real-time order status tracking, and admin dashboard (+40% data efficiency).',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Stripe API', 'JWT', 'REST API'],
    github: 'https://github.com/Praveen-ing/FooDel',
    featured: true,
    highlights: ['Stripe payment gateway integration', 'Real-time order tracking', '40% improved admin efficiency'],
  },
  {
    id: 'campusmart',
    title: 'CampusMart @ IIITH — Student Marketplace',
    category: 'Full-Stack',
    metrics: '100+ Active Users · 200+ Transactions',
    desc: 'Architected a full-stack MERN marketplace for IIIT Hyderabad students that acquired 100+ active users in its first month and facilitated over 200+ student-to-student transactions. Built 15+ secured RESTful API endpoints for user, cart, and product management.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'RESTful API'],
    github: 'https://github.com/Praveen-ing/CampusMart',
    featured: true,
    highlights: ['15+ Secure REST endpoints', 'Category filtering & seller history', 'Facilitated 200+ deals'],
  },
  {
    id: 'codecrux',
    title: 'CodeCrux — Competitive Programming Hub',
    category: 'Full-Stack',
    metrics: '+30% User Engagement · +15% DAU',
    desc: 'Competitive programming practice portal built with the MERN stack. Integrated Clist.by API to track global contests across platforms and added Google Calendar synchronization for contest reminders. Added daily challenges and tag filtering.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Clist.by API', 'Google Calendar API'],
    github: 'https://github.com/Praveen-ing/CodeCrux',
    featured: true,
    highlights: ['Google Calendar API sync', 'Global contest tracking', 'Personalized daily challenges'],
  },
  {
    id: 'microland-cli',
    title: 'LLM Autonomous IT Engineer CLI @ Microland',
    category: 'Systems & Backend',
    metrics: 'Production Azure AKS · Rust Engine',
    desc: 'Production-grade Rust CLI built at Microland that autonomously diagnoses and remediates Azure Kubernetes infrastructure. Features a 3-layer command permission system, multi-tenant SSH multiplexing, and context-aware LLM remediation.',
    stack: ['Rust', 'Azure AKS', 'Kubernetes', 'LLM', 'Neo4j', 'Gemini 2.0 Flash'],
    featured: true,
    highlights: ['3-Layer permission execution', 'Graph RAG alert propagation', 'Live Azure AKS orchestration'],
  },
  {
    id: 'c-shell',
    title: 'Unix-like System Shell in C',
    category: 'Systems & Backend',
    metrics: 'Low-Level Kernel Execution',
    desc: 'UNIX shell implementation written in C supporting process creation, piping, I/O redirection, signal handling, and job control background processing.',
    stack: ['C', 'Linux', 'Systems Programming', 'POSIX'],
    github: 'https://github.com/Praveen-ing/c-shell',
    highlights: ['Piping & I/O Redirection', 'Signal handling & job control'],
  },
  {
    id: 'social-db',
    title: 'Social Media Relational Database',
    category: 'Systems & Backend',
    metrics: '20+ Normalized ER Tables',
    desc: 'Relational database architecture for a social platform featuring 20+ normalized tables, stored procedures, indexing strategy, and multi-join analytical queries.',
    stack: ['PostgreSQL', 'MySQL', 'SQL', 'ER Design'],
    github: 'https://github.com/Praveen-ing/Social-Media-DB',
    highlights: ['20+ Normalized tables', 'Complex indexing & views'],
  },
];

const filterCategories = ['All', 'Full-Stack', 'Systems & Backend'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section tech-dot-bg">
      <div className="container">
        <div className="section-header">
          <span className="section-label">03 // Featured Projects & Platforms</span>
          <h2 className="section-title">
            Engineered for <span className="highlight">Scale</span> & Performance
          </h2>
          <p className="section-desc">
            Production full-stack applications, payment gateways, microservice architectures, and systems programming.
          </p>

          <div className="proj-filter-bar">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                className={`proj-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filteredProjects.map((p) => (
              <motion.div
                key={p.id}
                className={`project-card tech-card ${p.featured ? 'project-card--featured' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-card-header">
                  <div className="project-category-badge">{p.category}</div>
                  <div className="project-actions">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-icon-link"
                        title="View Source on GitHub"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{p.title}</h3>
                
                {p.metrics && (
                  <div className="project-metrics-pill">
                    <FiTrendingUp className="metrics-icon" />
                    <span>{p.metrics}</span>
                  </div>
                )}

                <p className="project-desc">{p.desc}</p>

                <div className="project-highlights">
                  {p.highlights.map((h, i) => (
                    <div key={i} className="highlight-item">
                      <span className="highlight-bullet">•</span> {h}
                    </div>
                  ))}
                </div>

                <div className="project-stack">
                  {p.stack.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
