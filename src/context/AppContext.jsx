"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [feedbackData, setFeedbackData] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ctpl_user");
      if (stored) {
        const parsed = JSON.parse(stored);
        // Guard against old sessions stored before Supabase integration that
        // lack registrationId — without it feedback submission always fails.
        if (!parsed.registrationId) {
          localStorage.removeItem("ctpl_user");
        } else {
          setUserData(parsed);
          setIsRegistered(true);
        }
      }
    } catch {}
    setHydrated(true);
  }, []);

  // Returns { success: boolean, error?: string, duplicate?: boolean }
  const register = useCallback(async (formData) => {
    let res, json;
    try {
      res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      json = await res.json();
    } catch {
      return { success: false, error: "Network error. Please check your connection." };
    }

    if (!res.ok) {
      return { success: false, error: json.error ?? "Registration failed. Please try again." };
    }

    const reg = json.registration;
    const user = {
      name: reg.full_name,
      email: reg.email,
      mobile: reg.mobile,
      company: reg.company_name,
      person_type: reg.person_type,
      registrationId: reg.id,
    };

    setUserData(user);
    setIsRegistered(true);
    try {
      localStorage.setItem("ctpl_user", JSON.stringify(user));
    } catch {}

    return { success: true, duplicate: json.duplicate };
  }, []);

  // Non-optimistic — waits for the API before marking feedback as submitted.
  // registration_id is mandatory on the server so we must confirm success first.
  // Returns { success: boolean, error?: string }
  const submitFeedback = useCallback(
    async (feedbackFormData) => {
      const registrationId = userData?.registrationId ?? null;

      let res, json;
      try {
        res = await fetch("/api/feedback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            registration_id: registrationId,
            rating: feedbackFormData.rating || null,
            message: feedbackFormData.message,
          }),
        });
        json = await res.json();
      } catch {
        return { success: false, error: "Network error. Please check your connection." };
      }

      if (!res.ok) {
        return { success: false, error: json.error ?? "Failed to submit feedback. Please try again." };
      }

      setFeedbackData(feedbackFormData);
      setIsFeedbackSubmitted(true);
      return { success: true };
    },
    [userData]
  );

  return (
    <AppContext.Provider
      value={{
        userData,
        feedbackData,
        isRegistered,
        isFeedbackSubmitted,
        hydrated,
        register,
        submitFeedback,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
