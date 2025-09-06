import { z } from "zod";

export const ArticleSchema = z.object({
  id: z.number(),
  title: z.string(),
  think: z.string(),
  date: z.string(),
  tag: z.string(),
  link: z.string(),
});

export type Article = z.infer<typeof ArticleSchema>;

export const ArticlesSchema = z.array(ArticleSchema);
