"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface LogoParticles3DProps {
  imageSrc?: string;
  onFormed?: () => void;
}

// Color de marca (azul Defensya) en formato hexadecimal 0x para Three.js.
// OJO: esta constante está declarada pero no se usa en ningún sitio del
// componente — el color real de cada partícula sale del PNG (ver colors[]
// más abajo). Si quisieras forzar todas las partículas a este azul en vez
// de usar el color real de la imagen, tendrías que sustituir el array
// "colors" por BRAND_HEX en el material.
const BRAND_HEX = 0x3f409b;

// ── Control de "solo una vez por carga de página" ──
// Variable a nivel de módulo (fuera del componente), así que persiste
// mientras la pestaña esté abierta y se comparte entre todas las instancias
// del componente. Sirve para que la animación de formación de partículas
// (dispersión → logo) solo se vea la PRIMERA vez que se monta el componente
// en esa sesión de navegación; si el usuario navega y vuelve a esta página,
// el logo aparece ya formado sin repetir el efecto.
let hasFormedThisPageLoad = false;

function hasAlreadyFormed(): boolean {
  return hasFormedThisPageLoad;
}

function markAsFormed(): void {
  hasFormedThisPageLoad = true;
}

// ── Textura del "punto" de cada partícula ──
// Crea una textura circular con degradado (centro sólido → bordes
// transparentes) usando un canvas 2D. Esto es lo que le da a cada partícula
// su aspecto de "punto de luz suave" en vez de un cuadrado duro con bordes
// pixelados.
function createDotTexture(): THREE.Texture {
  // "size" = resolución en píxeles de la textura del punto. Subir este
  // número (ej. 128) daría un punto más suave/nítido al hacer zoom, pero
  // cuesta algo más de memoria de GPU. 64 es más que suficiente porque el
  // punto se ve muy pequeño en pantalla.
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  // Degradado radial: del centro (blanco opaco) al borde (blanco transparente).
  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2,
  );
  // Estos 3 "stops" del degradado determinan cómo de "duro" o "difuminado"
  // se ve el borde del punto:
  gradient.addColorStop(0, "rgba(255,255,255,1)");     // centro: blanco 100% opaco
  gradient.addColorStop(0.4, "rgba(255,255,255,0.9)"); // al 40% del radio, casi opaco
  gradient.addColorStop(1, "rgba(255,255,255,0)");     // borde exterior: totalmente transparente
  // Si quisieras puntos más "duros" (menos difuminados), acercarías el
  // segundo stop a 1 (ej. 0.8 en vez de 0.4).
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

export default function LogoPlate3D({
  imageSrc = "/logodefensyanew.png", // ruta del logo que se convertirá en partículas
  onFormed, // callback opcional que se dispara cuando el logo termina de formarse
}: LogoParticles3DProps) {
  const mountRef = useRef<HTMLDivElement>(null); // contenedor DOM donde se inyecta el <canvas> de Three.js

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Detecta si estamos en un contenedor "móvil" según su ANCHO REAL en
    // píxeles (no el viewport completo). Se usa más abajo para reducir la
    // resolución de muestreo del logo en pantallas pequeñas.
    const isMobile = mount.clientWidth < 640;

    // Respeta la preferencia de accesibilidad "reducir movimiento" del
    // sistema operativo/navegador del usuario.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Si el usuario prefiere menos movimiento, O si el logo ya se formó
    // antes en esta misma carga de página, nos saltamos la animación de
    // dispersión y mostramos el logo ya formado directamente.
    const skipAnimation = prefersReducedMotion || hasAlreadyFormed();

    let cleanupFns: Array<() => void> = []; // funciones de limpieza (listeners, dispose, etc.) que se ejecutan al desmontar
    let raf: number | null = null; // id del requestAnimationFrame actual, para poder cancelarlo
    let disposed = false; // flag para evitar trabajo si el componente se desmontó mientras cargaba la imagen

    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      if (disposed) return; // el componente se desmontó antes de que la imagen cargara: no seguimos

      // ══════════════════════════════════════════════════════════
      // 1. MUESTREO DEL PNG: convertir la imagen en una nube de puntos
      // ══════════════════════════════════════════════════════════

      // dpr = "device pixel ratio" capado a 2 como máximo (pantallas retina
      // suelen tener 2 o 3; capar a 2 evita gastar recursos de más sin
      // ganancia visual perceptible).
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      // ESTO CONTROLA LA CANTIDAD DE PARTÍCULAS (junto con canvasH más abajo):
      // baseW = ancho base de muestreo en píxeles. A más ancho, más columnas
      // de píxeles se analizan → más partículas y logo más "denso"/nítido,
      // pero también más coste de cómputo/render.
      // - 480px en móvil (menos partículas, mejor rendimiento en gama baja)
      // - 800px en desktop (más partículas, más detalle)
      const baseW = isMobile ? 480 : 800;

      // canvasW = ancho final de muestreo, multiplicando por el dpr. Este es
      // el verdadero "número de columnas" que se van a recorrer más abajo.
      // Subir "dpr" o "baseW" = más partículas = más detalle pero más carga.
      const canvasW = Math.round(baseW * dpr);

      // canvasH se calcula automáticamente para respetar la proporción
      // (aspect ratio) original de la imagen del logo — así no se deforma.
      const canvasH = Math.round(
        canvasW * (img.naturalHeight / img.naturalWidth),
      );

      // Canvas offscreen (invisible, nunca se añade al DOM) donde se dibuja
      // la imagen a la resolución de muestreo elegida, solo para poder leer
      // sus píxeles uno a uno.
      const sampleCanvas = document.createElement("canvas");
      sampleCanvas.width = canvasW;
      sampleCanvas.height = canvasH;
      const ctx = sampleCanvas.getContext("2d")!;
      // Suavizado activado y en calidad alta: mejora el resultado al escalar
      // la imagen original al tamaño de muestreo (menos dentado/aliasing).
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, canvasW, canvasH);

      // getImageData: extrae los valores RGBA de CADA píxel del canvas como
      // un array plano [R,G,B,A, R,G,B,A, ...]. Es la "materia prima" de la
      // que se generan las partículas.
      const imageData = ctx.getImageData(0, 0, canvasW, canvasH).data;

      // ESTO CONTROLA EL TAMAÑO FÍSICO DEL LOGO EN LA ESCENA 3D (en unidades
      // de mundo, no píxeles de pantalla): planeW = 6 unidades de ancho.
      // Subir este número agranda el "plano virtual" sobre el que se
      // distribuyen las partículas (el logo ocupará más espacio en la
      // escena 3D, lo que también puede requerir alejar la cámara).
      const planeW = 6;
      const planeH = planeW * (canvasH / canvasW); // alto proporcional, respeta el aspect ratio

      // spacingX/Y: distancia real en unidades de mundo entre un píxel
      // muestreado y el siguiente. Cuantas más columnas/filas se muestreen
      // (canvasW/canvasH más grandes), más pequeño es este espaciado, y por
      // tanto más "juntas" quedan las partículas entre sí.
      const spacingX = planeW / canvasW;
      const spacingY = planeH / canvasH;
      const spacing = (spacingX + spacingY) / 2; // promedio, usado luego para el tamaño del punto

      const targets: number[] = []; // posición FINAL (x,y,z) de cada partícula, formando el logo
      const colors: number[] = []; // color (r,g,b) de cada partícula, tomado directamente del píxel

      // Recorre cada píxel del canvas muestreado, fila por fila, columna por columna.
      for (let y = 0; y < canvasH; y++) {
        for (let x = 0; x < canvasW; x++) {
          const idx = (y * canvasW + x) * 4; // cada píxel ocupa 4 posiciones (R,G,B,A) en el array plano

          const a = imageData[idx + 3]; // canal alfa (transparencia) de este píxel
          // ESTO DETERMINA QUÉ PARTE DE LA IMAGEN "CUENTA" COMO LOGO:
          // si el píxel es prácticamente transparente (alfa < 20 de 255),
          // se descarta y NO se crea una partícula ahí. Bajar este umbral
          // (ej. a 5) incluiría píxeles casi invisibles; subirlo (ej. a 100)
          // eliminaría bordes semitransparentes/antialiasing del PNG.
          if (a < 20) continue;

          // JITTER SUB-PÍXEL: desplazamiento aleatorio muy pequeño (hasta la
          // mitad del espaciado entre partículas) aplicado a la posición de
          // cada partícula. Esto rompe la perfecta alineación en rejilla del
          // muestreo, que de otro modo —vista con perspectiva de cámara—
          // puede generar un patrón de interferencia visual (moiré) o
          // "rayas" en trazos finos del logo. Si subieras el multiplicador
          // 0.5 a algo como 1.5, el logo se vería "granulado"/menos nítido;
          // si lo bajaras a 0, volvería el riesgo de moiré.
          const jitterX = (Math.random() - 0.5) * spacingX * 0.5;
          const jitterY = (Math.random() - 0.5) * spacingY * 0.5;

          // Convierte la posición del píxel (en coordenadas de imagen, con
          // origen arriba-izquierda) a coordenadas de mundo 3D centradas en
          // (0,0), con el eje Y invertido (en imágenes Y crece hacia abajo,
          // en Three.js Y crece hacia arriba).
          const wx = (x / canvasW - 0.5) * planeW + jitterX;
          const wy = -(y / canvasH - 0.5) * planeH + jitterY;
          targets.push(wx, wy, 0); // z=0: el logo formado es plano

          // Color real de la partícula = color real del píxel del PNG,
          // normalizado de 0-255 a 0-1 (rango que espera Three.js).
          colors.push(
            imageData[idx] / 255,
            imageData[idx + 1] / 255,
            imageData[idx + 2] / 255,
          );
        }
      }

      const count = targets.length / 3; // número total de partículas creadas (cada una ocupa 3 valores x,y,z)

      // ══════════════════════════════════════════════════════════
      // 2. POSICIONES DE PARTIDA: de dónde "vuelan" las partículas
      // ══════════════════════════════════════════════════════════
      const starts = new Float32Array(count * 3); // posición inicial (dispersa) de cada partícula
      const delays = new Float32Array(count);      // cuánto tarda en EMPEZAR a moverse cada partícula
      const durations = new Float32Array(count);   // cuánto TARDA cada partícula en llegar a su destino

      // ESTO CONTROLA LA VELOCIDAD GLOBAL DE LA ANIMACIÓN DE FORMACIÓN:
      // multiplicador único aplicado a delays y duraciones. Es el sitio
      // recomendado para "ajustar el ritmo" sin tocar el resto de la lógica.
      // Más alto = animación más lenta/pausada. Más bajo (ej. 1) = más rápida.
      const SPEED_FACTOR = 2.2;

      for (let i = 0; i < count; i++) {
        const tx = targets[i * 3];     // posición final X de esta partícula
        const ty = targets[i * 3 + 1]; // posición final Y de esta partícula

        // Cada partícula parte desde un punto aleatorio alrededor de su
        // destino final, en un círculo/anillo:
        const angle = Math.random() * Math.PI * 2; // ángulo aleatorio (0 a 360°)
        // ESTO CONTROLA CUÁN LEJOS EMPIEZAN DISPERSAS LAS PARTÍCULAS:
        // distancia aleatoria entre 3.5 y 9.5 unidades del destino. Subir
        // estos números haría que la "explosión" inicial sea más amplia.
        const dist = 3.5 + Math.random() * 6;
        starts[i * 3] = tx + Math.cos(angle) * dist;
        // El *0.6 en Y aplana un poco la dispersión verticalmente (elipse
        // en vez de círculo perfecto), para que no salgan partículas
        // desde muy arriba/abajo del hero.
        starts[i * 3 + 1] = ty + Math.sin(angle) * dist * 0.6;
        // Dispersión también en profundidad (Z), para dar sensación 3D real
        // y no solo un movimiento plano.
        starts[i * 3 + 2] = (Math.random() - 0.5) * 6;

        // ESTO CONTROLA EL "BARRIDO" DE IZQUIERDA A DERECHA DEL LOGO:
        // normX = posición horizontal normalizada (0 = borde izquierdo del
        // logo, 1 = borde derecho). Las partículas de la izquierda tienen
        // "delay" menor (empiezan antes) y las de la derecha, mayor
        // (empiezan después) — de ahí el efecto de barrido. El
        // "+ Math.random() * 0.5" añade ruido individual para que no se
        // vea como una ola perfectamente uniforme, sino más orgánica.
        delays[i] = (normX_calc(tx, planeW) * 1.1 + Math.random() * 0.5) * SPEED_FACTOR;
        // Duración individual de cada partícula al viajar hacia su destino,
        // con algo de variación aleatoria para que no todas lleguen exactamente
        // al mismo tiempo dentro de su turno.
        durations[i] = (0.9 + Math.random() * 0.5) * SPEED_FACTOR;
      }

      // ══════════════════════════════════════════════════════════
      // 3. ESCENA THREE.JS: cámara, renderer, geometría y material
      // ══════════════════════════════════════════════════════════
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        40, // ESTO CONTROLA EL "ZOOM"/CAMPO DE VISIÓN: fov (field of view) en
            // grados. Subir este número (ej. 60) da una perspectiva más
            // "gran angular" (más distorsión, se ve más escena); bajarlo
            // (ej. 25) da un efecto más "teleobjetivo"/plano.
        mount.clientWidth / mount.clientHeight, // aspect ratio del contenedor real
        0.1,  // near plane: nada más cerca de esta distancia se renderiza
        100,  // far plane: nada más lejos de esta distancia se renderiza
      );

      // ── Distancia de cámara responsive ──
      // En pantallas anchas (desktop) el frustum horizontal a z = 7 es
      // generoso y el plano de 6 unidades cabe sin problema — comportamiento
      // original, sin cambios. En dispositivos medianos/pequeños el aspect
      // ratio se vuelve más estrecho (más alto que ancho), lo que reduce el
      // ancho visible del frustum a esa misma distancia y provoca que las
      // letras del logo se salgan de los bordes del hero.
      //
      // Para evitarlo, calculamos la distancia mínima necesaria para que el
      // plano completo (con un margen de aire) quepa dentro del frustum,
      // tanto en ancho como en alto, y solo alejamos la cámara si esa
      // distancia es mayor que la distancia base. Nunca la acercamos más de
      // lo original, así en desktop el resultado visual es idéntico al actual.
      const BASE_CAMERA_Z = 7; // ESTO CONTROLA EL "TAMAÑO APARENTE" MÍNIMO DEL LOGO:
                               // distancia base de la cámara. Más alto = cámara
                               // más lejos = logo se ve más pequeño (y viceversa).
      const FIT_MARGIN = 1.15; // margen de aire extra (15%) para que el logo no
                                // quede pegado a los bordes de la pantalla en
                                // dispositivos estrechos. Subir este valor deja
                                // más "respiro" alrededor del logo.

      // Calcula cuánto habría que alejar la cámara (en el eje Z) para que el
      // plano del logo quepa dentro del frustum de visión, tanto en alto
      // como en ancho, dado el aspect ratio actual del contenedor.
      const getFitCameraZ = (aspect: number): number => {
        const vFovRad = THREE.MathUtils.degToRad(camera.fov); // fov vertical en radianes
        const halfVFovTan = Math.tan(vFovRad / 2);
        // Distancia necesaria para que quepa la ALTURA del plano:
        const distForHeight = (planeH * FIT_MARGIN) / (2 * halfVFovTan);
        // Distancia necesaria para que quepa el ANCHO del plano (depende del aspect ratio):
        const distForWidth =
          (planeW * FIT_MARGIN) / (2 * halfVFovTan * aspect);
        // Se toma la distancia más grande de las tres, para garantizar que
        // el logo entero sea visible sin recortes, y nunca menor que la base.
        return Math.max(BASE_CAMERA_Z, distForHeight, distForWidth);
      };

      camera.position.z = getFitCameraZ(mount.clientWidth / mount.clientHeight);

      const renderer = new THREE.WebGLRenderer({
        antialias: true, // suaviza los bordes dentados de las formas renderizadas
        alpha: true,     // fondo transparente, para que se vea el fondo de la web detrás
      });
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      // Limita el pixel ratio del renderer a 2 como máximo (igual que "dpr"
      // más arriba), para no sobrecargar la GPU en pantallas de muy alta
      // densidad sin ganancia visual perceptible.
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mount.appendChild(renderer.domElement); // inyecta el <canvas> real en el DOM

      // Geometría: contenedor de los datos de posición y color de TODAS las
      // partículas, que Three.js dibuja de una sola vez como "puntos".
      const geometry = new THREE.BufferGeometry();
      const positionAttr = new THREE.BufferAttribute(
        // Si hay que saltar la animación, arranca directamente en las
        // posiciones finales (targets); si no, arranca disperso (starts).
        skipAnimation ? new Float32Array(targets) : starts.slice(),
        3, // cada partícula usa 3 valores (x, y, z)
      );
      // DynamicDrawUsage: le dice a la GPU que este atributo se va a
      // actualizar constantemente cada frame (durante la animación), para
      // que optimice la memoria en consecuencia.
      positionAttr.setUsage(THREE.DynamicDrawUsage);
      geometry.setAttribute("position", positionAttr);
      geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3),
      );

      const dotTexture = createDotTexture(); // la textura circular difuminada creada arriba

      // ESTO CONTROLA EL TAMAÑO DE CADA PARTÍCULA INDIVIDUAL:
      // se basa en "spacing" (la distancia real entre partículas contiguas,
      // calculada en el paso 1) multiplicado por 1.6. Este factor de solape
      // garantiza que las partículas se toquen/solapen ligeramente entre sí
      // y no queden huecos visibles, sin pasarse de tamaño y perder nitidez
      // del logo. Si subes el 1.6 a, por ejemplo, 2.5, las partículas se
      // verán más grandes y "borrosas" (más solapadas); si lo bajas a 1.0,
      // aparecerán huecos entre ellas.
      const pointSize = spacing * 1.6;
      const material = new THREE.PointsMaterial({
        size: pointSize,        // tamaño del punto (ver comentario arriba)
        map: dotTexture,        // textura circular difuminada aplicada a cada punto
        vertexColors: true,     // ESTO HACE QUE CADA PARTÍCULA USE SU PROPIO COLOR
                                 // (el extraído del PNG en "colors[]"), en vez de
                                 // un único color fijo para todas.
        transparent: true,      // permite que la textura tenga zonas transparentes
        alphaTest: 0.05,        // descarta píxeles con alfa por debajo de este umbral,
                                 // evitando halos semitransparentes feos en los bordes
        depthWrite: false,      // evita problemas de "partículas que se tapan entre
                                 // sí de forma rara" al superponerse muchas transparencias
        sizeAttenuation: true,  // ESTO HACE QUE LAS PARTÍCULAS MÁS LEJANAS DE LA
                                 // CÁMARA SE VEAN MÁS PEQUEÑAS (perspectiva real). Si
                                 // lo pusieras en false, todas las partículas medirían
                                 // lo mismo en pantalla sin importar la distancia.
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      // ══════════════════════════════════════════════════════════
      // 4. ANIMACIÓN: bucle de render, movimiento, interacción con el mouse
      // ══════════════════════════════════════════════════════════
      const clock = new THREE.Clock(); // reloj interno de Three.js para medir el tiempo transcurrido
      let formedFired = false; // evita disparar onFormed() más de una vez

      // Calcula el instante (en segundos) en el que la ÚLTIMA partícula
      // termina su viaje — es decir, cuándo se considera "formado" el logo.
      const maxFinish = skipAnimation
        ? 0
        : Math.max(...Array.from(delays)) + 1.4 * SPEED_FACTOR;

      // ── Efecto de inclinación (tilt) siguiendo al cursor ──
      let targetTiltX = 0,
        targetTiltY = 0;
      const handlePointerMove = (e: PointerEvent) => {
        const rect = mount.getBoundingClientRect();
        // Posición del cursor normalizada dentro del contenedor, de -0.5 a 0.5
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        // ESTO CONTROLA CUÁNTO SE INCLINA EL LOGO AL MOVER EL RATÓN:
        // 0.12 y 0.08 son los ángulos máximos de inclinación (en radianes)
        // en cada eje. Subir estos números haría el efecto más exagerado;
        // bajarlos, más sutil.
        targetTiltY = nx * 0.12;
        targetTiltX = -ny * 0.08;
      };
      mount.addEventListener("pointermove", handlePointerMove);
      cleanupFns.push(() =>
        mount.removeEventListener("pointermove", handlePointerMove),
      );

      const posArray = positionAttr.array as Float32Array;

      const animate = () => {
        raf = requestAnimationFrame(animate); // programa el siguiente frame (bucle infinito mientras esté montado)
        const elapsed = clock.getElapsedTime(); // segundos transcurridos desde que arrancó el reloj

        if (!skipAnimation) {
          // Recorre TODAS las partículas en cada frame para actualizar su posición:
          for (let i = 0; i < count; i++) {
            // "t" = progreso (0 a 1) del viaje de esta partícula concreta,
            // según cuánto tiempo ha pasado desde su "delay" hasta su "duration".
            const t = Math.min(
              Math.max((elapsed - delays[i]) / durations[i], 0),
              1,
            );
            // ESTO CONTROLA LA "CURVA" DE ACELERACIÓN/DESACELERACIÓN (easing):
            // 1 - (1-t)^3 es un "ease-out cúbico": la partícula empieza
            // rápido y va frenando al acercarse a su destino, dando una
            // sensación natural de "aterrizaje" suave.
            const eased = 1 - Math.pow(1 - t, 3);

            const idx = i * 3;
            // Interpolación lineal entre posición inicial (starts) y final
            // (targets), usando el progreso "eased" ya suavizado.
            posArray[idx] = starts[idx] + (targets[idx] - starts[idx]) * eased;
            posArray[idx + 1] =
              starts[idx + 1] + (targets[idx + 1] - starts[idx + 1]) * eased;
            posArray[idx + 2] =
              starts[idx + 2] + (targets[idx + 2] - starts[idx + 2]) * eased;

            if (t >= 1) {
              // Una vez que la partícula YA llegó a su destino (t=1), se le
              // aplica un ligero movimiento oscilante en Z (adelante/atrás)
              // tipo "respiración", para que el logo no quede totalmente
              // estático una vez formado.
              // "phase" (basado en el índice de la partícula) hace que no
              // todas oscilen exactamente igual y a la vez, dando un efecto
              // más orgánico tipo "brillo animado".
              const phase = i * 0.618; // 0.618 ≈ proporción áurea, usada aquí solo
                                        // para desincronizar bien las fases sin patrón repetitivo visible
              // ESTO CONTROLA LA INTENSIDAD Y VELOCIDAD DE ESA "RESPIRACIÓN":
              // 0.6 = velocidad de la oscilación; 0.015 = amplitud (qué tanto
              // se mueve en Z). Subir 0.015 haría el efecto más notorio.
              posArray[idx + 2] = Math.sin(elapsed * 0.6 + phase) * 0.015;
            }
          }
          positionAttr.needsUpdate = true; // avisa a Three.js de que recalcule/re-suba estos datos a la GPU

          // Cuando ya pasó el tiempo de formación total, se dispara UNA sola
          // vez el callback onFormed (útil, por ejemplo, para lanzar otra
          // animación en la página justo cuando el logo termina de formarse).
          if (!formedFired && elapsed > maxFinish) {
            formedFired = true;
            markAsFormed();
            onFormed?.();
          }
        } else if (!formedFired) {
          // Si nos saltamos la animación (reduced-motion o ya formado antes),
          // igualmente se dispara onFormed de inmediato.
          formedFired = true;
          markAsFormed();
          onFormed?.();
        }

        // ESTO SUAVIZA (INERCIA) EL MOVIMIENTO DE INCLINACIÓN AL MOVER EL RATÓN:
        // en vez de saltar directamente al ángulo objetivo, se acerca un 5%
        // en cada frame ("lerp"/interpolación exponencial). El 0.05 controla
        // cuán "suave"/con retardo se siente el seguimiento del cursor: más
        // alto = responde más rápido/brusco; más bajo = más lento/fluido.
        points.rotation.x += (targetTiltX - points.rotation.x) * 0.05;
        points.rotation.y += (targetTiltY - points.rotation.y) * 0.05;

        renderer.render(scene, camera); // dibuja el frame actual
      };
      animate(); // arranca el bucle

      // ── Reajuste al cambiar el tamaño de la ventana/contenedor ──
      const handleResize = () => {
        if (!mount) return;
        const aspect = mount.clientWidth / mount.clientHeight;
        camera.aspect = aspect;
        camera.position.z = getFitCameraZ(aspect); // recalcula distancia para que siga cabiendo el logo
        camera.updateProjectionMatrix(); // obligatorio tras cambiar fov/aspect/near/far en la cámara
        renderer.setSize(mount.clientWidth, mount.clientHeight);
      };
      window.addEventListener("resize", handleResize);
      cleanupFns.push(() => window.removeEventListener("resize", handleResize));

      // ── Limpieza de recursos de GPU/memoria al desmontar el componente ──
      // Muy importante en Three.js: si no se hace "dispose" explícito, estos
      // recursos NO los recoge el garbage collector normal de JS y se
      // quedan ocupando memoria de la GPU (memory leak) cada vez que el
      // componente se monta/desmonta (ej. al navegar entre páginas).
      cleanupFns.push(() => {
        if (raf) cancelAnimationFrame(raf);
        renderer.dispose();
        geometry.dispose();
        material.dispose();
        dotTexture.dispose();
        if (renderer.domElement.parentNode === mount) {
          mount.removeChild(renderer.domElement);
        }
      });
    };

    // Función de limpieza que React ejecuta al desmontar el componente o
    // antes de volver a correr el efecto (si cambiaran imageSrc/onFormed).
    return () => {
      disposed = true;
      cleanupFns.forEach((fn) => fn());
    };
  }, [imageSrc, onFormed]);

  // Contenedor vacío: Three.js le inyecta su <canvas> dentro dinámicamente.
  // w-full h-full: ocupa todo el espacio disponible del padre.
  return <div ref={mountRef} className="w-full h-full" />;
}