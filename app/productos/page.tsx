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
        title="Ingeniería para el Límite"
        subtitle="Diseñamos y fabricamos sistemas críticos que combinan ingeniería electrónica, óptica y mecánica para aplicaciones aeroespaciales y de defensa."
        video="/products.mp4"
      />

      <ProductIntro />

      <div className="flex flex-col lg:flex-row relative z-10">

        {/* ── SIDEBAR — navy oscuro ── */}
        <aside
          className="w-full lg:w-64 shrink-0 px-6 py-8 lg:px-8 lg:py-10
                     bg-[#060d18] border-r border-[rgba(14,165,233,0.1)]
                     lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col"
        >
          {/* Título catálogo vista*/}
          <div className="mb-8">
            <span
              className="block text-defensya-blue mb-1"
              style={{
                fontSize: "9px",
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

          {/* Pie del sidebar */}
          <div className="hidden lg:block pt-6 border-t border-[rgba(14,165,233,0.1)]">
            <span
              className="text-white/15"
              style={{
                fontSize: "8px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                lineHeight: 2,
              }}
            >
              DFS-CAT · Rev A<br />
              Defensya Systems S.L.
            </span>
          </div>
        </aside>

        {/* ── GRID CATÁLOGO ── */}
        <main className="flex-1 p-5 sm:p-8 lg:p-10">
          {/* Header del grid */}
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
                {pad(filteredItems.length)} assets encontrados
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
  // señal fija por índice para evitar re-render hidratación
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
                 overflow-hidden border border-[rgba(14,95,163,0.12)]
                 hover:border-defensya-blue/50 transition-colors duration-300"
      style={{
        clipPath: hovered
          ? "polygon(0 0,100% 0,100% 0,100% 100%,0 100%)"
          : "polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,0 100%)",
        transition: "clip-path 0.4s cubic-bezier(0.4,0,0.2,1), border-color 0.3s",
      }}
    >
      {/* Bisel de esquina */}
      <div
        className="absolute top-0 right-0 z-10 bg-defensya-blue
                   transition-opacity duration-300"
        style={{
          width: 16, height: 16,
          clipPath: "polygon(100% 0,0 0,100% 100%)",
          opacity: hovered ? 1 : 0.5,
        }}
      />

      {/* Barra izquierda */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-defensya-blue/20
                      group-hover:bg-defensya-blue/70 transition-colors duration-400" />

      {/* Top strip */}
      <div className="flex items-center justify-between px-4 py-2
                      border-b border-[rgba(14,95,163,0.07)]
                      bg-[#060d18]">
        <span
          className="text-[rgba(14,165,233,0.4)]"
          style={{
            fontSize: "8px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          {assetId}
        </span>
        {/* Barras de señal */}
        <div className="flex items-end gap-[2px]">
          {SIGNAL_HEIGHTS.map((h, i) => (
            <div
              key={i}
              className="w-[3px] transition-colors duration-300"
              style={{
                height: `${h}px`,
                background: i < signalActive
                  ? (hovered ? "#0ea5e9" : "rgba(14,165,233,0.5)")
                  : "rgba(14,165,233,0.1)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Imagen */}
      <div className="relative h-44 overflow-hidden bg-[#e8edf3] dark:bg-[#060d18]">
        <Image
          src={image}
          alt={producto.nombre}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover group-hover:scale-105"
          style={{ transition: "transform 0.7s" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(6,13,24,0.65) 0%, transparent 55%)" }}
        />

        {/* Corners HUD */}
        {(["top-3 left-3 border-t border-l","top-3 right-3 border-t border-r",
           "bottom-3 left-3 border-b border-l","bottom-3 right-3 border-b border-r"] as const
        ).map((cls, i) => (
          <div
            key={i}
            className={`absolute ${cls} border-defensya-blue/30
                        group-hover:border-defensya-blue/70 transition-colors duration-300`}
            style={{ width: 10, height: 10, transitionDelay: `${i * 30}ms` }}
          />
        ))}

        {/* Categoría */}
        <div className="absolute top-3 left-4">
          <span
            className="text-slate-500"
            style={{
              fontSize: "10px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            /{producto.categoria}
          </span>
        </div>

        {/* Nombre */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3
            className="font-bold uppercase leading-none text-white"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", letterSpacing: "-0.01em" }}
          >
            {producto.nombre}
          </h3>
        </div>
      </div>

      {/* Cuerpo */}
      <div className="px-4 pt-3 pb-4">
        <p
          className="text-[rgba(11,31,56,0.7)] tracking-tight dark:text-white/80 leading-[1.55]
                     line-clamp-2 mb-4"
          style={{ fontSize: "0.98rem" }}
        >
          {producto.descripcion}
        </p>

        <div className="flex items-center justify-between
                        border-t border-[rgba(14,95,163,0.18)] pt-3">
          <div className="flex items-center gap-1.5 font-bold text-defensya-blue/80
                          group-hover:text-defensya-blue transition-colors dark:text-white/80 group-hover:dark:text-white duration-300">
            <span
              style={{
                fontSize: "12px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                
              }}
            >
              Ver ficha
            </span>
            <ArrowUpRight
              size={10}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                         transition-transform duration-300"
            />
          </div>
          <div className="h-px flex-1 mx-3 bg-gradient-to-r from-defensya-blue
                          via-defensya-blue/50 to-defensya-blue/0
                          opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PRODUCT MODAL — split blanco / navy
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8">

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* ── Flechas de navegación entre proyectos — fuera del modal para no quedar ocultas ── */}
          <button
            onClick={onPrev}
            className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-[110]
                       w-11 h-11 flex items-center justify-center
                       bg-[#060d18]/90 border border-[rgba(14,165,233,0.25)]
                       text-white/50 hover:text-defensya-blue hover:border-defensya-blue
                       transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={onNext}
            className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-[110]
                       w-11 h-11 flex items-center justify-center
                       bg-[#060d18]/90 border border-[rgba(14,165,233,0.25)]
                       text-white/50 hover:text-defensya-blue hover:border-defensya-blue
                       transition-all duration-200 backdrop-blur-sm"
          >
            <ChevronRight size={20} />
          </button>

          {/* Contador de posición bajo el modal */}
          <div className="absolute bottom-1 lg:bottom-2 left-1/2 -translate-x-1/2 z-[110]
                          flex items-center gap-3">
            <span className="text-white/35 text-[9px] tracking-[0.22em] uppercase">
              {pad(currentIndex + 1)} / {pad(total)}
            </span>
          </div>

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 14 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl overflow-hidden shadow-2xl"
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
            <div className="h-px bg-gradient-to-r from-transparent via-defensya-blue/50 to-transparent" />

            {/* ── GRID: LEFT blanco / RIGHT navy — desde arriba ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">

              {/* ═══ LEFT — BLANCO completo: imagen ═══ */}
              <div
                className="bg-white flex flex-col
                           border-r border-[rgba(14,95,163,0.1)]"
              >
                {/* Sub-header blanco con eyebrow */}
                <div className="flex items-center justify-between px-5 py-3
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

                {/* Imagen — ocupa todo el espacio disponible */}
                <div className="relative flex-1 group overflow-hidden bg-slate-50 min-h-[300px]">
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

                  {/* Corners HUD */}
                  <span className="pointer-events-none absolute z-10 top-[10px] left-[10px] w-[14px] h-[14px]"
                    style={{ borderTop: "1.5px solid #0e5fa3", borderLeft: "1.5px solid #0e5fa3" }} />
                  <span className="pointer-events-none absolute z-10 bottom-[10px] right-[10px] w-[14px] h-[14px]"
                    style={{ borderBottom: "1.5px solid rgba(14,95,163,0.4)", borderRight: "1.5px solid rgba(14,95,163,0.4)" }} />

                  {/* View tag */}
                  <div className="absolute top-[10px] left-[10px] z-20">
                    <span className="bg-white/90 text-defensya-blue border border-defensya-blue/30
                                     px-2 py-[2px] text-[8px] tracking-[0.18em] uppercase">
                      Vista {pad(currentSlide + 1)}
                    </span>
                  </div>

                  {/* Barra progreso */}
                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-slate-200 z-20">
                    <motion.div
                      className="h-full bg-defensya-blue"
                      animate={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
                      transition={{ duration: 0.35 }}
                    />
                  </div>

                  {/* Flechas imagen — hover */}
                  {images.length > 1 && (
                    <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 z-30 flex justify-between
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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

                {/* Thumbs + nav en  el pie de la columna blanca */}
                <div className="px-5 py-3 border-t border-[rgba(14,95,163,0.08)] flex items-center gap-3">
                  <div className="flex gap-1.5 flex-1">
                    {images.map((_, i) => (
                      <button key={i} onClick={() => setCurrentSlide(i)}
                        className={`flex-1 h-[3px] transition-all duration-300 ${
                          i === currentSlide ? "bg-defensya-blue" : "bg-slate-200 hover:bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* FLECHAS FIJAS EN FOOTER DE IMG */}
                  {images.length > 1 && (
                    <div className="flex gap-1.5 shrink-0">
                      {[{ fn: prevSlide, d: "M8 2L4 6L8 10" }, { fn: nextSlide, d: "M4 2L8 6L4 10" }].map((btn, i) => (
                        <button key={i} onClick={btn.fn}
                          className="w-7 h-7 flex items-center justify-center border border-black/10
                                     text-slate-400 hover:border-defensya-blue hover:text-defensya-blue
                                     transition-all duration-200">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d={btn.d} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* ═══ RIGHT — NAVY completo: topbar + header + detalles ═══ */}
              <div className="bg-[#060d18] flex flex-col">

                {/* Top bar — navy */}
                <div className="flex items-center justify-between px-5 py-3
                                border-b border-[rgba(14,165,233,0.1)]">
                  <div className="flex items-center gap-4 flex-wrap">

                    <span className="text-defensya-steel border border-defensya-blue/85 px-2 py-[2px]
                                     text-[9px] tracking-[0.18em] uppercase">
                      {assetRef} / {producto.categoria}
                    </span>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-7 h-7 flex items-center justify-center border border-white/10
                               text-white/30 hover:border-defensya-blue/85 hover:text-defensya-steel
                               transition-all duration-200"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Header — nombre + badges AST */}
                <div className="flex items-end justify-between px-5 py-5
                                border-b border-[rgba(14,165,233,0.1)]">
                  <div>
                    <span className="block text-defensya-steel mb-2 text-[10px] tracking-[0.3em] uppercase">
                      {producto.categoria} · Defensya Systems
                    </span>
                    <h2
                      className="font-bold uppercase leading-[.88] text-white"
                      style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", letterSpacing: "-0.02em" }}
                    >
                      {producto.nombre}
                    </h2>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-1.5 shrink-0 pl-4">
                    <span className="text-defensya-steel border border-defensya-blue/85 px-2 py-[3px]
                                     text-[8px] tracking-[0.16em] uppercase">
                      NATO STANAG
                    </span>
                    <span className="border px-2 py-[3px] text-[8px] tracking-[0.16em] uppercase"
                      style={{ color: "rgba(34,197,94,0.9)", borderColor: "rgba(34,197,94,0.35)" }}>
                      Certificado
                    </span>
                  </div>
                </div>

                {/* Descripción + parámetros */}
                <div className="flex-1 overflow-y-auto px-5 py-5">
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
                        <span className="shrink-0 text-defensya-blue mt-[1px] text-[0.92rem] tracking-[0.1em]">
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

                {/* Footer — navy */}
                <div className="flex items-center justify-between px-5 py-4
                                border-t border-[rgba(14,165,233,0.1)] flex-wrap gap-3">

                  {/* ClipButton corporativo */}
                  {/* <button
                    className="group/btn relative inline-flex items-center gap-2.5 px-5 py-2.5
                               bg-[#0d2545] text-white text-[11px] tracking-[0.22em]
                               uppercase font-bold hover:bg-defensya-blue
                               transition-colors duration-200 shrink-0"
                    style={{
                      clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))",
                    }}
                  >
                    Solicitar información
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                      className="translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-200">
                      <path d="M1.5 5h7M6 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="pointer-events-none absolute bottom-0 right-0 bg-white/20"
                      style={{ width: "11px", height: "1px", transformOrigin: "bottom right", transform: "rotate(-45deg) translateX(3px)" }} />
                  </button> */}
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
   SECTION LABEL — separador técnico para el panel navy
───────────────────────────────────────────────────────────────── */
function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-4 h-px bg-defensya-blue/50" />
      <span className="text-defensya-steel text-[9px] tracking-[0.28em] uppercase">
        {label}
      </span>
      <div className="flex-1 h-px bg-white/[0.05]" />
    </div>
  );
}