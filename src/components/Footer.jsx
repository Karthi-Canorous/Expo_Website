"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "Real Estate & Architecture", href: "/products/real-estate-architecture" },
  { label: "Construction & MEP Intelligence", href: "/products/construction-mep" },
  { label: "Industrial & Factory Training", href: "/products/industrial-factory-training" },
  { label: "Software & Immersive Tech", href: "/products/software-immersive" },
  { label: "AI Agentic Business Solutions", href: "/products/ai-agentic-business" },
  { label: "CAD Forge (2D to 3D Editable CAD)", href: "/products/cad-forge" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-200 bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-sm font-black text-white">CT</span>
              </div>
              <div>
                <span className="text-lg font-bold gradient-text">CTPL</span>
                <span className="block text-[10px] text-gray-400 -mt-0.5 tracking-wider">Voice of Canorous</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              AI-powered engineering intelligence company. One Partner for Visualization,
              Simulation & Automation for a Smarter Future.
            </p>
            <div className="space-y-3">
              <a href="tel:+919087744900" className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-900 transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +91 90877 44900
              </a>
              <a href="mailto:sales@can-india.co.in" className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-900 transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                sales@can-india.co.in
              </a>
              <a href="https://can-india.co.in" className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-900 transition-colors">
                <Globe className="w-4 h-4 text-primary" />
                can-india.co.in
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <MapPin className="w-4 h-4 text-primary" />
                Coimbatore, India
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-400">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 hover:gap-3 transition-all"
                >
                  <ArrowUpRight className="w-3 h-3" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-400">Solutions</h4>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 hover:gap-3 transition-all"
                >
                  <ArrowUpRight className="w-3 h-3 shrink-0" />
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2026 Canorous Technologies Private Limited. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
