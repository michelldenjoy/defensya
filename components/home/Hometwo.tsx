"use client";

import Link from "next/link";
import Image from "next/image";

function Rule() {
  return <hr className="border-t border-gray-200 dark:border-white/8" />;
}

export default function Hometwo() {
  return (
    <main
      className="w-full bg-white dark:bg-defensya-navy text-gray-900 dark:text-white"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >
      <section className="pt-14 min-h-screen grid lg:grid-cols-[1fr_45%] ">
        {/* texto izquierda*/}
        <div
          className="flex flex-col justify-end px-6 lg:px-16 pt-20 pb-16
                        border-r border-gray-200 dark:border-white/[0.07]"
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="w-6 h-px bg-defensya-blue" />
            <span className="text-[12px] font-semibold tracking-[0.3em] text-defensya-blue uppercase">
              Sistemas aeroespaciales avanzados
            </span>
          </div>

          <h1
            className="text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight
                       uppercase text-gray-900 dark:text-white mb-10"
            style={{
              fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
            }}
          >
            Ingeniería
            <br />
            para el límite
            <br />
            <span className="text-defensya-blue">de lo posible</span>
          </h1>

          <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed max-w-md mb-12">
            Defensya desarrolla tecnologías avanzadas para los sistemas
            aeroespaciales del futuro. Visión artificial, electrónica de alto
            rendimiento y software inteligente para plataformas que operan donde
            el margen de error no existe.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/innovacion"
              className="px-6 py-2.5 bg-defensya-blue text-white text-xs tracking-widest
                         uppercase font-medium hover:bg-defensya-navy-accent transition-colors"
            >
              Nuestras Tecnologías
            </Link>
            <Link
              href="/empresa/quienes-somos"
              className="px-6 py-2.5 border border-gray-300 dark:border-white/20 text-xs
                         tracking-widest uppercase font-medium text-gray-700 dark:text-gray-300
                         hover:border-gray-500 dark:hover:border-white/40 transition-colors"
            >
              Sobre Defensya
            </Link>
          </div>

          {/* metadata strip */}
          <div
            className="mt-16 pt-6 border-t border-gray-200 dark:border-white/[0.07]
                          flex items-center gap-8"
          >
            {[
              { val: "20+", label: "Patentes" },
              { val: "AAR", label: "Sistemas Operativos" },
              { val: "DEF", label: "Sector Defensa" },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="text-base font-bold font-mono text-defensya-blue">
                  {val}
                </p>
                <p className="text-[12px] text-gray-400 dark:text-gray-500 tracking-wide uppercase mt-0.5">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* imagen derecha */}
        <div className="relative hidden lg:block ">
          <Image
            src="/images/aeronautic.jpg"
            alt="Plataforma aeronáutica Defensya"
            fill
            className="object-cover object-center"
            priority
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-defensya-navy/60 via-transparent to-transparent" />
         
          <div
            className="absolute bottom-8 right-8 bg-defensya-navy/80 backdrop-blur-sm
                  border border-white/10 px-4 py-3 text-right"
          >
            <p className="text-[9px] font-mono tracking-[0.2em] text-gray-400 uppercase mb-1">
              Sistema Activo
            </p>
            <p className="text-xs font-mono text-white">A3R® // Air-to-Air</p>
          </div>
        </div>
      </section>

      <Rule />

      {/* ───────── QUÉ HACEMOS ───────── */}
      <section className="py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div
            className="grid lg:grid-cols-[1fr_auto] gap-8 items-center mb-16
                        border-b border-gray-200 dark:border-white/[0.07] pb-10"
          >
            <div>
              <p
                className="text-[12px] font-mono tracking-[0.3em] text-gray-400
                          dark:text-gray-500 uppercase mb-3"
              >
                Capacidades
              </p>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                         leading-none text-gray-900 dark:text-white"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Qué hacemos
              </h2>
            </div>
            <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg ">
              Combinamos hardware, software y procesamiento inteligente para
              mejorar la percepción y el control de plataformas aéreas en
              entornos operativos de alta exigencia.
            </p>
          </div>

          <div
            className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x
                          divide-gray-200 dark:divide-white/[0.07]"
          >
            {[
              {
                num: "01",
                title: "Sistemas Avanzados de Visión",
                desc: "Visión y percepción embarcadas para mejorar la conciencia situacional y las capacidades operativas de aeronaves modernas.",
              },
              {
                num: "02",
                title: "Automatización Air‑to‑Air",
                desc: "Tecnologías que automatizan las operaciones de reabastecimiento aéreo, mejorando la precisión, la eficiencia y la seguridad.",
              },
              {
                num: "03",
                title: "Sistemas Electrónicos y Embebidos",
                desc: "Hardware de alto rendimiento, sensores y software embebido para aplicaciones aeroespaciales, de defensa e industriales.",
              },
            ].map(({ num, title, desc }) => (
              <div
                key={num}
                className="px-0 md:px-8 first:pl-0 last:pr-0 py-8 md:py-0 group"
              >
                <span className="text-[12px] font-mono text-defensya-blue tracking-widest mb-6 block">
                  {num}
                </span>
                <h3 className="text-2xl font-semibold mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ───────── INNOVACIÓN ───── */}
      <section className="py-28 px-6 lg:px-16 bg-defensya-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center mb-16">
            <div>
              <p
                className="text-[12px] font-mono tracking-[0.3em] text-defensya-sky
                            uppercase mb-3"
              >
                Tecnologías Propietarias
              </p>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-none
                            text-white"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Impulsando el futuro
                <br />
                del reabastecimiento
              </h2>
            </div>
            <p className="text-md text-gray-400 leading-relaxed max-w-lg ">
              Nuestras soluciones propietarias cubren el ciclo completo del
              reabastecimiento aéreo automatizado, desde la percepción hasta el
              control háptico del botalón.
            </p>
          </div>

          <div className="border-t border-white/8">
            {[
              {
                name: "A3R®",
                tag: "Air-to-Air Automated Refueling",
                desc: "Reabastecimiento Air-to-Air automatizado para aeronaves de nueva generación.",
              },
              {
                name: "A4R®",
                tag: "Autonomous Aerial Refueling",
                desc: "Conceptos de reabastecimiento aéreo completamente autónomo.",
              },
              {
                name: "Boomerang®",
                tag: "Precision Receptacle Location",
                desc: "Tecnología de localización precisa del receptáculo en condiciones adversas.",
              },
              {
                name: "Haptix®",
                tag: "Haptic Boom Control",
                desc: "Control háptico avanzado para el botalón de repostaje.",
              },
            ].map(({ name, tag, desc }) => (
              <div
                key={name}
                className="grid md:grid-cols-[180px_1fr_2fr] gap-4 items-center
                           py-6 border-b border-white/8
                           hover:bg-white/3 transition-colors px-2 -mx-2 group"
              >
                <span
                  className="text-2xl font-bold text-white"
                  style={{
                    fontFamily:
                      "var(--font-display, 'Barlow Condensed', sans-serif)",
                  }}
                >
                  {name}
                </span>
                <span className="text-[12px] font-mono tracking-widest text-defensya-sky uppercase">
                  {tag}
                </span>
                <span className="text-md text-gray-400">{desc}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/innovacion"
              className="inline-flex items-center gap-3 text-xs tracking-widest uppercase
                         font-medium text-white border border-white/20 px-6 py-3
                         hover:bg-white/10 hover:border-white/40 transition-all"
            >
              Explorar Innovación
              <svg
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4-4 4M3 12h18"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Rule />

      {/* ──────────── CAPACIDADES ─────────────────── */}
      <section className="py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <p
                className="text-[12px] font-mono tracking-[0.3em] text-gray-400
                            dark:text-gray-500 uppercase mb-3"
              >
                Ingeniería
              </p>
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-none tracking-tight"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Capacidades
                <br />
                de Ingeniería
              </h2>
            </div>
            <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed  pt-8 ">
              Cubrimos el stack completo de ingeniería aeroespacial, desde el
              diseño electrónico hasta la inteligencia artificial embarcada, con
              aplicación directa en entornos de alta exigencia.
            </p>
          </div>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0
                          border-t border-l border-gray-200 dark:border-white/[0.07]"
          >
            {[
              "Diseño Electrónico",
              "Sistemas Embebidos",
              "Procesamiento de Señal",
              "Sistemas de Visión",
              "IA y Aprendizaje Automático",
              "Sistemas de Datos Seguros",
            ].map((capability, i) => (
              <div
                key={i}
                className="border-b border-r  border-gray-200 dark:border-white/[0.07]
                           p-6 flex items-center justify-between group
                           hover:bg-gray-50 dark:hover:bg-white/2 transition-colors"
              >
                <span className="text-md font-medium">{capability}</span>
                <span className="text-[12px] font-mono text-gray-300 dark:text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ──────────── COLABORACION ───── */}
      <section className="py-28 px-6 lg:px-16 bg-defensya-navy">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <p className="text-[12px] font-mono tracking-[0.3em] text-defensya-sky uppercase mb-5">
              Colaboración
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-none
                         tracking-tight text-white max-w-2xl"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
              }}
            >
              Colaborando en la próxima generación de sistemas aeroespaciales
            </h2>
          </div>

          <div className="flex flex-col gap-3 lg:items-end shrink-0">
            <p className="text-md text-gray-400 leading-relaxed max-w-md mb-2">
              Trabajamos con fabricantes, organizaciones de defensa y socios
              tecnológicos para desarrollar los sistemas del futuro.
            </p>
            <Link
              href="/contacto"
              className="px-8 py-3 bg-defensya-blue text-white text-xs tracking-widest
                         uppercase font-medium hover:bg-defensya-navy-accent transition-colors
                         whitespace-nowrap"
            >
              Contactar
            </Link>
            <Link
              href="/productos"
              className="px-8 py-3 border border-white/20 text-white text-xs tracking-widest
                         uppercase font-medium hover:bg-white/10 hover:border-white/40
                         transition-all whitespace-nowrap text-center"
            >
              Ver Proyectos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
