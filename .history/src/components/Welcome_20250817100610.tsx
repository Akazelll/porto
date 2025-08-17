"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import styles from "./Welcome.module.css";

export function Welcome() {
  const [isMounted, setIsMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4000);

    return () => clearTimeout(exitTimer);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={cn(styles.welcomeScreen, isExiting && styles.exiting)}>
      <div className={styles.textContainer}>
        <h1 className={cn(
          "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight",
          styles.welcomeText
        )}>
          Welcome to
        </h1>
        
        <br />
        <p className={cn(
          "mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground",
          styles.typingEffect 
        )}>
          Akazell&apos;s Portfolio
        </p>
      </div>
    </div>
  );
}