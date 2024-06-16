<script lang="ts">
	import { allPosts } from 'content-collections';

	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProjectCard from '$lib/components/Project/ProjectCard.svelte';
	import PollProjectPreview from '$lib/components/Project/PollProjectPreview.svelte';
</script>

<Hero />

<div class="projects">
	{#each allPosts as project}
		<ProjectCard title={project.title} description={project.summary}>
			{#if project.slug === 'svote'}
				<PollProjectPreview />
			{:else}{/if}
		</ProjectCard>
	{/each}
</div>

<Footer />

<style lang="scss">
	.projects {
		display: grid;
		grid-auto-rows: minmax(0, 1fr);
		grid-template-columns: repeat(3, minmax(auto, 1fr));
		grid-auto-rows: 360px;

		max-width: 1100px;
		margin: var(--spacing-4xl) auto;

		gap: var(--spacing-3xl);

		:global(> :nth-child(1)) {
			grid-column: auto / span 1;

			@media screen and (max-width: 1024px) {
				grid-column: auto / span 3;
			}
		}
	}
</style>
