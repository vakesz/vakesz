// Re-bind module setup across Astro view-transition swaps. `setup` runs
// immediately and again on every `astro:after-swap`, so freshly inserted
// DOM is wired up before paint. `teardown`, when supplied, fires on
// `astro:before-swap`.
export function onPageReady(setup: () => void, teardown?: () => void): void {
  setup();
  document.addEventListener("astro:after-swap", setup);
  if (teardown) document.addEventListener("astro:before-swap", teardown);
}
