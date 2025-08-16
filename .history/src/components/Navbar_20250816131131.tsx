"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation"; // Impor usePathname

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

// --- PERUBAHAN UTAMA DI SINI ---
// Pastikan setiap href diawali dengan "/#"
const navigationItems = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname(); // Dapatkan path URL saat ini

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Fitur menu aktif hanya berjalan di halaman utama
      if (pathname === "/") {
        const sections = navigationItems.map((item) =>
          document.querySelector(item.href.substring(1)) // Hapus '/' dari href
        );
        const scrollPosition = window.scrollY + 150; // Sedikit offset

        let currentSection = "";
        for (const section of sections) {
          if (
            section &&
            scrollPosition >= (section as HTMLElement).offsetTop &&
            scrollPosition <
              (section as HTMLElement).offsetTop + section.clientHeight
          ) {
            currentSection = section.id;
            break;
          }
        }
        setActiveSection(currentSection);
      } else {
        setActiveSection(""); // Nonaktifkan jika bukan di halaman utama
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Panggil saat komponen dimuat

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, scrolled]); // Tambahkan pathname dan scrolled sebagai dependensi

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg font-bold">Akazell</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "font-medium text-muted-foreground transition-colors hover:text-primary",
                activeSection === item.href.substring(2) && "text-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-6">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsSheetOpen(false)}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}