"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function IcosahedronMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const [scrollY, setScrollY] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduceMotion]);

  useFrame((_, delta) => {
    if (!meshRef.current || !wireRef.current || reduceMotion) return;
    // idle slow rotation
    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.12;
    wireRef.current.rotation.x = meshRef.current.rotation.x;
    wireRef.current.rotation.y = meshRef.current.rotation.y;
    // parallax from scroll
    const parallax = scrollY * 0.0003;
    meshRef.current.rotation.z = parallax;
    wireRef.current.rotation.z = parallax;
  });

  return (
    <group>
      {/* fill — barely visible, just enough for depth */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#E8F3EF"
          transparent
          opacity={0.04}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* wireframe */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#0B6E4F"
          transparent
          opacity={0.55}
          wireframe
        />
      </mesh>
    </group>
  );
}

export default function HeroScene3D() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3.2], fov: 45 }}
      style={{ background: "transparent" }}
      aria-hidden
    >
      <IcosahedronMesh />
    </Canvas>
  );
}
