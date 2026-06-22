"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeedbackSection({ userData, onSubmitFeedback }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!message.trim() || message.trim().length < 10) {
      setError("Please share at least a brief comment (10 characters minimum).");
      return;
    }
    setError("");
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    onSubmitFeedback({ rating, message });
  }

  return (
    <section
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #EFEFEF",
        padding: "2rem 0 5rem",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <span style={{ fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B22222", marginBottom: "1rem", display: "block" }}>Your Opinion Matters</span>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 800,
              color: "#0F172A",
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          >
            Share Your Feedback
          </h2>
          <p style={{ fontSize: "0.88rem", color: "#757575" }}>
            Hello{userData?.name ? ` ${userData.name.split(" ")[0]}` : ""}, we would love to hear your thoughts on
            the CTPL Solution Suite.
          </p>
        </div>

        {/* Form card */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #D9D9D9",
            padding: "2.5rem",
            boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
          }}
        >
          <form onSubmit={handleSubmit} noValidate>
            {/* Rating */}
            <div style={{ marginBottom: "1.75rem" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#4A4A4A",
                  marginBottom: "0.75rem",
                }}
              >
                Overall Rating <span style={{ color: "#9A9A9A", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(optional)</span>
              </label>
              <div style={{ display: "flex", gap: "0.375rem" }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "0.25rem",
                      fontSize: "1.75rem",
                      color: star <= (hoverRating || rating) ? "#B22222" : "#D9D9D9",
                      transition: "color 0.1s",
                      lineHeight: 1,
                    }}
                  >
                    ★
                  </button>
                ))}
                {rating > 0 && (
                  <button
                    type="button"
                    onClick={() => setRating(0)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "0.72rem",
                      color: "#9A9A9A",
                      alignSelf: "center",
                      marginLeft: "0.375rem",
                      textDecoration: "underline",
                    }}
                  >
                    clear
                  </button>
                )}
              </div>
            </div>

            {/* Message */}
            <div style={{ marginBottom: "1.75rem" }}>
              <label
                htmlFor="feedback-msg"
                style={{
                  display: "block",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#4A4A4A",
                  marginBottom: "0.5rem",
                }}
              >
                Feedback &amp; Suggestions <span style={{ color: "#B22222" }}>*</span>
              </label>
              <textarea
                id="feedback-msg"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Share your thoughts, suggestions, or questions about our solutions…"
                rows={6}
                style={{
                  width: "100%",
                  padding: "0.875rem 1rem",
                  border: `1px solid ${error ? "#B22222" : "#BDBDBD"}`,
                  borderRadius: "2px",
                  fontSize: "0.88rem",
                  color: "#111111",
                  background: "#FFFFFF",
                  resize: "vertical",
                  outline: "none",
                  fontFamily: "inherit",
                  lineHeight: 1.65,
                  transition: "border-color 0.15s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#B22222")}
                onBlur={(e) => (e.target.style.borderColor = error ? "#B22222" : "#BDBDBD")}
                disabled={submitting}
              />
              {error && (
                <p style={{ fontSize: "0.72rem", color: "#B22222", marginTop: "0.375rem" }}>{error}</p>
              )}
              <p style={{ fontSize: "0.7rem", color: "#9A9A9A", marginTop: "0.375rem" }}>
                {message.length} characters
              </p>
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ padding: "0.875rem 2.5rem", fontSize: "0.8rem" }}
              disabled={submitting}
            >
              {submitting ? (
                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 0.8s linear infinite" }}>
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                    <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                  </svg>
                  Submitting…
                </span>
              ) : (
                "Submit Feedback"
              )}
            </button>
          </form>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
