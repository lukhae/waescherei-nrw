import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const service = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/services" }),
  schema: z.object({
    title:        z.string(),
    icon:         z.string(),
    badge:        z.string().optional().default(""),
    image:        z.string(),
    excerpt:      z.string(),
    price:        z.string(),
    duration:     z.string(),
    schedule:     z.string(),
    features:     z.array(z.string()),
    keyFeatures:  z.array(z.string()),
    includeItems: z.array(z.string()),
    processSteps: z.array(z.object({ num: z.string(), title: z.string(), desc: z.string() })),
    serviceInfo:  z.array(z.object({ icon: z.string(), label: z.string(), value: z.string() })),
    testimonial:  z.object({ text: z.string(), name: z.string(), role: z.string(), avatar: z.string() }),
    faqs:         z.array(z.object({ q: z.string(), a: z.string() })).optional().default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blogs" }),
  schema: z.object({
    title:         z.string(),
    excerpt:       z.string(),
    image:         z.string(),
    category:      z.string(),
    categoryLabel: z.string(),
    date:          z.string(),
    readTime:      z.string(),
    author:        z.string(),
    authorRole:    z.string(),
    avatar:        z.string(),
    tags:          z.array(z.string()).optional().default([]),
    featured:      z.boolean().optional().default(false),
  }),
});

const industry = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/industries" }),
  schema: z.object({
    title:        z.string(),
    excerpt:      z.string(),
    icon:         z.string(),
    badge:        z.string().optional().default(""),
    image:        z.string(),
    servingCount: z.string(),
    metaStats:    z.array(z.object({ icon: z.string(), label: z.string(), value: z.string() })),
    challenges:   z.array(z.string()),
    includeItems: z.array(z.string()),
    infoCard:     z.array(z.object({ icon: z.string(), label: z.string(), value: z.string() })),
    addOns:       z.array(z.object({ icon: z.string(), name: z.string(), freq: z.string() })),
    testimonial:  z.object({ text: z.string(), name: z.string(), role: z.string(), avatar: z.string() }),
  }),
});


const pages = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/pages" }),
  schema: z.object({
    title:       z.string(),
    badge:       z.string().optional().default("Legal"),
    icon:        z.string().optional().default("bi:shield-check"),
    lastUpdated: z.string(),
  }),
});

export const collections = { service, blog, industry, pages };
