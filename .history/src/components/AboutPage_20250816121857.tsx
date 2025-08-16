import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

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
  { name: "PHP", 
    logoUrl: "https://cdn.worldvectorlogo.com/logos/php-1.svg" 
  },
  {
    name: "Tailwind CSS",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
  {
    name: "MySQL",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
  },
  {
    name: "Figma",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
  },
];

export function AboutPage() {
  return (
    <section id="about" className="container px-4 sm:px-6 py-24 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="flex justify-center lg:col-span-2 lg:justify-end">
          <Avatar className="h-48 w-48 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-80 lg:w-80">
            <AvatarImage
              src="https://iili.io/3hZfqsj.md.jpg"
              alt="Akazell Profile"
            />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
        </div>
        <div className="text-center lg:col-span-3 lg:text-left">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground lg:max-w-2xl">
            I am a web developer with a passion for creating modern and
            responsive websites. I specialize in building robust back-end
            systems with Laravel and beautiful, interactive front-end
            interfaces with Next.js and React.
          </p>
          <h3 className="mb-4 text-2xl font-semibold">My Skills</h3>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start lg:max-w-2xl">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-2">
                <Image
                  src={skill.logoUrl}
                  alt={`${skill.name} logo`}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain transition-transform hover:scale-110"
                />
                <span className="text-sm font-medium text-muted-foreground">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}