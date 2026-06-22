"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppProvider, useApp } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import RegistrationSection from "@/components/RegistrationSection";
import SolutionSuite from "@/components/SolutionSuite";
import CompanyOverview from "@/components/CompanyOverview";
import FeedbackSection from "@/components/FeedbackSection";
import ContactInfo from "@/components/ContactInfo";

function FeedbackSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        background: "#FFFFFF",
        border: "1px solid #D9D9D9",
        padding: "3rem 2.5rem",
        textAlign: "center",
        boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          background: "#B22222",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1.5rem",
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>

      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "#0F172A",
          marginBottom: "1rem",
          letterSpacing: "-0.01em",
        }}
      >
        Thank You for Your Feedback
      </h3>
      <p
        style={{
          fontSize: "0.88rem",
          color: "#4A4A4A",
          lineHeight: 1.75,
          maxWidth: "480px",
          margin: "0 auto",
        }}
      >
        We appreciate your time and interest in Canorous Technologies. Our team
        will review your comments and get in touch if required.
      </p>

      <div
        style={{
          marginTop: "2rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid #EFEFEF",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "#9A9A9A", letterSpacing: "0.04em" }}>
          — CANOROUS TECHNOLOGIES · AI POWERED ENGINEERING INTELLIGENCE
        </p>
      </div>
    </motion.div>
  );
}

function AppContent() {
  const { isRegistered, isFeedbackSubmitted, userData, hydrated, register, submitFeedback } = useApp();
  const solutionsRef = useRef(null);
  const overviewRef = useRef(null);
  const feedbackRef = useRef(null);
  const contactRef = useRef(null);
  const [requestedSlug, setRequestedSlug] = useState(null);

  useEffect(() => {
    if (isRegistered && overviewRef.current) {
      const timer = setTimeout(() => {
        overviewRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isRegistered]);

  useEffect(() => {
    if (isFeedbackSubmitted && contactRef.current) {
      const timer = setTimeout(() => {
        contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isFeedbackSubmitted]);

  const scrollToSolutions = () => {
    solutionsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToOverview = () => {
    overviewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToFeedback = () => {
    feedbackRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSolutionSelect = (slug) => {
    setRequestedSlug(slug);
    solutionsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!hydrated) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            width: "28px",
            height: "28px",
            border: "2px solid #EFEFEF",
            borderTopColor: "#B22222",
            borderRadius: "50%",
            animation: "spin 0.7s linear infinite",
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <>
      <Navbar
        isRegistered={isRegistered}
        onSolutionsClick={scrollToSolutions}
        onOverviewClick={scrollToOverview}
        onSolutionSelect={handleSolutionSelect}
      />

      <main>
        {/* ── Section 1: Registration ─────────────────────── */}
        <AnimatePresence>
          {!isRegistered && (
            <motion.div
              key="registration"
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <RegistrationSection onSubmit={register} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Sections 2–6: Revealed after registration ──── */}
        {isRegistered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Section 2 — Company Overview */}
            <div ref={overviewRef} style={{ scrollMarginTop: "64px" }}>
              <CompanyOverview />
            </div>

            {/* Section 3 — Our Solution Suite */}
            <div ref={solutionsRef} style={{ scrollMarginTop: "64px" }}>
              <SolutionSuite requestedSlug={requestedSlug} onContactClick={scrollToFeedback} />
            </div>

            {/* Section 4/5 — Feedback → Success */}
            <div ref={feedbackRef} style={{ scrollMarginTop: "64px" }}>
              {!isFeedbackSubmitted ? (
                <FeedbackSection userData={userData} onSubmitFeedback={submitFeedback} />
              ) : (
                <section
                  style={{
                    background: "#FFFFFF",
                    borderTop: "1px solid #EFEFEF",
                    padding: "5rem 0",
                  }}
                >
                  <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
                      <div style={{ width: "2.5rem", height: "2px", background: "#B22222" }} />
                      <span className="section-label">Feedback Received</span>
                    </div>
                    <FeedbackSuccess />
                  </div>
                </section>
              )}
            </div>

            {/* Section 6 — Contact Information (post-feedback only) */}
            <AnimatePresence>
              {isFeedbackSubmitted && (
                <motion.div
                  key="contact"
                  ref={contactRef}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                  style={{ scrollMarginTop: "64px" }}
                >
                  <ContactInfo />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </main>
    </>
  );
}

export default function Page() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
