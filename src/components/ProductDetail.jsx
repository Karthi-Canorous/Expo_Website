"use client";

import { motion } from "framer-motion";
import { solutions } from "@/data/products";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, Play, Zap, Target, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function ProductDetail({ slug }) {
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return notFound();

  return (
    <section className="relative pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Solutions
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-50 border border-gray-100">
              {solution.videoFile ? (
                <video
                  src={solution.videoFile}
                  controls
                  className="w-full h-full object-cover"
                  poster=""
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                      </div>
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary/30"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              )}
              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span className="text-[10px] text-gray-500">Video Preview — {solution.title}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              <span className="gradient-text">{solution.title}</span>
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              {solution.description}
            </p>

            <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-accent" />
                <h3 className="text-sm font-semibold text-gray-900">Key Features</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {solution.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-1.5"
                  >
                    <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-500 text-xs">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-5 shadow-md border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-semibold text-gray-900">Business Impact</h3>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">{solution.businessImpact}</p>
            <div className="mt-4 space-y-2">
              {solution.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-gray-500 text-xs">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl p-5 shadow-md border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-accent" />
              <h3 className="text-sm font-semibold text-gray-900">Use Cases</h3>
            </div>
            <div className="space-y-2">
              {solution.useCases.map((useCase, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-gray-500 text-xs">{useCase}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
          >
            Schedule a Demo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
