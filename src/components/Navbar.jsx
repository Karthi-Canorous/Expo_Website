"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useFormContext } from "@/context/FormContext";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { isSubmitted, resetForm } = useFormContext();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const handleNavClick = (e, href) => {
    if (!isSubmitted && href !== "/") {
      e.preventDefault();
      router.push("/");
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100" : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow duration-300">
              <span className="text-sm font-black text-white">CTPL</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold tracking-tight gradient-text">CTPL</span>
              <span className="block text-[10px] text-gray-400 -mt-0.5 tracking-wider">Voice of Canorous</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  pathname === item.href ? "text-primary" : "text-gray-600 hover:text-gray-900"
                } ${!isSubmitted && item.href !== "/" ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>

          {isSubmitted ? (
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Link>
              <button
                onClick={() => { resetForm(); router.push("/"); }}
                className="px-4 py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-100 transition-all duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <span className="hidden md:inline-flex px-5 py-2.5 rounded-lg bg-gray-100 text-gray-400 text-sm font-semibold cursor-not-allowed">
              Get in Touch
            </span>
          )}

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-primary/10 text-primary border-l-2 border-primary"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  } ${!isSubmitted && item.href !== "/" ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
              {isSubmitted ? (
                <>
                  <Link
                    href="/contact"
                    className="block px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold text-center"
                  >
                    Get in Touch
                  </Link>
                  <button
                    onClick={() => { resetForm(); router.push("/"); setIsMobileOpen(false); }}
                    className="block w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium text-center hover:bg-gray-100 transition-all duration-300"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <span className="block px-4 py-3 rounded-lg bg-gray-100 text-gray-400 text-sm font-semibold text-center cursor-not-allowed">
                  Get in Touch
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
