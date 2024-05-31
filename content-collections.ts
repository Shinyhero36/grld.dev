import { defineCollection, defineConfig } from '@content-collections/core';

const posts = defineCollection({
	name: 'posts',
	directory: 'src/markdown',
	include: '**/*.svx',
	schema: (z) => ({
		title: z.string(),
		summary: z.string(),
		slug: z.string(),
		commingSoon: z.boolean().default(false)
	})
});

export default defineConfig({
	collections: [posts]
});
