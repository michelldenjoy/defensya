"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Airplane() {
  const ref = useRef<THREE.Group>(null!);

  const { scene } = useGLTF(
    "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Fox/glTF/Fox.gltf"
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // movimiento suave
    ref.current.rotation.y = t * 0.3;

    // interacción ligera con mouse
    ref.current.rotation.x = state.mouse.y * 0.2;
    ref.current.rotation.z = state.mouse.x * 0.2;
  });

  return <primitive ref={ref} object={scene} scale={1.2} />;
}

export default function AirplaneScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={1} />

        <Airplane />
      </Canvas>
    </div>
  );
}