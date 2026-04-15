'use client';

import { useEffect, useRef } from 'react';

export default function ThreePlane() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let rafId: number;
    let mounted = true;
    const cleanups: (() => void)[] = [];

    (async () => {
      const THREE = await import('three');
      if (!mounted || !canvasRef.current) return;

      const container = canvas.parentElement as HTMLElement;
      const W = () => container.clientWidth;
      const H = () => container.clientHeight;

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setClearColor(0x05080e, 1);
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.setSize(W(), H());
      cleanups.push(() => renderer.dispose());

      const onResize = () => {
        renderer.setSize(W(), H());
        cam.aspect = W() / H();
        cam.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);
      cleanups.push(() => window.removeEventListener('resize', onResize));

      const scene = new THREE.Scene();
      const cam = new THREE.PerspectiveCamera(42, W() / H(), 0.1, 500);
      cam.position.set(0, 5, 34);
      cam.lookAt(1, 0, 0);

      // Materiales
      const bm = new THREE.MeshPhongMaterial({ color: 0x0b1a2e, specular: 0x204060, shininess: 60, side: THREE.DoubleSide });
      const em = new THREE.LineBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.68, blending: THREE.AdditiveBlending, depthWrite: false });
      const edm = new THREE.LineBasicMaterial({ color: 0x1a3870, transparent: true, opacity: 0.38, blending: THREE.AdditiveBlending, depthWrite: false });

      const makePart = (geo: THREE.BufferGeometry, bright: boolean) => {
        const g = new THREE.Group();
        g.add(new THREE.Mesh(geo, bm));
        g.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), bright ? em : edm));
        return g;
      };

      const makeWing = (rz: number, tz: number, rxf: number, rxb: number, txf: number, txb: number, th: number) => {
        const h = th / 2;
        const pos = new Float32Array([rxf,-h,rz, rxb,-h,rz, txb,-h,tz, txf,-h,tz, rxf,h,rz, rxb,h,rz, txb,h,tz, txf,h,tz]);
        const idx = [0,1,2, 0,2,3, 4,6,5, 4,7,6, 0,4,5, 0,5,1, 3,2,6, 3,6,7, 0,3,7, 0,7,4, 1,5,6, 1,6,2];
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setIndex(idx);
        geo.computeVertexNormals();
        return geo;
      };

      const pl = new THREE.Group();
      pl.rotation.set(-0.05, 0.4, 0);
      scene.add(pl);

      // Fuselaje
      const fusePart = makePart(new THREE.CylinderGeometry(0.7, 1.08, 13, 8), true);
      fusePart.rotation.z = Math.PI / 2;
      pl.add(fusePart);

      // Morro
      const nosePart = makePart(new THREE.ConeGeometry(0.7, 5.5, 8), true);
      nosePart.rotation.z = -Math.PI / 2;
      nosePart.position.x = 9.25;
      pl.add(nosePart);

      // Cola trasera
      const tailPart = makePart(new THREE.ConeGeometry(0.44, 1.8, 8), false);
      tailPart.rotation.z = Math.PI / 2;
      tailPart.position.x = -7.4;
      pl.add(tailPart);

      // Alas principales
      pl.add(makePart(makeWing(1.1, 9.5, 2.5, -2.5, -3.5, -6.0, 0.2), true));
      pl.add(makePart(makeWing(-1.1, -9.5, 2.5, -2.5, -3.5, -6.0, 0.2), true));

      // Estabilizadores horizontales
      pl.add(makePart(makeWing(0.9, 3.8, -5.0, -6.5, -6.5, -7.8, 0.15), false));
      pl.add(makePart(makeWing(-0.9, -3.8, -5.0, -6.5, -6.5, -7.8, 0.15), false));

      // Aleta vertical
      const vFinPos = new Float32Array([
        -4.8,0.8,-0.1, -7.0,0.8,-0.1, -6.8,4.8,-0.1, -5.2,4.8,-0.1,
        -4.8,0.8, 0.1, -7.0,0.8, 0.1, -6.8,4.8, 0.1, -5.2,4.8, 0.1,
      ]);
      const vFinIdx = [0,1,2, 0,2,3, 4,6,5, 4,7,6, 0,4,5, 0,5,1, 3,2,6, 3,6,7, 0,3,7, 0,7,4, 1,5,6, 1,6,2];
      const vFinGeo = new THREE.BufferGeometry();
      vFinGeo.setAttribute('position', new THREE.BufferAttribute(vFinPos, 3));
      vFinGeo.setIndex(vFinIdx);
      vFinGeo.computeVertexNormals();
      pl.add(makePart(vFinGeo, false));

      // Cabina
      const cockpit = new THREE.Mesh(
        new THREE.SphereGeometry(0.52, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.5),
        new THREE.MeshPhongMaterial({ color: 0x0d2040, specular: 0x60a5fa, shininess: 200, transparent: true, opacity: 0.88, side: THREE.DoubleSide })
      );
      cockpit.position.set(5.2, 0.72, 0);
      pl.add(cockpit);

      // Brillo motor + anillo
      const glowMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.65, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
      const glowMesh = new THREE.Mesh(new THREE.CircleGeometry(0.6, 24), glowMat);
      glowMesh.rotation.y = Math.PI / 2;
      glowMesh.position.x = -7.3;
      pl.add(glowMesh);

      const ringMesh = new THREE.Mesh(
        new THREE.RingGeometry(0.22, 0.55, 24),
        new THREE.MeshBasicMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
      );
      ringMesh.rotation.y = Math.PI / 2;
      ringMesh.position.x = -7.3;
      pl.add(ringMesh);

      // Partículas de escape
      const EX = 32;
      const exPts = Array.from({ length: EX }, () => ({ x: -7.3 - Math.random() * 6, y: (Math.random() - 0.5) * 0.5, z: (Math.random() - 0.5) * 0.5, life: Math.random() }));
      const exPos = new Float32Array(EX * 3);
      const exCol = new Float32Array(EX * 3);
      const exGeo = new THREE.BufferGeometry();
      exGeo.setAttribute('position', new THREE.BufferAttribute(exPos, 3));
      exGeo.setAttribute('color', new THREE.BufferAttribute(exCol, 3));
      pl.add(new THREE.Points(exGeo, new THREE.PointsMaterial({ size: 0.28, vertexColors: true, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, depthWrite: false })));

      // Cuadrícula de suelo
      const grid = new THREE.GridHelper(54, 27, 0x0c1a2e, 0x0a1525);
      grid.position.y = -6.5;
      scene.add(grid);

      // Luces
      scene.add(new THREE.AmbientLight(0x0a1535, 5));
      const keyLight = new THREE.DirectionalLight(0x4488cc, 3);
      keyLight.position.set(10, 15, 10);
      scene.add(keyLight);
      const rimLight = new THREE.DirectionalLight(0x1a3060, 2);
      rimLight.position.set(-12, -6, -10);
      scene.add(rimLight);

      // Interacción con el ratón
      let targetY = 0.4, targetX = -0.05;
      const onMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const mx = (e.clientX - rect.left) / rect.width * 2 - 1;
        const my = (e.clientY - rect.top) / rect.height * 2 - 1;
        targetY = 0.4 + mx * 0.9;
        targetX = -0.05 - my * 0.4;
      };
      const onMouseLeave = () => { targetY = 0.4; targetX = -0.05; };
      container.addEventListener('mousemove', onMouseMove);
      container.addEventListener('mouseleave', onMouseLeave);
      cleanups.push(() => {
        container.removeEventListener('mousemove', onMouseMove);
        container.removeEventListener('mouseleave', onMouseLeave);
      });

      let t = 0;
      const loop = () => {
        if (!mounted) return;
        rafId = requestAnimationFrame(loop);
        t += 0.016;

        pl.rotation.y += (targetY - pl.rotation.y) * 0.05;
        pl.rotation.x += (targetX - pl.rotation.x) * 0.05;
        glowMat.opacity = 0.42 + 0.28 * Math.sin(t * 3.4);

        for (let i = 0; i < EX; i++) {
          const p = exPts[i];
          p.life -= 0.018; p.x -= 0.055;
          if (p.life <= 0) { p.x = -7.3; p.y = (Math.random() - 0.5) * 0.45; p.z = (Math.random() - 0.5) * 0.45; p.life = 1; }
          exPos[i*3] = p.x; exPos[i*3+1] = p.y; exPos[i*3+2] = p.z;
          const l = p.life;
          exCol[i*3] = 0.1*l; exCol[i*3+1] = 0.32*l; exCol[i*3+2] = l*0.9;
        }
        exGeo.attributes.position.needsUpdate = true;
        exGeo.attributes.color.needsUpdate = true;

        renderer.render(scene, cam);
      };

      loop();
      cleanups.push(() => cancelAnimationFrame(rafId));
    })();

    return () => {
      mounted = false;
      cleanups.forEach(fn => fn());
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}