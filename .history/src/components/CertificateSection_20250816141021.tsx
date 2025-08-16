"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardTitle } from "@/components/ui/card";
import styles from "./CertificateSection.module.css";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  image: string;
}

export function CertificateSection() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <section id="certificates" className="py-28 sm:py-36">
        <div className="text-center">
          <p className="text-muted-foreground">Loading certificates...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="certificates" className="py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          My Certificates
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className={styles.marqueeContainer}>
            {certificates.map((cert, index) => (
              // --- PERUBAHAN UTAMA DI SINI ---
              // Ukuran disamakan dengan kartu proyek
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
              >
                <Card className="flex h-full flex-col overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={500}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-grow flex-col p-6">
                    <CardTitle className="mb-2 text-lg">
                      {cert.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}