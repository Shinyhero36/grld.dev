import { fail } from '@sveltejs/kit';
import { allPosts } from 'content-collections';

export async function load({ params }) {
	const slug = params.slug;
	if (!slug) {
		return fail(404, {
			message: 'Project not found'
		});
	}
	const project = allPosts.find((post) => post.slug === slug);
	if (!project) {
		return fail(404, {
			message: 'Project not found'
		});
	}

	const projectMdFile = await import(`$markdown/${slug}.svx`);
	const markdown = projectMdFile.default;

	return { project, markdown };
}
