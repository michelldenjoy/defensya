"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Divisiones from "./Divisiones";
import HeroSection from "./HeroSection";
import TecnologiasSection from "./TecnologiaSection";
import CapabilityCards from "./CapabilityCards";
import Image from "next/image";
import Link from "next/link";
import ClosingCTA from "./ClosingCTA";

function Rule() {
  return <hr className="border-t border-gray-800 dark:border-white/8" />;
}

const items = [
  {
    label: "Reconocimiento",
    value: "Airbus Top Award Supplier",
    icon: "/icons/award.png",
  },
  {
    label: "Estándar",
    value: "Certificación ISO 9001",
    icon: "/icons/iso.png",
  },
  {
    label: "Soberanía",
    value: "Tecnología 100% Europea",
    icon: "/icons/european.png",
  },
  {
    label: "Alcance",
    value: "Presencia en Programas Internacionales",
    icon: "/icons/global.png",
  },
];

export default function Hometwo() {
  return (
    <main className="w-full bg-white dark:bg-defensya-navy text-gray-900 dark:text-white">

      {/* ───────── TRUST STRIP ───────── */}
      <section className="py-6 md:py-12 bg-defensya-navy border-y border-slate-800 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 md:gap-6 items-center">
            {items.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 justify-center"
              >
                {/* Icono */}
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={30}
                  height={30}
                  className="shrink-0 opacity-90 brightness-0 invert"
                />

                {/* Texto */}
                <div className="flex flex-col justify-center">
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest  text-defensya-steel">
                    {item.label}
                  </p>
                  <p className="text-xs sm:text-sm text-white  uppercase leading-tight">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CapabilityCards />      
      
      <Divisiones />

      <TecnologiasSection />

      <Rule />


<ClosingCTA />



    
      {/* <section className="">
        <div className="grid sm:grid-cols-2">
         
          <div className="px-6 lg:px-18  py-14 bg-defensya-navy  flex flex-col justify-center">
            <blockquote
              className="font-bold uppercase text-white leading-snug pb-4"
              style={{ fontSize: "clamp(0.8rem, 1.9vw, 1.4rem)" }}
            >
              La confianza se construye con calidad. Por eso, cada solución que
              desarrollamos refleja nuestro compromiso con la excelencia, la
              innovación y la fiabilidad en los entornos más exigentes.
            </blockquote>
            <div className="flex justify-end">
              <Link
                href="/empresa/calidad-certificacion"
                className="group inline-flex items-center gap-3
                       font-mono text-[11px] tracking-[0.3em] uppercase
                       text-slate-200 hover:text-blue-400  transition-colors duration-200"
              >
                Visita Nuestra Politica de Calidad
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

    
          <div
            className="relative min-h-[280px] lg:min-h-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/forest2.jpg')" }}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgba(11, 31, 56, 0.3)" }}
            />
          </div>
        </div>
      </section> */}

      {/* <div className="relative overflow-hidden  h-[420px] w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/turbine.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(11, 31, 56, 0.62)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-defensya-blue/60 via-defensya-blue/20 to-transparent" />

        <div className="relative z-10 h-full px-5 sm:px-8 lg:px-16 py-12 sm:py-16 max-w-7xl mx-auto flex flex-col justify-between">
          <div>
            <span
              className="pointer-events-none select-none font-mono font-black hidden sm:block leading-none mb-2"
              style={{ fontSize: "5rem", color: "rgba(255,255,255,0.04)" }}
            >
              DSY
            </span>
            <span className="text-white text-2xl uppercase font-bold">
              Nuestro Compromiso{" "}
            </span>
            <p className="text-md sm:text-base lg:text-xl text-gray-300 leading-relaxed font-light max-w-5xl">
              No solo fabricamos tecnología;{" "}
              <span className="text-white font-medium">
                entregamos la fiabilidad operativa necesaria para que
                organizaciones globales operen en entornos críticos.
              </span>{" "}
              En{" "}
              <span className="text-defensya-steel font-semibold">
                Defensya
              </span>
              , la excelencia técnica se rige por estándares de calidad
              internacionales, garantizando la seguridad en el futuro de la
              exploración y la defensa global.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <div className="h-px w-10 bg-defensya-blue/50" />
              <span
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgb(107 114 128)",
                }}
              >
                Defensya · Ingeniería Internacional
              </span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-defensya-blue/30 via-transparent to-transparent" />
      </div> */}

      <Rule />
    </main>
  );
}
