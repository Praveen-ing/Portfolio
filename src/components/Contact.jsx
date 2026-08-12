import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt, FaMapMarkerAlt, FaCopy, FaCheck, FaPaperPlane, FaArrowUp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const emailAddress = "praveeeening@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="contact-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-badge">Get In Touch</span>
        <h2 className="section-title">Let's Connect & Build</h2>
      </motion.div>

      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Column: Direct Info & Quick Copy */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card direct-email-card">
              <span className="card-lbl">Prefer Direct Email?</span>
              <div className="email-display">
                <span className="email-text">{emailAddress}</span>
                <button
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                >
                  {copied ? <FaCheck color="#10b981" /> : <FaCopy />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>
              </div>
            </div>

            <div className="contact-details-list">
              <a href={`mailto:${emailAddress}`} className="glass-card contact-detail-item">
                <div className="contact-detail-icon"><FaEnvelope /></div>
                <div>
                  <span className="detail-label">Email Address</span>
                  <span className="detail-val">{emailAddress}</span>
                </div>
              </a>

              <a href="tel:+919391206849" className="glass-card contact-detail-item">
                <div className="contact-detail-icon"><FaPhoneAlt /></div>
                <div>
                  <span className="detail-label">Phone</span>
                  <span className="detail-val">+91 9391206849</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/nethavath-praveen-0a7a84287/" target="_blank" rel="noreferrer" className="glass-card contact-detail-item">
                <div className="contact-detail-icon"><FaLinkedin /></div>
                <div>
                  <span className="detail-label">LinkedIn Profile</span>
                  <span className="detail-val">nethavath-praveen-0a7a84287</span>
                </div>
              </a>

              <a href="https://github.com/Praveen-ing" target="_blank" rel="noreferrer" className="glass-card contact-detail-item">
                <div className="contact-detail-icon"><FaGithub /></div>
                <div>
                  <span className="detail-label">GitHub Repository</span>
                  <span className="detail-val">github.com/Praveen-ing</span>
                </div>
              </a>

              <div className="glass-card contact-detail-item">
                <div className="contact-detail-icon"><FaMapMarkerAlt /></div>
                <div>
                  <span className="detail-label">Location</span>
                  <span className="detail-val">IIIT Hyderabad, Gachibowli, Telangana, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Message Form */}
          <motion.div
            className="contact-form-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card form-card">
              <h3 className="form-title">Send a Direct Message</h3>

              {formSubmitted ? (
                <div className="form-success-msg">
                  <FaCheck className="success-icon" size={32} />
                  <h4>Message Received!</h4>
                  <p>Thank you for reaching out, Praveen will respond promptly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      required
                      placeholder="Opportunity / Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      placeholder="Hi Praveen, I'd like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary full-width">
                    <FaPaperPlane size={14} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copy">
            <p>© {new Date().getFullYear()} Nethavath Praveen. Built with React & Framer Motion.</p>
          </div>

          <button className="scroll-top-btn" onClick={scrollToTop} title="Back to Top">
            <FaArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
