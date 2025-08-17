"use client";

import { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export function CustomCursor() {
  const [particles, setParticles] = useState<Particle[]>([]);
  let particleId = 0;

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Buat partikel baru di posisi kursor
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 15 + 5, // Ukuran acak antara 5px dan 20px
      };

      // Tambahkan partikel baru ke dalam array
      setParticles(prev => [...prev, newParticle]);

      // Hapus partikel setelah animasinya selesai (1 detik)
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 1000); // Durasi ini harus sama dengan durasi animasi di CSS
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
          className={styles.particle}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            // Membuat posisi partikel sedikit menyebar
            transform: `translate(-50%, -50%) translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`,
          }}
        />
      ))}
    </>
  );
}