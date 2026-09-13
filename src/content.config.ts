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

const events = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    date: z.string().transform((value) => {
      const [year, month, day] = value.split("-").map(Number);
      return new Date(year, month - 1, day);
    }),
    title: z.string(),
    locale: z.string(),
    url: z.url(),
  }),
});

const mediaMentions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/media-mentions" }),
  schema: z.discriminatedUnion("type", [
    z.object({
      type: z.literal("video"),
      outlet: z.string(),
      title: z.string(),
      videoId: z.string(),
      start: z.number().optional(),
    }),
    z.object({
      type: z.literal("article"),
      outlet: z.string(),
      title: z.string(),
      url: z.string(),
    }),
  ]),
});

export const collections = { testimonials, events, mediaMentions };
