import React from 'react';
import Image from 'next/image';

const QuienesSomos = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* 1. HERO / FILOSOFÍA */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
            Sobre Nosotros
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-light max-w-3xl leading-relaxed mb-8">
            "Defensya es una empresa de base tecnológica que rinde culto a la innovación, al diseño, al arte de inventar y hacer las cosas bien hechas."
          </p>
          <p className="text-slate-400 text-lg max-w-4xl leading-relaxed">
            La Investigación y el Desarrollo son elementos claves de nuestra actividad. Especializados en sistemas de visión, 
            desarrollamos y fabricamos desde monitores y sistemas de gestión de imagen hasta soluciones complejas de 
            criptografía y sensores embebidos.
          </p>
        </div>
        {/* Decoración de fondo sutil */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full"></div>
      </section>

      {/* 2. CAPACIDADES TÉCNICAS (Grid de Especialidades) */}
      <section className="py-20 bg-slate-900/50 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-4">
            Nuestra Experiencia
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white italic">Sistemas de Visión</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Fabricación de monitores de vídeo, gestión de audio y datos con encriptación síncrona, 
                sistemas de iluminación LED/Láser de alta potencia y cámaras de precisión.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white italic">Software y Electrónica</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Desarrollo en aeronáutica, defensa, SCADAs, adquisición de señal y sistemas embebidos 
                llevando el control de procesos industriales al siguiente nivel.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white italic">Tecnologías Emergentes</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Expertos en redes neuronales, sistemas de aprendizaje, Inteligencia Artificial, 
                seguridad y análisis de datos avanzado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EL HITO: A330MRTT */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
            {/* Aquí iría una foto del A330MRTT o del Sistema de Visión */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-600 text-xs text-center p-4">
              [ ESPACIO PARA FOTO: Tanquero A330MRTT con Sistema de Visión Defensya ]
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Liderazgo en Aviación</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Nuestros miembros han registrado <strong>más de veinte patentes</strong>. 
              Diseñamos el Sistema de Visión actual del tanquero <strong>A330MRTT</strong> y hemos desarrollado 
              la 3ª generación del sistema: una solución integral de fácil instalación que redefine la operatividad.
            </p>
            <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <p className="text-sm text-blue-200">
                Auditoría y Supervisión: También auditamos el trabajo de otras ingenierías para asegurar 
                productos con las más altas garantías de calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLIENTES PRINCIPALES */}
      <section className="py-20 border-t border-slate-900 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-12">
            Confían en nosotros
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all">
            <span className="text-xl md:text-2xl font-bold text-slate-300">MINISTERIO DE DEFENSA DE ESPAÑA</span>
            <span className="text-xl md:text-2xl font-bold text-slate-300 italic tracking-tighter">AIRBUS DEFENCE & SPACE</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;