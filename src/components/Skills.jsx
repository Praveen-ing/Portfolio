import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiLayers, FiDatabase, FiSmartphone, FiCpu, FiCheck } from 'react-icons/fi';
import './Skills.css';

const skillCategories = [
  { id: 'all', label: 'All Stack' },
  { id: 'languages', label: 'Languages' },
  { id: 'backend', label: 'Backend & DB' },
  { id: 'frontend', label: 'Frontend & Mobile' },
  { id: 'tools', label: 'Tools & Practices' },
];

const skillsData = [
  { name: 'JavaScript (ES6+)', level: 'Advanced', cat: 'languages', desc: 'Async/await, Event Loop, DOM, Modern React ES Next' },
  { name: 'Java', level: 'Advanced', cat: 'languages', desc: 'Spring Boot Microservices, OOP, Enterprise Design Patterns' },
  { name: 'Python', level: 'Proficient', cat: 'languages', desc: 'Flask, Scripting, Data Structures, Automation' },
  { name: 'C / C++', level: 'Proficient', cat: 'languages', desc: 'Memory Management, Pointers, Algorithmic Problem Solving' },
  { name: 'SQL', level: 'Advanced', cat: 'languages', desc: 'Complex Joins, Indexing, Schema Optimization' },

  { name: 'Spring Boot', level: 'Advanced', cat: 'backend', desc: 'REST APIs, Dependency Injection, JPA / Hibernate, Security' },
  { name: 'Node.js / Express', level: 'Advanced', cat: 'backend', desc: 'REST APIs, Middleware, JWT Authentication, Async Workflows' },
  { name: 'PostgreSQL', level: 'Advanced', cat: 'backend', desc: 'Designed 35+ relational tables, foreign key constraints, 15% speedup' },
  { name: 'MongoDB', level: 'Proficient', cat: 'backend', desc: 'Document schemas, Aggregation Pipelines, Mongoose ORM' },
  { name: 'MySQL', level: 'Proficient', cat: 'backend', desc: 'Relational database management & query design' },

  { name: 'React.js', level: 'Advanced', cat: 'frontend', desc: 'Hooks, State Management, Framer Motion, Responsive UI' },
  { name: 'Flutter', level: 'Proficient', cat: 'frontend', desc: 'Cross-platform mobile apps, REST integration (+25% productivity)' },
  { name: 'HTML5 / CSS3', level: 'Advanced', cat: 'frontend', desc: 'Custom CSS Variables, Glassmorphism, Responsive Grid/Flexbox' },
  { name: 'Tailwind CSS', level: 'Proficient', cat: 'frontend', desc: 'Utility-first styling & rapid UI prototyping' },

  { name: 'Git & GitHub', level: 'Advanced', cat: 'tools', desc: 'Branching, PR Reviews, Version Control, Workflows' },
  { name: 'REST API Design', level: 'Advanced', cat: 'tools', desc: 'Resource endpoints, HTTP Status codes, JWT & Bcrypt auth' },
  { name: 'Stripe API', level: 'Proficient', cat: 'tools', desc: 'Payment Gateway Integration, Webhooks, 1,000+ simulated transactions' },
  { name: 'Clean Architecture', level: 'Advanced', cat: 'tools', desc: 'Layered architecture, Service boundaries, Interface segregation' },
  { name: 'Cloud Deployment', level: 'Proficient', cat: 'tools', desc: 'Vercel, Render, Netlify, Heroku hosting' },
];

const codeSnippets = {
  springboot: {
    title: 'OrderService.java (Spring Boot Microservice)',
    lang: 'java',
    code: `@Service
@RequiredArgsConstructor
public class OrderManagementService {

    private final OrderRepository orderRepo;
    private final InventoryClient inventoryClient;

    @Transactional
    public OrderResponse createOrder(OrderRequest request) {
        log.info("Processing order for merchant: {}", request.getMerchantId());
        
        // 1. Verify Inventory via REST microservice
        inventoryClient.validateStock(request.getItems());

        // 2. Persist with PostgreSQL 35+ schema relations
        Order order = Order.builder()
            .merchantId(request.getMerchantId())
            .totalAmount(request.getTotalAmount())
            .status(OrderStatus.PROCESSING)
            .createdAt(LocalDateTime.now())
            .build();

        return OrderResponse.fromEntity(orderRepo.save(order));
    }
}`
  },
  react: {
    title: 'useStripePayment.js (React Custom Hook)',
    lang: 'javascript',
    code: `import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

export const useStripePayment = (apiEndpoint) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const processPayment = async (cartItems) => {
    setLoading(true);
    try {
      const res = await fetch(\`\${apiEndpoint}/create-checkout-session\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems }),
      });
      const session = await res.json();
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY);
      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { processPayment, loading, error };
};`
  },
  sql: {
    title: 'schema_oms_v2.sql (PostgreSQL Optimization)',
    lang: 'sql',
    code: `-- Enterprise Order Management System Schema (35+ Tables)
CREATE TABLE merchants (
    merchant_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    order_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    merchant_id UUID REFERENCES merchants(merchant_id) ON DELETE CASCADE,
    total_amount NUMERIC(12, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'PENDING',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexing for 15% Faster Retrieval Efficiency
CREATE INDEX idx_orders_merchant_status ON orders(merchant_id, status);`
  }
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [codeTab, setCodeTab] = useState('springboot');

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter((s) => s.cat === activeTab);

  return (
    <section id="skills" className="skills-section tech-grid-bg">
      <div className="container">
        <div className="section-header">
          <span className="section-label">04 // Skills & Engineering Proficiency</span>
          <h2 className="section-title">
            Technical <span className="highlight">Toolkit</span> & Code Standards
          </h2>
          <p className="section-desc">
            Full-stack web building skills, backend microservices, database design, and architecture practices.
          </p>
        </div>

        {/* Skill Category Filter Pills */}
        <div className="skills-filter-bar">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Skill Cards */}
        <motion.div className="skills-grid" layout>
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                className="skill-card tech-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <div className="skill-card-top">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className={`skill-level level-${skill.level.toLowerCase()}`}>
                    {skill.level}
                  </span>
                </div>
                <p className="skill-desc">{skill.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Code Snippet Playground */}
        <div className="code-playground-box tech-card">
          <div className="playground-header">
            <div className="playground-tabs">
              <button
                className={`tab-btn ${codeTab === 'springboot' ? 'active' : ''}`}
                onClick={() => setCodeTab('springboot')}
              >
                <FiCpu /> Spring Boot API
              </button>
              <button
                className={`tab-btn ${codeTab === 'react' ? 'active' : ''}`}
                onClick={() => setCodeTab('react')}
              >
                <FiCode /> React Hook
              </button>
              <button
                className={`tab-btn ${codeTab === 'sql' ? 'active' : ''}`}
                onClick={() => setCodeTab('sql')}
              >
                <FiDatabase /> PostgreSQL Schema
              </button>
            </div>
            <span className="playground-title">{codeSnippets[codeTab].title}</span>
          </div>

          <pre className="playground-code">
            <code>{codeSnippets[codeTab].code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
