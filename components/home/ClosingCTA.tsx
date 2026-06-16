"use client";

import Image from "next/image";
import Link from "next/link";
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

type BtnVariant = "primary" | "secondary";

export function ClipButton({
  href,
  children,
  variant = "primary",
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: BtnVariant;
  target?: string;
  rel?: string;
}) {
  const clip =
    variant === "primary"
      ? "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))"
      : "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)";

  if (variant === "primary") {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className="group relative inline-flex items-center gap-3 px-6 py-3.5
                   bg-defensya-navy-light dark:bg-defensya-blue text-white text-[11px] lg:text-[13px] tracking-[0.25em] uppercase 
                   hover:bg-defensya-blue transition-colors duration-200"
        style={{ clipPath: clip, fontFamily: "'Share Tech Mono', monospace" }}
      >
        {children}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
        >
          <path
            d="M2 6h8M7 3l3 3-3 3"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="pointer-events-none absolute bottom-0 right-0 bg-white/25"
          style={{
            width: "14px",
            height: "1px",
            transformOrigin: "bottom right",
            transform: "rotate(-45deg) translateX(4px)",
          }}
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group relative inline-flex items-center gap-3 px-6 py-3.5
                 border text-[11px] lg:text-[13px] tracking-[0.25em] uppercase 
                 text-gray-800 hover:bg-defensya-blue hover:text-white hover:border-defensya-blue
                 transition-all duration-200 text-white dark:border-0"
      style={{ clipPath: clip, fontFamily: "'Share Tech Mono', monospace" }}
    >
      <span
        className="pointer-events-none absolute top-0 left-0 opacity-60"
        style={{
          width: "14px",
          height: "1px",
          transformOrigin: "top left",
          transform: "rotate(-45deg) translateX(-4px)",
        }}
      />
      {children}
    </Link>
  );
}

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="grid lg:grid-cols-2 min-h-[620px]">
        {/* LEFT BtnVariant*/}
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
                Diseñamos sistemas críticos para operaciones aéreas donde la
                precisión, la seguridad y la fiabilidad no admiten margen de
                error.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
          <ClipButton href="/contacto" variant="primary">
            Contactar con el equipo
          </ClipButton>
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
                  DEFENSYA Ingeniería 
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
