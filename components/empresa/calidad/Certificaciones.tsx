import Image from "next/image";
import Link from "next/link";
import { ClipButton } from "@/components/home/HeroSection";

export default function Certificaciones() {
  return (
    <>
      <section
        className="px-6 lg:px-16 py-20 bg-white dark:bg-black/40 border-t border-gray-200 dark:border-white/[0.07]"
        style={{ fontFamily: "'Share Tech Mono', monospace" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_40%] gap-12 items-center border-b border-gray-200 dark:border-white/[0.07] pb-14 mb-14">
            <div>
              <h2 className="text-[clamp(2rem,4vw,6.5rem)] font-bold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                Certificado <span className="text-defensya-blue">Oficial</span>
              </h2>
            </div>
            <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed lg:pb-1">
              Garantizamos la excelencia operativa a través del cumplimiento
              estricto de estándares internacionales de calidad y gestión,
              auditados y verificados por organismos independientes.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1fr] border border-gray-200 dark:border-white/[0.07]">
            {/* LEFT */}
            <div className="flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-white/[0.07] p-8 lg:p-12">
              <div className="flex items-start gap-6 mb-10">
                <div className="relative w-20 h-20 shrink-0 border border-gray-200 dark:border-white/1 p-3">
                  <Image
                    src="/images/ISO9001.png"
                    alt="ISO 9001:2015"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="pt-1">
                  <p className="text-[12px] font-semibold tracking-widest text-defensya-blue uppercase mb-1">
                    Sistema de Gestión de la Calidad
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold uppercase leading-none tracking-tight text-gray-900 dark:text-white">
                    ISO 9001
                    <br />
                    <span className="text-defensya-blue">:2015</span>
                  </h3>
                </div>
              </div>

              <p className="text-md text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
                Certificación que avala nuestra capacidad para proporcionar
                productos y servicios que satisfacen los requisitos del cliente
                y la normativa legal aplicable, con foco en la mejora continua
                del sistema de gestión.
              </p>

              <div className="border-t border-gray-200 dark:border-white/[0.07]">
                {[
                  { label: "Norma", value: "ISO 9001:2015" },
                  {
                    label: "Alcance",
                    value: "Ingeniería electrónica y telecomunicación",
                  },
                  { label: "Estado", value: "Certificado vigente" },
                  {
                    label: "Auditoría",
                    value: "Organismo externo independiente",
                  },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-white/6"
                  >
                    <span className="text-[13px] tracking-widest text-gray-400 dark:text-gray-500 uppercase">
                      {label}
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white text-right max-w-[55%]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <ClipButton
                  href="/doc/ISO9001.pdf"
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Certificado
                </ClipButton>
                <ClipButton href="/doc/ISO9001.pdf" variant="outline">
                  Descargar PDF
                </ClipButton>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col bg-defensya-navy p-8 lg:p-12">
              <div className="mb-6 pb-6">
                <p className="text-[12px] font-mono tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase mb-3">
                  Compromiso
                </p>
                <blockquote className="text-base lg:text-lg text-white leading-relaxed italic">
                  "Trabajamos bajo los más estrictos estándares de la industria
                  aeroespacial y de defensa para asegurar la integridad de cada
                  proyecto."
                </blockquote>
              </div>

              <p className="text-[14px] font-mono tracking-[0.3em] text-gray-300 dark:text-gray-500 uppercase mb-3">
                Pilares del sistema
              </p>

              <div className="flex flex-col gap-0 border-t border-white/8 flex-1">
                {[
                  {
                    num: "01",
                    label: "Trazabilidad total",
                    desc: "Registro y control de cada proceso productivo, desde el diseño hasta la entrega al cliente.",
                  },
                  {
                    num: "02",
                    label: "Auditorías periódicas",
                    desc: "Revisiones internas y externas programadas que verifican el cumplimiento del sistema.",
                  },
                  {
                    num: "03",
                    label: "Control de no conformidades",
                    desc: "Detección, análisis y corrección sistemática de desviaciones en productos y procesos.",
                  },
                  {
                    num: "04",
                    label: "Validación de proveedores",
                    desc: "Evaluación y seguimiento continuo de la cadena de suministro bajo criterios de calidad certificados.",
                  },
                ].map(({ num, label, desc }) => (
                  <div
                    key={num}
                    className="flex gap-5 py-4 border-b border-white/6 group hover:bg-white/3 transition-colors -mx-2 px-2"
                  >
                    <span className="font-mono text-[12px] text-defensya-steel tracking-widest shrink-0 pt-0.5 w-6">
                      {num}
                    </span>
                    <div>
                      <p className="text-md font-semibold text-white mb-0.5 uppercase tracking-wide">
                        {label}
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ COMPROMISO — pantalla completa ═══════════════════════ */}
      <div className="relative overflow-hidden h-[420px] w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/turbine.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(11, 31, 56, 0.82)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-defensya-blue/60 via-defensya-blue/20 to-transparent" />

        <div className="relative z-10 h-full px-5 sm:px-8 lg:px-16 py-12 sm:py-16 max-w-7xl mx-auto flex flex-col justify-between">


          <div>
            <span
              className="pointer-events-none select-none font-mono font-black hidden sm:block leading-none mb-2"
              style={{ fontSize: "5rem", color: "rgba(255,255,255,0.04)" }}
            >
              DSY
            </span>
            <p className="text-md sm:text-base lg:text-xl text-gray-300 leading-relaxed font-light max-w-5xl">
              No solo fabricamos tecnología;{" "}
              <span className="text-white font-medium">
                entregamos la fiabilidad operativa necesaria para que
                organizaciones globales operen en entornos críticos.
              </span>{" "}
              En{" "}
              <span className="text-defensya-steel font-semibold">
                Defensya
              </span>
              , la excelencia técnica se rige por estándares de calidad
              internacionales, garantizando la seguridad en el futuro de la
              exploración y la defensa global.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <div className="h-px w-10 bg-defensya-blue/50" />
              <span
                style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgb(107 114 128)",
                }}
              >
                Defensya · Ingeniería Internacional
              </span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-defensya-blue/30 via-transparent to-transparent" />
      </div>
    </>
  );
}
