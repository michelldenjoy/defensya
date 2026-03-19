// data/productos.ts

export interface Producto {
  id: string;
  nombre: string;
  categoria: "Vision" | "Datos" | "Test" | "Mision" | "Civil" | "Displays";
  descripcion: string;
  detalles: string[];
  imagen: string | string[];
}

export const PRODUCTOS: Producto[] = [
  // --- 1. VISIÓN Y MONITORIZACIÓN ---
  {
    id: "3d-dichroic-mirror",
    nombre: "3D Dichroic Mirror",
    categoria: "Vision",
    descripcion:
      "Sistema integrado en el BEVS para la optimización de la visión estereoscópica en operaciones de reabastecimiento en vuelo.",
    imagen: "/images/aeronautic.jpg", 
    detalles: [
      "Elimina problemas de 'ghosting' y distorsiones visuales",
      "Permite al operador (ARO) una percepción de profundidad real",
      "Componente crítico en la plataforma A330 MRTT",
    ],
  },
  {
    id: "mrtt-3d-goggles",
    nombre: "3D Glases MRTT",
    categoria: "Vision",
    descripcion:
      "Dispositivo de visualización inmersiva para operadores de reabastecimiento aéreo.",
    imagen: "/images/aeronautic.jpg",
    detalles: [
      "Visión 3D de alta definición sin latencia",
      "Sustituye o complementa los monitores tradicionales de consola",
      "Tecnología avanzada de asistencia al contacto (Boom)",
    ],
  },
  {
    id: "coastal-monitoring-belgium",
    nombre: "Coastal Monitoring Fire Range",
    categoria: "Vision",
    descripcion:
      "Sistema compacto de vigilancia para rangos navales, instalado actualmente en la costa de Bélgica.",
    imagen: "/products/coastal.jpg",
    detalles: [
      "Conjunto de 2 radares de diferentes frecuencias de detección",
      "Cámaras térmicas y de espectro visible con zoom óptico 20x",
      "Monitoreo AIS integrado y seguimiento de objetivos ARPAS",
    ],
  },
    {
      id: "cameras-multi-spectral",
      nombre: "Cameras Multi Spectral",
      categoria: "Vision",
      descripcion: "Gama completa de cámaras de alta resolución (hasta 4K) adaptables a cualquier lente, con unidad de procesamiento integrada para algoritmos avanzados.",
      imagen: ["/products/camera1.webp", "/products/camera2.webp", "/products/camera3.webp", "/products/camera4.webp", "/products/camera5.webp", "/products/camera6.webp"] ,  
      detalles: [
        "Sensores VIS de alta sensibilidad (Color Nocturno)",
        "Tecnologías Infrarrojas: NIR, SWIR (640x480) y LWIR (1080p)",
        "Unidad de procesamiento integrada para análisis de imagen en tiempo real"
      ]
    },
    {
      id: "camera-bench-supervision",
      nombre: "Camera Bench Supervision",
      categoria: "Vision",
      descripcion: "Sistema de vigilancia estabilizado con capacidades de Auto-Tracking y rutinas programables por el usuario.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Zoom óptico 20x con estabilización de imagen activa",
        "Resolución hasta 4K con opción de iluminador IR",
        "Interfaz de control de alta precisión para misiones críticas"
      ]
    },
    {
      id: "designator-bench-laser",
      nombre: "Designator Bench Laser",
      categoria: "Vision",
      descripcion: "Plataforma de designación avanzada con hasta 3 slots para cámaras (VIS, Térmica, NIR/SWIR) y láser pulsado.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Láser Designador 1064nm conforme a NATO STANAG 3733",
        "Cámaras Térmicas y SWIR de alta resolución (SRA)",
        "Sistema de puntería de alta energía (>70mJ) para guiado de precisión"
      ]
    },
    {
      id: "pan-tilt-bench-hdtp",
      nombre: "Pan & Tilt Bench",
      categoria: "Vision",
      descripcion: "Plataforma móvil ultraligera fabricada en polímeros técnicos y fibra de carbono para el posicionamiento de sensores.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Velocidad extrema: Pan 280°/s y Tilt 190°/s con repetibilidad de ±0.01°",
        "Construcción en Aluminio 7071 y fibra de carbono (<4kg)",
        "Alimentación 28Vdc conforme a normativas MIL-STD"
      ]
    },
  

  // --- 2. GESTIÓN DE DATOS Y GRABACIÓN ---
  {
    id: "boom-tag-rfid",
    nombre: "Boom Tag (RFID)",
    categoria: "Datos",
    descripcion:
      "Dispositivo RFID capaz de almacenar una base de datos completa de cada componente del Boom del A330MRTT.",
    imagen: "/products/boomtag.jpg",
    detalles: [
      "Registro digital de mantenimiento, reparaciones y fechas de fabricación",
      "Alimentación por inducción (sin batería interna)",
      "Sincronización en tiempo real con DB central mediante tablets 3G",
    ],
  },
  {
    id: "rfid-tag-security",
    nombre: "RFID TAG (Seguridad)",
    categoria: "Datos",
    descripcion:
      "Sistema de control y localización de recursos críticos con información actualizada en tiempo real.",
    imagen: "/products/rfid.jpg",
    detalles: [
      "Localización precisa de material sensible",
      "Sincronización total con base de datos central",
      "Acceso remoto para supervisión de seguridad",
    ],
  },
  {
    id: "rfid-tag-renting",
    nombre: "RFID TAG (Gestión de Flotas)",
    categoria: "Datos",
    descripcion:
      "Sistema de transmisión de datos para la gestión logística de vehículos en talleres y depósitos.",
    imagen: "/products/rfidrenting.jpg",
    detalles: [
      "Ideal para empresas de leasing y alquiler de vehículos",
      "Gestión de movimientos en tiempo real",
      "Acceso remoto a la base de datos de flota",
    ],
  },
  {
    id: "video-audio-data-recorder",
    nombre: "Video & Data Recorder",
    categoria: "Datos",
    descripcion:
      "Sistema de registro integral de misión para la captura de señales críticas de vuelo.",
    imagen: ["/products/videodata.webp", "/products/videodata2.webp" ],
    detalles: [
      "Grabación sincronizada de múltiples canales de audio y vídeo",
      "Diseño preparado para post-análisis de misión (Debriefing)",
      "Alta capacidad de almacenamiento y protección de datos",
    ],
  },
  {
    id: "global-video-platform",
    nombre: "Global Video System Platform",
    categoria: "Datos",
    descripcion:
      "Plataforma integral de gestión de vídeo para la distribución y control de señales en la aeronave.",
    imagen: ["/products/globalvideo1.png", "/products/globalvideo.png"],
    detalles: [
      "Arquitectura escalable para diferentes plataformas",
      "Procesamiento de vídeo de baja latencia",
      "Interfaz optimizada para operadores de misión",
    ],
  },

  // --- 3. SOPORTE EN TIERRA Y TEST (GSE) ---
  {
    id: "deflexion-detector",
    nombre: "Deflexion Detector",
    categoria: "Test",
    descripcion:
      "Sistema de inspección sin contacto para superficies móviles de vuelo de alta precisión.",
    imagen: "/products/deflexion.jpeg",
    detalles: [
      "Reduce el tiempo de montaje y test de 10 horas a 15 minutos",
      "Mayor resolución que los sistemas de pantógrafo tradicionales",
      "Operativo en la línea de montaje (FAL) del C295 para Airbus",
    ],
  },
  {
    id: "pattern-generator",
    nombre: "Pattern Generator",
    categoria: "Test",
    descripcion:
      "Generador de señales de vídeo para el testeo de monitores industriales y militares.",
    imagen: "/products/pattern.jpg",
    detalles: [
      "Hasta 8 salidas ópticas SDI independientes",
      "Selección de patrones mediante canal serie",
      "Capacidad de superposición de tiempo e identificación de pantalla",
    ],
  },
  {
    id: "dvi-emulator-non-frozen",
    nombre: "Emulador DVI",
    categoria: "Test",
    descripcion:
      "Dispositivo diseñado para replicar entradas de señal de vídeo en la consola central del avión.",
    imagen: "/products/dvi.png",
    detalles: [
      "Previene la congelación de monitores por fallos de fuente",
      "Mantiene una salida DVI estable y activa permanentemente",
      "Integrado en A310 MRTT y A330 MRTT",
    ],
  },

  // --- 4. ILUMINACIÓN Y SENSORES (MISIÓN) ---
  // {
  //   id: "ir-illuminator-subsystem",
  //   nombre: "Subsistema Iluminador IR",
  //   categoria: "Mision",
  //   descripcion:
  //     "Sistema de iluminación infrarroja para soporte de visión nocturna en operaciones aéreas.",
  //   imagen: "/images/aeronautic.jpg",
  //   detalles: [
  //     "Eficacia probada con sensores Falcon Eye y NVG",
  //     "Bajo perfil térmico y alta eficiencia energética",
  //     "Resistencia certificada para condiciones de vuelo militar",
  //   ],
  // },
  {
    id: "aeroear",
    nombre: "Aeroear",
    categoria: "Mision",
    descripcion:
      "Subsistema de sensores acústicos y de detección especializada para aplicaciones aeroespaciales.",
    imagen: "/products/aeroear.jpg",
    detalles: [
      "Detección de firmas acústicas específicas",
      "Integración en el ecosistema de sensores de la aeronave",
      "Procesamiento de señal optimizado",
    ],
  },

  // --- 5. INGENIERÍA CIVIL ---
  {
    id: "building-seismic-system",
    nombre: "Building Seismic System",
    categoria: "Civil",
    descripcion:
      "Sistema de detección de movimientos estructurales causados por actividad sísmica.",
    imagen: "/images/aeronautic.jpg",
    detalles: [
      "Monitorización de integridad estructural en tiempo real",
      "Configuración base extensible según especificaciones",
      "Aplicable a construcción, seguridad y vigilancia general",
    ],
  },

  // --- 6. SISTEMAS DE VISUALIZACIÓN Y DISPLAYS ---
  {
    id: "intelligent-non-freezing-monitors",
    nombre: "Intelligent non freezing Monitors",
    categoria: "Displays",
    descripcion:
      "Sistemas de visualización crítica diseñados para garantizar la fluidez de imagen, eliminando el riesgo de congelación de cuadros (frames).",
      imagen: "/images/aeronautic.jpg",
    detalles: [
      "Aplicación crítica en reabastecimiento en vuelo y diagnóstico médico",
      "Evita errores de interpretación por pérdida de señal de entrada",
      "Alta fiabilidad en entornos donde el monitoreo en tiempo real es vital",
    ],
  },
  {
    id: "panoramic-non-freezing-monitors",
    nombre: " Panoramic non freezing Monitors",
    categoria: "Displays",
    descripcion:
      "Displays de formato ancho que generan una visión periférica completa del área de trabajo, optimizando la seguridad operativa.",
      imagen: "/images/aeronautic.jpg",
    detalles: [
      "Generación de superposiciones (overlays) de datos en tiempo real",
      "Prevención de colisiones mediante visualización de área ampliada",
      "Certificado para aplicaciones militares y entornos sanitarios críticos",
    ],
  },
  {
    id: "rugged-display-custom",
    nombre: 'Rugged Displays (7" / 12")',
    categoria: "Displays",
    descripcion:
      "Pantallas de alta resistencia totalmente personalizables, diseñadas para operar bajo condiciones ambientales extremas.",
      imagen: ["/products/rugged7-3.webp", "/products/rugged7-2.webp", "/products/rugged7.webp", "/products/rugged7-1.webp" ],
    detalles: [
      "Certificación Militar: MIL-STD-461F y MIL-STD-810G",
      "Alta luminosidad (>500cd) para legibilidad bajo luz solar directa",
      "Comunicación RS-485/422 o Ethernet con registro de eventos",
    ],
  },
  {
    id: "rugged-tactical-laptops",
    nombre: "Rugged Tactical Laptops",
    categoria: "Displays",
    descripcion:
      "Estaciones de trabajo portátiles de alto rendimiento con arquitectura reforzada para despliegue en campo.",
      imagen: ["/products/tactical.png", "/products/tactical2.png", "/products/tactical3.jpg"],
    detalles: [
      "Procesador Intel Core i7 10th Gen y hasta 16GB DDR4",
      "Pantalla de alta resolución (267 PPI) de 12.3 pulgadas",
      "Certificación bajo normativas RTCA-DO178, 168 y MIL-STD",
    ],
  },
  {
    id: "portable-vision-analysis",
    nombre: "Portable Vision Analysis",
    categoria: "Displays",
    descripcion:
      "Dispositivo de despliegue rápido para la reproducción y análisis de imágenes registradas durante misiones.",
      imagen: "/products/portable.webp",
    detalles: [
      "Monitoreo sincronizado de audio y vídeo con superposición de datos",
      "Herramienta clave para el post-análisis de reabastecimiento aéreo",
      "Interfaz optimizada para la revisión técnica de misiones",
    ],
  },
  {
    id: "rugged-mfcds",
    nombre: "Rugged MFCDs ",
    categoria: "Displays",
    descripcion:
      "Displays multifunción de última generación con procesador i7 de 13ª generación para procesamiento de datos masivo.",
      imagen: "/products/ruggedmfcd.webp",
    detalles: [
      'Pantalla de 13" con resolución 2736 x 1824',
      "Arquitectura ampliable hasta 32GB de RAM y 4TB SSD",
      "Interfaz de cliente personalizable y certificación MIL-STD-461F",
    ],
  },
];
