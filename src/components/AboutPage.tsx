import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "./AnimatedSection";

const highlights = ["Frontend", "Backend", "Database", "DevOps"];

const skillGroups = {
  Frontend: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
  Backend: ["Laravel", "Node.js", "Express", "REST API"],
  Database: ["MySQL", "PostgreSQL", "Firebase", "MongoDB"],
  Tools: ["Git", "Vercel", "Figma", "Postman"],
};

export function AboutPage() {
  return (
    <AnimatedSection id="about" className="relative overflow-hidden bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <Card className="rounded-2xl border-border/60 bg-card/60 p-6 shadow-lg backdrop-blur-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About me</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Passionate developer crafting thoughtful digital products.</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build web applications that balance performance, readability, and refined user experience. My workflow emphasizes clean architecture, reusable components, and strong product collaboration.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <Badge key={item} variant="secondary" className="rounded-lg px-3 py-1 text-xs">{item}</Badge>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="relative overflow-hidden rounded-2xl border-border/60 bg-card/60 p-6 shadow-lg backdrop-blur-sm sm:p-8">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/20 blur-2xl" />
            <div className="flex items-center gap-5">
              <Avatar className="h-24 w-24 border-2 border-border shadow-lg sm:h-28 sm:w-28">
                <AvatarImage src="/images/profilepicture.jpg" alt="Akazell Profile" />
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">Akazell</h3>
                <p className="text-sm text-muted-foreground">Full Stack Web Developer</p>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(skillGroups).map(([group, stacks]) => (
              <Card key={group} className="rounded-2xl border-border/60 bg-card/60 p-4 transition hover:-translate-y-1 hover:shadow-lg">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">{group}</h4>
                <div className="flex flex-wrap gap-2">
                  {stacks.map((skill) => (
                    <Badge key={skill} variant="outline" className="rounded-md">{skill}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>    </AnimatedSection>
  );
}
