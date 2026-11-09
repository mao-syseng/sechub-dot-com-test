import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const updates = defineCollection({
  loader: glob({
    base: "./src/content/now",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    category: z.string(),
    tags: z
      .array(
        z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
          message: "Tags must use lowercase letters, numbers, and single hyphens between words.",
        }),
      )
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { updates };
