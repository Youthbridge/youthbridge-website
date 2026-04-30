"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Menu, X, ChevronDown } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const navItems = [
  { label: "MITMACHEN", href: "/mitmachen" },
  {
    label: "ÜBER UNS",
    href: "/ueber-uns",
    dropdown: [
      { label: "Unser Team", href: "/ueber-uns/team" },
      { label: "Unsere Geschichte", href: "/ueber-uns/geschichte" },
    ],
  },
  { label: "BILDUNGSANGEBOTE", href: "/bildungsangebote" },
  { label: "BILDUNGSREISEN", href: "/bildungsreisen" },
  { label: "PROJEKTARBEIT", href: "/projektarbeit" },
  { label: "IMPRESSUM", href: "/impressum" },
]

export function Header() {
  const { language, setLanguage } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)

  // Auto-hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 10)

      // Don't hide when mobile menu is open
      if (mobileMenuOpen) {
        lastScrollY.current = currentY
        return
      }

      if (currentY < 10) {
        // Always show when near top
        setHeaderVisible(true)
      } else if (currentY > lastScrollY.current + 5) {
        // Scrolling down → hide
        setHeaderVisible(false)
      } else if (currentY < lastScrollY.current - 5) {
        // Scrolling up → show
        setHeaderVisible(true)
      }

      lastScrollY.current = currentY
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [mobileMenuOpen])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false)
    }
    window.addEventListener("resize", onResize, { passive: true })
    return () => window.removeEventListener("resize", onResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  return (
    <header
      className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      } ${
        headerVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-1.5 md:py-2 border-b border-gray-100">
        {/* Language Flags */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setLanguage("de")}
            className={`text-lg transition-opacity ${language === 'de' ? 'opacity-100' : 'opacity-40 hover:opacity-75'}`} 
            title="Deutsch"
          >
            🇩🇪
          </button>
          <span className="text-gray-300">|</span>
          <button 
            onClick={() => setLanguage("en")}
            className={`text-lg transition-opacity ${language === 'en' ? 'opacity-100' : 'opacity-40 hover:opacity-75'}`} 
            title="English"
          >
            🇺🇸
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          <Link href="https://www.facebook.com/youthbridgemunich/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#3b5998] text-white flex items-center justify-center rounded" aria-label="Facebook">
            <Facebook size={18} />
          </Link>
          <Link
            href="https://www.instagram.com/youthbridge_/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 text-white flex items-center justify-center rounded"
            style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </Link>
          <Link href="https://www.youtube.com/channel/UCN48PDJPgy4Q47pB8CsBwAg" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-[#ff0000] text-white flex items-center justify-center rounded" aria-label="YouTube">
            <Youtube size={18} />
          </Link>
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image
              src="/icon-32x32.png"
              alt="YouthBridge Logo Icon"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-2xl md:text-3xl font-bold text-[#1a5276] tracking-tight" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            YouthBridge
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="border-b-4 border-[#1a5276]">
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex justify-center items-center gap-8 py-4">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              {item.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold tracking-wide text-gray-700 hover:text-[#1a5276] transition-colors leading-none"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 rounded shadow-lg z-50 py-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1a5276] hover:text-white transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-semibold tracking-wide text-gray-700 hover:text-[#1a5276] transition-colors leading-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-center pb-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 p-2"
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 py-4 bg-white">
            {navItems.map((item) => (
              <li key={item.label} className="text-center">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="flex items-center gap-1 text-sm font-semibold tracking-wide text-gray-700"
                    >
                      {item.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ease-in-out ${
                        mobileDropdownOpen ? "max-h-32 opacity-100 mt-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col gap-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="text-sm text-[#1a5276] font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-semibold tracking-wide text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
