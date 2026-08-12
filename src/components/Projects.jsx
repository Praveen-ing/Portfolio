import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaTerminal, FaDatabase } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projectList = [
    {
      title: "Distributed Network File System (NFS)",
      category: "Systems & Cloud",
      desc: "Multithreaded distributed file system built from scratch in C supporting concurrent client-server communication using TCP/IP sockets, LRU caching, Trie indexing (35% faster lookup), and fault-tolerant file replication.",
      github: "https://github.com/Praveen-ing/NFS",
      demo: null,
      featured: true,
      icon: <FaTerminal size={22} className="proj-type-icon" />,
      tags: ["C", "TCP Sockets", "POSIX Threads", "LRU Cache", "Trie"]
    },
    {
      title: "CF-Lens — Codeforces Visualizer",
      category: "Full-Stack & Web",
      desc: "Web platform analyzing and visualizing Codeforces competitive programming performance for 1,000+ users. Integrated Codeforces API with Python-Flask backend delivering 10+ real-time D3.js charts (<200ms latency).",
      github: "https://github.com/Praveen-ing/CF-Lens",
      demo: "https://praveen-ing.github.io/CF-Lens/",
      featured: true,
      icon: <FaCode size={22} className="proj-type-icon" />,
      tags: ["React", "D3.js", "Python Flask", "Codeforces API"]
    },
    {
      title: "Unix-like C Shell",
      category: "Systems & Cloud",
      desc: "Fully functional Unix shell built in C supporting command piping, background job execution, I/O redirection, system calls (fork, exec, wait), and signal management (SIGINT, SIGCHLD).",
      github: "https://github.com/Praveen-ing/C-SHELL",
      demo: null,
      featured: false,
      icon: <FaTerminal size={22} className="proj-type-icon" />,
      tags: ["C", "Linux Systems", "POSIX API", "Signal Handling"]
    },
    {
      title: "FooDel — Food Delivery Platform",
      category: "Full-Stack & Web",
      desc: "Full-stack MERN food delivery platform processing 1,000+ simulated transactions with 99.9% accuracy via Stripe API. JWT + bcrypt authentication, dynamic cart, and administrative panel.",
      github: "https://github.com/Praveen-ing/FooDel-Project-Repo",
      demo: null,
      featured: true,
      icon: <FaCode size={22} className="proj-type-icon" />,
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"]
    },
    {
      title: "CampusMart @ IIITH",
      category: "Full-Stack & Web",
      desc: "Student-to-student marketplace at IIIT Hyderabad acquiring 100+ active users & 200+ transactions. 15+ RESTful endpoints secured with JWT authentication.",
      github: "https://github.com/Praveen-ing/CampusMart-IIITH",
      demo: "https://campusmart-iiith-1.onrender.com/",
      featured: false,
      icon: <FaCode size={22} className="proj-type-icon" />,
      tags: ["React", "Express", "MongoDB", "JWT Auth"]
    },
    {
      title: "CAPTCHA Breaker (CNN-LSTM)",
      category: "AI & ML",
      desc: "Deep learning CAPTCHA solver combining CNN-LSTM neural architecture with CTC loss and OpenCV text preprocessing, plus automated synthetic CAPTCHA data generator.",
      github: "https://github.com/Praveen-ing/CrackTheCAPTCHA",
      demo: null,
      featured: false,
      icon: <FaDatabase size={22} className="proj-type-icon" />,
      tags: ["Python", "PyTorch", "OpenCV", "CNN-LSTM"]
    },
    {
      title: "CodeCrux — CP Portal",
      category: "Full-Stack & Web",
      desc: "Competitive programming portal tracking global contests via Clist.by API with Google Calendar sync, tag-based filtering, and contest reminders boosting daily active users.",
      github: "https://github.com/Praveen-ing/CodeCrux",
      demo: "https://codecrux-4tw1.onrender.com/",
      featured: false,
      icon: <FaCode size={22} className="proj-type-icon" />,
      tags: ["MongoDB", "Express", "React", "Clist API"]
    },
    {
      title: "Social Media DB Engine",
      category: "Systems & Cloud",
      desc: "Normalized relational database schema and engine for social media platforms managing hierarchical comments and follower networks with PyMySQL transaction management.",
      github: "https://github.com/Praveen-ing/Social-Media",
      demo: null,
      featured: false,
      icon: <FaDatabase size={22} className="proj-type-icon" />,
      tags: ["Python", "MySQL", "PyMySQL", "Schema Design"]
    }
  ];

  const categories = ["All", "Systems & Cloud", "Full-Stack & Web", "AI & ML"];

  const filteredProjects = activeCategory === "All"
    ? projectList
    : projectList.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="sawad-projects-section">
      <div className="sawad-section-tag">⚡ RECENT PROJECTS</div>
      <h2 className="sawad-section-title">Featured Work & Built Systems</h2>

      {/* Filter Tabs */}
      <div className="sawad-filter-bar">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`sawad-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="sawad-projects-grid">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="sawad-card sawad-project-card"
            >
              {/* Cover Icon Box */}
              <div className="sawad-project-cover">
                <div className="cover-icon-circle">
                  {project.icon}
                </div>
                {project.featured && (
                  <span className="star-badge">
                    <FaStar size={10} /> Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="sawad-project-body">
                <div className="proj-title-row">
                  <h3 className="sawad-project-title">{project.title}</h3>
                  <div className="proj-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" title="GitHub Code" className="proj-link-btn">
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" title="Live Demo" className="proj-link-btn">
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="sawad-project-desc">{project.desc}</p>

                <div className="sawad-project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="sawad-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
