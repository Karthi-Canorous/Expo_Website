"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    label: "End-to-end engineering visualization pipeline",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: "AI-first automation architecture",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4a4 4 0 0 1 4 4c0 1.1-.45 2.1-1.17 2.83" />
        <circle cx="12" cy="4" r="2" /><path d="M4 12a4 4 0 0 1 4-4" />
        <circle cx="4" cy="12" r="2" /><path d="M20 12a4 4 0 0 0-4-4" />
        <circle cx="20" cy="12" r="2" /><circle cx="12" cy="20" r="2" />
        <path d="M12 20a4 4 0 0 1-4-4M12 20a4 4 0 0 0 4-4M12 6v4M6 12h4M14 12h4M12 14v4" />
      </svg>
    ),
  },
  {
    label: "Cross-industry domain expertise",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    label: "Rapid delivery with enterprise-grade quality",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function CompanyOverview() {
  return (
    <section style={{ background: "#FFFFFF", borderTop: "1px solid #EFEFEF", padding: "5rem 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        <div className="overview-grid">

          {/* Left: Brand + description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Label */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
              <div style={{ width: "2.5rem", height: "2px", background: "#B22222", flexShrink: 0 }} />
              <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", color: "#B22222", textTransform: "uppercase" }}>
                Canorous Technology Private Limited
              </span>
            </div>

            {/* CTPL + subtitle */}
            <div style={{ fontSize: "clamp(3rem, 5vw, 4rem)", fontWeight: 900, color: "#1C1C1C", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "0.625rem" }}>
              CTPL
            </div>
            <div style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)", fontWeight: 400, color: "#757575", lineHeight: 1.4, marginBottom: "1.75rem" }}>
              AI-Powered Engineering Intelligence
            </div>

            <p style={{ fontSize: "0.9rem", color: "#4A4A4A", lineHeight: 1.9, maxWidth: "460px", marginBottom: "2.5rem" }}>
              Delivering end-to-end solutions across AR, VR, AI Agents, Digital Twins,
              Software, MEP, and Industrial Training. We bridge the gap between complex
              engineering data and intuitive visual experiences.
            </p>

            {/* Meta tags */}
            <div style={{ display: "flex", alignItems: "center", gap: "0", flexWrap: "wrap" }}>
              {["Expo 2025", "5 Solution Domains", "Enterprise-Grade"].map((tag, i) => (
                <div key={tag} style={{ display: "flex", alignItems: "center" }}>
                  {i > 0 && <div style={{ width: "1px", height: "12px", background: "#D9D9D9", margin: "0 1rem" }} />}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <div style={{ width: "5px", height: "5px", background: "#B22222", borderRadius: "50%", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.72rem", color: "#9A9A9A", fontWeight: 500, letterSpacing: "0.04em" }}>{tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Differentiator cards — 2×2 grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {differentiators.map((d, i) => (
              <motion.div
                key={d.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                style={{
                  background: "#F7F7F7",
                  border: "1px solid #EFEFEF",
                  borderTop: "3px solid #B22222",
                  padding: "1.75rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                  transition: "box-shadow 0.2s, background 0.2s",
                  cursor: "default",
                }}
                whileHover={{ boxShadow: "0 4px 16px rgba(178,34,34,0.08)", backgroundColor: "#FFFFFF" }}
              >
                <div style={{ color: "#B22222" }}>{d.icon}</div>
                <p style={{ fontSize: "0.82rem", color: "#1C1C1C", lineHeight: 1.6, fontWeight: 500 }}>{d.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .overview-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
        @media (max-width: 480px) {
          .overview-grid > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
