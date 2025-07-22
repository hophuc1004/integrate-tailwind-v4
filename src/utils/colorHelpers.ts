// Utility functions to help with color tokens in Tailwind v4

export type ColorType = "text" | "bg" | "border";
export type Theme = "light" | "dark";

// Map of token names to their class names
export const colorTokenMap = {
  // Background tokens
  "bg-red": "bg-bg-red",
  "bg-white": "bg-bg-white",
  "bg-black": "bg-bg-black",
  "bg-transparent": "bg-bg-transparent",
  "bg-level-1": "bg-bg-level-1",
  "bg-level-2": "bg-bg-level-2",
  "bg-level-3": "bg-bg-level-3",
  "bg-level-4": "bg-bg-level-4",
  "bg-level-5": "bg-bg-level-5",
  "bg-input": "bg-bg-input",
  "bg-input-disabled": "bg-bg-input-disabled",
  "bg-tooltip": "bg-bg-tooltip",
  "bg-dialog": "bg-bg-dialog",
  "bg-card": "bg-bg-card",
  "bg-neutral-rest": "bg-bg-neutral-rest",
  "bg-neutral-hover": "bg-bg-neutral-hover",
  "bg-neutral-pressed": "bg-bg-neutral-pressed",
  "bg-neutral-disabled": "bg-bg-neutral-disabled",
  "bg-neutral-subtle": "bg-bg-neutral-subtle",
  "bg-accent-info-rest": "bg-bg-accent-info-rest",
  "bg-accent-info-hover": "bg-bg-accent-info-hover",
  "bg-accent-info-pressed": "bg-bg-accent-info-pressed",
  "bg-accent-info-disabled": "bg-bg-accent-info-disabled",
  "bg-accent-info-subtle": "bg-bg-accent-info-subtle",
  "bg-accent-info-subtle-hover": "bg-bg-accent-info-subtle-hover",
  "bg-accent-info-subtle-pressed": "bg-bg-accent-info-subtle-pressed",
  "bg-accent-info-subtle-disabled": "bg-bg-accent-info-subtle-disabled",
  "bg-accent-success-rest": "bg-bg-accent-success-rest",
  "bg-accent-success-hover": "bg-bg-accent-success-hover",
  "bg-accent-success-pressed": "bg-bg-accent-success-pressed",
  "bg-accent-success-disabled": "bg-bg-accent-success-disabled",
  "bg-accent-success-subtle": "bg-bg-accent-success-subtle",
  "bg-accent-success-subtle-hover": "bg-bg-accent-success-subtle-hover",
  "bg-accent-success-subtle-pressed": "bg-bg-accent-success-subtle-pressed",
  "bg-accent-success-subtle-disabled": "bg-bg-accent-success-subtle-disabled",
  "bg-accent-warning-rest": "bg-bg-accent-warning-rest",
  "bg-accent-warning-hover": "bg-bg-accent-warning-hover",
  "bg-accent-warning-pressed": "bg-bg-accent-warning-pressed",
  "bg-accent-warning-disabled": "bg-bg-accent-warning-disabled",
  "bg-accent-warning-subtle": "bg-bg-accent-warning-subtle",
  "bg-accent-warning-subtle-hover": "bg-bg-accent-warning-subtle-hover",
  "bg-accent-warning-subtle-pressed": "bg-bg-accent-warning-subtle-pressed",
  "bg-accent-warning-subtle-disabled": "bg-bg-accent-warning-subtle-disabled",
  "bg-accent-error-rest": "bg-bg-accent-error-rest",
  "bg-accent-error-hover": "bg-bg-accent-error-hover",
  "bg-accent-error-pressed": "bg-bg-accent-error-pressed",
  "bg-accent-error-disabled": "bg-bg-accent-error-disabled",
  "bg-accent-error-subtle": "bg-bg-accent-error-subtle",
  "bg-accent-error-subtle-hover": "bg-bg-accent-error-subtle-hover",
  "bg-accent-error-subtle-pressed": "bg-bg-accent-error-subtle-pressed",
  "bg-accent-error-subtle-disabled": "bg-bg-accent-error-subtle-disabled",
  "bg-brand-rest": "bg-bg-brand-rest",
  "bg-brand-hover": "bg-bg-brand-hover",
  "bg-brand-pressed": "bg-bg-brand-pressed",
  "bg-brand-disabled": "bg-bg-brand-disabled",
  "bg-brand-subtle-rest": "bg-bg-brand-subtle-rest",
  "bg-brand-subtle-hover": "bg-bg-brand-subtle-hover",
  "bg-brand-subtle-pressed": "bg-bg-brand-subtle-pressed",
  "bg-brand-subtle-disabled": "bg-bg-brand-subtle-disabled",
  "bg-selected-rest": "bg-bg-selected-rest",
  "bg-selected-hover": "bg-bg-selected-hover",
  "bg-selected-pressed": "bg-bg-selected-pressed",
  "bg-selected-disabled": "bg-bg-selected-disabled",
  "bg-selected-bold-rest": "bg-bg-selected-bold-rest",
  "bg-selected-bold-hover": "bg-bg-selected-bold-hover",
  "bg-selected-bold-pressed": "bg-bg-selected-bold-pressed",
  "bg-selected-bold-disabled": "bg-bg-selected-bold-disabled",
  "bg-selected-bold-disabled-strong": "bg-bg-selected-bold-disabled-strong",

  // Foreground tokens
  "fg-white": "text-fg-white",
  "fg-black": "text-fg-black",
  "fg-transparent": "text-fg-transparent",
  "fg-neutral-main": "text-fg-neutral-main",
  "fg-neutral-main-static": "text-fg-neutral-main-static",
  "fg-neutral-subtle": "text-fg-neutral-subtle",
  "fg-neutral-subtlest": "text-fg-neutral-subtlest",
  "fg-neutral-disabled": "text-fg-neutral-disabled",
  "fg-neutral-decoration": "text-fg-neutral-decoration",
  "fg-neutral-inverse": "text-fg-neutral-inverse",
  "fg-neutral-inverse-static": "text-fg-neutral-inverse-static",
  "fg-accent-info": "text-fg-accent-info",
  "fg-accent-info-strong": "text-fg-accent-info-strong",
  "fg-accent-info-disabled": "text-fg-accent-info-disabled",
  "fg-accent-success": "text-fg-accent-success",
  "fg-accent-success-strong": "text-fg-accent-success-strong",
  "fg-accent-success-disabled": "text-fg-accent-success-disabled",
  "fg-accent-warning": "text-fg-accent-warning",
  "fg-accent-warning-strong": "text-fg-accent-warning-strong",
  "fg-accent-warning-disabled": "text-fg-accent-warning-disabled",
  "fg-accent-error": "text-fg-accent-error",
  "fg-accent-error-strong": "text-fg-accent-error-strong",
  "fg-accent-error-disabled": "text-fg-accent-error-disabled",
  "fg-accent-yellow": "text-fg-accent-yellow",
  "fg-accent-yellow-strong": "text-fg-accent-yellow-strong",
  "fg-accent-yellow-disabled": "text-fg-accent-yellow-disabled",
  "fg-accent-violet": "text-fg-accent-violet",
  "fg-accent-violet-strong": "text-fg-accent-violet-strong",
  "fg-accent-violet-disabled": "text-fg-accent-violet-disabled",
  "fg-link-rest": "text-fg-link-rest",
  "fg-link-hover": "text-fg-link-hover",
  "fg-link-pressed": "text-fg-link-pressed",
  "fg-link-disabled": "text-fg-link-disabled",
  "fg-brand-rest": "text-fg-brand-rest",
  "fg-brand-rest-strong": "text-fg-brand-rest-strong",
  "fg-brand-hover": "text-fg-brand-hover",
  "fg-brand-pressed": "text-fg-brand-pressed",
  "fg-brand-pressed-strong": "text-fg-brand-pressed-strong",
  "fg-brand-disabled": "text-fg-brand-disabled",
  "fg-brand-disabled-strong": "text-fg-brand-disabled-strong",
  "fg-btn-primary": "text-fg-btn-primary",
  "fg-btn-primary-disabled": "text-fg-btn-primary-disabled",
  "fg-checkbox": "text-fg-checkbox",
  "fg-checkbox-disabled": "text-fg-checkbox-disabled",
  "fg-selected-rest": "text-fg-selected-rest",
  "fg-selected-hover": "text-fg-selected-hover",
  "fg-selected-pressed": "text-fg-selected-pressed",
  "fg-selected-pressed-strong": "text-fg-selected-pressed-strong",
  "fg-selected-disabled": "text-fg-selected-disabled",
  "fg-selected-disabled-strong": "text-fg-selected-disabled-strong",
  "fg-selected-bold-rest": "text-fg-selected-bold-rest",
  "fg-focus-ring": "text-fg-focus-ring",

  // Border tokens
  "border-selected": "border-border-selected",
  "border-selected-disabled": "border-border-selected-disabled",
  "border-segment-control": "border-border-segment-control",
  "border-input": "border-border-input",
  "border-input-active": "border-border-input-active",
  "border-input-disabled": "border-border-input-disabled",
  "border-card": "border-border-card",
  "border-dialog": "border-border-dialog",
  "border-table": "border-border-table",
  "border-neutral": "border-border-neutral",
  "border-neutral-light": "border-border-neutral-light",
  "border-neutral-strong": "border-border-neutral-strong",
  "border-neutral-strongest": "border-border-neutral-strongest",
  "border-neutral-dark": "border-border-neutral-dark",
  "border-inverse-static": "border-border-inverse-static",
  "border-inverse": "border-border-inverse",
  "border-active": "border-border-active",
  "border-active-strong": "border-border-active-strong",
  "border-active-light": "border-border-active-light",
  "border-info": "border-border-info",
  "border-info-strong": "border-border-info-strong",
  "border-info-light": "border-border-info-light",
  "border-error": "border-border-error",
  "border-error-strong": "border-border-error-strong",
  "border-error-light": "border-border-error-light",
  "border-warning": "border-border-warning",
  "border-warning-strong": "border-border-warning-strong",
  "border-warning-light": "border-border-warning-light",
  "border-success": "border-border-success",
  "border-success-strong": "border-border-success-strong",
  "border-success-light": "border-border-success-light",
  "border-yellow": "border-border-yellow",
  "border-yellow-strong": "border-border-yellow-strong",
  "border-yellow-light": "border-border-yellow-light",
  "border-violet": "border-border-violet",
  "border-violet-strong": "border-border-violet-strong",
  "border-violet-light": "border-border-violet-light",
} as const;

// Helper function to get the correct class name
export const getColorClass = (
  tokenName: keyof typeof colorTokenMap
): string => {
  return colorTokenMap[tokenName] || "";
};

// Helper function to toggle theme
export const toggleTheme = () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
  return newTheme;
};

// Helper function to set theme
export const setTheme = (theme: Theme) => {
  document.documentElement.setAttribute("data-theme", theme);
};

// Helper function to get current theme
export const getCurrentTheme = (): Theme => {
  const theme = document.documentElement.getAttribute("data-theme") as Theme;
  return theme || "light";
};

// Helper function for conditional classes with hover states
export const getButtonClasses = (
  variant:
    | "primary"
    | "secondary"
    | "accent-info"
    | "accent-success"
    | "accent-warning"
    | "accent-error" = "primary"
) => {
  const baseClasses = "px-4 py-2 rounded transition-colors duration-200";

  switch (variant) {
    case "primary":
      return `${baseClasses} bg-bg-brand-rest hover:bg-bg-brand-hover active:bg-bg-brand-pressed disabled:bg-bg-brand-disabled text-fg-btn-primary disabled:text-fg-btn-primary-disabled`;
    case "secondary":
      return `${baseClasses} bg-bg-neutral-rest hover:bg-bg-neutral-hover active:bg-bg-neutral-pressed disabled:bg-bg-neutral-disabled text-fg-neutral-main disabled:text-fg-neutral-disabled`;
    case "accent-info":
      return `${baseClasses} bg-bg-accent-info-rest hover:bg-bg-accent-info-hover active:bg-bg-accent-info-pressed disabled:bg-bg-accent-info-disabled text-fg-white disabled:text-fg-accent-info-disabled`;
    case "accent-success":
      return `${baseClasses} bg-bg-accent-success-rest hover:bg-bg-accent-success-hover active:bg-bg-accent-success-pressed disabled:bg-bg-accent-success-disabled text-fg-white disabled:text-fg-accent-success-disabled`;
    case "accent-warning":
      return `${baseClasses} bg-bg-accent-warning-rest hover:bg-bg-accent-warning-hover active:bg-bg-accent-warning-pressed disabled:bg-bg-accent-warning-disabled text-fg-white disabled:text-fg-accent-warning-disabled`;
    case "accent-error":
      return `${baseClasses} bg-bg-accent-error-rest hover:bg-bg-accent-error-hover active:bg-bg-accent-error-pressed disabled:bg-bg-accent-error-disabled text-fg-white disabled:text-fg-accent-error-disabled`;
    default:
      return baseClasses;
  }
};

// Helper function for input classes
export const getInputClasses = (hasError = false) => {
  const baseClasses =
    "px-3 py-2 rounded border transition-colors duration-200 bg-bg-input disabled:bg-bg-input-disabled text-fg-neutral-main disabled:text-fg-neutral-disabled";
  const borderClass = hasError
    ? "border-border-error"
    : "border-border-input focus:border-border-input-active";
  return `${baseClasses} ${borderClass}`;
};

// Helper function for card classes
export const getCardClasses = () => {
  return "bg-bg-card border border-border-card rounded-lg shadow-sm";
};
