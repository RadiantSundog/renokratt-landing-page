"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "et" | "ru";

interface LanguageContextType {
  language: Language;
  translations: Record<string, any>;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    const loadTranslations = async () => {
      const res = await fetch(`/locales/${language}.json`);
      const data = await res.json();
      setTranslations(data);
    };
    loadTranslations();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
