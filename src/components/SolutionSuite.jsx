"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { solutions } from "@/data/products";

const ICONS = {
  Building: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" /><path d="M16 6h.01" />
      <path d="M12 6h.01" /><path d="M12 10h.01" />
      <path d="M12 14h.01" /><path d="M16 10h.01" />
      <path d="M16 14h.01" /><path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  ),
  BrainCircuit: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4a4 4 0 0 1 4 4c0 1.1-.45 2.1-1.17 2.83" />
      <circle cx="12" cy="4" r="2" />
      <path d="M4 12a4 4 0 0 1 4-4" />
      <circle cx="4" cy="12" r="2" />
      <path d="M20 12a4 4 0 0 0-4-4" />
      <circle cx="20" cy="12" r="2" />
      <path d="M12 20a4 4 0 0 1-4-4" />
      <path d="M12 20a4 4 0 0 0 4-4" />
      <circle cx="12" cy="20" r="2" />
      <path d="M12 6v4M6 12h4M14 12h4M12 14v4" />
    </svg>
  ),
  Code: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Factory: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20V8l5 4V8l5 4V4h10v16z" />
      <path d="M6 20v-4h4v4" />
      <path d="M14 20v-4h4v4" />
    </svg>
  ),
  HardHat: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
      <path d="M10 18V6a2 2 0 0 1 4 0v12" />
      <path d="M4 18v-4a8 8 0 0 1 16 0v4" />
    </svg>
  ),
};

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
    <circle cx="7" cy="7" r="7" fill="#B22222" />
    <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function SolutionDetail({ solution, onContactClick, onFooterContactClick }) {
  return (
    <div>
      {/* Header: icon + title + short description */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            background: "#B22222",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            flexShrink: 0,
          }}
        >
          {ICONS[solution.icon]}
        </div>
        <div>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: "0.25rem",
            }}
          >
            {solution.title}
          </h3>
          <p style={{ fontSize: "0.78rem", color: "#B22222", fontWeight: 600 }}>
            {solution.shortDescription}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #EFEFEF", marginBottom: "1.25rem" }} />

      {/* Overview */}
      <p
        style={{
          fontSize: "0.88rem",
          color: "#4A4A4A",
          lineHeight: 1.8,
          marginBottom: "1.5rem",
        }}
      >
        {solution.description}
      </p>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #EFEFEF", marginBottom: "1.25rem" }} />

      {/* Key Features */}
      <div style={{ marginBottom: "1.75rem" }}>
        <div
          style={{
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#0F172A",
            marginBottom: "1rem",
            paddingBottom: "0.5rem",
            borderBottom: "2px solid #B22222",
            display: "inline-block",
          }}
        >
          Key Features
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.625rem 2rem",
          }}
          className="features-grid"
        >
          {solution.features.map((feat) => (
            <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
              <CheckIcon />
              <span style={{ fontSize: "0.82rem", color: "#4A4A4A", lineHeight: 1.55 }}>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #EFEFEF", marginBottom: "1.5rem" }} />

      {/* CTA buttons */}
      <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
        <button
          onClick={() => onContactClick?.()}
          style={{
            background: "#B22222",
            color: "#FFFFFF",
            border: "none",
            padding: "0.625rem 1.75rem",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#961a1a")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#B22222")}
        >
          Request Demo
        </button>
        <button
          onClick={() => onFooterContactClick?.()}
          style={{
            background: "transparent",
            color: "#0F172A",
            border: "1.5px solid #0F172A",
            padding: "0.625rem 1.75rem",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background 0.15s, color 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#0F172A";
            e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#0F172A";
          }}
        >
          Contact Us
        </button>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

export default function SolutionSuite({ onContactClick, onFooterContactClick }) {
  const [activeSlug, setActiveSlug] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const activeSolution = solutions.find((s) => s.slug === activeSlug) ?? null;

  useEffect(() => {
    if (!dropdownOpen) return;
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [dropdownOpen]);

  const handleSelect = (slug) => {
    setActiveSlug(slug);
    setDropdownOpen(false);
  };

  return (
    <section
      id="solutions"
      style={{
        background: "#F7F7F7",
        borderTop: "1px solid #EFEFEF",
        padding: "2rem 0",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Section header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <span style={{ fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B22222", marginBottom: "1rem", display: "block" }}>CTPL · End-to-End Solutions Across Industries</span>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          >
            Our Solution Suite
          </h2>
          <p style={{ fontSize: "0.88rem", color: "#757575", maxWidth: "520px" }}>
            Explore our comprehensive suite of AI-powered solutions designed to transform how industries visualize, simulate, and automate.
          </p>
        </div>

        {/* Custom dropdown selector */}
        <div ref={dropdownRef} style={{ position: "relative", marginBottom: "2.5rem", maxWidth: "420px" }}>
          {/* Trigger */}
          <button
            onClick={() => setDropdownOpen((o) => !o)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.875rem 1.25rem",
              background: "#FFFFFF",
              border: `1.5px solid ${dropdownOpen ? "#B22222" : "#D9D9D9"}`,
              cursor: "pointer",
              transition: "border-color 0.15s",
              boxShadow: dropdownOpen ? "0 0 0 3px rgba(178,34,34,0.08)" : "0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              {activeSolution && (
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    background: "#B22222",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    flexShrink: 0,
                  }}
                >
                  {ICONS[activeSolution.icon]}
                </div>
              )}
              <span
                style={{
                  fontSize: "0.88rem",
                  fontWeight: activeSolution ? 700 : 400,
                  color: activeSolution ? "#0F172A" : "#9A9A9A",
                  letterSpacing: "-0.01em",
                }}
              >
                {activeSolution ? activeSolution.title : "Select a Solution"}
              </span>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{
                flexShrink: 0,
                transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.22s ease",
                color: "#757575",
              }}
            >
              <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dropdown list */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  top: "calc(100% + 4px)",
                  left: 0,
                  right: 0,
                  background: "#FFFFFF",
                  border: "1px solid #D9D9D9",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                  zIndex: 50,
                  overflow: "hidden",
                }}
              >
                {solutions.map((sol, idx) => {
                  const isActive = sol.slug === activeSlug;
                  return (
                    <button
                      key={sol.slug}
                      onClick={() => handleSelect(sol.slug)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        width: "100%",
                        padding: "0.75rem 1.25rem",
                        background: isActive ? "#FDF5F5" : "transparent",
                        border: "none",
                        borderBottom: idx < solutions.length - 1 ? "1px solid #F5F5F5" : "none",
                        borderLeft: isActive ? "3px solid #B22222" : "3px solid transparent",
                        textAlign: "left",
                        cursor: "pointer",
                        transition: "background 0.12s, border-color 0.12s",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = "#FDF5F5";
                          e.currentTarget.style.borderLeftColor = "#B22222";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.borderLeftColor = "transparent";
                        }
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.82rem",
                          fontWeight: isActive ? 700 : 500,
                          color: isActive ? "#B22222" : "#1C1C1C",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {sol.title}
                      </span>
                      {isActive && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: "auto", flexShrink: 0 }}>
                          <path d="M2.5 7l3 3 6-6" stroke="#B22222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Detail panel — only shown after a solution is selected */}
        <AnimatePresence mode="wait">
          {activeSolution ? (
            <motion.div
              key={activeSlug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                background: "#FFFFFF",
                border: "1px solid #D9D9D9",
                padding: "2.5rem",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              }}
            >
              <SolutionDetail
                solution={activeSolution}
                onContactClick={onContactClick}
                onFooterContactClick={onFooterContactClick}
              />
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                fontSize: "0.85rem",
                color: "#9A9A9A",
                marginTop: "0.5rem",
              }}
            >
              Choose a solution to explore its capabilities and features.
            </motion.p>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
