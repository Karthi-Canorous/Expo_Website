"use client";

import { useState, useEffect, useRef } from "react";
import { solutions } from "@/data/products";

export default function Navbar({ isRegistered, onSolutionsClick, onOverviewClick, onSolutionSelect }) {
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const closeTimer = useRef(null);
  const solutionsTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cancelClose = () => clearTimeout(closeTimer.current);
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => {
      setAboutOpen(false);
      setSolutionsOpen(false);
    }, 180);
  };

  const cancelSolutionsClose = () => clearTimeout(solutionsTimer.current);
  const scheduleSolutionsClose = () => {
    solutionsTimer.current = setTimeout(() => setSolutionsOpen(false), 120);
  };

  const handleSolutionClick = (slug) => {
    setAboutOpen(false);
    setSolutionsOpen(false);
    onSolutionSelect?.(slug);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: "#FFFFFF",
        borderBottom: scrolled ? "1px solid #D9D9D9" : "1px solid #EFEFEF",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
        transition: "box-shadow 0.2s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "34px",
              height: "34px",
              background: "#B22222",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 17L10 3L17 17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.5 12H14.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div
              style={{
                fontSize: "0.95rem",
                fontWeight: 800,
                color: "#111111",
                lineHeight: 1.1,
                letterSpacing: "0.02em",
              }}
            >
              CANOROUS
            </div>
            <div
              style={{
                fontSize: "0.58rem",
                fontWeight: 500,
                color: "#9A9A9A",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Technologies
            </div>
          </div>
        </div>

        {/* Center nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          {isRegistered && (
            /* About Us — Level 1 dropdown trigger */
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => { cancelClose(); setAboutOpen(true); }}
              onMouseLeave={scheduleClose}
            >
              <button
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: aboutOpen ? "#B22222" : "#1C1C1C",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  padding: "0.375rem 0",
                  borderBottom: `2px solid ${aboutOpen ? "#B22222" : "transparent"}`,
                  transition: "color 0.15s, border-color 0.15s",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                About Us
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  style={{
                    transform: aboutOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Level 1 dropdown */}
              {aboutOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    left: 0,
                    minWidth: "220px",
                    background: "#FFFFFF",
                    border: "1px solid #D9D9D9",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                    zIndex: 300,
                    animation: "dropFade 0.18s ease",
                  }}
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  {/* Company Overview */}
                  <button
                    onClick={() => { setAboutOpen(false); onOverviewClick?.(); }}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "0.75rem 1.25rem",
                      background: "none",
                      border: "none",
                      borderBottom: "1px solid #F0F0F0",
                      textAlign: "left",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "#1C1C1C",
                      letterSpacing: "0.04em",
                      cursor: "pointer",
                      transition: "background 0.12s, color 0.12s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#FDF5F5"; e.currentTarget.style.color = "#B22222"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#1C1C1C"; }}
                  >
                    Company Overview
                  </button>

                  {/* Our Solution Suite — Level 2 trigger */}
                  <div
                    style={{ position: "relative" }}
                    onMouseEnter={() => { cancelClose(); cancelSolutionsClose(); setSolutionsOpen(true); }}
                    onMouseLeave={() => { scheduleSolutionsClose(); scheduleClose(); }}
                  >
                    <button
                      onClick={() => { setAboutOpen(false); setSolutionsOpen(false); onSolutionsClick?.(); }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        padding: "0.75rem 1.25rem",
                        background: solutionsOpen ? "#FDF5F5" : "none",
                        border: "none",
                        textAlign: "left",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: solutionsOpen ? "#B22222" : "#1C1C1C",
                        letterSpacing: "0.04em",
                        cursor: "pointer",
                        transition: "background 0.12s, color 0.12s",
                      }}
                    >
                      Our Solution Suite
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M3.5 2L6.5 5L3.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* Level 2 sub-dropdown */}
                    {solutionsOpen && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: "calc(100% + 1px)",
                          minWidth: "240px",
                          background: "#FFFFFF",
                          border: "1px solid #D9D9D9",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                          zIndex: 400,
                          animation: "dropFade 0.18s ease",
                        }}
                        onMouseEnter={() => { cancelClose(); cancelSolutionsClose(); }}
                        onMouseLeave={() => { scheduleSolutionsClose(); scheduleClose(); }}
                      >
                        {solutions.map((sol, idx) => (
                          <button
                            key={sol.slug}
                            onClick={() => handleSolutionClick(sol.slug)}
                            style={{
                              display: "block",
                              width: "100%",
                              padding: "0.625rem 1.25rem",
                              background: "none",
                              border: "none",
                              borderBottom: idx < solutions.length - 1 ? "1px solid #F5F5F5" : "none",
                              textAlign: "left",
                              fontSize: "0.75rem",
                              fontWeight: 500,
                              color: "#1C1C1C",
                              letterSpacing: "0.02em",
                              cursor: "pointer",
                              transition: "background 0.12s, color 0.12s, padding-left 0.12s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "#FDF5F5";
                              e.currentTarget.style.color = "#B22222";
                              e.currentTarget.style.paddingLeft = "1.5rem";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "none";
                              e.currentTarget.style.color = "#1C1C1C";
                              e.currentTarget.style.paddingLeft = "1.25rem";
                            }}
                          >
                            {sol.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* Right tagline */}
        <div
          style={{
            fontSize: "0.68rem",
            fontWeight: 500,
            color: "#9A9A9A",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <span className="hidden md:inline">AI Powered Engineering Intelligence</span>
        </div>
      </div>

      <style>{`
        @keyframes dropFade {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
