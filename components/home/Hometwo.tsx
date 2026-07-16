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
import TecnologiaIntro from "./TecnologiaIntro";
import Intro from "./Intro";
import Mrtt from "./Mrtt";

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
    icon: "/icons/ue.png",
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
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest  text-slate-500">
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

      <Intro />
      <Mrtt />
      {/* <CapabilityCards />       */}

      <Divisiones />

      {/* <TecnologiasSection /> */}

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

      <Rule />
    </main>
  );
}
