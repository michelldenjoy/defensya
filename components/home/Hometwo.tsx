"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Divisiones from "./Divisiones";
import HeroSection from "./HeroSection";
import TecnologiasSection from "./TecnologiaSection";
import CapabilityCards from "./CapabilityCards";
import Image from "next/image";

function Rule() {
  return <hr className="border-t border-gray-200 dark:border-white/8" />;
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
    <main
      className="w-full bg-white dark:bg-defensya-navy text-gray-900 dark:text-white"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      <HeroSection />

      {/* ───────── TRUST STRIP ───────── */}
      <section className="py-6 mt-8 md:py-12 bg-defensya-navy dark:bg-black/40 border-y border-gray-200 dark:border-white/5">
      
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 md:gap-6 items-center">
            {items.map((item) => (
              <div key={item.label} className="flex items-center gap-3 justify-center">
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
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-defensya-steel">
                    {item.label}
                  </p>
                  <p className="text-xs sm:text-sm text-white font-bold uppercase leading-tight">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CapabilityCards />
      <Rule />

      <Divisiones />
      <TecnologiasSection />

      <Rule />

      <Rule />
    </main>
  );
}
