import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const skills = ["Next.js", "TypeScript", "Laravel", "PHP", "Tailwind CSS", "MySQL", "Figma"];

export function AboutPage() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-start">
          <Avatar className="h-48 w-48 md:h-64 md:w-64">
            <AvatarImage
              src="https://iili.io/3hZfqsj.md.jpg"
              alt="Akazell Profile"
            />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">About Me</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            I am a web developer with a passion for creating modern and
            responsive websites. I specialize in building robust back-end
            systems with Laravel and beautiful, interactive front-end
            interfaces with Next.js and React.
          </p>
          <h3 className="mb-4 text-xl font-semibold">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}