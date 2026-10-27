import React from "react";
import Refueling from "@/components/innovacion/Refueling";
import PatentsList from "@/components/innovacion/PatentsList";
import HeroSection from "@/components/shared/HeroSection";
import HaptixIntro from "@/components/innovacion/HaptixIntro";
import HaptixSlider from "@/components/innovacion/HaptixSlider";

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
      <HaptixIntro />
      <HaptixSlider />
      <PatentsList />
    </div>
  );
}
