import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="container grid min-h-[80vh] place-items-center gap-10 py-20 text-center md:py-32"
    >
      <div className="space-y-6">
        <main className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <h1 className="block">
            <span className="inline bg-gradient-to-r from-primary to-primary/70 text-transparent bg-clip-text">
              Hello, I'm Akazell
            </span>
          </h1>
          <h2 className="block">A Full Stack Developer.</h2>
        </main>

        <p className="text-lg text-muted-foreground md:w-10/12 mx-auto sm:text-xl">
          Passionate about building modern web applications that are both beautiful and functional.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a href="#projects">
          <Button size="lg">View My Work</Button>
        </a>
        <div className="flex items-center gap-2">
            <Link href="https://github.com/Akazelll" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                </Button>
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                </Button>
            </Link>
            <Link href="mailto:youremail@example.com">
                <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}