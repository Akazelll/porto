"use client";

import { useEffect, useRef } from 'react';
import styles from '@/app/style/C.module.css';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (cursorRef.current && trailRef.current) {
        // Menggerakkan titik kursor utama
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;

        // Menggerakkan jejak dengan sedikit penundaan (melalui transisi CSS)
        trailRef.current.style.left = `${clientX}px`;
        trailRef.current.style.top = `${clientY}px`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={trailRef} className={styles.cursorTrail} />
    </>
  );
}