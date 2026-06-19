"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, Loader2, User, Mail, Phone, Building2, ArrowRight, ArrowLeft } from "lucide-react";
import { useFormContext } from "@/context/FormContext";

export default function LeadCaptureForm() {
  const { isSubmitting, isRedirecting, submitLead } = useFormContext();
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [errors, setErrors] = useState({});
  const [ripplePos, setRipplePos] = useState(null);

  const handleStep1 = (e) => {
    e.preventDefault();
    if (!fullName.trim() || fullName.trim().length < 2) {
      setNameError("Please enter your full name");
      return;
    }
    setNameError("");
    setStep(2);
  };

  const handleStep2 = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!mobile.trim() || !/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }
    if (!companyName.trim() || companyName.trim().length < 2) {
      newErrors.companyName = "Please enter your company name";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    submitLead({ fullName, email, mobile, companyName });
  };

  if (isRedirecting) {
    return (
    <section className="relative pt-20 pb-12 px-4">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-xl font-bold gradient-text mb-3">Thank You, {fullName}!</h3>
            <p className="text-gray-500 text-sm">Welcome to Canorous Technologies</p>
            <motion.div
              className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden mx-auto mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-20 pb-12 px-4">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
            Let&apos;s Build the <span className="gradient-text">Future Together</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Fill in your details to explore our solutions
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-3 mb-5">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  step >= s
                    ? "bg-gradient-to-br from-primary to-accent text-white"
                    : "bg-gray-100 text-gray-400 border border-gray-200"
                }`}
              >
                {step > s ? <CheckCircle className="w-4 h-4" /> : s}
              </div>
              {s < 2 && (
                <div className={`w-12 h-0.5 rounded-full transition-all duration-500 ${step > 1 ? "bg-gradient-to-r from-primary to-accent" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mb-5 text-xs">
          <span className={`transition-colors ${step === 1 ? "text-gray-900 font-medium" : "text-gray-400"}`}>Step 1 of 2</span>
          <span className={`transition-colors ${step === 2 ? "text-gray-900 font-medium" : "text-gray-400"}`}>Step 2 of 2</span>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-white rounded-2xl p-5 md:p-6 shadow-md border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

                <div className="relative">
                  <h3 className="text-lg font-bold mb-1 text-gray-900">Let&apos;s Get Started</h3>
                  <p className="text-gray-500 text-xs mb-5">Enter your full name to continue</p>

                  <form onSubmit={handleStep1} className="space-y-4">
                    <div className="relative group">
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => { setFullName(e.target.value); setNameError(""); }}
                          placeholder="Enter your full name"
                          className="w-full pl-10 pr-3 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm"
                        />
                      </div>
                      <AnimatePresence>
                        {nameError && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-[10px] mt-1"
                          >
                            {nameError}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-white rounded-2xl p-5 md:p-6 shadow-md border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-[40px] pointer-events-none" />

                <div className="relative">
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 transition-colors mb-4 text-xs"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    Back
                  </button>

                  <h3 className="text-lg font-bold mb-1 text-gray-900">Tell Us About Your Business</h3>
                  <p className="text-gray-500 text-xs mb-5">
                    Welcome, <span className="text-gray-900 font-medium">{fullName}</span>! Complete your details below.
                  </p>

                  <form onSubmit={handleStep2} className="space-y-3">
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="relative group">
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: "" })); }}
                            placeholder="your@email.com"
                            className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm"
                          />
                        </div>
                        <AnimatePresence>
                          {errors.email && (
                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-red-500 text-[10px] mt-1">
                              {errors.email}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="relative group">
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Mobile Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                          <input
                            type="tel"
                            value={mobile}
                            onChange={(e) => { setMobile(e.target.value); setErrors((p) => ({ ...p, mobile: "" })); }}
                            placeholder="9876543210"
                            className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm"
                          />
                        </div>
                        <AnimatePresence>
                          {errors.mobile && (
                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-red-500 text-[10px] mt-1">
                              {errors.mobile}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">Company Name</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => { setCompanyName(e.target.value); setErrors((p) => ({ ...p, companyName: "" })); }}
                          placeholder="Your Company Ltd."
                          className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm"
                        />
                      </div>
                      <AnimatePresence>
                        {errors.companyName && (
                          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-red-500 text-[10px] mt-1">
                            {errors.companyName}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full py-3 rounded-lg bg-gradient-to-r from-primary via-red-500 to-accent text-white font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setRipplePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                        setTimeout(() => setRipplePos(null), 600);
                      }}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.span key="loading" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center justify-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Processing...
                          </motion.span>
                        ) : (
                          <motion.span key="submit" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center justify-center gap-2">
                            Submit & Explore
                            <Send className="w-4 h-4" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                      {ripplePos && (
                        <span
                          className="absolute rounded-full bg-white/30 animate-[ripple_0.6s_ease-out_forwards]"
                          style={{ left: ripplePos.x - 10, top: ripplePos.y - 10, width: 20, height: 20 }}
                        />
                      )}
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
