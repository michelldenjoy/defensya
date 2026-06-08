"use client";

import { useEffect, useRef, useState } from "react";


const HITOS = [
  {
    year: "2006",
    tag: "Fundación",
    title: "El Origen de una Visión",
    description:
      "Nace Defensya Ingeniería de Sistemas en Madrid. Establecimos nuestro propósito: resolver los desafíos de visualización y monitorización más críticos donde las soluciones convencionales no alcanzan los estándares de misión.",
    metric: "19",
    metricSuffix: " años",
    metricLabel: "De innovación continua",
    extra:
      "Fundada por ingenieros con experiencia en defensa y aeronáutica, Defensya nació con la misión de cubrir los vacíos tecnológicos donde los proveedores estándar no llegan.",
  },
  {
    year: "2011",
    tag: "Eficiencia Operativa",
    title: "Optimización FAL C295",
    description:
      "Desarrollamos nuestro Detector de Deflexión láser para Airbus. Logramos un hito en la línea de montaje: reducir los tiempos de testeo de superficies móviles de 10 horas a tan solo 15 minutos con precisión micrométrica.",
    metric: "96",
    metricSuffix: "%",
    metricLabel: "Reducción de tiempo de testeo",
    extra:
      "El sistema de detección láser integrado en la FAL de Airbus marcó el inicio de nuestra colaboración estratégica con el fabricante europeo, posicionando a Defensya como socio tecnológico de primer nivel.",
  },
  {
    year: "2015",
    tag: "Elite Aeronáutica",
    title: "Consolidación en el A330 MRTT",
    description:
      "Diseñamos el sistema de Espejos Dicróicos 3D, eliminando el ghosting visual y garantizando la seguridad absoluta en operaciones de reabastecimiento en vuelo.",
    metric: "0",
    metricSuffix: "",
    metricLabel: "Incidentes de ghosting visual",
    extra:
      "El sistema óptico desarrollado por Defensya es hoy estándar operativo en flotas MRTT de múltiples fuerzas aéreas de la OTAN, garantizando visión perfecta incluso en condiciones nocturnas y de baja visibilidad.",
  },
  {
    year: "2019",
    tag: "Innovación RFID",
    title: "Nacimiento de Boom Tag®",
    description:
      "Revolucionamos la trazabilidad con tecnología RFID sin batería. Creamos una base de datos digital integrada en cada componente de la pértiga de reabastecimiento, resistiendo las condiciones ambientales más extremas de la atmósfera.",
    metric: "∞",
    metricSuffix: "",
    metricLabel: "Vida útil sin batería",
    extra:
      "Boom Tag® opera desde nivel del mar hasta más de 12.000 metros de altitud, soportando ciclos de presurización, vibración severa y rangos térmicos extremos sin necesidad de mantenimiento.",
  },
  {
    year: "2024",
    tag: "Nueva Generación",
    title: "A3R® & Optrónica Avanzada",
    description:
      "Lanzamos nuestra plataforma integral de visión y designación láser. Con capacidades de Auto-Tracking y cumplimiento NATO STANAG 3733, lideramos el camino hacia la autonomía total en misiones de repostaje y vigilancia.",
    metric: "3733",
    metricSuffix: "",
    metricLabel: "NATO STANAG Compliant",
    extra:
      "La plataforma A3R® integra visión diurna, nocturna y térmica en un único sistema, con seguimiento automático de objetivos y designación láser certificada para operaciones de repostaje autónomo.",
  },
];

/* ─────────────────────────────────────────────────────────────────
   HOOK — scroll-triggered visibility
───────────────────────────────────────────────────────────────── */
function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}


function MilestoneRow({
  hito,
  index,
  isOpen,
}: {
  hito: (typeof HITOS)[0];
  index: number;
  isOpen: boolean;
}) {
  const { ref, visible } = useVisible();
  const cardOnLeft = index % 2 === 0;

  const card = (
    <div
      className="p-10"
      style={{
        paddingRight: cardOnLeft ? "3rem" : undefined,
        paddingLeft: !cardOnLeft ? "3rem" : undefined,
      }}
    >
      <span
        className="block mb-3 text-[rgba(11,31,56,0.35)] dark:text-[rgba(200,220,238,0.35)]"
        style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: "14px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
        }}
      >
        {hito.tag}
      </span>
      <h3
        className="text-[#0b1f38] dark:text-[#ccdcee] font-bold uppercase leading-[.95] tracking-[-0.01em] mb-4"
        style={{
          
          fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
        }}
      >
        {hito.title}
      </h3>
      <div className="w-5 h-px bg-[#0e5fa3] mb-4" />
      <p
        className="font-light leading-[1.8] text-[rgba(11,31,56,0.5)] dark:text-[rgba(200,220,238,0.5)]"
        style={{ fontSize: "1rem" }}
      >
        {hito.description}
      </p>
      <div className="mt-5 pt-4 border-t border-[rgba(14,95,163,0.1)]">
        <div
          className="font-bold leading-none tracking-[-0.02em] text-[#0b1f38] dark:text-[#ccdcee]"
          style={{
            fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
          }}
        >
          {hito.metric}
          {hito.metricSuffix && (
            <span className="text-defensya-blue">{hito.metricSuffix}</span>
          )}
        </div>
        <span
          className="block mt-1 text-[rgba(11,31,56,0.3)] dark:text-[rgba(200,220,238,0.3)]"
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "8px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {hito.metricLabel}
        </span>
      </div>
    </div>
  );

  const deco = (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      aria-hidden
    >
      <span
        className="absolute font-black leading-none tracking-[-0.05em] text-defensya-blue/15 dark:text-[rgba(14,95,163,0.07)] select-none pointer-events-none"
        style={{
          fontSize: "8rem",
        }}
      >
        {hito.year}
      </span>
    </div>
  );

  return (
    <div
      ref={ref}
      className="grid md:grid-cols-2 relative border-b border-[rgba(14,95,163,0.1)] last:border-b-0"
      style={{
        opacity: isOpen && visible ? 1 : isOpen ? 0 : 0,
        transform: isOpen && visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${
          index * 80
        }ms`,
      }}
    >
      {/* Spine */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 border-l border-[rgba(14,95,163,0.12)] pointer-events-none" />
      {/* Year badge */}
      <div
        className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   bg-white dark:bg-[#07101d]
                   border border-[rgba(14,95,163,0.35)] px-3 py-[3px] z-10"
      >
        <span
          className="text-[#0e5fa3]"
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          {hito.year}
        </span>
      </div>

      {cardOnLeft ? card : deco}
      {cardOnLeft ? deco : card}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────────── */
export default function TimelineSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="relative bg-white dark:bg-[#07101d] border-t border-[rgba(14,95,163,0.18)]"
      
    >
      {/* ── Marco  ── */}
      <div className="absolute inset-[14px] border border-[rgba(14,95,163,0.1)] pointer-events-none" />
      {/* Esquinas */}
      {(["tl", "tr", "bl", "br"] as const).map((pos) => (
        <CornerMark key={pos} position={pos} />
      ))}

      {/* ── Intro ── */}
      <div className="relative max-w-7xl mx-auto px-10 lg:px-16 pt-14 pb-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">

          {/* Gema inicial */}
          {/* <span
            className="w-[6px] h-[6px] bg-[#0e5fa3] shrink-0"
            style={{ transform: "rotate(45deg)" }}
          /> */}
          <span
            className="text-defensya-blue"
            style={{
              
              fontSize: "11px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Trayectoria · Defensya Systems 
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(14,95,163,0.4)] to-transparent" />

          {/* Gema final */}
          {/* <span
            className="w-[6px] h-[6px] bg-[#0e5fa3] shrink-0"
            style={{ transform: "rotate(45deg)" }}
          /> */}
        </div>

        {/* ── Dos columnas: Heading / Copy + CTA ── */}
        <div className="grid md:grid-cols-[1fr_1px_1fr] items-stretch min-h-[280px]">
          {/* LEFT — */}
          <div className="flex flex-col justify-between pr-0 md:pr-12 pb-10 md:pb-0">
            <h2
              className=" uppercase tracking-[-0.02em] leading-[.88] text-[#0b1f38] dark:text-[#ccdcee]"
              style={{ fontSize: "clamp(3rem, 5.5vw, 4.4rem)" }}
            >
              <span className="text-defensya-blue font-bold ">19 años</span>
              <br />
              <em
                className="font-light text-[rgba(11,31,56,0.35)] dark:text-[rgba(200,220,238,0.3)]"
                style={{ fontStyle: "italic" }}
              >
                construyendo
              </em>
              <br />
              el futuro
              <br />
              del vuelo
            </h2>

            {/* Referencia técnica como pie de columna */}
            <span
              className="text-[rgba(11,31,56,0.22)] dark:text-[rgba(200,220,238,0.18)] mt-8 block"
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              DFS-HIST-001 · 5 hitos · since 2006
            </span>
          </div>

          {/* SPINE */}
          <div className="hidden md:flex flex-col items-center relative mx-10">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-[rgba(14,95,163,0.15)]" />
            {/* <div
              className="absolute top-1/2 -translate-y-1/2 bg-white dark:bg-[#07101d]
                         border border-[rgba(14,95,163,0.35)] px-2 py-[18px]"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: "7px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(14,95,163,0.5)",
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "translateY(-50%) rotate(180deg)",
              }}
            >
              CL / Eje
            </div> */}
          </div>

          {/* RIGHT — Copy + botón */}
          <div className="flex flex-col justify-between pl-0 md:pl-12">
            {/* View tag */}
            <div
              className="flex items-center justify-between border-b border-[rgba(14,95,163,0.12)]
                         pb- mb-4 text-[rgba(11,31,56,0.35)] dark:text-[rgba(200,220,238,0.35)]"
              style={{
              
                fontSize: "14px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
              }}
            >
              <span>Nuestra Trayectoria</span>
              {/* <div
                className="flex items-center justify-center w-[17px] h-[17px]
                           border border-[rgba(14,95,163,0.35)] text-[#0e5fa3] font-bold"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "9px",
                }}
              >
                T
              </div> */}
            </div>

            {/* Cuerpo de texto */}
            <p
              className="font-light leading-[1.88] tracking-[0.01em] flex-1
                         text-[rgba(11,31,56,0.5)] dark:text-[rgba(200,220,238,0.45)]"
              style={{ fontSize: "1.1rem" }}
            >
              En Defensya nos superamos año tras año, desarrollando tecnologías
              que elevan la eficacia y seguridad de las misiones en vuelo. Desde
              nuestros primeros sistemas ópticos hasta las plataformas de visión
              autónoma de hoy, cada hito ha sido una respuesta directa a un
              desafío real de la aeronáutica y la defensa.
              <br />
              
              <strong className="text-[#0b1f38] dark:text-[#ccdcee] font-semibold">
                Descubre la historia de ingeniería que nos define.
              </strong>
            </p>

            {/* CTA */}
            <div className="flex items-center gap-4 flex-wrap mt-8">
              <ClipToggleButton
                isOpen={isOpen}
                onToggle={() => setIsOpen((v) => !v)}
              />
              {/* <span
                className="text-[rgba(11,31,56,0.28)] dark:text-[rgba(200,220,238,0.25)]"
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "8px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                2006 — now
              </span> */}
            </div>
          </div>
        </div>
      </div>

      {/* ── Timeline desplegable ── */}
      <div
        className="overflow-hidden transition-[max-height] duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]
                   border-t border-[rgba(14,95,163,0.12)]"
        style={{ maxHeight: isOpen ? "4000px" : "0px" }}
      >
        <div
          className="max-w-7xl mx-auto px-10 lg:px-16 py-0"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s",
          }}
        >
          {HITOS.map((hito, i) => (
            <MilestoneRow
              key={hito.year}
              hito={hito}
              index={i}
              isOpen={isOpen}
            />
          ))}


          <div
            className="flex items-center justify-between py-5 border-t border-[rgba(14,95,163,0.1)]"
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: "8px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(11,31,56,0.2)",
            }}
          >
            <span>
              Defensya Systems · Trayectoria de ingeniería 2006 — 2024
            </span>
            <span>DFS-HIST-001 · Hoja 1/1</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/*CLIP TOGGLE BUTTON */
function ClipToggleButton({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  const clip =
    "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))";

  return (
    <button
      onClick={onToggle}
      className="group/btn relative inline-flex items-center gap-3 px-6 py-3.5
                 bg-defensya-navy-light dark:bg-defensya-blue
                 text-white text-[11px] tracking-[0.25em] uppercase font-bold
                 hover:bg-defensya-blue dark:hover:bg-defensya-blue/80
                 transition-colors duration-200 focus-visible:outline-none"
      style={{ clipPath: clip }}
      aria-expanded={isOpen}
    >
      {/* BOTON TIMELINE */}
      <span>{isOpen ? "Cerrar Timeline" : "Timeline de la empresa"}</span>

      {/* Icon — arrow que rota a × al abrir */}
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="transition-transform duration-300"
        style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
        aria-hidden
      >
        <path
          d="M2 6h8M7 3l3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Bisel — esquina inferior derecha */}
      <span
        className="pointer-events-none absolute bottom-0 right-0 bg-white/25"
        style={{
          width: "14px",
          height: "1px",
          transformOrigin: "bottom right",
          transform: "rotate(-45deg) translateX(4px)",
        }}
      />
    </button>
  );
}

/* CORNER MARKS */
type CornerPos = "tl" | "tr" | "bl" | "br";

const cornerStyles: Record<CornerPos, string> = {
  tl: "top-[14px] left-[14px]",
  tr: "top-[14px] right-[14px] [transform:scaleX(-1)]",
  bl: "bottom-[14px] left-[14px] [transform:scaleY(-1)]",
  br: "bottom-[14px] right-[14px] [transform:scale(-1,-1)]",
};

const CornerMark = ({ position }: { position: CornerPos }) => (
  <svg
    className={`absolute w-[14px] h-[14px] pointer-events-none ${cornerStyles[position]}`}
    viewBox="0 0 14 14"
  >
    <path
      d="M0 14 L0 0 L14 0"
      fill="none"
      stroke="rgba(14,95,163,0.35)"
      strokeWidth="1"
    />
  </svg>
);
