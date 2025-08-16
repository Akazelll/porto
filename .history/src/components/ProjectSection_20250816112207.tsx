"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useProjectContext } from "@/context/ProjectContext";

export function ProjectSection() {
  const { projects, loading } = useProjectContext();

  if (loading) {
    return (
      <section id="projects" className="container py-24 sm:py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>
        <div className="text-center">
          <p className="text-muted-foreground">Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="container py-24 sm:py-32 bg-muted/50 rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} passHref>
            <Card className="flex flex-col h-full overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <div className="flex flex-col flex-grow p-6">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2 flex-grow">{project.description}</CardDescription>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}