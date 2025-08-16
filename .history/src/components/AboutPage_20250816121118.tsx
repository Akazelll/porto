import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Next.js",
  "TypeScript",
  "Laravel",
  "PHP",
  "Tailwind CSS",
  "MySQL",
  "Figma",
];

export function AboutPage() {
  return (
    <section id="about" className="container px-4 sm:px-6 py-24 sm:py-32">
      <div className="flex flex-col-reverse items-center gap-12 lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            I am a web developer with a passion for creating modern and
            responsive websites. I specialize in building robust back-end
            systems with Laravel and beautiful, interactive front-end
            interfaces with Next.js and React.
          </p>
          <h3 className="mb-4 text-2xl font-semibold">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-base"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Avatar className="h-48 w-48 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-72 lg:w-72">
            <AvatarImage
              src="https://iili.io/3hZfqsj.md.jpg"
              alt="Akazell Profile"
            />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
}