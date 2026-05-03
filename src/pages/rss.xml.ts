import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { SITE, rssLanguage } from "../consts";
import { isPublished, byPubDateDesc } from "../lib/content";

export async function GET(context: APIContext) {
  const posts = await getCollection("posts", isPublished);

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    items: posts.sort(byPubDateDesc).map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: `<language>${rssLanguage}</language>`,
  });
}
