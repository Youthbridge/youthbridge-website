"use client"

import { useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsent } from "./cookie-banner"

export function ThirdPartyScripts() {
  const [consent, setConsent] = useState<CookieConsent | null>(null)
  const [scriptsLoaded, setScriptsLoaded] = useState(false)

  useEffect(() => {
    // 1. Read initial consent
    const saved = localStorage.getItem("youthbridge-cookie-consent")
    if (saved) {
      try {
        setConsent(JSON.parse(saved))
      } catch (e) {
        // ignore
      }
    }

    // 2. Listen for consent changes
    const handleConsentChange = (e: Event) => {
      const customEvent = e as CustomEvent<CookieConsent>
      setConsent(customEvent.detail)
    }

    window.addEventListener("cookie-consent-changed", handleConsentChange as EventListener)
    return () => {
      window.removeEventListener("cookie-consent-changed", handleConsentChange as EventListener)
    }
  }, [])

  useEffect(() => {
    if (!consent || !consent.functional || scriptsLoaded) return

    // Initialize google translate widget on the window object safely
    ;(window as any).googleTranslateElementInit = () => {
      if ((window as any).google && (window as any).google.translate) {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "de",
            includedLanguages: "de,en",
            autoDisplay: false,
          },
          "google_translate_element"
        )
      }
    }

    // Append script dynamically
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    script.async = true
    document.body.appendChild(script)
    setScriptsLoaded(true)
  }, [consent, scriptsLoaded])

  return (
    <>
      {/* Vercel Analytics loaded dynamically ONLY when consented */}
      {consent?.analytics && <Analytics />}
    </>
  )
}
