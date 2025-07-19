"use client";

import { useTheme } from "./theme-provider";
import styles from "./switch.module.css";
import { useEffect, useState } from "react";

const themes = ["system", "light", "dark"] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles.switch} />; // Placeholder to prevent layout shift
  }

  const handleToggle = () => {
    const currentIndex = themes.indexOf(theme as typeof themes[number]);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <button
      className={styles.switch}
      onClick={handleToggle}
      aria-label={`Switch to ${themes[(themes.indexOf(theme as typeof themes[number]) + 1) % themes.length]} theme`}
    />
  );
}
