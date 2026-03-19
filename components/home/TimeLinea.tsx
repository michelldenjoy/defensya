import Image from "next/image";

const HITOS = [
  {
    year: "2007",
    tag: "Fundación",
    title: "El Origen de una Visión",
    description:
      "Nace Defensya Ingeniería de Sistemas en Madrid. Establecimos nuestro propósito: resolver los desafíos de visualización y monitorización más críticos donde las soluciones convencionales no alcanzan los estándares de misión.",
    image: "/images/hito-fundacion.jpg",
  },
  {
    year: "2011",
    tag: "Eficiencia Operativa",
    title: "Optimización FAL C295",
    description:
      "Desarrollamos nuestro Detector de Deflexión láser para Airbus. Logramos un hito en la línea de montaje: reducir los tiempos de testeo de superficies móviles de 10 horas a tan solo 15 minutos con precisión micrométrica.",
    image: "/images/hito-c295.jpg",
  },
  {
    year: "2015",
    tag: "Elite Aeronáutica",
    title: "Consolidación en el A330 MRTT",
    description:
      "Nos convertimos en pieza clave del avión cisterna de referencia mundial. Diseñamos el sistema de Espejos Dicróicos 3D, eliminando el 'ghosting' visual y garantizando la seguridad absoluta en operaciones de reabastecimiento en vuelo.",
    image: "/images/aeronautic.jpg",
  },
  {
    year: "2019",
    tag: "Innovación RFID",
    title: "Nacimiento de Boom Tag®",
    description:
      "Revolucionamos la trazabilidad con tecnología RFID sin batería. Creamos una base de datos digital integrada en cada componente de la pértiga de reabastecimiento, resistiendo las condiciones ambientales más extremas de la atmósfera.",
    image: "/images/hito-patentes.jpg",
  },
  {
    year: "2024",
    tag: "Nueva Generación",
    title: "A3R® & Optrónica Avanzada",
    description:
      "Lanzamos nuestra plataforma integral de visión y designación láser. Con capacidades de Auto-Tracking y cumplimiento NATO STANAG 3733, lideramos el camino hacia la autonomía total en misiones de repostaje y vigilancia.",
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
            Nuestra Trayectoria
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
                                    border border-gray-200 dark:border-white/10
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
                    <div className="w-2 h-2 rounded-full bg-defensya-blue shadow-[0_0_10px_rgba(0,114,206,0.5)]" />
                  </div>

                  {/* ── CELDA IZQUIERDA ── */}
                  <div
                    className={`border-b border-gray-200 dark:border-white/[0.07]
                                lg:border-b-0 lg:border-r
                                ${
                                  isLeft
                                    ? "lg:pr-16 lg:py-16 p-8"
                                    : "lg:py-16 p-8 order-last lg:order-none"
                                }`}
                  >
                    {isLeft ? (
                      /* TEXTO en la izquierda */
                      <div className="flex flex-col h-full justify-center lg:items-end lg:text-right">
                        <span className="lg:hidden text-[10px] font-mono tracking-[0.25em] text-defensya-blue font-bold uppercase mb-3 block">
                          {hito.year}
                        </span>
                        <span className="text-[10px] font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-3 block">
                          {hito.tag}
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-bold uppercase leading-none tracking-tight text-gray-900 dark:text-white mb-4">
                          {hito.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
                          {hito.description}
                        </p>
                      </div>
                    ) : (
                      /* IMAGEN en la izquierda */
                      <HitoImage image={hito.image} title={hito.title} />
                    )}
                  </div>

                  {/* ── CELDA DERECHA ── */}
                  <div
                    className={`border-b border-gray-200 dark:border-white/[0.07]
                                ${
                                  isLeft
                                    ? "lg:pl-16 lg:py-16 p-8"
                                    : "lg:pr-16 lg:py-16 p-8"
                                }`}
                  >
                    {isLeft ? (
                      /* IMAGEN en la derecha */
                      <HitoImage image={hito.image} title={hito.title} />
                    ) : (
                      /* TEXTO en la derecha */
                      <div className="flex flex-col h-full justify-center lg:items-start lg:text-left">
                        <span className="lg:hidden text-[10px] font-mono tracking-[0.25em] text-defensya-blue font-bold uppercase mb-3 block">
                          {hito.year}
                        </span>
                        <span className="text-[10px] font-mono tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-3 block">
                          {hito.tag}
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-bold uppercase leading-none tracking-tight text-gray-900 dark:text-white mb-4">
                          {hito.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm lg:mr-auto">
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

function HitoImage({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden group border border-gray-100 dark:border-white/5 shadow-2xl">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-defensya-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}