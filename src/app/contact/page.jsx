"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { FormProvider, useFormContext } from "@/context/FormContext";

function ContactContent() {
  const router = useRouter();
  const { isSubmitted, hydrated } = useFormContext();

  useEffect(() => {
    if (hydrated && !isSubmitted) {
      router.push("/");
    }
  }, [hydrated, isSubmitted, router]);

  if (!hydrated || !isSubmitted) {
    return null;
  }

  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10 pt-20">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default function ContactPage() {
  return (
    <FormProvider>
      <ContactContent />
    </FormProvider>
  );
}
