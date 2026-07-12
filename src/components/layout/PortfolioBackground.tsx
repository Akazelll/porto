"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function PortfolioBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* ambient colour blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--primary)/0.16),transparent_45%),radial-gradient(circle_at_80%_15%,hsl(var(--accent)/0.13),transparent_40%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60" />

      {/* constellation particles */}
      {init && (
        <Particles
          id="portfolio-bg"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 50,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
                resize: { enable: true },
              },
              modes: {
                grab: { distance: 160, links: { opacity: 0.25 } },
              },
            },
            particles: {
              color: { value: "#8b5cf6" },
              links: {
                color: "#6366f1",
                distance: 160,
                enable: true,
                opacity: 0.12,
                width: 1,
              },
              move: {
                enable: true,
                outModes: { default: "out" },
                random: true,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: { enable: true },
                value: 80,
              },
              opacity: { value: { min: 0.1, max: 0.4 } },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 2.5 } },
            },
            detectRetina: true,
          }}
          style={{ position: "absolute", inset: 0 }}
        />
      )}
    </div>
  );
}
