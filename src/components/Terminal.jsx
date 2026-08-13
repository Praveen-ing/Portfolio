import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiTerminal, FiX, FiCornerDownLeft } from 'react-icons/fi';
import './Terminal.css';

const COMMANDS = {
  help: `Available commands:
  • bio       - Brief summary & background
  • skills    - Primary tech stack & tools
  • projects  - Key full-stack & backend projects
  • exp       - Internship & work experience
  • ranks     - Competitive exams & achievements
  • contact   - Email, phone, & social links
  • sudo hire - Launch fast-track inquiry
  • clear     - Clear console history`,
  
  bio: `Nethavath Praveen
---------------------------------------------
Degree:   B.Tech in ECE @ IIIT Hyderabad (Expected 2027)
Role:     Full-Stack & Systems Software Engineer
Focus:    Scalable Microservices, Payment Systems, High-Performance Web Apps
Status:   Open for Internships & Software Engineering Roles`,

  skills: `Technical Core Matrix:
---------------------------------------------
Languages:   JavaScript (ES6+), Python, Java, C++, SQL, HTML5/CSS3
Backend:     Spring Boot, Node.js, Express.js, Flask, REST APIs
Frontend:    React.js, Framer Motion, Tailwind/CSS3, Flutter
Databases:   PostgreSQL (35+ Schema tables), MongoDB, MySQL
DevOps/Tools:Git, GitHub, Heroku, Render, Vercel, Netlify`,

  projects: `Featured Systems & Platforms:
---------------------------------------------
[1] FooDel - Full-Stack Food Delivery Platform
    Tech: MERN + Stripe API | 1,000+ Transactions | 99.9% Uptime
[2] CampusMart @ IIITH - Peer Marketplace
    Tech: React + Express + JWT | 100+ Active Users | 200+ Deals
[3] CodeCrux - Competitive Programming Hub
    Tech: React + Clist API + Google Calendar Sync | +30% Engagement
[4] Autonomous LLM IT Engineer CLI @ Microland
    Tech: Rust + Azure AKS + Neo4j Graph RAG + Gemini 2.0 Flash`,

  exp: `Work Experience:
---------------------------------------------
Company: Microland (Tech Intern — Platforms Team, May 2026 – Present)
  • Autonomous CLI: Built Rust CLI for Azure AKS infrastructure diagnosis & remediation.
  • Graph RAG: Traced alert propagation across 60+ microservices using Neo4j & Gemini 2.0.
  • Observe Webhooks: Re-engineered telemetry routing from legacy CRON to real-time webhooks.
  • Cloud Native: Implemented multi-tenant SSH multiplexing on live Kubernetes clusters.`,

  ranks: `Honors & Leadership Ranks:
---------------------------------------------
🏆 JEE Mains: AIR 2107 (Top 0.2%)
🏆 JEE Advanced: AIR 3894
🎖️ NSS Coordinator: Managed 1,500+ volunteers across campus initiatives
🏅 FFE Scholar & NCC 'A' Certificate Holder
🎪 Felicity Fest Marketing Team Member`,

  contact: `Direct Contact Channels:
---------------------------------------------
📧 Email: praveennayak045@gmail.com
📞 Phone: +91 9391206849
🔗 LinkedIn: linkedin.com/in/nethavath-praveen-0a7a84287
💻 GitHub: github.com/Praveen-ing`,

  'sudo hire': `[ACCESS GRANTED] Fast-track candidate unlocked!
---------------------------------------------
Praveen is ready to contribute to your engineering team.
Send an immediate email to praveennayak045@gmail.com or call +91 9391206849.`
};

export default function Terminal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'output', text: 'PraveenOS Shell v2.4.0 (IIIT Hyderabad Environment)' },
    { type: 'output', text: 'Type "help" or click command chips below to explore CLI.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    let newHistory = [...history, { type: 'input', text: cmd }];

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (COMMANDS[cmd]) {
      newHistory.push({ type: 'output', text: COMMANDS[cmd] });
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${cmd}". Type "help" for available commands.`
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="terminal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="terminal-window"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <button className="dot dot-close" onClick={onClose} title="Close shell" />
            <span className="dot dot-minimize" />
            <span className="dot dot-maximize" />
          </div>
          <div className="terminal-title">
            <FiTerminal className="term-icon" />
            <span>praveen@iiith-workstation:~ (zsh)</span>
          </div>
          <div className="terminal-actions">
            <button className="term-btn" onClick={onClose}><FiX /></button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body">
          {history.map((item, idx) => (
            <div key={idx} className={`term-line term-line-${item.type}`}>
              {item.type === 'input' && <span className="prompt">praveen@iiith:~$ </span>}
              <pre className="line-text">{item.text}</pre>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick Command Chips */}
        <div className="terminal-chips">
          {['help', 'bio', 'skills', 'projects', 'exp', 'ranks', 'contact', 'sudo hire'].map((c) => (
            <button key={c} className="chip-btn" onClick={() => handleCommand(c)}>
              ${c}
            </button>
          ))}
        </div>

        {/* Terminal Input Form */}
        <form onSubmit={onSubmit} className="terminal-input-form">
          <span className="prompt-label">praveen@iiith:~$</span>
          <input
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (e.g. bio, skills)..."
            autoFocus
          />
          <button type="submit" className="terminal-submit">
            <FiCornerDownLeft />
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
