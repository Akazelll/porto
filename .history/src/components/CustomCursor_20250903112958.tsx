"use client";

// PERBAIKAN: Menambahkan 'useRef'
import { useEffect, useState, useRef } from 'react';
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
  // PERBAIKAN: Menggunakan useRef untuk counter agar tidak memicu re-render
  // dan menghilangkan peringatan exhaustive-deps.
  const particleId = useRef(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const newParticle: Particle = {
        // PERBAIKAN: Menggunakan .current untuk mengakses dan mengubah nilai ref
        id: particleId.current++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 12 + 8,
        initialRotation: Math.random() * 360,
      };

      setParticles(prev => [...prev, newParticle]);

      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 800);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
    // PERBAIKAN: Dependency array kosong sudah benar karena particleId.current
    // tidak perlu menjadi dependency.
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
            transform: `translate(-50%, -50%) rotate(${particle.initialRotation}deg) translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`,
          }}
        />
      ))}
    </>
  );
}
