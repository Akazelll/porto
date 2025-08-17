"use client";

import { useEffect, useRef } from 'react';
import styles from '@/app/style/CustomCursor.module.css';

const TRAIL_COUNT = 8; // Jumlah bagian ekor meteor

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  // Buat array of refs untuk setiap bagian ekor
  const trailRefs = useRef<Array<HTMLDivElement | null>>([]);
  // Simpan posisi terakhir untuk setiap bagian ekor
  const trailPositions = useRef(Array(TRAIL_COUNT).fill({ x: 0, y: 0 }));

  useEffect(() => {
    // Inisialisasi refs
    trailRefs.current = trailRefs.current.slice(0, TRAIL_COUNT);

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animateTrail = () => {
      let lastX = cursorRef.current ? parseFloat(cursorRef.current.style.left) : 0;
      let lastY = cursorRef.current ? parseFloat(cursorRef.current.style.top) : 0;

      trailRefs.current.forEach((trail, index) => {
        if (trail) {
          const currentPos = trailPositions.current[index];
          
          // Setiap bagian ekor bergerak menuju posisi bagian di depannya
          const newX = currentPos.x + (lastX - currentPos.x) * 0.4;
          const newY = currentPos.y + (lastY - currentPos.y) * 0.4;

          trail.style.left = `${newX}px`;
          trail.style.top = `${newY}px`;

          // Simpan posisi baru dan teruskan ke bagian berikutnya
          trailPositions.current[index] = { x: newX, y: newY };
          lastX = newX;
          lastY = newY;
        }
      });

      requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', moveCursor);
    animateTrail(); // Mulai animasi

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      {Array.from({ length: TRAIL_COUNT }).map((_, index) => {
        const size = Math.max(12 - index * 1.5, 2); // Ekor akan mengecil
        const opacity = Math.max(0.8 - index * 0.1, 0); // Ekor akan memudar

        return (
          <div
            key={index}
            ref={el => trailRefs.current[index] = el}
            className={styles.trail}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity,
            }}
          />
        );
      })}
    </>
  );
}