import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-4 overflow-hidden border-t border-white/5 bg-[#050609]">
      
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Image 
          src="/defensyatech.png"
          alt="Technical background"
          fill
          className="object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-[#050609]/65 to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* COLUMNA 1: BRAND & MISSION */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex flex-col gap-2">
               <h2 className="text-3xl font-black text-white tracking-tighter uppercase">
                DEFENSYA
              </h2>
              <span className="text-[10px] font-mono text-defensya-sky tracking-[0.3em] uppercase opacity-70">
                Aerospace & Defense Systems
              </span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Ingeniería de vanguardia especializada en sistemas de visión artificial, 
              automatización y control háptico para entornos de misión crítica.
            </p>

            {/* SOCIAL REDES - Adaptadas */}
            <div className="flex gap-3">
              <a href="https://linkedin.com/company/defensya" target="_blank" className="p-2.5 bg-white/5 border border-white/10 hover:border-defensya-sky/50 transition-all group">
                <Linkedin size={16} className="text-slate-400 group-hover:text-defensya-sky" />
              </a>
              <a href="https://twitter.com/defensya" target="_blank" className="p-2.5 bg-white/5 border border-white/10 hover:border-defensya-sky/50 transition-all group">
                <Twitter size={16} className="text-slate-400 group-hover:text-defensya-sky" />
              </a>
            </div>
          </div>

          {/* COLUMNA 2: EXPLORAR */}
          <div>
            <h3 className="text-white font-bold mb-8 uppercase text-[11px] tracking-[0.2em] border-l-2 border-defensya-sky pl-3">
              Compañía
            </h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="/empresa/quienes-somos" className="hover:text-defensya-sky transition-colors flex items-center gap-1 group">Sobre Nosotros <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all" /></Link></li>
              <li><Link href="/innovacion" className="hover:text-defensya-sky transition-colors">Innovación & Patentes</Link></li>
              <li><Link href="/empresa/calidad-certificacion" className="hover:text-defensya-sky transition-colors">Calidad MIL-SPEC</Link></li>
              <li><Link href="/empresa/careers" className="font-medium hover:text-defensya-sky transition-colors">Trabaja con nosotros</Link></li>
            </ul>
          </div>

          {/* COLUMNA 3: SECTORES OPERATIVOS */}
          <div>
            <h3 className="text-white font-bold mb-8 uppercase text-[11px] tracking-[0.2em] border-l-2 border-white/10 pl-3">
              Sectores
            </h3>
            <ul className="space-y-4">
              {['Aeronáutica', 'Defensa', 'Óptica Avanzada', 'Sanidad'].map((sector) => (
                <li key={sector} className="flex items-center gap-3 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                  <span className="w-1 h-1 bg-defensya-sky shadow-[0_0_8px_rgba(0,149,218,0.6)]" /> {sector}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 4: DATA CENTER INFO */}
          <div>
            <h3 className="text-white font-bold mb-8 uppercase text-[11px] tracking-[0.2em] border-l-2 border-white/10 pl-3">
              HQ_Madrid
            </h3>
            <div className="space-y-4">
              <p className="text-slate-400 text-sm leading-snug">
                Sectores Ingeniería I+D+i<br />
                Centro de Operaciones Tácticas
              </p>
              <a href="mailto:info@defensya.com" className="block text-defensya-sky font-mono text-sm hover:text-white transition-colors underline underline-offset-8 decoration-defensya-sky/30">
                info@defensya.com
              </a>

            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-slate-500 text-[10px] tracking-[0.2em] uppercase font-mono">
              © {new Date().getFullYear()} DEFENSYA INGENIERIA INTERNACIONAL.
            </p>

          </div>
          
          <div className="flex gap-8 text-[9px] text-slate-500 uppercase tracking-[0.2em] font-bold">
            <Link href="/legal" className="hover:text-white transition-colors">Legal</Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;