"use client";
import React from "react";
import { useState } from "react";

const ContactView = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
          Conectemos con el <span className="text-blue-600">Futuro</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Estamos a su disposición para consultas sobre ingeniería, auditorías
          de proyectos o colaboración en I+D. Nuestro equipo responderá a su
          solicitud con la máxima confidencialidad.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-8 border-l-4 border-blue-600 pl-6">
                Sede Central
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-500 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">
                      Localización
                    </h4>
                    <p className="text-slate-400">
                      Madrid, España
                      <br />
                      Área de Ingeniería y Desarrollo
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-500 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">
                      Email Corporativo
                    </h4>
                    <p className="text-blue-400 font-mono">info@defensya.com</p>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 grayscale">
              {/* iframe Google Maps */}
              <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 border-2 border-blue-600/30 rounded-full animate-ping absolute" />
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                  Localización Estratégica
                </p>
                <p className="text-blue-500 text-sm font-bold">MADRID HUB</p>
              </div>
            </div>
          </div>

          {/* FORMULARIO Consulta */}
          <div className="bg-slate-900/50 p-8 md:p-12 rounded-3xl border border-slate-800 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-blue-600 outline-none transition-all"
                    placeholder="Nombre completo"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-blue-600 outline-none transition-all"
                  placeholder="email@corporativo.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-blue-600 outline-none transition-all"
                  
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-white focus:border-blue-600 outline-none transition-all"
                  placeholder="Escribenos tu consulta"
                ></textarea>
              </div>

              <button
                className="bg-slate-600 py-4 px-12 rounded-xl "
                type="submit"
              >
                Enviar
              </button>
              {status && <p>{status}</p>}

              <p className="text-[10px] text-slate-500 text-center leading-tight">
                Al enviar este formulario, acepta que DEFENSYA trate sus datos
                para la gestión de su consulta conforme a nuestra política de
                privacidad.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactView;
