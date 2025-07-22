// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { TokenTestComponent } from "./components/TokenTestComponent";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <TokenTestComponent />

      {/* Original Vite content - you can remove this */}
      {/* <div className="fixed bottom-4 right-4 bg-bg-card border border-border-card rounded-lg p-4 max-w-xs">
        <div className="flex items-center space-x-4 mb-2">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="w-8 h-8" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="w-8 h-8" alt="React logo" />
          </a>
        </div>
        <h2 className="text-fg-neutral-main text-lg font-semibold">
          Vite + React
        </h2>
        <div className="mt-2">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-bg-brand-rest hover:bg-bg-brand-hover text-fg-btn-primary px-3 py-1 rounded transition-colors"
          >
            count is {count}
          </button>
          <p className="text-fg-neutral-subtle text-sm mt-2">
            Edit{" "}
            <code className="bg-bg-neutral-subtle px-1 rounded">
              src/App.tsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>
        <p className="text-fg-neutral-subtlest text-xs mt-2">
          Click on the Vite and React logos to learn more
        </p>
      </div> */}
    </ThemeProvider>
  );
}

export default App;
