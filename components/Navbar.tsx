"use client"

import Link from "next/link"
import { useState, useRef } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/ui/ThemeToggle"

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

    <nav
      className="w-full border-b border-slate-200 dark:border-white/10 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300 bg-white/90 dark:bg-black/91"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16">

        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/logo.jpeg"
            alt="Defensya Logo"
            width={150}
            height={32}
            className="inline-block dark:brightness-110"
          />
        </Link>

        <div className="flex items-center gap-1 text-sm font-medium">

          {/* Dropdown Empresa */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className={`flex items-center gap-1.5 px-3 py-2 rounded-sm tracking-wide transition-all duration-200 
              ${open
                ? "text-defensya-navy dark:text-white bg-slate-100 dark:bg-white/5"
                : "text-slate-600 dark:text-zinc-400 hover:text-defensya-navy dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
              }`}>
              Empresa
              <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180 text-defensya-blue" : ""}`} />
            </button>

            {open && (
              <div className="absolute left-0 top-full pt-2 z-50">
                <div className="absolute -top-2 left-0 right-0 h-2" />
                
                <div className="w-64 rounded-sm border border-slate-200 dark:border-white/10 bg-white dark:[background-color:#111B3D] shadow-2xl shadow-black/10 dark:shadow-black/60 overflow-hidden">
                  <div className="h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />

                  <div className="flex flex-col p-2 text-sm">
                    {[
                      { name: "Quiénes somos", href: "/empresa/quienes-somos" },
                      { name: "Calidad y Certificaciones", href: "/empresa/calidad-certificacion" },
                      { name: "Sostenibilidad", href: "/empresa/sostenibilidad" },
                      { name: "Careers", href: "/empresa/careers" }
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="px-3 py-2.5 rounded-sm text-slate-600 dark:text-zinc-300 hover:text-defensya-navy dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 hover:translate-x-0.5 transition-all duration-150"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/productos" className="px-3 py-2 rounded-sm text-slate-600 dark:text-zinc-400 hover:text-defensya-navy dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-200">
            Productos
          </Link>

          <Link href="/innovacion" className="px-3 py-2 rounded-sm text-slate-600 dark:text-zinc-400 hover:text-defensya-navy dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-200">
            Innovación
          </Link>

          <Link href="/contacto" className="mx-2 px-4 py-2 rounded-sm text-xs font-semibold tracking-widest uppercase
            text-defensya-navy dark:text-white
            border border-defensya-navy/20 dark:border-blue-500/40
            hover:border-defensya-navy dark:hover:border-blue-500
            bg-slate-50 dark:bg-blue-500/5
            hover:bg-slate-100 dark:hover:bg-blue-500/10
            transition-all duration-300">
            Contacto
          </Link>

          <div className="ml-2 pl-2 border-l border-slate-200 dark:border-white/10">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}