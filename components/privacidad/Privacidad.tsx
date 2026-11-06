"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ClipButton } from "../ui/ClipButton";
/* ─────────────────────────────────────────────────────────────
   DATOS DE LA EMPRESA
   ───────────────────────────────────────────────────────────── */

const EMPRESA = {
  razonSocial: "Defensya Ingeniería Internacional, S.L.",
  cif: "B-83071217",
  domicilio: "Calle Río Sella 31B, Madrid (España)",
  email: "info@defensya.com",
  telefono: "911 721 190",
};

const ULTIMA_ACTUALIZACION = "Noviembre 2026";

/* ─────────────────────────────────────────────────────────────
   PIEZAS DE TEXTO
   ───────────────────────────────────────────────────────────── */

const MONO = { fontFamily: "'Share Tech Mono', monospace" };
const CUT = "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)";

function A({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
    >
      {children}
    </a>
  );
}

const MAIL = <A href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</A>;

type Bloque =
  | { t: "p"; text: ReactNode }
  | { t: "list"; items: { label?: string; text: ReactNode }[] }
  | { t: "rows"; head: [string, string]; rows: [ReactNode, ReactNode][] };

type Seccion = { id: string; num: string; title: string; blocks: Bloque[]; highlight?: boolean };

/* ─────────────────────────────────────────────────────────────
   CONTENIDO (texto revisado)
   ───────────────────────────────────────────────────────────── */

const SECCIONES: Seccion[] = [
  {
    id: "responsable",
    num: "01",
    title: "Responsable del tratamiento",
    blocks: [
      {
        t: "p",
        text: `El responsable de los datos personales que se recogen en esta web es ${EMPRESA.razonSocial} (en adelante, «Defensya»).`,
      },
      {
        t: "rows",
        head: ["Dato", "Información"],
        rows: [
          ["Razón social", EMPRESA.razonSocial],
          ["CIF", EMPRESA.cif],
          ["Domicilio", EMPRESA.domicilio],
          ["Correo de privacidad", MAIL],
          ["Teléfono", <A key="tel" href={`tel:+34${EMPRESA.telefono.replace(/\s/g, "")}`}>{EMPRESA.telefono}</A>],
        ],
      },
    ],
  },
  {
    id: "datos",
    num: "02",
    title: "Qué datos tratamos",
    blocks: [
      { t: "p", text: "Defensya trata solo los datos que usted nos facilita y los que se generan al navegar por la web:" },
      {
        t: "rows",
        head: ["Canal", "Datos"],
        rows: [
          [
            "Navegación por la web",
            "Dirección IP, tipo de navegador, sistema operativo, páginas visitadas y datos de uso, mediante cookies y tecnologías similares (ver Política de Cookies).",
          ],
          ["Formulario de contacto", "Nombre, correo electrónico y los datos que usted incluya en su mensaje."],
          [
            "Formulario de candidaturas",
            "Nombre, correo electrónico, puesto y área de interés, mensaje de motivación y currículum (CV) con los datos que contenga.",
          ],
          ["Boletines e informes técnicos", "Nombre y correo electrónico, solo si usted se suscribe."],
        ],
      },
      {
        t: "p",
        text: "No solicitamos categorías especiales de datos, como salud, ideología o religión. Le pedimos que no las incluya en su CV ni en sus mensajes.",
      },
      {
        t: "p",
        text: "Los campos marcados como obligatorios son necesarios para atender su solicitud. Si no los facilita, no podremos tramitarla.",
      },
    ],
  },
  {
    id: "finalidades",
    num: "03",
    title: "Finalidades y base jurídica",
    blocks: [
      { t: "p", text: "Cada uso de sus datos tiene su propia base legal, según el artículo 6 del RGPD:" },
      {
        t: "rows",
        head: ["Finalidad", "Base jurídica"],
        rows: [
          [
            "Responder a las consultas del formulario de contacto",
            "Su consentimiento al enviar el formulario (art. 6.1.a) y, si la consulta es comercial, la aplicación de medidas precontractuales (art. 6.1.b).",
          ],
          [
            "Gestionar candidaturas y procesos de selección",
            "Su consentimiento como candidato (art. 6.1.a) y la aplicación de medidas precontractuales (art. 6.1.b).",
          ],
          [
            "Enviar boletines, informes técnicos y comunicaciones comerciales",
            "Su consentimiento expreso (art. 6.1.a y art. 21 de la LSSI-CE).",
          ],
          [
            "Garantizar la seguridad y el funcionamiento técnico de la web",
            "Interés legítimo de Defensya en proteger sus sistemas (art. 6.1.f).",
          ],
          [
            "Analizar el uso de la web para mejorarla",
            "Su consentimiento a través del panel de cookies (art. 6.1.a y art. 22.2 de la LSSI-CE).",
          ],
          [
            "Cumplir obligaciones legales, incluidas las normas de defensa y seguridad nacional",
            "Obligación legal (art. 6.1.c).",
          ],
        ],
      },
      {
        t: "p",
        text: "No tomamos decisiones automatizadas ni elaboramos perfiles que produzcan efectos jurídicos sobre usted.",
      },
      {
        t: "p",
        text: "Puede retirar su consentimiento en cualquier momento. La retirada no afecta a los tratamientos realizados antes.",
      },
    ],
  },
  {
    id: "conservacion",
    num: "04",
    title: "Plazos de conservación",
    blocks: [
      { t: "p", text: "Guardamos sus datos solo el tiempo necesario para cada finalidad:" },
      {
        t: "rows",
        head: ["Datos", "Plazo"],
        rows: [
          [
            "Consultas de contacto",
            "El tiempo necesario para responder y, después, durante los plazos legales de prescripción de posibles responsabilidades.",
          ],
          [
            "Candidaturas y CV",
            "Mientras dure el proceso de selección y, para futuras vacantes, un máximo de 12 meses desde su recepción, salvo que retire antes su consentimiento.",
          ],
          ["Boletines y comunicaciones comerciales", "Hasta que se dé de baja."],
          ["Datos de navegación y cookies", "Los plazos indicados en la Política de Cookies."],
          ["Datos sujetos a obligaciones legales", "Los plazos que marque la ley aplicable."],
        ],
      },
      {
        t: "p",
        text: "Terminados estos plazos, los datos se suprimen o, cuando la ley lo exige, se bloquean y se conservan solo a disposición de jueces, tribunales y autoridades competentes.",
      },
    ],
  },
  {
    id: "destinatarios",
    num: "05",
    title: "Destinatarios y proveedores",
    blocks: [
      { t: "p", text: "Defensya no vende ni cede sus datos a terceros con fines comerciales." },
      {
        t: "p",
        text: "Para prestar el servicio trabajamos con proveedores que tratan datos en nuestro nombre, con un contrato que les obliga a protegerlos (art. 28 del RGPD):",
      },
      {
        t: "rows",
        head: ["Proveedor", "Servicio"],
        rows: [
          ["Proveedor de alojamiento web", "Alojamiento de la web"],
          ["EmailJS", "Envío por correo de los formularios"],
          ["Cloudinary", "Almacenamiento de los CV adjuntos"],
          ["Servicios de analítica web", "Estadísticas de uso, solo si usted las acepta en el panel de cookies"],
        ],
      },
      {
        t: "p",
        text: "También pueden acceder a los datos nuestros asesores profesionales (legales, fiscales o técnicos), sujetos a deber de confidencialidad.",
      },
      {
        t: "p",
        text: "Solo comunicaremos datos a terceros cuando una ley lo exija, por ejemplo a autoridades públicas, juzgados u organismos de defensa y seguridad nacional. En caso de fusión, adquisición o liquidación de la empresa, los datos podrán transmitirse con las garantías legales correspondientes.",
      },
    ],
  },
  {
    id: "transferencias",
    num: "06",
    title: "Transferencias internacionales",
    blocks: [
      {
        t: "p",
        text: "Algunos de nuestros proveedores pueden tratar datos fuera del Espacio Económico Europeo. Cuando ocurra, la transferencia se apoyará en una de estas garantías:",
      },
      {
        t: "list",
        items: [
          {
            text: "Una decisión de adecuación de la Comisión Europea, incluido el Marco de Privacidad de Datos UE-EE. UU. para las empresas adheridas.",
          },
          { text: "Cláusulas contractuales tipo aprobadas por la Comisión Europea (art. 46 del RGPD)." },
        ],
      },
      { t: "p", text: <>Puede pedir una copia de estas garantías escribiendo a {MAIL}.</> },
    ],
  },
  {
    id: "derechos",
    num: "07",
    title: "Sus derechos",
    highlight: true,
    blocks: [
      { t: "p", text: "Usted puede ejercer en cualquier momento estos derechos sobre sus datos:" },
      {
        t: "list",
        items: [
          { label: "Acceso", text: "saber qué datos suyos tratamos." },
          { label: "Rectificación", text: "corregir datos inexactos o incompletos." },
          { label: "Supresión", text: "pedir que se borren." },
          { label: "Oposición", text: "oponerse a un tratamiento concreto." },
          { label: "Limitación", text: "pedir que se restrinja su uso." },
          { label: "Portabilidad", text: "recibir sus datos en un formato estructurado." },
          { label: "Retirada del consentimiento", text: "cuando el tratamiento se base en él." },
        ],
      },
      {
        t: "p",
        text: (
          <>
            Para ejercerlos, escriba a {MAIL} o por correo postal a {EMPRESA.domicilio}, indicando «Protección de datos» y
            acreditando su identidad. Responderemos en el plazo de un mes, ampliable dos meses más en casos complejos.
          </>
        ),
      },
      {
        t: "p",
        text: "Puede darse de baja de las comunicaciones comerciales en cualquier momento con el enlace que incluye cada envío o escribiéndonos.",
      },
      {
        t: "p",
        text: (
          <>
            Si considera que no hemos atendido bien su solicitud, puede presentar una reclamación ante la Agencia Española de
            Protección de Datos (<A href="https://www.aepd.es">www.aepd.es</A>).
          </>
        ),
      },
    ],
  },
  {
    id: "otras",
    num: "08",
    title: "Otras informaciones",
    blocks: [
      {
        t: "list",
        items: [
          {
            label: "Seguridad",
            text: "Aplicamos medidas técnicas y organizativas adecuadas al riesgo para proteger sus datos frente a pérdida, acceso no autorizado o alteración (art. 32 del RGPD).",
          },
          {
            label: "Menores de edad",
            text: "Esta web no está dirigida a menores de 14 años y no recogemos conscientemente sus datos (art. 7 de la LOPDGDD).",
          },
          {
            label: "Exactitud de los datos",
            text: "Usted garantiza que los datos que nos facilita son ciertos. Si nos facilita datos de otras personas, debe haberles informado antes.",
          },
          {
            label: "Cookies",
            text: (
              <>
                El uso de cookies se explica en nuestra <A href="/cookies">Política de Cookies</A>. Las cookies que no son
                técnicas solo se activan si usted las acepta en el panel de cookies.
              </>
            ),
          },
          {
            label: "Cambios en esta política",
            text: "Podemos actualizar esta política para adaptarla a cambios legales o de nuestros servicios. Publicaremos siempre la versión vigente en esta página, con su fecha de actualización.",
          },
        ],
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   RENDER DE BLOQUES
   ───────────────────────────────────────────────────────────── */

function RenderBloque({ b }: { b: Bloque }) {
  if (b.t === "p") return <p className="max-w-2xl text-[17px] leading-relaxed text-white/70">{b.text}</p>;

  if (b.t === "list")
    return (
      <ul className="max-w-2xl border-t border-white/10">
        {b.items.map((it, i) => (
          <li key={i} className="flex gap-4 border-b border-white/10 py-4">
            <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-white/50" />
            <p className="text-[16px] leading-relaxed text-white/70">
              {it.label && <span className="text-white">{it.label}: </span>}
              {it.text}
            </p>
          </li>
        ))}
      </ul>
    );

  return (
    <div className="max-w-3xl border-t border-white/15">
      <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-8 border-b border-white/10 py-3 md:grid">
        {b.head.map((h) => (
          <span key={h} className="text-[11px] tracking-[0.2em] text-white/40" style={MONO}>
            {h}
          </span>
        ))}
      </div>
      <dl>
        {b.rows.map(([k, v], i) => (
          <div
            key={i}
            className="grid gap-1.5 border-b border-white/10 py-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:gap-8"
          >
            <dt className="text-[15px] leading-snug text-white">{k}</dt>
            <dd className="text-[15px] leading-relaxed text-white/65">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   COMPONENTE
   ───────────────────────────────────────────────────────────── */

export default function Privacidad() {
  const [active, setActive] = useState(SECCIONES[0].id);

  /* Marca en el índice la sección que se está leyendo */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    SECCIONES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <main className="w-full overflow-x-clip bg-defensya-navy text-white">
      {/* ══ PORTADA ══════════════════════════════════════════════ */}
      <section className="pb-16 pt-36 lg:pb-24 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
            Información legal
          </p>
          <h1 className="mt-8 text-[clamp(2.6rem,6vw,5.75rem)] font-semibold uppercase leading-[0.9] tracking-tight">
            Política de
            <br />
            <span className="font-light text-white/45">privacidad</span>
          </h1>
          <p className="mt-10 text-[12px] tracking-[0.15em] text-white/45" style={MONO}>
            Última actualización: {ULTIMA_ACTUALIZACION}
          </p>
        </div>
      </section>

      {/* ══ CUERPO: índice + contenido ═══════════════════════════ */}
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[18rem_1fr] lg:gap-20 lg:py-24">
          {/* Índice */}
          <nav aria-label="Contenidos" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
              Contenidos
            </p>
            <ol className="mt-5 border-t border-white/10">
              {SECCIONES.map((s) => {
                const on = active === s.id;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      aria-current={on ? "location" : undefined}
                      className="group relative grid grid-cols-[2.25rem_1fr] border-b border-white/10 py-3.5 outline-none focus-visible:bg-white/[0.04]"
                    >
                      <span
                        className={`absolute inset-y-0 left-0 w-px origin-top bg-white transition-transform duration-500 ${
                          on ? "scale-y-100" : "scale-y-0"
                        }`}
                      />
                      <span className={`pl-3 pt-0.5 text-[11px] transition-colors ${on ? "text-white/70" : "text-white/30"}`} style={MONO}>
                        {s.num}
                      </span>
                      <span className={`text-[14px] leading-snug transition-colors ${on ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                        {s.title}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>

          {/* Contenido */}
          <div className="min-w-0">
            {SECCIONES.map((s) => (
              <section
                key={s.id}
                id={s.id}
                aria-labelledby={`${s.id}-title`}
                className={
                  s.highlight
                    ? "my-14 scroll-mt-28 border border-white/10 bg-[#0d2340] p-6 sm:p-10 lg:p-12"
                    : "scroll-mt-28 border-b border-white/10 py-14 first:pt-0 lg:py-16"
                }
                style={s.highlight ? { clipPath: CUT } : undefined}
              >
                <p className="text-[13px] text-white/40" style={MONO}>
                  {s.num}
                </p>
                <h2 id={`${s.id}-title`} className="mt-3 text-[clamp(1.75rem,3vw,2.6rem)] font-light leading-[1.05] tracking-tight">
                  {s.title}
                </h2>
                <div className="mt-8 space-y-6">
                  {s.blocks.map((b, i) => (
                    <RenderBloque key={i} b={b} />
                  ))}
                </div>
                {s.highlight && (
                  <div className="mt-10">
                    <ClipButton href={`mailto:${EMPRESA.email}?subject=Protecci%C3%B3n%20de%20datos`} variant="primary">
                      Ejercer mis derechos
                    </ClipButton>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}