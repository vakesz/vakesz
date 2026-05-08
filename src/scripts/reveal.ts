// Re-runs on after-swap so freshly inserted .reveal nodes are observed
// before paint, not on the later page-load tick.
import { onPageReady } from "./lifecycle";

let observer: IntersectionObserver | null = null;

function setup() {
  observer?.disconnect();
  observer = null;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll<HTMLElement>(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const next = new IntersectionObserver(
    (entries, self) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          self.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );
  observer = next;
  targets.forEach((el) => next.observe(el));
}

onPageReady(setup);
