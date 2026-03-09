import { Import } from "lucide-react"
import Image from "next/image"


type Division = {
    title: string
    description: string
    image: string
  }
  
  const divisions: Division[] = [
    {
      title: "Defensa",
      image: "/images/defensa.jpg",
      description:
        "En Defensya contamos con un equipo de especialistas altamente cualificados y con instalaciones preparadas para afrontar proyectos complejos dentro del sector defensa. Más de veinte años de experiencia, junto con diversos reconocimientos y galardones, avalan nuestra capacidad para desarrollar soluciones tecnológicas fiables, innovadoras y adaptadas a los requisitos más exigentes del sector."
    },
    {
      title: "Aeronáutica",
      image: "/images/aeronautic.jpg",
      description:
        "Diseñamos, desarrollamos y fabricamos sistemas electrónicos, ópticos y mecánicos destinados al sector aeronáutico. Nuestras soluciones integran tecnología avanzada para resolver necesidades específicas del sector. Trabajamos en colaboración con empresas de reconocido prestigio que supervisan y auditan nuestros procesos de fabricación para garantizar los más altos estándares de calidad."
    },
    {
      title: "Óptica",
      image: "/images/optica.jpeg",
      description:
        "Defensya desarrolla y fabrica componentes ópticos para aplicaciones militares, aeronáuticas, científicas y optoelectrónicas. Nuestro equipo especializado trabaja en análisis de materiales, diseño óptico, reingeniería, mecanizado de precisión y pulido de materiales como cristal, lentes, cerámicas y metales técnicos. Somos especialistas en el tratamiento del cuarzo para aplicaciones sometidas a condiciones extremas."
    },
    {
      title: "Fabricación 3D",
      image: "/images/fabricacion3d.jpg",
      description:
        "Disponemos de tecnología avanzada de fabricación aditiva para la producción de piezas mediante sinterización láser en materiales como aluminio, acero, titanio o cromo-cobalto. También contamos con sistemas de prototipado rápido para plásticos y maquinaria de control numérico que nos permite fabricar piezas con gran precisión y rapidez."
    },
    {
      title: "Sanidad",
      image: "/images/sanidad.jpg",
      description:
        "Nuestra división sanitaria combina ingeniería, diseño y fabricación avanzada para el desarrollo de soluciones técnicas aplicadas al sector médico. Contamos con instalaciones propias que permiten realizar desde el diseño conceptual hasta la producción final, optimizando tiempos y garantizando altos estándares de calidad."
    }
  ]
  
  export default function Divisiones() {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Divisiones
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Defensya desarrolla tecnología avanzada en diferentes sectores estratégicos,
            ofreciendo soluciones innovadoras adaptadas a las necesidades de cada cliente.
          </p>
        </div>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {divisions.map((division, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={division.image}
                alt={division.title}
                width={800}
                height={600}
                className="w-full h-56 object-cover"
              />
  
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {division.title}
                </h3>
  
                <p className="text-gray-600 text-sm leading-relaxed">
                  {division.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }