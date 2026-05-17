import BorderGlow from "@/components/reactbits/BorderGlow";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <BorderGlow className={cn("rounded-2xl border border-border/70 bg-card/70 shadow-lg backdrop-blur-sm", className)}>
      {children}
    </BorderGlow>
  );
}
