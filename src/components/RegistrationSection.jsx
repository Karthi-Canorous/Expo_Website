"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_RE = /^[6-9]\d{9}$/;

const PERSON_TYPE_OPTIONS = [
  { value: "", label: "Select your role…" },
  { value: "Customer", label: "Customer" },
  { value: "Partner / Reseller", label: "Partner / Reseller" },
  { value: "Distributor", label: "Distributor" },
  { value: "Consultant", label: "Consultant" },
  { value: "Student / Academic", label: "Student / Academic" },
  { value: "Other", label: "Other" },
];

function Field({ id, label, type = "text", placeholder, value, error, onChange, disabled }) {
  return (
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
        value={value}
        onChange={onChange}
        className="input-enterprise"
        style={error ? { borderColor: "#B22222" } : {}}
        disabled={disabled}
      />
      {error && (
        <span style={{ fontSize: "0.72rem", color: "#B22222" }}>{error}</span>
      )}
    </div>
  );
}

function SelectField({ id, label, value, error, onChange, disabled, options }) {
  return (
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
      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={{
          padding: "0.65rem 0.875rem",
          border: `1px solid ${error ? "#B22222" : "#BDBDBD"}`,
          borderRadius: "2px",
          fontSize: "0.88rem",
          color: value ? "#111111" : "#9A9A9A",
          background: "#FFFFFF",
          outline: "none",
          fontFamily: "inherit",
          cursor: disabled ? "not-allowed" : "pointer",
          appearance: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%234A4A4A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.875rem center",
          paddingRight: "2.5rem",
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <span style={{ fontSize: "0.72rem", color: "#B22222" }}>{error}</span>
      )}
    </div>
  );
}

export default function RegistrationSection({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    person_type: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  function validate() {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Enter your full name.";
    if (!EMAIL_RE.test(form.email))
      e.email = "Enter a valid email address.";
    if (!MOBILE_RE.test(form.mobile.replace(/\s/g, "")))
      e.mobile = "Enter a valid 10-digit mobile number.";
    if (!form.company.trim() || form.company.trim().length < 2)
      e.company = "Enter your company name.";
    if (!form.person_type)
      e.person_type = "Select your role.";
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
    setApiError("");
    const result = await onSubmit(form);
    if (!result.success) {
      setApiError(result.error);
      setSubmitting(false);
    }
    // On success: context sets isRegistered=true and the page transitions automatically
  }

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        background: "#FFFFFF",
        paddingTop: "0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
        className="reg-grid"
      >
        {/* LEFT — Branding */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ textAlign: "center", paddingTop: "2rem" }}
        >
          <div style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "#B22222", marginBottom: "0.25rem" }}>
            CTPL
          </div>
          <div style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", fontWeight: 600, letterSpacing: "0.1em", color: "#757575" }}>
            Canorous Technology Private Limited
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
            <div style={{ marginBottom: "2rem" }}>
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#0F172A",
                  letterSpacing: "-0.01em",
                  marginBottom: "0.375rem",
                }}
              >
                Access the Solution Suites
              </h2>
              <p style={{ fontSize: "0.82rem", color: "#757575" }}>
                Register below to explore CTPL's full range of
                AI-powered engineering intelligence solutions.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <Field
                id="name"
                label="Full Name"
                placeholder="John Doe"
                value={form.name}
                error={errors.name}
                onChange={handleChange("name")}
                disabled={submitting}
              />
              <Field
                id="email"
                label="Email Address"
                type="email"
                placeholder="john@company.com"
                value={form.email}
                error={errors.email}
                onChange={handleChange("email")}
                disabled={submitting}
              />
              <Field
                id="mobile"
                label="Mobile Number"
                type="tel"
                placeholder="9876543210"
                value={form.mobile}
                error={errors.mobile}
                onChange={handleChange("mobile")}
                disabled={submitting}
              />
              <Field
                id="company"
                label="Company Name"
                placeholder="Acme Engineering Ltd."
                value={form.company}
                error={errors.company}
                onChange={handleChange("company")}
                disabled={submitting}
              />
              <SelectField
                id="person_type"
                label="Your Role"
                value={form.person_type}
                error={errors.person_type}
                onChange={handleChange("person_type")}
                disabled={submitting}
                options={PERSON_TYPE_OPTIONS}
              />

              {apiError && (
                <p style={{ fontSize: "0.78rem", color: "#B22222", padding: "0.6rem 0.875rem", background: "#FFF5F5", border: "1px solid #FCA5A5" }}>
                  {apiError}
                </p>
              )}

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
          .reg-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
