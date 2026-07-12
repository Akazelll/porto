import { AboutPage } from "@/components/features/about/AboutPage";
import { TechStackSection } from "@/components/features/about/TechStackSection";
import { CertificateSection } from "@/components/features/certificates/CertificateSection";
import { ContactForm } from "@/components/features/contact/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/features/hero/HeroSection";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectPage } from "@/components/features/projects/ProjectPage";
import { PortfolioBackground } from "@/components/layout/PortfolioBackground";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <PortfolioBackground />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutPage />
        <TechStackSection />
        <ProjectPage />
        <CertificateSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
