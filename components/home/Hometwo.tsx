import Link from "next/link";

export default function Hometwo() {
  return (
    <main className="w-full bg-white text-gray-900">
      {/* HERO */}
      <section className="w-full py-28 px-6 lg:px-16 border-b">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Tecnología aeroespacial avanzada
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Defensya desarrolla tecnologías avanzadas para los sistemas
              aeroespaciales del futuro. Combinamos visión artificial,
              electrónica de alto rendimiento y software inteligente para
              diseñar soluciones que mejoran la percepción, automatización y
              control de plataformas aéreas en entornos operativos exigentes.
              Nuestro trabajo abarca desde sistemas de visión embarcados hasta
              tecnologías de automatización para el reabastecimiento Air-to-Air,
              contribuyendo a operaciones más seguras, eficientes y autónomas.
            </p>

            <div className="flex gap-4">
              <Link
                href="/innovacion"
                className="px-6 py-3 rounded-xl bg-black text-white hover:opacity-90 transition"
              >
                Nuestras Tecnologías
              </Link>

              <Link
                href="/empresa/quienes-somos"
                className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition"
              >
                Sobre Defensya
              </Link>
            </div>
          </div>

          <div className="h-105 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
            Imagen / Vídeo
          </div>
        </div>
      </section>

   
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Qué Hacemos
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Defensya es una empresa tecnológica especializada en sistemas
            avanzados de visión, sensorización aérea, automatización e
            ingeniería electrónica. Nuestras soluciones combinan hardware,
            software y procesamiento inteligente para mejorar la percepción, la
            toma de decisiones y el rendimiento operativo en entornos
            aeroespaciales exigentes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">
              Sistemas Avanzados de Visión
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sistemas de visión y percepción embarcados diseñados para mejorar
              la conciencia situacional y las capacidades operativas de
              aeronaves modernas.
            </p>
          </div>

          <div className="p-8 rounded-2xl border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">
              Automatización del Reabastecimiento Aire-Aire
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tecnologías que permiten automatizar las operaciones de
              reabastecimiento aéreo, mejorando la precisión, la eficiencia y la
              seguridad.
            </p>
          </div>

          <div className="p-8 rounded-2xl border hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">
              Sistemas Electrónicos y Embebidos
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Desarrollo de sistemas electrónicos de alto rendimiento, sensores
              y software embebido para aplicaciones aeroespaciales, de defensa e
              industriales.
            </p>
          </div>
        </div>
      </section>

      {/* INNOVACION */}
      <section className="py-24 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Impulsando el futuro del reabastecimiento Air-to-Air
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Defensya desarrolla tecnologías que permiten la automatización de
              las operaciones de reabastecimiento aéreo, mejorando la precisión,
              la seguridad y la eficiencia operativa de las plataformas aéreas
              de nueva generación.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white border">
              <h4 className="font-semibold mb-2">A3R®</h4>
              <p className="text-sm text-gray-600">
                Reabastecimiento Air-to-Air automatizado.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border">
              <h4 className="font-semibold mb-2">A4R®</h4>
              <p className="text-sm text-gray-600">
                Conceptos de reabastecimiento aéreo autónomo.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border">
              <h4 className="font-semibold mb-2">Boomerang®</h4>
              <p className="text-sm text-gray-600">
                Tecnología de localización precisa del receptáculo.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border">
              <h4 className="font-semibold mb-2">Haptix®</h4>
              <p className="text-sm text-gray-600">
                Control háptico avanzado para el botalón de repostaje.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/innovacion"
              className="inline-block px-6 py-3 rounded-xl bg-black text-white hover:opacity-90 transition"
            >
              Explorar Innovación
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Tecnología probada en plataformas operativas
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Las tecnologías de Defensya están integradas en sistemas
              aeroespaciales avanzados, incluyendo soluciones de visión
              embarcada desarrolladas para aeronaves cisterna.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-semibold">20+</p>
              <p className="text-sm text-gray-600">Patentes</p>
            </div>

            <div>
              <p className="text-3xl font-semibold">Aeroespacial</p>
              <p className="text-sm text-gray-600">Sistemas Operativos</p>
            </div>

            <div>
              <p className="text-3xl font-semibold">Defensa</p>
              <p className="text-sm text-gray-600">Experiencia Industrial</p>
            </div>
          </div>

          <div>
            <Link
              href="/innovacion#patentes"
              className="inline-block px-6 py-3 rounded-xl bg-black text-white hover:opacity-90 transition"
            >
              Explora nuestras patentes
            </Link>
          </div>
        </div>
      </section>

      {/* CAPACIDADES */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
            Capacidades de Ingeniería
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Diseño Electrónico",
              "Sistemas Embebidos",
              "Procesamiento de Señal",
              "Sistemas de Visión",
              "IA y Aprendizaje Automático",
              "Sistemas de Datos Seguros",
            ].map((capability, index) => (
              <div key={index} className="p-6 border rounded-xl bg-gray-50">
                <p className="font-medium">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 lg:px-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Colaborando en la próxima generación de sistemas aeroespaciales
          </h2>

          <p className="text-gray-300 mb-10 leading-relaxed">
            Defensya colabora con fabricantes aeroespaciales, organizaciones de
            defensa y socios tecnológicos para desarrollar sistemas avanzados
            para las plataformas aéreas del futuro.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/contacto"
              className="px-6 py-3 bg-white text-black rounded-xl hover:opacity-90 transition"
            >
              Contactar
            </Link>

            <Link
              href="/productos"
              className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
            >
              Explorar nuestros proyectos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
