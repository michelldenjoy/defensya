'use client';

import { useEffect, useRef, useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// INSTRUCCIONES DE USO
//
// OPCIÓN A – Modelo GLTF (recomendado para producción):
//   1. Descarga un jet fighter en formato .glb desde:
//      - https://sketchfab.com  (busca "fighter jet free")
//      - https://poly.pizza      (busca "aircraft")
//      - https://nasa3d.arc.nasa.gov/models
//   2. Coloca el archivo en /public/models/fighter-jet.glb
//   3. Ajusta MODEL_SCALE y MODEL_OFFSET a continuación según tu modelo.
//
// OPCIÓN B – Fallback geométrico mejorado (activo si no hay modelo):
//   El componente lo usa automáticamente si el modelo no se encuentra.
// ─────────────────────────────────────────────────────────────────────────────

const MODEL_PATH   = '/models/fighter-jet.glb'; // ruta relativa a /public
const MODEL_SCALE  = 1.0;                        // ajusta según el modelo
const MODEL_OFFSET = [0, 0, 0] as const;         // [x, y, z] para centrar

export default function ThreePlane() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<'loading' | 'model' | 'fallback'>('loading');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let rafId: number;
    let mounted = true;
    const cleanups: (() => void)[] = [];

    (async () => {
      // ── Importaciones dinámicas ──────────────────────────────────────────
      const THREE = await import('three');

      // Addons (disponibles en three >= r160; si usas una versión anterior
      // cámbia las rutas a 'three/examples/jsm/...')
      const { GLTFLoader }       = await import('three/addons/loaders/GLTFLoader.js');
      const { DRACOLoader }      = await import('three/addons/loaders/DRACOLoader.js');
      const { RGBELoader }       = await import('three/addons/loaders/RGBELoader.js');
      const { EffectComposer }   = await import('three/addons/postprocessing/EffectComposer.js');
      const { RenderPass }       = await import('three/addons/postprocessing/RenderPass.js');
      const { UnrealBloomPass }  = await import('three/addons/postprocessing/UnrealBloomPass.js');
      const { OutputPass }       = await import('three/addons/postprocessing/OutputPass.js');

      if (!mounted) return;

      const container = canvas.parentElement as HTMLElement;
      const W = () => container.clientWidth;
      const H = () => container.clientHeight;

      // ── Renderer con configuración cinematográfica ───────────────────────
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.setSize(W(), H());
      renderer.setClearColor(0x05080e, 1);

      // Tone mapping ACES: aspecto de película de ciencia ficción/militar
      renderer.toneMapping          = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure  = 1.3;
      renderer.outputColorSpace     = THREE.SRGBColorSpace;
      renderer.shadowMap.enabled    = true;
      renderer.shadowMap.type       = THREE.PCFSoftShadowMap;
      cleanups.push(() => renderer.dispose());

      // ── Escena y cámara ──────────────────────────────────────────────────
      const scene = new THREE.Scene();
      scene.fog   = new THREE.FogExp2(0x05080e, 0.01);

      const cam = new THREE.PerspectiveCamera(42, W() / H(), 0.1, 500);
      cam.position.set(0, 5, 34);
      cam.lookAt(1, 0, 0);

      // ── Post-procesado: bloom + output ───────────────────────────────────
      const composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, cam));

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(W(), H()),
        0.75,   // strength  → brillo general del halo
        0.5,    // radius    → radio de dispersión
        0.82,   // threshold → sólo brilla lo que supera este umbral
      );
      composer.addPass(bloomPass);
      composer.addPass(new OutputPass()); // gestiona color space correctamente

      // ── Entorno HDR para reflexiones realistas ───────────────────────────
      // Usa un HDR gratuito (e.g., poly haven) en /public/hdr/studio.hdr
      // Si no tienes HDR, el componente funciona igualmente con luces.
      try {
        const rgbeLoader = new RGBELoader();
        const envTexture = await new Promise<THREE.DataTexture>((res, rej) =>
          rgbeLoader.load('/hdr/studio.hdr', res, undefined, rej)
        );
        envTexture.mapping     = THREE.EquirectangularReflectionMapping;
        scene.environment      = envTexture;
        scene.environmentIntensity = 0.4; // sutil: no aplasta la iluminación personalizada
      } catch {
        // Sin HDR: continúa. Las luces direccionales compensan.
      }

      // ── Iluminación de tres puntos (estilo aeronáutico/industrial) ───────
      // Luz ambiental muy oscura para no aplanar el modelo
      scene.add(new THREE.AmbientLight(0x0a1535, 1.5));

      // Key light: luz principal desde arriba-frente-derecha
      const keyLight = new THREE.DirectionalLight(0x6699cc, 5);
      keyLight.position.set(14, 22, 12);
      keyLight.castShadow                  = true;
      keyLight.shadow.mapSize.setScalar(2048);
      keyLight.shadow.camera.near          = 0.5;
      keyLight.shadow.camera.far           = 80;
      keyLight.shadow.camera.left          = -20;
      keyLight.shadow.camera.right         = 20;
      keyLight.shadow.camera.top           = 20;
      keyLight.shadow.camera.bottom        = -20;
      keyLight.shadow.bias                 = -0.0005;
      scene.add(keyLight);

      // Rim light: contraluz azulado para separar el avión del fondo
      const rimLight = new THREE.DirectionalLight(0x1a3870, 3.5);
      rimLight.position.set(-14, -6, -12);
      scene.add(rimLight);

      // Fill light: rellena sombras sin eliminarlas
      const fillLight = new THREE.DirectionalLight(0x203050, 1.8);
      fillLight.position.set(0, -8, 18);
      scene.add(fillLight);

      // Luz puntual del motor (glow azul intenso)
      const engineLight = new THREE.PointLight(0x4a9eff, 12, 18, 2);
      engineLight.position.set(-7.5, 0, 0);
      scene.add(engineLight);

      // ── Grupo principal (permite rotación independiente) ──────────────────
      const pl = new THREE.Group();
      pl.rotation.set(-0.05, 0.4, 0);
      scene.add(pl);

      // ── Intentar cargar modelo GLTF ───────────────────────────────────────
      let modelLoaded = false;

      try {
        const dracoLoader = new DRACOLoader();
        // Decodificador DRACO (necesario para modelos comprimidos de Sketchfab)
        dracoLoader.setDecoderPath(
          'https://www.gstatic.com/draco/versioned/decoders/1.5.6/'
        );

        const gltfLoader = new GLTFLoader();
        gltfLoader.setDRACOLoader(dracoLoader);

        const gltf = await new Promise<{ scene: THREE.Group }>((resolve, reject) => {
          gltfLoader.load(MODEL_PATH, resolve as any, undefined, reject);
        });

        const model = gltf.scene;
        model.scale.setScalar(MODEL_SCALE);
        model.position.set(...MODEL_OFFSET);

        // Mejorar materiales del modelo con PBR
        model.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          child.castShadow    = true;
          child.receiveShadow = true;

          // Reemplazar cualquier material básico por MeshStandardMaterial PBR
          const old = child.material as THREE.MeshStandardMaterial;
          child.material = new THREE.MeshStandardMaterial({
            map:              old?.map              ?? null,
            normalMap:        old?.normalMap        ?? null,
            roughnessMap:     old?.roughnessMap     ?? null,
            metalnessMap:     old?.metalnessMap     ?? null,
            color:            old?.color            ?? new THREE.Color(0x2a3a50),
            roughness:        old?.roughness        ?? 0.35,
            metalness:        old?.metalness        ?? 0.85,
            envMapIntensity:  1.4,
          });
        });

        pl.add(model);
        modelLoaded = true;
        setStatus('model');

      } catch {
        // Modelo no encontrado → fallback geométrico mejorado (ver abajo)
        setStatus('fallback');
      }

      // ── Fallback geométrico mejorado ──────────────────────────────────────
      if (!modelLoaded) {
        buildFallbackJet(pl, THREE);
      }

      // ── Partículas de escape del motor ────────────────────────────────────
      const EX = 48;
      type ExParticle = { x: number; y: number; z: number; life: number };
      const exPts: ExParticle[] = Array.from({ length: EX }, () => ({
        x:    -7.3 - Math.random() * 8,
        y:    (Math.random() - 0.5) * 0.5,
        z:    (Math.random() - 0.5) * 0.5,
        life: Math.random(),
      }));
      const exPos = new Float32Array(EX * 3);
      const exCol = new Float32Array(EX * 3);
      const exGeo = new THREE.BufferGeometry();
      exGeo.setAttribute('position', new THREE.BufferAttribute(exPos, 3));
      exGeo.setAttribute('color',    new THREE.BufferAttribute(exCol, 3));

      const exMesh = new THREE.Points(exGeo, new THREE.PointsMaterial({
        size:         0.32,
        vertexColors: true,
        transparent:  true,
        opacity:      0.85,
        blending:     THREE.AdditiveBlending,
        depthWrite:   false,
      }));
      pl.add(exMesh);

      // ── Cuadrícula de suelo táctica ───────────────────────────────────────
      const grid = new THREE.GridHelper(80, 40, 0x0c1a2e, 0x0a1525);
      grid.position.y = -9;
      (grid.material as THREE.Material).transparent = true;
      (grid.material as THREE.Material).opacity = 0.6;
      scene.add(grid);

      // ── Redimensionar ─────────────────────────────────────────────────────
      const onResize = () => {
        renderer.setSize(W(), H());
        composer.setSize(W(), H());
        cam.aspect = W() / H();
        cam.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);
      cleanups.push(() => window.removeEventListener('resize', onResize));

      // ── Interacción con ratón ─────────────────────────────────────────────
      let targetY = 0.4, targetX = -0.05;
      const onMouseMove = (e: MouseEvent) => {
        const r  = container.getBoundingClientRect();
        const mx = (e.clientX - r.left)  / r.width  * 2 - 1;
        const my = (e.clientY - r.top)   / r.height * 2 - 1;
        targetY  = 0.4 + mx * 0.85;
        targetX  = -0.05 - my * 0.38;
      };
      const onMouseLeave = () => { targetY = 0.4; targetX = -0.05; };
      container.addEventListener('mousemove',  onMouseMove);
      container.addEventListener('mouseleave', onMouseLeave);
      cleanups.push(() => {
        container.removeEventListener('mousemove',  onMouseMove);
        container.removeEventListener('mouseleave', onMouseLeave);
      });

      // ── Loop de animación ─────────────────────────────────────────────────
      let t = 0;
      const loop = () => {
        if (!mounted) return;
        rafId = requestAnimationFrame(loop);
        t += 0.016;

        // Suavizado de rotación (lerp)
        pl.rotation.y += (targetY - pl.rotation.y) * 0.05;
        pl.rotation.x += (targetX - pl.rotation.x) * 0.05;

        // Pulso del motor
        engineLight.intensity = 10 + 4 * Math.sin(t * 3.4);

        // Actualizar partículas
        for (let i = 0; i < EX; i++) {
          const p = exPts[i];
          p.life -= 0.016;
          p.x    -= 0.06;
          if (p.life <= 0) {
            p.x    = -7.3;
            p.y    = (Math.random() - 0.5) * 0.4;
            p.z    = (Math.random() - 0.5) * 0.4;
            p.life = 1;
          }
          exPos[i*3]   = p.x;
          exPos[i*3+1] = p.y;
          exPos[i*3+2] = p.z;
          const l = p.life;
          exCol[i*3]   = 0.08 * l;
          exCol[i*3+1] = 0.3  * l;
          exCol[i*3+2] = l    * 0.95;
        }
        exGeo.attributes.position.needsUpdate = true;
        exGeo.attributes.color.needsUpdate    = true;

        composer.render(); // usa el composer (con bloom) en lugar de renderer.render
      };

      loop();
      cleanups.push(() => cancelAnimationFrame(rafId));
    })();

    return () => {
      mounted = false;
      cleanups.forEach(fn => fn());
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-[#05080e]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Indicador de estado */}
      {status === 'loading' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-blue-400 text-xs tracking-[0.25em] uppercase">
            Cargando sistema...
          </span>
        </div>
      )}

      {/* Badge: modelo real vs fallback */}
      {status !== 'loading' && (
        <div className="absolute bottom-4 right-4 px-2 py-1 rounded text-[10px] tracking-widest uppercase border
          border-blue-900 text-blue-600 bg-[#05080e]/80 backdrop-blur-sm select-none">
          {status === 'model' ? '3D MODEL LOADED' : 'GEOMETRIC PREVIEW'}
        </div>
      )}

      {/* HUD decorativo (marca Defensya) */}
      <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] text-blue-900 select-none uppercase">
        Defensya · Aerospace Division
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Fallback geométrico mejorado (MeshStandardMaterial PBR en vez de Phong)
// Se activa automáticamente si no hay modelo GLTF disponible
// ─────────────────────────────────────────────────────────────────────────────
function buildFallbackJet(pl: import('three').Group, THREE: typeof import('three')) {

  // Material PBR base del fuselaje (metálico oscuro)
  const bodyMat = new THREE.MeshStandardMaterial({
    color:     0x0e1e33,
    roughness: 0.3,
    metalness: 0.9,
    envMapIntensity: 1.2,
  });

  // Aristas visibles con color azul militar
  const edgeMat = new THREE.LineBasicMaterial({
    color:       0x3b82f6,
    transparent: true,
    opacity:     0.55,
    blending:    THREE.AdditiveBlending,
    depthWrite:  false,
  });

  const edgeDimMat = new THREE.LineBasicMaterial({
    color:       0x1a3870,
    transparent: true,
    opacity:     0.28,
    blending:    THREE.AdditiveBlending,
    depthWrite:  false,
  });

  const makePart = (geo: import('three').BufferGeometry, bright: boolean) => {
    const g = new THREE.Group();
    const mesh = new THREE.Mesh(geo, bodyMat);
    mesh.castShadow    = true;
    mesh.receiveShadow = true;
    g.add(mesh);
    g.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), bright ? edgeMat : edgeDimMat));
    return g;
  };

  const makeWing = (
    rz: number, tz: number,
    rxf: number, rxb: number,
    txf: number, txb: number,
    th: number,
  ) => {
    const h = th / 2;
    const pos = new Float32Array([
      rxf,-h,rz, rxb,-h,rz, txb,-h,tz, txf,-h,tz,
      rxf, h,rz, rxb, h,rz, txb, h,tz, txf, h,tz,
    ]);
    const idx = [0,1,2, 0,2,3, 4,6,5, 4,7,6, 0,4,5, 0,5,1,
                 3,2,6, 3,6,7, 0,3,7, 0,7,4, 1,5,6, 1,6,2];
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    return geo;
  };

  // Fuselaje (más segmentos = silueta más suave)
  const fuse = makePart(new THREE.CylinderGeometry(0.68, 1.05, 13, 12), true);
  fuse.rotation.z = Math.PI / 2;
  pl.add(fuse);

  // Morro afilado
  const nose = makePart(new THREE.ConeGeometry(0.68, 6, 12), true);
  nose.rotation.z = -Math.PI / 2;
  nose.position.x = 9.5;
  pl.add(nose);

  // Cola
  const tail = makePart(new THREE.ConeGeometry(0.42, 2, 8), false);
  tail.rotation.z = Math.PI / 2;
  tail.position.x = -7.5;
  pl.add(tail);

  // Alas principales (barrido más pronunciado)
  pl.add(makePart(makeWing( 1.1,  9.8,  2.6, -2.8, -3.8, -6.5, 0.18), true));
  pl.add(makePart(makeWing(-1.1, -9.8,  2.6, -2.8, -3.8, -6.5, 0.18), true));

  // Estabilizadores horizontales
  pl.add(makePart(makeWing( 0.85,  3.9, -5.2, -6.7, -6.7, -8.0, 0.13), false));
  pl.add(makePart(makeWing(-0.85, -3.9, -5.2, -6.7, -6.7, -8.0, 0.13), false));

  // Aleta vertical
  const vFinPos = new Float32Array([
    -4.9, 0.7,-0.1, -7.1, 0.7,-0.1, -6.9, 5.2,-0.1, -5.1, 5.2,-0.1,
    -4.9, 0.7, 0.1, -7.1, 0.7, 0.1, -6.9, 5.2, 0.1, -5.1, 5.2, 0.1,
  ]);
  const vFinIdx = [0,1,2, 0,2,3, 4,6,5, 4,7,6, 0,4,5, 0,5,1,
                   3,2,6, 3,6,7, 0,3,7, 0,7,4, 1,5,6, 1,6,2];
  const vFinGeo = new THREE.BufferGeometry();
  vFinGeo.setAttribute('position', new THREE.BufferAttribute(vFinPos, 3));
  vFinGeo.setIndex(vFinIdx);
  vFinGeo.computeVertexNormals();
  pl.add(makePart(vFinGeo, false));

  // Cabina con vidrio tintado
  const cockpitMat = new THREE.MeshStandardMaterial({
    color:       0x0d2040,
    roughness:   0.05,
    metalness:   0.4,
    transparent: true,
    opacity:     0.85,
    side:        THREE.DoubleSide,
    envMapIntensity: 2.5,
  });
  const cockpit = new THREE.Mesh(
    new THREE.SphereGeometry(0.54, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5),
    cockpitMat,
  );
  cockpit.position.set(5.2, 0.74, 0);
  pl.add(cockpit);

  // Anillo del motor (resplandor)
  const glowMat = new THREE.MeshBasicMaterial({
    color:       0x4a9eff,
    transparent: true,
    opacity:     0.7,
    blending:    THREE.AdditiveBlending,
    depthWrite:  false,
    side:        THREE.DoubleSide,
  });
  const glowMesh = new THREE.Mesh(new THREE.CircleGeometry(0.62, 32), glowMat);
  glowMesh.rotation.y = Math.PI / 2;
  glowMesh.position.x = -7.4;
  pl.add(glowMesh);

  const ringMat = new THREE.MeshBasicMaterial({
    color:       0x93c5fd,
    transparent: true,
    opacity:     0.9,
    blending:    THREE.AdditiveBlending,
    depthWrite:  false,
    side:        THREE.DoubleSide,
  });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.25, 0.58, 32), ringMat);
  ring.rotation.y = Math.PI / 2;
  ring.position.x = -7.4;
  pl.add(ring);
}