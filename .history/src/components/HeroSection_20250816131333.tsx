import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

// Pastikan ada 'export' di sini
export function HeroSection() {
  return (
    <section
      id="home"
      className="container flex min-h-screen flex-col items-center justify-center gap-8 px-4 text-center"
    >
      <div className="space-y-4">
        <main className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <h1 className="block">
            <span className="inline bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
              Hello, I'm Akazell
            </span>
          </h1>
          <h2 className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="inline bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
              A Full Stack Developer
            </span>
          </h2>
        </main>
        <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-xl">
          Passionate about building modern web applications that are both
          beautiful and functional, delivering exceptional user experiences.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <a href="#projects">
          <Button size="lg" className="w-48">
            View My Work
          </Button>
        </a>
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/Akazelll"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="mailto:adamxraga@gmail.com">
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}