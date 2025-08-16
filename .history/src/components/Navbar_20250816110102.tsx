"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader, // <- 1. Impor SheetHeader
  SheetTitle, // <- 2. Impor SheetTitle
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./them-toggle"; // Nama file Anda sepertinya 'them-toggle.tsx'

const navigationItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex flex-1 items-center">
          <a href="#" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">MyPortfolio</span>
          </a>
          <div className="flex items-center gap-6 text-sm">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="hidden md:flex flex-initial justify-end">
          <ThemeToggle />
        </div>

        {/* Mobile Nav */}
        <div className="flex flex-1 items-center justify-end space-x-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              {/* 3. Tambahkan SheetHeader dan SheetTitle di sini */}
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-6 text-lg font-medium p-6 pt-4">
                {navigationItems.map((item) => (
                  <a key={item.name} href={item.href} className="text-muted-foreground">
                    {item.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}