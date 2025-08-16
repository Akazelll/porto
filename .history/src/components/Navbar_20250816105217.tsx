"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

// 1. Impor ThemeToggle
import { ThemeToggle } from "./theme-toggle";

// ... (kode lainnya tetap sama)

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex flex-1 items-center">
          <a href="#" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">MyPortfolio</span>
          </a>
          <div className="flex items-center gap-6 text-sm">
             {/* ... (navigation items) */}
          </div>
        </div>

        {/* 2. Tambahkan ThemeToggle di sini untuk Desktop */}
        <div className="hidden md:flex flex-initial justify-end">
            <ThemeToggle />
        </div>

        {/* Mobile Nav */}
        <div className="flex flex-1 items-center justify-end space-x-2 md:hidden">
           {/* 3. Tambahkan ThemeToggle di sini untuk Mobile */}
          <ThemeToggle />
          <Sheet>
            {/* ... (kode sheet tetap sama) */}
          </Sheet>
        </div>
      </nav>
    </header>
  );
}