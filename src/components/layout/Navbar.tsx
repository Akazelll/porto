"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/providers/ThemeToggle";

const navigationItems = [
  { name: "About", href: "/#about" },
  { name: "Stack", href: "/#stack" },
  { name: "Projects", href: "/#projects" },
  { name: "Certificates", href: "/#certificates" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
      if (pathname !== "/") return;
      const scrollPosition = window.scrollY + 180;
      let currentSection = "";
      navigationItems.forEach((item) => {
        const id = item.href.replace("/#", "");
        const section = document.getElementById(id);
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.clientHeight
        ) {
          currentSection = id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-16">
        {/* logo */}
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Akazell
          <span className="text-primary">.</span>
        </Link>

        {/* desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => {
            const id = item.href.replace("/#", "");
            const isActive = activeSection === id;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "rounded-lg px-3.5 py-2 font-mono text-sm font-medium tracking-wide transition-all",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
        </div>

        {/* mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-xl">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[75%] bg-background/95 backdrop-blur-xl">
              <SheetHeader>
                <SheetTitle className="font-display text-left text-lg">
                  Akazell<span className="text-primary">.</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 grid gap-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsSheetOpen(false)}
                    className="rounded-xl px-4 py-3 font-mono text-sm font-medium text-muted-foreground transition hover:bg-primary/8 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
