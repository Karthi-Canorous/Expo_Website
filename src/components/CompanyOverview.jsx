"use client";

import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "3D Model",
    description: "Photorealistic architectural and industrial 3D models built for impact.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "VR Walkthrough",
    description: "Full immersive virtual reality tours for real estate and industrial spaces.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "AI Agent",
    description: "Intelligent business agents for lead qualification, CRM, and automation.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "MEP Model",
    description: "Mechanical, electrical & plumbing blueprint extraction and clash detection.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h4M7 11h2" />
        <circle cx="16" cy="9" r="2" />
      </svg>
    ),
    title: "Digital Twin",
    description: "Live digital replicas of physical assets enabling real-time monitoring.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Pixel Streaming",
    description: "Cloud-rendered Unreal Engine visuals streamed directly to any browser.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function CompanyOverview() {
  return (
    <section
      style={{
        background: "#F7F7F7",
        borderTop: "1px solid #EFEFEF",
        padding: "5rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
        className="overview-grid"
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "2.5rem", height: "2px", background: "#B22222" }} />
            <span className="section-label">Company Overview</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "1.75rem",
            }}
          >
            We Transform Ideas Into
            <br />
            <span style={{ color: "#B22222" }}>Immersive Real‑World</span>
            <br />
            Experiences
          </h2>

          <p style={{ fontSize: "0.9rem", color: "#4A4A4A", lineHeight: 1.85, marginBottom: "1.5rem" }}>
            Canorous Technologies is an AI-powered engineering intelligence
            company headquartered in India. We bridge the gap between complex
            engineering data and intuitive visual experiences — delivering
            photorealistic 3D models, VR simulations, intelligent AI agents,
            and full-stack software solutions.
          </p>

          <p style={{ fontSize: "0.9rem", color: "#4A4A4A", lineHeight: 1.85, marginBottom: "2rem" }}>
            From real estate and construction to manufacturing and enterprise
            software, our cross-domain expertise enables clients to visualise,
            simulate, and automate their most complex workflows with precision
            and speed.
          </p>

          {/* Differentiators */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {[
              "End-to-end engineering visualization pipeline",
              "AI-first automation architecture",
              "Cross-industry domain expertise",
              "Rapid delivery with enterprise-grade quality",
            ].map((point) => (
              <div
                key={point}
                style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "#B22222",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontSize: "0.85rem", color: "#1C1C1C", lineHeight: 1.55 }}>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — capability cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "#D9D9D9",
              border: "1px solid #D9D9D9",
            }}
          >
            {CAPABILITIES.map(({ icon, title, description }) => (
              <motion.div
                key={title}
                variants={cardVariants}
                style={{
                  background: "#FFFFFF",
                  padding: "1.75rem",
                  cursor: "default",
                  transition: "background 0.15s",
                }}
                whileHover={{ backgroundColor: "#FDF5F5" }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    background: "#F7F7F7",
                    border: "1px solid #EFEFEF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#B22222",
                    marginBottom: "1rem",
                    transition: "background 0.15s, border-color 0.15s",
                  }}
                >
                  {icon}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#0F172A",
                    marginBottom: "0.375rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {title}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#757575", lineHeight: 1.6 }}>
                  {description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .overview-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
