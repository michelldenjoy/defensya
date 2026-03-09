"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 200);
  };

  return (
    <nav
      className="w-full border-b border-slate-200 dark:border-white/[0.07]
                    backdrop-blur-md sticky top-0 z-50
                    bg-white/90 dark:bg-defensya-navy/90
                    transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-16 h-16">
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-center hover:opacity-75 transition-opacity"
        >
          <Image
            src="/logo.jpeg"
            alt="Defensya Logo"
            width={150}
            height={32}
            className="inline-block dark:brightness-110"
          />
        </Link>

        {/* ── Links ── */}
        <div className="flex items-center gap-0.5">
          {/* Dropdown Empresa */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button
              className={`flex items-center gap-1.5 px-3 py-2 text-xs tracking-widest uppercase
                          font-medium transition-all duration-200
                          ${
                            open
                              ? "text-gray-900 dark:text-white bg-slate-100 dark:bg-white/5"
                              : "text-slate-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                          }`}
            >
              Empresa
              <ChevronDown
                size={12}
                className={`transition-transform duration-300 ${
                  open ? "rotate-180 text-defensya-blue" : ""
                }`}
              />
            </button>

            {open && (
              <div
                className="absolute left-0 top-full pt-2 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="absolute -top-2 left-0 right-0 h-2" />

                <div
                  className="w-56 border border-slate-200 dark:border-white/8
                                bg-white dark:bg-defensya-navy-light
                                shadow-xl shadow-black/10 dark:shadow-black/50 overflow-hidden"
                >
                  {/* top accent line */}
                  <div className="h-px bg-linear-to-r from-transparent via-defensya-blue/50 to-transparent" />

                  <div className="flex flex-col p-1.5">
                    {[
                      { name: "Quiénes somos", href: "/empresa/quienes-somos" },
                      {
                        name: "Calidad y Certificaciones",
                        href: "/empresa/calidad-certificacion",
                      },
                      {
                        name: "Sostenibilidad",
                        href: "/empresa/sostenibilidad",
                      },
                      { name: "Careers", href: "/empresa/careers" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="px-3 py-2.5 text-xs tracking-wide
                                   text-slate-600 dark:text-zinc-300
                                   hover:text-gray-900 dark:hover:text-white
                                   hover:bg-slate-50 dark:hover:bg-white/5
                                   hover:translate-x-0.5 transition-all duration-150"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

         
          {[
            { label: "Productos", href: "/productos" },
            { label: "Innovación", href: "/innovacion" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-2 text-xs tracking-widest uppercase font-medium
                         text-slate-500 dark:text-zinc-400
                         hover:text-gray-900 dark:hover:text-white
                         hover:bg-slate-100 dark:hover:bg-white/5
                         transition-all duration-200"
            >
              {label}
            </Link>
          ))}

          {/* Contacto */}
          <Link
            href="/contacto"
            className="ml-3 px-5 py-2 text-xs tracking-widest uppercase font-semibold
                       text-gray-900 dark:text-white
                       border border-gray-300 dark:border-white/20
                       hover:border-defensya-blue dark:hover:border-defensya-blue
                       hover:text-defensya-blue dark:hover:text-defensya-blue
                       transition-all duration-200"
          >
            Contacto
          </Link>

          
          <div className="ml-3 pl-3 border-l border-slate-200 dark:border-white/[0.07]">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
