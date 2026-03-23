"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Scan, Target, Cpu, Activity, Shield, ChevronLeft, ChevronRight } from "lucide-react";

import { PRODUCTOS, Producto } from "@/data/productos";
import HeroSection from "@/components/shared/HeroSection";
import { DiagonalBadge } from "@/components/ui/DiagonalBadge";



type CatKey = "Todos" | "Vision" | "Datos" | "Test" | "Mision" | "Civil" | "Displays";

const CATS: { key: CatKey; label: string; tag: string }[] = [
  { key: "Todos", label: "Todos", tag: "ALL" },
  { key: "Vision", label: "Visión", tag: "VIS" },
  { key: "Datos", label: "Datos", tag: "DAT" },
  { key: "Test", label: "Soporte y Test", tag: "TST" },
  { key: "Mision", label: "Misión", tag: "MIS" },
  { key: "Civil", label: "Ing. Civil", tag: "CIV" },
  { key: "Displays", label: "Displays", tag: "DIS" },
];

const pad = (n: number) => String(n).padStart(2, "0");

// ─── COMPONENTE: PRODUCT PAGE (PRINCIPAL) ─────────────────────────────────────

export default function ProductosPage() {
  const [filtro, setFiltro] = useState<CatKey>("Todos");
  const [selected, setSelected] = useState<Producto | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredItems = useMemo(() => 
    filtro === "Todos" ? PRODUCTOS : PRODUCTOS.filter(p => p.categoria === filtro)
  , [filtro]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050609] selection:bg-defensya-blue selection:text-white">
      {/* Grid de fondo decorativo */}
      <div className="fixed inset-0 bg-[radial-linear(circle_at_2px_2px,rgba(0,0,0,0.05)_1px,transparent_0)] dark:bg-[radial-linear(circle_at_2px_2px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[size:32px_32px] pointer-events-none z-0" />

      <HeroSection
        label="Operational Assets"
        title="Ingeniería para el Límite"
        subtitle="Sistemas aeroespaciales desarrollados bajo estándares militares para misiones críticas."
        video="/products.mp4"
      />

      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row relative z-10">
        
        {/* SIDEBAR TÁCTICO */}
        <aside className="w-full lg:w-72 p-6 lg:p-10 border-r border-gray-100 dark:border-white/5 lg:sticky lg:top-0 lg:h-screen bg-white/50 dark:bg-[#050609]/50 backdrop-blur-md">
          <div className="mb-10">
            <h2 className="text-[10px] font-mono tracking-[0.4em] text-defensya-blue uppercase mb-2">Navigation</h2>
            <p className="text-2xl font-bold font-display uppercase italic dark:text-white">Catálogo</p>
          </div>

          <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
            {CATS.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFiltro(cat.key)}
                className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 group whitespace-nowrap
                  ${filtro === cat.key ? "bg-defensya-blue/10 dark:bg-white/5" : "hover:bg-gray-50 dark:hover:bg-white/[0.02]"}`}
              >
                <span className={`font-mono text-lg ${filtro === cat.key ? "text-defensya-blue" : "text-gray-300 dark:text-gray-700"}`}>
                  {pad(PRODUCTOS.filter(p => cat.key === "Todos" ? true : p.categoria === cat.key).length)}
                </span>
                <div className="text-left leading-none">
                  <p className={`text-sm font-bold uppercase tracking-tight ${filtro === cat.key ? "text-defensya-blue" : "text-gray-500"}`}>{cat.label}</p>
                  <p className="text-[9px] font-mono text-gray-400 mt-1 uppercase tracking-widest">{cat.tag}</p>
                </div>
              </button>
            ))}
          </nav>
        </aside>

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-1 p-6 lg:p-12">
          <header className="flex items-end justify-between mb-12 border-b border-gray-100 dark:border-white/5 pb-8">
            <div>
              <p className="text-defensya-blue font-mono text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
                <Target size={12} /> Active Sector
              </p>
              <h2 className="text-4xl font-bold font-display uppercase italic dark:text-white tracking-tighter">
                {filtro === "Todos" ? "Global Inventory" : filtro}
              </h2>
            </div>
            <div className="hidden md:block text-right font-mono text-[10px] text-gray-400">
              <p>LATENCY: 12ms</p>
              <p>SYSTEM: OPTIMAL</p>
            </div>
          </header>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((p, i) => (
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
            </AnimatePresence>
          </motion.div>
        </main>
      </div>

      {/* MODAL DE PRODUCTO */}
      <ProductModal 
        producto={selected} 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </div>
  );
}

// ─── SUB-COMPONENTE: CARD DE PRODUCTO ─────────────────────────────────────────

function ProductCard({ producto, index, onOpen }: { producto: Producto; index: number; onOpen: () => void }) {
  const image = Array.isArray(producto.imagen) ? producto.imagen[0] : producto.imagen;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onOpen}
      className="group relative cursor-pointer bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 overflow-hidden hover:border-defensya-blue/40 transition-all duration-500"
    >
      <div className="absolute inset-0 w-full h-[1px] bg-defensya-blue/30 z-20 top-0 opacity-0 group-hover:animate-[def-scan_2s_linear_infinite] group-hover:opacity-100 pointer-events-none" />
      
      <div className="relative h-56 overflow-hidden bg-neutral-900">
        <Image src={image} alt={producto.nombre} fill className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />
        <DiagonalBadge>{producto.categoria}</DiagonalBadge>
        
        <div className="absolute bottom-4 left-5 right-5">
          <h3 className="text-2xl font-bold text-white uppercase font-display italic leading-none tracking-tighter">
            {producto.nombre}
          </h3>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100 dark:border-white/5">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-defensya-blue animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">Status: Ready</span>
          </div>
          <span className="text-[10px] font-mono text-defensya-blue/60 uppercase font-bold">rev.4.0</span>
        </div>
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

// ─── SUB-COMPONENTE: MODAL DE PRODUCTO ────────────────────────────────────────

function ProductModal({ producto, isOpen, onClose }: { producto: Producto | null; isOpen: boolean; onClose: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = "hidden";
        setCurrentSlide(0);
    } else {
        document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!producto) return null;
  const images = Array.isArray(producto.imagen) ? producto.imagen : [producto.imagen];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-[#050609]/95 backdrop-blur-md" />

          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-6xl bg-white dark:bg-[#0A0C11] border border-white/10 shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
            
            {/* Visor de Imagen */}
            <div className="relative w-full lg:w-1/2 bg-black overflow-hidden border-r border-white/5">
              <Image src={images[currentSlide]} alt={producto.nombre} fill className="object-cover opacity-90" />
              <div className="absolute inset-0 bg-[url('/images/grid-noise.png')] opacity-20 pointer-events-none" />
              
              {/* Brackets de Enfoque */}
              <div className="absolute inset-8 border border-white/5 pointer-events-none">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-defensya-blue" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-defensya-blue" />
              </div>

              {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20 bg-black/50 backdrop-blur-md px-4 py-2 border border-white/10">
                  <button onClick={() => setCurrentSlide(s => (s-1+images.length)%images.length)}><ChevronLeft size={18} className="text-white hover:text-defensya-blue" /></button>
                  <span className="text-[10px] font-mono text-white tracking-[0.3em]">{pad(currentSlide+1)} / {pad(images.length)}</span>
                  <button onClick={() => setCurrentSlide(s => (s+1)%images.length)}><ChevronRight size={18} className="text-white hover:text-defensya-blue" /></button>
                </div>
              )}
            </div>

            {/* Ficha Técnica */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col max-h-[80vh] overflow-y-auto scrollbar-hide">
              <div className="flex justify-between items-start mb-6">
                <div className="px-2 py-1 bg-defensya-blue/10 border border-defensya-blue/20 rounded text-[9px] font-mono text-defensya-blue font-bold uppercase tracking-widest">
                  Asset: {producto.categoria} {producto.id.slice(0,4)}
                </div>
                <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors"><X size={24}/></button>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold font-display italic uppercase tracking-tighter dark:text-white leading-none mb-6">
                {producto.nombre}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-10 leading-relaxed italic">
                {producto.descripcion}
              </p>

              <div className="space-y-4">
                <h4 className="text-[10px] font-mono font-bold text-defensya-blue uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                   <Activity size={12} /> Tech Specs
                </h4>
                {producto.detalles.map((d, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 hover:border-defensya-blue/30 transition-colors group">
                    <span className="font-mono text-[10px] text-defensya-blue">[{pad(i+1)}]</span>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors leading-snug">{d}</span>
                  </div>
                ))}
              </div>

              <footer className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-gray-600 tracking-widest uppercase">
                 <div className="flex items-center gap-2"><Shield size={12} className="text-defensya-blue"/> Operational Grade</div>
                 <span>©2026 Defensya Ops</span>
              </footer>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}