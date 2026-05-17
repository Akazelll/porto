"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Card, CardTitle } from "@/components/ui/card";
import { GradientHeading } from "./GradientHeading";
import { GlowCard } from "./GlowCard";
import ScrollFloat from "@/components/reactbits/ScrollFloat";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  image: string;
}

export function CertificateSection() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
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
        setCertificates([...data, ...data]);
      } catch (error) {
        console.error("Gagal mengambil data sertifikat:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []);

  const autoScroll = useCallback(() => {
    if (carouselRef.current && !isDragging.current) {
      const { scrollLeft, scrollWidth } = carouselRef.current;
      carouselRef.current.scrollLeft = scrollLeft >= scrollWidth / 2 ? 0 : scrollLeft + 0.8;
    }
    animationFrameId.current = requestAnimationFrame(autoScroll);
  }, []);

  useEffect(() => {
    if (!loading) animationFrameId.current = requestAnimationFrame(autoScroll);
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [autoScroll, loading]);

  if (loading) {
    return <section id="certificates" className="py-24 sm:py-32"><p className="text-center text-muted-foreground">Loading certificates...</p></section>;
  }

  return (
    <section id="certificates" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl"><GradientHeading text="Certificates" /></h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">A rolling showcase of courses and achievements.</p>
        <div
          ref={carouselRef}
          className="relative cursor-grab overflow-x-hidden active:cursor-grabbing"
          onMouseDown={(e) => {
            if (!carouselRef.current) return;
            isDragging.current = true;
            startX.current = e.pageX - carouselRef.current.offsetLeft;
            scrollLeftStart.current = carouselRef.current.scrollLeft;
          }}
          onMouseUp={() => (isDragging.current = false)}
          onMouseLeave={() => (isDragging.current = false)}
          onMouseMove={(e) => {
            if (!isDragging.current || !carouselRef.current) return;
            e.preventDefault();
            const x = e.pageX - carouselRef.current.offsetLeft;
            carouselRef.current.scrollLeft = scrollLeftStart.current - (x - startX.current) * 2;
          }}
          onTouchStart={(e) => {
            if (!carouselRef.current) return;
            isDragging.current = true;
            startX.current = e.touches[0].pageX - carouselRef.current.offsetLeft;
            scrollLeftStart.current = carouselRef.current.scrollLeft;
          }}
          onTouchEnd={() => (isDragging.current = false)}
          onTouchMove={(e) => {
            if (!isDragging.current || !carouselRef.current) return;
            const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
            carouselRef.current.scrollLeft = scrollLeftStart.current - (x - startX.current) * 2;
          }}
        >
          <div className="flex">
            {certificates.map((cert, index) => (
              <ScrollFloat key={index} className="w-full flex-shrink-0 p-3 md:w-1/2 lg:w-1/3" delay={(index % 6) * 0.03}>
                <GlowCard className="pointer-events-none h-full overflow-hidden">
                  <Card className="h-full border-0 bg-transparent shadow-none">
                    <div className="aspect-video overflow-hidden">
                      <Image src={cert.image} alt={cert.title} width={500} height={300} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <CardTitle className="mb-1 text-base sm:text-lg">{cert.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </Card>
                </GlowCard>
              </ScrollFloat>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
