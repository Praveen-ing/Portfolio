import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiRust, SiJavascript, SiCplusplus, SiPython, SiOpenjdk, 
  SiReact, SiNodedotjs, SiExpress, SiSpringboot, SiFlask,
  SiMongodb, SiRedis, SiNeo4J, SiPostgresql, SiMysql, SiKubernetes
} from 'react-icons/si';
import { FaCode, FaServer, FaDatabase, FaCloud, FaCogs, FaAws, FaDocker } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode size={18} />,
      skills: [
        { name: "Rust", icon: <SiRust color="#f74c00" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript color="#f7df1e" /> },
        { name: "C & C++", icon: <SiCplusplus color="#00599c" /> },
        { name: "Python", icon: <SiPython color="#3776ab" /> },
        { name: "Java", icon: <SiOpenjdk color="#ed8b00" /> },
        { name: "SQL & Bash", icon: null }
      ]
    },
    {
      title: "Frameworks & APIs",
      icon: <FaServer size={18} />,
      skills: [
        { name: "Node.js & Express", icon: <SiNodedotjs color="#339933" /> },
        { name: "React.js", icon: <SiReact color="#61dafb" /> },
        { name: "Java Spring Boot", icon: <SiSpringboot color="#6db33f" /> },
        { name: "Flask & FastAPI", icon: <SiFlask color="#ffffff" /> },
        { name: "REST APIs & WebSockets", icon: null },
        { name: "GraphQL", icon: null }
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase size={18} />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
        { name: "Redis", icon: <SiRedis color="#dc382d" /> },
        { name: "Neo4j Graph DB", icon: <SiNeo4J color="#008cc1" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#4169e1" /> },
        { name: "MySQL", icon: <SiMysql color="#4479a1" /> }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud size={18} />,
      skills: [
        { name: "Azure & AKS", icon: null },
        { name: "AWS & GCP", icon: <FaAws color="#ff9900" /> },
        { name: "Kubernetes & Docker", icon: <SiKubernetes color="#326ce5" /> },
        { name: "CI/CD & Harness", icon: null },
        { name: "Observe Webhooks & Vault", icon: null }
      ]
    },
    {
      title: "Concepts & Architecture",
      icon: <FaCogs size={18} />,
      skills: [
        { name: "Microservices & Distributed Systems", icon: null },
        { name: "Enterprise Graph RAG", icon: null },
        { name: "Clean Architecture", icon: null },
        { name: "Operating Systems & Networks", icon: null },
        { name: "Concurrency & POSIX Multithreading", icon: null }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-badge">Technical Stack</span>
        <h2 className="section-title">Skills & Toolkit</h2>
      </motion.div>

      <div className="skills-container">
        <div className="skills-matrix">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass-card skill-cat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-cat-header">
                <div className="cat-icon">{category.icon}</div>
                <h3 className="cat-title">{category.title}</h3>
              </div>

              <div className="skills-pills">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill">
                    {skill.icon && <span className="skill-pill-icon">{skill.icon}</span>}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
