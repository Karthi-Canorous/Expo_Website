"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe, Clock, Calendar, ExternalLink } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Contact Numbers", value: "+91 90877 44900 | +91 90877 44600", href: "tel:+919087744900" },
  { icon: Mail, label: "Email", value: "sales@can-india.co.in", href: "mailto:sales@can-india.co.in" },
  { icon: Globe, label: "Website", value: "can-india.co.in", href: "https://can-india.co.in" },
  { icon: MapPin, label: "Address", value: "96-A, 1st Floor, Bharathi Colony, 2nd Cross East, Peelamedu, Coimbatore - 641004" },
  { icon: Clock, label: "Business Hours", value: "Mon – Sat, 9:00 AM – 6:00 PM" },
];

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
];

export default function ContactSection() {
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
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Let&apos;s Build the <span className="gradient-text">Future Together</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Ready to transform your business with AI-powered engineering intelligence? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
              <h3 className="text-lg font-bold mb-1 text-gray-900">Canorous Technologies</h3>
              <p className="text-gray-500 text-xs mb-4">Private Limited</p>

              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:shadow-md group-hover:shadow-primary/20 transition-shadow">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-gray-900 font-medium hover:text-primary transition-colors text-xs">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium text-xs">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              Schedule a Demo
            </motion.a>

            <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
              <h4 className="text-[10px] font-semibold mb-3 text-gray-400 uppercase tracking-wider">Follow Us</h4>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-3 py-1.5 rounded-lg bg-gray-100 text-xs font-medium hover:bg-gray-200 hover:text-primary transition-all flex items-center gap-1 text-gray-600"
                  >
                    {link.name}
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 h-full">
              <h3 className="text-base font-bold mb-4 text-gray-900">Our Location</h3>
              <div className="rounded-xl overflow-hidden bg-gray-50 border border-gray-100 aspect-video flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5" />
                <div className="relative text-center">
                  <MapPin className="w-10 h-10 text-primary mx-auto mb-2" />
                  <p className="text-gray-500 text-xs">Coimbatore, Tamil Nadu, India</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Interactive map coming soon</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-gray-50">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs text-gray-500">Peelamedu, Coimbatore - 641004</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-gray-50">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs text-gray-500">+91 90877 44900 / 44600</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
