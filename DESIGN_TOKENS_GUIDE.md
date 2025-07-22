# Tailwind v4 Design Tokens Migration Guide

This project has been set up to use your design tokens with Tailwind v4. Here's how to use it:

## 🎨 How It Works

### Before (Tailwind v3 - incorrect syntax):

```tsx
// This wouldn't work in any version of Tailwind
className = "color-fg-neutral-subtle";
```

### After (Tailwind v4):

```tsx
// Text/Foreground colors
className = "text-fg-neutral-subtle";

// Background colors
className = "bg-bg-card";

// Border colors
className = "border border-border-neutral";
```

## 🚀 Quick Start Examples

### Basic Text Colors

```tsx
<h1 className="text-fg-neutral-main">Main heading</h1>
<p className="text-fg-neutral-subtle">Subtle description</p>
<span className="text-fg-neutral-subtlest">Very subtle text</span>
<button className="text-fg-brand-rest">Brand text</button>
```

### Background Colors

```tsx
<div className="bg-bg-level-1">Page background</div>
<div className="bg-bg-card">Card background</div>
<button className="bg-bg-brand-rest">Brand button</button>
<div className="bg-bg-accent-info-subtle">Info background</div>
```

### Border Colors

```tsx
<div className="border border-border-neutral">Normal border</div>
<input className="border border-border-input focus:border-border-input-active">
<div className="border border-border-error">Error border</div>
```

### Complete Component Example

```tsx
const MyCard = () => (
  <div className="bg-bg-card border border-border-card rounded-lg p-6">
    <h2 className="text-fg-neutral-main text-xl font-semibold mb-2">
      Card Title
    </h2>
    <p className="text-fg-neutral-subtle mb-4">
      This is a description with subtle text.
    </p>
    <button className="bg-bg-brand-rest hover:bg-bg-brand-hover text-fg-btn-primary px-4 py-2 rounded transition-colors">
      Action Button
    </button>
  </div>
);
```

## 🎯 Helper Functions

You can use the provided helper functions for complex components:

```tsx
import { getButtonClasses, getInputClasses, getCardClasses } from './utils/colorHelpers';

// Button with all states handled
<button className={getButtonClasses('primary')}>Primary Button</button>
<button className={getButtonClasses('accent-info')}>Info Button</button>

// Input with proper styling
<input className={getInputClasses()} placeholder="Normal input" />
<input className={getInputClasses(true)} placeholder="Input with error" />

// Card wrapper
<div className={getCardClasses()}>Card content</div>
```

## 🌗 Dark Mode

Dark mode is automatically handled! Just toggle the theme:

```tsx
import { toggleTheme, setTheme, getCurrentTheme } from "./utils/colorHelpers";

// Toggle between light/dark
const handleToggle = () => toggleTheme();

// Set specific theme
setTheme("dark");
setTheme("light");

// Get current theme
const currentTheme = getCurrentTheme(); // 'light' | 'dark'
```

## 📝 Token Reference

### Background Tokens (use with `bg-`)

- `bg-level-1`, `bg-level-2`, `bg-level-3` - Page levels
- `bg-card`, `bg-dialog`, `bg-tooltip` - Component backgrounds
- `bg-brand-rest`, `bg-brand-hover`, `bg-brand-pressed` - Brand colors
- `bg-accent-info-rest`, `bg-accent-success-rest`, etc. - Accent colors
- `bg-neutral-rest`, `bg-neutral-hover`, `bg-neutral-pressed` - Neutral states

### Foreground Tokens (use with `text-`)

- `text-fg-neutral-main` - Primary text
- `text-fg-neutral-subtle` - Secondary text
- `text-fg-neutral-subtlest` - Tertiary text
- `text-fg-brand-rest` - Brand text
- `text-fg-accent-info`, `text-fg-accent-success`, etc. - Accent text

### Border Tokens (use with `border-`)

- `border-border-neutral` - Default borders
- `border-border-input`, `border-border-input-active` - Form borders
- `border-border-card`, `border-border-dialog` - Component borders
- `border-border-error`, `border-border-success` - State borders

## 🔧 Adding New Tokens

1. **Add to CSS** (`src/index.css`):

   ```css
   :root {
     --my-new-token: var(--color-blue-500);
   }

   [data-theme="dark"] {
     --my-new-token: var(--color-blue-400);
   }
   ```

2. **Add to Tailwind config** (`tailwind.config.js`):

   ```js
   colors: {
     'my-new-token': 'var(--my-new-token)',
   }
   ```

3. **Use in components**:
   ```tsx
   <div className="bg-my-new-token text-fg-white">New token usage</div>
   ```

## ✅ Migration Checklist

- [x] Set up CSS custom properties
- [x] Configure Tailwind v4 with tokens
- [x] Create helper functions
- [x] Add dark mode support
- [x] Create example components
- [ ] Update all existing components to use new tokens
- [ ] Remove old v3-style classes
- [ ] Test dark mode thoroughly

## 🎨 Complete Usage Example

Check out `src/components/ExampleComponent.tsx` for a comprehensive example showing all the tokens in action!

## 🆘 Common Issues

1. **Class not working?** Make sure you're using the correct prefix:

   - Text colors: `text-fg-*`
   - Backgrounds: `bg-bg-*`
   - Borders: `border-border-*`

2. **Dark mode not working?** Ensure the `data-theme` attribute is set on the HTML element.

3. **Colors not updating?** Check that your CSS custom properties are defined correctly in `src/index.css`.

---

Your design system is now fully integrated with Tailwind v4! 🎉
