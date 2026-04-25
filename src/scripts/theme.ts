type Theme = "light" | "dark";

function currentTheme(): Theme {
  return (document.documentElement.dataset.theme as Theme) || "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* storage may be unavailable (private mode, etc.) */
  }
  window.dispatchEvent(new CustomEvent("themechange", { detail: theme }));
}

const btn = document.getElementById("theme-toggle");
if (btn) {
  const sync = () => {
    btn.setAttribute("aria-pressed", currentTheme() === "dark" ? "true" : "false");
  };
  sync();
  btn.addEventListener("click", () => {
    applyTheme(currentTheme() === "dark" ? "light" : "dark");
    sync();
  });
}
