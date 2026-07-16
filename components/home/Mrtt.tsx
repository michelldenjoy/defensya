"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stages = [
  {
    n: "01",
    kicker: "El reto",
    title: "Diseñar un sistema de visión integral desde cero",
    body: "El A330 MRTT requería gestionar múltiples canales de imagen de forma síncrona, con iluminación activa, compresión en tiempo real y transmisión segura al interior del avión.",
    frontier: false,
  },
  {
    n: "02",
    kicker: "La solución",
    title: "Sistema GEN·3 — plataforma única integrada",
    body: "Defensya diseñó y fabricó monitores de vídeo, gestión de imagen/audio/datos, iluminación LED y láser de alta potencia, y cámaras de nueva generación en una solución de instalación directa.",
    frontier: false,
  },
  {
    n: "03",
    kicker: "El resultado",
    title: "Tecnología operativa en múltiples Fuerzas Aéreas",
    body: "El sistema vuela hoy en flotas del A330 MRTT de varias naciones. La 3ª generación, en desarrollo activo, incorpora visión estereoscópica 3D y preparación para automatización A3R®.",
    frontier: false,
  },
  {
    n: "04",
    kicker: "Siguiente frontera",
    title: "Haptix® — del control manual a la asistencia automatizada",
    body: "El dispositivo háptico Haptix® reduce la carga del operador y facilita la transición hacia el reabastecimiento automático A3R® — el primer sistema de su tipo certificado en el mundo.",
    frontier: true,
    href: "/innovacion#haptix",
  },
] as const;

export default function MRTTCaseSection() {
  return (
    <section className="w-full bg-[#060d18] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 py-28 lg:py-36">
        {/* Header */}
        <div className="mb-20 lg:mb-28">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rotate-45 bg-defensya-blue" />
            <span className="font-mono text-[11px] tracking-[0.3em] text-neutral-500 uppercase">
              Caso de referencia · DFS-MRTT-VIS·003
            </span>
          </div>

          <h2 className="text-[clamp(2.4rem,5.5vw,5rem)] font-medium leading-[1.02] tracking-tight text-white">
            Operamos en el{" "}
            <span className="text-defensya-blue">A330 MRTT.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 lg:pl-12">
          {/* Vertical trace line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

          {stages.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
              className={`relative grid lg:grid-cols-[100px_1fr] gap-4 lg:gap-10 
                          py-10 lg:py-12
                          ${i !== stages.length - 1 ? "border-b border-white/[0.06]" : ""}
                          ${s.frontier ? "border-t border-defensya-blue/30 mt-4 pt-14" : ""}`}
            >
              {/* Node on the trace line */}
              <span
                className={`absolute -left-8 lg:-left-12 top-12 w-[9px] h-[9px] -translate-x-1/2 rotate-45
                            ${s.frontier ? "bg-defensya-blue" : "bg-white/40"}`}
              />

              {/* Number + kicker */}
              <div className="flex lg:flex-col gap-3 lg:gap-2 items-baseline lg:items-start">
                <span
                  className={`font-mono text-[13px] tracking-wider
                              ${s.frontier ? "text-defensya-blue" : "text-neutral-500"}`}
                >
                  {s.n}
                </span>
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-neutral-500">
                  {s.kicker}
                </span>
              </div>

              {/* HREF explorar */}
              <div className="max-w-2xl">
                <h3 className="text-[19px] lg:text-[22px] font-medium text-white leading-snug tracking-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-[14px] lg:text-[15px] text-neutral-400 leading-[1.8]">
                  {s.body}
                </p>
                {"href" in s && s.href && (
                  <Link
                    href={s.href}
                    className="group inline-flex items-center gap-2 mt-5 font-mono text-[12px] tracking-[0.15em] uppercase text-defensya-blue hover:text-white transition-colors duration-300"
                  >
                    Explorar
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M0 5H12M12 5L8 1M12 5L8 9"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
