import { defineCollection, z } from 'astro:content';

const reflections = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    quote: z.string().optional(),
    actionPrompt: z.string().optional(),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['Governance', 'Youth Advocacy', 'Business Ethics']),
  }),
});

export const collections = { reflections, articles };
