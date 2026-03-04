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
    <section id="patentes" className="py-24 bg-slate-950 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Investigación, Desarrollo e Innovación
          </h2>
          <div className="h-1 w-20 bg-blue-600 mb-8"></div>
          <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
            En Defensya demostramos un especial interés por la investigación innovadora y por el desarrollo 
            de los frutos de esta actividad, convirtiéndolos en productos de alto contenido tecnológico. 
            A lo largo de nuestros casi treinta años de actividad hemos registrado **más de veinte patentes**, 
            algunas de las cuales ya han sido cedidas a clientes estratégicos como **EADS (Airbus)**.
          </p>
        </div>

        {/* Patentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PATENTS_DATA.map((patent, index) => (
            <Link 
              key={index} 
              href={patent.url || "#"} 
              target={patent.url ? "_blank" : "_self"} 
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300"
            >
              <div className="flex gap-4 items-center">
                <span className="text-blue-500/50 font-mono text-sm group-hover:text-blue-400">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <h3 className="text-sm md:text-base font-medium text-slate-300 group-hover:text-white transition-colors uppercase tracking-tight leading-tight">
                  {patent.title}
                </h3>
              </div>
              
              
              <div className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-8 bg-linear-to-r from-blue-900/20 to-transparent border border-blue-500/20 rounded-2xl">
          <p className="text-blue-100 italic text-lg leading-relaxed">
            "Nuestra última invención posibilita la **Automatización** luego de una 
            Semiautomatización supervisada de tareas de Respostaje aéreo con Boom."
          </p>
        </div>

      </div>
    </section>
  );
};

export default PatentsList;