"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import CyberBackground from "@/components/ui/CyberBackground";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = "" | "sending" | "success" | "error";

function Field({
  num,
  label,
  children,
}: {
  num: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex p-4 flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="text-[12px] font-mono text-defensya-blue tracking-widest">
          {num}
        </span>
        <label className="text-[12px] font-mono tracking-[0.25em] text-white/80 uppercase">
          {label}
        </label>
      </div>
      {children}
    </div>
  );
}

const inputCls = [
  "w-full bg-transparent",
  "border-b border-white/[0.12]",
  "px-4 py-2.5 text-sm text-white",
  "placeholder:text-white/20",
  "focus:outline-none focus:border-defensya-blue",
  "transition-colors duration-300",
].join(" ");

export default function ContactView() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      console.error("Error en el sistema Quandum Email:", error);
      setStatus("error");
    }
  };

  return (
    <main
      className="relative w-full min-h-screen bg-defensya-navy text-white overflow-hidden"
      style={{ fontFamily: "var(--font-body, 'DM Sans', sans-serif)" }}
    >
      <CyberBackground />

      <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center">
        <div className="absolute w-200 h-200 rounded-full border border-white/2.5" />
        <div className="absolute w-125 h-125 rounded-full border border-white/2.5" />
        <div className="absolute w-full h-px bg-white/2.5" />
        <div className="absolute w-px h-full bg-white/2.5" />
      </div>
      <div
        className="pointer-events-none absolute top-0 right-0 w-125 h-125
                      bg-[radial-gradient(ellipse_at_top_right,#1E40AF14,transparent_70%)]"
      />

      {/* <div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-16 pb-10
                      border-b border-white/[0.07]"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-defensya-sky" />
            <span className="text-[12px] font-semibold tracking-[0.3em] text-defensya-sky uppercase">
              Canal de contacto
            </span>
          </div>
          <div className="flex items-center gap-2"></div>
        </div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 ">
        <div className="grid lg:grid-cols-[1fr_58%] min-h-[80vh]">
          {/* ── LEFT ─────── */}
          <div
            className="flex flex-col justify-between
                          py-16 lg:py-24 lg:pr-16
                          border-b lg:border-b-0 lg:border-r border-white/[0.07]"
          >
            <div>
              <h1
                className="text-[clamp(3.5rem,9vw,8rem)] font-bold uppercase
                           leading-[0.88] tracking-tight text-white mb-8"
                style={{
                  fontFamily:
                    "var(--font-display, 'Barlow Condensed', sans-serif)",
                }}
              >
                Contacta con
                <br />
                <span className="text-defensya-blue">defensya</span>
              </h1>
              <div className="bg-black/5 backdrop-blur-xs border border-white/10 rounded-xl p-8 lg:p-10">
              <p className="text-sm text-white/50 leading-relaxed max-w-xs">
                <strong className="text-white">
                  Hablemos de soluciones técnicas.{" "}
                </strong>
                <br />
                Si buscas asesoría en ingeniería, auditorías especializadas o
                alianzas estratégicas en I+D, nuestro equipo está listo para
                colaborar. Garantizamos absoluta confidencialidad en el
                tratamiento de su información.
              </p>
              </div>
            </div>

            {/* INFORMACION DE CONTACTO */}
            <div className="mt-14 flex flex-col gap-0 border-t border-white/[0.07]">
              {[
                {
                  label: "Localización",
                  value: "Madrid, España",
                  sub: "Área de Ingeniería y Desarrollo",
                },
                {
                  label: "Email corporativo",
                  value: "info@defensya.com",
                  mono: true,
                },
              ].map(({ label, value, sub, mono }) => (
                <div key={label} className="py-5 border-b border-white/[0.07]">
                  <p className="text-[12px] font-mono tracking-[0.3em] text-white/25 uppercase mb-1.5">
                    {label}
                  </p>
                  <p
                    className={`text-md font-medium ${
                      mono ? "font-mono text-defensya-sky" : "text-white"
                    }`}
                  >
                    {value}
                  </p>
                  {sub && <p className="text-xs text-white/25 mt-0.5">{sub}</p>}
                </div>
              ))}

              <div className="mt-6 relative h-80  border border-white/[0.07] overflow-hidden">
                <iframe
                  title="Mapa Defensya"
                  className="w-full h-full opacity-50 hover:opacity-70 transition-opacity duration-500"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5819.323582690104!2d-3.7953016506748107!3d40.449400198004994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4186566a9574c1%3A0x4dfcbbb5ac86af1a!2sC.%20del%20R%C3%ADo%20Sella%2C%2031B%2C%20Moncloa%20-%20Aravaca%2C%2028023%20Madrid!5e1!3m2!1ses!2ses!4v1773317498925!5m2!1ses!2ses"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* ── DERECHA FORM ──────── */}
          <div className="py-16 mx-auto lg:py-24 lg:pl-16">
            <div className="bg-black/10 backdrop-blur-xs border border-white/10 rounded-xl p-8 lg:p-10">
              <div className="flex items-start justify-between mb-12">
                <div>
                  <p className="text-[12px] font-mono tracking-[0.3em] text-white/25 uppercase mb-1.5">
                    Formulario
                  </p>
                  <h2
                    className="text-3xl  font-bold uppercase leading-none tracking-tight"
                    style={{
                      fontFamily:
                        "var(--font-display, 'Barlow Condensed', sans-serif)",
                    }}
                  >
                    Nueva consulta
                  </h2>
                </div>

                {/* esquinas */}
                <div className="relative w-10 h-10 shrink-0 hidden sm:block mt-1">
                  <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-defensya-blue/90" />
                  <span className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-defensya-blue/90" />
                  <span className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-defensya-blue/90" />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-defensya-blue/90" />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-20 flex flex-col items-center justify-center text-center space-y-6 border border-defensya-blue/20 bg-defensya-blue/5 rounded-sm"
                  >
                    <div className="w-16 h-16 rounded-full border-2 border-defensya-blue flex items-center justify-center mb-4">
                      <svg
                        className="w-8 h-8 text-defensya-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold uppercase tracking-tight font-display">
                        Mensaje Recibido
                      </h3>
                      <p className="text-white/60 text-sm max-w-sm mx-auto leading-relaxed">
                        Gracias por contactar con nuestro equipo. Su consulta ha
                        sido procesada correctamente. Le responderemos a la
                        mayor brevedad posible.
                      </p>
                    </div>

                    <button
                      onClick={() => setStatus("")}
                      className="text-[10px] font-mono text-defensya-blue uppercase tracking-[0.2em] hover:text-white transition-colors"
                    >
                      [ Enviar otro mensaje ]
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div className="grid sm:grid-cols-2 gap-8">
                      <Field num="01" label="Nombre completo">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Juan García"
                          className={inputCls}
                        />
                      </Field>
                      <Field num="02" label="Correo electrónico">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="email@corporativo.com"
                          className={inputCls}
                        />
                      </Field>

                      <Field num="03" label="Asunto">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="ej: Consulta sobre sistemas de visión"
                          className={inputCls}
                        />
                      </Field>
                      <Field num="04" label="Mensaje">
                        <textarea
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Describe tu consulta, proyecto o propuesta de colaboración..."
                          className={inputCls + " resize-none"}
                        />
                      </Field>
                    </div>
                    <div className="pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                      <div className="flex items-center gap-5 shrink-0">
                        {status === "error" && (
                          <p className="text-[10px] font-mono text-red-400 tracking-wide">
                            Error de conexión — intente de nuevo
                          </p>
                        )}
                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="px-8 py-3.5 bg-defensya-blue text-white text-xs tracking-widest uppercase font-medium hover:bg-defensya-blue/80 transition-colors disabled:opacity-40"
                        >
                          {status === "sending"
                            ? "Procesando..."
                            : "Enviar consulta"}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
