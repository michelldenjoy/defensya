"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import Image from "next/image"



interface ODSItem {
  id: number
  title: string
  description: string
  icon: string
  image: string
  color: string
}



function LineReveal({ delay = 0 }: { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="h-px bg-gray-200 dark:bg-white/[0.07] origin-left flex-1"
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  )
}


const ODS_DATA: ODSItem[] = [
  {
    id: 7,
    title: "Energía asequible y no contaminante",
    description: "Promovemos eficiencia energética y reducción del impacto ambiental en nuestros procesos, productos y sistemas.",
    icon: "/ods/ods07.png",
    image: "/ods-bg/energy.jpg",
    color: "#FCC30B",
  },
  {
    id: 8,
    title: "Trabajo decente y crecimiento económico",
    description: "Fomentamos empleo cualificado, desarrollo profesional continuo y entornos de trabajo seguros.",
    icon: "/ods/ods08.png",
    image: "/ods-bg/work.jpg",
    color: "#A21942",
  },
  {
    id: 9,
    title: "Industria, innovación e infraestructura",
    description: "La innovación tecnológica y la ingeniería avanzada son el núcleo de nuestra actividad.",
    icon: "/ods/ods09.png",
    image: "/ods-bg/industry.webp",
    color: "#FD6925",
  },
  {
    id: 12,
    title: "Producción y consumo responsables",
    description: "Aplicamos criterios de sostenibilidad, eficiencia y economía circular en nuestros procesos.",
    icon: "/ods/ods12.png",
    image: "/ods-bg/production.webp",
    color: "#BF8B2E",
  },
  {
    id: 13,
    title: "Acción por el clima",
    description: "Reducimos emisiones y diseñamos soluciones alineadas con los retos climáticos globales.",
    icon: "/ods/ods13.png",
    image: "/ods-bg/climate.jpg",
    color: "#3F7E44",
  },
  {
    id: 17,
    title: "Alianzas para lograr los objetivos",
    description: "Colaboramos con clientes, socios e instituciones para impulsar la Agenda 2030.",
    icon: "/ods/ods17.png",
    image: "/ods-bg/alliances.jpg",
    color: "#19486A",
  },
]



export default function ODSSection() {
  return (
    <section
      className="px-6 lg:px-16 py-28 bg-white dark:bg-defensya-navy
                 border-t border-gray-200 dark:border-white/[0.07]"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >
      <div className="max-w-7xl mx-auto">


        <div className="mb-16 lg:mb-20">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="w-6 h-px bg-defensya-blue" />
            <span className="text-[12px] font-semibold tracking-[0.3em] text-defensya-blue uppercase">
             Agenda 2030
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between
                          gap-6 md:gap-12 mb-12">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2
                className="text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase
                           leading-[0.95] tracking-tight text-gray-900 dark:text-white"
                style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
              >
                Nuestro impacto<br />
                <span className="text-defensya-blue">en los ODS</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-md text-gray-500 dark:text-gray-400 max-w-sm
                         leading-relaxed md:pb-2"
            >
              Alineamos nuestra actividad con la Agenda 2030, contribuyendo
              activamente en áreas clave para un futuro tecnológico sostenible.
            </motion.p>
          </div>

          <LineReveal delay={0.1} />
        </div>

        {/* ────── ODS ────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {ODS_DATA.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className="group relative h-70 lg:h-75 overflow-hidden cursor-pointer"
            >
            
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{ backgroundColor: item.color }}
              />

             
              <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover opacity-40"
                />
                <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4">
                  {/* ODS number badge */}
                  <span className="text-[10px] font-mono tracking-[0.3em] text-white/70 uppercase">
                    ODS {item.id}
                  </span>
                  <div className="relative w-32 h-32 drop-shadow-2xl
                                  translate-y-0 group-hover:-translate-y-4
                                  transition-transform duration-700">
                    <Image
                      src={item.icon}
                      alt={`ODS ${item.id}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Hover  */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                              transition-all duration-500 flex flex-col justify-center
                              px-8 bg-black/25 backdrop-blur-[2px]">
                <span className="text-[10px] font-mono tracking-[0.3em] text-white/70
                                 uppercase mb-3">
                  ODS {item.id}
                </span>
                <h3
                  className="text-2xl font-bold uppercase leading-tight
                             tracking-tight text-white mb-4"
                  style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
                >
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* ── Footer ───────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-white/[0.07]
                     flex items-center justify-between flex-wrap gap-4"
        >
          <p className="text-[10px] font-mono tracking-[0.2em] text-gray-400
                        dark:text-gray-500 uppercase">
            Defensya · Compromiso Global · Agenda 2030
          </p>
          <p className="text-[10px] font-mono tracking-[0.2em] text-gray-400
                        dark:text-gray-500 uppercase">
            {ODS_DATA.length} objetivos activos
          </p>
        </motion.div>

      </div>
    </section>
  )
}