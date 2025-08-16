"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useProjectContext, Project } from "@/context/ProjectContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function ProjectDetailsPage() {
  const { getProjectById, loading } = useProjectContext();
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | undefined>(undefined);

  useEffect(() => {
    if (!loading && params.id) {
      const projectId = parseInt(params.id as string, 10);
      const foundProject = getProjectById(projectId);
      setProject(foundProject);
    }
  }, [params.id, getProjectById, loading]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg text-muted-foreground">Loading project...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 text-center px-4">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="text-lg text-muted-foreground">
          Sorry, we couldn't find the project you're looking for.
        </p>
        <Button onClick={() => router.push("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 sm:py-24">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Button>

      <main>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {project.title}
        </h1>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="aspect-video overflow-hidden rounded-lg border mb-8">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width={1200}
            height={675}
            className="h-full w-full object-cover"
          />
        </div>

        <p className="text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          {project.liveLink && project.liveLink !== "#" && (
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <Button>
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Project
              </Button>
            </Link>
          )}
          {project.repoLink && project.repoLink !== "#" && (
            <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}