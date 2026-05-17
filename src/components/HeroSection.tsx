"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { GlowCard } from "./GlowCard";
import { GradientHeading } from "./GradientHeading";
import ScrollFloat from "@/components/reactbits/ScrollFloat";

export function HeroSection() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-violet-500/10 via-background to-background" />
      <div className="absolute left-1/2 top-24 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: "grab" }, resize: { enable: true } },
              modes: { grab: { distance: 120, links: { opacity: 0.18 } } },
            },
            particles: {
              color: { value: "#8b5cf6" },
              links: { color: "#6366f1", distance: 140, enable: true, opacity: 0.14, width: 1 },
              move: { enable: true, outModes: { default: "out" }, random: true, speed: 0.8 },
              number: { density: { enable: true }, value: 42 },
              opacity: { value: 0.22 },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          style={{ position: "absolute", inset: 0, zIndex: -15 }}
        />
      )}

      <ScrollFloat className="mx-auto w-full max-w-5xl">
        <GlowCard className="rounded-3xl p-6 text-center shadow-2xl sm:p-10 lg:p-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary/90">Full Stack Developer</p>
          <h1 className="mx-auto max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <GradientHeading text="Building modern, scalable web experiences with clean engineering." />
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            Hi, I&apos;m Akazell. I craft responsive, performant, and elegant digital products with strong attention to UI, UX, and maintainable code quality.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#projects">
              <Button size="lg" className="w-52 rounded-xl">Explore Projects</Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg" className="w-52 rounded-xl">Let&apos;s Collaborate</Button>
            </a>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3">
            <Link href="https://github.com/Akazelll" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="icon" className="rounded-xl"><Github className="h-4 w-4" /></Button></Link>
            <Link href="https://www.linkedin.com/in/adamxraga" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="icon" className="rounded-xl"><Linkedin className="h-4 w-4" /></Button></Link>
            <Link href="mailto:adamxraga@gmail.com"><Button variant="outline" size="icon" className="rounded-xl"><Mail className="h-4 w-4" /></Button></Link>
          </div>
        </GlowCard>
      </ScrollFloat>
    </section>
  );
}
