"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProductDetail from "@/components/ProductDetail";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { FormProvider, useFormContext } from "@/context/FormContext";

function ProductDetailContent() {
  const params = useParams();
  const slug = params.slug;
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
      <main className="relative z-10">
        <ProductDetail slug={slug} />
      </main>
      <Footer />
    </>
  );
}

export default function ProductDetailPage() {
  return (
    <FormProvider>
      <ProductDetailContent />
    </FormProvider>
  );
}
