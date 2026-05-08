const RESET_DELAY_MS = 1400;

async function onClick(event: Event) {
  const target = event.target as HTMLElement | null;
  const button = target?.closest<HTMLButtonElement>("button.code-copy");
  if (!button) return;
  event.preventDefault();

  const text = button.closest(".code-block")?.querySelector("pre code")?.textContent ?? "";
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    button.textContent = "Copied";
    button.classList.add("copied");
  } catch {
    button.textContent = "Failed";
  }

  setTimeout(() => {
    button.textContent = "Copy";
    button.classList.remove("copied");
  }, RESET_DELAY_MS);
}

document.addEventListener("click", onClick);
