import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLayerGroup, FaStar } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projectList = [
    {
      title: "Distributed Network File System (NFS)",
      category: "Systems & Cloud",
      desc: "Multithreaded distributed file system built from scratch supporting concurrent client-server communication using TCP/IP sockets, LRU caching, Trie indexing (35% faster lookup), and replication for high availability.",
      github: "https://github.com/Praveen-ing/NFS",
      demo: null,
      featured: true,
      tags: ["C", "TCP Sockets", "POSIX Threads", "LRU Cache", "Trie"]
    },
    {
      title: "CF-Lens — Codeforces Visualizer",
      category: "Full-Stack & Web",
      desc: "Performance analysis platform visualizing Codeforces statistics for 1,000+ users. Integrated Codeforces API with Python-Flask backend delivering 10+ real-time D3.js charts with <200ms latency.",
      github: "https://github.com/Praveen-ing/CF-Lens",
      demo: "https://praveen-ing.github.io/CF-Lens/",
      featured: true,
      tags: ["React", "D3.js", "Python Flask", "Codeforces API"]
    },
    {
      title: "Unix-like C Shell",
      category: "Systems & Cloud",
      desc: "Fully functional Unix shell built in C supporting command piping, background job execution, I/O redirection, system calls (fork, exec, wait), and robust signal management (SIGINT, SIGCHLD).",
      github: "https://github.com/Praveen-ing/C-SHELL",
      demo: null,
      featured: false,
      tags: ["C", "Linux Systems", "POSIX API", "Signal Handling"]
    },
    {
      title: "FooDel — Food Delivery Platform",
      category: "Full-Stack & Web",
      desc: "Full-stack MERN food delivery platform processing 1,000+ simulated transactions with 99.9% accuracy via Stripe API. Features JWT + bcrypt authentication, dynamic cart, and administrative management.",
      github: "https://github.com/Praveen-ing/FooDel-Project-Repo",
      demo: null,
      featured: true,
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"]
    },
    {
      title: "CampusMart @ IIITH",
      category: "Full-Stack & Web",
      desc: "Student-to-student marketplace at IIIT Hyderabad acquiring 100+ active users and facilitating 200+ transactions. 15+ RESTful endpoints secured with JWT authentication.",
      github: "https://github.com/Praveen-ing/CampusMart-IIITH",
      demo: "https://campusmart-iiith-1.onrender.com/",
      featured: false,
      tags: ["React", "Express", "MongoDB", "JWT Auth"]
    },
    {
      title: "CAPTCHA Breaker (CNN-LSTM)",
      category: "AI & ML",
      desc: "Deep learning CAPTCHA solver combining CNN-LSTM neural architecture with CTC loss and OpenCV text preprocessing, plus automated synthetic CAPTCHA data generator.",
      github: "https://github.com/Praveen-ing/CrackTheCAPTCHA",
      demo: null,
      featured: false,
      tags: ["Python", "PyTorch", "OpenCV", "CNN-LSTM"]
    },
    {
      title: "CodeCrux — CP Portal",
      category: "Full-Stack & Web",
      desc: "Competitive programming portal tracking global contests via Clist.by API with Google Calendar sync, tag-based filtering, and contest reminders boosting daily active users.",
      github: "https://github.com/Praveen-ing/CodeCrux",
      demo: "https://codecrux-4tw1.onrender.com/",
      featured: false,
      tags: ["MongoDB", "Express", "React", "Clist API"]
    },
    {
      title: "Social Media DB Engine",
      category: "Systems & Cloud",
      desc: "Normalized relational database schema and engine for social media platforms managing hierarchical comments and follower networks with PyMySQL transaction management.",
      github: "https://github.com/Praveen-ing/Social-Media",
      demo: null,
      featured: false,
      tags: ["Python", "MySQL", "PyMySQL", "Schema Design"]
    },
    {
      title: "OptiLend — Smart Loan AI",
      category: "AI & ML",
      desc: "AI web platform predicting loan eligibility with 95% accuracy using Random Forest and explainable AI, featuring 3D interactive UI.",
      github: "https://github.com/Praveen-ing/OptiLend",
      demo: null,
      featured: false,
      tags: ["Next.js", "Python", "ML", "Three.js"]
    },
    {
      title: "EmpathEcho — Conversational AI",
      category: "AI & ML",
      desc: "AI-powered companion combining OpenAI Whisper STT, HuggingFace Transformer emotion detection, and Google Gemini Pro for empathetic conversations.",
      github: "https://github.com/vidhhya1/Conversational-Emotion-Recognizer",
      demo: null,
      featured: false,
      tags: ["Python", "Flask", "Whisper API", "Gemini Pro"]
    }
  ];

  const categories = ["All", "Systems & Cloud", "Full-Stack & Web", "AI & ML"];

  const filteredProjects = activeCategory === "All" 
    ? projectList 
    : projectList.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-badge">Crafted Solutions</span>
        <h2 className="section-title">Featured Projects</h2>
      </motion.div>

      {/* Category Filter Pills */}
      <div className="filter-container">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Matrix */}
      <motion.div layout className="projects-grid">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card project-card"
            >
              {project.featured && (
                <div className="featured-badge">
                  <FaStar size={10} />
                  <span>Featured</span>
                </div>
              )}

              <div className="project-top">
                <div className="project-icon-wrapper">
                  <FaCode size={18} />
                </div>

                <div className="project-external-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" title="GitHub Code Repository" className="proj-icon-link">
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" title="Live Application Demo" className="proj-icon-link">
                      <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag-badge">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
