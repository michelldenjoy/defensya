"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Threemrtt from "../ui/Threemrtt";


const stats = [
  { value: 25, suffix: "+", label: "Años de experiencia" },
  { value: 20, suffix: "+", label: "Patentes registradas" },
  { value: "AIRBUS", suffix: "", label: "Licenciatario tecnológico" },
  { value: "A3R/A4R", suffix: "", label: "Sistemas de repostaje" },
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
                   bg-defensya-navy-light text-white text-[11px] lg:text-[13px] tracking-[0.25em] uppercase
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
                 text-white border-white/20 hover:bg-defensya-blue hover:border-defensya-blue
                 transition-all duration-200"
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


function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1800, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v).toString());
  const [text, setText] = useState("0");

  useEffect(() => {
    const unsub = display.on("change", (v) => setText(v));
    return unsub;
  }, [display]);

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, motionVal, value]);

  return (
    <span ref={ref}>
      {text}
      {suffix}
    </span>
  );
}

/* HUD corner bracket */
function HUDBracket({
  corner,
  className = "",
}: {
  corner: "tl" | "tr" | "bl" | "br";
  className?: string;
}) {
  const size = 14;
  const stroke = 1.2;
  const paths: Record<string, string> = {
    tl: `M ${size} 0 L 0 0 L 0 ${size}`,
    tr: `M 0 0 L ${size} 0 L ${size} ${size}`,
    bl: `M 0 0 L 0 ${size} L ${size} ${size}`,
    br: `M 0 ${size} L ${size} ${size} L ${size} 0`,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`absolute ${className}`}
      fill="none"
    >
      <path d={paths[corner]} stroke="#fefeff" strokeWidth={stroke} />
    </svg>
  );
}

/* Telemetry ticker */
const telemetryLines = [
  "SYS·STATUS ····· NOMINAL",
  "FUEL·FLOW ······ 4.2 L/MIN",
  "ALTITUDE ······· FL380",
  "IAS ············ 480 KT",
  "PRESS·RATIO ···· 1.43:1",
  "OAT ············ -56°C",
];

function TelemetryTicker() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % telemetryLines.length),
      2200,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="overflow-hidden h-5 relative"
      style={{ fontFamily: "'Share Tech Mono', monospace" }}
    >
      <motion.div
        key={idx}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="text-[10px] tracking-[0.2em] text-defensya-blue/70 uppercase absolute whitespace-nowrap"
      >
        {telemetryLines[idx]}
      </motion.div>
    </div>
  );
}

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="grid lg:grid-cols-2 min-h-[620px]">
        {/* ── LEFT PANEL ── */}
        <div className="relative bg-[#060d18] px-6 md:px-10 lg:px-16 py-14 lg:py-20 flex flex-col justify-center overflow-hidden">
          
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(14,165,233,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {stats.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative group"
                >
                  {/* HUD frame corners */}
                  <HUDBracket
                    corner="tl"
                    className="top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <HUDBracket
                    corner="br"
                    className="bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <div className="text-white font-black leading-none text-3xl lg:text-5xl transition-colors duration-300 group-hover:text-defensya-blue">
                    {typeof item.value === "number" ? (
                      <AnimatedCounter
                        value={item.value}
                        suffix={item.suffix}
                      />
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                  <div
                    className="mt-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-slate-500"
                    style={{ fontFamily: "'Share Tech Mono', monospace" }}
                  >
                    {item.label}
                  </div>

                  {/* Hover underline */}
                  <motion.div
                    className="mt-3 h-px bg-defensya-blue/30 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h2 className="text-white font-black uppercase leading-tight text-2xl md:text-3xl lg:text-4xl">
                La confianza no se declara.
                <br />
                <span className="text-defensya-blue">Se demuestra.</span>
              </h2>

              <p
                className="mt-5 text-slate-400 text-sm md:text-base leading-relaxed max-w-lg"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                Diseñamos sistemas críticos para operaciones aéreas donde la
                precisión, la seguridad y la fiabilidad no admiten margen de
                error.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <ClipButton href="/contacto" variant="primary">
                Contactar con el equipo
              </ClipButton>
            </motion.div>
          </motion.div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="relative min-h-[420px] lg:min-h-full overflow-hidden">
          <Threemrtt />

          {/* Overlays */}
          <div className="absolute inset-0 bg-defensya-navy/5 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d18] via-defensya-navy/10 to-transparent pointer-events-none" />

          {/* Grid crosshair lines */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-defensya-blue" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-defensya-blue" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-end z-10 pointer-events-none">
            <div className="p-8 md:p-12 lg:p-16 max-w-xl">
              {/* HUD corner brackets */}
              <div className="relative inline-block mb-4">
                <HUDBracket corner="tl" className="top-0 left-0" />
                <HUDBracket corner="br" className="bottom-0 right-0" />
                <span
                  className="block px-3 py-1 text-[10px] tracking-[0.35em] uppercase text-defensya-steel/60"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
                >
                  Aerospace Systems
                </span>
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-white font-black uppercase leading-tight text-2xl md:text-4xl "
              >
                Tecnología desarrollada para entornos operacionales críticos
              </motion.h3>

              <div className="mt-6 flex items-center gap-4">
                <motion.div
                  className="h-px bg-defensya-blue origin-left"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <span
                  className="text-[10px] uppercase tracking-[0.25em] text-slate-400"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
                >
                  DEFENSYA Ingeniería
                </span>
              </div>
            </div>
          </div>

          {/* Tech border top */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-defensya-blue via-defensya-blue/20 to-transparent z-10" />

          {/* Tech border left */}
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-defensya-blue/60 via-defensya-blue/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
