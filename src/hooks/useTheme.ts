import { useEffect, useState } from "react";
import type { Theme } from "../contexts/theme";

/**
 * A simple hook for theme switching that works independently
 * This is an alternative to the context-based approach
 */
export const useSimpleTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      // Check localStorage first
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
        return savedTheme;
      }
      // Default to light theme instead of checking system preference
      return "light";
    }
    return "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const setLightTheme = () => {
    setTheme("light");
    localStorage.setItem("theme", "light");
  };

  const setDarkTheme = () => {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  };

  useEffect(() => {
    // Apply theme to document root
    document.documentElement.setAttribute("data-theme", theme);

    // Also add/remove dark class for compatibility with other approaches
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Update color-scheme for better browser integration
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      // Only update if no theme is saved in localStorage
      // This preserves the default light theme behavior
      if (!localStorage.getItem("theme")) {
        // Still default to light even when system preference changes
        // Users can manually toggle if they want dark mode
        return;
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return {
    theme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
  };
};
