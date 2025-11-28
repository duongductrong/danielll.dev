import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeShiki from "@shikijs/rehype";
import { z } from "zod";

const shikiOptions = {
  themes: {
    light: "github-light-default",
    dark: "vesper",
  },
  defaultColor: false,
};

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "*.mdx",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    thumbnail: z.string().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [[rehypeShiki, shikiOptions]],
    });

    return {
      ...document,
      mdx,
    };
  },
});

const pens = defineCollection({
  name: "pens",
  directory: "content/pens",
  include: "*.mdx",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    thumbnail: z.string().optional(),
    icon: z.string().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [[rehypeShiki, shikiOptions]],
    });

    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts, pens],
});
