import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative  pt-20 pb-10 overflow-hidden border-t border-slate-900">
      
      <div className="absolute inset-0 z-0  pointer-events-none">
        <Image 
          src="/images/render.jpg"
          alt="Technical background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMNA 1: ADN */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tighter">
              DEFENSYA<span className="text-blue-600">.</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empresa de base tecnológica líder en sistemas de visión y automatización. 
              Diseñamos, inventamos y auditamos ingeniería de alta precisión.
            </p>
            <div className="flex gap-4">
              {/* Aquí podrías poner iconos de LinkedIn o redes si tienen */}
              <span className="text-xs text-blue-500 font-mono uppercase tracking-widest">Est. 1996</span>
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Explorar</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="/empresa/quienes-somos" className="hover:text-blue-500 transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/innovacion" className="hover:text-blue-500 transition-colors">Innovación & Patentes</Link></li>
              <li><Link href="/empresa/calidad-certificacion" className="hover:text-blue-500 transition-colors">Calidad e ISO</Link></li>
              <li><Link href="/empresa/careers" className="hover:text-blue-500 transition-colors">Carreras</Link></li>
            </ul>
          </div>

          {/* COLUMNA 3: SECTORES */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Sectores</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-2 font-mono text-[10px]">
                <span className="w-1 h-1 bg-blue-600 rounded-full" /> AERONÁUTICA
              </li>
              <li className="flex items-center gap-2 font-mono text-[10px]">
                <span className="w-1 h-1 bg-blue-600 rounded-full" /> DEFENSA
              </li>
              <li className="flex items-center gap-2 font-mono text-[10px]">
                <span className="w-1 h-1 bg-blue-600 rounded-full" /> ÓPTICA AVANZADA
              </li>
              <li className="flex items-center gap-2 font-mono text-[10px]">
                <span className="w-1 h-1 bg-blue-600 rounded-full" /> SANIDAD
              </li>
            </ul>
          </div>

          {/* COLUMNA 4: CONTACTO */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Sede Central</h3>
            <p className="text-slate-400 text-sm mb-4">
              Madrid, España<br />
              Sectores Ingeniería I+D+i
            </p>
            <p className="text-blue-500 font-mono text-sm underline underline-offset-4">
              info@defensya.com
            </p>
          </div>
        </div>

        {/* LÍNEA FINAL Y COPYRIGHT */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} DEFENSYA INGENIERIA INTERNACIONAL. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-6 text-[10px] text-slate-500 uppercase tracking-widest">
            <Link href="/legal" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;