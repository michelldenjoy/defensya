"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ClipButton } from "../ui/ClipButton";



const EMPRESA = {
  razonSocial: "Defensya Ingeniería Internacional, S.L.",
  cif: "B-83071217",
  domicilio: "Calle Río Sella 31B, Madrid (España)",
  email: "info@defensya.com",
  telefono: "911 721 190",
};

const ULTIMA_ACTUALIZACION = "Noviembre 2026";


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

const REGISTRO = "Inscrita en el Registro Mercantil de Madrid, Tomo 16.745, Folio 190, Hoja M-286045";

const SECCIONES: Seccion[] = [
  {
    id: "titular",
    num: "01",
    title: "Datos identificativos del titular",
    blocks: [
      { t: "p", text: "En cumplimiento del artículo 10 de la LSSI-CE, se informa de los datos del titular de este sitio web:" },
      {
        t: "rows",
        head: ["Dato", "Información"],
        rows: [
          ["Razón social", EMPRESA.razonSocial],
          ["CIF", EMPRESA.cif],
          ["Domicilio social", EMPRESA.domicilio],
          ["Correo electrónico", MAIL],
          ["Teléfono", <A key="tel" href={`tel:+34${EMPRESA.telefono.replace(/\s/g, "")}`}>{EMPRESA.telefono}</A>],
          ["Datos registrales", REGISTRO],
        ],
      },
    ],
  },
  {
    id: "objeto",
    num: "02",
    title: "Objeto y aceptación",
    blocks: [
      { t: "p", text: "Este Aviso Legal regula el acceso y el uso del sitio web de Defensya (en adelante, «la web»)." },
      {
        t: "p",
        text: "La persona que accede a la web adquiere la condición de usuario y acepta las condiciones de este Aviso Legal en la versión publicada en el momento del acceso. Si no está de acuerdo con ellas, debe abstenerse de usar la web.",
      },
      { t: "p", text: "El acceso a la web es gratuito, salvo el coste de la conexión a internet del propio usuario." },
    ],
  },
  {
    id: "uso",
    num: "03",
    title: "Condiciones de uso",
    blocks: [
      {
        t: "p",
        text: "El usuario se compromete a usar la web de forma diligente, conforme a la ley, a este Aviso Legal y a la buena fe. En particular, se compromete a no:",
      },
      {
        t: "list",
        items: [
          { text: "Usar la web o sus contenidos con fines ilícitos o contrarios a los derechos de Defensya o de terceros." },
          { text: "Intentar acceder a zonas restringidas de los sistemas de Defensya o de terceros, ni alterar su funcionamiento." },
          {
            text: "Introducir o difundir virus, programas maliciosos o cualquier elemento que pueda dañar la web o los equipos de otros usuarios.",
          },
          { text: "Reproducir, copiar o distribuir los contenidos de la web salvo en los casos permitidos en el apartado 04." },
          { text: "Enviar a través de los formularios información falsa o datos de terceros sin su autorización." },
        ],
      },
      {
        t: "p",
        text: "Defensya puede restringir el acceso a la web a quien incumpla estas condiciones, sin perjuicio de las acciones legales que correspondan.",
      },
    ],
  },
  {
    id: "propiedad",
    num: "04",
    title: "Propiedad intelectual e industrial",
    blocks: [
      {
        t: "p",
        text: "Todos los contenidos de la web (textos, fotografías, vídeos, gráficos, diseño, código fuente, logotipos y marcas) son propiedad de Defensya o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial.",
      },
      {
        t: "p",
        text: "Haptix® es una marca de Defensya. Las marcas y nombres comerciales de terceros que aparecen en la web se citan solo a efectos informativos y pertenecen a sus respectivos titulares.",
      },
      {
        t: "p",
        text: "Las patentes mencionadas en la web se citan con fines informativos. Su consulta no otorga ningún derecho de uso sobre las invenciones que protegen.",
      },
      {
        t: "p",
        text: "Queda prohibida la reproducción, distribución, comunicación pública o transformación de los contenidos sin autorización expresa y por escrito de Defensya, salvo para uso personal y privado o cuando la ley lo permita. Se permite enlazar a la web siempre que el enlace no dé a entender una relación con Defensya que no existe.",
      },
    ],
  },
  {
    id: "informacion",
    num: "05",
    title: "Carácter de la información publicada",
    blocks: [
      {
        t: "p",
        text: "La información de la web sobre productos, sistemas, especificaciones técnicas y proyectos es general y divulgativa. Puede modificarse sin previo aviso y no constituye:",
      },
      {
        t: "list",
        items: [
          {
            text: "Una oferta comercial vinculante ni un compromiso contractual. Las condiciones de cada suministro se fijan en el contrato correspondiente.",
          },
          {
            text: "Documentación técnica de producto ni información sujeta a control de exportación o a clasificación de seguridad.",
          },
        ],
      },
      {
        t: "p",
        text: "Las referencias a programas, plataformas o clientes se hacen con fines informativos y no implican el respaldo de dichos terceros a la web.",
      },
    ],
  },
  {
    id: "responsabilidad",
    num: "06",
    title: "Responsabilidad",
    blocks: [
      {
        t: "p",
        text: "Defensya trabaja para que la web funcione correctamente y su información sea exacta y esté actualizada. Aun así, en la medida en que la ley lo permite, no se hace responsable de:",
      },
      {
        t: "list",
        items: [
          {
            text: "Interrupciones, errores o falta de disponibilidad de la web por mantenimiento, fallos técnicos o causas ajenas a su control.",
          },
          {
            text: "Daños causados por virus o programas maliciosos que, pese a las medidas de seguridad adoptadas, pudieran afectar a los equipos del usuario.",
          },
          { text: "Errores u omisiones en los contenidos, que se corregirán en cuanto se detecten." },
          { text: "Decisiones que el usuario tome a partir de la información de la web sin confirmarla con Defensya." },
          { text: "El uso indebido de la web por parte de los usuarios." },
        ],
      },
    ],
  },
  {
    id: "enlaces",
    num: "07",
    title: "Enlaces a sitios de terceros",
    blocks: [
      {
        t: "p",
        text: "La web puede incluir enlaces a páginas de terceros, como bases de datos de patentes u organismos públicos. Defensya no controla esas páginas y no se responsabiliza de su contenido, disponibilidad ni políticas de privacidad.",
      },
      {
        t: "p",
        text: "Si Defensya tiene conocimiento efectivo de que un enlace dirige a contenidos ilícitos, lo retirará con la mayor rapidez posible, conforme al artículo 17 de la LSSI-CE.",
      },
    ],
  },
  {
    id: "datos",
    num: "08",
    title: "Protección de datos y cookies",
    highlight: true,
    blocks: [
      {
        t: "p",
        text: (
          <>
            El tratamiento de los datos personales que el usuario facilite a través de la web se explica en la{" "}
            <A href="/privacidad">Política de Privacidad</A>.
          </>
        ),
      },
      {
        t: "p",
        text: (
          <>
            El uso de cookies y tecnologías similares se explica en la <A href="/cookies">Política de Cookies</A>.
          </>
        ),
      },
    ],
  },
  {
    id: "legislacion",
    num: "09",
    title: "Legislación aplicable, jurisdicción y modificaciones",
    blocks: [
      { t: "p", text: "Este Aviso Legal se rige por la legislación española." },
      {
        t: "p",
        text: "Para cualquier controversia relacionada con la web, las partes se someten a los juzgados y tribunales de Madrid, salvo que la ley atribuya la competencia a otro tribunal, como ocurre cuando el usuario actúa como consumidor.",
      },
      {
        t: "p",
        text: "Defensya puede modificar este Aviso Legal para adaptarlo a cambios legales o de la propia web. La versión vigente es siempre la publicada en esta página, con su fecha de actualización.",
      },
    ],
  },
];


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

/* COMPONENTE */

export default function AvisoLegal() {
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
      {/* ══ PORTADA ═*/}
      <section className="pb-16 pt-36 lg:pb-24 lg:pt-44">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-[12px] tracking-[0.2em] text-white/45" style={MONO}>
            Información legal
          </p>
          <h1 className="mt-8 text-[clamp(2.6rem,6vw,5.75rem)] font-semibold uppercase leading-[0.9] tracking-tight">
            Aviso
            <br />
            <span className="font-light text-white/45">legal</span>
          </h1>
          <p className="mt-10 text-[12px] tracking-[0.15em] text-white/45" style={MONO}>
            Última actualización: {ULTIMA_ACTUALIZACION}
          </p>
        </div>
      </section>

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
                  <div className="mt-10 flex flex-wrap gap-4">
                    <ClipButton href="/privacidad" variant="primary">
                      Política de privacidad
                    </ClipButton>
                    <ClipButton href="/cookies" variant="outline">
                      Política de cookies
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