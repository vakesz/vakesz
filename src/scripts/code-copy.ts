const RESET_DELAY_MS = 1400;
const DEFAULT_LABEL = "Copy";

function setLabel(button: HTMLButtonElement, label: string) {
  if (button.firstChild) {
    button.firstChild.textContent = label;
  } else {
    button.textContent = label;
  }
}

async function onClick(event: Event) {
  const target = event.target as HTMLElement | null;
  const button = target?.closest<HTMLButtonElement>("button.code-copy");
  if (!button) return;
  event.preventDefault();

  const text = button.closest(".code-block")?.querySelector("pre code")?.textContent ?? "";
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    setLabel(button, "Copied");
    button.classList.add("copied");
  } catch {
    setLabel(button, "Failed");
  }

  setTimeout(() => {
    setLabel(button, DEFAULT_LABEL);
    button.classList.remove("copied");
  }, RESET_DELAY_MS);
}

document.addEventListener("click", onClick);
