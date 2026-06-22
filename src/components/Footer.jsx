"use client";

import { solutions } from "@/data/products";

const CONTACT = [
  {
    label: "Email",
    value: "sales@can-india.co.in",
    href: "mailto:sales@can-india.co.in",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 90877 44900",
    href: "tel:+919087744900",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Phone 2",
    value: "+91 90877 44600",
    href: "tel:+919087744600",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "96-A, 1st Floor, Bharathi Colony, Peelamedu, Coimbatore - 641004",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Website",
    value: "can-india.co.in",
    href: "https://can-india.co.in",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const CHANNEL_PARTNERS = [
  {
    city: "Chennai",
    phone: "+91 99623 84650",
    address: "1st Floor, MIG 714, TNHB, Tiruvallur, Chennai - 602002. Above Aarti Scans and Labs.",
  },
  {
    city: "Bangalore",
    phone: "+91 77602 61706",
    address: "No. 16, First Floor, 7th Main, 80 Feet Road, Kalyan Nagar, Bangalore - 560043, Karnataka",
  },
];

const GLOBAL_PARTNERS = [
  {
    region: "Bahrain",
    phone: "+973 3214 7070 / +973 351 351 25",
    address: "Flat / Shop No. 104, Building 9B, Avenue 6, Block 603, Mahazzah, Sitra, Kingdom of Bahrain.",
  },
];

export default function Footer({ onContactClick, onFooterContactClick, isRegistered }) {
  return (
    <footer style={{ background: "#0F172A", borderTop: "1px solid #1E2D4A" }}>

      {/* CTA band — only after registration */}
      {isRegistered && (
      <div
        style={{
          borderBottom: "1px solid #1E2D4A",
          padding: "2.5rem 2rem",
          background: "rgba(178,34,34,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
          className="footer-cta-row"
        >
          <div>
            <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.01em", marginBottom: "0.25rem" }}>
              Let's Build the Future Together
            </p>
            <p style={{ fontSize: "0.8rem", color: "#94A3B8" }}>
              Speak to our team and explore the right solution for your organisation.
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button
              onClick={() => onContactClick?.()}
              style={{
                background: "#B22222",
                color: "#FFFFFF",
                border: "none",
                padding: "0.625rem 1.5rem",
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
                color: "#E2E8F0",
                border: "1.5px solid #334155",
                padding: "0.625rem 1.5rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "border-color 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#B22222"; e.currentTarget.style.color = "#FFFFFF"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#334155"; e.currentTarget.style.color = "#E2E8F0"; }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      )}

      {/* Main columns — only after registration */}
      {isRegistered && (
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "3.5rem 2rem",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr",
          gap: "3rem",
        }}
        className="footer-cols"
      >
        {/* Column 1 — Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                background: "#B22222",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M3 17L10 3L17 17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.5 12H14.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#FFFFFF", letterSpacing: "0.04em" }}>CTPL</div>
              <div style={{ fontSize: "0.55rem", fontWeight: 500, color: "#64748B", letterSpacing: "0.16em", textTransform: "uppercase" }}>Unit of Canorous Technologies</div>
            </div>
          </div>

          <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#B22222", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1rem" }}>
            AI Powered Engineering Intelligence. Visualized.
          </p>

          <p style={{ fontSize: "0.8rem", color: "#94A3B8", lineHeight: 1.75, maxWidth: "320px" }}>
            CTPL delivers AI-powered engineering intelligence, immersive visualization, intelligent automation, and full-stack software solutions that help industries design, build, and operate smarter.
          </p>
        </div>

        {/* Column 2 — Solutions */}
        <div>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1.25rem", paddingBottom: "0.625rem", borderBottom: "1px solid #1E2D4A" }}>
            Solutions
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {solutions.map((sol) => (
              <li key={sol.slug} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ display: "inline-block", width: "4px", height: "4px", background: "#B22222", flexShrink: 0 }} />
                <span style={{ fontSize: "0.78rem", color: "#94A3B8", lineHeight: 1.4 }}>{sol.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div id="footer-contact">
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1.25rem", paddingBottom: "0.625rem", borderBottom: "1px solid #1E2D4A" }}>
            Contact
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {CONTACT.map(({ label, value, href, icon }) => (
              <li key={label} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                <span style={{ color: "#B22222", flexShrink: 0, marginTop: "1px" }}>{icon}</span>
                <div>
                  <div style={{ fontSize: "0.6rem", fontWeight: 600, color: "#475569", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.125rem" }}>
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{ fontSize: "0.78rem", color: "#94A3B8", textDecoration: "none", transition: "color 0.15s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                    >
                      {value}
                    </a>
                  ) : (
                    <span style={{ fontSize: "0.78rem", color: "#94A3B8" }}>{value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      )}

      {/* Contact-only section for registration page */}
      {!isRegistered && (
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "2.5rem 2rem" }}>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {CONTACT.map(({ label, value, href, icon }) => (
            <li key={label} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
              <span style={{ color: "#B22222", flexShrink: 0, marginTop: "1px" }}>{icon}</span>
              <div>
                <div style={{ fontSize: "0.6rem", fontWeight: 600, color: "#475569", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.125rem" }}>
                  {label}
                </div>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{ fontSize: "0.78rem", color: "#94A3B8", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                  >
                    {value}
                  </a>
                ) : (
                  <span style={{ fontSize: "0.78rem", color: "#94A3B8" }}>{value}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      )}

      {/* Channel Partners */}
      {isRegistered && (
      <div style={{ borderTop: "1px solid #1E2D4A" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "2.5rem 2rem",
          }}
        >
          <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1.5rem" }}>
            Our Channel Partners
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2rem",
            }}
            className="partners-grid"
          >
            {CHANNEL_PARTNERS.map(({ city, phone, address }) => (
              <div key={city}>
                <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#B22222", marginBottom: "0.5rem" }}>{city}</p>
                <p style={{ fontSize: "0.75rem", color: "#94A3B8", marginBottom: "0.25rem" }}>{phone}</p>
                <p style={{ fontSize: "0.72rem", color: "#64748B", lineHeight: 1.5 }}>{address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* Global Partners */}
      {isRegistered && (
      <div style={{ borderTop: "1px solid #1E2D4A" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "2.5rem 2rem",
          }}
        >
          <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1.5rem" }}>
            Global Partners
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2rem",
            }}
            className="partners-grid"
          >
            {GLOBAL_PARTNERS.map(({ region, phone, address }) => (
              <div key={region}>
                <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#B22222", marginBottom: "0.5rem" }}>{region}</p>
                <p style={{ fontSize: "0.75rem", color: "#94A3B8", marginBottom: "0.25rem" }}>{phone}</p>
                <p style={{ fontSize: "0.72rem", color: "#64748B", lineHeight: 1.5 }}>{address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* Copyright bar */}
      {isRegistered && (
      <div style={{ borderTop: "1px solid #1E2D4A" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "1.25rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <p style={{ fontSize: "0.72rem", color: "#475569" }}>
            © {new Date().getFullYear()} CTPL · Canorous Technologies. All Rights Reserved.
          </p>
          <p style={{ fontSize: "0.72rem", color: "#475569" }}>
            AI Powered Engineering Intelligence. Visualized.
          </p>
        </div>
      </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .footer-cols { grid-template-columns: 1fr 1fr !important; }
          .partners-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-cols { grid-template-columns: 1fr !important; }
          .footer-cta-row { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  );
}
