import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt, FaMapMarkerAlt, FaCopy, FaCheck, FaPaperPlane, FaArrowUp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'Software Engineering Opportunity', message: '' });

  const email = "praveeeening@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: 'Software Engineering Opportunity', message: '' });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="sawad-contact-section">
      <div className="sawad-section-tag">📫 LET'S WORK TOGETHER</div>
      <h2 className="sawad-section-title">Let's Build Something Exceptional</h2>

      <div className="sawad-contact-container">
        {/* Left Direct Copy & Info */}
        <div className="sawad-contact-info">
          <div className="sawad-card sawad-copy-card">
            <span className="copy-label">Direct Email</span>
            <div className="copy-input-row">
              <span className="copy-email-text">{email}</span>
              <button className="sawad-copy-btn" onClick={handleCopy} title="Copy email address">
                {copied ? <FaCheck color="#10b981" /> : <FaCopy />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>

          <div className="sawad-info-list">
            <a href={`mailto:${email}`} className="sawad-card info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <div>
                <span className="info-title">Email Direct</span>
                <span className="info-value">{email}</span>
              </div>
            </a>

            <a href="tel:+919391206849" className="sawad-card info-item">
              <div className="info-icon"><FaPhoneAlt /></div>
              <div>
                <span className="info-title">Phone</span>
                <span className="info-value">+91 9391206849</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/nethavath-praveen-0a7a84287/" target="_blank" rel="noreferrer" className="sawad-card info-item">
              <div className="info-icon"><FaLinkedin /></div>
              <div>
                <span className="info-title">LinkedIn</span>
                <span className="info-value">nethavath-praveen-0a7a84287</span>
              </div>
            </a>

            <a href="https://github.com/Praveen-ing" target="_blank" rel="noreferrer" className="sawad-card info-item">
              <div className="info-icon"><FaGithub /></div>
              <div>
                <span className="info-title">GitHub</span>
                <span className="info-value">github.com/Praveen-ing</span>
              </div>
            </a>

            <div className="sawad-card info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div>
                <span className="info-title">Location</span>
                <span className="info-value">IIIT Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Direct Message Form */}
        <div className="sawad-card sawad-form-card">
          <h3 className="sawad-form-heading">Send a Message</h3>

          {submitted ? (
            <div className="sawad-form-success">
              <FaCheck size={36} color="#10b981" />
              <h4>Message Delivered!</h4>
              <p>Thank you for reaching out, Praveen will respond to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="sawad-form">
              <div className="sawad-field-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="e.g. Alex Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="sawad-field-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="alex@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="sawad-field-group">
                <label htmlFor="subject">Inquiry Type</label>
                <select
                  id="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                >
                  <option value="Software Engineering Opportunity">Software Engineering Opportunity</option>
                  <option value="Systems / Full-Stack Project">Systems / Full-Stack Project</option>
                  <option value="General Discussion">General Discussion</option>
                </select>
              </div>

              <div className="sawad-field-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="sawad-btn sawad-btn-primary full-btn">
                <FaPaperPlane size={14} />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="sawad-footer-bottom">
        <span>© {new Date().getFullYear()} Nethavath Praveen. All rights reserved.</span>
        <button className="sawad-scroll-btn" onClick={scrollToTop} title="Back to Top">
          <FaArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
};

export default Contact;
