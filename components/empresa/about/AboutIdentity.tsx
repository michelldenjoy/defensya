
"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const LogoParticles3D = dynamic(() => import("./LogoPlate3D"), { ssr: false });

export default function AboutIdentity() {
  const [formed, setFormed] = useState(false);

  return (
    <section className="relative w-full h-[60vh] lg:h-[70vh] bg-[#060d18] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <LogoParticles3D onFormed={() => setFormed(true)} />
      </div>

      <div
        className={`absolute bottom-14 lg:bottom-20 left-1/2 -translate-x-1/2
                    flex items-center gap-3 transition-all duration-700
                    ${formed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
      >
      

      </div>
    </section>
  );
}
