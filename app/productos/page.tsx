"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Shield,
} from "lucide-react";
import { PRODUCTOS, Producto } from "@/data/productos";
import HeroSection from "@/components/shared/HeroSection";
import { DiagonalBadge } from "@/components/ui/DiagonalBadge";

// ─── TIPOS ────────────────────────────────────────────────────────────────────

type CatKey = "Todos" | "Vision" | "Datos" | "Test" | "Mision" | "Civil" | "Displays";

const CATS: { key: CatKey; label: string; tag: string }[] = [
  { key: "Todos",    label: "Todos",         tag: "ALL" },
  { key: "Vision",   label: "Visión",        tag: "VIS" },
  { key: "Datos",    label: "Datos",         tag: "DAT" },
  { key: "Test",     label: "Soporte y Test", tag: "TST" },
  { key: "Mision",   label: "Misión",        tag: "MIS" },
  { key: "Civil",    label: "Ing. Civil",    tag: "CIV" },
  { key: "Displays", label: "Displays",      tag: "DIS" },
];

const pad = (n: number) => String(n).padStart(2, "0");

// ─── PAGE status ─────────────────────────────────────────────────────────────────────

export default function ProductosPage() {
  const [filtro, setFiltro]     = useState<CatKey>("Todos");
  const [selected, setSelected] = useState<Producto | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredItems = useMemo(
    () => (filtro === "Todos" ? PRODUCTOS : PRODUCTOS.filter((p) => p.categoria === filtro)),
    [filtro]
  );

  const openModal  = (p: Producto) => { setSelected(p); setModalOpen(true); };
  const closeModal = ()             => setModalOpen(false);

  return (
    <div className="min-h-screen bg-white dark:bg-defensya-navy selection:bg-defensya-blue selection:text-white">
      {/* Grid decorativo de fondo */}
      <div className="fixed inset-0 bg-[radial-linear(circle_at_2px_2px,rgba(0,0,0,0.05)_1px,transparent_0)] dark:bg-[radial-linear(circle_at_2px_2px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-size-[32px_32px] pointer-events-none z-0" />

      <HeroSection
        label="Operational Assets"
        title="Ingeniería para el Límite"
        subtitle="Sistemas aeroespaciales desarrollados bajo estándares militares para misiones críticas."
        video="/products.mp4"
      />

      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row relative z-10">

        {/* ── SIDEBAR TÁCTICO ── */}
        <aside className="w-full lg:w-72 p-6 lg:p-10 border-r border-gray-100 dark:border-white/5 lg:sticky lg:top-0 lg:h-screen bg-white/50 dark:bg-[#050609]/50 backdrop-blur-md">
          <div className="mb-10">
            <h2 className="text-[10px] font-mono tracking-[0.4em] text-defensya-blue uppercase mb-2">Navigation</h2>
            <p className="text-2xl font-bold font-display uppercase italic dark:text-white">Catálogo</p>
          </div>

          <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
            {CATS.map((cat) => {
              const count = PRODUCTOS.filter((p) => cat.key === "Todos" || p.categoria === cat.key).length;
              return (
                <button
                  key={cat.key}
                  onClick={() => setFiltro(cat.key)}
                  className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 group whitespace-nowrap
                    ${filtro === cat.key ? "bg-defensya-blue/10 dark:bg-white/5" : "hover:bg-gray-50 dark:hover:bg-white/2"}`}
                >
                  <span className={`font-mono text-lg ${filtro === cat.key ? "text-defensya-blue" : "text-gray-300 dark:text-gray-700"}`}>
                    {pad(count)}
                  </span>
                  <div className="text-left leading-none">
                    <p className={`text-sm font-bold uppercase tracking-tight ${filtro === cat.key ? "text-defensya-blue" : "text-gray-500"}`}>
                      {cat.label}
                    </p>
                    <p className="text-[9px] font-mono text-gray-400 mt-1 uppercase tracking-widest">{cat.tag}</p>
                  </div>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ── GRID PRODUCTOS ── */}
        <main className="flex-1 p-6 lg:p-12">
          <header className="flex items-end justify-between mb-12 border-b border-gray-100 dark:border-white/5 pb-8">
            <h2 className="text-4xl font-bold font-display uppercase italic dark:text-white tracking-tighter">
              {filtro === "Todos" ? "Global Inventory" : filtro}
            </h2>
          </header>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((p, i) => (
                <ProductCard key={p.id} producto={p} index={i} onOpen={() => openModal(p)} />
              ))}
            </AnimatePresence>
          </motion.div>
        </main>
      </div>

      {/* ── MODAL INLINE ── */}
      <ProductModal producto={selected} isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}

// ─── CARD 

function ProductCard({
  producto,
  index,
  onOpen,
}: {
  producto: Producto;
  index: number;
  onOpen: () => void;
}) {
  const image = Array.isArray(producto.imagen) ? producto.imagen[0] : producto.imagen;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onOpen}
      className="group relative cursor-pointer bg-white dark:bg-white/3 border border-gray-100 dark:border-white/10 overflow-hidden hover:border-defensya-blue/40 transition-all duration-500"
    >
      <div className="absolute inset-0 w-full h-px bg-defensya-blue/30 z-20 top-0 opacity-0 group-hover:animate-[def-scan_2s_linear_infinite] group-hover:opacity-100 pointer-events-none" />

      <div className="relative h-56 overflow-hidden bg-neutral-900">
        <Image
          src={image}
          alt={producto.nombre}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />
        <DiagonalBadge>{producto.categoria}</DiagonalBadge>

        <div className="absolute bottom-4 left-5 right-5">
          <h3 className="text-2xl font-semibold text-white uppercase font-display italic leading-none tracking-tighter">
            {producto.nombre}
          </h3>
        </div>
      </div>

      <div className="p-5">

        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-6 italic">
          {producto.descripcion}
        </p>
        <div className="flex items-center justify-between text-defensya-blue font-mono text-[10px] font-bold uppercase tracking-widest">
          <span>Detalles Técnicos</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.article>
  );
}

// ─── MODAL 

function ProductModal({
  producto,
  isOpen,
  onClose,
}: {
  producto: Producto | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  /**
   * FIX 2 — Resetear el slide cada vez que se abre un producto distinto.
   * Sin esto, si el usuario abre el producto B después del A, puede quedar
   * en un índice de slide que no existe en B y no se renderiza ninguna imagen.
   */
  useEffect(() => {
    if (isOpen) setCurrentSlide(0);
  }, [isOpen, producto?.id]);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!producto) return null;

  const images   = Array.isArray(producto.imagen) ? producto.imagen : [producto.imagen];
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 lg:p-8">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#050609]/95 backdrop-blur-md"
          />

          {/* Contenedor principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl bg-white dark:bg-[#0A0C11] border border-gray-100 dark:border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Línea de energía superior */}
            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-defensya-blue to-transparent opacity-50" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/2">
              <span className="hidden  md:block text-[10px] font-mono text-gray-400 uppercase tracking-tighter mt-5">
                Sector: {producto.categoria}
              </span>
              <button
                onClick={onClose}
                className="py-2 mt-5   hover:bg-defensya-blue/10 hover:text-defensya-blue transition-colors text-gray-400 ml-auto"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid lg:grid-cols-2">

              {/* ── VISOR DE IMÁGENES ── */}
              <div className="relative overflow-hidden border-r border-white/5 bg-neutral-950
                              /* FIX 3 — altura responsiva:
                                 · móvil:  aspect-ratio 4/3 (suficiente para ver el producto completo)
                                 · lg:     altura fija mínima para cuadrar con la ficha técnica */
                              aspect-4/3 lg:aspect-auto lg:min-h-125">

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentSlide]}
                      alt={`${producto.nombre} — imagen ${currentSlide + 1}`}
                      fill
                      /**
                       * FIX 4 — object-contain: muestra la imagen completa sin
                       * recortar, independientemente del ratio de aspecto.
                       * El fondo neutro (bg-neutral-950) disimula el letterbox.
                       * Sin esto, imágenes 1920×1280 se cortaban en móvil.
                       *
                       * FIX 5 — sizes: igual que en la card, evita que Next.js
                       * espere al layout para decidir qué variante descargar.
                       *
                       * FIX 6 — priority: la imagen visible al abrir el modal
                       * se precarga con máxima prioridad para que aparezca
                       * instantáneamente, sin esperar un click.
                       */
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={currentSlide === 0}
                      className="object-contain opacity-90"
                    />
                    {/* Malla técnica decorativa */}
                    <div className="absolute inset-0 bg-[url('/images/grid-noise.png')] opacity-10 pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Brackets de enfoque */}
                <div className="absolute inset-8 border border-white/10 pointer-events-none">
                  <div className="absolute top-0 left-0  w-4 h-4 border-t-2 border-l-2 border-defensya-blue/40" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-defensya-blue/40" />
                  <div className="absolute bottom-0 left-0  w-4 h-4 border-b-2 border-l-2 border-defensya-blue/40" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-defensya-blue/40" />
                </div>

                {/* Controles de paginación */}
                {images.length > 1 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                    <button
                      onClick={prevSlide}
                      className="p-2 bg-black/50 border border-white/10 hover:bg-defensya-blue text-white transition-all backdrop-blur-md"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="text-[10px] font-mono text-white tracking-[0.3em]">
                      {pad(currentSlide + 1)} / {pad(images.length)}
                    </span>
                    <button
                      onClick={nextSlide}
                      className="p-2 bg-black/50 border border-white/10 hover:bg-defensya-blue text-white transition-all backdrop-blur-md"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>

              {/* ── FICHA TÉCNICA ── */}
              <div className="p-8 lg:p-12 flex flex-col max-h-[70vh] overflow-y-auto scrollbar-hide">
                <header className="mb-8">
                  <h2 className="text-4xl lg:text-5xl font-bold font-display italic uppercase tracking-tighter dark:text-white leading-none mb-4">
                    {producto.nombre}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                    {producto.descripcion}
                  </p>
                </header>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-defensya-blue uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                       Especificaciones
                    </h4>
                    <ul className="space-y-3">
                      {producto.detalles.map((detalle, idx) => (
                        <li
                          key={idx}
                          className="flex gap-4 p-3 bg-gray-50 dark:bg-white/3 border border-gray-100 dark:border-white/5 group/item hover:border-defensya-blue/20 transition-colors"
                        >
                          <span className="font-mono text-[10px] text-defensya-blue mt-1 shrink-0">
                            [{pad(idx + 1)}]
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-300 group-hover/item:text-white transition-colors italic">
                            {detalle}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <footer className="mt-auto pt-10 flex items-center justify-between border-t border-gray-100 dark:border-white/5 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Shield size={12} className="text-defensya-blue" />
                    NATO STANAG COMPLIANT
                  </div>
                  <span>©2026 Defensya Ops</span>
                </footer>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}