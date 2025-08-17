"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }} // Mulai dari transparan dan sedikit di bawah
      whileInView={{ opacity: 1, y: 0 }} // Animasikan ke visible dan posisi asli
      viewport={{ once: true, amount: 0.2 }} // Animasi berjalan sekali saat 20% elemen terlihat
      transition={{ duration: 0.8, ease: "easeOut" }} // Durasi dan jenis animasi
    >
      {children}
    </motion.section>
  );
}