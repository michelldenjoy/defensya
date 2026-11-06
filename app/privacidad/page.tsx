"use client";

import { useEffect, useState } from "react";
import { ClipButton } from "@/components/ui/ClipButton";

/* ─────────────────────────────────────────────────────────────
   CONTENIDO
   ───────────────────────────────────────────────────────────── */

type Item = { label?: string; text: string };
type Seccion = {
  id: string;
  num: string;
  title: string;
  paragraphs?: string[];
  lead?: string;
  items?: Item[];
  note?: Item;
};

const SECCIONES: Seccion[] = [
  {
    id: "informacion",
    num: "01",
    title: "¿Qué información recopilamos?",
    paragraphs: [
      "Defensya recopila información en sus sitios web de dos formas: directamente (formularios, registros) e indirectamente (tecnología de seguimiento propia).",
    ],
    lead: "Información procesada habitualmente:",
    items: [
      { label: "Datos técnicos", text: "Dirección IP, sistema operativo y tipo de navegador." },
      { label: "Interacción", text: "Datos de navegación y recursos a los que accedes." },
      { label: "Voluntaria", text: "Correspondencia, encuestas y formularios de contacto." },
    ],
  },
  {
    id: "uso",
    num: "02",
    title: "¿Cómo utilizamos la información?",
    lead: "Tus datos personales se procesan bajo criterios de estricta necesidad operativa:",
    items: [
      { text: "Suministro de informes técnicos y boletines solicitados." },
      { text: "Personalización de la experiencia de usuario en el portal." },
      { text: "Análisis de eficacia de nuestros sistemas digitales." },
      { text: "Campañas de comunicación (solo bajo consentimiento previo)." },
    ],
  },
  {
    id: "compartir",
    num: "03",
    title: "¿Compartimos tus datos personales?",
    paragraphs: [
      "Defensya Ingeniería no comercializa datos personales con terceros. El intercambio de información se limita a asesores y proveedores de servicios bajo contrato de confidencialidad.",
    ],
    note: {
      label: "Excepciones legales",
      text: "Cumplimiento de normativas de defensa, seguridad nacional o procesos de liquidación corporativa.",
    },
  },
  {
    id: "procesamiento",
    num: "04",
    title: "Procesamiento global",
    paragraphs: [
      "Como organización de carácter global, los datos pueden ser transmitidos entre las sedes de Defensya en todo el mundo.",
      "Garantizamos niveles de protección equivalentes en toda nuestra infraestructura internacional mediante políticas internas de seguridad unificadas.",
    ],
  },
  {
    id: "cookies",
    num: "05",
    title: "Gestión de cookies",
    lead: "Utilizamos cookies para optimizar la navegación técnica:",
    items: [
      { label: "Estrictamente necesarias", text: "Operatividad del sitio." },
      { label: "De rendimiento", text: "Análisis anónimo de uso." },
      { label: "De funcionalidad", text: "Preferencias personalizadas." },
    ],
  },
];

const DERECHOS = { id: "derechos", num: "06", title: "Ejercicio de derechos" };

/* Si escribes una fecha aquí (por ejemplo "Noviembre 2026"), aparece en la portada */
const ULTIMA_ACTUALIZACION = "";

const INDICE = [...SECCIONES.map(({ id, num, title }) => ({ id, num, title })), DERECHOS];

const MONO = { fontFamily: "'Share Tech Mono', monospace" };
const CUT = "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)";

/* ─────────────────────────────────────────────────────────────
   COMPONENTE
   ───────────────────────────────────────────────────────────── */

export default function Privacidad() {
  const [active, setActive] = useState(INDICE[0].id);

  /* Marca en el índice la sección que se está leyendo */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    INDICE.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <main className="w-full overflow-x-clip bg-defensya-navy text-white">
      {/* ══ PORTADA ══════════════════════════════════════════════ */}
      <section className="pb-16 pt-36 lg:pb-24 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
            Información legal
          </p>
          <h1 className="mt-8 text-[clamp(2.6rem,6vw,5.75rem)] font-semibold uppercase leading-[0.9] tracking-tight">
            Política de
            <br />
            <span className="font-light text-white/45">privacidad</span>
          </h1>
          {ULTIMA_ACTUALIZACION && (
            <p className="mt-10 text-[12px] tracking-[0.15em] text-white/45" style={MONO}>
              Última actualización: {ULTIMA_ACTUALIZACION}
            </p>
          )}
        </div>
      </section>

      {/* ══ CUERPO: índice + contenido ═══════════════════════════ */}
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[18rem_1fr] lg:gap-20 lg:py-24">
          {/* Índice */}
          <nav aria-label="Contenidos" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
              Contenidos
            </p>
            <ol className="mt-5 border-t border-white/10">
              {INDICE.map((s) => {
                const on = active === s.id;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      aria-current={on ? "location" : undefined}
                      className="group relative grid grid-cols-[2.25rem_1fr] border-b border-white/10 py-3.5 outline-none focus-visible:bg-white/[0.04]"
                    >
                      <span
                        className={`absolute inset-y-0 left-0 w-px bg-white transition-transform duration-500 origin-top ${
                          on ? "scale-y-100" : "scale-y-0"
                        }`}
                      />
                      <span className={`pl-3 pt-0.5 text-[11px] transition-colors ${on ? "text-white/70" : "text-white/30"}`} style={MONO}>
                        {s.num}
                      </span>
                      <span className={`text-[14px] leading-snug transition-colors ${on ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                        {s.title}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>

          {/* Contenido */}
          <div className="min-w-0">
            {SECCIONES.map((s) => (
              <section
                key={s.id}
                id={s.id}
                aria-labelledby={`${s.id}-title`}
                className="scroll-mt-28 border-b border-white/10 py-14 first:pt-0 lg:py-16"
              >
                <p className="text-[13px] text-white/40" style={MONO}>
                  {s.num}
                </p>
                <h2 id={`${s.id}-title`} className="mt-3 text-[clamp(1.75rem,3vw,2.6rem)] font-light leading-[1.05] tracking-tight">
                  {s.title}
                </h2>

                <div className="mt-8 max-w-2xl space-y-5 text-[17px] leading-relaxed text-white/70">
                  {s.paragraphs?.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {s.lead && <p>{s.lead}</p>}
                </div>

                {s.items && (
                  <ul className="mt-6 max-w-2xl border-t border-white/10">
                    {s.items.map((it) => (
                      <li key={it.text} className="flex gap-4 border-b border-white/10 py-4">
                        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-white/50" />
                        <p className="text-[16px] leading-relaxed text-white/70">
                          {it.label && <span className="text-white">{it.label}: </span>}
                          {it.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}

                {s.note && (
                  <div className="mt-8 max-w-2xl border-l border-white/30 pl-6">
                    <p className="text-[11px] tracking-[0.2em] text-white/50" style={MONO}>
                      {s.note.label}
                    </p>
                    <p className="mt-2 text-[16px] leading-relaxed text-white/80">{s.note.text}</p>
                  </div>
                )}
              </section>
            ))}

            {/* Ejercicio de derechos: destacado como cierre */}
            <section
              id={DERECHOS.id}
              aria-labelledby={`${DERECHOS.id}-title`}
              className="mt-14 scroll-mt-28 border border-white/10 bg-[#0d2340] p-6 sm:p-10 lg:mt-16 lg:p-12"
              style={{ clipPath: CUT }}
            >
              <p className="text-[13px] text-white/40" style={MONO}>
                {DERECHOS.num}
              </p>
              <h2
                id={`${DERECHOS.id}-title`}
                className="mt-3 text-[clamp(1.75rem,3vw,2.6rem)] font-light leading-[1.05] tracking-tight"
              >
                {DERECHOS.title}
              </h2>
              <div className="mt-8 max-w-2xl space-y-5 text-[17px] leading-relaxed text-white/70">
                <p>
                  Usted tiene derecho a conocer, rectificar o cancelar el tratamiento de sus datos personales. Para cualquier
                  gestión, Defensya dispone de canales de comunicación directa.
                </p>
                <p>
                  Puede interrumpir las comunicaciones de marketing en cualquier momento utilizando nuestro formulario de
                  contacto oficial.
                </p>
              </div>
              <div className="mt-10">
                <ClipButton href="/contacto" variant="primary">
                  Ir al formulario de contacto
                </ClipButton>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}