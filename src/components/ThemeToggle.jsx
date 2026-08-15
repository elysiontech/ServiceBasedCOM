import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

const STORAGE_KEY = "fourge-theme";

function getStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY); // "dark" | "light" | null (= system)
  } catch {
    return null;
  }
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  if (theme === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.add(prefersDark ? "dark" : "light");
    localStorage.removeItem(STORAGE_KEY);
  } else {
    root.classList.add(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => getStoredTheme() || "system");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (!getStoredTheme()) applyTheme("system");
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  function cycle() {
    const order = ["system", "light", "dark"];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
    applyTheme(next);
  }

  const icon =
    theme === "system" ? <Monitor size={16} /> : theme === "light" ? <Sun size={16} /> : <Moon size={16} />;

  return (
    <button
      onClick={cycle}
      className="w-9 h-9 rounded-full border border-edge flex items-center justify-center text-muted hover:text-text hover:border-violet/50 transition-colors"
      title={`Theme: ${theme} (click to change)`}
      aria-label={`Current theme: ${theme}. Click to change.`}
    >
      {icon}
    </button>
  );
}
