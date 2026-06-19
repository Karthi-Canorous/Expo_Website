"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { CompanyIntro, StatsAndWhyChoose } from "@/components/CompanyDescription";
import ProductsSection from "@/components/ProductsSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import LoadingScreen from "@/components/LoadingScreen";
import { FormProvider, useFormContext } from "@/context/FormContext";

function HomeContent() {
  const { isSubmitted } = useFormContext();

  return (
    <>
      <LoadingScreen />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        {!isSubmitted ? (
          <LeadCaptureForm />
        ) : (
          <>
            <Hero />
            <CompanyIntro />
            <ProductsSection />
            <StatsAndWhyChoose />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default function HomePage() {
  return (
    <FormProvider>
      <HomeContent />
    </FormProvider>
  );
}
