"use client";

import { motion } from "framer-motion";

const disciplines = [
  { label: "Electrónica", detail: "Aviónica y sistemas embebidos" },
  { label: "Mecánica", detail: "Estructuras y actuación" },
  { label: "Óptica", detail: "Sistemas de visión e imagen" },
  { label: "Integración", detail: "Plataformas de generación propia" },
  { label: "Certificación", detail: "Ensayo y validación" },
] as const;

export default function Intro() {
  return (
    <section className="w-full bg-[#060d18] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 lg:gap-20 items-center">
          {/* Left */}
          <div className="relative">

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
                  transition={{
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`absolute w-8 h-8 lg:w-10 lg:h-10 ${pos} border-defensya-blue`}
                />
              ))}

              <motion.h2
                initial={{ opacity: 0, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
                className="text-[clamp(2.5rem,5.4vw,4.6rem)] uppercase leading-[1.05]
             text-white text-center px-4"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.005em",
                }}
              >
                Diseñamos los sistemas que hacen posibles los aviones{" "}
                <span className="text-defensya-sky">más avanzados</span> del
                mundo.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="text-center font-mono text-[10px] tracking-[0.25em] text-defensya-blue/70 uppercase mt-8"
              ></motion.p>
            </div>
          </div>

          {/* Right */}
          <div
            className="border border-white/20 bg-white/[0.02]"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
            }}
          >
            <div className="border-b border-white/15 px-6 py-4">
              <span className="font-mono text-[11px] tracking-[0.25em] text-neutral-400 uppercase">
                Arquitectura de sistemas
              </span>
            </div>

            <p className="px-6 pt-6 text-[14px] lg:text-[15px] text-neutral-400 leading-[1.8]">
              Desarrollamos y fabricamos sistemas electrónicos, mecánicos y
              ópticos, integrados en plataformas propias de principio a fin.
            </p>

            <ul className="px-8 pb-9 pt-4">
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