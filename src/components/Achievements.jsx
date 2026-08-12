import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar, FaUserShield, FaChalkboardTeacher, FaUsers, FaAward } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const honors = [
    {
      title: "Google BigCode 2026 Top 50 Rank (India)",
      category: "Coding Competition",
      desc: "Ranked among the Top 50 developers in India in Google BigCode 2026 competition.",
      icon: <FaTrophy className="ach-icon gold" />
    },
    {
      title: "JEE Mains AIR 3137",
      category: "National Examination",
      desc: "Secured All India Rank 3137 (Category AIR 2107) in JEE Mains among 1.2M+ candidates.",
      icon: <FaTrophy className="ach-icon gold" />
    },
    {
      title: "JEE Advanced AIR 4894",
      category: "National Examination",
      desc: "Secured All India Rank 4894 (Category AIR 3894) in JEE Advanced for IITs & IIITs.",
      icon: <FaTrophy className="ach-icon silver" />
    },
    {
      title: "Teaching Assistant @ IIIT Hyderabad",
      category: "Academic Leadership",
      desc: "TA for Probability & Random Processes (2025) and Real Analysis (2025) under IIITH faculty.",
      icon: <FaChalkboardTeacher className="ach-icon orange" />
    },
    {
      title: "Zscaler Certifications (Sep 2025)",
      category: "Professional Certification",
      desc: "Completed Fundamentals of Cybersecurity (EDU-102) and Networking for Cyber Professionals.",
      icon: <FaUserShield className="ach-icon cyan" />
    },
    {
      title: "FFE Scholar (Foundation for Excellence)",
      category: "Merit Scholarship",
      desc: "Awarded prestigious FFE Scholarship for outstanding academic performance & entrance rank.",
      icon: <FaMedal className="ach-icon bronze" />
    },
    {
      title: "Elected NSS Co-ordinator",
      category: "Social Leadership",
      desc: "Elected NSS Co-ordinator (Spring 2025 – Present), managing 1,500+ student volunteers.",
      icon: <FaUsers className="ach-icon orange" />
    },
    {
      title: "Felicity Fest Marketing Team",
      category: "Campus Leadership",
      desc: "Core Marketing Team Member for IIIT Hyderabad's flagship annual cultural & tech fest.",
      icon: <FaStar className="ach-icon gold" />
    }
  ];

  return (
    <section id="achievements" className="sawad-honors-section">
      <div className="sawad-section-tag">🏆 HONORS & LEADERSHIP</div>
      <h2 className="sawad-section-title">Recognition & Academic Excellence</h2>

      <div className="sawad-honors-grid">
        {honors.map((item, index) => (
          <motion.div
            key={index}
            className="sawad-card sawad-honor-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <div className="honor-icon-box">
              {item.icon}
            </div>

            <div className="honor-info">
              <span className="honor-cat">{item.category}</span>
              <h3 className="honor-title">{item.title}</h3>
              <p className="honor-desc">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
