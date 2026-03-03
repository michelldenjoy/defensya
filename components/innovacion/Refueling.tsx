import React from 'react';
import { Fuel, Plane, Settings, Zap, ShieldCheck, Target } from 'lucide-react';

const Refueling = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 bg-slate-50 text-slate-800 font-sans">
     
      <header className="mb-12 border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Reabastecimiento Aire-Aire (AAR): La Frontera de la Automatización
        </h1>
        <p className="text-lg leading-relaxed text-slate-700">
          El reabastecimiento aire-aire (AAR) ha sido hasta ahora un arte que se realiza manualmente. 
          Aunque la habilidad y la tecnología involucradas han demostrado ser un importante 
          <span className="font-semibold text-blue-600"> "multiplicador de fuerza"</span>, lo que permite que las aeronaves receptoras se empleen de manera más eficiente, 
          las capacidades actuales están limitadas por las limitaciones en el rendimiento humano.
        </p>
      </header>

      {/* Definición de Conceptos */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="text-blue-500" size={28} />
            <h2 className="text-2xl font-bold">A3R®</h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-600">
            Defensya ha acuñado <strong>A3R®</strong> para el reabastecimiento Automático o Automatizado aire-aire. 
            Constituye boom/receptáculo o sonda/drogue AAR donde el sistema de botalón o manguera-drogue no es controlado activamente por un operador. 
            Otras actividades, además de controlar estos conductos de reabastecimiento aéreo (AR) respectivos, siguen utilizando (parcialmente) la manipulación del operador 
            y el operador todavía puede intervenir y tomar el control del mecanismo de reabastecimiento aéreo.
          </p>
        </div>

        <div className="bg-slate-900 text-slate-100 p-8 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-yellow-400" size={28} />
            <h2 className="text-2xl font-bold uppercase tracking-wide text-white">A4R®</h2>
          </div>
          <p className="text-sm leading-relaxed opacity-90">
            Denota Reabastecimiento Aire-Aire Automático Autónomo, Asistido y Automático o Automatizado. 
            Consiste en una operación con boom/receptáculo o sonda/drogue AAR donde ni el sistema de botalón o manguera-drogue 
            ni ninguna otra transición/actividad del estado del sistema AAR son controladas activamente por un operador. 
            <strong> Una aeronave cisterna puede ser volada de forma no tripulada en virtud de esta definición.</strong>
          </p>
        </div>
      </div>

      
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <ShieldCheck className="text-green-600" />
          Ventajas y Eficacia Operativa
        </h3>
        <div className="prose prose-slate max-w-none bg-blue-50/50 p-8 rounded-xl border-l-4 border-blue-500">
          <p className="text-slate-700 italic mb-4 text-lg">
            "La mejora en el estado actual de la técnica se puede encontrar en la automatización. 
            La automatización puede ofrecer un aumento significativo del rendimiento de las tareas AAR más allá de la capacidad humana."
          </p>
          <p className="text-base leading-7">
            Las ventajas de A3R® y A4R® se manifiestan como una eficacia mejorada a través de la capacidad de realizar la tarea AAR de forma más rápida y precisa, 
            al tiempo que ponen menos tensión en los componentes del sistema de AR, así como a través de la capacidad de lidiar mejor con las condiciones ambientales adversas 
            que deterioran de forma significativa la capacidad de un operador humano.
          </p>
          <p className="mt-4 font-medium text-blue-900">
            El aumento de la efectividad a su vez se traduce en operaciones AAR marcadamente más rápidas y seguras, 
            donde se puede transferir combustible más rápidamente a las aeronaves receptoras lo que constituye un ahorro de tiempo y del propio combustible en dicho proceso de transferencia.
          </p>
        </div>
      </div>

     
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Plane className="rotate-45 text-blue-600" />
              Cartera de Soluciones Defensya
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Una parte importante de la cartera de Defensya es el desarrollo continuo de tecnologías A3R® y A4R® habilitadoras de esas capacidades. 
              Defensya cuenta con amplias y diversas soluciones disponibles para hacer realidad la automatización del AAR con un rendimiento superior 
              al de AAR manual haciendo del A3R® una posibilidad realista hoy en día. Esto se puede lograr sin afectar apreciablemente el diseño de una 
              aeronave receptora o mejorarse a un estándar aún más alto con una modificación benigna y ligeramente invasiva.
            </p>
          </div>
        </div>

        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-slate-200 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all">
            <h4 className="text-lg font-bold text-blue-700 mb-2 flex items-center gap-2">
               <Target size={20} /> Boomerang®
            </h4>
            <p className="text-sm text-slate-600">
              Una de estas modificaciones mejora es la inclusión de Boomerang® en la solución de diseño del sistema A3R®/A4R®. 
              El dispositivo Boomerang® permite mejorar la precisión en la localización del receptáculo y permitir que las latencias del sistema aire-aire 
              se reduzcan a tales valores que permiten la continuación de las operaciones AAR incluso en condiciones muy turbulentas.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all">
            <h4 className="text-lg font-bold text-blue-700 mb-2 flex items-center gap-2">
               <Fuel size={20} /> Haptix®
            </h4>
            <p className="text-sm text-slate-600">
              Cabe también destacar la tecnología Haptix® de Defensya para el control manual del botalón de repostaje. El Haptix® es un dispositivo innovador 
              de control manual del efecto final, incluyendo propiedades hápticas, lo que permite una forma natural y totalmente intuitiva controlar los movimientos 
              del botalón para lograr el contacto con el receptáculo de un avión receptor. El Haptix® facilita la transición de las operaciones manuales de AAR a A3R®, 
              ofreciendo posibilidades de reducir significativamente los requisitos de capacitación y habilidad para los operadores de reabastecimiento aéreo (ARO), 
              lo que les permite asumir cada vez más un papel de supervisión en el ámbito de la automatización AAR.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Refueling;