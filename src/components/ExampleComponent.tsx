import React from "react";
import {
  getButtonClasses,
  getInputClasses,
  getCardClasses,
  toggleTheme,
  getCurrentTheme,
} from "../utils/colorHelpers";

const ExampleComponent: React.FC = () => {
  const [theme, setThemeState] = React.useState(getCurrentTheme());

  const handleThemeToggle = () => {
    const newTheme = toggleTheme();
    setThemeState(newTheme);
  };

  return (
    <div className="p-8 bg-bg-level-1 min-h-screen">
      {/* Theme Toggle */}
      <div className="mb-8">
        <button
          onClick={handleThemeToggle}
          className={getButtonClasses("primary")}
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </div>

      {/* Card Example */}
      <div className={`${getCardClasses()} p-6 mb-8`}>
        <h1 className="text-fg-neutral-main text-2xl font-bold mb-4">
          Design System Example
        </h1>

        <p className="text-fg-neutral-subtle mb-4">
          This is an example showing how to use your design tokens with Tailwind
          v4.
        </p>

        <p className="text-fg-neutral-subtlest text-sm">
          Subtle text for additional information.
        </p>
      </div>

      {/* Buttons Section */}
      <div className={`${getCardClasses()} p-6 mb-8`}>
        <h2 className="text-fg-neutral-main text-xl font-semibold mb-4">
          Buttons
        </h2>

        <div className="space-x-4 space-y-2">
          <button className={getButtonClasses("primary")}>
            Primary Button
          </button>

          <button className={getButtonClasses("secondary")}>
            Secondary Button
          </button>

          <button className={getButtonClasses("accent-info")}>
            Info Button
          </button>

          <button className={getButtonClasses("accent-success")}>
            Success Button
          </button>

          <button className={getButtonClasses("accent-warning")}>
            Warning Button
          </button>

          <button className={getButtonClasses("accent-error")}>
            Error Button
          </button>

          <button className={getButtonClasses("primary")} disabled>
            Disabled Button
          </button>
        </div>
      </div>

      {/* Form Example */}
      <div className={`${getCardClasses()} p-6 mb-8`}>
        <h2 className="text-fg-neutral-main text-xl font-semibold mb-4">
          Form Elements
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-fg-neutral-main font-medium mb-2">
              Normal Input
            </label>
            <input
              type="text"
              placeholder="Enter some text..."
              className={getInputClasses()}
            />
          </div>

          <div>
            <label className="block text-fg-neutral-main font-medium mb-2">
              Input with Error
            </label>
            <input
              type="text"
              placeholder="This has an error..."
              className={getInputClasses(true)}
            />
            <p className="text-fg-accent-error text-sm mt-1">
              This field has an error
            </p>
          </div>

          <div>
            <label className="block text-fg-neutral-main font-medium mb-2">
              Disabled Input
            </label>
            <input
              type="text"
              placeholder="Disabled input..."
              className={getInputClasses()}
              disabled
            />
          </div>
        </div>
      </div>

      {/* Color Examples */}
      <div className={`${getCardClasses()} p-6 mb-8`}>
        <h2 className="text-fg-neutral-main text-xl font-semibold mb-4">
          Color Examples
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Background colors */}
          <div className="space-y-2">
            <h3 className="text-fg-neutral-main font-medium">Backgrounds</h3>
            <div className="bg-bg-brand-rest p-3 rounded">
              <span className="text-fg-btn-primary text-sm">Brand</span>
            </div>
            <div className="bg-bg-accent-info-rest p-3 rounded">
              <span className="text-fg-white text-sm">Info</span>
            </div>
            <div className="bg-bg-accent-success-rest p-3 rounded">
              <span className="text-fg-white text-sm">Success</span>
            </div>
            <div className="bg-bg-accent-warning-rest p-3 rounded">
              <span className="text-fg-white text-sm">Warning</span>
            </div>
            <div className="bg-bg-accent-error-rest p-3 rounded">
              <span className="text-fg-white text-sm">Error</span>
            </div>
          </div>

          {/* Text colors */}
          <div className="space-y-2">
            <h3 className="text-fg-neutral-main font-medium">Text Colors</h3>
            <p className="text-fg-neutral-main">Main text</p>
            <p className="text-fg-neutral-subtle">Subtle text</p>
            <p className="text-fg-neutral-subtlest">Subtlest text</p>
            <p className="text-fg-neutral-disabled">Disabled text</p>
            <p className="text-fg-brand-rest">Brand text</p>
            <p className="text-fg-accent-info">Info text</p>
            <p className="text-fg-accent-success">Success text</p>
            <p className="text-fg-accent-warning">Warning text</p>
            <p className="text-fg-accent-error">Error text</p>
          </div>

          {/* Accent backgrounds */}
          <div className="space-y-2">
            <h3 className="text-fg-neutral-main font-medium">
              Subtle Backgrounds
            </h3>
            <div className="bg-bg-accent-info-subtle p-3 rounded">
              <span className="text-fg-accent-info text-sm">Info subtle</span>
            </div>
            <div className="bg-bg-accent-success-subtle p-3 rounded">
              <span className="text-fg-accent-success text-sm">
                Success subtle
              </span>
            </div>
            <div className="bg-bg-accent-warning-subtle p-3 rounded">
              <span className="text-fg-accent-warning text-sm">
                Warning subtle
              </span>
            </div>
            <div className="bg-bg-accent-error-subtle p-3 rounded">
              <span className="text-fg-accent-error text-sm">Error subtle</span>
            </div>
          </div>

          {/* Borders */}
          <div className="space-y-2">
            <h3 className="text-fg-neutral-main font-medium">Borders</h3>
            <div className="border border-border-neutral p-3 rounded">
              <span className="text-fg-neutral-main text-sm">
                Normal border
              </span>
            </div>
            <div className="border border-border-active p-3 rounded">
              <span className="text-fg-neutral-main text-sm">
                Active border
              </span>
            </div>
            <div className="border border-border-info p-3 rounded">
              <span className="text-fg-neutral-main text-sm">Info border</span>
            </div>
            <div className="border border-border-error p-3 rounded">
              <span className="text-fg-neutral-main text-sm">Error border</span>
            </div>
          </div>
        </div>
      </div>

      {/* Direct token usage examples */}
      <div className={`${getCardClasses()} p-6`}>
        <h2 className="text-fg-neutral-main text-xl font-semibold mb-4">
          Direct Token Usage
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-fg-neutral-main font-medium mb-2">
              Using helper function:
            </h3>
            <code className="bg-bg-neutral-subtle p-2 rounded text-fg-neutral-main text-sm">
              {`className={getColorClass('fg-neutral-subtle')}`}
            </code>
          </div>

          <div>
            <h3 className="text-fg-neutral-main font-medium mb-2">
              Direct class usage:
            </h3>
            <code className="bg-bg-neutral-subtle p-2 rounded text-fg-neutral-main text-sm">
              {`className="text-fg-neutral-subtle"`}
            </code>
          </div>

          <div>
            <h3 className="text-fg-neutral-main font-medium mb-2">
              Background example:
            </h3>
            <code className="bg-bg-neutral-subtle p-2 rounded text-fg-neutral-main text-sm">
              {`className="bg-bg-card border border-border-card"`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent;
