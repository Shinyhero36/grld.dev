<script lang="ts">
	interface Props {
		title: string;
		description: string;

		children?: any;
	}

	const { title, description, children }: Props = $props();
</script>

<div class="project-card">
	<!-- Preview -->
	{#if children}
		{@render children()}
	{/if}
	<!-- Content -->
	<div class="info">
		<h3 class="text-xl">{title}</h3>
		<p>{description}</p>
	</div>
</div>

<style lang="scss">
	.project-card {
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
		border-radius: var(--rounded-2xl);

		background-color: var(--bg-component-subtle-neutral);
	}

	// Hover effect for svote
	:global(.project-card:hover > .preview > .poll1) {
		transition: transform 150ms ease-in-out;
		transform: translate(calc(10% - 15px), 25%) rotate(-5deg);
	}
	:global(.project-card:hover > .preview > .poll2) {
		transition: transform 150ms ease-in;
		transform: translate(calc(10% + 45px), calc(25% + 75px)) rotate(-2.5deg);
	}

	.project-card > .info {
		padding: var(--spacing-3xl);
		z-index: 10;
	}

	.project-card > .info > p {
		color: var(--text-subtle-neutral);
	}
</style>
