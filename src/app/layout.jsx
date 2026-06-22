import "./globals.css";

export const metadata = {
  title: "Canorous Technologies — AI Powered Engineering Intelligence",
  description:
    "Canorous Technologies — One Partner for Visualization, Simulation & Automation for a Smarter Future.",
  keywords: [
    "Canorous Technologies",
    "CTPL",
    "AI Agents",
    "VR",
    "Digital Twins",
    "MEP",
    "Industrial Training",
    "Real Estate Visualization",
    "Construction Intelligence",
    "3D Modeling",
    "CAD Forge",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
