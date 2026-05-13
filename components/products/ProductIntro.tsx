"use client";

export default function ProductIntro() {
  return (
    <section className="w-full bg-slate-100 dark:bg-defensya-navy border-b border-white px-6 lg:px-16 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Eyebrow */}
        {/* <div className="flex items-center gap-3 mb-8">
          <span className="w-px h-4 bg-[#0ea5e9]" />
          <span className="font-mono text-[10px] tracking-[0.4em] text-[#0ea5e9] uppercase">
            Catálogo de Productos
          </span>
        </div> */}

        {/* Headline + body in two columns */}
        <div className="grid lg:grid-cols-[1fr_45%] gap-10 lg:gap-20 items-center my-8">
              <h1 className="text-[clamp(2.8rem,7vw,4.6rem)] font-display font-bold leading-[0.95] tracking-tight uppercase ">
              La seguridad del <br />futuro 
            
            se construye con{" "}
            <span className="text-defensya-blue">prevención.</span>
              </h1>

          <p className="text-lg text-gray-600 dark:text-gray-500 leading-relaxed border-l border-[#0ea5e9]/20 pl-6">
          En esta sección, encontrará herramientas avanzadas y sistemas de última generación desarrollados por Defensya para anticiparse a cualquier riesgo. No solo creamos soluciones; entregamos la confianza necesaria para operar en un mundo en constante cambio.
          </p>
        </div>

      </div>
    </section>
  );
}