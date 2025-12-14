import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

const skills = [
  {
    name: "Next.js",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  },
  {
    name: "TypeScript",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "Laravel",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
  },
  {
    name: "Tailwind CSS",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
];

export function AboutPage() {
  return (
    <AnimatedSection
      id="about"
      className="relative overflow-hidden bg-muted/50 py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
        {/* Kolom Teks (Muncul pertama di mobile) */}
        <div className="text-center lg:text-left lg:order-1">
          <h2 className="text-base font-semibold leading-7 text-primary">
            About Me
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Passionate Developer Crafting Digital Experiences
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I am a web developer specializing in building (and occasionally designing)
            exceptional digital experiences. I thrive on turning complex problems
            into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        {/* Kolom Avatar dan Skills (Muncul kedua di mobile) */}
        <div className="relative flex justify-center lg:order-2">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Efek "Glow" di belakang avatar */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            
            <Avatar className="relative w-full h-full border-4 border-background shadow-2xl">
              <AvatarImage
                src="/images/profilepicture.jpg"
                alt="Akazell Profile"
              />
            </Avatar>

            {/* Floating Skill Icons */}
            <div className="absolute -bottom-4 -left-4 flex flex-col gap-3">
              {skills.slice(0, 2).map((skill) => (
                <div 
                  key={skill.name} 
                  className="p-2 sm:p-3 bg-background/50 backdrop-blur-sm rounded-full shadow-lg transition-transform hover:scale-110"
                  style={{ filter: "drop-shadow(0 4px 6px rgba(255, 255, 255, 0.2))" }}
                >
                  <Image src={skill.logoUrl} alt={skill.name} width={28} height={28} className="sm:w-8 sm:h-8" />
                </div>
              ))}
            </div>
            <div className="absolute -top-4 -right-4 flex flex-col gap-3">
              {skills.slice(2, 4).map((skill) => (
                <div 
                  key={skill.name} 
                  className="p-2 sm:p-3 bg-background/50 backdrop-blur-sm rounded-full shadow-lg transition-transform hover:scale-110"
                  style={{ filter: "drop-shadow(0 4px 6px rgba(255, 255, 255, 0.2))" }}
                >
                  <Image src={skill.logoUrl} alt={skill.name} width={28} height={28} className="sm:w-8 sm:h-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}