import { defineCollection, defineConfig } from '@content-collections/core';

const projects = defineCollection({
	name: 'projects',
	directory: 'src/content/projects',
	include: '**/*.md',
	schema: (z) => ({
		title: z.string(),
		description: z.string(),
		slug: z.string()
	})
});

export default defineConfig({
	collections: [projects]
});
