"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useProjectContext } from "@/context/ProjectContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollFloat from "@/components/shared/ScrollFloat";

export function ProjectPage() {
  const { projects, loading } = useProjectContext();
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">

        <ScrollFloat>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary">Projects</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Featured work.
          </h2>
          <p className="mt-3 max-w-lg text-base text-muted-foreground">
            A selection of projects I&apos;ve built — click a card to see the stack.
          </p>
        </ScrollFloat>

        {loading ? (
          <p className="mt-12 text-center font-mono text-sm text-muted-foreground">Loading…</p>
        ) : (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, i) => {
              const flipped = activeId === project.id;
              return (
                <ScrollFloat key={project.id} delay={0.04 * i} className="aspect-[4/3.2]">
                  <div
                    className="relative h-full cursor-pointer"
                    style={{ perspective: "1000px" }}
                    onClick={() => setActiveId(flipped ? null : project.id)}
                  >
                    <div
                      className="relative h-full w-full transition-transform duration-700"
                      style={{
                        transformStyle: "preserve-3d",
                        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                      }}
                    >
                      {/* front */}
                      <div
                        className="absolute inset-0 overflow-hidden rounded-2xl border border-border/60"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 p-5">
                          <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
                          <p className="mt-1 font-mono text-xs text-white/60">tap to flip</p>
                        </div>
                      </div>

                      {/* back */}
                      <div
                        className="absolute inset-0 flex flex-col rounded-2xl border border-primary/20 bg-card p-5"
                        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                      >
                        <h3 className="font-display text-lg font-semibold text-foreground">{project.title}</h3>
                        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                          {project.description.split(".")[0]}.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-primary/20 bg-primary/8 px-2 py-0.5 font-mono text-xs text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <Link href={`/projects/${project.id}`} className="mt-auto">
                          <Button className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
                            View Details →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollFloat>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
