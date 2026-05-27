"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type Language = "de" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: "de",
  setLanguage: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("de")

  useEffect(() => {
    // Check google translate cookie
    const match = document.cookie.match(/googtrans=\/de\/([a-z]{2})/)
    if (match && match[1]) {
      setLanguageState(match[1] as Language)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    // GDPR Consent check for Google Translate functional cookies
    if (lang === "en") {
      const savedConsent = localStorage.getItem("youthbridge-cookie-consent")
      let hasFunctional = false
      if (savedConsent) {
        try {
          const parsed = JSON.parse(savedConsent)
          hasFunctional = !!parsed.functional
        } catch (e) {}
      }

      if (!hasFunctional) {
        // Open cookie settings and halt translation until consented
        window.dispatchEvent(new CustomEvent("open-cookie-settings"))
        return
      }
    }

    setLanguageState(lang)
    
    // Set Google Translate cookie
    // Format: /source-lang/target-lang
    if (lang === "de") {
      // Clear cookie or set to /de/de to revert to original
      document.cookie = "googtrans=/de/de; path=/";
      document.cookie = "googtrans=/de/de; domain=" + window.location.hostname + "; path=/";
    } else {
      document.cookie = "googtrans=/de/en; path=/";
      document.cookie = "googtrans=/de/en; domain=" + window.location.hostname + "; path=/";
    }
    
    // Reload to apply translation
    window.location.reload()
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
