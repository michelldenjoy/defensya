import React from 'react';
import Link from 'next/link';

const PATENTS_DATA = [
  { title: "REFUELING BOOM WITH BACKUP RAISING CABLE", url: "https://www.patentsencyclopedia.com/app/20090127394" },
  { title: "SYSTEM FOR REFUELLING OPERATIONS", url: "https://www.patentsencyclopedia.com/app/20090302160" },
  { title: "INDICATION SYSTEM AND METHOD FOR REFUELLING OPERATIONS", url: "https://www.patentsencyclopedia.com/app/20100108816" },
  { title: "ILLUMINATING SYSTEM FOR IN-FLIGHT REFUELLING OPERATIONS", url: "https://www.patentsencyclopedia.com/app/20100237249" },
  { title: "METHOD AND SYSTEM FOR ENHANCED VISION IN AERIAL REFUELING OPERATIONS", url: "https://www.patentsencyclopedia.com/app/20110147528" },
  { title: "METHOD AND SYSTEM FOR ENHANCED VISION IN AERIAL REFUELLING OPERATIONS", url: "https://www.patentsencyclopedia.com/app/20110147529" },
  { title: "SYSTEM FOR PROVIDING NIGHT VISION AT LOW VISIBILITY CONDITIONS", url: "https://www.patentsencyclopedia.com/app/20110261188" },
  { title: "MONITORING SYSTEM FOR REMOTELY SUPERVISING AND CONTROLLING CRITICAL OPERATIONS AND METHOD FOR DETECTING IMAGE FREEZING", url: "https://www.patentsencyclopedia.com/app/20140104421" },
  { title: "SYSTEM FOR NIGHT VISION FROM DISTANT OBSERVATION PLACES", url: "https://www.patentsencyclopedia.com/app/20110253894" },
  { title: "SYSTEM FOR NIGHT VISION OF SELECTED OBJECTS", url: "https://www.patentsencyclopedia.com/app/20110266457" },
];

const PatentsList = () => {
  return (
    <section id="patentes" className="py-24 px-6 border-t
      bg-slate-50 border-slate-200
      dark:[background-color:#0A1128] dark:border-slate-900
      transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6
            text-slate-900 dark:text-white">
            Investigación, Desarrollo e Innovación
          </h2>
          <div className="h-1 w-20 bg-blue-600 mb-8" />
          <p className="text-lg leading-relaxed max-w-4xl
            text-slate-600 dark:text-slate-400">
            En Defensya demostramos un especial interés por la investigación innovadora y por el desarrollo
            de los frutos de esta actividad, convirtiéndolos en productos de alto contenido tecnológico.
            A lo largo de más de veinticinco años de actividad hemos registrado{' '}
            <span className="text-slate-900 dark:text-white font-medium">más de veinte patentes</span>,
            algunas de las cuales ya han sido cedidas a clientes como{' '}
            <span className="text-slate-900 dark:text-white font-medium">EADS (Airbus)</span>.
          </p>
        </div>

        {/* Grid de patentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PATENTS_DATA.map((patent, index) => (
            <Link
              key={index}
              href={patent.url || "#"}
              target={patent.url ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-xl border transition-all duration-300
                bg-white border-slate-200 hover:border-blue-500/50 hover:bg-slate-50
                dark:bg-slate-900/40 dark:border-slate-800 dark:hover:border-blue-500/50 dark:hover:bg-slate-900"
            >
              <div className="flex gap-4 items-center">
                <span className="font-mono text-sm transition-colors
                  text-blue-400/60 group-hover:text-blue-500
                  dark:text-blue-500/50 dark:group-hover:text-blue-400">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="text-sm md:text-base font-medium uppercase tracking-tight leading-tight transition-colors
                  text-slate-700 group-hover:text-slate-900
                  dark:text-slate-300 dark:group-hover:text-white">
                  {patent.title}
                </h3>
              </div>

              <div className="ml-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Cita final */}
        <div className="mt-12 p-8 rounded-2xl border transition-colors duration-300
          bg-blue-50 border-blue-200
          dark:bg-blue-900/20 dark:border-blue-500/20">
          <p className="italic text-lg leading-relaxed
            text-blue-800 dark:text-blue-100">
            "Nuestra última invención posibilita la <strong>Automatización</strong> luego de una
            Semiautomatización supervisada de tareas de Respostaje aéreo con Boom."
          </p>
        </div>

      </div>
    </section>
  );
};

export default PatentsList;