"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Card, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  image: string;
}

export function CertificateSection() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Refs untuk mengontrol drag dan animasi
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch("/certificates.json");
        const data: Certificate[] = await response.json();
        // Gandakan data untuk loop yang mulus
        setCertificates([...data, ...data]);
      } catch (error) {
        console.error("Gagal mengambil data sertifikat:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []);

  // Logika untuk auto-scroll
  const autoScroll = () => {
    if (carouselRef.current && !isDragging.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      // Jika sudah mencapai titik tengah (akhir dari konten asli), reset ke awal
      if (scrollLeft >= scrollWidth / 2) {
        carouselRef.current.scrollLeft = 0;
      } else {
        carouselRef.current.scrollLeft += 1; // Kecepatan scroll, ubah angka ini untuk lebih cepat/lambat
      }
    }
    animationFrameId.current = requestAnimationFrame(autoScroll);
  };

  useEffect(() => {
    if (!loading) {
      animationFrameId.current = requestAnimationFrame(autoScroll);
    }
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [loading]);

  // Event handlers untuk drag manual
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftStart.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Angka 2 untuk sensitivitas geser
    carouselRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  if (loading) {
    // ... (kode loading Anda) ...
  }

  return (
    <section id="certificates" className="py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          My Certificates
        </h2>
      </div>

      <div
        className="relative w-full overflow-x-hidden cursor-grab active:cursor-grabbing"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4 select-none"
            >
              <Card className="flex h-full flex-col overflow-hidden pointer-events-none">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-grow flex-col p-6">
                  <CardTitle className="mb-2 text-lg">{cert.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}