import Image from "next/image"

type Division = {
  title: string
  description: string
  image: string
}

const divisions: Division[] = [
  {
    title: "Defensa",
    image: "/images/defensa.jpg",
    description:
      "En Defensya contamos con un equipo de especialistas altamente cualificados y con instalaciones preparadas para afrontar proyectos complejos dentro del sector defensa. Más de veinte años de experiencia avalan nuestra capacidad para desarrollar soluciones tecnológicas fiables, innovadoras y adaptadas a los requisitos más exigentes del sector.",
  },
  {
    title: "Aeronáutica",
    image: "/images/aeronautic.jpg",
    description:
      "Diseñamos, desarrollamos y fabricamos sistemas electrónicos, ópticos y mecánicos destinados al sector aeronáutico. Nuestras soluciones integran tecnología avanzada para resolver necesidades específicas del sector, trabajando en colaboración con empresas de reconocido prestigio.",
  },
  {
    title: "Óptica",
    image: "/images/optica.jpeg",
    description:
      "Desarrollamos y fabricamos componentes ópticos para aplicaciones militares, aeronáuticas, científicas y optoelectrónicas. Somos especialistas en análisis de materiales, diseño óptico, mecanizado de precisión y pulido de materiales como cristal, lentes, cerámicas y metales técnicos.",
  },
  {
    title: "Fabricación 3D",
    image: "/images/fabricacion3d.jpg",
    description:
      "Disponemos de tecnología avanzada de fabricación aditiva para la producción de piezas mediante sinterización láser en aluminio, acero, titanio o cromo-cobalto. También contamos con sistemas de prototipado rápido y maquinaria de control numérico de alta precisión.",
  },
  {
    title: "Sanidad",
    image: "/images/sanidad.jpg",
    description:
      "Nuestra división sanitaria combina ingeniería, diseño y fabricación avanzada para el desarrollo de soluciones técnicas aplicadas al sector médico, desde el diseño conceptual hasta la producción final, garantizando los más altos estándares de calidad.",
  },
]

export default function Divisiones() {
  return (
    <section className="py-28 px-6 lg:px-16 bg-white dark:bg-defensya-navy">
      <div className="max-w-7xl mx-auto">

       
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-16
                        border-b border-gray-200 dark:border-white/[0.07] pb-10">
          <div>
            <p className="text-[12px] font-mono tracking-[0.3em] text-gray-400
                          dark:text-gray-500 uppercase mb-3">
              05 — Divisiones
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                         leading-none tracking-tight text-gray-900 dark:text-white"
              style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
            >
              Sectores de Actividad
            </h2>
          </div>
          <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm lg:text-right">
            Tecnología avanzada aplicada a los sectores estratégicos más exigentes.
          </p>
        </div>

        {/* ── Featured first division — full width ── */}
        <div className="grid lg:grid-cols-[1fr_45%] border
                        border-gray-200 dark:border-white/[0.07] mb-3 group
                        hover:border-defensya-blue/30 dark:hover:border-defensya-blue/30
                        transition-colors">

          {/* Copy */}
          <div className="flex flex-col justify-between p-8 lg:p-12
                          border-b lg:border-b-0 lg:border-r
                          border-gray-200 dark:border-white/[0.07]">
            <div>
              <span className="text-[12px] font-mono text-defensya-blue tracking-widest uppercase mb-6 block">
                01
              </span>
              <h3
                className="text-3xl lg:text-4xl font-bold uppercase leading-none
                           tracking-tight text-gray-900 dark:text-white mb-5"
                style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
              >
                {divisions[0].title}
              </h3>
              <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed max-w-md">
                {divisions[0].description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/[0.07]">
              <span className="text-xs font-mono tracking-widest uppercase
                               text-gray-400 dark:text-gray-500">
                Sector principal
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-64 lg:h-auto min-h-70">
            <Image
              src={divisions[0].image}
              alt={divisions[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-linear-to-r
                            from-white/10 dark:from-defensya-navy/20 to-transparent" />
          </div>
        </div>

        {/* ── Remaining four — 2×2 grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t
                        border-gray-200 dark:border-white/[0.07]">
          {divisions.slice(1).map((division, i) => (
            <div
              key={division.title}
              className="border-b border-r border-gray-200 dark:border-white/[0.07]
                         group hover:bg-gray-50 dark:hover:bg-white/2 transition-colors"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={division.image}
                  alt={division.title}
                  fill
                  className="object-cover transition-transform duration-700
                             group-hover:scale-[1.04]"
                />
                {/* Scrim */}
                <div className="absolute inset-0 bg-linear-to-t
                                from-white/30 dark:from-defensya-navy
                                via-white/20 dark:via-defensya-navy/20
                                to-transparent" />

                {/* Index number overlaid bottom-left */}
                <span className="absolute bottom-3 left-4 text-[12px] font-mono
                                 text-defensya-blue tracking-widest">
                  {String(i + 2).padStart(2, "0")}
                </span>
              </div>

              {/* Copy */}
              <div className="p-5">
                <h3
                  className="text-2xl font-bold uppercase leading-none tracking-tight
                             text-gray-900 dark:text-white mb-3"
                  style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
                >
                  {division.title}
                </h3>
                <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed
                              line-clamp-4">
                  {division.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}