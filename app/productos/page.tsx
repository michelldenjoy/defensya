"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PRODUCTOS } from "@/data/productos";
import HeroSection from "@/components/shared/HeroSection";
import { DiagonalBadge } from "@/components/ui/DiagonalBadge";
import { X, ArrowRight } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type CatKey =
  | "Todos"
  | "Vision"
  | "Datos"
  | "Test"
  | "Mision"
  | "Civil"
  | "Displays";

const CATS: { key: CatKey; label: string; tag: string }[] = [
  { key: "Todos", label: "Todos", tag: "ALL" },
  { key: "Vision", label: "Visión", tag: "VIS" },
  { key: "Datos", label: "Datos", tag: "DAT" },
  { key: "Test", label: "Soporte y Test", tag: "TST" },
  { key: "Mision", label: "Misión", tag: "MIS" },
  { key: "Civil", label: "Ing. Civil", tag: "CIV" },
  { key: "Displays", label: "Displays", tag: "DIS" },
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}
function getCat(key: string) {
  return CATS.find((c) => c.key === key) ?? CATS[0];
}

// ─── Font style refs ──────────────────────────────────────────────────────────

const D: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif" };
const M: React.CSSProperties = { fontFamily: "'Space Mono', monospace" };
const FONT_DISPLAY = "font-['Barlow_Condensed'] uppercase tracking-tight";
const FONT_MONO = "font-['Space_Mono'] font-mono uppercase tracking-[0.3em]";

// ─── Blinking dot ─────────────────────────────────────────────────────────────

function Dot({ d = 0, sz = 5 }: { d?: number; sz?: number }) {
  return (
    <span
      className="inline-block shrink-0 rounded-full bg-[var(--acc)] animate-[def-blink_1.5s_ease_infinite]"
      style={{ 
        width: sz, height: sz, 
        animationDuration: `${1.5 + d * 0.3}s`,
        animationDelay: `${d * 0.15}s` 
      }}
    />
  );
}

// ─── Radar ────────────────────────────────────────────────────────────────────

const BLIPS: [number, number][] = [
  [55, 30],
  [28, 56],
  [70, 64],
  [46, 42],
  [60, 78],
];

function Radar() {
  return (
    <div className="absolute right-0 -top-[14%] w-[460px] h-[460px] opacity-[var(--radar-op)] pointer-events-none select-none">
      {[1, 0.75, 0.5, 0.25].map((s) => (
        <div
          key={s}
          className="absolute rounded-full border border-[var(--radar-c)]"
          style={{ width: `${s * 100}%`, height: `${s * 100}%`, top: `${(1 - s) * 50}%`, left: `${(1 - s) * 50}%` }}
        />
      ))}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[var(--radar-c)]" />
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[var(--radar-c)]" />
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-[conic-linear(from_0deg,var(--acc)_0deg,transparent_55deg)] animate-[def-radar_4s_linear_infinite]" />
      </div>
      {BLIPS.map(([x, y], i) => (
        <div key={i} className="absolute w-1 h-1 rounded-full bg-[var(--acc)] animate-pulse" style={{ left: `${x}%`, top: `${y}%` }} />
      ))}
    </div>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar({
  filtro,
  setFiltro,
  countFor,
}: {
  filtro: CatKey;
  setFiltro: (k: CatKey) => void;
  countFor: (k: string) => number;
}) {
  return (
    <aside className="def-sidebar sbn">
      {/* TITULO BARRA LATERAL */}
      <div
        style={{
          padding: "26px 20px 18px",
          borderBottom: "1px solid var(--bdr)",
        }}
      >
        <p
          style={{
            ...D,
            fontSize: "1.3rem",
            fontWeight: 900,
            textTransform: "uppercase",
            color: "var(--t1)",
            lineHeight: 1,
          }}
        >
          Defensya
        </p>
      </div>

      {/* "Filtrar por" label */}
      <div style={{ padding: "16px 20px 6px" }}>
        <p
          style={{
            ...M,
            fontSize: 10,
            color: "var(--t1)",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
          }}
        >
          Filtrar por
        </p>
      </div>

      {/* FILTRO BARRA LATERAL */}
      <nav style={{ flex: 1 }}>
        {CATS.map((cat) => {
          const active = filtro === cat.key;
          const count = countFor(cat.key);
          return (
            <button
              key={cat.key}
              onClick={() => setFiltro(cat.key)}
              className={`sf ${active ? "sa" : ""}`}
            >
              {/* Count - NUMEROS LATERALES */}
              <span
                style={{
                  ...M,
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  lineHeight: 1,
                  minWidth: 36,
                  color: active ? "var(--acc)" : "var(--t4)",
                  transition: "color .18s",
                }}
              >
                {pad(count)}
              </span>

              <span
                style={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                {/* Label TITULO LATERAL */}
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    fontWeight: active ? 500 : 400,
                    color: active ? "var(--t1)" : "var(--t2)",
                    transition: "color .18s",
                    lineHeight: 1.25,
                  }}
                >
                  {cat.label}
                </span>
                {/* Tag SUBTITULO LATERAL */}
                <span
                  style={{
                    ...M,
                    fontSize: 8,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: active ? "var(--acc)" : "var(--t4)",
                    transition: "color .18s",
                  }}
                >
                  {cat.tag}
                </span>
              </span>

              {active && (
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 10,
                    color: "var(--acc)",
                  }}
                >
                  →
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Sidebar footer */}
      <div style={{ padding: "14px 20px", borderTop: "1px solid var(--bdr)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              ...M,
              fontSize: 12,
              color: "var(--t4)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            20+ patentes
          </span>
        </div>
      </div>
    </aside>
  );
}

// ─── Mobile filter strip (< lg) ───────────────────────

function MobileFilters({
  filtro,
  setFiltro,
  countFor,
}: {
  filtro: CatKey;
  setFiltro: (k: CatKey) => void;
  countFor: (k: string) => number;
}) {
  return (
    <div
      className="def-mfilter sbn sticky top-0 z-30"
      style={{
        background: "var(--bg-nav)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--bdr)",
        overflowX: "auto",
      }}
    >
      <div style={{ display: "flex", alignItems: "stretch" }}>
        {CATS.map((cat) => {
          const active = filtro === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setFiltro(cat.key)}
              className={`mft ${active ? "mfa" : ""}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                padding: "12px 18px",
              }}
            >
              <span
                style={{
                  ...M,
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: active ? "var(--acc)" : "var(--t4)",
                  transition: "color .18s",
                }}
              >
                {pad(countFor(cat.key))}
              </span>
              <span
                style={{
                  ...M,
                  fontSize: 8,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  color: active ? "var(--t1)" : "var(--t3)",
                  transition: "color .18s",
                }}
              >
                {cat.tag}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}


// ─── Modal ───────────────────────────────────────────

function ProductModal({
  producto, open, onClose,
}: {
  producto: typeof PRODUCTOS[number] | null
  open: boolean
  onClose: () => void
}) {
  const [slide, setSlide] = useState(0)

  // Construye el array de imágenes unificado
  const images: string[] = producto
    ? Array.isArray(producto.imagen)
      ? producto.imagen
      : [producto.imagen]
    : []

  const hasMany = images.length > 1

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  if (!open || !producto) return null

  const cat = getCat(producto.categoria)
  const idx = PRODUCTOS.indexOf(producto)

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSlide(s => (s - 1 + images.length) % images.length)
  }
  const next = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSlide(s => (s + 1) % images.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-10">
      <div
        className="absolute inset-0"
        style={{ background: "rgba(5,8,24,0.52)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }}
        onClick={onClose}
      />
      <div
        className="relative z-10 w-full max-w-5xl overflow-hidden"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--bdr)",
          boxShadow: "var(--sh-modal)",
          animation: "def-modal .24s ease-out forwards",
        }}
      >
        {/* Accent line */}
        <div style={{ height: 2, background: "linear-linear(90deg,transparent,var(--acc),transparent)" }} />

        {/* Header */}
        <div
          className="flex items-center justify-between px-8 py-4"
          style={{ borderBottom: "1px solid var(--bdr)" }}
        >
          <div className="flex items-center gap-3">
            <Dot />
            <span style={{ ...M, fontSize: 10, letterSpacing: "0.35em", color: "var(--acc)", textTransform: "uppercase" }}>
              Ficha Técnica — {cat.tag}–{pad(idx + 1)}
            </span>
            {/* Indicador de fotos si hay varias */}
            {hasMany && (
              <span style={{ ...M, fontSize: 8, color: "var(--t4)", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                · {pad(slide + 1)}/{pad(images.length)}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center",
              border: "1px solid var(--bdr)", color: "var(--t3)",
              transition: "color .2s, border-color .2s", background: "transparent", cursor: "pointer",
            }}
            onMouseOver={e => { const b = e.currentTarget; b.style.color = "var(--t1)"; b.style.borderColor = "var(--bdr-hi)"; }}
            onMouseOut={e => { const b = e.currentTarget; b.style.color = "var(--t3)"; b.style.borderColor = "var(--bdr)"; }}
          >
            <X size={12} />
          </button>
        </div>

        {/* Body */}
        <div className="grid lg:grid-cols-[55%_1fr]">

          {/* ── Image panel con slider ── */}
          <div
            className="relative min-h-72 overflow-hidden"
            style={{ borderRight: "1px solid var(--bdr)" }}
          >
            {/* Slides */}
            <div
              style={{
                display: "flex",
                width: `${images.length * 100}%`,
                height: "100%",
                transform: `translateX(-${(slide / images.length) * 100}%)`,
                transition: "transform 0.42s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {images.map((src, i) => (
                <div key={i} style={{ position: "relative", width: `${100 / images.length}%`, flexShrink: 0, minHeight: 288 }}>
                  <Image src={src} alt={`${producto.nombre} ${i + 1}`} fill className="object-cover" />
                  <div style={{ position: "absolute", inset: 0, background: "var(--img-ov)" }} />
                </div>
              ))}
            </div>

            {/* Fixed brackets */}
            {[
              { top: 14, left: 14,   borderTop:    "1px solid var(--bdr-hi)", borderLeft:   "1px solid var(--bdr-hi)" },
              { top: 14, right: 14,  borderTop:    "1px solid var(--bdr-hi)", borderRight:  "1px solid var(--bdr-hi)" },
              { bottom: 72, left: 14,  borderBottom: "1px solid var(--bdr-hi)", borderLeft:   "1px solid var(--bdr-hi)" },
              { bottom: 72, right: 14, borderBottom: "1px solid var(--bdr-hi)", borderRight:  "1px solid var(--bdr-hi)" },
            ].map((s, i) => <span key={i} style={{ position: "absolute", width: 16, height: 16, ...s, zIndex: 2 }} />)}

            {/* ── Controles prev/next ── solo si hay varias fotos */}
            {hasMany && (
              <>
                <button
                  onClick={prev}
                  style={{
                    position: "absolute", left: 14, top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 3,
                    width: 30, height: 30,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(5,8,24,0.55)",
                    border: "1px solid var(--bdr-hi)",
                    color: "white", cursor: "pointer",
                    transition: "background .2s, border-color .2s",
                    backdropFilter: "blur(6px)",
                  }}
                  onMouseOver={e => (e.currentTarget.style.background = "rgba(5,8,24,0.85)")}
                  onMouseOut={e => (e.currentTarget.style.background = "rgba(5,8,24,0.55)")}
                >
                  <span style={{ ...M, fontSize: 12, lineHeight: 1 }}>←</span>
                </button>
                <button
                  onClick={next}
                  style={{
                    position: "absolute", right: 14, top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 3,
                    width: 30, height: 30,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(5,8,24,0.55)",
                    border: "1px solid var(--bdr-hi)",
                    color: "white", cursor: "pointer",
                    transition: "background .2s, border-color .2s",
                    backdropFilter: "blur(6px)",
                  }}
                  onMouseOver={e => (e.currentTarget.style.background = "rgba(5,8,24,0.85)")}
                  onMouseOut={e => (e.currentTarget.style.background = "rgba(5,8,24,0.55)")}
                >
                  <span style={{ ...M, fontSize: 12, lineHeight: 1 }}>→</span>
                </button>
              </>
            )}

            {/* Bottom info */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 22px 20px", zIndex: 2 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <Dot d={1} sz={4} />
                  <span style={{ ...M, fontSize: 8, color: "rgba(255,255,255,0.38)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                    Sistema activo
                  </span>
                </div>
                {/* ── Dots indicadores ── */}
                {hasMany && (
                  <div style={{ display: "flex", gap: 5, marginBottom: 8 }}>
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setSlide(i) }}
                        style={{
                          width: i === slide ? 16 : 5,
                          height: 5,
                          borderRadius: 999,
                          background: i === slide ? "var(--acc)" : "rgba(255,255,255,0.25)",
                          border: "none", cursor: "pointer", padding: 0,
                          transition: "width 0.3s ease, background 0.3s ease",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              {/* <h2 style={{ ...D, fontSize: "clamp(1.5rem,3vw,2.5rem)", fontWeight: 700, textTransform: "uppercase", lineHeight: 1, color: "#fff" }}>
                {producto.nombre}
              </h2> */}
            </div>
          </div>

          {/* INFORMACION PANEL DERECHO  — */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "24px 26px", borderBottom: "1px solid var(--bdr)" }}>
            <h2 style={{ ...D, fontSize: "clamp(1.5rem,3vw,2.5rem)", padding: "8px 0px" ,fontWeight: 700, textTransform: "uppercase", lineHeight: 1, color: "black" }}>
                {producto.nombre}
              </h2>
              <span style={{ ...M, fontSize: 9, letterSpacing: "0.28em", color: "var(--acc)", textTransform: "uppercase", display: "block", marginBottom: 10 }}>
                {producto.categoria}
              </span>
              <p style={{ fontSize: 15, color: "var(--t2)", lineHeight: 1.7 }}>
                {producto.descripcion}
              </p>
            </div>

            <div style={{ padding: "22px 26px", flexGrow: 1 }}>
              <p style={{ ...M, fontSize: 9, letterSpacing: "0.35em", color: "var(--t3)", textTransform: "uppercase", marginBottom: 14 }}>
                Especificaciones técnicas
              </p>
              {producto.detalles.map((d: string, i: number) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "10px 0", borderBottom: "1px solid var(--bdr)" }}>
                  <span style={{ ...M, fontSize: 9, color: "var(--acc)", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>
                    {pad(i + 1)}
                  </span>
                  <span style={{ fontSize: 14, color: "var(--t2)", lineHeight: 1.65 }}>{d}</span>
                </div>
              ))}
            </div>

            <div style={{ padding: "14px 26px", borderTop: "1px solid var(--bdr)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ ...M, fontSize: 8, color: "var(--t4)", letterSpacing: "0.25em", textTransform: "uppercase" }}>
                Defensya · {cat.tag}–{pad(idx + 1)}
              </span>
              <button
                onClick={onClose}
                style={{ ...M, fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--t3)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, transition: "color .2s" }}
                onMouseOver={e => (e.currentTarget.style.color = "var(--t1)")}
                onMouseOut={e => (e.currentTarget.style.color = "var(--t3)")}
              >
                Cerrar
                <span style={{ display: "inline-block", width: 16, height: 1, background: "currentColor" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Product Card ───────────────────────────────────────

function ProductCard({ producto, index, onOpen }: any) {
  return (
    <article
      className="group relative cursor-pointer overflow-hidden border border-[var(--bdr)] bg-[var(--bg-card)] transition-all hover:border-[var(--acc)]/30"
      style={{ animationDelay: `${index * 0.065}s` }}
      onClick={onOpen}
    >
      <div className="h-[1px] bg-linear-to-r from-transparent via-[var(--bdr-hi)] to-transparent" />
      
      <div className="relative h-[215px] overflow-hidden">
        <Image 
          src={Array.isArray(producto.imagen) ? producto.imagen[0] : producto.imagen} 
          alt={producto.nombre} fill className="object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-[var(--img-ov)]" />
        <DiagonalBadge>{producto.categoria}</DiagonalBadge>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 pt-10 bg-linear-to-t from-black/80 to-transparent">
          <h3 className={`text-2xl font-semibold text-white leading-none ${FONT_DISPLAY}`}>
            {producto.nombre}
          </h3>
        </div>
      </div>

      <div className="flex items-center justify-between p-[10px_14px] border-t border-[var(--bdr)] bg-[var(--bg-strip)]">
        <div className="flex items-center gap-2">
          <Dot d={index * 0.2} sz={4} />
          <span className={`text-[8px] text-[var(--t4)] ${FONT_MONO}`}>Sistema Activo</span>
        </div>
        <span className={`text-[8px] text-[var(--t4)] ${FONT_MONO}`}>REV·3.1</span>
      </div>

      <div className="p-[14px_14px_16px] border-t border-[var(--bdr)]">
        <p className="text-[12px] text-[var(--t2)] leading-relaxed mb-4 line-clamp-2">
          {producto.descripcion}
        </p>
        <div className="flex items-center gap-2">
          <span className={`text-[9px] font-bold text-[var(--t1)] ${FONT_MONO}`}>Ver ficha técnica</span>
          <div className="flex-1 h-[1px] bg-[var(--bdr)] group-hover:bg-[var(--acc)]/30 transition-colors" />
          <ArrowRight size={12} className="text-[var(--acc)]" />
        </div>
      </div>
    </article>
  );
}

// ─── Page ──────────────────────────────────────────────

export default function ProductosPage() {
  const [filtro, setFiltro] = useState<CatKey>("Todos");
  const [selected, setSelected] = useState<(typeof PRODUCTOS)[number] | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);

  const productosFiltrados =
    filtro === "Todos"
      ? PRODUCTOS
      : PRODUCTOS.filter((p) => p.categoria === filtro);

  const catActiva = getCat(filtro);
  const countFor = (k: string) =>
    k === "Todos"
      ? PRODUCTOS.length
      : PRODUCTOS.filter((p) => p.categoria === k).length;

  return (
    <>
      <div
        style={{
          background: "var(--bg)",
          color: "var(--t1)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Dot grid (fixed, decorative) */}
        <div
          className="def-grid fixed inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
        />

        {/* ── HERO VIDEO ── */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <HeroSection
            label="Innovación"
            title="Creamos Soluciones que Vuelan Alto"
            subtitle="Conoce nuestros proyectos y descubre cómo transformamos ideas en realidades tecnológicas del alto impacto."
            video="/products.mp4"
          />
        </div>

        <div className="def-layout">
          {/* ── SIDEBAR (≥ lg) ── */}
          <Sidebar filtro={filtro} setFiltro={setFiltro} countFor={countFor} />

          {/* ── MAIN ── */}
          <div className="def-main" style={{ position: "relative", zIndex: 1 }}>
            {/* Mobile filters (< lg) */}
            <MobileFilters
              filtro={filtro}
              setFiltro={setFiltro}
              countFor={countFor}
            />

            {/* ── HERO SECUNDARIO ── */}
            {/* <section
              className="relative overflow-hidden"
              style={{
                background: "var(--bg-hero)",
                borderBottom: "1px solid var(--bdr)",
                padding: "64px 48px 80px",
              }}
            >
              <Radar />

              <div style={{ position: "relative", zIndex: 1 }}>
               
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 48,
                  }}
                >
                  <Dot sz={5} />
                  <span
                    style={{
                      ...M,
                      fontSize: 9,
                      letterSpacing: "0.38em",
                      color: "var(--acc)",
                      textTransform: "uppercase",
                    }}
                  >
                    Sistema activo · Catálogo Técnico 2025
                  </span>
                </div>

                
                <div
                  className="grid lg:grid-cols-[1fr_34%] gap-12 items-center"
                  style={{ marginBottom: 0 }}
                >
                  <h1
                    style={{
                      ...D,
                      fontSize: "clamp(3.8rem,9vw,8rem)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      lineHeight: 0.9,
                      letterSpacing: "-0.01em",
                      margin: 0,
                    }}
                  >
                    <span style={{ display: "block", color: "var(--t1)" }}>
                      Nuestras
                    </span>
                    <span
                      style={{
                        display: "block",
                        WebkitTextStroke: "2px var(--bdr-hi)",
                        color: "transparent",
                      }}
                    >
                      soluciones
                    </span>
                  </h1>
                  <p
                    style={{
                      fontSize: 18,
                      color: "var(--t2)",
                      lineHeight: 1.74,
                      paddingBottom: 4,
                      margin: 0,
                    }}
                  >
                    Sistemas de ingeniería desarrollados para entornos
                    aeroespaciales y de defensa. Cada solución es el resultado
                    de años de I+D aplicado en proyectos reales de alto impacto.
                  </p>
                </div>

                
                <div
                  className="hero-sweep relative overflow-hidden"
                  style={{
                    height: 1,
                    background: "var(--bdr)",
                    margin: "44px 0 0",
                  }}
                />

                
                <div
                  className="grid grid-cols-3"
                  style={{ border: "1px solid var(--bdr)", borderTop: "none" }}
                >
                  {[
                    { val: pad(PRODUCTOS.length), label: "Soluciones activas" },
                    { val: "05", label: "Áreas tecnológicas" },
                    { val: "20+", label: "Patentes registradas" },
                  ].map(({ val, label }, i) => (
                    <div
                      key={label}
                      style={{
                        padding: "20px 24px",
                        borderRight: i < 2 ? "1px solid var(--bdr)" : "none",
                      }}
                    >
                      <div
                        style={{
                          ...D,
                          fontSize: "2.5rem",
                          fontWeight: 700,
                          lineHeight: 1,
                          color: "var(--acc)",
                          marginBottom: 5,
                        }}
                      >
                        {val}
                      </div>
                      <div
                        style={{
                          ...M,
                          fontSize: 9,
                          color: "var(--t3)",
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                        }}
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>  */}
            {/* HASTA AQUI HERO SECUNDARIO */}

            {/* ── PRODUCT GRID ── */}
            <main
              style={{ padding: "44px 48px", position: "relative", zIndex: 1 }}
            >
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  marginBottom: 32,
                }}
              >
                <div>
                  <span
                    style={{
                      ...M,
                      fontSize: 12,
                      letterSpacing: "0.35em",
                      color: "var(--t2)",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    Categoría activa
                  </span>
                  <h2
                    style={{
                      ...D,
                      fontSize: "1.7rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "var(--t1)",
                      margin: 0,
                    }}
                  >
                    {catActiva.label}
                  </h2>
                </div>
                <span style={{ ...M, fontSize: 9, color: "var(--t4)" }}>
                  {pad(productosFiltrados.length)}&nbsp;/&nbsp;
                  {pad(PRODUCTOS.length)}&nbsp;sistemas
                </span>
              </div>

              {/* Grid */}
              {productosFiltrados.length === 0 ? (
                <div style={{ padding: "100px 0", textAlign: "center" }}>
                  <p
                    style={{
                      ...M,
                      fontSize: 9,
                      color: "var(--t4)",
                      letterSpacing: "0.35em",
                      textTransform: "uppercase",
                    }}
                  >
                    Sin resultados en esta categoría
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {productosFiltrados.map((p, i) => (
                    <ProductCard
                      key={p.id}
                      producto={p}
                      index={i}
                      onOpen={() => {
                        setSelected(p);
                        setModalOpen(true);
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Footer */}
              {productosFiltrados.length > 0 && (
                <div
                  style={{
                    marginTop: 44,
                    paddingTop: 18,
                    borderTop: "1px solid var(--bdr)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      ...M,
                      fontSize: 8,
                      color: "var(--t4)",
                      letterSpacing: "0.28em",
                      textTransform: "uppercase",
                    }}
                  >
                    Defensya · Catálogo 2025 · Rev 3.1
                  </p>
                  <p
                    style={{
                      ...M,
                      fontSize: 8,
                      color: "var(--t4)",
                      letterSpacing: "0.28em",
                      textTransform: "uppercase",
                    }}
                  >
                    {pad(productosFiltrados.length)}&nbsp;/&nbsp;
                    {pad(PRODUCTOS.length)}
                  </p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      <ProductModal
        producto={selected}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
