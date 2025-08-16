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
import { ThemeToggle } from "./them-toggle";
import Link from "next/link";

const navigationItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center justify-between">
        {/* Logo/Branding */}
        <div className="flex items-center">
          <Link href="#" className="flex items-center space-x-2">
            <span className="font-bold">MyPortfolio</span>
          </Link>
        </div>

        {/* Navigasi Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Aksi & Menu Mobile */}
        <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
              <Sheet>
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
                  <div className="grid gap-6 text-lg font-medium p-6 pt-4">
                    {navigationItems.map((item) => (
                      <Link key={item.name} href={item.href} className="text-muted-foreground">
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