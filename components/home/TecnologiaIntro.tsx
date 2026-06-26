"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";



const E = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: E, delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Parallax number ──────────────────────────────────────────────────────────

function ParallaxNumber({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div ref={ref} style={{ y }} className="flex flex-col gap-1">
      <span className="text-[clamp(2.5rem,6vw,5rem)] font-medium leading-none tracking-tight text-white">
        {value}
      </span>
      <span
        className="text-[10px] tracking-[0.16em] uppercase text-white/40"
        style={{ fontFamily: "'Share Tech Mono', monospace" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function TecnologiaIntro() {
  return (
    <div className="w-full">
      {/* ══════════════════════════════════════════════════════════════════════
          BLOQUE 1 — ═ */}
      <section className="w-full bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-0 lg:pt-32">
          {/* Asymmetric headline grid */}
          <div className="grid lg:grid-cols-[1fr_380px]  gap-12 lg:gap-20 items-center pb-20 lg:pb-28">
            {/* BIG headline */}
            <Reveal delay={0.05}>
              <h2
                className="text-[clamp(2.3rem,5vw,4.6rem)] font-medium leading-[1.02]
                           tracking-tight text-neutral-900"
              >
                Diseñamos {""}
                <em className="not-italic text-neutral-400/50">la {""}</em>
                visión {""}
                <em className="not-italic text-neutral-400/50">de los {""}</em>
                aviones {""}
                <em className="not-italic text-neutral-400/50">
                  más
                  <br />
                  avanzados del mundo.
                </em>
              </h2>
            </Reveal>

            {/* Right column — body + vertical rule */}
            <Reveal delay={0.15} className="lg:pb-3">
              <div className="border-l-2 border-neutral-900 pl-6 flex flex-col gap-6 ">
                <p className="text-[14px] lg:text-[17px] text-neutral-600 leading-[1.8]">
                  Desarrollamos y fabricamos todos los componentes de un sistema
                  de visión — cámaras, iluminación, gestión de imagen,
                  encriptación y displays — en una plataforma integrada de
                  generación propia.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          BLOQUE 2 —
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-defensya-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          {/* Section label */}
          <Reveal>
            <p
              className="text-[14px] tracking-[0.2em] uppercase text-white/30 mb-8"
              style={{ fontFamily: "'Share Tech Mono', monospace" }}
            >
              Caso de referencia · DFS-MRTT-VIS·003
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mb-16 lg:mb-15 max-w-3xl">
              <h3 className="text-[clamp(2rem,4.5vw,3.4rem)] uppercase leading-[1.05] tracking-tight text-neutral-600">
                Operamos en el <br />
                <span className="text-white">A330 MRTT.</span>
              </h3>
            </div>
          </Reveal>
          {/* EL RETO + LA SOLUCIÓN — stacked asymmetric */}
          <div className="grid lg:grid-cols-2 gap-px bg-white/[0.06] mb-px">
            {/* EL RETO */}

            <Reveal className="bg-defensya-navy p-10 lg:p-14">
              <p
                className="text-[14px] tracking-[0.18em] uppercase text-neutral-400 mb-6"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                01 · El reto
              </p>
              <h3 className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-medium text-white leading-snug mb-6">
                Diseñar un sistema de visión integral desde cero
              </h3>
              <p className="text-[14px] text-white/45 leading-[1.8]">
                El A330 MRTT requería gestionar múltiples canales de imagen de
                forma síncrona, con iluminación activa, compresión en tiempo
                real y transmisión segura al interior del avión.
              </p>
            </Reveal>

            {/* LA SOLUCIÓN */}
            <Reveal delay={0.08} className="bg-defensya-navy p-10 lg:p-14">
              <p
                className="text-[14px] tracking-[0.18em] uppercase text-neutral-400 mb-6"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                02 · La solución
              </p>
              <h3 className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-medium text-white leading-snug mb-6">
                Sistema GEN·3 — plataforma única integrada
              </h3>
              <p className="text-[14px] text-white/45 leading-[1.8]">
                Defensya diseñó y fabricó monitores de vídeo, gestión de
                imagen/audio/datos, iluminación LED y láser de alta potencia, y
                cámaras de nueva generación en una solución de instalación
                directa.
              </p>
            </Reveal>
          </div>

          {/* EL RESULTADO — full width, accent treatment */}
          <Reveal delay={0.1}>
            <div
              className="relative bg-defensya-blue/10 border border-defensya-blue/20
                         p-10 lg:p-14 mb-px overflow-hidden"
            >
              {/* Big ghost text behind */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2
                           text-[clamp(5rem,12vw,10rem)] font-medium leading-none
                           text-defensya-blue/5 select-none"
              >
                GEN·3
              </span>

              <div className="relative grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-20 items-start">
                <div>
                  <p
                    className="text-[14px] tracking-[0.18em] uppercase text-neutral-400 mb-4"
                    style={{ fontFamily: "'Share Tech Mono', monospace" }}
                  >
                    03 · El resultado
                  </p>
                  {/* Status */}
                 
                </div>

                <div>
                  <h3 className="text-[clamp(1.4rem,3vw,2.2rem)] font-medium text-white leading-snug mb-5">
                    Tecnología operativa en múltiples Fuerzas Aéreas
                  </h3>
                  <p className="text-[14px] text-white/50 leading-[1.8] max-w-xl">
                    El sistema vuela hoy en flotas del A330 MRTT de varias
                    naciones. La 3ª generación, en desarrollo activo, incorpora
                    visión estereoscópica 3D y preparación para automatización
                    A3R®.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* HAPTIX — dark accent bottom */}
          <Reveal delay={0.12}>
            <div className="bg-white/[0.03] border border-white/[0.06] p-10 lg:p-14">
              <div className="grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-20 items-start">
                <p
                  className="text-[14px] tracking-[0.18em] uppercase text-neutral-400"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
                >
                  04 · Siguiente frontera
                </p>
                <div>
                  <h3 className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-medium text-white leading-snug mb-5">
                    Haptix® — del control manual a la asistencia automatizada
                  </h3>
                  <p className="text-[14px] text-white/45 leading-[1.8] max-w-xl">
                    El dispositivo háptico Haptix® reduce la carga del operador
                    y facilita la transición hacia el reabastecimiento
                    automático A3R® — el primer sistema de su tipo certificado
                    en el mundo.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          BLOQUE 3 — stats
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-[#04090f] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-36">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x lg:divide-white/10">
            <ParallaxNumber value="+20" label="Proyectos Operativos" />
            <ParallaxNumber value="100% " label="Beneficios reinvertidos en I+D" />
            <ParallaxNumber value="GEN·3" label="Sistema en desarrollo" />
            <ParallaxNumber value="EN 9100" label="Certificación aeronáutica" />
          </div>
        </div>
      </section>
    </div>
  );
}
