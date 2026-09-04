import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/testimonials" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number(),
  }),
});

export const collections = { testimonials };
