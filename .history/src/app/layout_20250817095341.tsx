import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ProjectProvider } from "@/context/ProjectContext";
import { WelcomeAnimation } from "@/components/WelcomeAnimation"; // <-- Impor komponen

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Akazell's Portfolio",
  description: "A modern portfolio showcasing web development projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProjectProvider>
            <WelcomeAnimation /> {/* <-- Tambahkan komponen di sini */}
            {children}
          </ProjectProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}