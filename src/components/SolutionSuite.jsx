"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { solutions } from "@/data/products";

const ICONS = {
  Building: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4a4 4 0 0 1 4 4c0 1.1-.45 2.1-1.17 2.83" />
      <circle cx="12" cy="4" r="2" /><path d="M4 12a4 4 0 0 1 4-4" />
      <circle cx="4" cy="12" r="2" /><path d="M20 12a4 4 0 0 0-4-4" />
      <circle cx="20" cy="12" r="2" />
      <path d="M12 20a4 4 0 0 1-4-4" />
      <path d="M12 20a4 4 0 0 0 4-4" />
      <circle cx="12" cy="20" r="2" />
      <path d="M12 6v4M6 12h4M14 12h4M12 14v4" />
    </svg>
  ),
  Code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Factory: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20V8l5 4V8l5 4V4h10v16z" />
      <path d="M6 20v-4h4v4" />
      <path d="M14 20v-4h4v4" />
    </svg>
  ),
  HardHat: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1-1v2z" />
      <path d="M10 18V6a2 2 0 0 1 4 0v12" />
      <path d="M4 18v-4a8 8 0 0 1 16 0v4" />
    </svg>
  ),
  Bot: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 12h6M9 8h6M9 16h6M12 4v2M12 18v2M4 12h2M18 12h2" />
    </svg>
  ),
  Layers: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  VrHeadset: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
      <path d="M12 4a8 8 0 0 1 8 8v10" />
      <path d="M12 4a8 8 0 0 0-8 8v10" />
      <path d="M8 14h8" />
    </svg>
  ),
  Cube: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Cloud: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
};

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
    <circle cx="8" cy="8" r="8" fill="#B22222" />
    <path d="M4.5 8l2.5 2.5 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function SolutionDetail({ solution, onContactClick, onFooterContactClick }) {
  return (
    <div style={{ textAlign: "center" }}>
      {/* Header - Centered */}
      <div style={{ 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem", 
        marginBottom: "2rem",
      }}>
        <div
          style={{
            width: "52px",
            height: "52px",
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
              fontSize: "1.35rem",
              fontWeight: 600,
              color: "#0F172A",
              lineHeight: 1.3,
              letterSpacing: "-0.02em",
              marginBottom: "0.15rem",
            }}
          >
            {solution.title}
          </h3>
          <p style={{ 
            fontSize: "0.8rem", 
            color: "#B22222", 
            fontWeight: 500,
            letterSpacing: "0.01em"
          }}>
            {solution.shortDescription}
          </p>
        </div>
      </div>

      {/* Description - Centered */}
      <p
        style={{
          fontSize: "0.92rem",
          color: "#4B5563",
          lineHeight: 1.7,
          marginBottom: "2rem",
          maxWidth: "650px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {solution.description}
      </p>

      {/* Key Features - Centered */}
      <div style={{ marginBottom: "2rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
        <div
          style={{
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6B7280",
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
            gap: "0.6rem 2rem",
            textAlign: "left",
          }}
          className="features-grid"
        >
          {solution.features.map((feat) => (
            <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
              <CheckIcon />
              <span style={{ fontSize: "0.85rem", color: "#4B5563", lineHeight: 1.5 }}>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA buttons - Centered */}
      <div style={{ 
        display: "flex", 
        gap: "0.875rem", 
        flexWrap: "wrap",
        justifyContent: "center",
        paddingTop: "1.5rem",
        borderTop: "1px solid #E5E7EB",
        maxWidth: "450px",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <button
          onClick={() => onContactClick?.()}
          style={{
            background: "#B22222",
            color: "#FFFFFF",
            border: "none",
            padding: "0.6rem 1.75rem",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background 0.2s ease",
            flex: 1,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#8B1A1A";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#B22222";
          }}
        >
          Request Demo
        </button>
        <button
          onClick={() => onFooterContactClick?.()}
          style={{
            background: "transparent",
            color: "#0F172A",
            border: "1.5px solid #0F172A",
            padding: "0.6rem 1.75rem",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.2s ease",
            flex: 1,
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
        background: "#FFFFFF",
        padding: "4rem 0",
        borderTop: "1px solid #F3F4F6",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Section header - Centered */}
        <div style={{ 
          marginBottom: "3rem",
          textAlign: "center",
        }}>
          <span style={{ 
            fontSize: "0.7rem", 
            fontWeight: 800, 
            letterSpacing: "0.15em", 
            textTransform: "uppercase", 
            color: "#B22222",
            display: "block",
            marginBottom: "0.1rem",
            marginTop: "0 rem",
          }}>
            CTPL · End-to-End Solutions Across Industries
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 2.8vw, 2.5rem)",
              fontWeight: 400,
              color: "#0F172A",
              letterSpacing: "-0.03em",
              marginBottom: "0.1rem",
            }}
          >
            Our Solution Suite
          </h2>
          <p style={{ 
            fontSize: "0.95rem", 
            color: "#6B7280", 
            maxWidth: "560px",
            lineHeight: 1.6,
            marginLeft: "auto",
            marginRight: "auto",
          }}>
            Explore our comprehensive suite of AI-powered solutions designed to transform how industries visualize, simulate, and automate.
          </p>
        </div>

        {/* Dropdown selector - Centered */}
        <div ref={dropdownRef} style={{ 
          position: "relative", 
          marginBottom: "2.5rem", 
          maxWidth: "340px",
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          <button
            onClick={() => setDropdownOpen((o) => !o)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.7rem 1rem",
              background: "#FFFFFF",
              border: `1px solid ${dropdownOpen ? "#B22222" : "#D1D5DB"}`,
              cursor: "pointer",
              transition: "border-color 0.2s ease",
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
                  fontSize: "0.85rem",
                  fontWeight: activeSolution ? 500 : 400,
                  color: activeSolution ? "#0F172A" : "#9CA3AF",
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
                transition: "transform 0.25s ease",
                color: "#6B7280",
              }}
            >
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dropdown list - Centered */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  top: "calc(100% + 4px)",
                  left: 0,
                  right: 0,
                  background: "#FFFFFF",
                  border: "1px solid #D1D5DB",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
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
                        padding: "0.6rem 1rem",
                        background: isActive ? "#FEF2F2" : "transparent",
                        border: "none",
                        borderBottom: idx < solutions.length - 1 ? "1px solid #F3F4F6" : "none",
                        textAlign: "left",
                        cursor: "pointer",
                        transition: "background 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = "#F9FAFB";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = "transparent";
                        }
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.82rem",
                          fontWeight: isActive ? 500 : 400,
                          color: isActive ? "#B22222" : "#1F2937",
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

        {/* Detail panel - Centered */}
        <AnimatePresence mode="wait">
          {activeSolution ? (
            <motion.div
              key={activeSlug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                background: "#F9FAFB",
                border: "1px solid #E5E7EB",
                padding: "2.5rem 2.5rem",
                maxWidth: "850px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <SolutionDetail
                solution={activeSolution}
                onContactClick={onContactClick}
                onFooterContactClick={onFooterContactClick}
              />
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                background: "#F9FAFB",
                border: "1px solid #E5E7EB",
                padding: "3rem",
                textAlign: "center",
                maxWidth: "850px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#9CA3AF",
                  margin: 0,
                }}
              >
                Choose a solution to explore its capabilities and features.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}