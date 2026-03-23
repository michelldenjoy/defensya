"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Shield, Cpu, Activity } from "lucide-react";
import { Producto } from "@/data/productos";

interface ModalProps {
  producto: Producto | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ producto, isOpen, onClose }: ModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Bloquear scroll del body al abrir
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  if (!producto) return null;

  const images = Array.isArray(producto.imagen) ? producto.imagen : [producto.imagen];
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8">
          {/* Overlay Inmersivo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#050609]/95 backdrop-blur-md"
          />

          {/* Contenedor Principal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl bg-white dark:bg-[#0A0C11] border border-gray-100 dark:border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Línea de Energía Superior */}
            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-defensya-blue to-transparent opacity-50" />

            {/* Header del Modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-2 py-1 bg-defensya-blue/10 border border-defensya-blue/20 rounded">
                  <Cpu size={12} className="text-defensya-blue" />
                  <span className="text-[10px] font-mono font-bold text-defensya-blue uppercase tracking-widest">
                    Asset ID: {producto.id.slice(0, 8)}
                  </span>
                </div>
                <span className="hidden md:block text-[10px] font-mono text-gray-400 uppercase tracking-tighter">
                  Sector: {producto.categoria} 
                </span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-defensya-blue/10 hover:text-defensya-blue transition-colors text-gray-400"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid lg:grid-cols-2">
              {/* ── VISOR DE IMÁGENES (Lado Izquierdo) ── */}
              <div className="relative aspect-video lg:aspect-auto bg-black overflow-hidden border-r border-white/5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full min-h-[400px]"
                  >
                    <Image
                      src={images[currentSlide]}
                      alt={producto.nombre}
                      fill
                      className="object-cover opacity-80"
                    />
                    {/* Filtro de Malla Técnica */}
                    <div className="absolute inset-0 bg-[url('/images/grid-noise.png')] opacity-20 pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Brackets de Enfoque */}
                <div className="absolute inset-8 border border-white/10 pointer-events-none">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-defensya-blue/40" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-defensya-blue/40" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-defensya-blue/40" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-defensya-blue/40" />
                </div>

                {/* Controles de Navegación */}
                {images.length > 1 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                    <button onClick={prevSlide} className="p-2 bg-black/50 border border-white/10 hover:bg-defensya-blue text-white transition-all backdrop-blur-md">
                      <ChevronLeft size={16} />
                    </button>
                    <span className="text-[10px] font-mono text-white tracking-[0.3em]">
                      {pad(currentSlide + 1)} / {pad(images.length)}
                    </span>
                    <button onClick={nextSlide} className="p-2 bg-black/50 border border-white/10 hover:bg-defensya-blue text-white transition-all backdrop-blur-md">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>

              {/* ── FICHA TÉCNICA (Lado Derecho) ── */}
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
                      <Activity size={12} /> Especificaciones de Misión
                    </h4>
                    <ul className="space-y-3">
                      {producto.detalles.map((detalle, idx) => (
                        <li key={idx} className="flex gap-4 p-3 bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 group hover:border-defensya-blue/20 transition-colors">
                          <span className="font-mono text-[10px] text-defensya-blue mt-1">[{pad(idx + 1)}]</span>
                          <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors italic">
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