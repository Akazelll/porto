import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="container grid place-items-center gap-10 py-20 text-center md:py-32">
      <div className="space-y-6">
        <main className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#619BFD] to-[#A17CFE] text-transparent bg-clip-text">
              Hello, I'm Akazell
            </span>
          </h1>
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              .
            </span>
          </h2>
        </main>

        <p className="text-lg text-muted-foreground md:w-10/12 mx-auto sm:text-xl">
          A passionate Full Stack Developer from Indonesia, specializing in creating modern and responsive web applications with a focus on user experience.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Link href="https://github.com/Akazelll" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon">
            <Github className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="mailto:youremail@example.com">
          <Button variant="outline" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      <div className="shadow-2xl rounded-lg">
        <a href="#about">
          <Button size="lg" className="w-52">Explore Now</Button>
        </a>
      </div>
    </section>
  );
}