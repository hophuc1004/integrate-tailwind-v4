# Theme Toggle Guide

This guide shows how to use the theme toggle functionality in your Tailwind v4 project with design tokens.

## Quick Start

The theme toggle is already set up and working! Just look for the theme toggle button in the top-right corner of the page.

## How It Works

### 1. Theme Context (Recommended)

```tsx
import { ThemeProvider } from "./contexts/ThemeContext";
import { useTheme } from "./hooks/useThemeContext";

function App() {
  return (
    <ThemeProvider>
      <YourComponents />
    </ThemeProvider>
  );
}

function YourComponent() {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Current theme: {theme}</button>;
}
```

### 2. Simple Hook (Alternative)

```tsx
import { useSimpleTheme } from "./hooks/useTheme";

function YourComponent() {
  const { theme, toggleTheme, isDark, isLight } = useSimpleTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme: {theme}</p>
      <p>Is dark: {isDark}</p>
    </div>
  );
}
```

## Theme Integration

### CSS Setup

Your themes are defined in `src/index.css` using two approaches:

1. **Tailwind v4 @theme directive** (modern approach)

```css
@theme {
  --color-bg-level-1: #ffffff;
  --color-fg-neutral-main: #171717;
}

@media (prefers-color-scheme: dark) {
  @theme {
    --color-bg-level-1: #0a0a0a;
    --color-fg-neutral-main: #ffffff;
  }
}
```

2. **Data attribute approach** (more control)

```css
:root {
  --bg-level-1: #ffffff;
}

[data-theme="dark"] {
  --bg-level-1: #0a0a0a;
}
```

### Using Tokens in Components

```tsx
// These classes automatically adapt to the current theme
<div className="bg-bg-level-1 text-fg-neutral-main">
  <p className="text-fg-neutral-subtle">Subtle text</p>
  <button className="bg-bg-accent-info-rest text-fg-white">Info Button</button>
</div>
```

## Available Token Categories

### Background Tokens

- `bg-bg-level-1`, `bg-bg-level-2`, `bg-bg-level-3` - Surface levels
- `bg-bg-card`, `bg-bg-input`, `bg-bg-dialog` - Component backgrounds
- `bg-bg-neutral-rest`, `bg-bg-neutral-hover`, `bg-bg-neutral-pressed` - Interactive states
- `bg-bg-accent-info-rest`, `bg-bg-accent-success-rest`, etc. - Semantic colors

### Text Tokens

- `text-fg-neutral-main`, `text-fg-neutral-subtle`, `text-fg-neutral-subtlest` - Text hierarchy
- `text-fg-accent-info`, `text-fg-accent-success`, etc. - Semantic text colors
- `text-fg-brand-rest`, `text-fg-brand-hover` - Brand colors

### Border Tokens

- `border-border-neutral`, `border-border-card` - Default borders
- `border-border-info`, `border-border-success`, etc. - Semantic borders
- `border-border-input`, `border-border-input-active` - Form borders

## Features

### Automatic Theme Detection

- Detects system preference on first visit
- Remembers user's choice in localStorage
- Updates automatically when system preference changes (if no manual choice made)

### Theme Persistence

- User's theme choice is saved to localStorage
- Persists across browser sessions
- Falls back to system preference if no saved choice

### Accessibility

- Uses `color-scheme` CSS property for better browser integration
- Proper ARIA labels on toggle buttons
- Keyboard accessible

## Customization

### Adding New Tokens

1. Add to your design token definitions in `src/utils/tokens.ts`
2. Add CSS variables in `src/index.css` for both light and dark themes
3. Use the new token classes in your components

### Custom Theme Toggle

```tsx
import { useTheme } from "./contexts/ThemeContext";

function CustomThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-bg-neutral-rest hover:bg-bg-neutral-hover"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
```

## Troubleshooting

### Theme Not Switching

- Check that `ThemeProvider` wraps your app
- Verify CSS custom properties are defined for both themes
- Check browser dev tools to see if `data-theme` attribute is being set

### Colors Not Updating

- Ensure you're using the token-based classes (`bg-bg-card`) not hardcoded colors (`bg-white`)
- Check that your CSS variables are properly defined in both light and dark theme sections

### localStorage Issues

- Theme choice is saved to `localStorage.theme`
- Clear localStorage to reset to system preference
- Check browser console for any localStorage errors

## Migration from Tailwind v3

If migrating from v3, replace hardcoded color classes:

```tsx
// Old (Tailwind v3)
<div className="bg-white text-gray-900 border-gray-200">

// New (Tailwind v4 with tokens)
<div className="bg-bg-card text-fg-neutral-main border-border-card">
```

The new approach provides:

- Automatic dark mode support
- Consistent design system
- Better maintainability
- Brand color consistency
