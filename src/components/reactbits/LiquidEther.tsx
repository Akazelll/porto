"use client";

import { cn } from "@/lib/utils";

interface LiquidEtherProps {
  className?: string;
}

export default function LiquidEther({ className }: LiquidEtherProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.18),transparent_35%),radial-gradient(circle_at_80%_15%,hsl(var(--primary)/0.12),transparent_38%),radial-gradient(circle_at_70%_75%,hsl(var(--ring)/0.18),transparent_40%),radial-gradient(circle_at_15%_85%,hsl(var(--muted-foreground)/0.14),transparent_40%)]",
        className
      )}
    >
      <div className="absolute -left-24 top-1/3 h-80 w-80 animate-[float_12s_ease-in-out_infinite] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-20 top-10 h-72 w-72 animate-[float_14s_ease-in-out_infinite_reverse] rounded-full bg-ring/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-96 w-96 animate-[float_18s_ease-in-out_infinite] rounded-full bg-muted-foreground/20 blur-3xl" />
    </div>
  );
}
