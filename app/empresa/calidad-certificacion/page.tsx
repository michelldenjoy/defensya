import Certificaciones from "@/components/empresa/calidad/Certificaciones";
import PoliticaCalidad from "@/components/empresa/calidad/PoliticaCalidad";
import HeroSection from "@/components/shared/HeroSection";
import Sostenibilidad from "@/components/empresa/calidad/Sostenibilidad";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroSection
        label="Calidad y Certificación"
        title="Comprometidos con la Excelencia"
        subtitle=""
        video="/certification.mp4"
      />
      <PoliticaCalidad />
      <Certificaciones />
      <Sostenibilidad />  
    </div>
  );
}
