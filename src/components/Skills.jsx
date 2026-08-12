import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiRust, SiJavascript, SiCplusplus, SiPython, SiOpenjdk, 
  SiReact, SiNodedotjs, SiSpringboot, SiFlask,
  SiMongodb, SiRedis, SiNeo4J, SiPostgresql, SiKubernetes
} from 'react-icons/si';
import { FaAws, FaDocker } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const toolsList = [
    {
      name: "Rust",
      role: "Systems & LLM CLI",
      desc: "Low-latency systems programming, AKS remediation tools, memory safety, and SSH multiplexing.",
      icon: <SiRust color="#f74c00" size={26} />
    },
    {
      name: "React.js & JavaScript",
      role: "Frontend Web Stack",
      desc: "Dynamic glassmorphic UIs, state management, D3.js visualization, and component architecture.",
      icon: <SiReact color="#61dafb" size={26} />
    },
    {
      name: "Java Spring Boot",
      role: "Backend Microservices",
      desc: "Enterprise microservice boundaries, RESTful API design, Clean Architecture, and performance optimization.",
      icon: <SiSpringboot color="#6db33f" size={26} />
    },
    {
      name: "PostgreSQL & MySQL",
      role: "Relational Databases",
      desc: "Schema design, 35+ table normalization, complex JOINs, PyMySQL transactions, and indexing.",
      icon: <SiPostgresql color="#4169e1" size={26} />
    },
    {
      name: "Kubernetes & Docker",
      role: "Cloud Orchestration",
      desc: "Azure AKS infrastructure, container deployment, pod troubleshooting, and CI/CD automation.",
      icon: <SiKubernetes color="#326ce5" size={26} />
    },
    {
      name: "Neo4j & Gemini 2.0",
      role: "Enterprise Graph RAG",
      desc: "Topology graph reasoning over 60+ microservices, alert propagation tracing, and LLM integration.",
      icon: <SiNeo4J color="#008cc1" size={26} />
    },
    {
      name: "Python & PyTorch",
      role: "AI / ML & Scripting",
      desc: "CNN-LSTM deep learning architectures, OpenCV text processing, and Flask API backends.",
      icon: <SiPython color="#3776ab" size={26} />
    },
    {
      name: "C & C++ Systems",
      role: "Low-Level Programming",
      desc: "Multithreaded distributed sockets, LRU caches, POSIX Unix shell, signal handling, and memory control.",
      icon: <SiCplusplus color="#00599c" size={26} />
    }
  ];

  return (
    <section id="skills" className="sawad-tools-section">
      <div className="sawad-section-tag">🛠️ PREMIUM TOOLS & TECH STACK</div>
      <h2 className="sawad-section-title">Technologies & Systems I Harness</h2>

      <div className="sawad-tools-grid">
        {toolsList.map((tool, idx) => (
          <motion.div
            key={idx}
            className="sawad-card sawad-tool-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <div className="tool-icon-box">
              {tool.icon}
            </div>

            <div className="tool-info">
              <h3 className="tool-name">{tool.name}</h3>
              <span className="tool-role">{tool.role}</span>
              <p className="tool-desc">{tool.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
