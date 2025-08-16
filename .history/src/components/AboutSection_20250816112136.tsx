import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const skills = ["Next.js", "TypeScript", "Laravel", "PHP", "Tailwind CSS", "MySQL", "Figma"];

export function AboutSection() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-1 flex justify-center">
          <Avatar className="h-48 w-48">
            <AvatarImage src="https://iili.io/3hZfqsj.md.jpg" alt="Akazell Profile" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
        </div>
        <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg mb-6">
              I am a web developer with a passion for creating modern and responsive websites. I specialize in building robust back-end systems with Laravel and beautiful, interactive front-end interfaces with Next.js and React.
            </p>
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}