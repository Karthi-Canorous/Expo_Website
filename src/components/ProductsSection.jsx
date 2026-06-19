"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { solutions } from "@/data/products";
import Link from "next/link";
import { Building2, HardHat, Factory, Monitor, BrainCircuit, PenTool, ArrowRight, ChevronDown, CheckCircle } from "lucide-react";

const iconMap = { Building2, HardHat, Factory, Monitor, BrainCircuit, PenTool };

export default function ProductsSection() {
  const [selectedSlug, setSelectedSlug] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const selected = solutions.find((s) => s.slug === selectedSlug);

  return (
    <section className="relative pt-4 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-xs font-medium text-primary border border-primary/20 mb-4">
            Our Solution Suite
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            End-to-End <span className="gradient-text">Solutions</span> Across Industries
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Comprehensive AI-powered technology solutions designed to transform your business
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <label className="block text-sm font-semibold text-gray-700 mb-2">Select a Solution</label>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            >
              {selected ? (
                <div className="flex items-center gap-2">
                  {(() => {
                    const Icon = iconMap[selected.icon] || Building2;
                    return <Icon className="w-4 h-4 text-primary" />;
                  })()}
                  <span>{selected.title}</span>
                </div>
              ) : (
                <span className="text-gray-400">-- Select a solution to explore --</span>
              )}
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-30 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden"
                >
                  {solutions.map((solution) => {
                    const Icon = iconMap[solution.icon] || Building2;
                    const isActive = solution.slug === selectedSlug;
                    return (
                      <button
                        key={solution.slug}
                        onClick={() => {
                          setSelectedSlug(solution.slug);
                          setIsOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-gray-50 ${
                          isActive ? "bg-primary/5 text-primary" : "text-gray-700"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isActive ? "bg-primary/20" : "bg-gray-100"
                        }`}>
                          <Icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-gray-500"}`} />
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium">{solution.title}</div>
                          <div className="text-xs text-gray-400 truncate">{solution.shortDescription}</div>
                        </div>
                        {isActive && <CheckCircle className="w-4 h-4 text-primary ml-auto shrink-0" />}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                    {(() => {
                      const Icon = iconMap[selected.icon] || Building2;
                      return <Icon className="w-6 h-6 text-primary" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{selected.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{selected.description}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Key Features</h4>
                    <ul className="space-y-1.5">
                      {selected.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Benefits</h4>
                    <ul className="space-y-1.5">
                      {selected.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-400 italic max-w-md">{selected.businessImpact}</p>
                  <Link
                    href={`/products/${selected.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 shrink-0"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!selected && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-12 text-gray-400 text-sm"
          >
            Select a solution from the dropdown above to explore its features and benefits
          </motion.div>
        )}
      </div>
    </section>
  );
}
