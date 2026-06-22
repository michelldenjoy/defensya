import Certificaciones from "@/components/empresa/calidad/Certificaciones";
import PoliticaCalidad from "@/components/empresa/calidad/PoliticaCalidad";
import HeroSection from "@/components/shared/HeroSection";
import Sostenibilidad from "@/components/empresa/calidad/Sostenibilidad";
import React from "react";
import CalidadYSostenibilidad from "@/components/empresa/calidad/CalidadYSostenibilidad";

export default function page() {
  return (
    <div>
      <HeroSection
        label="Calidad y Certificación"
        title=""
        subtitle=""
        video="/certification.mp4"
      />

      <CalidadYSostenibilidad />
      {/* <PoliticaCalidad /> */}
      <Certificaciones />
     
    </div>
  );
}
