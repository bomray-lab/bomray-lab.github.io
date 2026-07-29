import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '!**/README*.md'],
    base: './src/content/blog',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.enum(['Jira Guide', 'News', 'Product Update', 'Release Note']),
      lang: z.enum(['en', 'ko']).default('en'),
      slug: z.string().optional(),
      hero: image().optional(),
      keywords: z.array(z.string()).optional(),
      related: z.array(z.string()).optional(),
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          canonical: z.string().optional(),
          robots: z.string().optional(),
          ogImage: image().optional(),
          ogTitle: z.string().optional(),
          ogDescription: z.string().optional(),
        })
        .optional(),
    }),
});

export const collections = { blog };
