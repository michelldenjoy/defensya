"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { ClipButton } from "@/components/home/HeroSection";

/*
  ─── Section rhythm ──────────────────────────────────────────────
  §1 Hero     → LIGHT  bg-white         / dark:bg-defensya-navy
  §2 Por qué  → LIGHT  bg-gray-50       / dark:bg-defensya-navy   (misma zona, tono ligeramente diferenciado)
  §3 Perfiles → DARK   bg-defensya-navy / dark:bg-defensya-navy
  §4 Form     → LIGHT  bg-white         / dark:bg-defensya-navy
  ─────────────────────────────────────────────────────────────── */

type Status = "" | "sending" | "success" | "error";

// ─── Brackets ──

function Corners({
  size = 16,
  onDark = false,
}: {
  size?: number;
  onDark?: boolean;
}) {
  const muted = onDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)";
  return (
    <>
      <span
        className="pointer-events-none absolute z-20"
        style={{
          top: 12,
          left: 12,
          width: size,
          height: size,
          borderTop: "1.5px solid var(--color-defensya-blue, #0ea5e9)",
          borderLeft: "1.5px solid var(--color-defensya-blue, #0ea5e9)",
        }}
      />


      <span
        className="pointer-events-none absolute z-20"
        style={{
          bottom: 12,
          right: 12,
          width: size,
          height: size,
          borderBottom: "1.5px solid var(--color-defensya-blue, #0ea5e9)",
          borderRight: "1.5px solid var(--color-defensya-blue, #0ea5e9)",
        }}
      />
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  accent,
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  onDark?: boolean;
}) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-6 h-px bg-slate-400" />
        <span className="font-mono text-[11px] tracking-[0.35em] text-slate-400 uppercase">
          {eyebrow}
        </span>
      </div>
      <h2
        className={`font-bold uppercase leading-[0.9] tracking-tight
          ${onDark ? "text-white" : "text-gray-900 dark:text-white"}`}
        style={{
          fontFamily: "var(--font-display, 'Barlow Condensed', sans-serif)",
          fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
        }}
      >
        {title}
        {accent && (
          <>
            {" "}
            <span className="">{accent}</span>
          </>
        )}
      </h2>
    </div>
  );
}

const benefits = [
  {
    num: "01",
    title: "Proyectos de Impacto",
    desc: "Trabajarás en sistemas que vuelan en el A330 MRTT y soluciones para el Ministerio de Defensa.",
  },
  {
    num: "02",
    title: "Cultura de Patentes",
    desc: "Fomentamos la invención. Tu trabajo puede convertirse en la próxima patente tecnológica de la industria.",
  },
  {
    num: "03",
    title: "I+D de Vanguardia",
    desc: "Desde IA y redes neuronales hasta sistemas ópticos y criptografía avanzada.",
  },
];

const profiles = [
  {
    area: "Técnico Mecanizado",
    desc: "Operación de centros de torneado y fresado multieje para componentes de alta precisión y tolerancias críticas.",
  },
  {
    area: "Programador CAM - CATIA",
    desc: "Generación de estrategias de mecanizado avanzado y simulación de procesos para utillajes complejos de aeronáutica.",
  },
  {
    area: "Ingeniería Mecánica",
    desc: "Desarrollo de sistemas estructurales, análisis de fatiga y simulación térmica para entornos de misión crítica.",
  },
  {
    area: "Ingeniería de Diseño",
    desc: "Modelado conceptual y detallado de hardware táctico, optimizando peso, ergonomía y robustez mecánica.",
  },
  {
    area: "Ingeniería Electrónica",
    desc: "Diseño de hardware, sensórica avanzada, adquisición de señal y arquitectura de sistemas de potencia.",
  },
  {
    area: "Técnico de Calidad",
    desc: "Aseguramiento de estándares MIL-SPEC mediante inspección metrológica y control de procesos productivos.",
  },
  {
    area: "Técnico de Mantenimiento",
    desc: "Gestión preventiva y correctiva de sistemas industriales y equipos de diagnóstico de alta disponibilidad.",
  },
  {
    area: "Técnico de Electrónica",
    desc: "Integración, soldadura de precisión y testeo de tarjetas PCBA y mazos de cables bajo normativa IPC.",
  },
];

const positions = [
  "Técnico de Mecanizado",
  "Programador CAM - CATIA",
  "Ingeniería Mecánica",
  "Ingeniería de Diseño",
  "Ingeniería Electrónica",
  "Técnico de Calidad",
  "Técnico de Mantenimiento",
  "Técnico de Electrónica",
];

const formMeta = [
  { label: "Respuesta", value: "En menos de 3 días" },
  { label: "Modalidad", value: "Presencial — Madrid" },
  { label: "Sector", value: "Defensa & Aeronáutica" },
];

// ───  inputs

const inputCls = [
  "w-full px-4 py-3 text-sm font-mono",
  "bg-white dark:bg-white/[0.03]",
  "border border-gray-200 dark:border-white/[0.08]",
  "text-gray-900 dark:text-white",
  "placeholder:text-gray-400 dark:placeholder:text-gray-600",
  "focus:outline-none focus:border-defensya-blue",
  "transition-colors duration-200",
].join(" ");

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[10px] tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase">
        {label}
      </label>
      {children}
    </div>
  );
}

// ─── COMPONENTE PRINCIPAL

export default function Careers() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("");
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 5 * 1024 * 1024) {
      alert("Máx 5 MB");
      return;
    }
    setFile(f);
    setFileName(f.name);
  };

  const uploadToCloudinary = async (f: File) => {
    const fd = new FormData();
    fd.append("file", f);
    fd.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
      { method: "POST", body: fd }
    );
    return (await res.json()).secure_url as string;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Por favor sube tu CV");
      return;
    }
    setStatus("sending");
    try {
      const fileUrl = await uploadToCloudinary(file);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CAREERS_ID!,
        {
          user_name: (formRef.current as any).user_name.value,
          user_email: (formRef.current as any).user_email.value,
          position: (formRef.current as any).position.value,
          area: (formRef.current as any).area.value,
          message: (formRef.current as any).message.value,
          cv_link: fileUrl,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setFile(null);
      setFileName("");
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main
      className="w-full"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >
      {/*  HERO */}
      <section
        className="relative px-6 lg:px-16 pt-24 pb-28 overflow-hidden
                          bg-white dark:bg-black/50
                          border-b border-gray-100 dark:border-white/[0.07]"
      >
        {/* Grid visible only in dark */}
        <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-40 pointer-events-none" />
        {/* Top accent line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-defensya-blue to-transparent opacity-20" />

        <div className="max-w-7xl mx-auto relative">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-6 h-px bg-defensya-blue" />
            <span className="font-mono text-[11px] tracking-[0.35em] text-defensya-blue uppercase">
              Empresa — Careers
            </span>
          </div>

          {/* INTRO */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <h1
              className="font-bold uppercase leading-[0.88] tracking-tight
                         text-gray-900 dark:text-white"
              style={{
                fontFamily:
                  "var(--font-display, 'Barlow Condensed', sans-serif)",
                fontSize: "clamp(3rem, 7vw, 6rem)",
              }}
            >
              <span className="text-defensya-blue dark:text-blue-300">
                Impulsa
              </span>
              <br />
              tu ingenio
              <br />
              en{" "}
              <span className="text-defensya-blue dark:text-blue-300">
                Defensya
              </span>
            </h1>

            <div className="flex flex-col gap-8">
              <p
                className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed
                            border-l-2 border-defensya-blue/30 pl-5"
              >
                En Defensya creemos que nuestro éxito se basa en el talento y la
                pasión de nuestro equipo. Estamos en busca de profesionales
                apasionados por la innovación aeroespacial. Únete a la misión de
                transformar el futuro de la defensa.
              </p>
              <div className="flex flex-wrap gap-3">
                <ClipButton href="#candidatura" variant="primary">
                  Enviar Candidatura
                </ClipButton>
                <ClipButton href="#perfiles" variant="outline">
                  Ver Perfiles
                </ClipButton>
              </div>
            </div>
          </div>

          {/* Meta strip */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="h-px flex-1 bg-gray-100 dark:bg-white/[0.06] hidden sm:block" />
            {[
              { label: "Posiciones abiertas", value: "08" },
              { label: "Sede", value: "Madrid, ES" },
              { label: "Sector", value: "DEF / AERO" },
            ].map(({ label, value }, i) => (
              <React.Fragment key={label}>
                {i > 0 && (
                  <div className="w-px h-8 bg-gray-200 dark:bg-white/[0.08]" />
                )}
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase">
                    {label}
                  </span>
                  <span className="font-mono text-[13px] font-bold text-gray-900 dark:text-white">
                    {value}
                  </span>
                </div>
              </React.Fragment>
            ))}
            <div className="h-px w-12 bg-defensya-blue/30" />
          </div>
        </div>
      </section>

      {/* **********LO QUE OFRECEMOS**********  */}
      <section
        className="relative px-6 lg:px-16 py-28 overflow-hidden
                          bg-gray-50 dark:bg-defensya-navy
                          border-b border-gray-100 dark:border-white/[0.07]"
      >
        <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <SectionHeader
            eyebrow="Por qué Defensya"
            title="Lo que "
            accent="ofrecemos"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <div
                key={b.num}
                className="relative overflow-hidden p-8 group
                           bg-white dark:bg-white/[0.02]
                           border border-gray-100 dark:border-white/[0.06]
                           transition-colors duration-300"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div className="absolute inset-0 bg-defensya-blue/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Corners size={14} />

                <span
                  className="absolute top-2 right-4 font-mono font-black select-none
                             text-black/[0.04] dark:text-white/[0.04]
                             group-hover:text-defensya-blue/[0.08] transition-colors duration-500"
                  style={{ fontSize: "5rem", lineHeight: 1 }}
                >
                  {b.num}
                </span>

                {/* tag */}
                <span
                  className="inline-flex mb-6 font-mono text-[10px] tracking-[0.3em]
                                text-defensya-blue border border-defensya-blue/30 px-2 py-[3px] uppercase"
                >
                  {b.num}
                </span>

                <h3
                  className="text-xl font-bold uppercase leading-tight mb-3
                               text-gray-900 dark:text-white
                                transition-colors duration-300"
                  style={{
                    fontFamily:
                      "var(--font-display, 'Barlow Condensed', sans-serif)",
                  }}
                >
                  {b.title}
                </h3>

                <div className="h-px w-8 bg-defensya-blue/40 group-hover:w-full transition-all duration-500 mb-4" />

                <p
                  className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed
                             group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300"
                >
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  PERFILES QUE BUSCAMOS */}
      <section
        id="perfiles"
        className="relative px-6 lg:px-16 py-28 overflow-hidden
                          bg-defensya-navy dark:bg-black/50
                          border-b border-white/[0.07]"
      >
        <div className="tech-grid absolute inset-0 opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <SectionHeader
            eyebrow="Perfiles"
            title="Perfiles que"
            accent="buscamos"
            onDark
          />

          <div
            className="hidden sm:grid sm:grid-cols-[56px_1fr_2fr] gap-4 lg:gap-8
                          px-5 -mx-5 pb-3 border-b border-white/[0.12]"
          >
            {["#", "Área", "Descripción"].map((h) => (
              <span
                key={h}
                className="font-mono text-[9px] tracking-[0.3em] text-gray-600 uppercase"
              >
                {h}
              </span>
            ))}
          </div>

          {profiles.map(({ area, desc }, i) => (
            <div
              key={area}
              className="group relative flex flex-col sm:grid sm:grid-cols-[56px_1fr_2fr]
                            gap-2 sm:gap-4 lg:gap-8 items-start
                            py-5 sm:py-6 px-5 -mx-5
                            border-b border-white/[0.07]
                            hover:bg-white/[0.03] transition-all duration-200"
            >
              <span
                className="pointer-events-none absolute left-0 top-0 bottom-0 w-[2px] bg-defensya-blue
                              scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
              />

              <span
                className="font-mono text-[11px] text-gray-600
                             group-hover:text-defensya-blue transition-colors duration-300"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <h4
                className="text-base sm:text-lg font-bold uppercase leading-none tracking-tight
                             text-white transition-colors duration-300"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                {area}
              </h4>

              <p
                className="text-sm text-gray-400 leading-relaxed
                           group-hover:text-gray-300 transition-colors duration-300"
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/*  **************FORMULARIO****************** */}
      <section
        id="candidatura"
        className="relative px-6 lg:px-16 py-28 overflow-hidden
                          bg-white dark:bg-defensya-navy"
      >
        <div className="tech-grid absolute inset-0 opacity-0 dark:opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-[1fr_58%] gap-12 lg:gap-20 items-start">
            {/* ── izquierda ── */}
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                eyebrow="Candidatura"
                title="Envíanos"
                accent="tu talento"
              />

              <p
                className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-10
                           border-l-2 border-defensya-blue/30 pl-5"
              >
                ¿No ves una posición que encaje? Envíanos tu CV para futuras
                oportunidades. Revisamos cada candidatura con atención.
              </p>

              {/* Meta table */}
              <div className="border-t border-gray-100 dark:border-white/[0.07]">
                {formMeta.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between py-4
                                              border-b border-gray-100 dark:border-white/[0.07]"
                  >
                    <span
                      className="font-mono text-[10px] tracking-[0.3em]
                                   text-gray-400 dark:text-gray-600 uppercase"
                    >
                      {label}
                    </span>
                    <span
                      className="font-mono text-[11px]
                                   text-gray-900 dark:text-white"
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-defensya-blue/30" />
                <span
                  className="font-mono text-[10px] tracking-[0.3em]
                               text-gray-400 dark:text-gray-600 uppercase"
                >
                  Defensya · HR Division
                </span>
                <div className="h-px flex-1 bg-gray-100 dark:bg-white/[0.04]" />
              </div>
            </div>

            {/* ── Right — form ── */}
            <div>
              <AnimatePresence mode="wait">
                {/* SUCCESS */}
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative py-20 flex flex-col items-center justify-center text-center px-8
                               bg-defensya-blue/[0.04] border border-defensya-blue/20"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
                    }}
                  >
                    <Corners size={18} />

                    <div
                      className="w-16 h-16 flex items-center justify-center mb-8
                                   bg-defensya-blue/10 border border-defensya-blue/30"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                      }}
                    >
                      <svg
                        className="w-7 h-7 text-defensya-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <span className="font-mono text-[10px] tracking-[0.3em] text-defensya-blue uppercase mb-4">
                      Transmisión completada
                    </span>
                    <h3
                      className="text-3xl font-bold uppercase leading-tight mb-4
                                  text-gray-900 dark:text-white"
                      style={{
                        fontFamily:
                          "var(--font-display, 'Barlow Condensed', sans-serif)",
                      }}
                    >
                      Candidatura Recibida
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed mb-10">
                      Gracias por tu interés en Defensya. Tu perfil ha sido
                      enviado al equipo de selección. Te responderemos a la
                      mayor brevedad posible.
                    </p>
                    <button
                      onClick={() => setStatus("")}
                      className="font-mono text-[10px] tracking-[0.3em] text-defensya-blue uppercase
                                       border border-defensya-blue/30 px-5 py-2.5
                                       hover:bg-defensya-blue/10 transition-colors"
                    >
                      ← Volver al formulario
                    </button>
                  </motion.div>
                ) : (
                  /* FORM */
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative p-7 sm:p-10
                               bg-gray-50 dark:bg-white/[0.02]
                               border border-gray-100 dark:border-white/[0.07]"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
                    }}
                  >
                    <Corners size={18} />

                    {/* form header */}
                    <div
                      className="flex items-center justify-between mb-8 pb-5
                                   border-b border-gray-100 dark:border-white/[0.07]"
                    >
                      <span
                        className="font-mono text-[10px] tracking-[0.3em]
                                      text-gray-900 dark:text-white uppercase"
                      >
                        Formulario de candidatura
                      </span>
                      <span className="font-mono text-[10px] text-gray-400 dark:text-gray-600">
                        REF-HR/01
                      </span>
                    </div>

                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-6"
                    >
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Field label="Nombre completo">
                          <input
                            type="text"
                            name="user_name"
                            placeholder="Juan García"
                            className={inputCls}
                            required
                          />
                        </Field>
                        <Field label="Correo electrónico">
                          <input
                            type="email"
                            name="user_email"
                            placeholder="juan@email.com"
                            className={inputCls}
                            required
                          />
                        </Field>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <Field label="Puesto de interés">
                          <select name="position" className={inputCls} required>
                            <option value="">Selecciona un puesto</option>
                            {positions.map((p) => (
                              <option key={p} value={p}>
                                {p}
                              </option>
                            ))}
                          </select>
                        </Field>
                        <Field label="Área de interés">
                          <select name="area" className={inputCls} required>
                            <option value="">Selecciona un área</option>
                            {[
                              "Software",
                              "Electrónica",
                              "Visión / Óptica",
                              "Fabricación 3D",
                              "Sanidad",
                              "Otros",
                            ].map((a) => (
                              <option key={a} value={a}>
                                {a}
                              </option>
                            ))}
                          </select>
                        </Field>
                      </div>

                      <Field label="Mensaje / Motivación">
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Cuéntanos por qué quieres unirte al equipo de Defensya..."
                          className={inputCls + " resize-none"}
                          required
                        />
                      </Field>

                      {/* CV upload */}
                      <Field label="Adjuntar CV">
                        <label
                          className={[
                            "flex items-center gap-4 cursor-pointer border border-dashed",
                            "px-5 py-4 transition-all duration-200 group",
                            fileName
                              ? "border-defensya-blue bg-defensya-blue/[0.04]"
                              : "border-gray-200 dark:border-white/[0.10] hover:border-defensya-blue",
                          ].join(" ")}
                          style={{
                            clipPath:
                              "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                          }}
                        >
                          <input
                            type="file"
                            name="my_file"
                            accept=".pdf,.doc,.docx"
                            className="sr-only"
                            required
                            onChange={handleFileChange}
                          />

                          <svg
                            width="18"
                            height="18"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            className={`shrink-0 transition-colors duration-200 ${
                              fileName
                                ? "text-defensya-blue"
                                : "text-gray-400 group-hover:text-defensya-blue"
                            }`}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                            />
                          </svg>

                          <div className="min-w-0">
                            <p
                              className={`font-mono text-[11px] tracking-[0.15em] uppercase truncate transition-colors duration-200
                              ${
                                fileName
                                  ? "text-defensya-blue"
                                  : "text-gray-500 dark:text-gray-400 group-hover:text-defensya-blue"
                              }`}
                            >
                              {fileName || "Seleccionar archivo"}
                            </p>
                            <p className="font-mono text-[10px] text-gray-400 dark:text-gray-600 mt-0.5">
                              PDF, DOC o DOCX — máx. 5 MB
                            </p>
                          </div>

                          {fileName && (
                            <span className="ml-auto shrink-0">
                              <svg
                                width="14"
                                height="14"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="text-defensya-blue"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                          )}
                        </label>
                      </Field>

                      <div className="h-px bg-gray-100 dark:bg-white/[0.06]" />

                      {/* Submit row */}
                      <div className="flex flex-wrap items-center gap-4">
                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="group inline-flex items-center gap-3
                                     px-7 py-3.5
                                     bg-defensya-navy-light dark:bg-defensya-blue text-white
                                     font-mono text-[11px] tracking-[0.25em] uppercase
                                     hover:bg-defensya-blue disabled:opacity-40
                                     transition-colors duration-200"
                          style={{
                            clipPath:
                              "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                          }}
                        >
                          {status === "sending" ? (
                            <>
                              <span className="w-3 h-3 border border-white/40 border-t-white rounded-full animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              Enviar Candidatura
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                className="group-hover:translate-x-1 transition-transform duration-200"
                              >
                                <path
                                  d="M2 6h8M7 3l3 3-3 3"
                                  stroke="currentColor"
                                  strokeWidth="1.4"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </>
                          )}
                        </button>

                        {status === "error" && (
                          <span className="font-mono text-[10px] tracking-[0.2em] text-red-500 uppercase">
                            ✕ Error — inténtalo de nuevo
                          </span>
                        )}

                        <span
                          className="hidden sm:block font-mono text-[9px] tracking-[0.2em]
                                        text-gray-400 dark:text-gray-600 uppercase ml-auto"
                        >
                          Datos protegidos · RGPD
                        </span>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
