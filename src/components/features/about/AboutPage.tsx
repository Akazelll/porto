import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import ScrollFloat from "@/components/shared/ScrollFloat";

const highlights = ["Frontend", "Backend", "Database", "DevOps"];

export function AboutPage() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">

        {/* section label */}
        <ScrollFloat>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary">
            About
          </p>
        </ScrollFloat>

        <div className="mt-10 grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* left — bio */}
          <ScrollFloat delay={0.05}>
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                Passionate developer crafting{" "}
                <span className="text-primary">thoughtful</span>{" "}
                digital products.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I build web applications that balance performance, readability, and refined user experience. My workflow emphasises clean architecture, reusable components, and strong product collaboration.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Whether it&apos;s a complex backend system or a pixel-perfect UI, I care about the full picture — from database schema to animation curve.
              </p>

              {/* highlight badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-primary/25 bg-primary/8 px-3 py-1 font-mono text-xs font-medium text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollFloat>

          {/* right — profile card */}
          <ScrollFloat delay={0.12}>
            <div className="flex flex-col gap-6">
              {/* profile */}
              <div className="flex items-center gap-5 rounded-2xl border border-border/60 bg-card p-6">
                <Avatar className="h-20 w-20 border-2 border-primary/20 shadow-md sm:h-24 sm:w-24">
                  <AvatarImage src="/images/profilepicture.jpg" alt="Adam Raga" />
                  <AvatarFallback className="font-display text-xl font-semibold text-primary">AR</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">Adam Raga</h3>
                  <p className="mt-0.5 font-mono text-sm text-muted-foreground">Full Stack Web Developer</p>
                  <div className="mt-3 flex items-center gap-1.5">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                    <span className="font-mono text-xs text-primary">Available for work</span>
                  </div>
                </div>
              </div>

              {/* quick stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Projects shipped", value: "10+" },
                  { label: "Tech stacks", value: "15+" },
                  { label: "Years coding", value: "3+" },
                  { label: "Cups of coffee", value: "∞" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border/60 bg-card p-5"
                  >
                    <p className="font-display text-3xl font-semibold text-primary">{stat.value}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollFloat>
        </div>
      </div>
    </section>
  );
}
