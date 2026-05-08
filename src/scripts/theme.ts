import { onPageReady } from "./lifecycle";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const TOGGLE_ID = "theme-toggle";
const ARIA_PRESSED = "aria-pressed";

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function otherTheme(theme: Theme): Theme {
  return theme === "dark" ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // private mode / sandboxed
  }
}

function setup() {
  const button = document.getElementById(TOGGLE_ID);
  if (!button) return;
  button.setAttribute(ARIA_PRESSED, currentTheme() === "dark" ? "true" : "false");
  if (button.dataset.themeBound) return;
  button.dataset.themeBound = "1";
  button.addEventListener("click", () => {
    applyTheme(otherTheme(currentTheme()));
    button.setAttribute(ARIA_PRESSED, currentTheme() === "dark" ? "true" : "false");
  });
}

onPageReady(setup);
