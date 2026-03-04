import React from 'react';

const HITOS = [
  {
    year: "1996 - Inicio",
    title: "Fundación y ADN Innovador",
    description: "Nace Defensya con el objetivo de rendir culto al diseño y al arte de inventar en el sector de la ingeniería electrónica y de telecomunicación."
  },
  {
    year: "Hito Crítico",
    title: "Sistema de Visión A330MRTT",
    description: "Diseño y desarrollo del sistema de visión para el tanquero de Airbus, consolidando nuestra posición en la élite de la aeronáutica militar."
  },
  {
    year: "Evolución",
    title: "+20 Patentes Registradas",
    description: "Consolidación de nuestra propiedad intelectual con innovaciones cedidas a clientes de primer nivel como EADS (Airbus)."
  },
  {
    year: "Presente",
    title: "3ª Generación: A3R® & A4R®",
    description: "Lanzamiento del nuevo sistema integral de visión y automatización. Semiautomatización y autonomía total para el repostaje en vuelo."
  }
];

const Timeline = () => {
  return (
    <section className="py-24 bg-slate-950 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center tracking-tight">
          Hitos de Ingeniería
        </h2>

        <div className="relative border-l border-slate-800 ml-4 md:ml-0 md:left-1/2">
          {HITOS.map((hito, index) => (
            <div key={index} className="mb-12 relative">
              {/* El punto de la línea de tiempo */}
              <div className="absolute -left-[9px] md:left-[-8px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-slate-950 z-10"></div>
              
              {/* Contenido del hito */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:-translate-x-full' : 'md:pl-12'}`}>
                <span className="text-blue-500 font-mono font-bold text-sm tracking-widest uppercase">
                  {hito.year}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3">
                  {hito.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {hito.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;