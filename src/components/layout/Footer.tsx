import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-16">
        <div className="flex items-center gap-2">
          <span className="font-display text-sm font-semibold text-foreground">
            Akazell<span className="text-primary">.</span>
          </span>
          <span className="text-border/60">·</span>
          <span className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Adam Raga
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/Akazelll"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border/60 p-2 text-muted-foreground transition hover:border-primary/40 hover:bg-primary/8 hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/adamxraga"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border/60 p-2 text-muted-foreground transition hover:border-primary/40 hover:bg-primary/8 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:adamxraga@gmail.com"
            className="rounded-lg border border-border/60 p-2 text-muted-foreground transition hover:border-primary/40 hover:bg-primary/8 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
