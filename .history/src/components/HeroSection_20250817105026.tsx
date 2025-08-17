"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
// 1. Impor file CSS module
import styles from '@/app/style/HeroSection.module.css';
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="home"
      // 2. Terapkan kelas .heroContainer dan hapus min-h-screen agar background pas
      className={cn("container flex min-h-screen flex-col items-center justify-center gap-8 px-4 text-center", styles.heroContainer)}
    >
      {/* 3. Tambahkan elemen untuk background */}
      <div className={styles.gradientBackground}></div>

      {/* Konten Anda sekarang berada di atas background */}
      <div className="z-10">
        <div className="space-y-4">
          <main className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <h1 className="block">
              <span className="inline bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
                Hello, I&apos;m Akazell
              </span>
            </h1>
            <h2 className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="inline bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
                A Full Stack Developer
              </span>
            </h2>
          </main>
          <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-xl">
            Passionate about building modern web applications that are both
            beautiful and functional, delivering exceptional user experiences.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#projects">
            <Button size="lg" className="w-48">
              View My Work
            </Button>
          </a>
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/Akazelll"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="mailto:akazell22@gmail.com">
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}