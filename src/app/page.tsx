import { AboutPage } from "@/components/AboutPage";
import { CertificateSection } from "@/components/CertificateSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectPage } from "@/components/ProjectPage";
import { PortfolioBackground } from "@/components/PortfolioBackground";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-background/95 via-background/90 to-muted/30">
      <PortfolioBackground />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutPage />
        <ProjectPage />
        <CertificateSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
