import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const skills = ["Next.js", "TypeScript", "Laravel", "PHP", "Tailwind CSS", "MySQL"];

export function AboutPage() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg mb-6">
              I am a web developer with a passion for creating modern and responsive websites. I specialize in building robust back-end systems and beautiful front-end interfaces.
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
             <Avatar className="h-48 w-48">
              {/* Ganti src dengan URL foto profil Anda */}
              <AvatarImage src="https://iili.io/3hZfqsj.md.jpg" alt="Akazell Profile" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
}