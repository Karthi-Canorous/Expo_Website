"use client";

import { motion } from "framer-motion";

const differentiators = [
 
 

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
    <section style={{ background: "#FFFFFF", borderTop: "1px solid #EFEFEF", padding: "1rem 0 0 0" }}>
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
            {/* <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", justifyContent: "center" }}>
              
              <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", color: "#B22222", textTransform: "uppercase" }}>
                Canorous Technology Private Limited
              </span>
            </div> */}

            {/* CTPL + subtitle */}
            <div style={{ fontSize: "clamp(3rem, 5vw, 4rem)", fontWeight: 900, color: "#1C1C1C", letterSpacing: "0.03em", lineHeight: 1, marginBottom: "0.325rem",marginTop: "0 rem", textAlign: "center" }}>
              CTPL
            </div>
            <div style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)", fontWeight: 400, color: "#000000", lineHeight: 1.4, marginBottom: "1.75rem", textAlign: "center" }}>
              Canorous Technology Private Limited 
             </div>
             

            <p style={{ fontSize: "0.9rem", color: "#4A4A4A", lineHeight: 1.9, maxWidth: "460px", marginBottom: "0 rem", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
Canorous Technologies is an AI-powered technology company delivering innovative digital solutions across industries.
We specialize in AR/VR, Digital Twins, 3D Visualization, AI Agents, and Business Automation.
Our expertise includes Unreal Engine development, Pixel Streaming, Industrial Training, and Custom Software Solutions.
We help businesses visualize, simulate, automate, and accelerate their digital transformation journey.</p>

            {/* Meta tags */}
            <div style={{ display: "flex", alignItems: "center", gap: "0", flexWrap: "wrap", justifyContent: "center" }}>
              {/* {["Expo 2025", "5 Solution Domains", "Enterprise-Grade"].map((tag, i) => (
                <div key={tag} style={{ display: "flex", alignItems: "center" }}>
                  {i > 0 && <div style={{ width: "1px", height: "12px", background: "#D9D9D9", margin: "0 1rem" }} />}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <div style={{ width: "5px", height: "5px", background: "#B22222", borderRadius: "50%", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.72rem", color: "#9A9A9A", fontWeight: 500, letterSpacing: "0.04em" }}>{tag}</span>
                  </div>
                </div>
              ))} */}
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
