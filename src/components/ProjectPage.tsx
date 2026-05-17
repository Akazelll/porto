"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "./AnimatedSection";
import { useProjectContext } from "@/context/ProjectContext";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { GradientHeading } from "./GradientHeading";
import { GlowCard } from "./GlowCard";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { cn } from "@/lib/utils";
import styles from "@/app/style/ProjectPage.module.css";

export function ProjectPage() {
  const { projects, loading } = useProjectContext();
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);

  return (
    <AnimatedSection id="projects" className="bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl"><GradientHeading text="Featured Projects" /></h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">Click each card to reveal stack and details.</p>

        {loading ? (
          <p className="text-center text-muted-foreground">Loading projects...</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ScrollFloat key={project.id} className="aspect-[4/3.4]" delay={0.04 * project.id}>
                <div className={styles.flipCard} onClick={() => setFlippedCardId(flippedCardId === project.id ? null : project.id)}>
                  <div className={cn(styles.flipCardInner, flippedCardId === project.id && styles.isFlipped)}>
                    <div className={styles.flipCardFront}>
                      <GlowCard className="group h-full overflow-hidden">
                        <Card className="h-full border-0 bg-transparent shadow-none">
                        <div className="relative h-full">
                          <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                          <div className="absolute bottom-0 p-5">
                            <CardTitle className="text-white">{project.title}</CardTitle>
                            <p className="mt-2 text-sm text-white/80">Tap to view more</p>
                          </div>
                        </div>
                      </Card>
                      </GlowCard>
                    </div>

                    <div className={styles.flipCardBack}>
                      <GlowCard className="h-full p-5">
                        <Card className="flex h-full flex-col border-0 bg-transparent p-0 text-center shadow-none">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{project.description.split(".")[0] + "."}</p>
                        <div className="my-4 flex flex-wrap justify-center gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="rounded-md">{tech}</Badge>
                          ))}
                        </div>
                        <Link href={`/projects/${project.id}`} className="mt-auto">
                          <Button className="w-full rounded-xl">View Details</Button>
                        </Link>
                      </Card>
                      </GlowCard>
                    </div>
                  </div>
                </div>
              </ScrollFloat>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
