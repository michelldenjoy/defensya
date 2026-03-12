import Certificaciones from "@/components/empresa/calidad/Certificaciones";
import PoliticaCalidad from "@/components/empresa/calidad/PoliticaCalidad";
import HeroSection from "@/components/shared/HeroSection";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroSection
        label="Calidad y Certificación"
        title="Comprometidos con la Excelencia"
        subtitle="En Defensya, la calidad no es solo un objetivo, sino una promesa que cumplimos en cada proyecto. Nuestra política de calidad se basa en la mejora continua, la innovación y la satisfacción del cliente. Estamos orgullosos de nuestras certificaciones que respaldan nuestro compromiso con los más altos estándares de calidad en la industria aeroespacial."
        video="/certification.mp4"
      />
      <PoliticaCalidad />
      <Certificaciones />
    </div>
  );
}
