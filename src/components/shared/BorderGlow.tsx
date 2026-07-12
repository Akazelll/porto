import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BorderGlowProps {
  children: ReactNode;
  className?: string;
}

export default function BorderGlow({ children, className }: BorderGlowProps) {
  return (
    <div className={cn("group relative overflow-hidden rounded-2xl", className)}>
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-primary/25" />
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,hsl(var(--primary)/0)_0deg,hsl(var(--primary)/0.45)_60deg,hsl(var(--primary)/0)_140deg,hsl(var(--ring)/0.3)_220deg,hsl(var(--primary)/0)_300deg)] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
