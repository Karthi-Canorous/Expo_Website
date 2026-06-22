"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_RE = /^[6-9]\d{9}$/;

export default function RegistrationSection({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Enter your full name.";
    if (!EMAIL_RE.test(form.email)) e.email = "Enter a valid email address.";
    if (!MOBILE_RE.test(form.mobile.replace(/\s/g, "")))
      e.mobile = "Enter a valid 10-digit mobile number.";
    if (!form.company.trim() || form.company.trim().length < 2) e.company = "Enter your company name.";
    return e;
  }

  function handleChange(field) {
    return (e) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    onSubmit(form);
  }

  const Field = ({ id, label, type = "text", placeholder }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
      <label
        htmlFor={id}
        style={{
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#4A4A4A",
        }}
      >
        {label} <span style={{ color: "#B22222" }}>*</span>
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={form[id]}
        onChange={handleChange(id)}
        className="input-enterprise"
        style={errors[id] ? { borderColor: "#B22222" } : {}}
        disabled={submitting}
      />
      {errors[id] && (
        <span style={{ fontSize: "0.72rem", color: "#B22222" }}>{errors[id]}</span>
      )}
    </div>
  );

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#FFFFFF",
        paddingTop: "64px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
          padding: "4rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}
        className="reg-grid"
      >
        {/* LEFT — Branding */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: "2.5rem", height: "2px", background: "#B22222" }} />
            <span className="section-label">Welcome to CTPL</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            AI Powered
            <br />
            <span style={{ color: "#B22222" }}>Engineering</span>
            <br />
            Intelligence
          </h1>

          <p
            style={{
              fontSize: "0.95rem",
              color: "#4A4A4A",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
              maxWidth: "440px",
            }}
          >
            Canorous Technologies delivers immersive visualization, intelligent
            automation, and AI‑driven engineering solutions that transform how
            industries design, build, and operate.
          </p>

          {/* Capability pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            {[
              { icon: "◈", label: "3D Visualization" },
              { icon: "◎", label: "VR / AR Training" },
              { icon: "◆", label: "AI Agents" },
              { icon: "◉", label: "MEP Intelligence" },
              { icon: "⬡", label: "Digital Twins" },
              { icon: "◍", label: "CAD Automation" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  padding: "0.625rem 0.875rem",
                  border: "1px solid #EFEFEF",
                  background: "#F7F7F7",
                }}
              >
                <span style={{ fontSize: "0.9rem", color: "#B22222" }}>{icon}</span>
                <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#1C1C1C" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Accent strip */}
          <div
            style={{
              borderLeft: "3px solid #B22222",
              paddingLeft: "1rem",
            }}
          >
            <p style={{ fontSize: "0.82rem", color: "#757575", lineHeight: 1.65 }}>
              "One partner for Visualization, Simulation &amp; Automation — for
              a smarter, more efficient future."
            </p>
            <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#B22222", marginTop: "0.5rem", letterSpacing: "0.06em" }}>
              — CANOROUS TECHNOLOGIES
            </p>
          </div>
        </motion.div>

        {/* RIGHT — Registration form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #D9D9D9",
              padding: "2.5rem",
              boxShadow: "0 4px 32px rgba(0,0,0,0.06)",
            }}
          >
            {/* Form header */}
            <div style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  width: "3px",
                  height: "28px",
                  background: "#B22222",
                  marginBottom: "1rem",
                }}
              />
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#0F172A",
                  letterSpacing: "-0.01em",
                  marginBottom: "0.375rem",
                }}
              >
                Access the Solution Suite
              </h2>
              <p style={{ fontSize: "0.82rem", color: "#757575" }}>
                Register below to explore Canorous Technologies' full range of
                engineering intelligence solutions.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <Field id="name" label="Full Name" placeholder="John Doe" />
              <Field id="email" label="Email Address" type="email" placeholder="john@company.com" />
              <Field id="mobile" label="Mobile Number" type="tel" placeholder="9876543210" />
              <Field id="company" label="Company Name" placeholder="Acme Engineering Ltd." />

              <div style={{ paddingTop: "0.5rem" }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", padding: "0.9rem 2rem", fontSize: "0.8rem" }}
                  disabled={submitting}
                >
                  {submitting ? (
                    <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ animation: "spin 0.8s linear infinite" }}
                      >
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                        <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                      </svg>
                      Processing…
                    </span>
                  ) : (
                    "Access Solution Suite →"
                  )}
                </button>
              </div>

              <p style={{ fontSize: "0.68rem", color: "#9A9A9A", textAlign: "center", lineHeight: 1.5 }}>
                Your information is kept confidential and used solely to
                personalise your experience.
              </p>
            </form>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .reg-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
