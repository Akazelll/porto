"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Hapus baris impor yang error di sini

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}