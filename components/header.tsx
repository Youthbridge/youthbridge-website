"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Menu, X, ChevronDown } from "lucide-react"

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)

  return (
    <header className="w-full bg-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
        {/* Language Flags */}
        <div className="flex items-center gap-3">
          <button className="text-lg hover:opacity-75 transition-opacity" title="Deutsch">
            🇩🇪
          </button>
          <span className="text-gray-300">|</span>
          <button className="text-lg hover:opacity-75 transition-opacity" title="English">
            🇺🇸
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          <Link href="#" className="w-9 h-9 bg-[#3b5998] text-white flex items-center justify-center rounded">
            <Facebook size={18} />
          </Link>
          <Link
            href="#"
            className="w-9 h-9 text-white flex items-center justify-center rounded"
            style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
          >
            <Instagram size={18} />
          </Link>
          <Link href="#" className="w-9 h-9 bg-[#ff0000] text-white flex items-center justify-center rounded">
            <Youtube size={18} />
          </Link>
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center py-4">
        <Link href="/" className="relative w-72 h-20">
          <Image
            src="/youthbridge-navbar-logo.png"
            alt="YouthBridge München Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="border-b-4 border-[#1a5276]">
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex justify-center gap-8 py-4">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              {item.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="text-sm font-semibold tracking-wide text-gray-700 hover:text-[#1a5276] transition-colors">
                    {item.label}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 rounded shadow-lg z-50">
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
                  className="text-sm font-semibold tracking-wide text-gray-700 hover:text-[#1a5276] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-center py-4">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <ul className="lg:hidden flex flex-col items-center gap-4 py-4 bg-white">
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
                    {mobileDropdownOpen && (
                      <div className="mt-2 flex flex-col gap-2">
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
                    )}
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
        )}
      </nav>
    </header>
  )
}
