"use client";

import LiquidEther from "@/components/reactbits/LiquidEther";

export function PortfolioBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      <LiquidEther className="h-full w-full scale-110 opacity-55 saturate-125 dark:opacity-45" />
      <div className="absolute inset-0 bg-background/72 backdrop-blur-[2px] dark:bg-background/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,hsl(var(--primary)/0.16),transparent_45%),radial-gradient(circle_at_80%_15%,hsl(var(--accent)/0.13),transparent_40%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60" />
    </div>
  );
}
