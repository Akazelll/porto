"use client";

import { useEffect, useState } from 'react';
import styles from '@/app/style/CustomCursor.module.css';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  initialRotation: number;
}

export function CustomCursor() {
  const [particles, setParticles] = useState<Particle[]>([]);
  let particleId = 0;

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 12 + 8, // Ukuran acak antara 8px dan 20px
        initialRotation: Math.random() * 360, // Rotasi awal acak
      };

      setParticles(prev => [...prev, newParticle]);

      // Hapus partikel setelah animasinya selesai (800ms)
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 800); // Durasi ini harus sama dengan durasi animasi di CSS
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {particles.map(particle => (
        <div
          key={particle.id}
          className={styles.sparkle}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            // Terapkan rotasi awal dan sebar posisi
            transform: `translate(-50%, -50%) rotate(${particle.initialRotation}deg) translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`,
          }}
        />
      ))}
    </>
  );
}