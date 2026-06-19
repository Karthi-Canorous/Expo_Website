"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { FormProvider, useFormContext } from "@/context/FormContext";

function AboutContent() {
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
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}

export default function AboutPage() {
  return (
    <FormProvider>
      <AboutContent />
    </FormProvider>
  );
}
