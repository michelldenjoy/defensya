import React from 'react';

const Careers = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* 1. HERO: Propuesta de Valor */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Únete al equipo de Inventores</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            En Defensya no solo trabajamos en ingeniería; rendimos culto al arte de hacer las cosas bien hechas. 
            Si te apasiona la innovación disruptiva en defensa y aeronáutica, este es tu sitio.
          </p>
        </div>
      </section>

      {/* 2. ¿POR QUÉ DEFENSYA? (Beneficios de Carrera) */}
      <section className="py-16 bg-slate-900/30 px-6 border-y border-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="p-6">
            <div className="text-blue-500 text-4xl mb-4 font-bold">01</div>
            <h3 className="text-xl font-bold mb-2">Proyectos de Élite</h3>
            <p className="text-slate-400 text-sm">Trabajarás en sistemas que vuelan en el A330MRTT y soluciones para el Ministerio de Defensa.</p>
          </div>
          <div className="p-6">
            <div className="text-blue-500 text-4xl mb-4 font-bold">02</div>
            <h3 className="text-xl font-bold mb-2">Cultura de Patentes</h3>
            <p className="text-slate-400 text-sm">Fomentamos la invención. Tu trabajo puede convertirse en la próxima patente tecnológica de la industria.</p>
          </div>
          <div className="p-6">
            <div className="text-blue-500 text-4xl mb-4 font-bold">03</div>
            <h3 className="text-xl font-bold mb-2">I+D de Vanguardia</h3>
            <p className="text-slate-400 text-sm">Desde IA y redes neuronales hasta sistemas ópticos y criptografía avanzada.</p>
          </div>
        </div>
      </section>

      {/* 3. PERFILES QUE BUSCAMOS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-blue-600 pl-6">Perfiles que buscamos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { area: "Ingeniería de Software", desc: "Expertos en sistemas embebidos, C/C++, IA y Redes Neuronales." },
            { area: "Ingeniería Electrónica", desc: "Diseño de hardware, sensores, adquisición de señal y sistemas de potencia." },
            { area: "Visión e Imagen", desc: "Especialistas en procesamiento de imagen, compresión y sistemas ópticos." },
            { area: "Ciberseguridad", desc: "Expertos en criptografía y protección de flujos de datos síncronos." }
          ].map((job, i) => (
            <div key={i} className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2">{job.area}</h4>
              <p className="text-slate-400 text-sm">{job.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FORMULARIO DE ENVÍO DE CV */}
      <section className="py-20 px-6 bg-blue-600/5">
        <div className="max-w-3xl mx-auto bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800">
          <h2 className="text-3xl font-bold mb-4 text-center">Envíanos tu talento</h2>
          <p className="text-slate-400 text-center mb-10">
            ¿No ves una posición abierta que encaje? Envíanos tu CV para futuras oportunidades.
          </p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-slate-300 mb-2">Nombre completo</label>
                <input type="text" className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-slate-300 mb-2">Correo electrónico</label>
                <input type="email" className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition-all" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-300 mb-2">Área de interés</label>
              <select className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition-all">
                <option>Software</option>
                <option>Electrónica</option>
                <option>Visión / Óptica</option>
                <option>Otros</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-300 mb-2">Mensaje / Motivación</label>
              <textarea rows={4} className="bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:border-blue-500 outline-none transition-all"></textarea>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20">
              Enviar Candidatura
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;