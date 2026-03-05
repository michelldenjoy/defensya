export default function Refueling() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
            Innovación en Reabastecimiento Air-to-Air
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Defensya desarrolla tecnologías avanzadas para automatizar el
            reabastecimiento aire-aire (AAR), mejorando la seguridad, precisión
            y eficiencia de una de las operaciones más complejas de la aviación
            militar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-2xl font-semibold mb-4">El desafío</h3>
            <p className="text-gray-600 leading-relaxed">
              Tradicionalmente, el reabastecimiento aire-aire ha sido una
              operación manual que requiere una elevada precisión por parte del
              operador. Aunque esta capacidad actúa como un importante
              multiplicador de fuerza en las operaciones aéreas, su rendimiento
              sigue condicionado por los límites del factor humano.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Nuestra visión</h3>
            <p className="text-gray-600 leading-relaxed">
              Defensya impulsa la evolución hacia sistemas de reabastecimiento
              automatizados capaces de mejorar la precisión, reducir riesgos
              operativos y mantener el rendimiento incluso en condiciones
              ambientales adversas.
            </p>
          </div>
        </div>

        
        <div className="mb-24">
          <h3 className="text-3xl font-semibold mb-10">Niveles de Automatización</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3">A3R®</h4>
              <p className="text-gray-600 leading-relaxed">
                Reabastecimiento aire-aire automatizado donde el sistema de
                botalón o manguera es controlado automáticamente mientras el
                operador mantiene funciones de supervisión y puede intervenir
                en cualquier momento.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3">A4R®</h4>
              <p className="text-gray-600 leading-relaxed">
                Nivel avanzado de automatización donde todas las fases del
                proceso de reabastecimiento se realizan de forma autónoma,
                eliminando la necesidad de control activo por parte del
                operador.
              </p>
            </div>
          </div>
        </div>

        {/* VENTAJAS */}
        <div className="mb-24">
          <h3 className="text-3xl font-semibold mb-10">Ventajas Operativas</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Mayor precisión en el contacto con la aeronave receptora",
              "Operaciones de reabastecimiento más rápidas",
              "Reducción del desgaste en los sistemas mecánicos",
              "Mayor seguridad en condiciones meteorológicas adversas",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-gray-50 border border-gray-100"
              >
                <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologias */}
        <div>
          <h3 className="text-3xl font-semibold mb-10">Tecnologías Clave</h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
              <h4 className="text-xl font-semibold mb-4">Boomerang®</h4>
              <p className="text-gray-600 leading-relaxed">
                Tecnología diseñada para mejorar la precisión en la localización
                del receptáculo de repostaje. Reduce significativamente las
                latencias del sistema aire-aire, permitiendo operaciones de
                reabastecimiento estables incluso en condiciones de fuerte
                turbulencia.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
              <h4 className="text-xl font-semibold mb-4">Haptix®</h4>
              <p className="text-gray-600 leading-relaxed">
                Dispositivo de control manual con retroalimentación háptica que
                permite controlar el botalón de repostaje de forma natural e
                intuitiva. Facilita la transición desde operaciones manuales
                hacia entornos de automatización A3R®.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}