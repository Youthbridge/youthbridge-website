"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Shield, Settings, ChevronDown, ChevronUp, Check, X } from "lucide-react"

export interface CookieConsent {
  necessary: boolean
  functional: boolean
  analytics: boolean
  consented: boolean
}

const DEFAULT_CONSENT: CookieConsent = {
  necessary: true,
  functional: false,
  analytics: false,
  consented: false,
}

export function CookieBanner() {
  const [mounted, setMounted] = useState(false)
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  
  // Consent state
  const [consent, setConsent] = useState<CookieConsent>(DEFAULT_CONSENT)

  useEffect(() => {
    setMounted(true)
    
    // Check if consent has already been saved
    const savedConsent = localStorage.getItem("youthbridge-cookie-consent")
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent) as CookieConsent
        setConsent(parsed)
        if (!parsed.consented) {
          setShowBanner(true)
        }
      } catch (e) {
        setShowBanner(true)
      }
    } else {
      setShowBanner(true)
    }

    // Event listener for reopening the banner (e.g. from footer)
    const handleReopen = () => {
      setShowBanner(true)
      setShowDetails(true)
    }

    window.addEventListener("open-cookie-settings", handleReopen)
    return () => {
      window.removeEventListener("open-cookie-settings", handleReopen)
    }
  }, [])

  const saveConsent = (updatedConsent: CookieConsent) => {
    localStorage.setItem("youthbridge-cookie-consent", JSON.stringify(updatedConsent))
    setConsent(updatedConsent)
    setShowBanner(false)
    
    // Dispatch custom event to notify layout/script-loaders of changes
    window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: updatedConsent }))
    
    // Force reload if language cookie needs to clear or refresh for scripts
    if (!updatedConsent.functional) {
      // Clear Google Translate cookies if functional rejected
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=" + window.location.hostname + "; path=/;"
    }
  }

  const handleAcceptAll = () => {
    const updated = {
      necessary: true,
      functional: true,
      analytics: true,
      consented: true,
    }
    saveConsent(updated)
  }

  const handleRejectAll = () => {
    const updated = {
      necessary: true,
      functional: false,
      analytics: false,
      consented: true,
    }
    saveConsent(updated)
  }

  const handleSaveSelection = () => {
    const updated = {
      ...consent,
      consented: true,
    }
    saveConsent(updated)
  }

  const toggleCategory = (category: keyof Omit<CookieConsent, "necessary" | "consented">) => {
    setConsent((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  if (!mounted || !showBanner) return null

  return (
    <div className="fixed inset-0 z-9999 flex items-end justify-center p-4 md:p-6 bg-black/45 backdrop-blur-xs animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-white/95 border border-gray-150 rounded-2xl shadow-2xl overflow-hidden md:max-h-[90vh] flex flex-col transition-all duration-300 transform translate-y-0 scale-100 ease-out"
        style={{
          fontFamily: "var(--font-geist), sans-serif",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="p-6 overflow-y-auto space-y-6 max-h-[70vh] md:max-h-none">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#1a3a8f]/10 text-[#1a3a8f] rounded-xl flex-shrink-0">
              <Shield size={28} className="animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#1a3a8f] leading-snug">
                Privatsphäre-Einstellungen
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Wir nutzen Cookies und ähnliche Technologien, um unsere Website zu verbessern und Ihre Nutzererfahrung zu personalisieren.
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Einige Cookies sind für die Nutzung der Website zwingend erforderlich, während andere uns helfen, Statistiken über Besuche zu erstellen (Vercel Analytics) oder Zusatzdienste anzubieten (wie Google Translate zur englischen Übersetzung). Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten. Weitere Informationen finden Sie in unserer{" "}
            <Link 
              href="/datenschutz" 
              className="text-[#2a52be] hover:underline font-semibold"
              onClick={() => setShowBanner(false)}
            >
              Datenschutzerklärung
            </Link>{" "}
            und unserem{" "}
            <Link 
              href="/impressum" 
              className="text-[#2a52be] hover:underline font-semibold"
              onClick={() => setShowBanner(false)}
            >
              Impressum
            </Link>.
          </p>

          {/* Toggle Details Button */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 text-sm text-[#1a3a8f] font-semibold hover:underline transition-colors focus:outline-none"
          >
            <Settings size={16} />
            <span>{showDetails ? "Einstellungen ausblenden" : "Einstellungen anpassen"}</span>
            {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {/* Detailed Selection Panel */}
          {showDetails && (
            <div className="space-y-4 border-t border-gray-100 pt-4 animate-slide-down">
              {/* Category: Necessary */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-gray-50/50 border border-gray-100 rounded-xl">
                <div className="max-w-[80%]">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-800 text-sm md:text-base">Notwendig</span>
                    <span className="text-[10px] bg-gray-200 text-gray-600 font-semibold px-2 py-0.5 rounded-full uppercase">
                      Immer aktiv
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Diese Cookies sind für das reibungslose Funktionieren der Website technisch zwingend erforderlich. Sie speichern z.B. Ihre hier getroffenen Datenschutzeinstellungen.
                  </p>
                </div>
                <div className="flex items-center justify-end">
                  <label className="relative inline-flex items-center cursor-not-allowed">
                    <input type="checkbox" checked disabled className="sr-only peer" />
                    <div className="w-11 h-6 bg-[#1a3a8f] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1a3a8f] opacity-60"></div>
                  </label>
                </div>
              </div>

              {/* Category: Functional */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-gray-50/50 border border-gray-100 rounded-xl">
                <div className="max-w-[80%]">
                  <span className="font-semibold text-gray-800 text-sm md:text-base">Funktionell (Google Translate)</span>
                  <p className="text-xs text-gray-500 mt-1">
                    Ermöglicht Zusatzfunktionen wie die Übersetzung der Website in andere Sprachen (z. B. Englisch) über das Google Translate Widget. Wenn Sie dies deaktivieren, stehen Ihnen die Übersetzungs-Flaggen nicht zur Verfügung.
                  </p>
                </div>
                <div className="flex items-center justify-end">
                  <label className="relative inline-flex items-center cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      checked={consent.functional}
                      onChange={() => toggleCategory("functional")} 
                      className="sr-only peer" 
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1a3a8f]"></div>
                  </label>
                </div>
              </div>

              {/* Category: Analytics */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-gray-50/50 border border-gray-100 rounded-xl">
                <div className="max-w-[80%]">
                  <span className="font-semibold text-gray-800 text-sm md:text-base">Statistiken / Analysen (Vercel Analytics)</span>
                  <p className="text-xs text-gray-500 mt-1">
                    Hilft uns zu verstehen, wie Besucher unsere Website nutzen (z.B. welche Seiten am beliebtesten sind). Die Datenerfassung erfolgt anonymisiert und dient ausschließlich der Verbesserung unseres Angebots.
                  </p>
                </div>
                <div className="flex items-center justify-end">
                  <label className="relative inline-flex items-center cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      checked={consent.analytics}
                      onChange={() => toggleCategory("analytics")} 
                      className="sr-only peer" 
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1a3a8f]"></div>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row gap-3 justify-end items-center">
          {showDetails ? (
            <button
              onClick={handleSaveSelection}
              className="w-full sm:w-auto px-6 py-2.5 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-xl text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer"
            >
              Auswahl speichern
            </button>
          ) : (
            <button
              onClick={handleRejectAll}
              className="w-full sm:w-auto px-6 py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold rounded-xl text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer text-center"
            >
              Alle ablehnen
            </button>
          )}
          <button
            onClick={handleAcceptAll}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#1a3a8f] hover:bg-[#112762] text-white font-bold rounded-xl text-sm transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a8f]/50 cursor-pointer text-center"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
