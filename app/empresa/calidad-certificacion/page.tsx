import Certificaciones from "@/components/empresa/calidad/Certificaciones";
import HeroSection from "@/components/shared/HeroSection";
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
