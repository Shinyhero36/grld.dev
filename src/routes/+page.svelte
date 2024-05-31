<script>
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const projects = [
		{
			title: 'What The Hex ?!',
			description: 'A wordle-like game but instead of words, it’s hex colors.',
			slug: 'what-the-hex'
		},
		{
			title: 'Svote',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
			slug: 'svote'
		}
	];
</script>

<Hero />

<div class="projects">
	{#each projects as project}
		<ProjectCard {...project}>
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
	}
</style>
