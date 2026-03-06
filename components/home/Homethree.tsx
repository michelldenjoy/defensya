import Link from "next/link";
import Image from "next/image";

export default function Homethree() {
  return (
    <main className="w-full bg-slate-950 text-slate-200">
      
      
      <section className="relative w-full py-32 px-6 lg:px-16 border-b border-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              Engineering Excellence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-white tracking-tighter">
              Tecnología aeroespacial <br /> 
              <span className="text-blue-600">de vanguardia</span>
            </h1>

            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
              Defensya desarrolla sistemas inteligentes para los entornos más exigentes del futuro. 
              Combinamos visión artificial de alta fidelidad y software crítico para redefinir la 
              automatización y el control en plataformas aéreas globales.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/innovacion"
                className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
              >
                Nuestras Tecnologías
              </Link>
              <Link
                href="/empresa/quienes-somos"
                className="px-8 py-4 rounded-xl border border-slate-700 text-white hover:bg-slate-900 transition-all"
              >
                Sobre Defensya
              </Link>
            </div>
          </div>

          
          <div className="relative h-100 rounded-3xl border border-slate-800 bg-slate-900/50 flex items-center justify-center group overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-tr from-blue-600/5 to-transparent pointer-events-none" />
            <span className="text-slate-600 font-mono text-sm tracking-widest group-hover:text-blue-500 transition-colors">
              
            </span>
          </div>
        </div>
      </section>

      {/* SECTORES*/}
      <section className="py-24 px-6 lg:px-16 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Aeronáutica", icon: "✈️" },
              { name: "Óptica Avanzada", icon: "👁️" },
              { name: "Fabricación 3D", icon: "⚙️" },
              { name: "Sanidad", icon: "🩺" }
            ].map((sector) => (
              <div key={sector.name} className="p-6 rounded-2xl border border-slate-800 bg-slate-950 hover:border-blue-500/50 transition-all text-center">
                <div className="text-2xl mb-3">{sector.icon}</div>
                <p className="font-bold text-sm tracking-wide text-white">{sector.name.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INNOVACIÓN */}
      <section className="py-24 px-6 lg:px-16 border-y border-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Impulsando el futuro del <br /> reabastecimiento Air-to-Air
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Nuestras tecnologías patentadas permiten la transición de procesos manuales 
                a sistemas totalmente autónomos, incrementando la seguridad operativa.
              </p>
            </div>
            <Link href="/innovacion" className="text-blue-500 font-bold hover:text-blue-400 transition-colors border-b border-blue-500/30 pb-1">
              Ver todos los proyectos →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "A3R®", desc: "Reabastecimiento Air-to-Air automatizado.", tag: "AUTOMATED" },
              { title: "A4R®", desc: "Conceptos de autonomía total en vuelo.", tag: "AUTONOMOUS" },
              { title: "Boomerang®", desc: "Localización precisa del receptáculo.", tag: "PRECISION" },
              { title: "Haptix®", desc: "Control háptico para operadores (ARO).", tag: "INTERFACE" }
            ].map((item) => (
              <div key={item.title} className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all">
                <span className="text-[10px] font-mono text-blue-500 mb-4 block tracking-widest">{item.tag}</span>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA & BADGE DE PATENTES */}
      <section className="py-24 px-6 lg:px-16 relative">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="mb-10 p-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full">
            <div className="bg-slate-950 rounded-full px-6 py-2">
              <span className="text-white font-bold tracking-tighter text-lg">+20 PATENTES REGISTRADAS</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-3xl">
            Tecnología probada en <br /> plataformas operativas globales
          </h2>
          <p className="text-slate-400 max-w-2xl mb-12">
            Nuestros sistemas de visión de 3ª generación ya están listos para integrarse en aeronaves cisterna, 
            solucionando las limitaciones de los sistemas actuales con una arquitectura integral.
          </p>
          <Link
            href="/innovacion#patentes"
            className="px-10 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 transition-all"
          >
            Explora nuestro Registro de Propiedad
          </Link>
        </div>
      </section>

      {/* CAPACIDADES */}
      <section className="py-24 px-6 lg:px-16 bg-slate-950 border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.4em] mb-12 text-center">
            Capacidades de Ingeniería
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Diseño Electrónico", "Sistemas Embebidos", "Procesamiento Señal",
              "Sistemas Visión", "IA / Machine Learning", "Datos Seguros"
            ].map((cap) => (
              <div key={cap} className="p-4 border border-slate-800 rounded-xl text-center hover:bg-slate-900 transition-colors">
                <p className="text-[11px] font-bold text-slate-300 tracking-tight uppercase">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-28 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto bg-linear-to-b from-blue-600 to-blue-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/40">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">
              Construyamos la próxima generación <br /> de sistemas críticos.
            </h2>
            <div className="flex justify-center gap-6">
              <Link href="/contacto" className="px-10 py-4 bg-white text-blue-700 font-bold rounded-full hover:shadow-xl transition-all">
                Contactar ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}