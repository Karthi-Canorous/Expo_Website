"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Canorous Technologies — One Partner for Visualization, Simulation & Automation for a Smarter Future.";
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, charIndex));
          setCharIndex((c) => c + 1);
        } else if (!isDeleting && charIndex > fullText.length) {
          setTimeout(() => setIsDeleting(true), 3000);
        } else if (isDeleting && charIndex > 0) {
          setCharIndex((c) => c - 1);
          setDisplayText(fullText.slice(0, charIndex - 1));
        }
      },
      isDeleting ? 30 : 60
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-accent/8 rounded-full blur-[80px]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-primary/5 rounded-2xl"
            style={{
              width: 80 + i * 60,
              height: 80 + i * 60,
              top: `${20 + i * 18}%`,
              left: `${10 + i * 20}%`,
            }}
            animate={{ rotate: 360, scale: [1, 1.03, 1] }}
            transition={{ duration: 25 + i * 5, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-primary border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AI Powered Technology
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4"
        >
          <span className="text-lg sm:text-xl md:text-2xl text-text-muted font-light">
            One Partner for
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 leading-[0.9]"
        >
          <span className="block text-shadow">
            {displayText}
            <span className="inline-block w-[3px] h-[0.8em] bg-primary ml-1 animate-pulse" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-text-muted font-light max-w-3xl mx-auto mb-4"
        >
          <span className="gradient-text font-semibold">Visualization</span>,{" "}
          <span className="gradient-text font-semibold">Simulation</span> &{" "}
          <span className="gradient-text font-semibold">Automation</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm sm:text-base text-text-muted/60 mb-10"
        >
          for a Smarter Future
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {/* {["AR", "VR", "AI Agents", "Digital Twins", "Software", "MEP", "Industrial Training"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full glass text-xs sm:text-sm font-medium text-text-muted border border-white/5 hover:border-primary/30 hover:text-white transition-all duration-300"
            >
              {tag}
            </span>
          ))} */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
          >
            Explore Solutions
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
