import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      cover: z
        .object({
          src: z.union([image(), z.url()]),
          alt: z.string(),
          caption: z.string().optional(),
        })
        .optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    repo: z.url().optional(),
    homepage: z.url().optional(),
    stack: z.array(z.string()).default([]),
    pinned: z.boolean().default(false),
    archived: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { posts, projects };
