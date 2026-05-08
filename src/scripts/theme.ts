import { onPageReady } from "./lifecycle";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const TOGGLE_ID = "theme-toggle";

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // private mode / sandboxed
  }
}

function syncPressed(button: Element) {
  button.setAttribute("aria-pressed", currentTheme() === "dark" ? "true" : "false");
}

function setup() {
  const button = document.getElementById(TOGGLE_ID);
  if (!button) return;
  syncPressed(button);
  if (button.dataset.themeBound) return;
  button.dataset.themeBound = "1";
  button.addEventListener("click", () => {
    applyTheme(currentTheme() === "dark" ? "light" : "dark");
    syncPressed(button);
  });
}

onPageReady(setup);
