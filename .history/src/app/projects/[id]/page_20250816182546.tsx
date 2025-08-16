"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useProjectContext, Project } from "@/context/ProjectContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ProjectDetailsPage() {
  const { getProjectById, loading } = useProjectContext();
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null | undefined>(
    undefined
  );

  useEffect(() => {
    if (!loading && params.id) {
      const projectId = parseInt(params.id as string, 10);
      const foundProject = getProjectById(projectId);
      setProject(foundProject || null);
    }
  }, [params.id, getProjectById, loading]);

  if (project === undefined) {
    
  }

  if (project === null) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 text-center px-4">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        {/* --- PERUBAHAN DI SINI --- */}
        <p className="text-lg text-muted-foreground">
          Sorry, we couldn&apos;t find the project you&apos;re looking for.
        </p>
        <Button onClick={() => router.push("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-24 sm:py-32">
        {/* Header: Tombol Kembali dan Judul */}
        <div className="mb-12">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
        </div>

        {/* Konten Utama: Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Kolom Kiri: Gambar Proyek */}
          <div className="lg:col-span-2">
            <div className="aspect-video overflow-hidden rounded-lg border shadow-sm">
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

          {/* Kolom Kanan (Sidebar): Info Penting */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Tautan Aksi */}
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

              {/* Teknologi */}
              <div>
                <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deskripsi Proyek di Bawah */}
        <div className="mt-16 border-t pt-12">
          <h2 className="mb-4 text-2xl font-bold">
            About This Project
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>{project.description}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}