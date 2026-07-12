"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import ScrollFloat from "@/components/shared/ScrollFloat";

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
    fetch("/certificates.json")
      .then((r) => r.json())
      .then((data: Certificate[]) => {
        setCertificates([...data, ...data]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const autoScroll = useCallback(() => {
    if (carouselRef.current && !isDragging.current) {
      const { scrollLeft, scrollWidth } = carouselRef.current;
      carouselRef.current.scrollLeft =
        scrollLeft >= scrollWidth / 2 ? 0 : scrollLeft + 0.7;
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
    return (
      <section id="certificates" className="py-24 sm:py-32">
        <p className="text-center font-mono text-sm text-muted-foreground">Loading…</p>
      </section>
    );
  }

  return (
    <section id="certificates" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
        <ScrollFloat>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Certificates
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Courses & achievements.
          </h2>
        </ScrollFloat>
      </div>

      {/* full-width carousel */}
      <div
        ref={carouselRef}
        className="mt-12 cursor-grab overflow-x-hidden active:cursor-grabbing"
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
          carouselRef.current.scrollLeft =
            scrollLeftStart.current - (x - startX.current) * 2;
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
          carouselRef.current.scrollLeft =
            scrollLeftStart.current - (x - startX.current) * 2;
        }}
      >
        <div className="flex">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="w-[280px] flex-shrink-0 px-3 sm:w-[340px] lg:w-[400px]"
            >
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    draggable={false}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-sm font-semibold text-foreground line-clamp-1">
                    {cert.title}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
