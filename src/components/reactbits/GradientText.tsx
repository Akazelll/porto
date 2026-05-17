import { cn } from "@/lib/utils";

interface GradientTextProps {
  text: string;
  className?: string;
}

export default function GradientText({ text, className }: GradientTextProps) {
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
