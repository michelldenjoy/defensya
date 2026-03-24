"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Scan, Target, Cpu, Activity, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import ProductModal from "@/components/products/ProductModal";
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

// ─── COMPONENTE: PRODUCT PAGE (PRINCIPAL) ──────────────────────────

export default function ProductosPage() {
  const [filtro, setFiltro] = useState<CatKey>("Todos");
  const [selected, setSelected] = useState<Producto | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredItems = useMemo(() => 
    filtro === "Todos" ? PRODUCTOS : PRODUCTOS.filter(p => p.categoria === filtro)
  , [filtro]);

  return (
    <div className="min-h-screen bg-white dark:bg-defensya-navy selection:bg-defensya-blue selection:text-white">
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
              <h2 className="text-4xl font-bold font-display uppercase italic dark:text-white tracking-tighter">
                {filtro === "Todos" ? "Global Inventory" : filtro}
              </h2>
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

