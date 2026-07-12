"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import ScrollFloat from "@/components/shared/ScrollFloat";

const TechStackScene3D = dynamic(() => import("./TechStackScene3D"), {
  ssr: false,
  loading: () => null,
});

const layers = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Laravel", "REST API"],
  },
  {
    label: "Database",
    items: ["MySQL", "PostgreSQL", "Firebase", "MongoDB"],
  },
  {
    label: "Tools",
    items: ["Git", "Vercel", "Figma", "Postman"],
  },
];

export function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) { setProgress(1); return; }
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const raw = (vh - rect.top) / (vh + rect.height);
      setProgress(Math.min(1, Math.max(0, raw * 2)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduceMotion]);

  return (
    <section id="stack" ref={sectionRef} className="relative py-24 sm:py-32">
      {/* emerald tint bg strip */}
      <div className="absolute inset-0 -z-10 bg-[oklch(0.950_0.020_162)/0.3] dark:bg-[oklch(0.245_0.030_162)/0.2]" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
        <ScrollFloat>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Tech Stack
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Full-stack, layer by layer.
          </h2>
          <p className="mt-3 max-w-lg text-base text-muted-foreground">
            The architecture diagram below isn&apos;t decorative — it&apos;s how I actually think about building systems.
          </p>
        </ScrollFloat>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* 3D diagram — hidden on mobile */}
          <ScrollFloat delay={0.05} className="order-2 lg:order-1">
            <div className="relative h-[280px] w-full sm:h-[340px]">
              <div className="hidden md:block h-full w-full">
                {!reduceMotion ? (
                  <TechStackScene3D progress={progress} />
                ) : (
                  <div className="flex h-full items-center justify-center rounded-2xl border border-primary/20 bg-primary/5">
                    <span className="font-mono text-sm text-primary">Architecture Diagram</span>
                  </div>
                )}
              </div>
              {/* mobile fallback — simple visual */}
              <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 md:hidden">
                {["Frontend", "Backend", "Database", "Tools"].map((l) => (
                  <div key={l} className="w-full max-w-[220px] rounded-lg border border-primary/30 bg-background/60 px-4 py-2 text-center font-mono text-xs font-medium uppercase tracking-widest text-primary">
                    {l}
                  </div>
                ))}
              </div>
              {/* layer labels overlay — only on md+ */}
              <div className="pointer-events-none absolute inset-y-0 left-4 hidden flex-col justify-center gap-6 md:flex">
                {["Frontend", "Backend", "Database", "Tools"].map((l) => (
                  <span key={l} className="font-mono text-[10px] font-medium uppercase tracking-widest text-primary/60">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </ScrollFloat>

          {/* layer list */}
          <div className="order-1 grid gap-4 lg:order-2">
            {layers.map((layer, i) => (
              <ScrollFloat key={layer.label} delay={0.05 + i * 0.06}>
                <div className="group rounded-2xl border border-border/60 bg-card p-5 transition-all hover:border-primary/30 hover:bg-primary/5">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {layer.label}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-border/70 bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground transition group-hover:border-primary/20 group-hover:text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollFloat>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
