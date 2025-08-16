import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="container flex flex-col items-center justify-center gap-12 px-6 sm:px-8 text-center"
      style={{ minHeight: "calc(100vh - 5rem)" }} // Disesuaikan dengan tinggi navbar baru
    >
      <div className="space-y-6">
        <main className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          <h1 className="block">
            <span className="inline bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Hello, I'm Akazell
            </span>
          </h1>
          <h2 className="block text-4xl sm:text-5xl md:text-6xl text-muted-foreground">
            A Full Stack Developer
          </h2>
        </main>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Passionate about building modern web applications that are both
          beautiful and functional, delivering exceptional user experiences.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <a href="#projects">
          <Button size="lg" className="w-52 text-lg">
            View My Work
          </Button>
        </a>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/Akazelll"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="mailto:akazell22@gmail.com">
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}