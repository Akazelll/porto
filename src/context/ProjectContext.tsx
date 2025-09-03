"use client";

import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  repoLink: string;
}

interface ProjectContextType {
  projects: Project[];
  loading: boolean;
  getProjectById: (id: number) => Project | undefined;
}

// Buat Context
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

// Buat komponen Provider
export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Gunakan useEffect untuk mengambil data dari file JSON saat komponen dimuat
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Ambil data dari /projects.json (file di folder public bisa diakses dari root URL)
        const response = await fetch('/projects.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Project[] = await response.json();
        setProjects(data); // Simpan data ke state
      } catch (error) {
        console.error("Gagal mengambil data proyek:", error);
      } finally {
        setLoading(false); // Set loading menjadi false setelah selesai
      }
    };

    fetchProjects();
  }, []); // Array dependensi kosong berarti useEffect hanya berjalan sekali

  // Fungsi untuk mendapatkan satu proyek berdasarkan ID
  const getProjectById = (id: number): Project | undefined => {
    return projects.find((project) => project.id === id);
  };

  return (
    <ProjectContext.Provider value={{ projects, loading, getProjectById }}>
      {children}
    </ProjectContext.Provider>
  );
};

// Buat custom hook untuk menggunakan context dengan mudah
export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProjectContext must be used within a ProjectProvider");
  }
  return context;
};