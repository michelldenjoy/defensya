"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

// ── Types ────────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
}

interface DropdownItem {
  name: string;
  href: string;
}

// ── Data ─────────────────────────────────────────────────────────────────────

const EMPRESA_ITEMS: DropdownItem[] = [
  { name: "Quiénes somos", href: "/empresa/quienes-somos" },
  { name: "Calidad y Certificaciones", href: "/empresa/calidad-certificacion" },
  { name: "Sostenibilidad", href: "/empresa/sostenibilidad" },
  { name: "Careers", href: "/empresa/careers" },
];

const NAV_LINKS: NavItem[] = [
  { label: "Productos", href: "/productos" },
  { label: "Innovación", href: "/innovacion" },
];

// ── Dropdown Component ────────────────────────────────────────────────────────

function EmpresaDropdown({ onClose }: { onClose?: () => void }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1.5 px-3 py-2 text-xs tracking-widest uppercase
                    font-medium rounded-sm transition-all duration-200 outline-none
                    focus-visible:ring-2 focus-visible:ring-defensya-blue/50
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

      {/* Dropdown panel */}
      <div
        role="menu"
        aria-label="Empresa submenu"
        className={`absolute left-0 top-full mt-2 z-50 w-56
                    border border-slate-200 dark:border-white/[0.08]
                    bg-white dark:bg-defensya-navy-light
                    shadow-xl shadow-black/10 dark:shadow-black/50
                    overflow-hidden transition-all duration-200 origin-top
                    ${
                      open
                        ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"
                    }`}
      >
        {/* Top accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-defensya-blue/50 to-transparent" />

        <div className="flex flex-col p-1.5">
          {EMPRESA_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={() => {
                setOpen(false);
                onClose?.();
              }}
              className="px-3 py-2.5 text-xs tracking-wide rounded-sm
                         text-slate-600 dark:text-zinc-300
                         hover:text-gray-900 dark:hover:text-white
                         hover:bg-slate-50 dark:hover:bg-white/5
                         hover:translate-x-0.5 transition-all duration-150
                         outline-none focus-visible:ring-2 focus-visible:ring-defensya-blue/50"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Mobile Menu ───────────────────────────────────────────────────────────────

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [empresaOpen, setEmpresaOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset submenu when mobile menu closes
  useEffect(() => {
    if (!isOpen) setEmpresaOpen(false);
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300
                    ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw]
                    bg-white dark:bg-defensya-navy
                    border-l border-slate-200 dark:border-white/[0.07]
                    shadow-2xl transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-slate-200 dark:border-white/[0.07]">
          <span className="text-xs tracking-widest uppercase font-semibold text-slate-400 dark:text-zinc-500">
            Menú
          </span>
          <button
            onClick={onClose}
            aria-label="Cerrar menú"
            className="p-1.5 rounded-sm text-slate-500 dark:text-zinc-400
                       hover:text-gray-900 dark:hover:text-white
                       hover:bg-slate-100 dark:hover:bg-white/5
                       transition-all duration-150"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col p-4 gap-1">
          {/* Empresa accordion */}
          <div>
            <button
              onClick={() => setEmpresaOpen((prev) => !prev)}
              aria-expanded={empresaOpen}
              className="w-full flex items-center justify-between px-3 py-3 text-xs tracking-widest uppercase
                         font-medium rounded-sm text-slate-600 dark:text-zinc-300
                         hover:text-gray-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5
                         transition-all duration-150"
            >
              Empresa
              <ChevronDown
                size={12}
                className={`transition-transform duration-300 ${
                  empresaOpen ? "rotate-180 text-defensya-blue" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
                          ${empresaOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col pl-3 mt-1 gap-0.5 border-l-2 border-defensya-blue/30 ml-3">
                {EMPRESA_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="px-3 py-2.5 text-xs tracking-wide rounded-sm
                               text-slate-500 dark:text-zinc-400
                               hover:text-gray-900 dark:hover:text-white
                               hover:bg-slate-50 dark:hover:bg-white/5
                               transition-all duration-150"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Regular links */}
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="px-3 py-3 text-xs tracking-widest uppercase font-medium rounded-sm
                         text-slate-600 dark:text-zinc-300
                         hover:text-gray-900 dark:hover:text-white
                         hover:bg-slate-50 dark:hover:bg-white/5
                         transition-all duration-150"
            >
              {label}
            </Link>
          ))}

          {/* Divider */}
          <div className="my-2 h-px bg-slate-200 dark:bg-white/[0.07]" />

          {/* Contacto CTA */}
          <Link
            href="/contacto"
            onClick={onClose}
            className="px-5 py-3 text-xs tracking-widest uppercase font-semibold text-center
                       text-gray-900 dark:text-white
                       border border-gray-300 dark:border-white/20
                       hover:border-defensya-blue dark:hover:border-defensya-blue
                       hover:text-defensya-blue dark:hover:text-defensya-blue
                       transition-all duration-200"
          >
            Contacto
          </Link>

          {/* Theme toggle */}
          <div className="flex items-center justify-between px-3 py-3 mt-1">
            <span className="text-xs tracking-widest uppercase font-medium text-slate-400 dark:text-zinc-500">
              Tema
            </span>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <nav
        className="w-full border-b border-slate-200 dark:border-white/[0.07]
                   backdrop-blur-md sticky top-0 z-40
                   bg-white/90 dark:bg-defensya-navy/90
                   transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-16 h-16">
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center hover:opacity-75 transition-opacity shrink-0"
            aria-label="Defensya — ir al inicio"
          >
            <Image
              src="/logo.jpeg"
              alt="Defensya Logo"
              width={150}
              height={32}
              priority
              className="inline-block dark:brightness-110"
            />
          </Link>

          {/* ── Desktop links (hidden on mobile) ── */}
          <div className="hidden md:flex items-center gap-0.5">
            <EmpresaDropdown />

            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-2 text-xs tracking-widest uppercase font-medium rounded-sm
                           text-slate-500 dark:text-zinc-400
                           hover:text-gray-900 dark:hover:text-white
                           hover:bg-slate-100 dark:hover:bg-white/5
                           transition-all duration-200
                           outline-none focus-visible:ring-2 focus-visible:ring-defensya-blue/50"
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
                         transition-all duration-200
                         outline-none focus-visible:ring-2 focus-visible:ring-defensya-blue/50"
            >
              Contacto
            </Link>

            {/* Theme toggle */}
            <div className="ml-3 pl-3 border-l border-slate-200 dark:border-white/[0.07]">
              <ThemeToggle />
            </div>
          </div>

          {/* ── Mobile controls ── */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-sm text-slate-500 dark:text-zinc-400
                         hover:text-gray-900 dark:hover:text-white
                         hover:bg-slate-100 dark:hover:bg-white/5
                         transition-all duration-150"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile slide-in menu ── */}
      <MobileMenu isOpen={mobileOpen} onClose={closeMobile} />
    </>
  );
}