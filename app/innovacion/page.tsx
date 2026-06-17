import React from "react";
import Refueling from "@/components/innovacion/Refueling";
import PatentsList from "@/components/innovacion/PatentsList";
import HeroSection from "@/components/shared/HeroSection";

export default function page() {
  return (
    <div>
      <HeroSection
        label="Innovación"
        title=""
        subtitle=""
        image="/images/refueling1.jpeg"
      />
      <Refueling />
      <PatentsList />
    </div>
  );
}
