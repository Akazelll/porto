"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function WelcomeAnimation() {
  const [isMounted, setIsMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Mulai animasi keluar setelah 2 detik
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    return () => clearTimeout(exitTimer);
  }, []);

  // Jangan render apa pun di server untuk menghindari FOUC (flash of unstyled content)
  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background",
        // Terapkan animasi keluar dan buat tidak interaktif saat animasi berjalan
        isExiting ? "animate-welcome-fade-out pointer-events-none" : "opacity-100"
      )}
    >
      <div className="animate-welcome-fade-in text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Welcome to
        </h1>
        <p className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground">
          Akazell&apos;s Portfolio
        </p>
      </div>
    </div>
  );
}