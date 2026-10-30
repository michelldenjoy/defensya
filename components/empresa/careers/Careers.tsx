import { ClipButton } from "@/components/ui/ClipButton";
import CareersForm from "./CareersForm";

/* Este archivo NO lleva "use client": se prepara en el servidor y carga más rápido.
   Solo el formulario (CareersForm) es interactivo. */

/* ─────────────────────────────────────────────────────────────
   CONTENIDO
   ───────────────────────────────────────────────────────────── */

const benefits = [
  {
    num: "01",
    title: "Proyectos de impacto",
    desc: "Trabajarás en sistemas que vuelan en el A330 MRTT y soluciones para el Ministerio de Defensa.",
  },
  {
    num: "02",
    title: "Cultura de patentes",
    desc: "Fomentamos la invención. Tu trabajo puede convertirse en la próxima patente tecnológica de la industria.",
  },
  {
    num: "03",
    title: "I+D de vanguardia",
    desc: "Desde IA y redes neuronales hasta sistemas ópticos y criptografía avanzada.",
  },
];

/* Una sola lista: alimenta los perfiles y el desplegable del formulario */
const profiles = [
  {
    area: "Técnico de Mecanizado",
    desc: "Operación de centros de torneado y fresado multieje para componentes de alta precisión y tolerancias críticas.",
  },
  {
    area: "Programador CAM - CATIA",
    desc: "Generación de estrategias de mecanizado avanzado y simulación de procesos para utillajes complejos de aeronáutica.",
  },
  {
    area: "Ingeniería Mecánica",
    desc: "Desarrollo de sistemas estructurales, análisis de fatiga y simulación térmica para entornos de misión crítica.",
  },
  {
    area: "Ingeniería de Diseño",
    desc: "Modelado conceptual y detallado de hardware táctico, optimizando peso, ergonomía y robustez mecánica.",
  },
  {
    area: "Ingeniería Electrónica",
    desc: "Diseño de hardware, sensórica avanzada, adquisición de señal y arquitectura de sistemas de potencia.",
  },
  {
    area: "Técnico de Calidad",
    desc: "Aseguramiento de estándares MIL-SPEC mediante inspección metrológica y control de procesos productivos.",
  },
  {
    area: "Técnico de Mantenimiento",
    desc: "Gestión preventiva y correctiva de sistemas industriales y equipos de diagnóstico de alta disponibilidad.",
  },
  {
    area: "Técnico de Electrónica",
    desc: "Integración, soldadura de precisión y testeo de tarjetas PCBA y mazos de cables bajo normativa IPC.",
  },
];

const MONO = { fontFamily: "'Share Tech Mono', monospace" };
const pad = (n: number) => String(n).padStart(2, "0");

/* ─────────────────────────────────────────────────────────────
   RADAR — "estamos buscando": un barrido que detecta 8 perfiles
   ───────────────────────────────────────────────────────────── */

const SWEEP = 6; // segundos por vuelta

/* Posición de cada punto: ángulo (0 = arriba, sentido horario) y distancia al centro (%) */
const BLIPS = [
  { a: 28, r: 30 },
  { a: 70, r: 40 },
  { a: 112, r: 22 },
  { a: 150, r: 36 },
  { a: 205, r: 28 },
  { a: 245, r: 42 },
  { a: 290, r: 18 },
  { a: 330, r: 38 },
];

const RADAR_CSS = `
@keyframes radar-spin { to { transform: rotate(360deg); } }
@keyframes radar-blip {
  0%   { opacity: 1; transform: translate(-50%, -50%) rotate(45deg) scale(1.5); }
  18%  { opacity: 0.55; transform: translate(-50%, -50%) rotate(45deg) scale(1); }
  100% { opacity: 0.12; transform: translate(-50%, -50%) rotate(45deg) scale(1); }
}
@media (prefers-reduced-motion: reduce) {
  .radar-blip { animation: none !important; opacity: 0.5 !important; }
}
`;

function Radar() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -right-40 top-1/2 h-[480px] w-[480px] -translate-y-1/2 opacity-40 sm:-right-24 lg:-right-6 lg:h-[620px] lg:w-[620px] lg:opacity-70"
    >
      <style>{RADAR_CSS}</style>

      {/* Círculos y cruz */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {[48, 36, 24, 12].map((r) => (
          <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.2" />
        ))}
        <line x1="50" y1="2" x2="50" y2="98" stroke="rgba(255,255,255,0.08)" strokeWidth="0.2" />
        <line x1="2" y1="50" x2="98" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="0.2" />
      </svg>

      {/* Barrido */}
      <div
        className="absolute inset-[2%] rounded-full motion-reduce:hidden"
        style={{
          background: "conic-gradient(from 0deg, transparent 0deg 290deg, rgba(255,255,255,0.16) 360deg)",
          animation: `radar-spin ${SWEEP}s linear infinite`,
        }}
      />

      {/* Perfiles detectados */}
      {BLIPS.map((b, i) => {
        const rad = (b.a - 90) * (Math.PI / 180);
        return (
          <span
            key={i}
            className="radar-blip absolute h-2 w-2 bg-white"
            style={{
              left: `${50 + b.r * Math.cos(rad)}%`,
              top: `${50 + b.r * Math.sin(rad)}%`,
              opacity: 0.12,
              transform: "translate(-50%, -50%) rotate(45deg)",
              animation: `radar-blip ${SWEEP}s linear infinite`,
              animationDelay: `${(b.a / 360) * SWEEP - SWEEP}s`,
            }}
          />
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PÁGINA
   ───────────────────────────────────────────────────────────── */

export default function Careers() {
  return (
    <main className="w-full overflow-x-clip bg-defensya-navy text-white">
      {/* ══ §1 PORTADA ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-44">
        <Radar />

        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
            Trabaja con nosotros
          </p>
          <h1 className="mt-8 text-[clamp(2.6rem,6vw,5.75rem)] font-semibold uppercase leading-[0.9] tracking-tight">
            El futuro
            <br />
            también necesita
            <br />
            <span className="font-light text-white/45">tu talento</span>
          </h1>

          <span className="mt-12 block h-px w-12 bg-white/25" />
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-white/65">
            En Defensya creemos que nuestro éxito se basa en el talento y la pasión de nuestro equipo. Buscamos profesionales
            apasionados por la innovación aeroespacial. Únete a la misión de transformar el futuro de la defensa.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ClipButton href="#candidatura" variant="primary">
              Enviar candidatura
            </ClipButton>
            <ClipButton href="#perfiles" variant="outline">
              Ver perfiles
            </ClipButton>
          </div>

          <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-8 lg:mt-20">
            {[
              { label: "Perfiles buscados", value: pad(profiles.length) },
              { label: "Sede", value: "Madrid, ES" },
              { label: "Sector", value: "Defensa y aeronáutica" },
            ].map((m) => (
              <div key={m.label} className="flex flex-col-reverse">
                <dt className="mt-2 text-[11px] tracking-[0.15em] text-white/45" style={MONO}>
                  {m.label}
                </dt>
                <dd className="text-[clamp(1.4rem,2.2vw,1.9rem)] font-light leading-none">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ══ §2 LO QUE OFRECEMOS ══════════════════════════════════ */}
      <section aria-labelledby="ofrecemos-title" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <p className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
            Por qué Defensya
          </p>
          <h2 id="ofrecemos-title" className="mt-5 text-[clamp(2.2rem,4.6vw,4rem)] font-semibold uppercase leading-[0.9] tracking-tight">
            Lo que ofrecemos
          </h2>

          <ol className="mt-14 grid border-t border-white/10 md:grid-cols-3 lg:mt-20">
            {benefits.map((b, i) => (
              <li
                key={b.num}
                className={`border-b border-white/10 py-10 md:border-b-0 md:py-12 ${
                  i === 0 ? "md:pr-10" : "md:border-l md:px-10"
                }`}
              >
                <span className="text-[12px] text-white/40" style={MONO}>
                  {b.num}
                </span>
                <h3 className="mt-6 text-[clamp(1.75rem,2.8vw,2.5rem)] font-light leading-[1] tracking-tight">{b.title}</h3>
                <span className="mt-6 block h-px w-12 bg-white/25" />
                <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-white/60">{b.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ══ §3 PERFILES QUE BUSCAMOS ═════════════════════════════ */}
      <section id="perfiles" aria-labelledby="perfiles-title" className="scroll-mt-20 bg-[#0d2340]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-end md:gap-12 lg:gap-20">
            <h2
              id="perfiles-title"
              className="text-[clamp(2.2rem,4.6vw,4rem)] font-semibold uppercase leading-[0.9] tracking-tight"
            >
              Perfiles que
              <br />
              buscamos
            </h2>
            <p className="max-w-xl text-[17px] leading-relaxed text-white/65 md:pb-[0.3em]">
              Elige el perfil que encaja contigo y te llevamos directamente al formulario con el puesto ya seleccionado.
            </p>
          </div>

          <ol className="mt-14 grid border-t border-white/15 lg:mt-20 lg:grid-cols-2 lg:gap-x-14">
            {profiles.map((p, i) => (
              <li key={p.area}>
                <a
                  href="#candidatura"
                  data-puesto={p.area}
                  className="group relative grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-white/10 py-7 outline-none focus-visible:bg-white/[0.04] sm:grid-cols-[3rem_1fr_auto] sm:gap-x-6"
                >
                  <span className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-white/[0.035] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 motion-reduce:transition-none" />

                  <span className="relative pt-1.5 text-[12px] text-white/35" style={MONO}>
                    {pad(i + 1)}
                  </span>
                  <span className="relative">
                    <span className="block text-[clamp(1.25rem,1.8vw,1.5rem)] font-light leading-tight tracking-tight text-white/90 transition-colors group-hover:text-white">
                      {p.area}
                    </span>
                    <span className="mt-2 block max-w-md text-[15px] leading-relaxed text-white/55">{p.desc}</span>
                  </span>
                  <span
                    className="relative col-start-2 mt-4 inline-flex items-center gap-2 self-start text-[11px] tracking-[0.2em] text-white/50 transition-colors group-hover:text-white sm:col-start-auto sm:mt-1.5"
                    style={MONO}
                  >
                    POSTULAR
                    <svg aria-hidden width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ══ §4 CANDIDATURA ═══════════════════════════════════════ */}
      <CareersForm positions={profiles.map((p) => p.area)} />
    </main>
  );
}