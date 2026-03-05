import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-slate-950 text-white">
      
      
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           
           <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-900 z-10" />
           <div className="w-full h-full bg-slate-900 flex items-center justify-center text-slate-700">
             <Image 
               src="/images/armt.webp" 
               alt="A330MRTT in flight" 
               fill 
               className="object-cover object-center"
             />
           </div>
        </div>
        
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            INGENIERÍA QUE <span className="text-blue-600">INVENTA</span> EL FUTURO
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 font-light italic">
            "Líderes en sistemas de visión y automatización para defensa y aeronáutica."
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/innovacion" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-bold transition-all">
              Explorar Innovación
            </Link>
            <Link href="/contacto" className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all">
              Contactar
            </Link>
          </div>
        </div>
      </section>

      {/* 2. LOGOS */}
      <section className="py-12 bg-white border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-24   transition-all">
          <span className="text-lg font-bold text-black tracking-tighter">AIRBUS DEFENCE & SPACE</span>
          <Image src="/images/airbuslogo.png" alt="Ministerio Logo" width={150} height={50} className="object-contain" />
          <span className="text-lg text-black font-bold">MINISTERIO DE DEFENSA</span>
          <Image src="/images/ministeriologo.png" alt="Ministerio Logo" width={150} height={50} className="object-contain" />
        </div>
      </section>

      {/* 3. QUIENES SOMOS */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 italic text-blue-500">Rendimos culto a la innovación.</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Defensya es una empresa de base tecnológica especializada en sistemas de visión, gestión de imagen y datos. 
            Con más de 25 años de experiencia, diseñamos soluciones críticas que vuelan en las plataformas más avanzadas del mundo.
          </p>
          <Link href="/empresa/quienes-somos" className="text-white font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-400 transition-colors">
            Conoce nuestra historia →
          </Link>
        </div>
        <div className="relative aspect-square overflow-hidden  ">
           {/* IMG*/}
           <div className="absolute  inset-0 flex items-center justify-center text-slate-600">
             <Image 
               src="/images/armt.webp" 
               alt="Defensya Team" 
               fill 
               className="object-contain object-center"
             />
           </div>
        </div>
      </section>

      {/* 4. SECTORES */}
      <section className="py-24 bg-slate-900 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Sectores de Actuación</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Aeronáutica', 'Óptica', 'Fabricación 3D', 'Sanidad'].map((sector) => (
            <div key={sector} className="p-8 bg-slate-950 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all text-center group">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg">{sector}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BADGE DE PATENTES */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-linear-to-r from-blue-900 to-blue-700 rounded-3xl p-10 text-center shadow-2xl shadow-blue-600/20">
          <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Propiedad Intelectual
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">+20 PATENTES REGISTRADAS</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Nuestra capacidad inventiva está respaldada por décadas de investigación y patentes cedidas a líderes globales de la industria.
          </p>
          <Link href="/innovacion#patentes" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all">
            Ver Registro de Patentes
          </Link>
        </div>
      </section>

    </div>
  );
};

export default HomePage;