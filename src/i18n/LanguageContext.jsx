import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

const getInitialLang = () => {
  if (typeof window === "undefined") return "it";
  const saved = window.localStorage.getItem("lang");
  if (saved === "it" || saved === "en") return saved;
  return navigator.language?.toLowerCase().startsWith("en") ? "en" : "it";
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((l) => (l === "it" ? "en" : "it"));
  }, []);

  const value = { lang, toggle, t: translations[lang] };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}
