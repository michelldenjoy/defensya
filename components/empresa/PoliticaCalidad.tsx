import React from 'react';

const PoliticaCalidad = () => {
  return (
    <section className="py-20 bg-slate-950 px-6 text-slate-300">
      <div className="max-w-5xl mx-auto">
    
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Declaración de la Política de Calidad
          </h1>
          <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed mb-16">
          <p>
            La Dirección de <strong className="text-white">DEFENSYA INGENIERIA INTERNACIONAL</strong> busca obtener, como objetivo ineludible, la excelencia en todas sus actividades y, en consecuencia, la consolidación como empresa del sector ingeniería de telecomunicación, electrónica e informática y afines, a través de la satisfacción diaria de sus clientes, para lo cual, y consciente de la importancia de la calidad de los servicios creados por nuestra compañía y de la satisfacción de nuestros clientes, decidió implantar un Sistema de Gestión de la Calidad basado en las normas <span className="text-blue-400 font-semibold">ISO 9001:2015</span>.
          </p>
          <p>
            La política de calidad de <strong className="text-white">DEFENSYA INGENIERIA INTERNACIONAL</strong> se fundamenta en el conocimiento de las necesidades y expectativas de nuestros clientes y procura, desde ese conocimiento, conseguir la satisfacción de los mismos, ofreciéndoles un tratamiento personalizado a cada uno de ellos.
          </p>
          <p>
            La calidad de los servicios prestados por <strong className="text-white">DEFENSYA INGENIERIA INTERNACIONAL</strong> depende de sus recursos humanos. Por ello, la participación, involucración y vocación de servicio de todo el personal es esencial para la adecuación del trabajo a las expectativas marcadas por los clientes.
          </p>
          <p>
            Esto lleva a <strong className="text-white">DEFENSYA INGENIERIA INTERNACIONAL</strong> a adquirir el compromiso de identificar y satisfacer tanto los requisitos de nuestros clientes como los normativos y legales asociados a nuestras actividades, lo cual obliga a impulsar el compromiso con la mejora continua a todos los niveles dentro de la empresa.
          </p>
        </div>

        {/* Objetivos y Valores */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-blue-500 mb-6 uppercase tracking-wider">Objetivos Estratégicos</h3>
            <ul className="space-y-4 list-none">
              {[
                "Concienciar al equipo directivo de la importancia de su participación en el proyecto con el fin de mejorar los flujos de información.",
                "Impulsar la obtención de resultados medibles en los procesos de la empresa mediante la incorporación de indicadores en los mismos.",
                "Fomentar la participación del personal de la empresa en el desarrollo de la calidad y en el proceso de mejora continua, promoviendo su formación y la permanente actualización de sus conocimientos y habilidades, así como fomentando su desarrollo profesional y personal."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-blue-500 mb-6 uppercase tracking-wider">Valores Fundamentales</h3>
            <ul className="space-y-4 list-none">
              {[
                "Enfoque al cliente (satisfacción de las necesidades de nuestros clientes optimizando los recursos).",
                "Enfoque por procesos (visualización de la empresa como un conjunto de procesos encaminados a satisfacer las necesidades de los clientes).",
                "Gestión de riesgos para prevenir los resultados no deseados y aprovechar las oportunidades que pudieran surgir como consecuencia de esta gestión.",
                "Formación continua del personal (formación como mecanismo fundamental de mejora continua de la calidad de los productos y servicios ofrecidos).",
                "Mejora continua (proceso fundamental de mejora del Sistema de Gestión de la Calidad)."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Medio Ambiente / Compromiso */}
        <div className="border-t border-slate-800 pt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Compromiso Ambiental y Sostenibilidad</h2>
          <p className="mb-8 leading-relaxed">
            <strong className="text-white">DEFENSYA INGENIERIA INTERNACIONAL</strong>, a través del presente compromiso, suscrito por todos los trabajadores, establece que todas nuestras actividades, productos y servicios se desarrollan desde la perspectiva de la satisfacción, la protección y conservación del medio ambiente como medios para asegurar la rentabilidad y continuidad de la empresa, apostando por conseguir los siguientes objetivos:
          </p>
          
          <div className="grid md:grid-cols-1 gap-4">
            {[
              "Cumplir con los requisitos de nuestros clientes y con los requisitos legales que se derivan de la legislación aplicable en calidad y medio ambiente, así como con otros requisitos que suscribamos relacionados con nuestros aspectos medioambientales.",
              "Efectuar un permanente seguimiento de los resultados obtenidos a través de la Gestión Ambiental y de Calidad. Este seguimiento será la base que nos permitirá conseguir una mejora continua del comportamiento ambiental y de la eficacia del Sistema de Gestión integrado de Calidad y Medio Ambiente y la prevención de la contaminación.",
              "Dotar de recursos humanos, económicos, de estructura y organización que nos permita mantener un Sistema de Gestión Medioambiental, basado en las normas nacionales e internacionales.",
              "Motivar y formar al personal en su desarrollo profesional, potenciando su actitud de trabajo en equipo, la comunicación interna y el trato personalizado hacia los mismos, de manera que se impliquen y sientan integrados en la consecución de la Gestión de Calidad y Ambiental, otorgándoles las responsabilidades y autoridad necesarias.",
              "Establecer todos los mecanismos necesarios para prevenir y minimizar la contaminación e impacto ambiental en el desarrollo de nuestras actividades, identificando y evaluando los aspectos que puedan tener un impacto significativo en el medio ambiente, planificando los controles operacionales necesarios que garanticen la actuación responsable desde el inicio de cada proceso.",
              "Reducir progresivamente nuestros vertidos de aguas residuales, residuos, nivel de ruido, la contaminación de los suelos y las emisiones de contaminantes a la atmósfera, entendiendo que sólo de esta forma estaremos garantizando el progreso y la sostenibilidad económica de nuestra compañía.",
              "Mantener una continua colaboración y comunicación con nuestros proveedores, de forma que queden claros nuestros requisitos de calidad y medio ambiente."
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-slate-900/30 rounded-lg border-l-2 border-blue-600">
                <span className="text-slate-500 font-mono text-xs">{(i + 1).toString().padStart(2, '0')}</span>
                <p className="text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-16 text-center text-blue-400 font-medium italic">
          DEFENSYA INGENIERIA INTERNACIONAL establece, implanta y mejora un Sistema de Gestión de la Calidad y Medio Ambiente, asegurando, controlando y optimizando la calidad de sus servicios con el objetivo de satisfacer las necesidades de los clientes.
        </p>
      </div>
    </section>
  );
};

export default PoliticaCalidad;