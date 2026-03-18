"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PRODUCTOS } from "@/data/productos";
import HeroSection from "@/components/shared/HeroSection";
import { DiagonalBadge } from "@/components/ui/DiagonalBadge";
import { X } from "lucide-react";

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

// ─── Blinking dot ─────────────────────────────────────────────────────────────

function Dot({ d = 0, sz = 5 }: { d?: number; sz?: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        flexShrink: 0,
        width: sz,
        height: sz,
        borderRadius: "50%",
        background: "var(--acc)",
        animation: `def-blink ${1.5 + d * 0.3}s ease ${d * 0.15}s infinite`,
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
    <div
      aria-hidden
      style={{
        position: "absolute",
        right: "0%",
        top: "-14%",
        width: 460,
        height: 460,
        opacity: "var(--radar-op)" as React.CSSProperties["opacity"],
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      {([1, 0.75, 0.5, 0.25] as number[]).map((s) => (
        <div
          key={s}
          style={{
            position: "absolute",
            borderRadius: "50%",
            border: "1px solid var(--radar-c)",
            width: `${s * 100}%`,
            height: `${s * 100}%`,
            top: `${(1 - s) * 50}%`,
            left: `${(1 - s) * 50}%`,
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: 1,
          background: "var(--radar-c)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: 1,
          background: "var(--radar-c)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "conic-gradient(from 0deg, var(--acc) 0deg, transparent 55deg)",
            animation: "def-radar 4s linear infinite",
          }}
        />
      </div>
      {BLIPS.map(([x, y], i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "var(--acc)",
            left: `${x}%`,
            top: `${y}%`,
            animation: `def-blink ${1.5 + i * 0.38}s ease ${
              i * 0.22
            }s infinite`,
          }}
        />
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
        <div style={{ height: 2, background: "linear-gradient(90deg,transparent,var(--acc),transparent)" }} />

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

function ProductCard({
  producto,
  index,
  onOpen,
}: {
  producto: (typeof PRODUCTOS)[number];
  index: number;
  onOpen: () => void;
}) {
  return (
    <article
      className="dc cri"
      style={{ animationDelay: `${index * 0.065}s` }}
      onClick={onOpen}
    >
      {/* Hairline */}
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg,transparent,var(--bdr-hi),transparent)",
        }}
      />

      {/* IMAGEN EN EL CARD */}
      <div style={{ position: "relative", height: 215, overflow: "hidden" }}>
        <Image
          src={Array.isArray(producto.imagen) ? producto.imagen[0] : producto.imagen} 
          alt={producto.nombre}
          fill
          className="dc-img object-cover"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--img-ov)",
          }}
        />
        <div className="dc-scan" />
        <div className="dc-brk dc-tl" />
        <div className="dc-brk dc-tr" />
        <div className="dc-brk dc-bl" />
        <div className="dc-brk dc-br" />

        {/* DiagonalBadge — categoría */}
        <DiagonalBadge>{producto.categoria}</DiagonalBadge>

        {/* Product name */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "0 14px 14px",
          }}
        >
          <h3
            style={{
              ...D,
              fontSize: "1.5rem",
              fontWeight: 600,
              textTransform: "uppercase",
              lineHeight: 1,
              color: "#fff",
            }}
          >
            {producto.nombre}
          </h3>
        </div>
      </div>

      {/* Status strip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          borderTop: "1px solid var(--bdr)",
          background: "var(--bg-strip)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <Dot d={index * 0.45} sz={4} />
          <span
            style={{
              ...M,
              fontSize: 8,
              color: "var(--t4)",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            Sistema activo
          </span>
        </div>
        <span style={{ ...M, fontSize: 8, color: "var(--t4)" }}>REV·3.1</span>
      </div>

      {/* Description + CTA */}
      <div
        style={{ padding: "14px 14px 16px", borderTop: "1px solid var(--bdr)" }}
      >
        <p
          style={{
            fontSize: 12,
            color: "var(--t2)",
            lineHeight: 1.65,
            marginBottom: 14,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {producto.descripcion}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="dc-lbl">Ver ficha técnica</span>
          <span className="dc-line" style={{ flex: 1 }} />
          <span style={{ fontSize: 11, color: "var(--acc)" }}>→</span>
        </div>
      </div>

      <div className="dc-bar" />
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

            {/* ── SECTION HERO ── */}
            <section
              className="relative overflow-hidden"
              style={{
                background: "var(--bg-hero)",
                borderBottom: "1px solid var(--bdr)",
                padding: "64px 48px 80px",
              }}
            >
              <Radar />

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Pre-title */}
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

                {/* Header */}
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

                {/* Animated divider */}
                <div
                  className="hero-sweep relative overflow-hidden"
                  style={{
                    height: 1,
                    background: "var(--bdr)",
                    margin: "44px 0 0",
                  }}
                />

                {/* Stats */}
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
            </section>

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
