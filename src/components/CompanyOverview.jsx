"use client";

import { motion } from "framer-motion";

export default function CompanyOverview() {
  return (
    <section
      style={{
        background: "#F7F7F7",
        borderTop: "1px solid #EFEFEF",
        padding: "0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="company-heading" style={{ textAlign: "center", marginBottom: "0" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
              <div className="heading-line" style={{ width: "2.5rem", height: "2px", background: "#B22222" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "#B22222" }}>CTPL</div>
                <div style={{ fontSize: "0.8rem", fontWeight: 1000, letterSpacing: "0.1em", color: "#757575", marginTop: "0.25rem" }}>Canorous Technology Private Limited</div>
              </div>
              <div className="heading-line" style={{ width: "2.5rem", height: "2px", background: "#B22222" }} />
            </div>
          </div>

          <p style={{ fontSize: "0.9rem", color: "#4A4A4A", lineHeight: 1.85, marginTop: "2.5rem", marginBottom: "1.5rem", textIndent: "2rem" }}>
            CTPL is an AI-powered engineering intelligence unit of Canorous Technologies,
            delivering end-to-end solutions across AR, VR, AI Agents, Digital Twins,
            Software, MEP, and Industrial Training. We bridge the gap between complex
            engineering data and intuitive visual experiences.
          </p>

          {/* <p style={{ fontSize: "0.9rem", color: "#4A4A4A", lineHeight: 1.85, marginBottom: "2rem" }}>
            One Partner for Visualization, Simulation &amp; Automation for a Smarter Future —
            serving real estate, construction, manufacturing, and enterprise clients
            with photorealistic 3D models, VR simulations, intelligent AI agents,
            and full-stack software solutions.
          </p> */}

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
      </div>

      <style>{`
        @media (max-width: 768px) {
          .heading-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}
