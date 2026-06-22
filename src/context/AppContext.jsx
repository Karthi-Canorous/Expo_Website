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
        setUserData(parsed);
        setIsRegistered(true);
      }
    } catch {}
    setHydrated(true);
  }, []);

  const register = useCallback((data) => {
    setUserData(data);
    setIsRegistered(true);
    try {
      localStorage.setItem("ctpl_user", JSON.stringify(data));
    } catch {}
  }, []);

  const submitFeedback = useCallback((data) => {
    setFeedbackData(data);
    setIsFeedbackSubmitted(true);
  }, []);

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
