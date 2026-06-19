"use client";

import { motion } from "framer-motion";
import { useInView, useAnimatedCounter } from "@/hooks/useInView";

function Counter({ end, label, suffix = "", delay = 0 }) {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const count = useAnimatedCounter(end, 2500, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center p-3"
    >
      <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">
        {count}{suffix}
      </div>
      <div className="text-gray-500 text-xs sm:text-sm font-medium">{label}</div>
    </motion.div>
  );
}

export function CompanyIntro() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="relative pt-20 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                We Transform Ideas Into{" "}
                <span className="gradient-text">Immersive Real-World Experiences</span>
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                Canorous Technologies is an AI-powered engineering intelligence company
                specializing in visualization, simulation, and automation. We deliver
                end-to-end solutions across AR, VR, AI Agents, Digital Twins, Software,
                MEP, and Industrial Training.
              </p>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base mt-3">
                From concept to reality — we help businesses innovate, visualize, simulate,
                automate, and succeed with cutting-edge technology that drives real results.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl blur-xl" />
              <div className="relative bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "3D Model", icon: "🧊" },
                    { label: "VR Walkthrough", icon: "🥽" },
                    { label: "AI Agent", icon: "🤖" },
                    { label: "MEP Model", icon: "⚙️" },
                    { label: "Digital Twin", icon: "🔗" },
                    { label: "Pixel Streaming", icon: "📡" },
                  ].map((item) => (
                    <div key={item.label} className="text-center p-2 rounded-lg bg-white hover:bg-gray-100 transition-colors cursor-default border border-gray-100">
                      <div className="text-xl mb-1">{item.icon}</div>
                      <div className="text-[10px] font-semibold text-gray-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function StatsAndWhyChoose() {
  return (
    <section className="relative pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Counter end={50} label="Projects Delivered" suffix="+" delay={0} />
            <Counter end={25} label="Expert Professionals" suffix="+" delay={0.1} />
            <Counter end={10} label="Industries Served" suffix="+" delay={0.2} />
            <Counter end={100} label="Client Satisfaction" suffix="%" delay={0.3} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100"
        >
          <h3 className="text-xl font-bold text-center mb-6 text-gray-900">Why Choose <span className="gradient-text">Canorous</span>?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "ISO Certified Excellence", desc: "Quality. Consistency. Reliability.", icon: "🏆" },
              { title: "Expert Team", desc: "Designers, Engineers, Developers & AI Specialists.", icon: "👥" },
              { title: "Cutting Edge Technology", desc: "AR, VR, AI, Unreal, Cloud & More.", icon: "🚀" },
              { title: "Industry Focused", desc: "Real Results for Real-World Businesses.", icon: "🎯" },
              { title: "End-to-End Solutions", desc: "From Concept to Deployment.", icon: "🔄" },
              { title: "Support That Stays With You", desc: "Long Term. Always. Reliable.", icon: "🤝" },
            ].map((item) => (
              <div key={item.title} className="text-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-xs mb-1 text-gray-900">{item.title}</h4>
                <p className="text-gray-500 text-[10px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function CompanyDescription() {
  return (
    <>
      <CompanyIntro />
      <StatsAndWhyChoose />
    </>
  );
}
