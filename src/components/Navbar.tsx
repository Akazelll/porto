"use client";

import React, { useEffect, useState } from "react";
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
import { ThemeToggle } from "./theme-toggle";

const navigationItems = [
  { name: "About", href: "/#about" },
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
      setScrolled(window.scrollY > 10);

      if (pathname === "/") {
        const sections = navigationItems.map((item) =>
          document.querySelector(item.href.substring(1))
        );
        const scrollPosition = window.scrollY + 150;

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
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, scrolled]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      <nav className='max-w-7xl mx-auto flex h-16 items-center justify-between px-6 lg:px-8'>
        <Link href='/' className='flex items-center space-x-2'>
          <span className='text-lg font-bold'>Akazell</span>
        </Link>

        <div className='hidden md:flex items-center gap-6 text-sm'>
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

        <div className='flex items-center gap-2 md:hidden'>
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon'>
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right'>
              <SheetHeader>
                <SheetTitle className='text-left px-2'>Menu</SheetTitle>
              </SheetHeader>

              <div className='grid py-6 px-2'>
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsSheetOpen(false)}
                    className='text-lg font-medium text-muted-foreground transition-colors hover:text-primary px-4 py-2 rounded-md'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className='hidden md:flex'>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
