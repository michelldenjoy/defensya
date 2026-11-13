import Image from "next/image";
import { ClipButton } from "@/components/ui/ClipButton";
import Manifiesto from "./Manifiesto";
import Trayectoria from "./Trayectoria";



const MISION =
  "Somos una empresa de base tecnológica que rinde culto a la innovación y al arte de inventar. La I+D no es un departamento, es la razón de ser de la compañía. Cada beneficio generado se reinvierte en seguir inventando.";

const VISION =
  "Ser un referente internacional en el desarrollo de tecnologías de visión y control para los sectores aeroespacial y de defensa, liderando la innovación en sistemas críticos que garantizan la seguridad y precisión de las misiones más exigentes.";

const EXPERIENCIA = [
  {
    num: "01",
    title: "Sistemas de visión",
    image: "/images/sistemavision.png",
    desc: "Fabricación de monitores de vídeo, gestión de audio y datos con encriptación síncrona, sistemas de iluminación LED/láser y cámaras de precisión.",
  },
  {
    num: "02",
    title: "Software y electrónica",
    image: "/images/software.jpg",
    desc: "Desarrollo en aeronáutica, defensa, SCADAs, adquisición de señal y sistemas embebidos, llevando el control de procesos industriales al siguiente nivel.",
  },
  {
    num: "03",
    title: "Tecnologías emergentes",
    image: "/images/ai.jpg",
    desc: "Expertos en redes neuronales, sistemas de aprendizaje, inteligencia artificial, seguridad y análisis de datos avanzado.",
  },
];


const CIFRAS = [
  { value: "2006", label: "Año de fundación, en Madrid" },
  { value: "10", label: "Patentes publicadas" },
  { value: "ISO 9001", label: "Calidad certificada" },
  { value: "A330 MRTT", label: "Sistemas operativos en varias Fuerzas Aéreas" },
];

const PATENTES = [
  "US2009/0127394",
  "US2009/0302160",
  "US2010/0108816",
  "US2010/0237249",
  "US2011/0147528",
  "US2011/0147529",
  "US2011/0253894",
  "US2011/0261188",
  "US2011/0266457",
  "US2014/0104421",
];

const MONO = { fontFamily: "'Share Tech Mono', monospace" };

const MARQUEE_CSS = `
@keyframes qs-marquee { to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .qs-marquee { animation: none !important; } }
`;

function FilaPatentes({ reverse = false }: { reverse?: boolean }) {
  const items = [...PATENTES, ...PATENTES];
  return (
    <div className="flex overflow-hidden">
      <div
        className="qs-marquee flex shrink-0 gap-16 pr-16"
        style={{ animation: `qs-marquee ${reverse ? 90 : 70}s linear infinite${reverse ? " reverse" : ""}` }}
      >
        {items.map((id, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-[clamp(2rem,5.5vw,4.5rem)] leading-none text-white/[0.05]"
            style={MONO}
          >
            {id}
          </span>
        ))}
      </div>
    </div>
  );
}



export default function QuienesSomos() {
  return (
    <main className="w-full overflow-x-clip bg-defensya-navy text-white">
      <style>{MARQUEE_CSS}</style>

      {/* ══ §1 PORTADA ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-36 lg:pt-44">
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
            Quiénes somos
          </p>
          <h1 className="mt-8 text-[clamp(2.6rem,6.5vw,6.25rem)] font-semibold uppercase leading-[0.9] tracking-tight">
            Rendimos culto
            <br />
            al arte de
            <br />
            <span className="font-light text-white/45">inventar</span>
          </h1>
          <span className="mt-12 block h-px w-12 bg-white/25" />
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-white/65">
            Somos una empresa de base tecnológica con sede en Madrid. Diseñamos, desarrollamos y fabricamos sistemas de visión
            y control para aeronáutica y defensa.
          </p>
        </div>

        {/* Patentes de fondo */}
        <div aria-hidden className="mt-20 space-y-4 pb-16 lg:mt-28 lg:pb-24">
          <FilaPatentes />
          <FilaPatentes reverse />
        </div>
      </section>

   
      <Manifiesto />

      {/* ══ §3 MISIÓN Y VISIÓN ═══════════════════════════════════ */}
      <section aria-label="Misión y visión" className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          {[
            { eyebrow: "Nuestra misión", title: "Inventar", text: MISION },
            { eyebrow: "Nuestra visión", title: "Ser referente", text: VISION },
          ].map((b, i) => (
            <div
              key={b.eyebrow}
              className={`px-6 py-20 lg:py-28 ${i === 0 ? "md:pr-12 lg:pr-20" : "border-t border-white/10 md:border-l md:border-t-0 md:pl-12 lg:pl-20"}`}
            >
              <p className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
                {b.eyebrow}
              </p>
              <h2 className="mt-5 text-[clamp(2.6rem,5vw,4.5rem)] font-light leading-[0.95] tracking-tight">{b.title}</h2>
              <span className="mt-8 block h-px w-12 bg-white/25" />
              <p className="mt-8 max-w-lg text-[18px] leading-relaxed text-white/70">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

    
      <Trayectoria />

      {/* ══ §5 EXPERIENCIA ═══════════════════════════════════════ */}
      <section aria-labelledby="experiencia-title" className="bg-[#0d2340]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <p className="text-[12px] tracking-[0.2em] text-white/50" style={MONO}>
            Lo que sabemos hacer
          </p>
          <h2
            id="experiencia-title"
            className="mt-5 text-[clamp(2.2rem,4.6vw,4rem)] font-semibold uppercase leading-[0.9] tracking-tight"
          >
            Nuestra experiencia
          </h2>

          <ol className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-3 lg:mt-20">
            {EXPERIENCIA.map((e) => (
              <li key={e.num} className="group">
                <div
                  className="relative aspect-[4/3] overflow-hidden border border-white/10"
                  style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}
                >
                  <Image
                    src={e.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover opacity-60 saturate-[0.6] transition-[opacity,transform,filter] duration-700 group-hover:scale-[1.03] group-hover:opacity-90 group-hover:saturate-100 motion-reduce:transition-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2340]/80 to-transparent" />
                  <span className="absolute left-5 top-5 text-[12px] text-white/75" style={MONO}>
                    {e.num}
                  </span>
                </div>
                <h3 className="mt-8 text-[clamp(1.75rem,2.8vw,2.5rem)] font-light leading-[1] tracking-tight">{e.title}</h3>
                <span className="mt-6 block h-px w-12 bg-white/25" />
                <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-white/60">{e.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ══ §6 EN CIFRAS ═════════════════════════════════════════ */}
      <section aria-labelledby="cifras-title" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <h2 id="cifras-title" className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
            Defensya en cifras
          </h2>
          <dl className="mt-10 grid border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {CIFRAS.map((c, i) => (
              <div
                key={c.label}
                className={`flex flex-col-reverse border-b border-white/10 py-10 sm:pr-6 lg:border-b-0 lg:pl-8
                  ${i === 0 ? "lg:pl-0" : "lg:border-l"}
                  ${i % 2 === 1 ? "sm:border-l sm:pl-6" : ""}`}
              >
                <dt className="mt-4 max-w-[16rem] text-[12px] leading-snug tracking-[0.12em] text-white/50" style={MONO}>
                  {c.label}
                </dt>
                <dd className="text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-none tracking-tight">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ══ §7 CIERRE ════════════════════════════════════════════ */}
      <section aria-labelledby="qs-cierre-title" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-36">
          <h2
            id="qs-cierre-title"
            className="max-w-4xl text-[clamp(2.2rem,5vw,4.5rem)] font-semibold uppercase leading-[0.92] tracking-tight"
          >
            Seguimos inventando.
            <br />
            <span className="font-light text-white/45">¿Nos acompañas?</span>
          </h2>
          <div className="mt-12 flex flex-wrap gap-4">
            <ClipButton href="/innovacion" variant="primary">
              Ver innovación
            </ClipButton>
            <ClipButton href="/empresa/careers" variant="outline">
              Únete al equipo
            </ClipButton>
          </div>
        </div>
      </section>
    </main>
  );
}