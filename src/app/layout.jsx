import "./globals.css";

export const metadata = {
  title: "Canorous Technologies ",
  description:
    "Canorous Technologies — One Partner for Visualization, Simulation & Automation for a Smarter Future.",
  keywords: [
    
    "VR",
    "AI Agents",
    "Digital Twins",
    "MEP",
    "Industrial Training",
    "Canorous Technologies",
    "CTPL",
    "Real Estate Visualization",
    "Construction Intelligence",
    "3D Modeling",
    "Walkthrough",
    "Digital Twin",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
