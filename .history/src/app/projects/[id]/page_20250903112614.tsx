"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useProjectContext, Project } from "@/context/ProjectContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

export default function ProjectDetailsPage() {
  const { getProjectById, loading } = useProjectContext();
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null | undefined>(undefined);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    if (!loading && params.id) {
      const projectId = parseInt(params.id as string, 10);
      const foundProject = getProjectById(projectId);
      setProject(foundProject || null);
    }
  }, [params.id, getProjectById, loading]);

  if (project === undefined || !init) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <p className="text-lg text-muted-foreground">Loading project...</p>
      </div>
    );
  }

  if (project === null) {
    return (
      <>
        <Navbar />
        <main className="flex h-[calc(100vh-8rem)] flex-col items-center justify-center gap-4 text-center px-4">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <p className="text-lg text-muted-foreground">
            Sorry, we couldn&apos;t find the project you&apos;re looking for.
          </p>
          <Button onClick={() => router.push("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <div className="relative min-h-screen w-full">
      {init && (
        <Particles
          id="tsparticles-details"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: { 
                onHover: { enable: true, mode: "repulse" }, 
                // PERBAIKAN: Mengubah `resize: true` menjadi objek
                resize: { enable: true } 
              },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
              color: { value: "#8b5cf6" },
              links: { color: "#3b82f6", distance: 150, enable: true, opacity: 0.2, width: 1 },
              move: { direction: "none", enable: true, outModes: { default: "out" }, random: true, speed: 1, straight: false },
              number: { density: { enable: true }, value: 50 },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
        />
      )}
      
      <div className="relative z-10">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 lg:px-8 py-24 sm:py-32 bg-background">
          <div className="mb-12">
            <Button variant="ghost" onClick={() => router.back()} className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="aspect-video overflow-hidden rounded-lg border bg-background/50 backdrop-blur-sm shadow-xl">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8 rounded-lg border bg-background/50 p-6 backdrop-blur-sm shadow-xl">
                <div>
                  <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Links
                  </h3>
                  <div className="flex flex-col space-y-3">
                    {project.liveLink && project.liveLink !== "#" && (
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full justify-start">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live Project
                        </Button>
                      </Link>
                    )}
                    {project.repoLink && project.repoLink !== "#" && (
                      <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full justify-start">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-lg border bg-background/50 p-8 backdrop-blur-sm shadow-xl">
            <h2 className="mb-4 text-2xl font-bold">About This Project</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground prose-p:my-4">
              <p>{project.description}</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}