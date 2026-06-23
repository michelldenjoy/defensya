"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTOS, Producto } from "@/data/productos";
import HeroSection from "@/components/shared/HeroSection";
import ProductIntro from "@/components/products/ProductIntro";


type CatKey = "Todos" | "Vision" | "Datos" | "Test" | "Mision" | "Civil" | "Displays";

const CATS: { key: CatKey; label: string }[] = [
  { key: "Todos",    label: "Todos" },
  { key: "Vision",   label: "Visión" },
  { key: "Datos",    label: "Datos" },
  { key: "Test",     label: "Soporte y Test" },
  { key: "Mision",   label: "Misión" },
  { key: "Civil",    label: "Ing. Civil" },
  { key: "Displays", label: "Displays" },
];

const pad  = (n: number) => String(n).padStart(2, "0");
const pad3 = (n: number) => String(n).padStart(3, "0");

/* ─────────────────────────────────────────────────────────────────
   PÁGINA PRINCIPAL
───────────────────────────────────────────────────────────────── */
export default function ProductosPage() {
  const [filtro, setFiltro]       = useState<CatKey>("Todos");
  const [selected, setSelected]   = useState<Producto | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredItems = useMemo(
    () => filtro === "Todos" ? PRODUCTOS : PRODUCTOS.filter((p) => p.categoria === filtro),
    [filtro]
  );

  const openModal  = (p: Producto) => { setSelected(p); setModalOpen(true); };
  const closeModal = () => setModalOpen(false);
  const goNext = () => {
    if (!selected) return;
    const idx = filteredItems.findIndex((p) => p.id === selected.id);
    setSelected(filteredItems[(idx + 1) % filteredItems.length]);
  };
  const goPrev = () => {
    if (!selected) return;
    const idx = filteredItems.findIndex((p) => p.id === selected.id);
    setSelected(filteredItems[(idx - 1 + filteredItems.length) % filteredItems.length]);
  };

  return (
    <div
      className="min-h-screen bg-[#f0f2f5] dark:bg-[#0a1628]
                 selection:bg-defensya-blue selection:text-white"
    >
      <HeroSection
        label="Operational Assets"
        title=""
        subtitle=""
        video="/products.mp4"
      />

      <ProductIntro />

      <div className="flex flex-col lg:flex-row relative z-10">

        {/* ── ASIDE ── */}
        <aside
          className="w-full lg:w-64 shrink-0 px-6 py-8 lg:px-8 lg:py-10
                     bg-[#060d18] border-r border-[rgba(14,165,233,0.1)]
                     lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col"
        >

          <div className="mb-8">
            <span
              className="block text-slate-400 mb-1"
              style={{
                fontSize: "12px",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
              }}
            >
              Defensya
            </span>
            <p
              className="font-bold uppercase italic text-white leading-none"
              style={{ fontSize: "1.6rem", letterSpacing: "-0.01em" }}
            >
              Catálogo
            </p>
          </div>

          {/* Navegación */}
          <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible
                          pb-2 lg:pb-0 flex-1">
            {CATS.map((cat) => {
              const count  = PRODUCTOS.filter((p) => cat.key === "Todos" || p.categoria === cat.key).length;
              const active = filtro === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setFiltro(cat.key)}
                  className={`relative flex items-center gap-3 px-3 py-2.5 text-left
                              whitespace-nowrap transition-all duration-200 group
                              ${active
                                ? "bg-defensya-blue/[0.40]"
                                : "hover:bg-white/[0.02]"}`}
                >
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-px transition-colors duration-200
                                ${active ? "bg-defensya-blue" : "bg-transparent group-hover:bg-defensya-blue/30"}`}
                  />
                  <span
                    className={`tabular-nums transition-colors duration-200 ${
                      active ? "text-defensya-blue" : "text-white/15"}`}
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    {pad(count)}
                  </span>
                  <span
                    className={`font-bold uppercase tracking-wide transition-colors duration-200 ${
                      active ? "text-white" : "text-white/30"}`}
                    style={{ fontSize: "0.8rem", letterSpacing: "0.06em" }}
                  >
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Pie del aside */}
          <div className="hidden lg:block pt-6 border-t border-[rgba(14,165,233,0.1)]">
            <span
              className="text-white/35"
              style={{
                fontSize: "8px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                lineHeight: 2,
              }}
            >
              
              Defensya Ingeniería 
            </span>
          </div>
        </aside>

        {/* ── GRID CATÁLOGO ── */}
        <main className="flex-1 p-5 sm:p-8 lg:p-10">
          <header className="flex items-end justify-between mb-8 pb-5
                             border-b border-[rgba(14,95,163,0.12)]">
            <div>
              <span
                className="block text-defensya-blue mb-1"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                }}
              >
                {pad(filteredItems.length)} assets
              </span>
              <h2
                className="font-bold uppercase italic leading-none text-[#0b1f38] dark:text-white"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}
              >
                {filtro === "Todos" ? "Inventario Global" : filtro}
              </h2>
            </div>
            <span
              className="hidden sm:block text-[rgba(11,31,56,0.2)] dark:text-white/15"
              style={{
                fontSize: "8px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              DFS-CAT · Defensya R&D
            </span>
          </header>

          {/* Cards */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((p, i) => (
                <ProductCard
                  key={p.id}
                  producto={p}
                  index={i}
                  onOpen={() => openModal(p)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </main>
      </div>

      {/* Modal */}
      <ProductModal
        producto={selected}
        isOpen={modalOpen}
        onClose={closeModal}
        onNext={goNext}
        onPrev={goPrev}
        currentIndex={selected ? filteredItems.findIndex((p) => p.id === selected.id) : 0}
        total={filteredItems.length}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PRODUCT CARD
───────────────────────────────────────────────────────────────── */
const SIGNAL_HEIGHTS = [5, 7, 9, 11] as const;

function ProductCard({
  producto,
  index,
  onOpen,
}: {
  producto: Producto;
  index: number;
  onOpen: () => void;
}) {
  const image    = Array.isArray(producto.imagen) ? producto.imagen[0] : producto.imagen;
  const assetId  = `AST-${pad3(index + 1)}`;
  const [hovered, setHovered] = useState(false);
  const signalActive = (index % 4) + 1;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative cursor-pointer bg-white dark:bg-[#0d1c2e]
                 overflow-hidden border border-[rgba(14,95,163,0.14)] dark:border-white/[0.08]
                 hover:border-defensya-blue/50 hover:-translate-y-0.5"
      style={{
        clipPath: hovered
          ? "polygon(0 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%)"
          : "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
        transition: "clip-path 1.1s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s, transform 0.4s",
        willChange: "clip-path",
      }}
    >
      {/* Bisel de esquina superior derecha */}
      <div
        className="absolute top-0 right-0 z-10 bg-defensya-blue"
        style={{
          width: 18, height: 18,
          clipPath: "polygon(100% 0,0 0,100% 100%)",
          opacity: hovered ? 0 : 0.55,
          transition: "opacity 0.7s ease",
        }}
      />

      {/* Bisel de esquina inferior izquierda */}
      <div
        className="absolute bottom-0 left-0 z-10 bg-defensya-blue"
        style={{
          width: 18, height: 18,
          clipPath: "polygon(0 100%,0 0,100% 100%)",
          opacity: hovered ? 0.85 : 0,
          transition: "opacity 0.7s ease 0.1s",
        }}
      />

      {/* Barra izquierda */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-defensya-blue/20
                      group-hover:bg-defensya-blue/70 transition-colors duration-400" />

      {/* Top strip */}
      <div className="flex items-center px-3.5 py-[9px]
                      border-b border-[rgba(14,165,233,0.08)]
                      bg-defensya-navy">
        <span
          className="text-[rgba(0, 0, 0, 0.45)]"
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          {assetId}
        </span>
        
      </div>

      {/* Imagen */}
      <div className="relative h-[168px] overflow-hidden bg-[#dde3ec] dark:bg-[#060d18]">
        <Image
          src={image}
          alt={producto.nombre}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
          style={{ transition: "transform 0.7s" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(6,13,24,0.7) 0%, transparent 55%)" }}
        />

        {(["top-3 left-3 border-t border-l","top-3 right-3 border-t border-r",
           "bottom-3 left-3 border-b border-l","bottom-3 right-3 border-b border-r"] as const
        ).map((cls, i) => (
          <div
            key={i}
            className={`absolute ${cls} border-defensya-blue/35
                        group-hover:border-defensya-blue/75 transition-colors duration-300`}
            style={{ width: 10, height: 10, transitionDelay: `${i * 30}ms` }}
          />
        ))}

        <div className="absolute bg-defensya-navy/60 px-2 top-[14px] left-4 z-[1]">
          <span
            className="text-white"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
            }}
          >
            {producto.categoria}
          </span>
        </div>

        <div className="absolute bottom-3 left-4 right-4 z-[1]">
          <h3
            className="font-bold uppercase leading-none text-white"
            style={{ fontSize: "clamp(1.15rem, 2vw, 1.3rem)", letterSpacing: "-0.01em" }}
          >
            {producto.nombre}
          </h3>
        </div>
      </div>

      {/* Cuerpo */}
      <div className="px-4 pt-4 pb-3.5">
        <p
          className="text-[rgba(11,31,56,0.55)] dark:text-white/45 leading-[1.55]
                     line-clamp-2 mb-3.5 font-normal"
          style={{ fontSize: "1.09rem" }}
        >
          {producto.descripcion}
        </p>

        <div className="flex items-center justify-between pt-3
                        border-t border-[rgba(14,95,163,0.1)] dark:border-white/[0.06]">

          <div className="flex items-center gap-1.5">

            <span
              className="text-[rgba(11,31,56,0.6)] dark:text-white/25"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Defensya
            </span>
          </div>

          <div
            className="relative inline-flex items-center gap-1.5 px-3 py-[7px]
                       bg-[#0d2545] dark:bg-defensya-blue text-white
                       group-hover:bg-defensya-blue transition-colors duration-250"
            style={{
              clipPath: "polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px))",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Ver ficha
            <ArrowUpRight
              size={11}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                         transition-transform duration-300"
            />
            <span
              className="pointer-events-none absolute bottom-0 right-0 bg-white/25"
              style={{ width: "8px", height: "1px", transformOrigin: "bottom right", transform: "rotate(-45deg) translateX(2px)" }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PRODUCT MODAL — scroll funcional + 100% responsive
───────────────────────────────────────────────────────────────── */
function ProductModal({
  producto,
  isOpen,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  total,
}: {
  producto: Producto | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  total: number;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => { if (isOpen) setCurrentSlide(0); }, [isOpen, producto?.id]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!producto) return null;

  const images    = Array.isArray(producto.imagen) ? producto.imagen : [producto.imagen];
  const nextSlide = () => setCurrentSlide((p) => (p + 1) % images.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + images.length) % images.length);
  const assetRef  = `AST-${pad3(PRODUCTOS.findIndex((p) => p.id === producto.id) + 1)}`;

  return (
    <AnimatePresence>
      {isOpen && (
   
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 lg:p-8">

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* ── Flechas de navegación entre proyectos ── */}
          <button
            onClick={onPrev}
            className="hidden sm:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-[110]
                       w-11 h-11 items-center justify-center
                       bg-[#060d18]/90 border border-[rgba(14,165,233,0.25)]
                       text-white/50 hover:text-white hover:border-defensya-blue
                       transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={onNext}
            className="hidden sm:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-[110]
                       w-11 h-11 items-center justify-center
                       bg-[#060d18]/90 border border-[rgba(14,165,233,0.25)]
                       text-white/50 hover:text-white hover:border-defensya-blue
                       transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronRight size={20} />
          </button>

          {/* Contador de posición bajo el modal — oculto en mobile  */}
          <div className="hidden sm:flex absolute bottom-1 lg:bottom-2 left-1/2 -translate-x-1/2 z-[110]
                          items-center gap-3">
            <span className="text-white/35 text-[9px] tracking-[0.22em] uppercase">
              {pad(currentIndex + 1)} / {pad(total)}
            </span>
          </div>

          {/* Modal —  */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 14 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl overflow-hidden shadow-2xl
                       max-h-[92dvh] sm:max-h-[88dvh] flex flex-col"
            style={{
              clipPath: "polygon(0 0,calc(100% - 28px) 0,100% 28px,100% 100%,0 100%)",
              border: "0.5px solid rgba(14,95,163,0.25)",
            }}
          >
            {/* Bisel esquina */}
            <div
              className="absolute top-0 right-0 z-30 bg-defensya-blue"
              style={{ width: 28, height: 28, clipPath: "polygon(100% 0,0 0,100% 100%)" }}
            />

            {/* Línea superior */}
            <div className="h-px shrink-0 bg-gradient-to-r from-transparent via-defensya-blue/50 to-transparent" />

            {/* Mobile: */}
            <div className="flex sm:hidden items-center justify-between px-3 py-2 shrink-0
                            border-b border-[rgba(14,165,233,0.1)] bg-[#060d18]">
              <button
                onClick={onPrev}
                className="w-9 h-9 flex items-center justify-center border border-white/10
                           text-white/50 hover:text-white hover:border-defensya-blue
                           transition-all duration-200"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-white/35 text-[9px] tracking-[0.22em] uppercase">
                {pad(currentIndex + 1)} / {pad(total)}
              </span>
              <button
                onClick={onNext}
                className="w-9 h-9 flex items-center justify-center border border-white/10
                           text-white/50 hover:text-white hover:border-defensya-blue
                           transition-all duration-200"
                aria-label="Proyecto siguiente"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* ── GRID: ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 flex-1 min-h-0 overflow-y-auto md:overflow-hidden">

              {/* ═══ LEFT — BLANCO: IMAGEN ═══ */}
              <div
                className="bg-white flex flex-col
                           border-r border-[rgba(14,95,163,0.1)]
                           md:h-full md:min-h-0"
              >
                <div className="flex items-center justify-between px-5 py-3 shrink-0
                                border-b border-[rgba(14,95,163,0.08)]">
                  <span
                    className="text-defensya-blue/80 text-[9px] font-bold tracking-[0.25em] uppercase"
                  >
                    Vista del dispositivo
                  </span>
                  <span className="text-black/20 text-[9px] tracking-[0.12em]">
                    {pad(currentSlide + 1)} / {pad(images.length)}
                  </span>
                </div>

                {/* IMAGEN — */}
                <div className="relative group overflow-hidden bg-slate-50
                                h-[260px] sm:h-[300px] md:h-auto md:flex-1 md:min-h-0 shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[currentSlide]}
                        alt={`${producto.nombre} — imagen ${currentSlide + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={currentSlide === 0}
                        className="object-contain p-6"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <span className="pointer-events-none absolute z-10 top-[10px] left-[10px] w-[14px] h-[14px]"
                    style={{ borderTop: "1.5px solid #0e5fa3", borderLeft: "1.5px solid #0e5fa3" }} />
                  <span className="pointer-events-none absolute z-10 bottom-[10px] right-[10px] w-[14px] h-[14px]"
                    style={{ borderBottom: "1.5px solid rgba(14,95,163,0.4)", borderRight: "1.5px solid rgba(14,95,163,0.4)" }} />



                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-slate-200 z-20">
                    <motion.div
                      className="h-full bg-defensya-blue"
                      animate={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
                      transition={{ duration: 0.35 }}
                    />
                  </div>

                  {images.length > 1 && (
                    <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 z-30 flex justify-between
                                    opacity-0 group-hover:opacity-100 sm:transition-opacity duration-200">
                      {[{ fn: prevSlide, d: "M8 2L4 6L8 10" }, { fn: nextSlide, d: "M4 2L8 6L4 10" }].map((btn, i) => (
                        <button key={i} onClick={btn.fn}
                          className="w-9 h-9 flex items-center justify-center border border-black/10
                                     bg-white/80 text-slate-500
                                     hover:border-defensya-blue hover:text-defensya-blue transition-all duration-200">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d={btn.d} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Thumbs de imagen — siempre visibles, tap-friendly en mobile */}
                {images.length > 1 && (
                  <div className="flex gap-1.5 px-5 py-3 shrink-0 border-t border-[rgba(14,95,163,0.08)]">
                    {images.map((_, i) => (
                      <button key={i} onClick={() => setCurrentSlide(i)}
                        className={`flex-1 h-[3px] transition-all duration-300 ${
                          i === currentSlide ? "bg-defensya-blue" : "bg-slate-200 hover:bg-slate-300"
                        }`}
                        aria-label={`Ver imagen ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* ═══ RIGHT — NAVY ═══ */}
              <div className="bg-[#060d18] flex flex-col md:h-full md:min-h-0">

                <div className="flex items-center justify-between px-5 py-3 shrink-0
                                border-b border-[rgba(14,165,233,0.1)]">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-gray-300 border border-defensya-blue/85 px-2 py-[2px]
                                     text-[9px] tracking-[0.18em] uppercase">
                      {assetRef} / {producto.categoria}
                    </span>
                  </div>
                  {/* Cerrar — oculto en mobile porque ya hay un patrón de cierre por backdrop/gesto; visible en sm+ */}
                  <button
                    onClick={onClose}
                    className="hidden sm:flex w-7 h-7 items-center justify-center border border-white/10
                               text-white/30 hover:border-defensya-blue/85 hover:text-white
                               transition-all duration-200"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Header — nombre + badges */}
                <div className="flex flex-col sm:flex-row sm:items-end gap-3
                                px-5 py-5 shrink-0 border-b border-[rgba(14,165,233,0.1)]">
                  <div className="min-w-0">
                    <h2
                      className="font-bold uppercase leading-[.95] sm:leading-[.88] text-white break-words"
                      style={{ fontSize: "clamp(1.4rem, 5vw, 2.4rem)", letterSpacing: "-0.02em" }}
                    >
                      {producto.nombre}
                    </h2>
                  </div>

                </div>

                {/* Descripción + parámetros — ESTE bloque hace el scroll vertical real */}
                <div className="flex-1 min-h-0 overflow-y-auto px-5 py-5
                                overscroll-contain"
                     style={{ WebkitOverflowScrolling: "touch" }}>
                  <SectionLabel label="Descripción técnica" />
                  <p className="font-light leading-[1.75] text-white/85
                                border-l-2 border-defensya-blue/20 pl-3 mb-5 text-[0.92rem]">
                    {producto.descripcion}
                  </p>

                  <SectionLabel label="Parámetros del sistema" />
                  <div>
                    {producto.detalles.map((detalle, idx) => (
                      <div key={idx}
                        className="group/row flex items-start gap-3 py-[7px]
                                   border-b border-white/[0.05] last:border-b-0
                                   hover:bg-white/[0.02] transition-colors duration-200 px-1">
                        <span className="shrink-0 text-defensya-steel mt-[1px] text-[0.92rem] tracking-[0.1em]">
                          {pad(idx + 1)}
                        </span>
                        <span className="w-px self-stretch bg-defensya-blue/18
                                         group-hover/row:bg-defensya-blue/45
                                         transition-colors duration-200 shrink-0" />
                        <span className="font-light leading-[1.55] text-white/85
                                         group-hover/row:text-white/65
                                         transition-colors duration-200 text-[0.8rem]">
                          {detalle}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer — cierre visible siempre en mobile como acción explícita */}
                <div className="flex sm:hidden items-center justify-center px-5 py-3 shrink-0
                                border-t border-[rgba(14,165,233,0.1)]">
                  <button
                    onClick={onClose}
                    className="w-full flex items-center justify-center gap-2 py-2.5
                               border border-white/10 text-white/50
                               hover:border-defensya-blue hover:text-white
                               transition-all duration-200 text-[10px] tracking-[0.22em] uppercase"
                  >
                    <X size={13} />
                    Cerrar ficha
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SECTION LABEL
───────────────────────────────────────────────────────────────── */
function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="text-defensya-steel text-[9px] tracking-[0.28em] uppercase">
        {label}
      </span>
      <div className="flex-1 h-px bg-white/[0.05]" />
    </div>
  );
}