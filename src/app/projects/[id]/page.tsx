"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { useProjectContext, Project } from "@/context/ProjectContext";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PortfolioBackground } from "@/components/layout/PortfolioBackground";
import ScrollFloat from "@/components/shared/ScrollFloat";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

export default function ProjectDetailsPage() {
  const { getProjectById, loading } = useProjectContext();
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null | undefined>(undefined);

  useEffect(() => {
    if (!loading && params.id) {
      const projectId = parseInt(params.id as string, 10);
      setProject(getProjectById(projectId) ?? null);
    }
  }, [params.id, getProjectById, loading]);

  /* ── loading ── */
  if (project === undefined) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <span className="font-mono text-sm text-muted-foreground animate-pulse">
          Loading project…
        </span>
      </div>
    );
  }

  /* ── not found ── */
  if (project === null) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">404</p>
          <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Project not found.
          </h1>
          <p className="max-w-sm text-base text-muted-foreground">
            We couldn&apos;t find the project you&apos;re looking for.
          </p>
          <Button
            onClick={() => router.push("/")}
            className="mt-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  /* ── main page ── */
  return (
    <div className="relative min-h-screen bg-background">
      <PortfolioBackground />
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28 lg:px-16">

        {/* back button */}
        <motion.div {...fadeUp(0)}>
          <button
            onClick={() => router.back()}
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition group-hover:-translate-x-1" />
            Back to Projects
          </button>
        </motion.div>

        {/* title */}
        <motion.div {...fadeUp(0.08)} className="mt-8">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Project
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
        </motion.div>

        {/* main grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-12">

          {/* image — spans 2 cols */}
          <motion.div {...fadeUp(0.12)} className="lg:col-span-2">
            <div className="aspect-video overflow-hidden rounded-2xl border border-border/60">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                width={1200}
                height={675}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* sidebar */}
          <motion.div {...fadeUp(0.16)} className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* links */}
              {(project.liveLink && project.liveLink !== "#") ||
              (project.repoLink && project.repoLink !== "#") ? (
                <div className="rounded-2xl border border-border/60 bg-card p-5">
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Links
                  </p>
                  <div className="mt-4 flex flex-col gap-2.5">
                    {project.liveLink && project.liveLink !== "#" && (
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full justify-start rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Live Project
                        </Button>
                      </Link>
                    )}
                    {project.repoLink && project.repoLink !== "#" && (
                      <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          className="w-full justify-start rounded-xl border-border/60 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              ) : null}

              {/* tech stack */}
              <div className="rounded-2xl border border-border/60 bg-card p-5">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Technologies
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-primary/20 bg-primary/8 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* description */}
        <ScrollFloat className="mt-10">
          <div className="rounded-2xl border border-border/60 bg-card p-7 sm:p-9">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              About this project
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.description}
            </p>
          </div>
        </ScrollFloat>

      </main>

      <Footer />
    </div>
  );
}
