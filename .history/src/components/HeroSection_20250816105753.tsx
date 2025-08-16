import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="container grid place-items-center gap-10 py-20 md:py-32">
      <div className="text-center space-y-6">
        <main className="text-4xl md:text-6xl font-bold">
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

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto">
          A passionate Full Stack Developer from Indonesia, specializing in creating modern and responsive web applications with a focus on user experience.
        </p>
      </div>

      <div className="flex items-center gap-4">
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

      <div className="shadow-2xl rounded-lg">
        <a href="#about">
          <Button className="w-48">Explore Now</Button>
        </a>
      </div>
    </section>
  );
}