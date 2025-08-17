"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useProjectContext } from "@/context/ProjectContext";
import { AnimatedSection } from "./AnimatedSection"; // Impor AnimatedSection

export function ProjectPage() {
  const { projects, loading } = useProjectContext();

  return (
    // 1. AnimatedSection sekarang hanya mengatur background dan padding vertikal
    <AnimatedSection id="projects" className="bg-muted/50 py-28 sm:py-36">
      {/* 2. Tambahkan div di dalamnya untuk mengatur lebar dan margin */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          My Projects
        </h2>

        {loading ? (
          <div className="text-center">
            <p className="text-muted-foreground">Loading projects...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} passHref>
                <Card className="flex h-full flex-col overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-grow flex-col p-6">
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <CardDescription className="flex-grow">
                      {project.description}
                    </CardDescription>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}