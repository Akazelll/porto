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
    // ... (kode loading Anda)
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
    // ... (sisa kode halaman detail Anda)
  );
}