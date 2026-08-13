import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCopy, FaCheck } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section tech-grid-bg">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">06 // Get In Touch</span>
          <h2 className="section-title">
            Let's Build <span className="highlight">Together</span>
          </h2>
          <p className="section-desc center-desc">
            Open for full-stack engineering roles, backend microservice projects, or technical conversations.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Quick Connect Cards */}
          <div className="contact-info-col">
            <div className="contact-card tech-card">
              <h3 className="contact-card-title">Direct Channels</h3>
              
              <div className="contact-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <div className="contact-details">
                  <span className="contact-label">Email Address</span>
                  <a href="mailto:praveennayak045@gmail.com" className="contact-val">
                    praveennayak045@gmail.com
                  </a>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard('praveennayak045@gmail.com', 'email')}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <FaCheck className="copied-icon" /> : <FaCopy />}
                </button>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaPhone /></div>
                <div className="contact-details">
                  <span className="contact-label">Phone / WhatsApp</span>
                  <a href="tel:9391206849" className="contact-val">
                    +91 9391206849
                  </a>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard('+919391206849', 'phone')}
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <FaCheck className="copied-icon" /> : <FaCopy />}
                </button>
              </div>

              <div className="social-links-row">
                <a
                  href="https://github.com/Praveen-ing"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  <FaGithub /> GitHub ↗
                </a>
                <a
                  href="https://linkedin.com/in/nethavath-praveen-0a7a84287"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  <FaLinkedin /> LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <form onSubmit={handleSubmit} className="contact-form tech-card">
              <h3 className="contact-card-title">Send a Direct Message</h3>

              {formSent ? (
                <div className="form-success-alert">
                  <FaCheck className="success-icon" />
                  <div>
                    <strong>Message Prepared!</strong>
                    <p>Thank you! You can also reach Praveen directly at praveennayak045@gmail.com.</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-input"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Email</label>
                    <input
                      type="email"
                      className="form-input"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-input form-textarea"
                      rows="4"
                      required
                      placeholder="Tell me about your project, role, or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn">
                    <FiSend /> Send Message
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Modern Clean White Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">P</span>
            <span className="footer-name">Nethavath Praveen</span>
          </div>
          <p className="footer-copy">
            © 2026 Nethavath Praveen · IIIT Hyderabad · Built with React & Vite
          </p>
          <a href="#hero" className="back-top-link">
            Back to top ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
