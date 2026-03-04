import React from 'react';
import Image from 'next/image';

const Certificaciones = () => {
  return (
    <section className="py-20 bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Nuestras Certificaciones Oficiales
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Garantizamos la excelencia operativa a través del cumplimiento estricto de estándares internacionales de calidad y gestión ambiental.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* TARJETA ISO 9001 */}
          <div className="bg-slate-950 p-10 rounded-3xl border border-slate-800 flex flex-col items-center text-center group hover:border-blue-500/50 transition-all">
            <div className="relative w-32 h-32 mb-6 transition-all duration-500">
             
              <Image 
                src="/images/ISO9001.png" 
                alt="Certificado ISO 9001:2015"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">ISO 9001:2015</h3>
            <p className="text-blue-400 font-medium mb-4 uppercase tracking-widest text-sm">
              Sistema de Gestión de la Calidad
            </p>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Certificación que avala nuestra capacidad para proporcionar productos y servicios que satisfacen los requisitos del cliente y la normativa legal aplicable.
            </p>
            
            {/* BOTÓN PARA EL PDF */}
            <a 
              href="/docs/Certificado-ISO-9001-Defensya.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar Certificado PDF
            </a>
          </div>
          {/* Si solo tienes la 9001, podemos usar este espacio para un mensaje de 'Mejora Continua' */}
          <div className="bg-slate-950/50 p-10 rounded-3xl border border-slate-800 border-dashed flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04custom " />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-500 mb-2">Excelencia Normativa</h3>
            <p className="text-slate-600 text-sm max-w-xs leading-relaxed italic">
              "Trabajamos bajo los más estrictos estándares de la industria aeroespacial y de defensa para asegurar la integridad de cada proyecto."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Certificaciones;