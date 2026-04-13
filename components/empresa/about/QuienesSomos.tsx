import React from "react"
import Image from "next/image"


function Rule() {
  return <hr className="border-t border-gray-200 dark:border-white/[0.07]" />
}



const QuienesSomos = () => {
  return (
    <main
      className="w-full bg-white dark:bg-defensya-navy text-gray-900 dark:text-white"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >

      {/* ── HERO ── */}
      <section className="px-6 lg:px-16 pt-20 pb-28 border-b border-gray-200 dark:border-white/[0.07]">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-3 mb-10">
            <span className="w-6 h-px bg-defensya-blue" />
            <span className="text-[12px] font-semibold tracking-[0.3em] text-defensya-blue uppercase">
              Empresa — Quiénes somos
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_38%] gap-16 items-center">
            <h1
              className="text-[clamp(3rem,7vw,6rem)] font-bold uppercase
                         leading-[0.95] tracking-tight text-gray-900 dark:text-white"
              style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
            >
              Tecnología,<br />
              innovación<br />
              <span className="text-defensya-blue">y excelencia</span>
            </h1>

            <div className="lg:pb-2">
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                Defensya es una empresa de base tecnológica orientada a la innovación y
                el diseño en el desarrollo de soluciones avanzadas.
                La Investigación y el Desarrollo (I+D) constituyen pilares fundamentales
                de nuestra actividad.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                Especializados en sistemas de visión, diseñamos y fabricamos soluciones
                completas: monitores de vídeo, sistemas de gestión de imagen, audio y
                datos, sistemas de iluminación LED y láser de alta potencia, y cámaras
                de precisión para entornos operativos exigentes.
              </p>
            </div>
          </div>

         
          <div className="mt-20 pt-8 border-t border-gray-200 dark:border-white/[0.07]
                          grid grid-cols-3 lg:grid-cols-3 gap-8 max-w-lg">
            {[
              { val: "20+", label: "Años de experiencia" },
              { val: "20+", label: "Patentes registradas" },
              { val: "I+D", label: "Core de actividad" },
            ].map(({ val, label }) => (
              <div key={label}>
                <p
                  className="text-2xl font-bold font-mono text-defensya-blue"
                  style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
                >
                  {val}
                </p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 tracking-wide uppercase mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── NUESTRA EXPERIENCIA ─────── */}
      <section className="py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="text-[12px] font-mono tracking-[0.3em] text-defensya-blue uppercase mb-3">
              Experiencia
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                         leading-none tracking-tight"
              style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
            >
              Nuestra Experiencia
            </h2>
          </div>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x
                          divide-gray-200 dark:divide-white/[0.07]">
            {[
              {
                num: "01",
                title: "Sistemas de Visión",
                desc: "Fabricación de monitores de vídeo, gestión de audio y datos con encriptación síncrona, sistemas de iluminación LED/Láser de alta potencia y cámaras de precisión.",
              },
              {
                num: "02",
                title: "Software y Electrónica",
                desc: "Desarrollo en aeronáutica, defensa, SCADAs, adquisición de señal y sistemas embebidos llevando el control de procesos industriales al siguiente nivel.",
              },
              {
                num: "03",
                title: "Tecnologías Emergentes",
                desc: "Expertos en redes neuronales, sistemas de aprendizaje, Inteligencia Artificial, seguridad y análisis de datos avanzado.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="px-0 md:px-8 first:pl-0 last:pr-0 py-8 md:py-0">
                <span className="text-[12px] font-mono text-defensya-blue tracking-widest mb-6 block">
                  {num}
                </span>
                <h3 className="text-2xl font-semibold mb-3 leading-snug">{title}</h3>
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ───── LIDERAZGO EN AVIACIÓN ─────────── */}
      <section className="py-28 px-6 lg:px-16 bg-defensya-navy">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="text-[12px] font-mono tracking-[0.3em] text-gray-400
                          dark:text-gray-500 uppercase mb-3">
              Trayectoria
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                         leading-none tracking-tight text-white"
              style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
            >
              Liderazgo en Aviación
            </h2>
          </div>

          <div className="grid lg:grid-cols-[45%_1fr] gap-12 items-start">

            
            <div className="relative aspect-video border border-white/8 overflow-hidden">
              <Image
                src="/images/sistemavision.png"
                alt="Tanquero A330 MRTT"
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t
                              from-defensya-navy/50 via-transparent to-transparent" />
             
              <div className="absolute bottom-1 left-1 bg-defensya-navy/80 backdrop-blur-sm
                              border border-white/10 px-2 py-1">

                <p className="text-xs font-mono text-white">A330 MRTT // Sistema de Visión</p>
              </div>
            </div>

           
            <div className="flex flex-col justify-center">
              <p className="text-md text-gray-400 leading-relaxed mb-6">
                Nuestro equipo acumula más de veinte patentes registradas, algunas de las
                cuales se encuentran actualmente en operación en aeronaves como el A330 MRTT,
                para el que hemos desarrollado su sistema de visión.
              </p>
              <p className="text-md text-gray-400 leading-relaxed mb-10">
                Además de desarrollar y comercializar productos tecnológicos, en Defensya
                también supervisamos el trabajo realizado por otras empresas de ingeniería,
                auditando sus procesos y resultados para garantizar al cliente las más
                altas garantías de calidad.
              </p>

             
              <div className="border-t border-white/8">
                {[
                  { label: "Plataforma", value: "Airbus A330 MRTT" },
                  { label: "Sistema", value: "Visión embarcada" },
                  { label: "Estado", value: "En operación" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between py-3
                               border-b border-white/6"
                  >
                    <span className="text-[16px] font-mono tracking-widest text-gray-500 uppercase">
                      {label}
                    </span>
                    <span className="text-md font-mono text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Rule />

      {/* ───── CONFÍAN EN NOSOTROS ───── */}
      {/* <section className="py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="text-[12px] font-mono tracking-[0.3em] text-gray-400
                          dark:text-gray-500 uppercase mb-3">
              Clientes
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase
                         leading-none tracking-tight"
              style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
            >
              Confían en Nosotros
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 border-t border-l
                          border-gray-200 dark:border-white/[0.07]">
            {[
              { name: "Ministerio de Defensa de España", role: "Cliente institucional" },
              { name: "Airbus Defence & Space",          role: "Socio industrial" },
            ].map(({ name, role }) => (
              <div
                key={name}
                className="border-b border-r border-gray-200 dark:border-white/[0.07]
                           p-8 lg:p-10 group hover:bg-gray-50 dark:hover:bg-white/2
                           transition-colors"
              >
                <p className="text-[12px] font-mono tracking-widest text-defensya-blue
                              uppercase mb-4">
                  {role}
                </p>
                <p
                  className="text-xl lg:text-2xl font-bold uppercase leading-tight
                             text-gray-900 dark:text-white"
                  style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
                >
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

    </main>
  )
}

export default QuienesSomos