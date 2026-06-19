"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Canorous Technologies - AI Powered Company";
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex <= fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText]);

  return (
    <section className="relative pt-20 pb-16 md:pb-20 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-[128px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-primary/10 rounded-2xl"
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-xs font-medium text-primary border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AI Powered Technology
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-3"
        >
          <span className="text-base sm:text-lg md:text-xl text-gray-500 font-light">
            One Partner for
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-3 leading-[0.9] text-gray-900"
        >
          <span className="block">
            {displayText}
            <span className="inline-block w-[3px] h-[0.8em] bg-primary ml-1 animate-pulse" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-gray-500 font-light max-w-3xl mx-auto mb-3"
        >
          <span className="gradient-text font-semibold">Visualization</span>,{" "}
          <span className="gradient-text font-semibold">Simulation</span> &{" "}
          <span className="gradient-text font-semibold">Automation</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm text-gray-400 mb-8"
        >
          for a Smarter Future
        </motion.p>

<motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
          >
            Explore Solutions
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
