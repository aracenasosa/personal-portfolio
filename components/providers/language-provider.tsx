"use client";

import * as React from "react";
import {
  DEFAULT_LANGUAGE,
  i18n,
  languageNames,
  type Language,
} from "@/lib/i18n";

const STORAGE_KEY = "portfolio-language";
const LANGUAGE_SWITCH_ENABLED = false;

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  dictionary: (typeof i18n)[Language];
  mounted: boolean;
}

const LanguageContext = React.createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setLanguageState(DEFAULT_LANGUAGE);
    window.localStorage.setItem(STORAGE_KEY, DEFAULT_LANGUAGE);
    document.documentElement.lang = DEFAULT_LANGUAGE;
    setMounted(true);
  }, []);

  const setLanguage = React.useCallback((nextLanguage: Language) => {
    if (!LANGUAGE_SWITCH_ENABLED) {
      setLanguageState(DEFAULT_LANGUAGE);
      window.localStorage.setItem(STORAGE_KEY, DEFAULT_LANGUAGE);
      document.documentElement.lang = DEFAULT_LANGUAGE;
      return;
    }

    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;
  }, []);

  const toggleLanguage = React.useCallback(() => {
    setLanguage(language === "en" ? "es" : "en");
  }, [language, setLanguage]);

  const value = React.useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      dictionary: i18n[language],
      mounted,
    }),
    [language, mounted, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}

export { languageNames };
