import Image from "next/image";

const HITOS = [
  {
    year: "2001",
    tag: "Fundación",
    title: "Nace Defensya",
    description:
      "Nace Defensya con el objetivo de rendir culto al diseño y al arte de inventar en el sector de la ingeniería electrónica y de telecomunicación.",
    image: "/images/hito-fundacion.jpg",
  },
  {
    year: "2008",
    tag: "Hito Crítico",
    title: "Sistema de Visión A330 MRTT",
    description:
      "Diseño y desarrollo del sistema de visión para el tanquero de Airbus, consolidando nuestra posición en la élite de la aeronáutica militar.",
    image: "/images/aeronautic.jpg",
  },
  {
    year: "2015",
    tag: "Propiedad Intelectual",
    title: "+20 Patentes Registradas",
    description:
      "Consolidación de nuestra propiedad intelectual con innovaciones cedidas a clientes de primer nivel como EADS (Airbus).",
    image: "/images/hito-patentes.jpg",
  },
  {
    year: "2024",
    tag: "3ª Generación",
    title: "A3R® & A4R®",
    description:
      "Lanzamiento del nuevo sistema integral de visión y automatización. Semiautomatización y autonomía total para el repostaje en vuelo.",
    image: "/images/hito-a3r.jpg",
  },
];

export default function Timeline() {
  return (
    <section className="py-28 px-6 lg:px-16 bg-white dark:bg-defensya-navy overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="mb-20 border-b border-gray-200 dark:border-white/[0.07] pb-10">
          <p
            className="text-[12px] font-mono tracking-[0.3em] text-gray-400
                        dark:text-gray-500 uppercase mb-3"
          >
            Historia
          </p>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                       leading-none tracking-tight text-gray-900 dark:text-white"
            style={{
              fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
            }}
          >
            Hitos de Ingeniería
          </h2>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical center line — visible only on lg */}
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-px
                          top-0 bottom-0 w-px bg-gray-200 dark:bg-white/[0.07]"
          />

          <div className="flex flex-col gap-0">
            {HITOS.map((hito, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={i} className="relative grid lg:grid-cols-2 lg:gap-0">
                  {/* ── CENTER NODE (lg only) ── */}
                  <div
                    className="hidden lg:flex absolute left-1/2 top-1/2
                                  -translate-x-1/2 -translate-y-1/2
                                  flex-col items-center gap-1 z-10"
                  >
                    {/* Year pill */}
                    <div
                      className="bg-white dark:bg-defensya-navy
                                    border border-gray-200 dark:border-white1
                                    px-3 py-1"
                    >
                      <span
                        className="text-[10px] font-mono tracking-[0.25em]
                                       text-defensya-blue font-bold"
                      >
                        {hito.year}
                      </span>
                    </div>
                    {/* Dot */}
                    <div className="w-2 h-2 rounded-full bg-defensya-blue" />
                  </div>

                  {/* ── LEFT CELL ── */}
                  <div
                    className={`border-b border-gray-200 dark:border-white/[0.07]
                                lg:border-b-0 lg:border-r
                                ${
                                  isLeft
                                    ? "lg:pr-16 lg:py-16 p-8"
                                    : "lg:py-16 p-8 order-last lg:order-0"
                                }`}
                  >
                    {isLeft ? (
                      /* TEXT on left */
                      <div className="flex flex-col h-full justify-center lg:items-end lg:text-right">
                        {/* Mobile year */}
                        <span
                          className="lg:hidden text-[10px] font-mono tracking-[0.25em]
                                         text-defensya-blue font-bold uppercase mb-3 block"
                        >
                          {hito.year}
                        </span>

                        <span
                          className="text-[10px] font-mono tracking-widest
                                         text-gray-400 dark:text-gray-500 uppercase mb-3 block"
                        >
                          {hito.tag}
                        </span>
                        <h3
                          className="text-2xl lg:text-3xl font-bold uppercase leading-none
                                     tracking-tight text-gray-900 dark:text-white mb-4"
                          style={{
                            fontFamily:
                              "var(--font-display, 'Barlow Condensed', sans-serif)",
                          }}
                        >
                          {hito.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
                          {hito.description}
                        </p>
                      </div>
                    ) : (
                      /* IMAGE / left */
                      <HitoImage image={hito.image} title={hito.title} />
                    )}
                  </div>

                  {/* ── RIGHT CELL ── */}
                  <div
                    className={`border-b border-gray-200 dark:border-white/[0.07]
                                ${
                                  isLeft
                                    ? "lg:pl-16 lg:py-16 p-8"
                                    : "lg:pr-16 lg:py-16 p-8 lg:text-right"
                                }`}
                  >
                    {isLeft ? (
                      /* IMAGE  */
                      <HitoImage image={hito.image} title={hito.title} />
                    ) : (
                      /* TEXT on right */
                      <div className="flex flex-col h-full justify-center lg:items-end lg:text-right">
                        {/* Mobile year */}
                        <span
                          className="lg:hidden text-[10px] font-mono tracking-[0.25em]
                                         text-defensya-blue font-bold uppercase mb-3 block"
                        >
                          {hito.year}
                        </span>

                        <span
                          className="text-[10px] font-mono tracking-widest
                                         text-gray-400 dark:text-gray-500 uppercase mb-3 block"
                        >
                          {hito.tag}
                        </span>
                        <h3
                          className="text-2xl lg:text-3xl font-bold uppercase leading-none
                                     tracking-tight text-gray-900 dark:text-white mb-4"
                          style={{
                            fontFamily:
                              "var(--font-display, 'Barlow Condensed', sans-serif)",
                          }}
                        >
                          {hito.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm lg:ml-auto">
                          {hito.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Image  ──

function HitoImage({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden group">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      {/* Subtle vignette */}
      <div
        className="absolute inset-0 bg-linear-to-t
                      from-defensya-navy/30 via-transparent to-transparent"
      />
    </div>
  );
}
