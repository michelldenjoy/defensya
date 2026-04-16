"use client";

import { useEffect, useRef } from "react";

export default function AirplaneModel() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let renderer: any;
    let scene: any;
    let camera: any;
    let plane: any;
    let frameId: number;
    let mounted = true;

    const init = async () => {
      if (!ref.current) return;

      const THREE = await import("three");
      const { OBJLoader } = await import(
        "three/examples/jsm/loaders/OBJLoader.js"
      );
      const { MTLLoader } = await import(
        "three/examples/jsm/loaders/MTLLoader.js"
      );

      /* ---------------- RENDERER ---------------- */
      renderer = new THREE.WebGLRenderer({
        canvas: ref.current,
        alpha: true,
        antialias: true,
      });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      /* ---------------- SCENE ---------------- */
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      camera.position.set(0, 1.2, 40);

      /* ---------------- LIGHTS ---------------- */
      const light = new THREE.DirectionalLight(0xffffff, 2);
      light.position.set(5, 5, 5);
      scene.add(light);

      scene.add(new THREE.AmbientLight(0x3b82f6, 1.2));

      /* ---------------- LOAD MODEL ---------------- */
      const mtlLoader = new MTLLoader();
      mtlLoader.setPath("/models/airplane/");

      mtlLoader.load("11803_Airplane_v1_l1.mtl", (materials: any) => {
        materials.preload();

        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath("/models/airplane/");

        objLoader.load("11803_Airplane_v1_l1.obj", (object: any) => {
          plane = object;

          // 🔧 AJUSTE IMPORTANTE (escala realista)
          plane.scale.set(0.02, 0.02, 0.02);
          plane.rotation.y = Math.PI;

          scene.add(plane);
        });
      });

      /* ---------------- ANIMATION ---------------- */
      const animate = () => {
        if (!mounted) return;

        frameId = requestAnimationFrame(animate);

        if (plane) {
          plane.rotation.y += 0.003;
          plane.position.y = Math.sin(Date.now() * 0.001) * 0.15;
        }

        renderer.render(scene, camera);
      };

      animate();

      /* ---------------- RESIZE ---------------- */
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    };

    init();

    return () => {
      mounted = false;
      cancelAnimationFrame(frameId);
      renderer?.dispose?.();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
