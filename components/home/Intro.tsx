"use client";

import { motion } from "framer-motion";

const disciplines = [
  { label: "Cámaras", detail: "Captura de imagen" },
  { label: "Iluminación", detail: "Sistemas de emisión" },
  { label: "Gestión de imagen", detail: "Procesado en tiempo real" },
  { label: "Encriptación", detail: "Seguridad de la señal" },
  { label: "Displays", detail: "Visualización en cabina" },
] as const;

export default function Intro() {
  return (
    <section className="w-full bg-[#060d18] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 lg:gap-20 items-center">
          
          {/* Left */}
          <div className="relative">
          
            <div className="flex items-center gap-3 mb-10">
              <span className="w-2 h-2 rotate-45 bg-defensya-blue" />
              <span className="font-mono text-[11px] tracking-[0.3em] text-neutral-500 uppercase">
                DFS-VIS-001 / Sistema de visión
              </span>
            </div>

            {/* Viewfinder */}
            <div className="relative py-10 px-2 lg:px-6">
              {/* Corner brackets */}
              {[
                "top-0 left-0 border-t border-l",
                "top-0 right-0 border-t border-r",
                "bottom-0 left-0 border-b border-l",
                "bottom-0 right-0 border-b border-r",
              ].map((pos, i) => (
                <motion.span
                  key={pos}
                  initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute w-8 h-8 lg:w-10 lg:h-10 ${pos} border-defensya-blue`}
                />
              ))}

              <motion.h2
                initial={{ opacity: 0, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
                className="text-[clamp(2.2rem,4.6vw,4.2rem)] font-medium leading-[1.05]
                           tracking-tight text-white text-center px-4"
              >
                Diseñamos la visión de los aviones{" "}
                <span className="text-defensya-blue">más avanzados</span> del mundo.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="text-center font-mono text-[10px] tracking-[0.25em] text-defensya-blue/70 uppercase mt-8"
              >
                
              </motion.p>
            </div>
          </div>

          {/* Right */}
          <div className="border border-white/10 bg-white/[0.02]">
            <div className="border-b border-white/10 px-6 py-4">
              <span className="font-mono text-[11px] tracking-[0.25em] text-neutral-400 uppercase">
                Arquitectura del sistema
              </span>
            </div>

            <p className="px-6 pt-6 text-[14px] lg:text-[15px] text-neutral-400 leading-[1.8]">
              Desarrollamos y fabricamos todos los componentes de un sistema
              de visión en una plataforma integrada de generación propia.
            </p>

            <ul className="px-6 pb-6 pt-4">
              {disciplines.map((d, i) => (
                <li
                  key={d.label}
                  className="flex items-baseline justify-between gap-4 py-3 border-t border-white/5 first:border-t-0"
                >
                  <span className="text-[14px] text-white tracking-tight">
                    {d.label}
                  </span>
                  <span className="font-mono text-[11px] text-neutral-500 text-right">
                    {d.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  );
}