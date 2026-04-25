import type { CollectionEntry } from "astro:content";

const buildTime = new Date();

export function isPublished({ data }: CollectionEntry<"posts">): boolean {
  if (!import.meta.env.PROD) return true;
  return !data.draft && data.pubDate <= buildTime;
}

export function byPubDateDesc(a: CollectionEntry<"posts">, b: CollectionEntry<"posts">): number {
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}

export function byPinnedThenOrder(
  a: CollectionEntry<"projects">,
  b: CollectionEntry<"projects">,
): number {
  if (a.data.pinned !== b.data.pinned) return a.data.pinned ? -1 : 1;
  return a.data.order - b.data.order;
}

export function tagSlug(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, "-");
}
