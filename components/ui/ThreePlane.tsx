"use client";

import { useEffect, useRef, useState } from "react";

const MODEL_PATH = "/models/fighter-jet.glb";
const MODEL_SCALE = 0.2;
const MODEL_OFFSET = [-4, 0, 0] as const;

export default function ThreePlane() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<"loading" | "model" | "fallback">(
    "loading"
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let mounted = true;
    let rafId = 0;
    const cleanups: (() => void)[] = [];

    (async () => {
      const THREE = await import("three");

      const { GLTFLoader } = await import("three/addons/loaders/GLTFLoader.js");
      const { DRACOLoader } = await import(
        "three/addons/loaders/DRACOLoader.js"
      );
      const { RGBELoader } = await import("three/addons/loaders/RGBELoader.js");

      const { EffectComposer } = await import(
        "three/addons/postprocessing/EffectComposer.js"
      );
      const { RenderPass } = await import(
        "three/addons/postprocessing/RenderPass.js"
      );
      const { UnrealBloomPass } = await import(
        "three/addons/postprocessing/UnrealBloomPass.js"
      );
      const { OutputPass } = await import(
        "three/addons/postprocessing/OutputPass.js"
      );

      if (!mounted) return;

      const container = canvas.parentElement as HTMLElement;

      const W = () => container.clientWidth;
      const H = () => container.clientHeight;

      // Renderer
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: false,
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W(), H());
      renderer.setClearColor(0x05080e, 1);

      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.3;
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      cleanups.push(() => renderer.dispose());

      // Scene
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x05080e, 0.01);

      // Camera
      const cam = new THREE.PerspectiveCamera(42, W() / H(), 0.1, 500);
      cam.position.set(0, 5, 34);
      cam.lookAt(0, 0, 0);

      // Composer
      const composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, cam));

      const bloom = new UnrealBloomPass(
        new THREE.Vector2(W(), H()),
        0.75,
        0.5,
        0.82
      );

      composer.addPass(bloom);
      composer.addPass(new OutputPass());

      // HDRI
      try {
        const rgbeLoader = new RGBELoader();

        const env = await new Promise<any>((resolve, reject) => {
          rgbeLoader.load("/hdr/studio.hdr", resolve, undefined, reject);
        });

        env.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = env;
      } catch {
        // opcional
      }

      // Lights
      scene.add(new THREE.AmbientLight(0x0a1535, 1.5));

      const keyLight = new THREE.DirectionalLight(0x6699cc, 5);
      keyLight.position.set(14, 22, 12);
      keyLight.castShadow = true;
      scene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0x1a3870, 3.5);
      rimLight.position.set(-14, -6, -12);
      scene.add(rimLight);

      const fillLight = new THREE.DirectionalLight(0x203050, 1.8);
      fillLight.position.set(0, -8, 18);
      scene.add(fillLight);

      const engineLight = new THREE.PointLight(0x4a9eff, 12, 18, 2);
      engineLight.position.set(-7.5, 0, 0);
      scene.add(engineLight);

      // Plane Group
      const pl = new THREE.Group();
      scene.add(pl);

      // Load Model
      let loaded = false;

      try {
        const draco = new DRACOLoader();
        draco.setDecoderPath(
          "https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
        );

        const loader = new GLTFLoader();
        loader.setDRACOLoader(draco);

        const gltf = await new Promise<any>((resolve, reject) => {
          loader.load(MODEL_PATH, resolve, undefined, reject);
        });

        const model = gltf.scene;

        model.scale.setScalar(MODEL_SCALE);
        model.position.set(...MODEL_OFFSET);

        model.traverse((child: any) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        pl.add(model);

        loaded = true;
        setStatus("model");
      } catch {
        setStatus("fallback");
      }

      if (!loaded) {
        buildFallbackJet(pl, THREE);
      }

      // Grid
      const grid = new THREE.GridHelper(80, 40, 0x0c1a2e, 0x0a1525);
      grid.position.y = -9;
      (grid.material as any).transparent = true;
      (grid.material as any).opacity = 0.6;
      scene.add(grid);

      // Resize
      const onResize = () => {
        renderer.setSize(W(), H());
        composer.setSize(W(), H());

        cam.aspect = W() / H();
        cam.updateProjectionMatrix();
      };

      window.addEventListener("resize", onResize);

      cleanups.push(() => window.removeEventListener("resize", onResize));

      // ==================================================
      // 360º MOUSE CONTROL
      // ==================================================

      let targetY = 0;
      let targetX = 0;

      let isDragging = false;
      let lastX = 0;
      let lastY = 0;

      const onDown = (e: MouseEvent) => {
        isDragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
      };

      const onUp = () => {
        isDragging = false;
      };

      const onMove = (e: MouseEvent) => {
        if (!isDragging) return;

        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;

        lastX = e.clientX;
        lastY = e.clientY;

        // horizontal infinito
        targetY += dx * 0.01;

        // vertical
        targetX += dy * 0.01;

        // limitar vertical para no voltear raro
        targetX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetX));
      };

      container.addEventListener("mousedown", onDown);
      window.addEventListener("mouseup", onUp);
      window.addEventListener("mousemove", onMove);

      cleanups.push(() => {
        container.removeEventListener("mousedown", onDown);
        window.removeEventListener("mouseup", onUp);
        window.removeEventListener("mousemove", onMove);
      });

      // Touch mobile
      let touchLastX = 0;
      let touchLastY = 0;

      const onTouchStart = (e: TouchEvent) => {
        const t = e.touches[0];
        touchLastX = t.clientX;
        touchLastY = t.clientY;
      };

      const onTouchMove = (e: TouchEvent) => {
        const t = e.touches[0];

        const dx = t.clientX - touchLastX;
        const dy = t.clientY - touchLastY;

        touchLastX = t.clientX;
        touchLastY = t.clientY;

        targetY += dx * 0.01;
        targetX += dy * 0.01;

        targetX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetX));
      };

      container.addEventListener("touchstart", onTouchStart);
      container.addEventListener("touchmove", onTouchMove);

      cleanups.push(() => {
        container.removeEventListener("touchstart", onTouchStart);
        container.removeEventListener("touchmove", onTouchMove);
      });

      // Animation Loop
      let t = 0;

      const loop = () => {
        if (!mounted) return;

        rafId = requestAnimationFrame(loop);

        t += 0.016;

        // Smooth rotate
        pl.rotation.y += (targetY - pl.rotation.y) * 0.08;
        pl.rotation.x += (targetX - pl.rotation.x) * 0.08;

        engineLight.intensity = 10 + 4 * Math.sin(t * 3.4);

        composer.render();
      };

      loop();

      cleanups.push(() => cancelAnimationFrame(rafId));
    })();

    return () => {
      mounted = false;
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-[#05080e]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
      />

      {status === "loading" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-blue-400 text-xs uppercase tracking-widest">
            Cargando sistema...
          </span>
        </div>
      )}

      {status !== "loading" && (
        <div className="absolute bottom-4 right-4 px-2 py-1 rounded text-[10px] border border-blue-900 text-blue-600 bg-[#05080e]/80 uppercase tracking-widest">
          {status === "model" ? "3D MODEL LOADED" : "GEOMETRIC PREVIEW"}
        </div>
      )}

      <div className="absolute top-4 left-4 text-[10px] text-blue-900 uppercase tracking-[0.3em]">
        Defensya · Aerospace Division
      </div>
    </div>
  );
}

// ======================================================
// FALLBACK JET
// ======================================================

function buildFallbackJet(
  pl: import("three").Group,
  THREE: typeof import("three")
) {
  const mat = new THREE.MeshStandardMaterial({
    color: 0x152238,
    metalness: 0.9,
    roughness: 0.35,
  });

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 1, 13, 12), mat);
  body.rotation.z = Math.PI / 2;
  pl.add(body);

  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.7, 5, 12), mat);
  nose.rotation.z = -Math.PI / 2;
  nose.position.x = 9;
  pl.add(nose);

  const wingGeo = new THREE.BoxGeometry(6, 0.2, 14);

  const wings = new THREE.Mesh(wingGeo, mat);
  wings.position.x = -1;
  pl.add(wings);

  const tailWing = new THREE.Mesh(new THREE.BoxGeometry(3, 0.15, 6), mat);
  tailWing.position.x = -6;
  pl.add(tailWing);

  const fin = new THREE.Mesh(new THREE.BoxGeometry(2, 3, 0.2), mat);
  fin.position.set(-6, 2, 0);
  pl.add(fin);

  const glow = new THREE.Mesh(
    new THREE.CircleGeometry(0.6, 32),
    new THREE.MeshBasicMaterial({
      color: 0x4a9eff,
      transparent: true,
      opacity: 0.8,
    })
  );

  glow.rotation.y = Math.PI / 2;
  glow.position.x = -7.2;
  pl.add(glow);
}
