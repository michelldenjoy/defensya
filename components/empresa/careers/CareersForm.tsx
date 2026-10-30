"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";


const AREAS = ["Software", "Electrónica", "Visión / Óptica", "Fabricación 3D", "Sanidad", "Otros"];

const FORM_META = [
  { label: "Respuesta", value: "En menos de 3 días" },
  { label: "Modalidad", value: "Presencial — Madrid" },
  { label: "Sector", value: "Defensa y aeronáutica" },
];

const MAX_MB = 5;
const MONO = { fontFamily: "'Share Tech Mono', monospace" };
const CUT = "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)";

const inputCls =
  "w-full border border-white/15 bg-white/[0.03] px-4 py-3.5 text-[15px] text-white placeholder:text-white/30 " +
  "transition-colors duration-200 focus:border-white/60 focus:bg-white/[0.05] focus:outline-none";

type Status = "" | "sending" | "success" | "error";

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={id} className="text-[11px] tracking-[0.2em] text-white/50" style={MONO}>
        {label}
      </label>
      {children}
    </div>
  );
}

/* ───────────COMPONENTE */

export default function CareersForm({ positions }: { positions: string[] }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("");
  const [position, setPosition] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");

  /* Al pulsar "Postular" en un perfil, se selecciona ese puesto aquí */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[data-puesto]");
      if (link?.dataset.puesto) setPosition(link.dataset.puesto);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setFileError("");
    if (!f) return;
    if (f.size > MAX_MB * 1024 * 1024) {
      setFile(null);
      setFileError(`El archivo supera los ${MAX_MB} MB.`);
      e.target.value = "";
      return;
    }
    setFile(f);
  };

  const uploadToCloudinary = async (f: File) => {
    const fd = new FormData();
    fd.append("file", f);
    fd.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
      { method: "POST", body: fd }
    );
    if (!res.ok) throw new Error("Error al subir el CV");
    return (await res.json()).secure_url as string;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setFileError("Adjunta tu CV para continuar.");
      return;
    }
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const cvLink = await uploadToCloudinary(file);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CAREERS_ID!,
        {
          user_name: String(data.get("user_name") ?? ""),
          user_email: String(data.get("user_email") ?? ""),
          position: String(data.get("position") ?? ""),
          area: String(data.get("area") ?? ""),
          message: String(data.get("message") ?? ""),
          cv_link: cvLink,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setFile(null);
      setPosition("");
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="candidatura" aria-labelledby="candidatura-title" className="scroll-mt-20 border-t border-white/10">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 py-24 lg:grid-cols-[1fr_1.35fr] lg:gap-20 lg:py-32">
        {/* ── Izquierda ── */}
        <div className="lg:sticky lg:top-28">
          <p className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
            Candidatura
          </p>
          <h2
            id="candidatura-title"
            className="mt-5 text-[clamp(2.2rem,4.6vw,4rem)] font-semibold uppercase leading-[0.9] tracking-tight"
          >
            Envíanos
            <br />
            <span className="font-light text-white/45">tu talento</span>
          </h2>
          <span className="mt-10 block h-px w-12 bg-white/25" />
          <p className="mt-8 max-w-md text-[17px] leading-relaxed text-white/65">
            ¿No ves una posición que encaje? Envíanos tu CV para futuras oportunidades. Revisamos cada candidatura con
            atención.
          </p>

          <dl className="mt-10 max-w-md border-t border-white/10">
            {FORM_META.map((m) => (
              <div key={m.label} className="flex items-baseline justify-between gap-6 border-b border-white/10 py-4">
                <dt className="text-[11px] tracking-[0.15em] text-white/45" style={MONO}>
                  {m.label}
                </dt>
                <dd className="text-right text-[15px] text-white">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── Derecha: formulario ── */}
        <div className="border border-white/10 bg-white/[0.02] p-6 sm:p-10" style={{ clipPath: CUT }}>
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-start py-10"
                role="status"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30">
                  <svg aria-hidden width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="mt-8 text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-tight tracking-tight">
                  Candidatura recibida
                </p>
                <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-white/60">
                  Gracias por tu interés en Defensya. Tu perfil ha llegado al equipo de selección y te responderemos lo antes
                  posible.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("")}
                  className="mt-10 text-[12px] tracking-[0.2em] text-white/60 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
                  style={MONO}
                >
                  ENVIAR OTRA CANDIDATURA
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-7"
                noValidate={false}
              >
                <div className="grid gap-7 sm:grid-cols-2">
                  <Field id="cf-name" label="Nombre completo">
                    <input id="cf-name" name="user_name" type="text" autoComplete="name" placeholder="Juan García" className={inputCls} required />
                  </Field>
                  <Field id="cf-email" label="Correo electrónico">
                    <input id="cf-email" name="user_email" type="email" autoComplete="email" placeholder="juan@email.com" className={inputCls} required />
                  </Field>
                </div>

                <div className="grid gap-7 sm:grid-cols-2">
                  <Field id="cf-position" label="Puesto de interés">
                    <select
                      id="cf-position"
                      name="position"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className={`${inputCls} appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat`}
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M3 4.5l3 3 3-3' fill='none' stroke='white' stroke-opacity='.6' stroke-width='1.3'/%3E%3C/svg%3E\")",
                      }}
                      required
                    >
                      <option value="" className="bg-defensya-navy">
                        Selecciona un puesto
                      </option>
                      {positions.map((p) => (
                        <option key={p} value={p} className="bg-defensya-navy">
                          {p}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field id="cf-area" label="Área de interés">
                    <select
                      id="cf-area"
                      name="area"
                      defaultValue=""
                      className={`${inputCls} appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat`}
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M3 4.5l3 3 3-3' fill='none' stroke='white' stroke-opacity='.6' stroke-width='1.3'/%3E%3C/svg%3E\")",
                      }}
                      required
                    >
                      <option value="" className="bg-defensya-navy">
                        Selecciona un área
                      </option>
                      {AREAS.map((a) => (
                        <option key={a} value={a} className="bg-defensya-navy">
                          {a}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field id="cf-message" label="Mensaje / motivación">
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={4}
                    placeholder="Cuéntanos por qué quieres unirte al equipo de Defensya…"
                    className={`${inputCls} resize-none`}
                    required
                  />
                </Field>

                {/* CV  */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-[11px] tracking-[0.2em] text-white/50" style={MONO}>
                    Adjuntar CV
                  </span>
                  <label
                    htmlFor="cf-cv"
                    className={`group flex cursor-pointer items-center gap-4 border border-dashed px-5 py-5 transition-colors duration-200 focus-within:border-white/60 ${
                      file ? "border-white/50 bg-white/[0.04]" : "border-white/20 hover:border-white/50"
                    }`}
                  >
                    <input id="cf-cv" type="file" name="my_file" accept=".pdf,.doc,.docx" className="sr-only" onChange={handleFileChange} />
                    <svg
                      aria-hidden
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className={`shrink-0 transition-colors ${file ? "text-white" : "text-white/50 group-hover:text-white"}`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                    <span className="min-w-0">
                      <span className={`block truncate text-[15px] ${file ? "text-white" : "text-white/70"}`}>
                        {file ? file.name : "Seleccionar archivo"}
                      </span>
                      <span className="mt-1 block text-[12px] text-white/40">PDF, DOC o DOCX · máx. {MAX_MB} MB</span>
                    </span>
                  </label>
                  {fileError && (
                    <p role="alert" className="text-[13px] text-red-300">
                      {fileError}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/10 pt-7">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center gap-3 bg-white px-7 py-3.5 text-[12px] tracking-[0.25em] text-defensya-navy transition-opacity hover:opacity-90 disabled:opacity-50"
                    style={{
                      ...MONO,
                      clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                    }}
                  >
                    {status === "sending" ? (
                      <>
                        <span className="h-3 w-3 animate-spin rounded-full border border-defensya-navy/30 border-t-defensya-navy" />
                        ENVIANDO…
                      </>
                    ) : (
                      <>
                        ENVIAR CANDIDATURA
                        <svg aria-hidden width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                          <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p role="alert" className="text-[13px] text-red-300">
                      No se pudo enviar. Inténtalo de nuevo en unos minutos.
                    </p>
                  )}

                  <span className="text-[11px] tracking-[0.15em] text-white/35 sm:ml-auto" style={MONO}>
                    Datos protegidos · RGPD
                  </span>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}