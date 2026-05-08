// Header is persisted across SPA swaps so wiring runs once.
// Active-link state is server-rendered per page, so re-apply aria-current
// after every swap.
import { onPageReady } from "./lifecycle";

const MOBILE_QUERY = "(max-width: 720px)";

function bindNav() {
  const btn = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");
  const scrim = document.querySelector<HTMLElement>(".nav-scrim");
  if (!btn || !nav) return;
  if (btn.dataset.navBound) return;
  btn.dataset.navBound = "1";

  const close = () => {
    btn.setAttribute("aria-expanded", "false");
    nav.setAttribute("data-open", "false");
    scrim?.setAttribute("data-open", "false");
    document.documentElement.removeAttribute("data-nav-open");
  };
  const open = () => {
    btn.setAttribute("aria-expanded", "true");
    nav.setAttribute("data-open", "true");
    scrim?.setAttribute("data-open", "true");
    document.documentElement.setAttribute("data-nav-open", "");
  };
  const toggle = () => (btn.getAttribute("aria-expanded") === "true" ? close() : open());

  btn.addEventListener("click", toggle);
  scrim?.addEventListener("click", close);

  nav.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof HTMLElement && target.closest("a")) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  const mq = window.matchMedia(MOBILE_QUERY);
  mq.addEventListener("change", () => {
    if (!mq.matches) close();
  });

  document.addEventListener("astro:before-swap", close);
}

function syncActive() {
  const path = window.location.pathname;
  const links = document.querySelectorAll<HTMLAnchorElement>(".nav-desktop a, #primary-nav a");
  links.forEach((a) => {
    const href = a.getAttribute("href") ?? "";
    const active = href === "/" ? path === "/" : path === href || path.startsWith(href);
    if (active) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
}

bindNav();
onPageReady(syncActive);
