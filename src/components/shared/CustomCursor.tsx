"use client";

import { useEffect, useState, useRef } from 'react';
import styles from './CustomCursor.module.css';

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
}

export function CustomCursor() {
  const [dots, setDots] = useState<Dot[]>([]);
  const [isPointerFine, setIsPointerFine] = useState(false);
  const dotId = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });
  const minDistance = 8; // minimum px between dots to avoid overdensity

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setIsPointerFine(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsPointerFine(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isPointerFine) return;

    const moveCursor = (e: MouseEvent) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < minDistance) return;

      lastPos.current = { x: e.clientX, y: e.clientY };

      const newDot: Dot = {
        id: dotId.current++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 4 + 4, // 4–8px
      };

      setDots(prev => [...prev.slice(-24), newDot]); // max 24 dots at once

      setTimeout(() => {
        setDots(prev => prev.filter(d => d.id !== newDot.id));
      }, 700);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [isPointerFine]);

  if (!isPointerFine) return null;

  return (
    <>
      {dots.map((dot, i) => (
        <div
          key={dot.id}
          className={styles.dot}
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            // older dots in the trail are smaller and more transparent
            opacity: 0.85 - (dots.length - 1 - i) * 0.06,
            boxShadow: `0 0 ${dot.size * 2}px ${dot.size * 0.8}px oklch(0.425 0.115 162 / 0.35)`,
          }}
        />
      ))}
    </>
  );
}
