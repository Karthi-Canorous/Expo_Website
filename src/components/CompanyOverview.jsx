"use client";

import { motion } from "framer-motion";

export default function CompanyOverview() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #EFEFEF",
        padding: "4rem 0 4.5rem",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{ textAlign: "center" }}
        >
          <div
            style={{
              display: "inline-block",
              fontSize: "clamp(2.6rem, 5vw, 3.6rem)",
              fontWeight: 900,
              letterSpacing: "0.12em",
              color: "#1C1C1C",
              lineHeight: 1,
              marginBottom: "0.5rem",
            }}
          >
            CTPL
          </div>

          <div
            style={{
              width: "40px",
              height: "3px",
              background: "#B22222",
              margin: "0.6rem auto 1rem",
              borderRadius: "2px",
            }}
          />

          <div
            style={{
              fontSize: "clamp(0.85rem, 1.4vw, 1rem)",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#757575",
              marginBottom: "1.75rem",
            }}
          >
            Canorous Technology Private Limited
          </div>

          <p
            style={{
              fontSize: "clamp(0.88rem, 1.3vw, 0.98rem)",
              color: "#4A4A4A",
              lineHeight: 1.85,
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            Canorous Technologies is an AI-powered technology company delivering
            innovative digital solutions across industries — helping businesses
            visualize, simulate, automate, and accelerate their digital
            transformation journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
