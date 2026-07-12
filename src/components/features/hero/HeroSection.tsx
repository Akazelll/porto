"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const HeroScene3D = dynamic(() => import("./HeroScene3D"), {
  ssr: false,
  loading: () => null,
});

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut", delay },
});

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsMd(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMd(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-24 sm:px-10 sm:pt-28 lg:px-16"
    >
      {/* subtle top gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      {/* 3D scene — only mount when screen is md+, avoids WebGL init inside display:none */}
      {isMd && !reduceMotion && (
        <div className="absolute -right-10 top-1/2 -z-10 h-[420px] w-[420px] -translate-y-1/2 opacity-70 lg:-right-4 lg:h-[600px] lg:w-[600px]">
          <HeroScene3D />
        </div>
      )}

      {/* copy — left-aligned, max half viewport width */}
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-full md:max-w-xl lg:max-w-2xl">

          {/* badge */}
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Full Stack Developer
            </span>
          </motion.div>

          {/* name */}
          <motion.h1
            {...fadeUp(0.1)}
            className="mt-7 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-7xl"
          >
            Adam Raga
            <span className="block text-primary">Akazell.</span>
          </motion.h1>

          {/* tagline */}
          <motion.p
            {...fadeUp(0.2)}
            className="mt-5 font-display text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            Building web that feels as good as it works.
          </motion.p>

          {/* description */}
          <motion.p
            {...fadeUp(0.3)}
            className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground/80 sm:text-lg"
          >
            I craft responsive, performant, and elegant digital products — from architecture to pixel — with strong attention to UI, UX, and maintainable code.
          </motion.p>

          {/* CTA */}
          <motion.div
            {...fadeUp(0.4)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#projects">
              <Button
                size="lg"
                className="rounded-xl bg-primary px-7 text-primary-foreground hover:bg-primary/90"
              >
                View Projects
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border-primary/30 px-7 text-foreground hover:border-primary hover:bg-primary/5"
              >
                Let&apos;s Collaborate
              </Button>
            </a>
          </motion.div>

          {/* socials */}
          <motion.div {...fadeUp(0.5)} className="mt-8 flex items-center gap-1">
            <Link href="https://github.com/Akazelll" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl text-muted-foreground hover:bg-primary/8 hover:text-primary"
              >
                <Github className="h-[18px] w-[18px]" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/adamxraga" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl text-muted-foreground hover:bg-primary/8 hover:text-primary"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </Button>
            </Link>
            <Link href="mailto:adamxraga@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl text-muted-foreground hover:bg-primary/8 hover:text-primary"
              >
                <Mail className="h-[18px] w-[18px]" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      {!reduceMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1.5 text-muted-foreground/35"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
            <ArrowDown className="h-3 w-3" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
