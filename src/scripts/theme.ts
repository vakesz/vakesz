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
    // localStorage may be unavailable (private mode, sandboxed iframe).
  }
  window.dispatchEvent(new CustomEvent<Theme>("themechange", { detail: theme }));
}

const button = document.getElementById(TOGGLE_ID);
if (button) {
  const sync = () => {
    button.setAttribute(ARIA_PRESSED, currentTheme() === "dark" ? "true" : "false");
  };
  sync();
  button.addEventListener("click", () => {
    applyTheme(otherTheme(currentTheme()));
    sync();
  });
}
