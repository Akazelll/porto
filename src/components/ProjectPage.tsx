"use client";

import React, { useState } from "react";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useProjectContext } from "@/context/ProjectContext";
import { AnimatedSection } from "./AnimatedSection";
import styles from "@/app/style/ProjectPage.module.css";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

export function ProjectPage() {
  const { projects, loading } = useProjectContext();
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <AnimatedSection id="projects" className="bg-muted/50 py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          My Projects
        </h2>

        {loading ? (
          <div className="text-center">
            <p className="text-muted-foreground">Loading projects...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const remaining = projects.length % 3;
              const isLastRow = index >= Math.floor(projects.length / 3) * 3;
              const isLastItem = index === projects.length - 1;

              let extraClass = "";
              if (isLastRow) {
                if (remaining === 1 && isLastItem) {
                  extraClass = "lg:col-start-2";
                } else if (remaining === 2) {
                  if (isLastItem) {
                    extraClass = "lg:col-start-3";
                  }
                }
              }

              return (
                <div
                  key={project.id}
                  className={cn("aspect-[4/3.5]", extraClass)}
                >
                  <div
                    className={styles.flipCard}
                    onClick={() => handleCardClick(project.id)}
                  >
                    <div
                      className={cn(
                        styles.flipCardInner,
                        flippedCardId === project.id && styles.isFlipped
                      )}
                    >
                      {/* Depan Card */}
                      <div className={styles.flipCardFront}>
                        <Card className="flex h-full flex-col overflow-hidden">
                          <div className="relative flex-grow">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                            <CardTitle className="text-white">
                              {project.title}
                            </CardTitle>
                          </div>
                        </Card>
                      </div>

                      {/* Belakang Card */}
                      <div className={styles.flipCardBack}>
                        <Card className="flex h-full flex-col items-center justify-center p-6 text-center">
                          <h3 className="text-xl font-bold">
                            {project.title}
                          </h3>

                          <p className="mt-2 text-sm text-muted-foreground">
                            {project.description.split(".")[0] + "."}
                          </p>

                          <div className="my-4 flex flex-wrap justify-center gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          <div className="mt-auto flex w-full flex-col gap-2">
                            <Link href={`/projects/${project.id}`} passHref>
                              <Button className="w-full">View Details</Button>
                            </Link>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
