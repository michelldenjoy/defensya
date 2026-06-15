"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "25+",
    label: "Años de experiencia",
  },
  {
    value: "20+",
    label: "Patentes registradas",
  },
  {
    value: "AIRBUS",
    label: "Licenciatario tecnológico",
  },
  {
    value: "A3R / A4R",
    label: "Sistemas de repostaje",
  },
];

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="grid lg:grid-cols-2 min-h-[620px]">
        {/* LEFT */}
        <div className="bg-defensya-navy px-6 md:px-10 lg:px-16 py-14 lg:py-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="
                text-[10px]
                font-mono
                tracking-[0.35em]
                uppercase
                text-defensya-steel
              "
            >
              Capacidades demostradas
            </span>

            <div className="mt-10 grid grid-cols-2 gap-8">
              {stats.map((item) => (
                <div key={item.label}>
                  <div
                    className="
                      text-white
                      font-black
                      leading-none
                      text-4xl
                      lg:text-6xl
                    "
                  >
                    {item.value}
                  </div>

                  <div
                    className="
                      mt-2
                      text-[10px]
                      md:text-xs
                      uppercase
                      tracking-[0.18em]
                      text-slate-400
                    "
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 max-w-3xl">
              <h2
                className="
                  text-white
                  font-black
                  uppercase
                  leading-tight
                  text-2xl
                  md:text-3xl
                  lg:text-4xl
                "
              >
                La confianza no se declara.
                <br />
                Se demuestra.
              </h2>

              <p
                className="
                  mt-6
                  text-slate-300
                  text-base
                  md:text-lg
                  leading-relaxed
                  max-w-2xl
                "
              >
                Diseñamos sistemas críticos para operaciones aéreas donde
                la precisión, la seguridad y la fiabilidad no admiten
                margen de error.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-defensya-blue
                  px-6
                  py-4
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  font-bold
                  text-white
                  hover:bg-defensya-blue
                  transition-all
                  duration-300
                "
              >
                Contactar con el equipo

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>


            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative min-h-[420px] lg:min-h-full">
          <Image
            src="/images/forest2.jpg"
            alt="Tecnología aeronáutica avanzada"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-defensya-navy/65" />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-defensya-navy via-defensya-navy/30 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="p-8 md:p-12 lg:p-16 max-w-xl">
              <span
                className="
                  text-[10px]
                  font-mono
                  tracking-[0.35em]
                  uppercase
                  text-defensya-steel
                "
              >
                Aerospace Systems
              </span>

              <h3
                className="
                  mt-4
                  text-white
                  font-black
                  uppercase
                  leading-tight
                  text-2xl
                  md:text-4xl
                "
              >
                Tecnología desarrollada para entornos operacionales críticos
              </h3>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-defensya-blue" />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-slate-400
                  "
                >
                  Ingeniería aeronáutica avanzada
                </span>
              </div>
            </div>
          </div>

          {/* Tech border */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-defensya-blue via-defensya-blue/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}