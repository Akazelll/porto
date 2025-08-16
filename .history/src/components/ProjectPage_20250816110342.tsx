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

// Asumsikan data proyek Anda ada di public/projects.json
import projects from "../../public/projects.json";

export function ProjectPage() {
  return (
    <section id="projects" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Projects
      </h2>
      {/* Grid yang lebih responsif */}
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