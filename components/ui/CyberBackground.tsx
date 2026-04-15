'use client';

import { useEffect, useRef } from 'react';

export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let rafId: number;
    let mounted = true;
    const cleanups: Array<() => void> = [];

    (async () => {
      const THREE = await import('three');
      if (!mounted || !canvasRef.current) return;

      const canvas = canvasRef.current;

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setClearColor(0x000000, 0); // transparente bg
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      cleanups.push(() => renderer.dispose());

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 90;

      const resize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', resize);
      resize();
      cleanups.push(() => window.removeEventListener('resize', resize));

      // Grid de fondo
      const grid = new THREE.GridHelper(190, 26, 0x0c1a2e, 0x0c1a2e);
      grid.rotation.x = Math.PI / 2;
      grid.position.z = -30;
      scene.add(grid);

      // Ping de radar (círculo que se expande)
      const pingVerts: number[] = [];
      for (let i = 0; i <= 64; i++) {
        const a = (i / 64) * Math.PI * 2;
        pingVerts.push(Math.cos(a), Math.sin(a), 0);
      }
      const pingGeo = new THREE.BufferGeometry();
      pingGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pingVerts), 3));

      const pings = [0, 38].map((offset) => {
        const mat = new THREE.LineBasicMaterial({
          color: 0x3b82f6, transparent: true, opacity: 0,
          blending: THREE.AdditiveBlending, depthWrite: false,
        });
        const mesh = new THREE.LineLoop(pingGeo, mat);
        scene.add(mesh);
        return { mesh, mat, t: offset };
      });

      // Partículas
      const TOTAL = 95, NODES = 14;
      const BX = 68, BY = 42, BZ = 30;
      const pts = Array.from({ length: TOTAL }, () => ({
        x: (Math.random() - 0.5) * BX * 2, y: (Math.random() - 0.5) * BY * 2, z: (Math.random() - 0.5) * BZ * 2,
        vx: (Math.random() - 0.5) * 0.02, vy: (Math.random() - 0.5) * 0.02, vz: (Math.random() - 0.5) * 0.008,
      }));

      const allPos = new Float32Array(pts.flatMap(p => [p.x, p.y, p.z]));
      const allGeo = new THREE.BufferGeometry();
      allGeo.setAttribute('position', new THREE.BufferAttribute(allPos, 3));
      scene.add(new THREE.Points(allGeo, new THREE.PointsMaterial({
        size: 0.55, color: 0x4488bb, transparent: true, opacity: 0.55,
        blending: THREE.AdditiveBlending, depthWrite: false,
      })));

      const nodePos = new Float32Array(pts.slice(0, NODES).flatMap(p => [p.x, p.y, p.z]));
      const nodeGeo = new THREE.BufferGeometry();
      nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePos, 3));
      scene.add(new THREE.Points(nodeGeo, new THREE.PointsMaterial({
        size: 1.9, color: 0x60a5fa, transparent: true, opacity: 1.0,
        blending: THREE.AdditiveBlending, depthWrite: false,
      })));

      // Líneas de conexión con color por vértice (opacidad según distancia)
      const MAX = 240;
      const lPos = new Float32Array(MAX * 6);
      const lCol = new Float32Array(MAX * 6);
      const lGeo = new THREE.BufferGeometry();
      lGeo.setAttribute('position', new THREE.BufferAttribute(lPos, 3));
      lGeo.setAttribute('color', new THREE.BufferAttribute(lCol, 3));
      lGeo.setDrawRange(0, 0);
      scene.add(new THREE.LineSegments(lGeo, new THREE.LineBasicMaterial({
        vertexColors: true, transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false,
      })));

      const DIST2 = 26 * 26;
      let mx = 0, my = 0;
      const onMouseMove = (e: MouseEvent) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener('mousemove', onMouseMove);
      cleanups.push(() => window.removeEventListener('mousemove', onMouseMove));

      const allAttr = allGeo.attributes.position as THREE.BufferAttribute;
      const nodeAttr = nodeGeo.attributes.position as THREE.BufferAttribute;
      const lPA = lGeo.attributes.position as THREE.BufferAttribute;
      const lCA = lGeo.attributes.color as THREE.BufferAttribute;

      const loop = () => {
        rafId = requestAnimationFrame(loop);

        for (let i = 0; i < TOTAL; i++) {
          const p = pts[i];
          p.x += p.vx; p.y += p.vy; p.z += p.vz;
          if (Math.abs(p.x) > BX) p.vx *= -1;
          if (Math.abs(p.y) > BY) p.vy *= -1;
          if (Math.abs(p.z) > BZ) p.vz *= -1;
          allAttr.setXYZ(i, p.x, p.y, p.z);
          if (i < NODES) nodeAttr.setXYZ(i, p.x, p.y, p.z);
        }
        allAttr.needsUpdate = true;
        nodeAttr.needsUpdate = true;

        let lc = 0;
        for (let i = 0; i < TOTAL && lc < MAX; i++) {
          for (let j = i + 1; j < TOTAL && lc < MAX; j++) {
            const a = pts[i], b = pts[j];
            const dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
            const d2 = dx * dx + dy * dy + dz * dz;
            if (d2 < DIST2) {
              const t = (1 - Math.sqrt(d2) / 26) * 0.5;
              const k = lc * 6;
              lPos[k] = a.x; lPos[k + 1] = a.y; lPos[k + 2] = a.z;
              lPos[k + 3] = b.x; lPos[k + 4] = b.y; lPos[k + 5] = b.z;
              lCol[k] = 0.15 * t; lCol[k + 1] = 0.38 * t; lCol[k + 2] = t;
              lCol[k + 3] = 0.15 * t; lCol[k + 4] = 0.38 * t; lCol[k + 5] = t;
              lc++;
            }
          }
        }
        lPA.needsUpdate = true; lCA.needsUpdate = true;
        lGeo.setDrawRange(0, lc * 2);

        pings.forEach(pg => {
          pg.t = (pg.t + 0.13) % 56;
          const s = pg.t + 0.01;
          pg.mesh.scale.set(s, s, 1);
          pg.mat.opacity = Math.max(0, 0.38 * (1 - pg.t / 56));
        });

        camera.position.x += (mx * 10 - camera.position.x) * 0.04;
        camera.position.y += (-my * 6 - camera.position.y) * 0.04;
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
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
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}