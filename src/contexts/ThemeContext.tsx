import React, { useEffect, useState } from "react";
import { ThemeContext } from "./theme";
import type { Theme } from "./theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize theme from localStorage or default to light
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme) {
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

  // useEffect(() => {
  //   // Apply theme to document
  //   document.documentElement.setAttribute("data-theme", theme);

  //   // Also update the class for compatibility
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  useEffect(() => {
    const root = document.documentElement;

    // Add transition for smooth change
    root.style.transition = "background-color 0.3s ease, color 0.3s ease";

    // Apply theme
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Remove transition after a delay
    setTimeout(() => {
      root.style.transition = "";
    }, 300);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
