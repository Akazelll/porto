"use client";

import LiquidEther from "@/components/reactbits/LiquidEther";

export function PortfolioBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      <LiquidEther className="h-full w-full opacity-60 dark:opacity-50" />
      <div className="absolute inset-0 bg-background/72 backdrop-blur-[1.5px] dark:bg-background/78" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-transparent to-background/55" />
    </div>
  );
}
