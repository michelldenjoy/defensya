"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ═════════════════════════════════════════════════════════════
   CONTENIDO — versiones resumidas para leer en la web.
   El texto oficial completo está más abajo (POLITICA_OFICIAL).
   ═════════════════════════════════════════════════════════════ */

const declaracion = [
  {
    id: "01",
    titulo: "Excelencia como objetivo",
    texto:
      "La Dirección persigue la excelencia en todas sus actividades a través de la satisfacción diaria de sus clientes. Por eso implantó un Sistema de Gestión de la Calidad basado en la norma ISO 9001:2015.",
  },
  {
    id: "02",
    titulo: "Conocimiento del cliente",
    texto:
      "Nuestra política parte de conocer las necesidades y expectativas de cada cliente para satisfacerlas, con un trato personalizado.",
  },
  {
    id: "03",
    titulo: "Las personas, pilar de la calidad",
    texto:
      "La calidad depende de nuestro equipo. La participación, implicación y vocación de servicio de todo el personal es esencial para responder a lo que esperan los clientes.",
  },
  {
    id: "04",
    titulo: "Compromiso con la mejora continua",
    texto:
      "Identificamos y cumplimos los requisitos de nuestros clientes y los legales y normativos de nuestra actividad, impulsando la mejora continua a todos los niveles de la empresa.",
  },
];

const valores = [
  {
    label: "Enfoque al cliente",
    desc: "Satisfacer las necesidades de nuestros clientes optimizando los recursos.",
  },
  {
    label: "Enfoque por procesos",
    desc: "Entender la empresa como un conjunto de procesos orientados a satisfacer a los clientes.",
  },
  {
    label: "Gestión de riesgos",
    desc: "Prevenir los resultados no deseados y aprovechar las oportunidades que surjan.",
  },
  {
    label: "Formación continua",
    desc: "La formación del personal como mecanismo fundamental para mejorar productos y servicios.",
  },
  {
    label: "Mejora continua",
    desc: "El proceso fundamental de mejora del Sistema de Gestión de la Calidad.",
  },
];

const objetivosCalidad = [
  "Implicar al equipo directivo en el proyecto para mejorar los flujos de información.",
  "Obtener resultados medibles en los procesos de la empresa incorporando indicadores.",
  "Fomentar la participación del personal en la calidad y la mejora continua, con formación y actualización permanente de sus conocimientos y habilidades.",
];

const areasSostenibilidad = [
  {
    num: "01",
    label: "Gestión de residuos",
    desc: "Reducción y tratamiento controlado de residuos industriales en todos los procesos de fabricación.",
    image: "/images/residuos.jpg",
  },
  {
    num: "02",
    label: "Eficiencia energética",
    desc: "Optimización del consumo energético en instalaciones y equipos de producción.",
    image: "/images/energia.jpg",
  },
  {
    num: "03",
    label: "Cadena de suministro",
    desc: "Selección y colaboración con proveedores que cumplan los requisitos ambientales establecidos.",
    image: "/images/colabambiental.jpg",
  },
  {
    num: "04",
    label: "Formación ambiental",
    desc: "Capacitación continua del equipo en buenas prácticas medioambientales y normativa vigente.",
    image: "/images/formacion.jpg",
  },
];

const compromisosAmbientales = [
  "Cumplir los requisitos de nuestros clientes y la legislación aplicable en calidad y medio ambiente.",
  "Seguir de forma permanente los resultados de la gestión ambiental y de calidad, base de la mejora continua y de la prevención de la contaminación.",
  "Dotar de los recursos humanos, económicos y organizativos necesarios para mantener el Sistema de Gestión Medioambiental.",
  "Motivar y formar al personal, potenciando el trabajo en equipo, la comunicación interna y el trato personalizado.",
  "Prevenir y minimizar la contaminación y el impacto ambiental desde el inicio de cada proceso.",
  "Reducir progresivamente vertidos, residuos, ruido, contaminación de suelos y emisiones a la atmósfera.",
  "Colaborar de forma continua con nuestros proveedores para que nuestros requisitos de calidad y medio ambiente queden claros.",
];

/* Texto oficial, palabra por palabra */
type Bloque = { tipo: "p"; texto: string } | { tipo: "ul"; items: string[] };

const POLITICA_OFICIAL: Bloque[] = [
  {
    tipo: "p",
    texto:
      "La Dirección de DEFENSYA INGENIERIA INTERNACIONAL busca obtener, como objetivo ineludible, la excelencia en todas sus actividades y, en consecuencia, la consolidación como empresa del sector ingeniería de telecomunicación, electrónica e informática y afines, a través de la satisfacción diaria de sus clientes, para lo cual, y consciente de la importancia de la calidad de los servicios creados por nuestra compañía y de la satisfacción de nuestros clientes, decidió implantar un Sistema de Gestión de la Calidad basado en las normas ISO 9001:2015.",
  },
  {
    tipo: "p",
    texto:
      "La política de calidad de DEFENSYA INGENIERIA INTERNACIONAL se fundamenta en el conocimiento de las necesidades y expectativas de nuestros clientes y procura, desde ese conocimiento, conseguir la satisfacción de los mismos, ofreciéndoles un tratamiento personalizado a cada uno de ellos.",
  },
  {
    tipo: "p",
    texto:
      "La calidad de los servicios prestados por DEFENSYA INGENIERIA INTERNACIONAL depende de sus recursos humanos. Por ello, la participación, involucración y vocación de servicio de todo el personal es esencial para la adecuación del trabajo a las expectativas marcadas por los clientes.",
  },
  {
    tipo: "p",
    texto:
      "Esto lleva a DEFENSYA INGENIERIA INTERNACIONAL a adquirir el compromiso de identificar y satisfacer tanto los requisitos de nuestros clientes como los normativos y legales asociados a nuestras actividades, lo cual obliga a impulsar el compromiso con la mejora continua a todos los niveles dentro de la empresa.",
  },
  {
    tipo: "p",
    texto:
      "DEFENSYA INGENIERIA INTERNACIONAL tiene los siguientes objetivos estratégicos:",
  },
  {
    tipo: "ul",
    items: [
      "Concienciar al equipo directivo de la importancia de su participación en el proyecto con el fin de mejorar los flujos de información.",
      "Impulsar la obtención de resultados medibles en los procesos de la empresa mediante la incorporación de indicadores en los mismos.",
      "Fomentar la participación del personal de la empresa en el desarrollo de la calidad y en el proceso de mejora continua, promoviendo su formación y la permanente actualización de sus conocimientos y habilidades, así como fomentando su desarrollo profesional y personal.",
    ],
  },
  {
    tipo: "p",
    texto:
      "DEFENSYA INGENIERIA INTERNACIONAL establece como valores fundamentales de la política de calidad los siguientes:",
  },
  {
    tipo: "ul",
    items: [
      "Enfoque al cliente (satisfacción de las necesidades de nuestros clientes optimizando los recursos).",
      "Enfoque por procesos (visualización de la empresa como un conjunto de procesos encaminados a satisfacer las necesidades de los clientes).",
      "Gestión de riesgos para prevenir los resultados no deseados y aprovechar las oportunidades que pudieran surgir como consecuencia de esta gestión.",
      "Formación continua del personal (formación como mecanismo fundamental de mejora continua de la calidad de los productos y servicios ofrecidos).",
      "Mejora continua (proceso fundamental de mejora del Sistema de Gestión de la Calidad).",
    ],
  },
  {
    tipo: "p",
    texto:
      "DEFENSYA INGENIERIA INTERNACIONAL, a través del presente compromiso, suscrito por todos los trabajadores, establece que todas nuestras actividades, productos y servicios se desarrollan desde la perspectiva de la satisfacción, la protección y conservación del medio ambiente como medios para asegurar la rentabilidad y continuidad de la empresa, apostando por conseguir los siguientes objetivos:",
  },
  {
    tipo: "ul",
    items: [
      "Cumplir con los requisitos de nuestros clientes y con los requisitos legales que se derivan de la legislación aplicable en calidad y medio ambiente, así como con otros requisitos que suscribamos relacionados con nuestros aspectos medioambientales.",
      "Efectuar un permanente seguimiento de los resultados obtenidos a través de la Gestión Ambiental y de Calidad. Este seguimiento será la base que nos permitirá conseguir una mejora continua del comportamiento ambiental y de la eficacia del Sistema de Gestión integrado de Calidad y Medio Ambiente y la prevención de la contaminación.",
      "Dotar de recursos humanos, económicos, de estructura y organización que nos permita mantener un Sistema de Gestión Medioambiental, basado en las normas nacionales e internacionales.",
      "Motivar y formar al personal en su desarrollo profesional, potenciando su actitud de trabajo en equipo, la comunicación interna y el trato personalizado hacia los mismos, de manera que se impliquen y sientan integrados en la consecución de la Gestión de Calidad y Ambiental, otorgándoles las responsabilidades y autoridad necesarias.",
      "Establecer todos los mecanismos necesarios para prevenir y minimizar la contaminación e impacto ambiental en el desarrollo de nuestras actividades, identificando y evaluando los aspectos que puedan tener un impacto significativo en el medio ambiente, planificando los controles operacionales necesarios que garanticen la actuación responsable desde el inicio de cada proceso.",
      "Reducir progresivamente nuestros vertidos de aguas residuales, residuos, nivel de ruido, la contaminación de los suelos y las emisiones de contaminantes a la atmósfera, entendiendo que sólo de esta forma estaremos garantizando el progreso y la sostenibilidad económica de nuestra compañía.",
      "Mantener una continua colaboración y comunicación con nuestros proveedores, de forma que queden claros nuestros requisitos de calidad y medio ambiente.",
    ],
  },
  {
    tipo: "p",
    texto:
      "DEFENSYA INGENIERIA INTERNACIONAL establece, implanta y mejora un Sistema de Gestión de la Calidad y Medio Ambiente, asegurando, controlando y optimizando la calidad de sus servicios con el objetivo de satisfacer las necesidades de los clientes.",
  },
];

const MONO = { fontFamily: "'Share Tech Mono', monospace" };
const CUT = "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)";
const pad = (n: number) => String(n).padStart(2, "0");

const CAPITULOS = [
  { id: "calidad", num: "01", label: "Calidad" },
  { id: "sostenibilidad", num: "02", label: "Sostenibilidad" },
];

/* ═════════════════════════════════════════════════════════════
   PIEZAS
   ═════════════════════════════════════════════════════════════ */

function BlockTitle({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
        {eyebrow}
      </p>
      <h3 className="mt-4 text-[clamp(1.6rem,2.9vw,2.4rem)] font-semibold uppercase leading-[0.95] tracking-tight">
        {children}
      </h3>
    </div>
  );
}

/* El ciclo de calidad: los cinco valores en un anillo que no se detiene */
function CicloCalidad() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [userPicked, setUserPicked] = useState(false);
  const n = valores.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (hovering || userPicked) return;
    const t = window.setInterval(() => setActive((a) => (a + 1) % n), 3800);
    return () => window.clearInterval(t);
  }, [hovering, userPicked, n]);

  const R = 42;
  const circ = 2 * Math.PI * R;

  return (
    <div
      className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Explicación del valor activo */}
      <div className="lg:order-1 order-2">
        <BlockTitle eyebrow="Cómo trabajamos">Valores fundamentales</BlockTitle>
        <div className="mt-10 min-h-[190px]" aria-live="polite">
          <p className="text-[12px] text-white/40" style={MONO}>
            {pad(active + 1)} / {pad(n)}
          </p>
          <p
            key={active}
            className="mt-3 text-[clamp(2rem,3.6vw,3.25rem)] font-light leading-[1] tracking-tight"
          >
            {valores[active].label}
          </p>
          <span className="mt-6 block h-px w-12 bg-white/25" />
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/65">
            {valores[active].desc}
          </p>
        </div>
        <p
          className="mt-6 text-[11px] tracking-[0.15em] text-white/35"
          style={MONO}
        >
          Pulsa un valor del ciclo
        </p>
      </div>

      {/* Anillo */}
      <div className="order-1 lg:order-2">
        <div className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[460px]">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full"
            aria-hidden
          >
            <circle
              cx="50"
              cy="50"
              r={R}
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="0.3"
            />
            <circle
              cx="50"
              cy="50"
              r={R - 6}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.25"
              strokeDasharray="0.6 1.6"
            />
            <circle
              cx="50"
              cy="50"
              r={R}
              fill="none"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="0.45"
              strokeDasharray={circ}
              strokeDashoffset={circ * (1 - active / n)}
              transform="rotate(-90 50 50)"
              className="transition-[stroke-dashoffset] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            />
          </svg>

          {/* Centro */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span
              className="text-[11px] tracking-[0.2em] text-white/40"
              style={MONO}
            >
              Ciclo de calidad
            </span>
            <span className="mt-2 text-[clamp(2.5rem,6vw,4rem)] font-light leading-none">
              {pad(active + 1)}
            </span>
          </div>

          {/* Puntos del ciclo */}
          {valores.map((v, i) => {
            const a = (-90 + (360 / n) * i) * (Math.PI / 180);
            const x = 50 + R * Math.cos(a);
            const y = 50 + R * Math.sin(a);
            const on = i === active;
            const side =
              Math.cos(a) > 0.2 ? "right" : Math.cos(a) < -0.2 ? "left" : "top";
            return (
              <button
                key={v.label}
                type="button"
                onClick={() => {
                  setActive(i);
                  setUserPicked(true);
                }}
                aria-label={v.label}
                aria-pressed={on}
                className="group absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center outline-none focus-visible:ring-1 focus-visible:ring-white/60"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <span
                  className={`absolute h-7 w-7 rounded-full border transition-colors duration-500 ${
                    on ? "border-white/40" : "border-transparent"
                  }`}
                />
                <span
                  className={`h-2.5 w-2.5 rotate-45 border transition-colors duration-500 ${
                    on
                      ? "border-white bg-white"
                      : "border-white/50 bg-defensya-navy group-hover:border-white"
                  }`}
                />
                <span
                  className={`pointer-events-none absolute hidden whitespace-nowrap text-[11px] tracking-[0.1em] transition-colors duration-500 sm:block ${
                    on
                      ? "text-white"
                      : "text-white/40 group-hover:text-white/75"
                  } ${
                    side === "right"
                      ? "left-full ml-2"
                      : side === "left"
                        ? "right-full mr-2"
                        : "bottom-full mb-1"
                  }`}
                  style={MONO}
                >
                  {v.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════
   PÁGINA
   ═════════════════════════════════════════════════════════════ */

export default function CalidadYSostenibilidad() {
  const [chapter, setChapter] = useState("calidad");
  const [openPolicy, setOpenPolicy] = useState(false);
  const chapterRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setChapter((e.target as HTMLElement).id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    chapterRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const goTo = (id: string) => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <main className="w-full overflow-x-clip bg-defensya-navy text-white">
      {/* ══ PORTADA ══════════════════════════════════════════════ */}
      <section className="relative pb-20 pt-36 lg:pb-28 lg:pt-44">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p
              className="text-[12px] tracking-[0.2em] text-white/45"
              style={MONO}
            >
              Compromiso · Calidad · Sostenibilidad
            </p>
            <h1 className="mt-8 text-[clamp(2.6rem,6vw,5.75rem)] font-semibold uppercase leading-[0.9] tracking-tight">
              Compromiso en
              <br />
              <span className="font-light text-white/45">
                entornos críticos
              </span>
            </h1>
            <span className="mt-12 block h-px w-12 bg-white/25" />
            <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-white/65">
              El cumplimiento de los estándares internacionales es la base de
              nuestra ingeniería. Sostenemos un sistema de gestión integrado de
              calidad y medio ambiente, orientado a la rigurosidad técnica, la
              mejora continua y la protección del entorno.
            </p>
          </div>

          {/* Sello */}
          <div
            className="relative w-fit border border-white/15 px-7 py-6"
            style={{ clipPath: CUT }}
          >
            <p
              className="text-[11px] tracking-[0.2em] text-white/45"
              style={MONO}
            >
              Certificación activa
            </p>
            <p className="mt-2 text-[clamp(1.75rem,3vw,2.4rem)] font-light leading-none tracking-tight">
              ISO 9001:2015
            </p>
            <a
              href="#politica-oficial"
              onClick={() => setOpenPolicy(true)}
              className="mt-5 inline-block text-[12px] tracking-[0.15em] text-white/60 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
              style={MONO}
            >
              Leer la política oficial
            </a>
          </div>
        </div>
      </section>

      {/* ══ ÍNDICE FIJO ══════════════════════════════════════════ */}
      <nav
        aria-label="Capítulos"
        className="sticky top-20 z-30 border-y border-white/10 bg-defensya-navy/85 backdrop-blur-md"
      >
        <ol className="mx-auto flex max-w-7xl gap-8 px-6 sm:gap-12">
          {CAPITULOS.map((c) => {
            const on = chapter === c.id;
            return (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => goTo(c.id)}
                  aria-current={on ? "true" : undefined}
                  className="group relative flex items-baseline gap-3 py-4 outline-none focus-visible:underline"
                >
                  <span
                    className={`text-[11px] transition-colors ${on ? "text-white/70" : "text-white/30"}`}
                    style={MONO}
                  >
                    {c.num}
                  </span>
                  <span
                    className={`text-[15px] transition-colors ${on ? "text-white" : "text-white/45 group-hover:text-white/80"}`}
                  >
                    {c.label}
                  </span>
                  <span
                    className={`absolute inset-x-0 bottom-0 h-px origin-left bg-white transition-transform duration-500 ${
                      on ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* ══ CAPÍTULO 01 · CALIDAD ════════════════════════════════ */}
      <section
        id="calidad"
        ref={(el) => {
          chapterRefs.current[0] = el;
        }}
        aria-labelledby="calidad-title"
        className="scroll-mt-36"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-end md:gap-12 lg:gap-20">
            <div>

              <h2
                id="calidad-title"
                className="mt-3 text-[clamp(3.2rem,8vw,7.5rem)] font-light leading-[0.9] tracking-tight"
              >
                Calidad
              </h2>
            </div>
            <p className="max-w-xl text-[17px] leading-relaxed text-white/65 md:pb-[0.4em]">
              Un Sistema de Gestión de la Calidad basado en la norma ISO
              9001:2015, que nace de un principio: la satisfacción diaria de
              nuestros clientes.
            </p>
          </div>

          {/* Declaración */}
          <div className="mt-24 lg:mt-32">
            <BlockTitle eyebrow="En qué creemos">Declaración</BlockTitle>
            <ol className="mt-10 grid border-t border-white/10 md:grid-cols-2">
              {declaracion.map((d, i) => (
                <li
                  key={d.id}
                  className={`border-b border-white/10 py-10 md:py-12 ${i % 2 === 1 ? "md:border-l md:pl-10 lg:pl-14" : "md:pr-10 lg:pr-14"}`}
                >
                  <span className="text-[12px] text-white/40" style={MONO}>
                    {d.id}
                  </span>
                  <h4 className="mt-4 text-[clamp(1.5rem,2.4vw,2.1rem)] font-light leading-[1.05] tracking-tight">
                    {d.titulo}
                  </h4>
                  <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/60">
                    {d.texto}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Valores: el ciclo */}
          <div className="mt-24 lg:mt-36">
            <CicloCalidad />
          </div>

          {/* Objetivos */}
          <div className="mt-24 lg:mt-36">
            <BlockTitle eyebrow="Qué perseguimos">
              Objetivos estratégicos
            </BlockTitle>
            <ol className="mt-10 border-t border-white/10">
              {objetivosCalidad.map((o, i) => (
                <li
                  key={o}
                  className="grid grid-cols-[3rem_1fr] border-b border-white/10 py-8 lg:grid-cols-[6rem_1fr] lg:py-10"
                >
                  <span
                    className="pt-1.5 text-[12px] text-white/40"
                    style={MONO}
                  >
                    {pad(i + 1)}
                  </span>
                  <p className="max-w-3xl text-[clamp(1.15rem,1.8vw,1.5rem)] font-light leading-snug text-white/85">
                    {o}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ══ CAPÍTULO 02 · SOSTENIBILIDAD ═════════════════════════ */}
      <section
        id="sostenibilidad"
        ref={(el) => {
          chapterRefs.current[1] = el;
        }}
        aria-labelledby="sostenibilidad-title"
        className="scroll-mt-36"
      >
        {/* Apertura a sangre */}
        <div className="relative flex min-h-[85vh] items-end overflow-hidden">
          <Image
            src="/images/forest1.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-defensya-navy via-defensya-navy/55 to-defensya-navy/30" />
          <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 lg:pb-28">
            <p className="text-[13px] text-white/60" style={MONO}>
              02
            </p>
            <h2
              id="sostenibilidad-title"
              className="mt-3 text-[clamp(3.2rem,8vw,7.5rem)] font-light leading-[0.9] tracking-tight"
            >
              Sostenibilidad
            </h2>
            <blockquote className="mt-10 max-w-3xl">
              <p className="text-[clamp(1.35rem,2.6vw,2.1rem)] font-light leading-snug text-white/90">
                Todas nuestras actividades, productos y servicios se desarrollan
                desde la protección y conservación del medio ambiente.
              </p>
              <footer className="mt-6 flex items-center gap-4">
                <span className="h-px w-10 bg-white/40" />
                <span
                  className="text-[11px] tracking-[0.15em] text-white/60"
                  style={MONO}
                >
                  Compromiso suscrito por todos los trabajadores de Defensya
                  Ingeniería Internacional
                </span>
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          {/* Áreas de actuación */}
          <BlockTitle eyebrow="Dónde actuamos">Áreas de actuación</BlockTitle>
          <ol className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {areasSostenibilidad.map((a) => (
              <li key={a.num} className="group">
                <div
                  className="relative aspect-[4/5] overflow-hidden border border-white/10"
                  style={{ clipPath: CUT }}
                >
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-55 saturate-[0.6] transition-[opacity,transform,filter] duration-700 group-hover:scale-[1.03] group-hover:opacity-90 group-hover:saturate-100 motion-reduce:transition-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-defensya-navy/70 to-transparent" />
                  <span
                    className="absolute left-5 top-5 text-[12px] text-white/70"
                    style={MONO}
                  >
                    {a.num}
                  </span>
                </div>
                <h4 className="mt-6 text-[clamp(1.3rem,1.9vw,1.6rem)] font-light leading-tight tracking-tight">
                  {a.label}
                </h4>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                  {a.desc}
                </p>
              </li>
            ))}
          </ol>

          {/* Compromisos ambientales */}
          <div className="mt-24 lg:mt-36">
            <BlockTitle eyebrow="A qué nos comprometemos">
              Compromisos ambientales
            </BlockTitle>
            <ol className="mt-10 grid border-t border-white/10 md:grid-cols-2 md:gap-x-14">
              {compromisosAmbientales.map((c, i) => (
                <li
                  key={c}
                  className="grid grid-cols-[3rem_1fr] border-b border-white/10 py-6"
                >
                  <span className="pt-1 text-[12px] text-white/40" style={MONO}>
                    {pad(i + 1)}
                  </span>
                  <p className="text-[16px] leading-relaxed text-white/80">
                    {c}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ══ CIERRE + TEXTO OFICIAL ═══════════════════════════════ */}
      <section
        id="politica-oficial"
        aria-labelledby="politica-title"
        className="scroll-mt-36 border-t border-white/10"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <p className="max-w-4xl text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-snug tracking-tight">
            Defensya Ingeniería Internacional establece, implanta y mejora un
            Sistema de Gestión de la Calidad y Medio Ambiente, con el objetivo
            de satisfacer las necesidades de sus clientes.
          </p>

          <div className="mt-16 border-y border-white/10">
            <h2 id="politica-title">
              <button
                type="button"
                onClick={() => setOpenPolicy((o) => !o)}
                aria-expanded={openPolicy}
                aria-controls="politica-texto"
                className="group flex w-full items-center justify-between gap-6 py-7 text-left outline-none focus-visible:underline"
              >
                <span>
                  <span
                    className="block text-[12px] tracking-[0.2em] text-white/45"
                    style={MONO}
                  >
                    Documento oficial
                  </span>
                  <span className="mt-2 block text-[clamp(1.25rem,2.2vw,1.75rem)] font-light tracking-tight">
                    Política de Calidad y Medio Ambiente
                  </span>
                </span>
                <svg
                  aria-hidden
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`shrink-0 text-white/60 transition-transform duration-300 group-hover:text-white ${openPolicy ? "rotate-45" : ""}`}
                >
                  <path
                    d="M8 3V13M3 8H13"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="politica-texto"
              className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                openPolicy ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="max-w-3xl space-y-5 pb-12 text-[15px] leading-relaxed text-white/65">
                  {POLITICA_OFICIAL.map((b, i) =>
                    b.tipo === "p" ? (
                      <p key={i}>{b.texto}</p>
                    ) : (
                      <ul
                        key={i}
                        className="space-y-3 border-l border-white/15 pl-6"
                      >
                        {b.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
