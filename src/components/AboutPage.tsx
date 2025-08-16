import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const skills = ["Next.js", "TypeScript", "Laravel", "PHP", "Tailwind CSS", "MySQL", "Figma"];

export function AboutPage() {
  return (
    <section id="about" className="container px-6 sm:px-8 py-28 sm:py-36">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex justify-center lg:justify-start">
          <Avatar className="h-52 w-52 md:h-72 md:w-72">
            <AvatarImage
              src="https://iili.io/3hZfqsj.md.jpg"
              alt="Akazell Profile"
            />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            About Me
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            I am a web developer with a passion for creating modern and
            responsive websites. I specialize in building robust back-end
            systems with Laravel and beautiful, interactive front-end
            interfaces with Next.js and React.
          </p>
          <h3 className="mb-4 text-2xl font-semibold">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-4 py-2 text-base">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}