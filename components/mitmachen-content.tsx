"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  Send,
  User,
  Mail,
  Phone,
  Calendar,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Users,
  Globe,
  GraduationCap,
} from "lucide-react"

/* ─── reasons / benefits shown beside the form ─── */
const benefits = [
  {
    icon: Users,
    title: "Gemeinschaft",
    text: "Werde Teil einer vielfältigen Community junger Menschen aus ganz München.",
  },
  {
    icon: Globe,
    title: "Interkultureller Dialog",
    text: "Lerne Menschen aus unterschiedlichen Kulturen und Religionen kennen.",
  },
  {
    icon: GraduationCap,
    title: "Persönliche Entwicklung",
    text: "Erwerbe Führungskompetenzen, die dich ein Leben lang begleiten.",
  },
  {
    icon: Sparkles,
    title: "Unvergessliche Erfahrungen",
    text: "Bildungsreisen, Seminare und Kamingespräche mit spannenden Persönlichkeiten.",
  },
]

/* ─── form field config ─── */
const programs = [
  { value: "muenchen", label: "YouthBridge München – Leadership-Programm" },
  { value: "franken", label: "YouthBridge Franken – Standort Nürnberg & Region" },
  { value: "verband", label: "YouthBridge Verband – Demokratie & Teilhabe" },
  { value: "uni", label: "YouthBridge UNI – Bildungsangebote" },
  { value: "sonstiges", label: "Sonstiges / Ich bin mir noch unsicher" },
]

function MitmachenSlideshow({ images, className = "" }: { images: string[], className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEndEvent = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div 
      className={`relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#d6eaf8] ${className}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndEvent}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`YouthBridge Impression ${i + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-opacity duration-1000 ${
            i === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === currentIndex
                ? "bg-white w-4"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function MitmachenContent() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    geburtsdatum: "",
    programm: "",
    nachricht: "",
    datenschutz: false,
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value
    setFormData((prev) => ({ ...prev, [target.name]: value }))
  }

  const formContainerRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      // Scroll to the top of the form container smoothly
      setTimeout(() => {
        formContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Es gab einen Fehler beim Senden der Nachricht. Bitte versuche es später noch einmal.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* ── Main content: Benefits + Form ── */}
      <section className="w-full py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* ── Left column: Benefits ── */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2
                  className="text-2xl md:text-3xl font-bold text-[#1a5276] mb-3"
                  style={{
                    fontFamily: "var(--font-oswald), sans-serif",
                    letterSpacing: "0.01em",
                  }}
                >
                  Warum YouthBridge?
                </h2>
                <p className="text-[#5d6d7e] leading-relaxed">
                  Bei uns erwartet dich weit mehr als ein Projekt – eine
                  Gemeinschaft, die dich fordert, fördert und inspiriert.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((b) => {
                  const Icon = b.icon
                  return (
                    <div key={b.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#1a5276] to-[#5dade2] flex items-center justify-center shadow-sm">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-[#1a5276] font-bold text-sm mb-0.5">
                          {b.title}
                        </h3>
                        <p className="text-[#5d6d7e] text-sm leading-relaxed">
                          {b.text}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* ── Left Slideshow ── */}
              <div className="pt-8">
                <MitmachenSlideshow 
                  images={[
                    "/yb-fun-5.jpg",
                    "/yb-fun-6.jpg",
                    "/yb-fun-7.jpg",
                    "/yb-fun-8.jpg",
                  ]} 
                  className="lg:mr-auto" 
                />
              </div>
            </div>

            {/* ── Right column: Form & Slideshow ── */}
            <div className="lg:col-span-3 flex flex-col gap-10">
              <MitmachenSlideshow 
                images={[
                  "/yb-fun-4.jpg",
                  "/yb-fun-3.jpg",
                  "/yb-fun-2.jpg",
                  "/yb-fun-1.jpg",
                ]} 
                className="lg:ml-auto order-2 lg:order-1" 
              />

              <div ref={formContainerRef} className="min-h-[800px] md:min-h-[700px] w-full flex flex-col justify-start order-1 lg:order-2">
                {submitted ? (
                  <SuccessMessage />
                ) : (
                  <RegistrationForm
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    loading={loading}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── Registration Form ─── */
function RegistrationForm({
  formData,
  onChange,
  onSubmit,
  loading,
}: {
  formData: Record<string, string | boolean>
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void
  onSubmit: (e: React.FormEvent) => void
  loading: boolean
}) {
  const formRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = formRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={formRef}
      className={`bg-white border border-[#d6eaf8] rounded-2xl p-8 md:p-10 shadow-sm transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2
        className="text-xl md:text-2xl font-bold text-[#1a5276] mb-1"
        style={{
          fontFamily: "var(--font-oswald), sans-serif",
          letterSpacing: "0.01em",
        }}
      >
        Anmeldung
      </h2>
      <p className="text-[#5d6d7e] text-sm mb-8">
        Fülle das Formular aus und wir melden uns bei dir.
      </p>

      <form onSubmit={onSubmit} className="space-y-5" id="mitmachen-form">
        {/* Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            id="vorname"
            name="vorname"
            label="Vorname"
            icon={User}
            required
            value={formData.vorname as string}
            onChange={onChange}
            placeholder="Max"
          />
          <FormField
            id="nachname"
            name="nachname"
            label="Nachname"
            icon={User}
            required
            value={formData.nachname as string}
            onChange={onChange}
            placeholder="Mustermann"
          />
        </div>

        {/* Email */}
        <FormField
          id="email"
          name="email"
          label="E-Mail-Adresse"
          type="email"
          icon={Mail}
          required
          value={formData.email as string}
          onChange={onChange}
          placeholder="max@beispiel.de"
        />

        {/* Phone + Birthday row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            id="telefon"
            name="telefon"
            label="Telefonnummer"
            type="tel"
            icon={Phone}
            required
            value={formData.telefon as string}
            onChange={onChange}
            placeholder="+49 171 …"
          />
          <GeburtsdatumField
            value={formData.geburtsdatum as string}
            onChange={onChange}
            required
          />
        </div>

        {/* Program select */}
        <div>
          <label
            htmlFor="programm"
            className="block text-sm font-semibold text-[#1a5276] mb-1.5"
          >
            Programm
          </label>
          <select
            id="programm"
            name="programm"
            required
            value={formData.programm as string}
            onChange={onChange}
            className="w-full px-4 py-3 rounded-xl border border-[#d6eaf8] bg-[#f9fcfe] text-[#2c3e50] text-sm focus:outline-none focus:ring-2 focus:ring-[#5dade2] focus:border-transparent transition-all appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235d6d7e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 14px center",
            }}
          >
            <option value="" disabled>
              Bitte wählen…
            </option>
            {programs.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="nachricht"
            className="block text-sm font-semibold text-[#1a5276] mb-1.5"
          >
            Nachricht (optional)
          </label>
          <div className="relative">
            <MessageSquare
              size={16}
              className="absolute left-4 top-3.5 text-[#85c1e9]"
            />
            <textarea
              id="nachricht"
              name="nachricht"
              rows={4}
              value={formData.nachricht as string}
              onChange={onChange}
              placeholder="Erzähl uns kurz, warum du mitmachen möchtest…"
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#d6eaf8] bg-[#f9fcfe] text-[#2c3e50] text-sm focus:outline-none focus:ring-2 focus:ring-[#5dade2] focus:border-transparent transition-all resize-none"
            />
          </div>
        </div>

        {/* Privacy checkbox */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="datenschutz"
            required
            checked={formData.datenschutz as boolean}
            onChange={onChange}
            className="mt-1 w-4 h-4 rounded border-[#d6eaf8] text-[#1a5276] focus:ring-[#5dade2] accent-[#1a5276]"
          />
          <span className="text-xs text-[#5d6d7e] leading-relaxed">
            Ich habe die{" "}
            <a
              href="/datenschutz"
              className="text-[#2980b9] underline underline-offset-2 hover:text-[#1a5276] transition-colors"
            >
              Datenschutzerklärung
            </a>{" "}
            gelesen und bin mit der Verarbeitung meiner Daten einverstanden.
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 px-6 text-white font-bold rounded-full flex items-center justify-center gap-3 transition-all text-sm tracking-wide shadow-lg active:scale-[0.95] ${
            loading
              ? "bg-[#5d6d7e] cursor-not-allowed"
              : "bg-[#1a5276] hover:bg-[#154360] hover:shadow-xl"
          }`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Wird gesendet…
            </>
          ) : (
            <>
              <Send size={18} />
              Anmeldung absenden
            </>
          )}
        </button>
      </form>
    </div>
  )
}

/* ─── Geburtsdatum Field Component ─── */
function GeburtsdatumField({
  value,
  onChange,
  required,
}: {
  value: string
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void
  required?: boolean
}) {
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [useTextInput, setUseTextInput] = useState(false)
  const [manualValue, setManualValue] = useState(value || "")

  useEffect(() => {
    if (!value) {
      setDay("")
      setMonth("")
      setYear("")
      setManualValue("")
      return
    }
    setManualValue(value)
    if (value.includes(".")) {
      const parts = value.split(".")
      if (parts.length === 3) {
        setDay(parts[0])
        setMonth(parts[1])
        setYear(parts[2])
      }
    } else if (value.includes("-")) {
      const parts = value.split("-")
      if (parts.length === 3) {
        setYear(parts[0])
        setMonth(parts[1])
        setDay(parts[2])
      }
    }
  }, [value])

  const monthNames = [
    { value: "01", label: "Jan (01)" },
    { value: "02", label: "Feb (02)" },
    { value: "03", label: "Mär (03)" },
    { value: "04", label: "Apr (04)" },
    { value: "05", label: "Mai (05)" },
    { value: "06", label: "Jun (06)" },
    { value: "07", label: "Jul (07)" },
    { value: "08", label: "Aug (08)" },
    { value: "09", label: "Sep (09)" },
    { value: "10", label: "Okt (10)" },
    { value: "11", label: "Nov (11)" },
    { value: "12", label: "Dez (12)" },
  ]

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 1930 + 1 }, (_, i) =>
    String(currentYear - i)
  )
  const days = Array.from({ length: 31 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  )

  const handleSelectChange = (d: string, m: string, y: string) => {
    setDay(d)
    setMonth(m)
    setYear(y)

    let finalVal = ""
    if (d && m && y) {
      finalVal = `${d}.${m}.${y}`
    }
    const syntheticEvent = {
      target: {
        name: "geburtsdatum",
        value: finalVal,
      },
    } as React.ChangeEvent<HTMLInputElement>
    onChange(syntheticEvent)
  }

  const handleManualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setManualValue(e.target.value)
    onChange(e)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label
          htmlFor="geburtsdatum"
          className="block text-sm font-semibold text-[#1a5276]"
        >
          Geburtsdatum
          {required && <span className="text-[#e74c3c] ml-0.5">*</span>}
        </label>
        <button
          type="button"
          onClick={() => setUseTextInput(!useTextInput)}
          className="text-xs font-medium text-[#3498db] hover:text-[#1a5276] transition-colors underline focus:outline-none"
        >
          {useTextInput ? "Dropdowns nutzen" : "Datum/Jahr eintippen"}
        </button>
      </div>

      {useTextInput ? (
        <div className="relative">
          <Calendar
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#85c1e9]"
          />
          <input
            id="geburtsdatum"
            name="geburtsdatum"
            type="text"
            required={required}
            value={manualValue}
            onChange={handleManualChange}
            placeholder="TT.MM.JJJJ (z.B. 15.05.2006)"
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#d6eaf8] bg-[#f9fcfe] text-[#2c3e50] text-sm focus:outline-none focus:ring-2 focus:ring-[#5dade2] focus:border-transparent transition-all placeholder:text-[#aab7c4]"
          />
        </div>
      ) : (
        <div className="space-y-1.5">
          <div className="grid grid-cols-[1fr_1.3fr_1.1fr] gap-1.5">
            {/* Tag */}
            <select
              required={required}
              value={day}
              onChange={(e) => handleSelectChange(e.target.value, month, year)}
              className="w-full px-2 py-3 rounded-xl border border-[#d6eaf8] bg-[#f9fcfe] text-[#2c3e50] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#5dade2] focus:border-transparent transition-all appearance-none cursor-pointer text-center"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235d6d7e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 4px center",
              }}
            >
              <option value="">Tag</option>
              {days.map((d) => (
                <option key={d} value={d}>
                  {parseInt(d, 10)}
                </option>
              ))}
            </select>

            {/* Monat */}
            <select
              required={required}
              value={month}
              onChange={(e) => handleSelectChange(day, e.target.value, year)}
              className="w-full px-2 py-3 rounded-xl border border-[#d6eaf8] bg-[#f9fcfe] text-[#2c3e50] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#5dade2] focus:border-transparent transition-all appearance-none cursor-pointer text-center"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235d6d7e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 4px center",
              }}
            >
              <option value="">Monat</option>
              {monthNames.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>

            {/* Jahr */}
            <select
              required={required}
              value={year}
              onChange={(e) => handleSelectChange(day, month, e.target.value)}
              className="w-full px-2 py-3 rounded-xl border border-[#d6eaf8] bg-[#f9fcfe] text-[#2c3e50] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#5dade2] focus:border-transparent transition-all appearance-none cursor-pointer text-center font-medium"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235d6d7e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 4px center",
              }}
            >
              <option value="">Jahr</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          {/* Quick info / hint */}
          <div className="flex items-center justify-between text-[11px] text-[#5d6d7e] px-1 pt-0.5">
            <span>💡 Tastatur: &apos;2006&apos; im Jahr-Feld eingeben</span>
            {day && month && year && (
              <span className="font-semibold text-[#1a5276] bg-[#eaf2f8] px-2 py-0.5 rounded-md">
                {day}.{month}.{year}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Reusable Form Field ─── */
function FormField({
  id,
  name,
  label,
  type = "text",
  icon: Icon,
  required,
  value,
  onChange,
  placeholder,
}: {
  id: string
  name: string
  label: string
  type?: string
  icon: typeof User
  required?: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-[#1a5276] mb-1.5"
      >
        {label}
        {required && <span className="text-[#e74c3c] ml-0.5">*</span>}
      </label>
      <div className="relative">
        <Icon
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#85c1e9]"
        />
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#d6eaf8] bg-[#f9fcfe] text-[#2c3e50] text-sm focus:outline-none focus:ring-2 focus:ring-[#5dade2] focus:border-transparent transition-all placeholder:text-[#aab7c4]"
        />
      </div>
    </div>
  )
}

/* ─── Success Message ─── */
function SuccessMessage() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className={`bg-white border border-[#d6eaf8] rounded-2xl p-10 md:p-14 shadow-sm text-center transition-all duration-700 ease-out ${
        show ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#27ae60] to-[#2ecc71] flex items-center justify-center mx-auto mb-6 shadow-lg">
        <CheckCircle2 size={32} className="text-white" />
      </div>
      <h2
        className="text-2xl md:text-3xl font-bold text-[#1a5276] mb-3"
        style={{
          fontFamily: "var(--font-oswald), sans-serif",
          letterSpacing: "0.01em",
        }}
      >
        Vielen Dank!
      </h2>
      <p className="text-[#5d6d7e] leading-relaxed max-w-md mx-auto">
        Deine Anmeldung ist bei uns eingegangen. Wir melden uns in Kürze bei
        dir. Wir freuen uns, dich bald bei YouthBridge begrüßen zu dürfen!
      </p>
    </div>
  )
}
