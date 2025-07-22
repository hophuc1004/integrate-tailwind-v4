import React from "react";
import { ThemeToggle } from "./ThemeToggle";

export const TokenTestComponent: React.FC = () => {
  return (
    <div className="p-8 space-y-6 bg-bg-level-1 min-h-screen">
      {/* Header with theme toggle */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-fg-neutral-main">
          Tailwind v4 Token Test
        </h1>
        <ThemeToggle />
      </div>

      {/* Simple color tests */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-fg-neutral-main">
          Background Color Tests
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Using the exact token names from @theme */}
          <div className="bg-bg-accent-success-rest p-4 rounded">
            <span className="text-fg-white">Success</span>
          </div>
          <div className="bg-neutral-500 p-4 rounded">
            <span className="text-fg-white">Warning</span>
          </div>
          <div className="bg-bg-redTo p-4 rounded">
            <span className="text-fg-white">Error</span>
          </div>
          <div className="bg-bg-accent-info-rest p-4 rounded">
            <span className="text-fg-white">Info</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-bg-neutral-rest p-4 rounded border border-border-neutral">
            <span className="text-fg-neutral-main">Neutral Rest</span>
          </div>
          <div className="bg-bg-card p-4 rounded border border-border-card">
            <span className="text-fg-neutral-main">Card</span>
          </div>
          <div className="bg-bg-level-2 p-4 rounded">
            <span className="text-fg-neutral-main">Level 2</span>
          </div>
          <div className="bg-bg-brand-rest p-4 rounded">
            <span className="text-fg-white">Brand</span>
          </div>
        </div>
      </section>

      {/* Text color tests */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-fg-neutral-main">
          Text Color Tests
        </h2>

        <div className="space-y-2">
          <p className="text-fg-neutral-main">
            Main text (text-fg-neutral-main)
          </p>
          <p className="text-fg-neutral-subtle">
            Subtle text (text-fg-neutral-subtle)
          </p>
          <p className="text-fg-neutral-subtlest">
            Subtlest text (text-fg-neutral-subtlest)
          </p>
          <p className="text-fg-accent-info">
            Info accent (text-fg-accent-info)
          </p>
          <p className="text-fg-accent-success">
            Success accent (text-fg-accent-success)
          </p>
          <p className="text-fg-accent-warning">
            Warning accent (text-fg-accent-warning)
          </p>
          <p className="text-fg-accent-error">
            Error accent (text-fg-accent-error)
          </p>
          <p className="text-fg-brand-rest">Brand text (text-fg-brand-rest)</p>
        </div>
      </section>

      {/* Border tests */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-fg-neutral-main">
          Border Tests
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-bg-card p-4 rounded border border-border-neutral">
            <span className="text-fg-neutral-main text-sm">border-neutral</span>
          </div>
          <div className="bg-bg-card p-4 rounded border border-border-active">
            <span className="text-fg-neutral-main text-sm">border-active</span>
          </div>
          <div className="bg-bg-card p-4 rounded border border-border-info">
            <span className="text-fg-neutral-main text-sm">border-info</span>
          </div>
          <div className="bg-bg-card p-4 rounded border border-border-error">
            <span className="text-fg-neutral-main text-sm">border-error</span>
          </div>
        </div>
      </section>

      {/* Interactive elements */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-fg-neutral-main">
          Interactive Elements
        </h2>

        <div className="flex flex-wrap gap-4">
          <button className="bg-bg-accent-info-rest hover:bg-bg-accent-info-hover active:bg-bg-accent-info-pressed text-fg-white px-4 py-2 rounded transition-colors">
            Info Button
          </button>

          <button className="bg-bg-accent-success-rest hover:bg-bg-accent-success-hover active:bg-bg-accent-success-pressed text-fg-white px-4 py-2 rounded transition-colors">
            Success Button
          </button>

          <button className="bg-bg-neutral-rest hover:bg-bg-neutral-hover active:bg-bg-neutral-pressed text-fg-neutral-main px-4 py-2 rounded border border-border-neutral transition-colors">
            Neutral Button
          </button>
        </div>
      </section>

      {/* Form elements */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-fg-neutral-main">
          Form Elements
        </h2>

        <div className="max-w-md space-y-4">
          <input
            type="text"
            placeholder="Test input..."
            className="w-full bg-bg-input border border-border-input focus:border-border-input-active text-fg-neutral-main px-3 py-2 rounded focus:outline-none transition-colors"
          />

          <select className="w-full bg-bg-input border border-border-input text-fg-neutral-main px-3 py-2 rounded focus:outline-none">
            <option>Select option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      </section>

      {/* Status indicators */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-fg-neutral-main">
          Status Indicators
        </h2>

        <div className="flex flex-wrap gap-4">
          <div className="bg-bg-accent-success-subtle border border-border-success-light rounded px-3 py-1">
            <span className="text-fg-accent-success text-sm font-medium">
              Success
            </span>
          </div>

          <div className="bg-bg-accent-warning-subtle border border-border-warning-light rounded px-3 py-1">
            <span className="text-fg-accent-warning text-sm font-medium">
              Warning
            </span>
          </div>

          <div className="bg-bg-accent-error-subtle border border-border-error-light rounded px-3 py-1">
            <span className="text-fg-accent-error text-sm font-medium">
              Error
            </span>
          </div>

          <div className="bg-bg-accent-info-subtle border border-border-info-light rounded px-3 py-1">
            <span className="text-fg-accent-info text-sm font-medium">
              Info
            </span>
          </div>
        </div>
      </section>

      {/* Theme demonstration */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-fg-neutral-main">
          Theme Switching Demo
        </h2>

        <div className="bg-bg-card border border-border-card rounded-lg p-6">
          <p className="text-fg-neutral-main mb-4">
            Click the theme toggle button in the top-right to switch between
            light and dark modes. Notice how all the colors automatically adapt
            using your design tokens!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-fg-neutral-main font-medium">
                Light/Dark Adaptive Colors:
              </h3>
              <div className="bg-bg-level-2 p-3 rounded border border-border-neutral">
                <span className="text-fg-neutral-subtle">
                  Background Level 2
                </span>
              </div>
              <div className="bg-bg-neutral-rest p-3 rounded">
                <span className="text-fg-neutral-main">
                  Neutral Rest Background
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-fg-neutral-main font-medium">
                Text Hierarchy:
              </h3>
              <p className="text-fg-neutral-main font-semibold">Main Text</p>
              <p className="text-fg-neutral-subtle">Subtle Text</p>
              <p className="text-fg-neutral-subtlest">Subtlest Text</p>
              <p className="text-fg-neutral-disabled">Disabled Text</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
