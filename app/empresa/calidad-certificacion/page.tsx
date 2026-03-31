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
        subtitle="El cumplimiento de los estándares internacionales es la base de nuestra ingeniería. Sostenemos un sistema de gestión orientado a la optimización de procesos y la excelencia técnica, acreditado por las principales entidades de certificación del sector."
        video="/certification.mp4"
      />
      <PoliticaCalidad />
      <Certificaciones />
      <Sostenibilidad />  
    </div>
  );
}
