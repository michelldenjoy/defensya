"use client"

import Link from "next/link"
import { useState, useRef } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 200)
  }

  return (
    <nav className="w-full border-b border-white/8 bg-black/92 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16">

        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-[0.2em] text-white uppercase hover:text-zinc-300 transition-colors">
        <Image src="/logo.jpeg" alt="Defensya Logo" width={150} height={32} className="inline-block mr-2" />
        </Link>

        {/* Links */}
        <div className="flex items-center gap-1 text-sm font-medium">

          {/*Dropdown */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className={`flex items-center gap-1.5 px-3 py-2 rounded-sm tracking-wide transition-all duration-200 ${open ? "text-white bg-white/5" : "text-zinc-400 hover:text-white hover:bg-white/5"}`}>
              Empresa
              <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180 text-[#4FAAFF]" : ""}`} />
            </button>

            {open && (
              <div className="absolute left-0 top-full pt-2 z-50">
                <div className="absolute -top-2 left-0 right-0 h-2" />
                <div className="w-64 rounded-sm border border-white/10 bg-[#0A0C10] shadow-2xl shadow-black/60 overflow-hidden">
                  <div className="h-px bg-linear-to-r from-transparent via-[#4FAAFF]/50 to-transparent" />
                  <div className="flex flex-col p-2 text-sm">
                    <Link href="/empresa/quienes-somos" className="px-3 py-2.5 rounded-sm text-zinc-300 hover:text-white hover:bg-white/5 hover:translate-x-0.5 transition-all duration-150">
                      Quiénes somos
                    </Link>
                    <Link href="/empresa/calidad-certificacion" className="px-3 py-2.5 rounded-sm text-zinc-300 hover:text-white hover:bg-white/5 hover:translate-x-0.5 transition-all duration-150">
                      Política de Calidad y Certificaciones
                    </Link>
                    <Link href="/empresa/sostenibilidad" className="px-3 py-2.5 rounded-sm text-zinc-300 hover:text-white hover:bg-white/5 hover:translate-x-0.5 transition-all duration-150">
                      Sostenibilidad
                    </Link>
                    <Link href="/empresa/careers" className="px-3 py-2.5 rounded-sm text-zinc-300 hover:text-white hover:bg-white/5 hover:translate-x-0.5 transition-all duration-150">
                      Careers
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/productos" className="px-3 py-2 rounded-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200">
            Productos
          </Link>
          <Link href="/innovacion" className="px-3 py-2 rounded-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200">
            Innovación
          </Link>
          <Link href="/contacto" className="ml-2 px-4 py-2 rounded-sm text-xs font-semibold tracking-widest uppercase text-white border border-[#4FAAFF]/40 hover:border-[#4FAAFF] bg-[#4FAAFF]/5 hover:bg-[#4FAAFF]/10 transition-all duration-300">
            Contacto
          </Link>
        </div>

      </div>
    </nav>
  )
}
