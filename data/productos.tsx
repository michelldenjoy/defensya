// data/productos.ts

export interface Producto {
    id: string;
    nombre: string;
    categoria: 'Vision' | 'Datos' | 'Test' | 'Mision' | 'Civil';
    descripcion: string;
    detalles: string[];
    imagen: string; 
  }
  
  export const PRODUCTOS: Producto[] = [
    // --- 1. VISIÓN Y MONITORIZACIÓN ---
    {
      id: "3d-dichroic-mirror",
      nombre: "Espejo Dicróico 3D",
      categoria: "Vision",
      descripcion: "Sistema integrado en el BEVS para la optimización de la visión estereoscópica en operaciones de reabastecimiento en vuelo.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Elimina problemas de 'ghosting' y distorsiones visuales",
        "Permite al operador (ARO) una percepción de profundidad real",
        "Componente crítico en la plataforma A330 MRTT"
      ],
      
    },
    {
      id: "falcon-eye-cameras",
      nombre: "Cámaras Falcon Eye",
      categoria: "Vision",
      descripcion: "Sistemas de captación de imágenes de alta resolución diseñados para entornos aeroespaciales extremos.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Alta sensibilidad en diversas condiciones lumínicas",
        "Diseño robusto optimizado para integración en fuselaje",
        "Disponible en múltiples configuraciones según la misión"
      ]
    },
    {
      id: "mrtt-3d-goggles",
      nombre: "Gafas MRTT 3D",
      categoria: "Vision",
      descripcion: "Dispositivo de visualización inmersiva para operadores de reabastecimiento aéreo.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Visión 3D de alta definición sin latencia",
        "Sustituye o complementa los monitores tradicionales de consola",
        "Tecnología avanzada de asistencia al contacto (Boom)"
      ]
    },
    {
      id: "coastal-monitoring-belgium",
      nombre: "Sistema de Monitorización Costera",
      categoria: "Vision",
      descripcion: "Sistema compacto de vigilancia para rangos navales, instalado actualmente en la costa de Bélgica.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Conjunto de 2 radares de diferentes frecuencias de detección",
        "Cámaras térmicas y de espectro visible con zoom óptico 20x",
        "Monitoreo AIS integrado y seguimiento de objetivos ARPAS"
      ]
    },
  
    // --- 2. GESTIÓN DE DATOS Y GRABACIÓN ---
    {
      id: "boom-tag-rfid",
      nombre: "Boom Tag (RFID)",
      categoria: "Datos",
      descripcion: "Dispositivo RFID capaz de almacenar una base de datos completa de cada componente del Boom del A330MRTT.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Registro digital de mantenimiento, reparaciones y fechas de fabricación",
        "Alimentación por inducción (sin batería interna)",
        "Sincronización en tiempo real con DB central mediante tablets 3G"
      ]
    },
    {
      id: "rfid-tag-security",
      nombre: "RFID TAG (Seguridad)",
      categoria: "Datos",
      descripcion: "Sistema de control y localización de recursos críticos con información actualizada en tiempo real.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Localización precisa de material sensible",
        "Sincronización total con base de datos central",
        "Acceso remoto para supervisión de seguridad"
      ]
    },
    {
      id: "rfid-tag-renting",
      nombre: "RFID TAG (Gestión de Flotas)",
      categoria: "Datos",
      descripcion: "Sistema de transmisión de datos para la gestión logística de vehículos en talleres y depósitos.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Ideal para empresas de leasing y alquiler de vehículos",
        "Gestión de movimientos en tiempo real",
        "Acceso remoto a la base de datos de flota"
      ]
    },
    {
      id: "video-audio-data-recorder",
      nombre: "Video Audio & Data Recorder",
      categoria: "Datos",
      descripcion: "Sistema de registro integral de misión para la captura de señales críticas de vuelo.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Grabación sincronizada de múltiples canales de audio y vídeo",
        "Diseño preparado para post-análisis de misión (Debriefing)",
        "Alta capacidad de almacenamiento y protección de datos"
      ]
    },
    {
      id: "global-video-platform",
      nombre: "Global Video Platform",
      categoria: "Datos",
      descripcion: "Plataforma integral de gestión de vídeo para la distribución y control de señales en la aeronave.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Arquitectura escalable para diferentes plataformas",
        "Procesamiento de vídeo de baja latencia",
        "Interfaz optimizada para operadores de misión"
      ]
    },
  
    // --- 3. SOPORTE EN TIERRA Y TEST (GSE) ---
    {
      id: "deflexion-detector",
      nombre: "Detector de Deflexión",
      categoria: "Test",
      descripcion: "Sistema de inspección sin contacto para superficies móviles de vuelo de alta precisión.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Reduce el tiempo de montaje y test de 10 horas a 15 minutos",
        "Mayor resolución que los sistemas de pantógrafo tradicionales",
        "Operativo en la línea de montaje (FAL) del C295 para Airbus"
      ]
    },
    {
      id: "pattern-generator",
      nombre: "Generador de Patrones",
      categoria: "Test",
      descripcion: "Generador de señales de vídeo para el testeo de monitores industriales y militares.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Hasta 8 salidas ópticas SDI independientes",
        "Selección de patrones mediante canal serie",
        "Capacidad de superposición de tiempo e identificación de pantalla"
      ]
    },
    {
      id: "dvi-emulator-non-frozen",
      nombre: "Emulador DVI (Intelligent Non-Frozen)",
      categoria: "Test",
      descripcion: "Dispositivo diseñado para replicar entradas de señal de vídeo en la consola central del avión.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Previene la congelación de monitores por fallos de fuente",
        "Mantiene una salida DVI estable y activa permanentemente",
        "Integrado en A310 MRTT y A330 MRTT"
      ]
    },
  
    // --- 4. ILUMINACIÓN Y SENSORES (MISIÓN) ---
    {
      id: "ir-illuminator-subsystem",
      nombre: "Subsistema Iluminador IR",
      categoria: "Mision",
      descripcion: "Sistema de iluminación infrarroja para soporte de visión nocturna en operaciones aéreas.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Eficacia probada con sensores Falcon Eye y NVG",
        "Bajo perfil térmico y alta eficiencia energética",
        "Resistencia certificada para condiciones de vuelo militar"
      ]
    },
    {
      id: "aeroear",
      nombre: "Aeroear",
      categoria: "Mision",
      descripcion: "Subsistema de sensores acústicos y de detección especializada para aplicaciones aeroespaciales.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Detección de firmas acústicas específicas",
        "Integración en el ecosistema de sensores de la aeronave",
        "Procesamiento de señal optimizado"
      ]
    },
  
    // --- 5. INGENIERÍA CIVIL ---
    {
      id: "building-seismic-system",
      nombre: "Sistema Sísmico para Edificios",
      categoria: "Civil",
      descripcion: "Sistema de detección de movimientos estructurales causados por actividad sísmica.",
      imagen: "/images/aeronautic.jpg",
      detalles: [
        "Monitorización de integridad estructural en tiempo real",
        "Configuración base extensible según especificaciones",
        "Aplicable a construcción, seguridad y vigilancia general"
      ]
    }
  ];