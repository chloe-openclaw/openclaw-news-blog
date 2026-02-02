import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    author: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { posts };
