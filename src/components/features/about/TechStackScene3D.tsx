"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

const LAYERS = [
  { label: "Frontend", color: "#0B6E4F", z: 0 },
  { label: "Backend",  color: "#0B6E4F", z: 1 },
  { label: "Database", color: "#0B6E4F", z: 2 },
  { label: "Tools",    color: "#0B6E4F", z: 3 },
];

const W = 3.2;
const H = 0.55;
const D = 0.04;
const EXPLODE_Z = 0.9;

function LayerMesh({ index, progress }: { index: number; progress: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);

  const targetZ = (index - 1.5) * EXPLODE_Z * progress;

  useFrame(() => {
    if (!meshRef.current || !edgesRef.current) return;
    meshRef.current.position.z += (targetZ - meshRef.current.position.z) * 0.06;
    edgesRef.current.position.z = meshRef.current.position.z;
  });

  const geo = new THREE.BoxGeometry(W, H, D);
  const edgesGeo = new THREE.EdgesGeometry(geo);

  return (
    <group>
      <mesh ref={meshRef} position={[0, (index - 1.5) * 0.08, 0]}>
        <boxGeometry args={[W, H, D]} />
        <meshBasicMaterial color="#E8F3EF" transparent opacity={0.06} side={THREE.DoubleSide} />
      </mesh>
      <lineSegments ref={edgesRef} position={[0, (index - 1.5) * 0.08, 0]}>
        <edgesGeometry args={[new THREE.BoxGeometry(W, H, D)]} />
        <lineBasicMaterial color="#0B6E4F" transparent opacity={0.7} />
      </lineSegments>
    </group>
  );
}

function Scene({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x += ((-0.3) - groupRef.current.rotation.x) * 0.03;
    groupRef.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={groupRef}>
      {LAYERS.map((_, i) => (
        <LayerMesh key={i} index={i} progress={progress} />
      ))}
    </group>
  );
}

export default function TechStackScene3D({ progress }: { progress: number }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 40 }}
      style={{ background: "transparent" }}
      aria-hidden
    >
      <Scene progress={progress} />
    </Canvas>
  );
}
