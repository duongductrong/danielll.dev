import { useCallback, useSyncExternalStore } from "react";

export type Theme = "dark" | "amber" | "blue";

const STORAGE_KEY = "theme";
const DEFAULT_THEME: Theme = "dark";
const VALID_THEMES: Array<Theme> = ["dark", "amber", "blue"];

let listeners: Array<() => void> = [];

function getSnapshot(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && VALID_THEMES.includes(stored as Theme)) return stored as Theme;
  return DEFAULT_THEME;
}

function getServerSnapshot(): Theme {
  return DEFAULT_THEME;
}

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function applyTheme(theme: Theme) {
  const html = document.documentElement;
  VALID_THEMES.forEach((t) => html.classList.remove(t));
  html.classList.add(theme);
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((newTheme: Theme) => {
    localStorage.setItem(STORAGE_KEY, newTheme);
    applyTheme(newTheme);
    listeners.forEach((l) => l());
  }, []);

  return { theme, setTheme } as const;
}
