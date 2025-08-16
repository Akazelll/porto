"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
// Perbaiki impor di sini
import { ThemeToggle } from "./theme-toggle"; 
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// ... sisa kode Navbar Anda tetap sama ...
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="#" className="flex items-center space-x-2">
          <span className="font-bold text-lg">Akazell</span>
        </Link>
        {/* ... sisa kode nav ... */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet>
              {/* ... sisa kode sheet ... */}
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}