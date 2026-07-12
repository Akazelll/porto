import { cn } from "@/lib/utils";

interface GradientHeadingProps {
  text: string;
  className?: string;
}

export function GradientHeading({ text, className }: GradientHeadingProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent",
        className
      )}
    >
      {text}
    </span>
  );
}
