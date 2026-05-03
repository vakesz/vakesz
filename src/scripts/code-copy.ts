type CopyLabel = "Copy" | "Copied" | "Failed";

const RESET_DELAY_MS = 1400;
const LABEL_IDLE: CopyLabel = "Copy";
const LABEL_OK: CopyLabel = "Copied";
const LABEL_FAIL: CopyLabel = "Failed";

const win = window as Window & { __codeCopyBound?: boolean };

function readCodeText(button: HTMLButtonElement): string {
  const code = button.closest(".code-block")?.querySelector("pre code");
  return code?.textContent ?? "";
}

function setLabel(button: HTMLButtonElement, label: CopyLabel) {
  button.textContent = label;
}

async function onClick(event: Event) {
  const target = event.target as HTMLElement | null;
  const button = target?.closest<HTMLButtonElement>("button.code-copy");
  if (!button) return;
  event.preventDefault();

  const text = readCodeText(button);
  if (!text) return;

  const original: CopyLabel = (button.dataset.original as CopyLabel) ?? LABEL_IDLE;
  button.dataset.original = original;

  try {
    await navigator.clipboard.writeText(text);
    setLabel(button, LABEL_OK);
    button.classList.add("copied");
  } catch {
    setLabel(button, LABEL_FAIL);
  }

  setTimeout(() => {
    setLabel(button, original);
    button.classList.remove("copied");
  }, RESET_DELAY_MS);
}

if (!win.__codeCopyBound) {
  document.addEventListener("click", onClick);
  win.__codeCopyBound = true;
}
