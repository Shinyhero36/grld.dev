import { defineCollection, defineConfig } from '@content-collections/core';

const posts = defineCollection({
	name: 'posts',
	directory: 'src/markdown',
	include: '**/*.svx',
	schema: (z) => ({
		title: z.string(),
		summary: z.string(),
		slug: z.string()
	}),
	transform: (data) => ({
		...data,
		slug: data.slug.toLowerCase()
	}),
	onSuccess: (documents) => {
		console.log(`Successfully loaded ${documents.length} posts`);
	}
});

export default defineConfig({
	collections: [posts]
});
