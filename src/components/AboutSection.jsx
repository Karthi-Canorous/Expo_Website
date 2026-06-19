"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Lightbulb, Rocket, Shield, Users, Award } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To deliver end-to-end visualization, simulation, and automation solutions that transform how businesses operate.",
    gradient: "from-primary to-red-400",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become the most trusted technology partner for businesses seeking digital transformation.",
    gradient: "from-accent to-orange-400",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Innovation. Excellence. Reliability. We build technology that transforms ideas into immersive experiences.",
    gradient: "from-red-600 to-primary",
  },
];

const coreValues = [
  { icon: Lightbulb, label: "Innovate" },
  { icon: Rocket, label: "Visualize" },
  { icon: Shield, label: "Simulate" },
  { icon: Users, label: "Automate" },
  { icon: Award, label: "Succeed" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  return (
    <section className="relative py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-xs font-medium text-primary border border-primary/20 mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            About <span className="gradient-text">Canorous Technologies</span>
          </h2>
          <p className="text-gray-500 text-base max-w-3xl mx-auto leading-relaxed">
            Canorous Technologies Private Limited is an AI-powered engineering intelligence company
            specializing in visualization, simulation, and automation. We deliver end-to-end solutions
            across industries — from concept to deployment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 mb-10"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group bg-white rounded-xl p-5 shadow-md border border-gray-100 cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow duration-300`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold mb-2 text-gray-900">{card.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-5 md:p-6 shadow-md border border-gray-100"
        >
          <h3 className="text-lg font-bold text-center mb-5 text-gray-900">From Concept to <span className="gradient-text">Reality</span></h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="text-center p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-2">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-gray-900">{value.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-5 text-xs text-gray-500">
            {["Sketch / Idea", "Floor Plan", "3D Model", "VR Walkthrough", "AI Agent", "Project Success"].map((step, i) => (
              <div key={step} className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-[10px] flex items-center justify-center font-bold">{i + 1}</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 bg-white rounded-2xl p-5 md:p-6 shadow-md border border-gray-100"
        >
          <h3 className="text-lg font-bold text-center mb-6 text-gray-900">Industries We <span className="gradient-text">Serve</span></h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {["Real Estate", "Construction", "Manufacturing", "Engineering", "Automotive", "Infrastructure"].map((industry) => (
              <div key={industry} className="text-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-default border border-gray-100">
                <div className="text-2xl mb-1">
                  {industry === "Real Estate" && "🏢"}
                  {industry === "Construction" && "🏗️"}
                  {industry === "Manufacturing" && "🏭"}
                  {industry === "Engineering" && "⚙️"}
                  {industry === "Automotive" && "🚗"}
                  {industry === "Infrastructure" && "🌉"}
                </div>
                <span className="text-[10px] font-medium text-gray-900">{industry}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
