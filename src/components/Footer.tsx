import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-border/70 bg-background/80">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 py-7 text-sm text-muted-foreground sm:flex-row lg:px-8">
        <p>
          &copy; {new Date().getFullYear()} Built and designed by <span className="font-semibold text-foreground">Akazell</span>.
        </p>
        <div className="flex items-center gap-3">
          <Link href="https://github.com/Akazelll" target="_blank" className="rounded-lg border border-border/70 p-2 transition hover:bg-secondary hover:text-foreground"><Github className="h-4 w-4" /></Link>
          <Link href="https://www.linkedin.com/in/adamxraga" target="_blank" className="rounded-lg border border-border/70 p-2 transition hover:bg-secondary hover:text-foreground"><Linkedin className="h-4 w-4" /></Link>
        </div>
      </div>
    </footer>
  );
}
