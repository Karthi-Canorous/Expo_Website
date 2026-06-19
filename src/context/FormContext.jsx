"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";

const FormContext = createContext(undefined);

export function FormProvider({ children }) {
  const [leadData, setLeadData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const saved = localStorage.getItem("ctpl_lead");
    if (saved) {
      setLeadData(JSON.parse(saved));
      setIsSubmitted(true);
    }
    setHydrated(true);
  }, []);

  const submitLead = useCallback((data) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setLeadData(data);
      setIsSubmitted(true);
      setIsSubmitting(false);
      setIsRedirecting(true);
      localStorage.setItem("ctpl_lead", JSON.stringify(data));
    }, 2000);
  }, []);

  const resetForm = useCallback(() => {
    setLeadData(null);
    setIsSubmitted(false);
    setIsRedirecting(false);
    setStep(1);
    localStorage.removeItem("ctpl_lead");
  }, []);

  return (
    <FormContext.Provider
      value={{ leadData, isSubmitted, isSubmitting, isRedirecting, submitLead, step, setStep, resetForm, hydrated }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) throw new Error("useFormContext must be used within FormProvider");
  return context;
}
