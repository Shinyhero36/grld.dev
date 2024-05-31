<script>
	import { allPosts } from 'content-collections';

	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<Hero />

<div class="projects">
	{#each allPosts as project}
		<ProjectCard title={project.title} description={project.summary} slug={project.slug}>
			<div style="height: 150px;"></div>
		</ProjectCard>
	{/each}
</div>

<Footer />

<style lang="scss">
	.projects {
		display: grid;
		grid-auto-rows: minmax(0, 1fr);
		grid-template-columns: repeat(5, minmax(auto, 1fr));

		max-width: 1200px;
		margin: var(--spacing-4xl) auto;

		gap: var(--spacing-3xl);

		:global(> :nth-child(1)) {
			grid-column: auto / span 2;
		}

		:global(> :nth-child(2)) {
			grid-column: auto / span 3;
		}

		:global(> :nth-child(3)) {
			grid-column: auto / span 3;
			grid-row: auto / span 2;
		}

		:global(> :nth-child(4)) {
			grid-column: auto / span 2;
		}

		:global(> :nth-child(5)) {
			grid-column: auto / span 2;
		}
	}
</style>
