"use client";

// PERBAIKAN: Menghapus 'useCallback', 'Container', dan 'Engine' yang tidak digunakan
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center"
    >
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: { 
                onHover: { enable: true, mode: "repulse" },
                // PERBAIKAN: Mengubah `resize: true` menjadi objek untuk memperbaiki Type Error
                resize: { enable: true }
              },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
              color: { value: "#8b5cf6" },
              links: { 
                color: "#3b82f6", 
                distance: 150, 
                enable: true,
                opacity: 0.4, 
                width: 1 
              },
              move: { direction: "none", enable: true, outModes: { default: "out" }, random: true, speed: 2, straight: false },
              number: { density: { enable: true }, value: 80 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 4 } },
            },
            detectRetina: true,
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        />
      )}
      
      <div className="relative z-10 container flex flex-col items-center justify-center gap-8 px-4 text-center">
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
        <div className="flex flex-col items-center gap-4 sm:flex-row">
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
            <Link href="https://www.linkedin.com/in/adamxraga" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="mailto:adamxraga@gmail.com">
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

