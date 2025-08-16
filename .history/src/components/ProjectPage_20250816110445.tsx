"use client"; // Pastikan ini adalah Client Component untuk menggunakan hook

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

// 1. Impor hook useProjectContext
import { useProjectContext } from "@/context/ProjectContext";

export function ProjectPage() {
  // 2. Ambil data projects dan loading dari context
  const { projects, loading } = useProjectContext();

  // Tampilkan pesan loading jika data belum siap
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
    <section id="projects" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader className="p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-t-lg object-cover aspect-video"
              />
            </CardHeader>
            <div className="flex flex-col flex-grow p-6">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="mt-2 flex-grow">{project.description}</CardDescription>
              <CardFooter className="p-0 pt-6">
                <Link href={`/projects/${project.id}`} passHref className="w-full">
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}