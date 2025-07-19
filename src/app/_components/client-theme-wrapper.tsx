"use client";

import dynamic from "next/dynamic";
import { ThemeProvider } from "./theme-provider";

// Dynamically import the theme toggle to prevent hydration issues
const ThemeToggle = dynamic(() => import("./theme-toggle").then(mod => ({ default: mod.ThemeToggle })), {
  ssr: false,
  loading: () => <div className="w-8 h-8" />, // Placeholder
});

export function ClientThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="nextjs-blog-starter-theme">
      <ThemeToggle />
      {children}
    </ThemeProvider>
  );
}
