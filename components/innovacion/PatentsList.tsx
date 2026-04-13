import Link from "next/link"

const PATENTS_DATA = [
  { title: "Refueling Boom with Backup Raising Cable", url: "https://www.patentsencyclopedia.com/app/20090127394" },
  { title: "System for Refuelling Operations", url: "https://www.patentsencyclopedia.com/app/20090302160" },
  { title: "Indication System and Method for Refuelling Operations", url: "https://www.patentsencyclopedia.com/app/20100108816" },
  { title: "Illuminating System for In-Flight Refuelling Operations", url: "https://www.patentsencyclopedia.com/app/20100237249" },
  { title: "Method and System for Enhanced Vision in Aerial Refueling Operations", url: "https://www.patentsencyclopedia.com/app/20110147528" },
  { title: "Method and System for Enhanced Vision in Aerial Refuelling Operations", url: "https://www.patentsencyclopedia.com/app/20110147529" },
  { title: "System for Providing Night Vision at Low Visibility Conditions", url: "https://www.patentsencyclopedia.com/app/20110261188" },
  { title: "Monitoring System for Remotely Supervising and Controlling Critical Operations and Method for Detecting Image Freezing", url: "https://www.patentsencyclopedia.com/app/20140104421" },
  { title: "System for Night Vision from Distant Observation Places", url: "https://www.patentsencyclopedia.com/app/20110253894" },
  { title: "System for Night Vision of Selected Objects", url: "https://www.patentsencyclopedia.com/app/20110266457" },
]

// ── Arrow icon 

function ArrowUpRight() {
  return (
    <svg
      width="12" height="12" fill="none" viewBox="0 0 24 24"
      stroke="currentColor" strokeWidth={2}
      className="shrink-0"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
    </svg>
  )
}



export default function PatentsList() {
  return (
    <section
      id="patentes"
      className="py-28 px-6 lg:px-16 bg-white dark:bg-defensya-navy
                 border-t border-gray-200 dark:border-white/[0.07]"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >
      <div className="max-w-7xl mx-auto">

      
        <div className="grid lg:grid-cols-[1fr_40%] gap-12 lg:gap-20 items-center
                        border-b border-gray-200 dark:border-white/[0.07] pb-14 mb-14">
          <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-defensya-blue" />
            <span className="text-[12px] font-semibold tracking-[0.3em] text-defensya-blue uppercase">
              Nuestras Patentes
            </span>
          </div>
            <h2
              className="text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase
                         leading-none tracking-tight text-gray-900 dark:text-white"
              style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
            >
              Investigación,<br />
              <span className="text-defensya-blue">Desarrollo</span> <br />
              e Innovación
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              En Defensya demostramos un especial interés por la investigación innovadora
              y por el desarrollo de los frutos de esta actividad, convirtiéndolos en
              productos de alto contenido tecnológico.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              A lo largo de más de veinticinco años de actividad hemos registrado{" "}
              <span className="text-gray-900 dark:text-white font-medium">
                más de veinte patentes
              </span>
              , algunas de las cuales ya han sido cedidas a clientes como{" "}
              <span className="text-gray-900 dark:text-white font-medium">
                EADS (Airbus)
              </span>.
            </p>
          </div>
        </div>

        {/* ── Stat strip */}
        {/* <div className="grid grid-cols-3 gap-6 mb-14 pb-14
                        border-b border-gray-200 dark:border-white/[0.07]">
          {[
            { val: "20+", label: "Patentes registradas" },
            { val: "25+", label: "Años de I+D" },
            { val: "EADS", label: "Airbus — licenciatario" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p
                className="text-2xl sm:text-3xl font-bold font-mono text-defensya-blue"
                style={{ fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)" }}
              >
                {val}
              </p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 tracking-wide uppercase mt-1">
                {label}
              </p>
            </div>
          ))}
        </div> */}

        {/* ── Patents list */}
        <div className=" dark:border-white/[0.07]">
          {PATENTS_DATA.map((patent, i) => (
            <Link
              key={i}
              href={patent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6
                         py-4 sm:py-5 px-2 -mx-2
                         border-b border-gray-200 dark:border-white/[0.07]
                         hover:bg-gray-50 dark:hover:bg-white/2
                         transition-colors duration-200"
            >
              {/* Index */}
              <span className="text-[10px] font-mono text-defensya-blue tracking-widest
                               shrink-0 w-6 text-right">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <p className="flex-1 text-xs sm:text-sm font-medium leading-snug
                             text-gray-600 dark:text-gray-400
                             group-hover:text-gray-900 dark:group-hover:text-white
                             transition-colors duration-200 uppercase tracking-wide">
                {patent.title}
              </p>

            
              <span className="text-defensya-blue opacity-0 group-hover:opacity-100
                               translate-x-1 group-hover:translate-x-0
                               transition-all duration-200 shrink-0">
                <ArrowUpRight />
              </span>
            </Link>
          ))}
        </div>

        {/* ── Quote ─────── */}
        <div className="mt-14 grid lg:grid-cols-[auto_1fr] gap-6 items-start
                        border border-gray-200 dark:border-white/[0.07] p-8 lg:p-10">
          {/* Left accent */}
          <div className="hidden lg:block w-px self-stretch bg-defensya-blue shrink-0" />

          <div>
            <p className="text-[12px] font-semibold tracking-[0.3em] text-defensya-blue
                          uppercase mb-4">
              Última invención
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 
                          leading-relaxed italic">
              "Nuestra última invención posibilita la{" "}
              <span className=" font-semibold text-gray-900 dark:text-white">
                Automatización
              </span>{" "}
              luego de una Semiautomatización supervisada de tareas de Repostaje
              aéreo con Boom."
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}