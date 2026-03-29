import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#e8e8e8] py-12">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-[#1a3a8f] leading-tight tracking-tight">
          Europäische Janusz Korczak Akademie E.V.
        </h2>

        {/* EJKA Logo */}
        <div className="relative w-72 h-28">
          <Image
            src="/ejka-logo.png"
            alt="EJKA – Europäische Janusz Korczak Akademie"
            fill
            className="object-contain"
          />
        </div>

        {/* Copyright + Links */}
        <p className="text-sm font-semibold text-[#1a3a8f]">
          Copyright &copy; EJKA e.V. 2018&nbsp;|&nbsp;
          <Link href="/datenschutz" className="hover:underline">
            Datenschutzerklärung
          </Link>
          &nbsp;|&nbsp;
          <Link href="/impressum" className="hover:underline">
            Impressum
          </Link>
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center gap-6">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-[#1a3a8f] hover:opacity-70 transition-opacity"
          >
            <Facebook size={24} />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#1a3a8f] hover:opacity-70 transition-opacity"
          >
            <Instagram size={24} />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-[#1a3a8f] hover:opacity-70 transition-opacity"
          >
            <Youtube size={24} />
          </Link>
        </div>

      </div>
    </footer>
  )
}
