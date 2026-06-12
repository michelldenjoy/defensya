"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
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
  { name: "Compromiso Sostenible", href: "/empresa/sostenibilidad" },
  { name: "Careers", href: "/empresa/careers" },
];

const NAV_LINKS: NavItem[] = [
  { label: "Proyectos", href: "/productos" },
  { label: "Innovación", href: "/innovacion" },
];


function ClipButton({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative inline-flex items-center gap-2.5 px-5 py-2.5
                 bg-defensya-navy-light dark:bg-defensya-blue text-white
                 hover:bg-defensya-blue transition-colors duration-200
                 outline-none focus-visible:ring-1 focus-visible:ring-defensya-blue/50"
      style={{
        clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))",
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "13px",
        fontWeight: 700,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
      }}
    >
      {children}
      <ArrowRight
        size={12}
        className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
      />
      <span
        className="pointer-events-none absolute bottom-0 right-0 bg-white/25"
        style={{ width: "11px", height: "1px", transformOrigin: "bottom right", transform: "rotate(-45deg) translateX(3px)" }}
      />
    </Link>
  );
}

// ── Dropdown Component ────────────────────────────────────────────────────────

function EmpresaDropdown({
  onClose,
  scrolled,
  isActive,
}: {
  onClose?: () => void;
  scrolled: boolean;
  isActive: boolean;
}) {
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

  // Color de texto: blanco sobre navbar transparente, oscuro sobre navbar blanco
  const textColor = scrolled
    ? (open || isActive
        ? "text-[#0b1f38] dark:text-white"
        : "text-[rgba(11,31,56,0.55)] dark:text-zinc-400 hover:text-[#0b1f38] dark:hover:text-white")
    : (open || isActive
        ? "text-white"
        : "text-white/90 dark:text-white/90 hover:text-white");

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`group flex items-center gap-2 py-2 text-[13px] tracking-[0.2em] uppercase
                    font-semibold transition-colors duration-300 outline-none
                    focus-visible:ring-2 focus-visible:ring-defensya-blue/50
                    ${textColor}`}
      >
        <span className="relative">
          Empresa
          {/* Indicador de sección activa */}
          <span
            className={`absolute -bottom-1 left-0 h-px bg-defensya-blue transition-all duration-300
                        ${(open || isActive) ? "w-full" : "w-0 group-hover:w-full"}`}
          />
        </span>
        <ChevronDown
          size={13}
          className={`transition-transform duration-300 ${
            open ? "rotate-180 text-defensya-blue" : ""
          }`}
        />
      </button>

      {/* Dropdown panel — siempre fondo sólido, texto oscuro/claro fijo */}
      <div
        role="menu"
        aria-label="Empresa submenu"
        className={`absolute left-0 top-full mt-4 z-50 w-64
                    border-t-2 border-defensya-blue
                    bg-white dark:bg-defensya-navy-light
                    shadow-2xl shadow-black/10 dark:shadow-black/60
                    overflow-hidden transition-all duration-200 origin-top
                    ${
                      open
                        ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"
                    }`}
      >
        <div className="flex flex-col">
          {EMPRESA_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={() => {
                setOpen(false);
                onClose?.();
              }}
              className="group/item relative px-5 py-3.5 text-[12px] tracking-[0.15em] uppercase font-medium
                         text-slate-600 dark:text-zinc-300
                         hover:text-gray-900 dark:hover:text-white
                         hover:bg-slate-50 dark:hover:bg-white/[0.03]
                         transition-colors duration-150
                         outline-none focus-visible:ring-2 focus-visible:ring-defensya-blue/50"
            >
              <span
                className="absolute left-0 top-0 h-full w-0 bg-defensya-blue
                           transition-all duration-200 group-hover/item:w-0.5"
              />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Mobile Menu ───────────────────────────────────────────────────────────────

function MobileMenu({
  isOpen,
  onClose,
  pathname,
}: {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}) {
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

  const empresaActive = EMPRESA_ITEMS.some((item) => pathname.startsWith(item.href));

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300
                    ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[88vw]
                    bg-white dark:bg-defensya-navy
                    border-l border-slate-200 dark:border-white/[0.06]
                    shadow-2xl transition-transform duration-500 ease-in-out
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between h-20 px-6 border-b border-slate-200 dark:border-white/[0.06]">
          <span className="text-[12px] tracking-[0.3em] uppercase font-semibold text-slate-400 dark:text-zinc-500">
            Menú
          </span>
          <button
            onClick={onClose}
            aria-label="Cerrar menú"
            className="p-2 text-slate-500 dark:text-zinc-400
                       hover:text-gray-900 dark:hover:text-white
                       transition-colors duration-150"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col px-6 py-8 gap-1">
          {/* Empresa accordion */}
          <div>
            <button
              onClick={() => setEmpresaOpen((prev) => !prev)}
              aria-expanded={empresaOpen}
              className={`w-full flex items-center justify-between py-4 text-[12px] tracking-[0.25em] uppercase
                         font-semibold transition-colors duration-150
                         border-b border-slate-100 dark:border-white/[0.04]
                         ${empresaActive
                           ? "text-defensya-blue"
                           : "text-slate-600 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white"}`}
            >
              <span className="flex items-center gap-2">
                {empresaActive && <span className="w-[5px] h-[5px] bg-defensya-blue" style={{ transform: "rotate(45deg)" }} />}
                Empresa
              </span>
              <ChevronDown
                size={13}
                className={`transition-transform duration-300 ${
                  empresaOpen ? "rotate-180 text-defensya-blue" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
                          ${empresaOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col py-2">
                {EMPRESA_ITEMS.map((item) => {
                  const active = pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={`py-3 pl-4 text-[12px] tracking-[0.15em] uppercase font-medium
                               transition-colors duration-150
                               border-l hover:border-defensya-blue hover:text-defensya-blue
                               ${active
                                 ? "border-defensya-blue text-defensya-blue"
                                 : "border-slate-200 dark:border-white/[0.06] text-slate-500 dark:text-zinc-400"}`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Regular links */}
          {NAV_LINKS.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`py-4 text-[12px] tracking-[0.25em] uppercase font-semibold
                         transition-colors duration-150
                         border-b border-slate-100 dark:border-white/[0.04]
                         ${active
                           ? "text-defensya-blue"
                           : "text-slate-600 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white"}`}
              >
                <span className="flex items-center gap-2">
                  {active && <span className="w-[5px] h-[5px] bg-defensya-blue" style={{ transform: "rotate(45deg)" }} />}
                  {label}
                </span>
              </Link>
            );
          })}

          {/* Contacto CTA */}
          <Link
            href="/contacto"
            onClick={onClose}
            className="mt-6 px-6 py-3.5 text-[12px] tracking-[0.25em] uppercase font-semibold text-center
                       text-white bg-defensya-blue
                       hover:bg-blue-700
                       transition-colors duration-200"
          >
            Contacto
          </Link>

          {/* Theme toggle */}
          <div className="flex items-center justify-between py-4 mt-2">
            <span className="text-[12px] tracking-[0.25em] uppercase font-semibold text-slate-400 dark:text-zinc-500">
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const empresaActive = EMPRESA_ITEMS.some((item) => pathname.startsWith(item.href));

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-40 transition-all duration-500
                    ${
                      scrolled
                        ? "bg-white/90 dark:bg-defensya-navy/90 backdrop-blur-md border-b border-slate-200 dark:border-white/[0.06] shadow-sm"
                        : "bg-transparent border-b border-transparent"
                    }`}
      >
        <div
          className={`max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-16
                      transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-300 shrink-0"
            aria-label="Defensya — ir al inicio"
          >
            <Image
              src="/logodefensyanew.png"
              alt="Defensya Logo"
              width={140}
              height={30}
              priority
              className={`inline-block transition-all duration-300
                         ${scrolled ? "dark:brightness-110" : "brightness-0 invert"}`}
            />
          </Link>

          {/* ── Desktop links (hidden on mobile) ── */}
          <div className="hidden md:flex items-center gap-10">
            <EmpresaDropdown scrolled={scrolled} isActive={empresaActive} />

            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              // Color: blanco sobre navbar transparente, oscuro sobre navbar blanco
              const textColor = scrolled
                ? (active
                    ? "text-[#0b1f38] dark:text-white"
                    : "text-[rgba(11,31,56,0.55)] dark:text-zinc-400 hover:text-[#0b1f38] dark:hover:text-white")
                : (active
                    ? "text-white"
                    : "text-white/90 hover:text-white");

              return (
                <Link
                  key={href}
                  href={href}
                  className={`group relative py-2 text-[13px] tracking-[0.2em] uppercase font-semibold
                           transition-colors duration-300
                           outline-none focus-visible:ring-2 focus-visible:ring-defensya-blue/50
                           ${textColor}`}
                >
                  <span className="relative">
                    {label}
                    {/* Indicador de sección activa */}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-defensya-blue transition-all duration-300
                                  ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </span>
                </Link>
              );
            })}

            {/* Contacto */}
            <div className="ml-3">
              <ClipButton href="/contacto">Contacto</ClipButton>
            </div>

            {/* Theme toggle */}
            <div
              className={`pl-6 border-l transition-colors duration-300
                          ${scrolled ? "border-slate-200/70 dark:border-white/[0.08]" : "border-white/20"}`}
            >
              <ThemeToggle />
            </div>
          </div>

          {/* ── Mobile controls ── */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className={`p-2 transition-colors duration-150
                         ${scrolled ? "text-slate-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-white" : "text-white/90 hover:text-white"}`}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile slide-in menu ── */}
      <MobileMenu isOpen={mobileOpen} onClose={closeMobile} pathname={pathname} />
    </>
  );
}
