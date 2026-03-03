"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react" // Necesitas instalar lucide-react

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          DEFENSYA
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium relative">

          {/* Empresa Dropdown */}
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative"
          >
            <button className="flex items-center gap-1 hover:text-gray-600">
              Empresa <ChevronDown size={16} />
            </button>

            {open && (
              <div className="absolute left-0 mt-2 w-64 rounded-md border bg-white shadow-lg z-50">
                <div className="flex flex-col p-4 text-sm">
                  <Link href="/empresa/quienes-somos" className="py-2 hover:text-gray-600">
                    Quiénes somos
                  </Link>
                  <Link href="/empresa/calidad-certificacion" className="py-2 hover:text-gray-600">
                    Política de Calidad y Certificaciones
                  </Link>
                  <Link href="/empresa/sostenibilidad" className="py-2 hover:text-gray-600">
                    Sostenibilidad
                  </Link>
                  <Link href="/empresa/careers" className="py-2 hover:text-gray-600">
                    Careers
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/productos" className="hover:text-gray-600">
            Productos
          </Link>
          <Link href="/innovacion" className="hover:text-gray-600">
            Innovación
          </Link>
          <Link
            href="/contacto"
            className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}