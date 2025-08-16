// Impor nama komponen yang benar sesuai dengan nama fungsinya
import { AboutPage } from "@/components/AboutPage";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { CertificatePage } from "@/components/CertificateSection";
import { Navbar } from "@/components/Navbar";
import { ProjectPage } from "@/components/ProjectPage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutPage />
        <ProjectPage />
        
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}