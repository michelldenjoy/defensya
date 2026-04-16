'use client';

import { useEffect, useRef } from 'react';
import type { BufferAttribute } from 'three';

export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let rafId = 0;
    let mounted = true;
    const cleanups: Array<() => void> = [];

    (async () => {
      const THREE = await import('three');
      if (!mounted || !canvasRef.current) return;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });

      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      cleanups.push(() => {
        renderer.dispose();
      });

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      camera.position.z = 90;

      const resize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      resize();
      window.addEventListener('resize', resize);
      cleanups.push(() => window.removeEventListener('resize', resize));

      /* GRID */
      const grid = new THREE.GridHelper(190, 26, 0x0c1a2e, 0x0c1a2e);
      grid.rotation.x = Math.PI / 2;
      grid.position.z = -30;
      scene.add(grid);

      /* RADAR PINGS */
      const pingVerts: number[] = [];

      for (let i = 0; i <= 64; i++) {
        const a = (i / 64) * Math.PI * 2;
        pingVerts.push(Math.cos(a), Math.sin(a), 0);
      }

      const pingGeo = new THREE.BufferGeometry();
      pingGeo.setAttribute(
        'position',
        new THREE.BufferAttribute(new Float32Array(pingVerts), 3)
      );

      const pings = [0, 38].map((offset) => {
        const mat = new THREE.LineBasicMaterial({
          color: 0x3b82f6,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });

        const mesh = new THREE.LineLoop(pingGeo, mat);
        scene.add(mesh);

        return { mesh, mat, t: offset };
      });

      /* PARTICLES */
      const TOTAL = 95;
      const NODES = 14;

      const BX = 68;
      const BY = 42;
      const BZ = 30;

      const pts = Array.from({ length: TOTAL }, () => ({
        x: (Math.random() - 0.5) * BX * 2,
        y: (Math.random() - 0.5) * BY * 2,
        z: (Math.random() - 0.5) * BZ * 2,
        vx: (Math.random() - 0.5) * 0.02,
        vy: (Math.random() - 0.5) * 0.02,
        vz: (Math.random() - 0.5) * 0.008,
      }));

      const allPos = new Float32Array(
        pts.flatMap((p) => [p.x, p.y, p.z])
      );

      const allGeo = new THREE.BufferGeometry();
      allGeo.setAttribute(
        'position',
        new THREE.BufferAttribute(allPos, 3)
      );

      scene.add(
        new THREE.Points(
          allGeo,
          new THREE.PointsMaterial({
            size: 0.55,
            color: 0x4488bb,
            transparent: true,
            opacity: 0.55,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          })
        )
      );

      const nodePos = new Float32Array(
        pts.slice(0, NODES).flatMap((p) => [p.x, p.y, p.z])
      );

      const nodeGeo = new THREE.BufferGeometry();
      nodeGeo.setAttribute(
        'position',
        new THREE.BufferAttribute(nodePos, 3)
      );

      scene.add(
        new THREE.Points(
          nodeGeo,
          new THREE.PointsMaterial({
            size: 1.9,
            color: 0x60a5fa,
            transparent: true,
            opacity: 1,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          })
        )
      );

      /* CONNECTION LINES */
      const MAX = 240;

      const lPos = new Float32Array(MAX * 6);
      const lCol = new Float32Array(MAX * 6);

      const lGeo = new THREE.BufferGeometry();

      lGeo.setAttribute(
        'position',
        new THREE.BufferAttribute(lPos, 3)
      );

      lGeo.setAttribute(
        'color',
        new THREE.BufferAttribute(lCol, 3)
      );

      lGeo.setDrawRange(0, 0);

      scene.add(
        new THREE.LineSegments(
          lGeo,
          new THREE.LineBasicMaterial({
            vertexColors: true,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          })
        )
      );

      const allAttr = allGeo.attributes.position as BufferAttribute;
      const nodeAttr = nodeGeo.attributes.position as BufferAttribute;
      const linePosAttr = lGeo.attributes.position as BufferAttribute;
      const lineColAttr = lGeo.attributes.color as BufferAttribute;

      /* MOUSE */
      let mx = 0;
      let my = 0;

      const onMouseMove = (e: MouseEvent) => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
      };

      window.addEventListener('mousemove', onMouseMove);
      cleanups.push(() =>
        window.removeEventListener('mousemove', onMouseMove)
      );

      const DIST = 26;
      const DIST2 = DIST * DIST;

      /* LOOP */
      const animate = () => {
        rafId = requestAnimationFrame(animate);

        for (let i = 0; i < TOTAL; i++) {
          const p = pts[i];

          p.x += p.vx;
          p.y += p.vy;
          p.z += p.vz;

          if (Math.abs(p.x) > BX) p.vx *= -1;
          if (Math.abs(p.y) > BY) p.vy *= -1;
          if (Math.abs(p.z) > BZ) p.vz *= -1;

          allAttr.setXYZ(i, p.x, p.y, p.z);

          if (i < NODES) {
            nodeAttr.setXYZ(i, p.x, p.y, p.z);
          }
        }

        allAttr.needsUpdate = true;
        nodeAttr.needsUpdate = true;

        let lc = 0;

        for (let i = 0; i < TOTAL && lc < MAX; i++) {
          for (let j = i + 1; j < TOTAL && lc < MAX; j++) {
            const a = pts[i];
            const b = pts[j];

            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dz = a.z - b.z;

            const d2 = dx * dx + dy * dy + dz * dz;

            if (d2 < DIST2) {
              const t = (1 - Math.sqrt(d2) / DIST) * 0.5;
              const k = lc * 6;

              lPos[k] = a.x;
              lPos[k + 1] = a.y;
              lPos[k + 2] = a.z;

              lPos[k + 3] = b.x;
              lPos[k + 4] = b.y;
              lPos[k + 5] = b.z;

              lCol[k] = 0.15 * t;
              lCol[k + 1] = 0.38 * t;
              lCol[k + 2] = t;

              lCol[k + 3] = 0.15 * t;
              lCol[k + 4] = 0.38 * t;
              lCol[k + 5] = t;

              lc++;
            }
          }
        }

        linePosAttr.needsUpdate = true;
        lineColAttr.needsUpdate = true;
        lGeo.setDrawRange(0, lc * 2);

        pings.forEach((pg) => {
          pg.t = (pg.t + 0.13) % 56;

          const s = pg.t + 0.01;
          pg.mesh.scale.set(s, s, 1);

          pg.mat.opacity = Math.max(
            0,
            0.38 * (1 - pg.t / 56)
          );
        });

        camera.position.x += (mx * 10 - camera.position.x) * 0.04;
        camera.position.y += (-my * 6 - camera.position.y) * 0.04;

        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      };

      animate();

      cleanups.push(() => cancelAnimationFrame(rafId));
    })();

    return () => {
      mounted = false;
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 h-full w-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}