"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  Shield,
  Activity,
} from "lucide-react";
import { PRODUCTOS, Producto } from "@/data/productos";
import HeroSection from "@/components/shared/HeroSection";


type CatKey =
  | "Todos"
  | "Vision"
  | "Datos"
  | "Test"
  | "Mision"
  | "Civil"
  | "Displays";

const CATS: { key: CatKey; label: string; tag: string }[] = [
  { key: "Todos",    label: "Todos",          tag: "ALL" },
  { key: "Vision",   label: "Visión",         tag: "VIS" },
  { key: "Datos",    label: "Datos",          tag: "DAT" },
  { key: "Test",     label: "Soporte y Test", tag: "TST" },
  { key: "Mision",   label: "Misión",         tag: "MIS" },
  { key: "Civil",    label: "Ing. Civil",     tag: "CIV" },
  { key: "Displays", label: "Displays",       tag: "DIS" },
];

const pad  = (n: number) => String(n).padStart(2, "0");
const pad3 = (n: number) => String(n).padStart(3, "0");



export default function ProductosPage() {
  const [filtro, setFiltro]       = useState<CatKey>("Todos");
  const [selected, setSelected]   = useState<Producto | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredItems = useMemo(
    () =>
      filtro === "Todos"
        ? PRODUCTOS
        : PRODUCTOS.filter((p) => p.categoria === filtro),
    [filtro]
  );

  const openModal  = (p: Producto) => { setSelected(p); setModalOpen(true); };
  const closeModal = ()             => setModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 selection:bg-defensya-blue selection:text-white">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-linear(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <HeroSection
        label="Operational Assets"
        title="Ingeniería para el Límite"
        subtitle="Sistemas aeroespaciales desarrollados bajo estándares militares para misiones críticas."
        video="/products.mp4"
      />

      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row relative z-10">

        {/* ── SIDEBAR ── */}
        <aside className="w-full lg:w-68 shrink-0  p-6 lg:p-10 border-r border-white/5 lg:sticky lg:top-0 lg:h-screen bg-defensya-navy backdrop-blur-md">
          <div className="mb-10">
            <p className="text-[10px] font-bold tracking-[0.5em] text-bold text-defensya-steel uppercase mb-2">
              DEFENSYA
            </p>
            <p className="text-2xl font-bold font-display uppercase italic text-white">
              Catálogo
            </p>
          </div>

          <nav className="flex lg:flex-col gap-1  overflow-x-auto  pb-4 lg:pb-0 scrollbar-hide">
            {CATS.map((cat) => {
              const count  = PRODUCTOS.filter(
                (p) => cat.key === "Todos" || p.categoria === cat.key
              ).length;
              const active = filtro === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setFiltro(cat.key)}
                  className={`relative flex items-center gap-4 p-3 transition-all duration-300 whitespace-nowrap text-left group
                    ${active ? "bg-defensya-blue/8" : "hover:bg-white/3"}`}
                >
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-px transition-all duration-300
                      ${active ? "bg-defensya-sky" : "bg-transparent group-hover:bg-white/10"}`}
                  />
                  <span
                    className={`font-mono text-base tabular-nums
                    ${active ? "text-white text-bold" : "text-white/15"}`}
                  >
                    {pad(count)}
                  </span>
                  <div className="leading-none">
                    <p className={`text-xs font-bold uppercase tracking-widest
                      ${active ? "text-white" : "text-white/30"}`}>
                      {cat.label}
                    </p>
                    <p className="text-[8px] font-mono text-white/15 mt-0.5 tracking-[0.4em] uppercase">
                      {cat.tag}
                    </p>
                  </div>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ── GRID ── */}
        <main className="flex-1 p-6 lg:p-12">
          <header className="flex items-end justify-between mb-10 pb-6 border-b border-white/5">
            <div>
              <p className="text-[9px] font-mono text-defensya-blue/60 tracking-widest uppercase mb-1">
                {pad(filteredItems.length)} assets found
              </p>
              <h2 className="text-4xl font-bold font-display uppercase italic text-black tracking-tighter">
                {filtro === "Todos" ? "Global Inventory" : filtro}
              </h2>
            </div>
          </header>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
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

      {/* ── MODAL ── */}
      <ProductModal producto={selected} isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}

// ─── CARD ─────────────────────────────────────────────────────────────────────



const CLIP_DEFAULT = "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)";
const CLIP_HOVER   = "polygon(0 0, 100% 0,              100% 0,    100% 100%, 0 100%)";

function ProductCard({
  producto,
  index,
  onOpen,
}: {
  producto: Producto;
  index: number;
  onOpen: () => void;
}) {
  const image   = Array.isArray(producto.imagen) ? producto.imagen[0] : producto.imagen;
  const assetId = `AST-${pad3(index + 1)}`;

  // controla hover clip-path 
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative cursor-pointer bg-defensya-navy-light overflow-hidden"
      style={{
       
        clipPath: hovered ? CLIP_HOVER : CLIP_DEFAULT,
        transition: "clip-path 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >

      {/* LINEA DE ESCANER*/}
      <div className="absolute inset-x-0 h-px bg-defensya-blue/20 z-20 -top-1 opacity-0 group-hover:animate-[def-scan_3.5s_linear_infinite] group-hover:opacity-100 pointer-events-none" />

      {/* borde izquierdo de card */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-defensya-blue/25 group-hover:bg-defensya-blue/80 transition-colors duration-500 z-10" />

      {/* ── Header strip: ID + signal bars ── */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
        {/* <span className="font-mono text-[9px] tracking-[0.35em] text-defensya-blue font-bold">
          {assetId}
        </span> */}
        <div className="flex items-center gap-2">
          <div className="flex items-end gap-px">
            {[3, 5, 7, 9].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-defensya-blue/25 group-hover:bg-defensya-blue transition-colors"
                style={{ height: `${h}px`, transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
          {/* <span className="font-mono text-[8px] tracking-widest text-white/15 uppercase">
            NOM
          </span> */}
        </div>
      </div>

      {/* ── Imagen ── */}
      <div className="relative h-52 overflow-hidden ">
        <Image
          src={image}
          alt={producto.nombre}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover opacity-65 group-hover:opacity-90 transition-all duration-700 group-hover:scale-105"
        />

        {/* Triángulo de esquina, desaparece en hover  */}
        <div
          className="absolute top-0 right-0 w-5 h-5 bg-defensya-blue/50 z-10"
          style={{
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
           
            opacity: hovered ? 0 : 1,
            transition: "opacity 0.25s ease",
          }}
        />

        {/* ESQUINAS TARGET EN CARD */}
        <div className="absolute inset-5 pointer-events-none">
          {[
            "top-0 left-0 border-t border-l",
            "top-0 right-0 border-t border-r",
            "bottom-0 left-0 border-b border-l",
            "bottom-0 right-0 border-b border-r",
          ].map((pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} border-defensya-blue/35 group-hover:border-white transition-all duration-300`}
              style={{ width: 14, height: 14, transitionDelay: `${i * 30}ms` }}
            />
          ))}
        </div>

        {/* RADAR CENTRAL EN CARD */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="relative w-8 h-8">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white" />
            <div className="absolute inset-[30%] rounded-full border border-white" />
          </div>
        </div>

        {/* Categoria */}
        <div className="absolute top-3 left-5">
          <span className="font-mono text-[8px] tracking-[0.3em] text-white/30 uppercase">
            /{producto.categoria}
          </span>
        </div>

        {/* Nombre */}
        <div className="absolute bottom-4 left-5 right-5">
          <h3 className="text-[22px] font-semibold font-display uppercase tracking-wide text-white leading-none transition-colors duration-300">
            {producto.nombre}
          </h3>
        </div>
      </div>

      {/* ── Cuerpo ── */}
      <div className="px-5 pt-4 pb-4">
        <p className="text-[12px] text-white/45 leading-relaxed line-clamp-2 mb-5 font-mono">
          {producto.descripcion}
        </p>

        <div className="flex items-center justify-between border-t border-white/5 pt-3.5">
        
          <div className="flex items-center gap-1.5 text-white/50 group-hover:text-white transition-colors duration-300">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase">
              Ver ficha
            </span>
            <ArrowUpRight
              size={11}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </div>
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

  useEffect(() => {
    if (isOpen) setCurrentSlide(0);
  }, [isOpen, producto?.id]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!producto) return null;

  const images    = Array.isArray(producto.imagen) ? producto.imagen : [producto.imagen];
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-6xl bg-[#050811] shadow-2xl overflow-hidden"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-7 h-7 bg-defensya-blue/70 z-30"
              style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
            />

            <div className="h-px w-full bg-linear-to-r from-transparent via-defensya-blue to-transparent opacity-50" />

            <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-6">
                <span className="font-mono mt-5 sm:mt-0 text-[9px] tracking-widest text-defensya-blue uppercase">
                  Sector: {producto.categoria}
                </span>
                <div className="hidden md:flex items-center gap-1.5">
                  <div className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[8px] text-white/20 uppercase tracking-widest">
                    Ficha técnica — Activo operativo
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 mt-5 sm:mt-0 hover:bg-defensya-blue/10 hover:text-white transition-colors text-white/20"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid lg:grid-cols-2">
              <div className="relative overflow-hidden  border-r border-white/5 bg-[#060810] aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
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
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={currentSlide === 0}
                      className="object-contain opacity-90"
                    />
                    <div
                      className="absolute inset-0 opacity-[0.07] pointer-events-none"

                    />
                  </motion.div>
                </AnimatePresence>


                {images.length > 1 && (
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                    <button
                      onClick={prevSlide}
                      className="p-1.5 bg-black/60 border border-white/8 hover:bg-defensya-blue text-white transition-all backdrop-blur-md"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <span className="text-[9px] font-mono text-white/30 tracking-[0.3em]">
                      {pad(currentSlide + 1)} / {pad(images.length)}
                    </span>
                    <button
                      onClick={nextSlide}
                      className="p-1.5 bg-black/60 border border-white/8 hover:bg-defensya-blue text-white transition-all backdrop-blur-md"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                )}
              </div>

              <div className="p-8 lg:p-12 flex flex-col max-h-[70vh] overflow-y-auto scrollbar-hide">
                <header className="mb-8">
                  <p className="font-mono text-[9px] tracking-widest text-defensya-blue/60 uppercase mb-3">
                    {producto.categoria} / Especificaciones
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-bold font-display italic uppercase tracking-tighter text-white leading-none mb-4">
                    {producto.nombre}
                  </h2>
                  <p className="text-md text-white/70 leading-relaxed font-mono">
                    {producto.descripcion}
                  </p>
                </header>

                <div>
                  <h4 className="flex items-center gap-2 text-[9px] font-mono font-bold text-defensya-blue uppercase tracking-[0.35em] mb-4">
                    
                    Parámetros de sistema
                  </h4>
                  <ul className="space-y-1.5">
                    {producto.detalles.map((detalle, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 p-3 bg-white/[0.03] border border-white/5 hover:border-defensya-blue/20 hover:bg-white/[0.05] transition-all group/item"
                      >
                        <span className="font-mono text-[9px] text-defensya-blue mt-0.5 shrink-0 group-hover/item:text-defensya-blue transition-colors">
                          {pad(idx + 1)}
                        </span>
                        <span className="text-sm text-white/70 group-hover/item:text-white/65 transition-colors font-mono leading-relaxed">
                          {detalle}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <footer className="mt-auto pt-8 flex items-center justify-between border-t border-white/5 text-[8px] font-mono text-white/15 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Shield size={10} className="text-defensya-blue/50" />
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